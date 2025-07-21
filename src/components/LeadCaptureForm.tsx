import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Download, FileText, Building2, Users, Award, Zap } from "lucide-react";

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
    labType: "",
    requirement: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const downloadBrochure = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNCAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKNzIgNzIwIFRkCihTa3l5U2tpbGwgTGFicyBCcm9jaHVyZSkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCjAwMDAwMDAyMDcgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA1Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgozMDEKJSVFT0Y=';
    link.download = 'SkyySkill-Labs-Brochure.pdf';
    link.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save lead data to Supabase
      const { error } = await supabase
        .from('test_users')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            location: formData.institution,
          }
        ]);

      if (error) {
        throw error;
      }
      
      toast({
        title: "Success!",
        description: type === "brochure" 
          ? "Your information has been saved. Downloading brochure now..."
          : type === "demo"
          ? "Demo request submitted. Our team will contact you soon to schedule."
          : type === "specs"
          ? "Specifications document has been sent to your email."
          : "Your quotation request has been submitted. We'll contact you soon.",
      });

      // Download brochure if requested
      if (type === "brochure") {
        setTimeout(() => {
          downloadBrochure();
        }, 1000);
      }

      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        labType: "",
        requirement: ""
      });
      setOpen(false);

    } catch (error) {
      console.error('Error saving lead:', error);
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

            <form onSubmit={handleSubmit} className="space-y-4">
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="labType" className="text-sm font-medium">Lab Type of Interest</Label>
                <Select value={formData.labType} onValueChange={(value) => handleSelectChange('labType', value)}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select lab type you're interested in" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic EV Lab</SelectItem>
                    <SelectItem value="intermediate">Intermediate EV Lab</SelectItem>
                    <SelectItem value="advanced">Advanced EV Lab</SelectItem>
                    <SelectItem value="addon">Add-on Modules</SelectItem>
                    <SelectItem value="custom">Custom Requirements</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirement" className="text-sm font-medium">Additional Requirements</Label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific requirements..."
                  rows={3}
                  className="resize-none"
                />
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