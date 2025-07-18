import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building2,
  HeadphonesIcon
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    query: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        query: ""
      });
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

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 80 4567 8901"],
      color: "primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@skyyskill.com", "sales@skyyskill.com"],
      color: "accent"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      color: "primary"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Technical Support",
      details: ["24/7 Online Support", "Remote Assistance Available"],
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2">
            Contact Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to transform your educational labs? Contact our team for customized solutions 
            and expert guidance.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${info.color}/10 rounded-full flex items-center justify-center text-${info.color}`}>
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Submit Your Inquiry</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="query">Your Query *</Label>
                  <Textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Map and Address */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Headquarters</h2>
              
              {/* Address Card */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    SkyySkill Labs HQ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    123 Innovation Hub, Electronic City Phase 1<br />
                    Bangalore, Karnataka 560100<br />
                    India
                  </p>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Main Office & Manufacturing Unit
                  </Badge>
                </CardContent>
              </Card>

              {/* Google Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Interactive Google Map<br />
                        <span className="text-sm">Coming Soon</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Facility Highlights
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• State-of-the-art manufacturing facility</li>
                  <li>• R&D center with latest equipment</li>
                  <li>• Customer experience center</li>
                  <li>• Training and demonstration labs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;