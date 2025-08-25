import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsEventsSection from "@/components/NewsEventsSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building2,
  HeadphonesIcon,
  Globe,
  ExternalLink,
  Linkedin,
  Instagram
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    company: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Ensure it starts with +91 and only contains numbers, spaces, and +
      if (value === '' || (value.startsWith('+91') && /^[\+\d\s]+$/.test(value))) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save inquiry data to Supabase
      const { error } = await supabase
        .from('test_users')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            location: formData.company,
            "Additional Requirements": [formData.inquiryType, formData.message]
          }
        ]);

      if (error) {
        throw error;
      }
      
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "+91 ",
        company: "",
        inquiryType: "",
        message: ""
      });
    } catch (error) {
      console.error('Error saving inquiry:', error);
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
      details: ["+91 9237378472", "+91-92373 82498", "+91-9348291070"],
      color: "primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["proposal@evskilllab.com", "ashmita.dutta@skyyskill.com"],
      color: "accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: ["Dr. Atmaram Estates, 2nd Floor, NH 65, Beside TMC, Hyder Nagar, Kukatpally, Hyderabad, Telangana 500072"],
      color: "primary"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="primary-light" className="mb-6 px-6 py-2">
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
                      placeholder="+91 8800889353"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Institute Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="College/University/Company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleSelectChange('inquiryType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                      <SelectItem value="quotation-inquiry">Quotation Inquiry</SelectItem>
                      <SelectItem value="become-reseller">Want to Become a Reseller</SelectItem>
                      <SelectItem value="collaborate">Want to Collaborate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
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

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Office Locations</h2>
              
              {/* Hyderabad Office */}
              <Card className="mb-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="primary-light">
                      Headquarters
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">Hyderabad Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground">Dr. Atmaram Estates, 2nd Floor, NH 65, Beside TMC, Hyder Nagar, Kukatpally, Hyderabad, Telangana 500072</div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.open('https://maps.app.goo.gl/H2aYGspRFg1MAJDUA', '_blank')}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Bhubaneswar Office */}
              <Card className="mb-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-aqua rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-aqua/10 text-aqua border-aqua/20">
                      Regional Office
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">Bhubaneswar Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground">Room Number 302, Campus 11, KIIT University, KIIT TBI, Patia, Bhubaneswar, Odisha 751024</div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.open('https://share.google/KFL2mIuiZ0z3Znp4q', '_blank')}
                    className="w-full bg-aqua hover:bg-aqua/90"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
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

      {/* Parent Company Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-aqua/5 to-green/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-orange/10 text-orange border-orange/20 mb-6 px-6 py-3 text-lg font-bold">
              🎓 Parent Company
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Looking for Training or Courses?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore comprehensive skill development programs at our parent company SkyySkill Academy
            </p>
            
            <Button 
              onClick={() => window.open('https://www.skyyskill.com', '_blank')}
              variant="hero" 
              size="lg" 
              className="text-lg px-10 py-6 h-auto mb-12"
            >
              <ExternalLink className="w-6 h-6 mr-3" />
              Visit our Parent Company Website
            </Button>

            {/* Social Media Links */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-primary mb-6">Follow Us</h3>
              <div className="flex gap-6">
                <Button
                  onClick={() => window.open('https://www.linkedin.com/company/ev-skill-lab/?viewAsMember=true', '_blank')}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 h-auto"
                >
                  <Linkedin className="w-6 h-6 mr-3" />
                  LinkedIn
                </Button>
                <Button
                  onClick={() => window.open('https://www.instagram.com/evskilllab/', '_blank')}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 h-auto"
                >
                  <Instagram className="w-6 h-6 mr-3" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsEventsSection />
      <Footer />
    </div>
  );
};

export default Contact;