import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatbotProps {
  onClose: () => void;
  isOpen: boolean;
}

const AIChatbot: React.FC<ChatbotProps> = ({ onClose, isOpen }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId] = useState(() => crypto.randomUUID());
  const [isCompleted, setIsCompleted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Start conversation with greeting
      sendMessage('Hello', true);
    }
  }, [isOpen]);

  const sendMessage = async (message: string, isInitial = false) => {
    if (!message.trim() && !isInitial) return;

    const userMessage: Message = {
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };

    if (!isInitial) {
      setMessages(prev => [...prev, userMessage]);
    }
    setInputValue('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-chatbot', {
        body: {
          message: message,
          conversationId: conversationId
        }
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date().toISOString()
      };

      if (isInitial) {
        setMessages([assistantMessage]);
      } else {
        setMessages(prev => [...prev, assistantMessage]);
      }

      if (data.completed) {
        setIsCompleted(true);
        toast({
          title: "Thank you! 🎉",
          description: "Our team will contact you soon with personalized recommendations.",
        });
      }

    } catch (error: any) {
      console.error('Error sending message:', error);
      
      // Handle specific error types
      let errorTitle = "Oops! Something went wrong";
      let errorDescription = "Please try again or contact us directly.";
      
      if (error?.message) {
        if (error.message.includes('quota') || error.message.includes('429')) {
          errorTitle = "Service Temporarily Unavailable";
          errorDescription = "Our AI service is temporarily busy. Please try the WhatsApp chat below or contact us directly.";
        } else if (error.message.includes('OpenAI')) {
          errorTitle = "AI Service Issue";
          errorDescription = "Our AI service is experiencing issues. Please use WhatsApp chat or contact us directly.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorTitle = "Connection Issue";
          errorDescription = "Please check your internet connection and try again.";
        }
      }
      
      toast({
        title: errorTitle,
        description: errorDescription,
        variant: "destructive",
      });
      
      // If there's a quota error, show a fallback message in the chat
      if (error?.message?.includes('quota') || error?.message?.includes('429')) {
        const fallbackMessage: Message = {
          role: 'assistant',
          content: "I'm currently experiencing high demand. Please use our WhatsApp chat button below to connect with our team directly, or contact us at your convenience. We'll be happy to help!",
          timestamp: new Date().toISOString()
        };
        
        if (isInitial) {
          setMessages([fallbackMessage]);
        } else {
          setMessages(prev => [...prev, fallbackMessage]);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCompleted) {
      sendMessage(inputValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md h-[600px] flex flex-col shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary-foreground text-primary">
                <Bot className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">SkyySkill AI Assistant</CardTitle>
              <p className="text-sm text-primary-foreground/80">Here to help you find the perfect solution</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[85%] ${
                      message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <Avatar className="h-6 w-6 mt-1">
                      <AvatarFallback className={`${
                        message.role === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {message.role === 'user' ? (
                          <User className="h-3 w-3" />
                        ) : (
                          <Bot className="h-3 w-3" />
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <Avatar className="h-6 w-6 mt-1">
                      <AvatarFallback className="bg-muted text-muted-foreground">
                        <Bot className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {!isCompleted && (
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading || !inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}

          {isCompleted && (
            <div className="p-4 border-t bg-muted/30">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  🎉 Thank you for your interest! Our team will be in touch soon.
                </p>
                <Button onClick={onClose} variant="outline" size="sm">
                  Close Chat
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatbot;