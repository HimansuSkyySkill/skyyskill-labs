import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [callFormData, setCallFormData] = useState({
    name: "",
    mobile: "+91 ",
    lookingFor: ""
  });
  const [whatsappFormData, setWhatsappFormData] = useState({
    name: "",
    mobile: "+91 ",
    lookingFor: ""
  });
  const [isCallSubmitting, setIsCallSubmitting] = useState(false);
  const [isWhatsappSubmitting, setIsWhatsappSubmitting] = useState(false);
  const [isCallDialogOpen, setIsCallDialogOpen] = useState(false);
  const [isWhatsappDialogOpen, setIsWhatsappDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (formType: 'call' | 'whatsapp', field: string, value: string) => {
    if (field === 'mobile') {
      // Ensure it starts with +91 and only contains numbers, spaces, and +
      if (value === '' || (value.startsWith('+91') && /^[\+\d\s]+$/.test(value))) {
        if (formType === 'call') {
          setCallFormData(prev => ({ ...prev, [field]: value }));
        } else {
          setWhatsappFormData(prev => ({ ...prev, [field]: value }));
        }
      }
    } else {
      if (formType === 'call') {
        setCallFormData(prev => ({ ...prev, [field]: value }));
      } else {
        setWhatsappFormData(prev => ({ ...prev, [field]: value }));
      }
    }
  };

  const handleCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCallSubmitting(true);

    try {
      // Save lead data to Supabase
      const { error } = await supabase
        .from('test_users')
        .insert([
          {
            name: callFormData.name,
            email: "", // Not required for call leads
            phone: callFormData.mobile,
            "Additional Requirements": [`Call Lead - Looking for: ${callFormData.lookingFor}`]
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Request Submitted!",
        description: "Connecting you to our team...",
      });

      // Close dialog and connect to phone
      setIsCallDialogOpen(false);
      window.open(`tel:+919237378472`, '_self');

      // Reset form
      setCallFormData({
        name: "",
        mobile: "+91 ",
        lookingFor: ""
      });
    } catch (error) {
      console.error('Error saving call lead:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCallSubmitting(false);
    }
  };

  const handleWhatsappSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsWhatsappSubmitting(true);

    try {
      // Save lead data to Supabase
      const { error } = await supabase
        .from('test_users')
        .insert([
          {
            name: whatsappFormData.name,
            email: "", // Not required for WhatsApp leads
            phone: whatsappFormData.mobile,
            "Additional Requirements": [`WhatsApp Lead - Looking for: ${whatsappFormData.lookingFor}`]
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Request Submitted!",
        description: "Connecting you to WhatsApp...",
      });

      // Close dialog and connect to WhatsApp
      setIsWhatsappDialogOpen(false);
      window.open('https://wa.link/gpy2hr', '_blank');

      // Reset form
      setWhatsappFormData({
        name: "",
        mobile: "+91 ",
        lookingFor: ""
      });
    } catch (error) {
      console.error('Error saving WhatsApp lead:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsWhatsappSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Call Button */}
      <Dialog open={isCallDialogOpen} onOpenChange={setIsCallDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-20 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/20 backdrop-blur-sm animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"
            size="icon"
          >
            <Phone className="w-6 h-6 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Request a Call Back
            </DialogTitle>
            <DialogDescription>
              Fill in your details and we'll connect you to our team
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCallSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="call-name">Name *</Label>
              <Input
                id="call-name"
                value={callFormData.name}
                onChange={(e) => handleInputChange('call', 'name', e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-mobile">Mobile Number *</Label>
              <Input
                id="call-mobile"
                value={callFormData.mobile}
                onChange={(e) => handleInputChange('call', 'mobile', e.target.value)}
                placeholder="+91 9876543210"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-looking">Looking For *</Label>
              <Select value={callFormData.lookingFor} onValueChange={(value) => handleInputChange('call', 'lookingFor', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="course">Course</SelectItem>
                  <SelectItem value="lab">Lab Setup</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isCallSubmitting}>
              {isCallSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Connecting...
                </div>
              ) : (
                <>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Floating WhatsApp Button */}
      <Dialog open={isWhatsappDialogOpen} onOpenChange={setIsWhatsappDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-4 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white/20 backdrop-blur-sm animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"
            size="icon"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-500" />
              Connect on WhatsApp
            </DialogTitle>
            <DialogDescription>
              Fill in your details and we'll connect you on WhatsApp
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleWhatsappSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wa-name">Name *</Label>
              <Input
                id="wa-name"
                value={whatsappFormData.name}
                onChange={(e) => handleInputChange('whatsapp', 'name', e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wa-mobile">Mobile Number *</Label>
              <Input
                id="wa-mobile"
                value={whatsappFormData.mobile}
                onChange={(e) => handleInputChange('whatsapp', 'mobile', e.target.value)}
                placeholder="+91 9876543210"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wa-looking">Looking For *</Label>
              <Select value={whatsappFormData.lookingFor} onValueChange={(value) => handleInputChange('whatsapp', 'lookingFor', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="course">Course</SelectItem>
                  <SelectItem value="lab">Lab Setup</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isWhatsappSubmitting}>
              {isWhatsappSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Connecting...
                </div>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Now
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingButtons;