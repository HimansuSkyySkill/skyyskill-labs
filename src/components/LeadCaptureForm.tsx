import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Download, FileText, Building2, Users, Award, Zap, ChevronLeft, ChevronRight } from "lucide-react";

interface LeadCaptureFormProps {
  trigger: React.ReactNode;
  type: "brochure" | "quotation" | "demo" | "specs";
}

export const LeadCaptureForm = ({ trigger, type }: LeadCaptureFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    institution: "",
    labType: "",
    requirement: ""
  });
  const { toast } = useToast();

  // Product and CoE images for carousel
  const carouselImages = [
    "/lovable-uploads/b48fcac1-d0ad-4aec-adbc-401fa917550b.png",
    "/lovable-uploads/dc658b78-c0dd-4dd1-8f39-534852081ad1.png",
    "/lovable-uploads/244efa9e-eee2-4439-bf56-4bae9864c2da.png",
    "/lovable-uploads/b155b82c-93c9-4fd8-ab42-e76e0a4773d0.png",
    "/lovable-uploads/d4193b1d-d53b-4176-b40c-89d37945c89a.png",
    "/lovable-uploads/ec2b7cbe-034d-44cb-8df6-bad5b5b519dd.png"
  ];

  // Auto-scroll carousel
  useEffect(() => {
    if (open && type === "quotation") {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [open, type, carouselImages.length]);

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
        phone: "+91 ",
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
          {/* Left Side - Carousel & Benefits for Quotation, Hero Image for others */}
          <div className="hidden md:flex w-1/2 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
            {type === "quotation" ? (
              // Quotation popup with text at top and rectangular image holder at bottom
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
                
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Text Content at Top */}
                  <div className="flex-1 flex flex-col justify-center text-white">
                    <div className="mb-6">
                      <img 
                        src="/lovable-uploads/8e3b68c3-b813-48fb-900d-39f73318a10e.png" 
                        alt="SkyySkill Labs" 
                        className="h-12 mb-4" 
                      />
                      <h3 className="text-2xl font-bold mb-2">
                        High-End Research Labs
                      </h3>
                      <p className="text-white/90 mb-6">
                        We serve ITI to IITs - Trusted by 500+ institutions across India
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm">ASDC Approved Labs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4" />
                        </div>
                        <span className="text-sm">AICTE, NCVET Compliant Labs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="text-sm">30,000+ Students Trained Annually</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4" />
                        </div>
                        <span className="text-sm">Complete Setup & Training Support</span>
                      </div>
                    </div>
                  </div>

                  {/* Rectangular Image Holder at Bottom */}
                  <div className="mt-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h4 className="text-white text-sm font-medium mb-3 text-center">Our Lab Solutions</h4>
                      
                      {/* Rectangular Image Carousel Container */}
                      <div className="relative h-24 bg-black/20 rounded-lg overflow-hidden">
                        <div className="absolute inset-0">
                          <img 
                            src={carouselImages[currentImageIndex]} 
                            alt={`Lab Equipment ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover transition-opacity duration-500"
                          />
                        </div>
                        
                        {/* Image Navigation Dots */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {carouselImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
                        >
                          <ChevronLeft className="w-3 h-3 text-white" />
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
                        >
                          <ChevronRight className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Original content for other popup types
              <>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop&crop=center')] bg-cover bg-center opacity-20" />
                
                <div className="relative z-10 p-8 flex flex-col justify-center text-white">
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/8e3b68c3-b813-48fb-900d-39f73318a10e.png" 
                      alt="SkyySkill Labs" 
                      className="h-12 mb-4" 
                    />
                    <h3 className="text-2xl font-bold mb-2">
                      Transform Your Institution
                    </h3>
                    <p className="text-white/90 mb-6">
                      Join 500+ institutions who trust SkyySkill Labs for next-gen lab solutions
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm">ASDC Approved Labs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-sm">30,000+ Students Trained</span>
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
              </>
            )}
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
                    onChange={(e) => {
                      const value = e.target.value;
                      // Ensure it starts with +91 and only contains numbers, spaces, and +
                      if (value === '' || (value.startsWith('+91') && /^[\+\d\s]+$/.test(value))) {
                        handleInputChange(e);
                      }
                    }}
                    required
                    placeholder="+91 98765 43210"
                    defaultValue="+91 "
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
                    <SelectItem value="ev-lab">EV Lab/ CoE</SelectItem>
                    <SelectItem value="solar-lab">Solar Lab</SelectItem>
                    <SelectItem value="drone-lab">Drone Lab</SelectItem>
                    <SelectItem value="ai-lab">AI Lab</SelectItem>
                    <SelectItem value="automotive-lab">Automotive Lab</SelectItem>
                    <SelectItem value="additive-manufacturing">Additive Manufacturing Lab</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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