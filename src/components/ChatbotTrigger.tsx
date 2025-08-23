import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';
import AIChatbot from './AIChatbot';

const ChatbotTrigger: React.FC = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenBefore = sessionStorage.getItem('chatbot-popup-shown');
    
    if (!hasSeenBefore) {
      // Show trigger after 1 minute (60000ms)
      const timer = setTimeout(() => {
        setShowTrigger(true);
        setHasSeenPopup(true);
        sessionStorage.setItem('chatbot-popup-shown', 'true');
      }, 60000);

      return () => clearTimeout(timer);
    } else {
      // If they've seen it before, just show the floating button immediately
      setShowTrigger(true);
    }
  }, []);

  const openChatbot = () => {
    setShowChatbot(true);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  const dismissTrigger = () => {
    setShowTrigger(false);
    // Set a flag that they dismissed it for this session
    sessionStorage.setItem('chatbot-dismissed', 'true');
  };

  // Don't show trigger if it was dismissed
  const wasDismissed = sessionStorage.getItem('chatbot-dismissed');
  if (wasDismissed && !showChatbot) {
    return null;
  }

  return (
    <>
      {showTrigger && !showChatbot && (
        <div className="fixed bottom-6 right-6 z-40">
          {!hasSeenPopup ? (
            // First time popup with animation
            <div className="relative">
              <div className="absolute -top-24 -left-32 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg max-w-xs animate-bounce">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium mb-1">👋 Hello there!</p>
                    <p className="text-xs opacity-90">
                      Need help finding the perfect lab solution? Chat with our AI assistant!
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={dismissTrigger}
                    className="text-primary-foreground hover:bg-primary-foreground/20 h-6 w-6 p-0 ml-2"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary"></div>
              </div>
              
              <Button
                onClick={openChatbot}
                className="rounded-full h-14 w-14 shadow-2xl hover:scale-110 transition-all duration-300 bg-primary hover:bg-primary/90"
              >
                <MessageCircle className="h-6 w-6" />
              </Button>
            </div>
          ) : (
            // Regular floating button
            <Button
              onClick={openChatbot}
              className="rounded-full h-14 w-14 shadow-2xl hover:scale-110 transition-all duration-300 bg-primary hover:bg-primary/90"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          )}
        </div>
      )}

      <AIChatbot isOpen={showChatbot} onClose={closeChatbot} />
    </>
  );
};

export default ChatbotTrigger;