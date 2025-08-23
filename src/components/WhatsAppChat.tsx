import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const openWhatsApp = () => {
    // SkyySkill Labs WhatsApp number - replace with actual number
    const phoneNumber = "919237378472"; // Remove spaces and country code formatting
    const message = encodeURIComponent("Hi! I'm interested in SkyySkill Labs solutions. Could you please help me?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-30">
      <div className="relative">
        {showTooltip && (
          <div className="absolute -top-16 -left-32 bg-green-600 text-white p-3 rounded-lg shadow-lg max-w-xs animate-bounce">
            <div className="text-sm font-medium">
              💬 Chat with us on WhatsApp!
            </div>
            <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-green-600"></div>
          </div>
        )}
        
        <Button
          onClick={openWhatsApp}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="rounded-full h-14 w-14 shadow-2xl hover:scale-110 transition-all duration-300 bg-green-500 hover:bg-green-600 text-white"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppChat;