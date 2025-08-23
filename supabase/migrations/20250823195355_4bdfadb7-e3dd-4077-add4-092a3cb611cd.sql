-- Create table for chatbot leads
CREATE TABLE IF NOT EXISTS public.chatbot_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID NOT NULL DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT,
  phone TEXT,
  inquiry_type TEXT, -- 'course' or 'lab_equipment'
  organization_type TEXT, -- 'college' or 'company'
  profession TEXT,
  department TEXT,
  conversation_data JSONB DEFAULT '[]',
  status TEXT DEFAULT 'active',
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.chatbot_leads ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can create chatbot leads" 
ON public.chatbot_leads 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update their own conversation" 
ON public.chatbot_leads 
FOR UPDATE 
USING (true);

CREATE POLICY "Authenticated users can view chatbot leads" 
ON public.chatbot_leads 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_chatbot_leads_updated_at
BEFORE UPDATE ON public.chatbot_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();