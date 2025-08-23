import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

interface ChatbotState {
  step: string;
  data: {
    name?: string;
    inquiry_type?: string;
    organization_type?: string;
    profession?: string;
    department?: string;
    phone?: string;
    email?: string;
  };
}

const conversationSteps = {
  GREETING: 'greeting',
  INQUIRY_TYPE: 'inquiry_type',
  ORGANIZATION_TYPE: 'organization_type',
  PROFESSION: 'profession',
  DEPARTMENT: 'department',
  CONTACT_INFO: 'contact_info',
  COMPLETED: 'completed'
};

const generateSystemPrompt = (state: ChatbotState) => {
  const { step, data } = state;
  
  const basePrompt = `You are an AI assistant for SkyySkill Labs, a company that provides cutting-edge lab equipment and training courses for engineering colleges and companies. You are helpful, professional, yet casual and friendly. Your goal is to collect lead information from potential customers.

Current conversation step: ${step}

IMPORTANT RULES:
1. Keep responses short, conversational, and engaging (2-3 sentences max)
2. Be friendly but professional
3. Ask only ONE question at a time
4. Don't repeat information already collected
5. Use emojis sparingly and appropriately
6. Don't be overly salesy - focus on helping the user`;

  switch (step) {
    case conversationSteps.GREETING:
      return `${basePrompt}

Start with a warm greeting and introduce yourself as SkyySkill Labs' AI assistant. Ask what they're looking for today.`;

    case conversationSteps.INQUIRY_TYPE:
      return `${basePrompt}

The user has shown interest. Now ask them to choose between:
- Training courses for students/professionals
- Lab equipment for their institution

Be casual and offer these as clear options.`;

    case conversationSteps.ORGANIZATION_TYPE:
      return `${basePrompt}

User is interested in: ${data.inquiry_type}
Now ask if they're from a college/university or a company. Keep it simple and friendly.`;

    case conversationSteps.PROFESSION:
      return `${basePrompt}

User details so far:
- Interest: ${data.inquiry_type}
- Organization: ${data.organization_type}

Ask about their role/profession in a conversational way.`;

    case conversationSteps.DEPARTMENT:
      return `${basePrompt}

User details so far:
- Interest: ${data.inquiry_type}
- Organization: ${data.organization_type}
- Profession: ${data.profession}

Ask which department they're from or which technical domain they're interested in.`;

    case conversationSteps.CONTACT_INFO:
      return `${basePrompt}

User details collected:
- Interest: ${data.inquiry_type}
- Organization: ${data.organization_type}
- Profession: ${data.profession}
- Department: ${data.department}

Now politely ask for their contact information (mobile number and email) so your team can reach out with personalized recommendations.`;

    case conversationSteps.COMPLETED:
      return `${basePrompt}

All information has been collected. Thank them warmly and let them know the SkyySkill team will be in touch soon with customized solutions.`;

    default:
      return basePrompt;
  }
};

const extractInfoFromMessage = (message: string, step: string) => {
  const lowerMessage = message.toLowerCase();
  
  switch (step) {
    case conversationSteps.INQUIRY_TYPE:
      if (lowerMessage.includes('course') || lowerMessage.includes('training') || lowerMessage.includes('learn')) {
        return 'courses';
      } else if (lowerMessage.includes('equipment') || lowerMessage.includes('lab') || lowerMessage.includes('setup')) {
        return 'lab_equipment';
      }
      break;
      
    case conversationSteps.ORGANIZATION_TYPE:
      if (lowerMessage.includes('college') || lowerMessage.includes('university') || lowerMessage.includes('academic')) {
        return 'college';
      } else if (lowerMessage.includes('company') || lowerMessage.includes('corporate') || lowerMessage.includes('business')) {
        return 'company';
      }
      break;
      
    case conversationSteps.CONTACT_INFO:
      // Extract email
      const emailMatch = message.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      // Extract phone (Indian format)
      const phoneMatch = message.match(/[\+]?[0-9\s\-\(\)]{8,15}/);
      
      return {
        email: emailMatch ? emailMatch[0] : null,
        phone: phoneMatch ? phoneMatch[0].replace(/\s|-|\(|\)/g, '') : null
      };
  }
  
  return message.trim();
};

const getNextStep = (currentStep: string, hasRequiredInfo: boolean) => {
  if (!hasRequiredInfo) return currentStep;
  
  switch (currentStep) {
    case conversationSteps.GREETING:
      return conversationSteps.INQUIRY_TYPE;
    case conversationSteps.INQUIRY_TYPE:
      return conversationSteps.ORGANIZATION_TYPE;
    case conversationSteps.ORGANIZATION_TYPE:
      return conversationSteps.PROFESSION;
    case conversationSteps.PROFESSION:
      return conversationSteps.DEPARTMENT;
    case conversationSteps.DEPARTMENT:
      return conversationSteps.CONTACT_INFO;
    case conversationSteps.CONTACT_INFO:
      return conversationSteps.COMPLETED;
    default:
      return conversationSteps.COMPLETED;
  }
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationId } = await req.json();
    console.log('Received message:', message, 'Conversation ID:', conversationId);

    if (!message || !conversationId) {
      throw new Error('Message and conversation ID are required');
    }

    // Get or create conversation state
    let { data: existingLead, error } = await supabase
      .from('chatbot_leads')
      .select('*')
      .eq('conversation_id', conversationId)
      .single();

    let currentState: ChatbotState;
    let leadId: string;

    if (existingLead) {
      leadId = existingLead.id;
      currentState = {
        step: existingLead.status || conversationSteps.GREETING,
        data: {
          name: existingLead.name,
          inquiry_type: existingLead.inquiry_type,
          organization_type: existingLead.organization_type,
          profession: existingLead.profession,
          department: existingLead.department,
          phone: existingLead.phone,
          email: existingLead.email,
        }
      };
    } else {
      // Create new lead
      const { data: newLead, error: createError } = await supabase
        .from('chatbot_leads')
        .insert({
          conversation_id: conversationId,
          status: conversationSteps.GREETING,
          conversation_data: []
        })
        .select()
        .single();

      if (createError) throw createError;
      
      leadId = newLead.id;
      currentState = {
        step: conversationSteps.GREETING,
        data: {}
      };
    }

    // Extract information from user message
    const extractedInfo = extractInfoFromMessage(message, currentState.step);
    let updatedData = { ...currentState.data };
    let hasRequiredInfo = false;

    // Update data based on current step
    switch (currentState.step) {
      case conversationSteps.INQUIRY_TYPE:
        if (typeof extractedInfo === 'string' && (extractedInfo === 'courses' || extractedInfo === 'lab_equipment')) {
          updatedData.inquiry_type = extractedInfo;
          hasRequiredInfo = true;
        }
        break;
        
      case conversationSteps.ORGANIZATION_TYPE:
        if (typeof extractedInfo === 'string' && (extractedInfo === 'college' || extractedInfo === 'company')) {
          updatedData.organization_type = extractedInfo;
          hasRequiredInfo = true;
        }
        break;
        
      case conversationSteps.PROFESSION:
        if (typeof extractedInfo === 'string' && extractedInfo.length > 0) {
          updatedData.profession = extractedInfo;
          hasRequiredInfo = true;
        }
        break;
        
      case conversationSteps.DEPARTMENT:
        if (typeof extractedInfo === 'string' && extractedInfo.length > 0) {
          updatedData.department = extractedInfo;
          hasRequiredInfo = true;
        }
        break;
        
      case conversationSteps.CONTACT_INFO:
        if (typeof extractedInfo === 'object' && extractedInfo !== null) {
          if (extractedInfo.email) updatedData.email = extractedInfo.email;
          if (extractedInfo.phone) updatedData.phone = extractedInfo.phone;
          hasRequiredInfo = updatedData.email && updatedData.phone;
        }
        break;
        
      case conversationSteps.GREETING:
        hasRequiredInfo = true; // Always move from greeting
        break;
    }

    // Determine next step
    const nextStep = getNextStep(currentState.step, hasRequiredInfo);
    const newState = {
      step: nextStep,
      data: updatedData
    };

    // Generate AI response
    const systemPrompt = generateSystemPrompt(newState);
    console.log('System prompt:', systemPrompt);

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 150,
        temperature: 0.7
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API Error:', response.status, errorText);
      throw new Error(`OpenAI API Error: ${response.status} - ${errorText}`);
    }

    const aiData = await response.json();
    console.log('OpenAI API Response:', JSON.stringify(aiData, null, 2));
    
    if (!aiData.choices || aiData.choices.length === 0) {
      console.error('No choices in OpenAI response:', aiData);
      throw new Error('No response choices from OpenAI API');
    }
    
    const aiResponse = aiData.choices[0].message?.content;
    
    if (!aiResponse) {
      console.error('Empty or missing content in OpenAI response:', aiData.choices[0]);
      throw new Error('Empty response from OpenAI API');
    }

    // Update conversation in database
    const conversationData = existingLead?.conversation_data || [];
    conversationData.push(
      { role: 'user', content: message, timestamp: new Date().toISOString() },
      { role: 'assistant', content: aiResponse, timestamp: new Date().toISOString() }
    );

    const updateData = {
      status: nextStep,
      conversation_data: conversationData,
      completed: nextStep === conversationSteps.COMPLETED,
      ...(updatedData.inquiry_type && { inquiry_type: updatedData.inquiry_type }),
      ...(updatedData.organization_type && { organization_type: updatedData.organization_type }),
      ...(updatedData.profession && { profession: updatedData.profession }),
      ...(updatedData.department && { department: updatedData.department }),
      ...(updatedData.phone && { phone: updatedData.phone }),
      ...(updatedData.email && { email: updatedData.email }),
    };

    const { error: updateError } = await supabase
      .from('chatbot_leads')
      .update(updateData)
      .eq('id', leadId);

    if (updateError) {
      console.error('Error updating lead:', updateError);
    }

    console.log('AI Response:', aiResponse);
    console.log('Next step:', nextStep);
    console.log('Updated data:', updatedData);

    return new Response(JSON.stringify({ 
      response: aiResponse,
      step: nextStep,
      completed: nextStep === conversationSteps.COMPLETED
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-chatbot function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});