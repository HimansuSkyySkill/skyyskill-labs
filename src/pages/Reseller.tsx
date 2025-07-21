import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Handshake, 
  TrendingUp, 
  Users, 
  Award, 
  Globe, 
  Star,
  CheckCircle,
  Send,
  Building2,
  Target,
  Zap
} from "lucide-react";

const Reseller = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    city: "",
    targetCity: "",
    companyDetails: "",
    additionalMessage: ""
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save reseller application to Supabase
      const { error } = await supabase
        .from('test_users')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            location: `${formData.city} -> ${formData.targetCity}`,
            "Additional Requirements": ["Reseller Application", formData.companyDetails, formData.additionalMessage]
          }
        ]);

      if (error) {
        throw error;
      }
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. Our partnership team will contact you within 2 business days.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "+91 ",
        city: "",
        targetCity: "",
        companyDetails: "",
        additionalMessage: ""
      });
    } catch (error) {
      console.error('Error saving reseller application:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Profit Margins",
      description: "Enjoy competitive margins with our exclusive pricing structure for authorized resellers.",
      color: "primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Get dedicated account manager, technical support, and marketing assistance.",
      color: "aqua"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Training & Certification",
      description: "Comprehensive product training and certification programs for your team.",
      color: "green"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Market Protection",
      description: "Exclusive territory rights and protection in your designated market area.",
      color: "orange"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Brand Recognition",
      description: "Leverage our established brand reputation and marketing materials.",
      color: "primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast-Moving Products",
      description: "Deal in high-demand educational technology with proven market acceptance.",
      color: "aqua"
    }
  ];

  const capabilities = [
    "In-house R&D with 50+ engineers",
    "ISO 9001:2015 certified manufacturing",
    "15+ years of industry experience",
    "State-of-the-art testing facilities",
    "Continuous product innovation",
    "Quality assurance at every step"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2">
            Partnership Opportunity
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Become a <span className="text-primary">SkyySkill Labs</span> Reseller
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join India's leading network of educational technology resellers and 
            grow your business with cutting-edge lab solutions.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">400+</div>
              <div className="text-sm text-muted-foreground">Product Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aqua">500+</div>
              <div className="text-sm text-muted-foreground">Institutions Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green">50+</div>
              <div className="text-sm text-muted-foreground">Active Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Partner with SkyySkill Labs?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join a network of successful partners who are transforming education across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 mb-4 bg-${benefit.color}/10 rounded-xl flex items-center justify-center text-${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-aqua/10 text-aqua border-aqua/20">
                Manufacturing Excellence
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Research & Manufacturing Capability
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                As an OEM manufacturer with complete in-house capabilities, we ensure 
                quality, innovation, and competitive pricing for our partner network.
              </p>
              
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">400+</div>
                  <div className="text-sm text-muted-foreground">OEM Products</div>
                </div>
                <div className="text-center p-4 bg-aqua/5 rounded-lg">
                  <div className="text-2xl font-bold text-aqua">99%</div>
                  <div className="text-sm text-muted-foreground">Quality Rating</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Manufacturing Facilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 50,000 sq ft manufacturing facility</li>
                    <li>• Advanced CNC machining centers</li>
                    <li>• Electronic assembly & testing units</li>
                    <li>• Quality control laboratories</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Product Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• EV & Automotive Labs</li>
                    <li>• Solar & Renewable Energy</li>
                    <li>• Drone Technology Labs</li>
                    <li>• AI & Automation Solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Apply to Become a Reseller Partner
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the application form below and our partnership team will contact you
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="w-6 h-6" />
                Reseller Application Form
              </CardTitle>
              <CardDescription>
                Please provide accurate information to help us process your application quickly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <Label htmlFor="email">Email Address *</Label>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number *</Label>
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
                    <Label htmlFor="city">Your City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Current city/location"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetCity">Which City You Want to Become a Reseller *</Label>
                  <Input
                    id="targetCity"
                    name="targetCity"
                    value={formData.targetCity}
                    onChange={handleInputChange}
                    required
                    placeholder="Target market city/region"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyDetails">Your Current Company Details *</Label>
                  <Textarea
                    id="companyDetails"
                    name="companyDetails"
                    value={formData.companyDetails}
                    onChange={handleInputChange}
                    required
                    placeholder="Please provide details about your current business, experience in education sector, team size, etc."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalMessage">Additional Message</Label>
                  <Textarea
                    id="additionalMessage"
                    name="additionalMessage"
                    value={formData.additionalMessage}
                    onChange={handleInputChange}
                    placeholder="Any additional information you'd like to share..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting Application...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Reseller Application
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Reseller;