import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText, X, Building2, Users, Award, Zap } from "lucide-react";

interface LeadCaptureFormProps {
  trigger: React.ReactNode;
  type: "brochure" | "quotation" | "demo" | "specs";
}

export const LeadCaptureForm = ({ trigger, type }: LeadCaptureFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    designation: "",
    department: "",
    requirement: "",
    sendUpdates: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: type === "brochure" 
          ? "Brochure download link has been sent to your email."
          : type === "demo"
          ? "Demo request submitted. Our team will contact you soon to schedule."
          : type === "specs"
          ? "Specifications document has been sent to your email."
          : "Your quotation request has been submitted. We'll contact you soon.",
      });

      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        designation: "",
        department: "",
        requirement: "",
        sendUpdates: false
      });
      setOpen(false);

      // Simulate brochure download
      if (type === "brochure") {
        // In a real app, this would trigger the actual PDF download
        console.log("Triggering brochure download...");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden p-0">
        <div className="flex h-full">
          {/* Left Side - Hero Image & Benefits */}
          <div className="hidden md:flex w-1/2 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop&crop=center')] bg-cover bg-center opacity-20" />
            
            <div className="relative z-10 p-8 flex flex-col justify-center text-white">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/43ea47b3-d839-4e69-9efe-a88a36777bbe.png" 
                  alt="SkyySkill Labs" 
                  className="h-12 mb-4" 
                />
                <h3 className="text-2xl font-bold mb-2">
                  Transform Your Institution
                </h3>
                <p className="text-white/90 mb-6">
                  Join 150+ institutions who trust SkyySkill Labs for next-gen lab solutions
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm">ASDC Approved Lab Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-sm">10,000+ Students Trained</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm">IIT/NIT Partner Network</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Complete Setup & Training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto">
            <DialogHeader className="mb-6">
              <DialogTitle className="flex items-center gap-2 text-xl">
                {type === "brochure" ? <Download className="w-5 h-5 text-primary" /> : <FileText className="w-5 h-5 text-primary" />}
                {type === "brochure" 
                  ? "Download Lab Brochure" 
                  : type === "demo"
                  ? "Request Lab Demo"
                  : type === "specs"
                  ? "Download Specifications"
                  : "Request Quotation"}
              </DialogTitle>
              <DialogDescription className="text-base">
                {type === "brochure" 
                  ? "Get our comprehensive lab solutions brochure sent directly to your email."
                  : type === "demo"
                  ? "Schedule a live demonstration of our lab equipment and solutions."
                  : type === "specs"
                  ? "Get detailed technical specifications for our lab products."
                  : "Get a customized quotation for your lab requirements."
                }
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@domain.com"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation" className="text-sm font-medium">Designation</Label>
                  <Input
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="Professor, Lab Manager, etc."
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-sm font-medium">Institution / Company *</Label>
                  <Input
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    placeholder="College/University/Company"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-medium">Department</Label>
                  <Input
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="Engineering, Science, etc."
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirement" className="text-sm font-medium">Requirement / Notes</Label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific lab requirements..."
                  rows={3}
                  className="resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="sendUpdates"
                  checked={formData.sendUpdates}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, sendUpdates: checked as boolean }))
                  }
                  className="mt-1"
                />
                <Label htmlFor="sendUpdates" className="text-sm leading-5 cursor-pointer">
                  Send me updates about new lab products and solutions
                </Label>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6">
                <Button type="button" variant="outline" onClick={() => setOpen(false)} className="order-2 sm:order-1">
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="order-1 sm:order-2 bg-primary hover:bg-primary/90 text-white"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    <>
                      {type === "brochure" ? <Download className="w-4 h-4 mr-2" /> : <FileText className="w-4 h-4 mr-2" />}
                      {type === "brochure" ? "Download Brochure" :
                       type === "demo" ? "Request Demo" :
                       type === "specs" ? "Download Specs" :
                       "Request Quotation"}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};