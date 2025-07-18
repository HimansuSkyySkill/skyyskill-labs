import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText, X } from "lucide-react";

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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {type === "brochure" ? <Download className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            {type === "brochure" 
              ? "Download Lab Brochure" 
              : type === "demo"
              ? "Request Lab Demo"
              : type === "specs"
              ? "Download Specifications"
              : "Request Quotation"}
          </DialogTitle>
          <DialogDescription>
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@domain.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="Professor, Lab Manager, etc."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="institution">Institution / Company *</Label>
              <Input
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleInputChange}
                required
                placeholder="College/University/Company"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="Engineering, Science, etc."
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirement">Requirement / Notes</Label>
            <Textarea
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleInputChange}
              placeholder="Tell us about your specific lab requirements..."
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="sendUpdates"
              checked={formData.sendUpdates}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, sendUpdates: checked as boolean }))
              }
            />
            <Label htmlFor="sendUpdates" className="text-sm">
              Send me updates about new lab products and solutions
            </Label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : 
                type === "brochure" ? "Download Brochure" :
                type === "demo" ? "Request Demo" :
                type === "specs" ? "Download Specs" :
                "Request Quotation"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};