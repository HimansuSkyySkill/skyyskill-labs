import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { 
  Car, 
  Battery, 
  Zap, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";

const EVCentreOfExcellence = () => {
  const handleCTAClick = () => {
    window.open('https://www.evskilllab.com', '_blank');
  };

  const equipmentList = [
    "EV Battery Management Systems",
    "Electric Motor Testing Units",
    "Charging Infrastructure Simulators",
    "Digital Twin Integration",
    "EV Diagnostics Equipment",
    "Power Electronics Training Modules",
    "Vehicle Controller Programming Units",
    "Safety Testing Equipment"
  ];

  const benefits = [
    "Industry-grade training infrastructure",
    "Curriculum aligned with EV industry needs",
    "Placement assistance with EV companies",
    "Research & development opportunities",
    "Digital certification programs",
    "Faculty training and development"
  ];

  return (
    <>
      <Helmet>
        <title>EV CoE (Centre of Excellence) & EV Labs in India | SkyySkill Labs</title>
        <meta name="description" content="Set up world-class EV Centres of Excellence with SkyySkill Labs. OEM-grade equipment, digital twin integration, and training programs for colleges and ITIs." />
        <meta name="keywords" content="EV CoE, EV Centre of Excellence, EV Lab, Electric Vehicle Lab, EV Training, EV Skills, SkyySkill Labs" />
        <link rel="canonical" href="https://skyyskilllabs.org/ev-centre-of-excellence" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="EV CoE (Centre of Excellence) & EV Labs in India | SkyySkill Labs" />
        <meta property="og:description" content="Set up world-class EV Centres of Excellence with SkyySkill Labs. OEM-grade equipment, digital twin integration, and training programs for colleges and ITIs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyyskilllabs.org/ev-centre-of-excellence" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "EV Centre of Excellence Setup",
            "provider": {
              "@type": "Organization",
              "name": "SkyySkill Labs",
              "url": "https://skyyskilllabs.org"
            },
            "description": "World-class EV Centres of Excellence with OEM-grade equipment and training programs",
            "areaServed": "India",
            "serviceType": "Educational Infrastructure"
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-aqua/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  EV Centre of Excellence (EV CoE)
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your institution with India's most advanced EV Centre of Excellence. 
                  Get industry-ready training, OEM-grade equipment, and digital twin integration.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="primary-light">IIT Approved</Badge>
                  <Badge variant="green-light">100% Made in India</Badge>
                  <Badge variant="aqua-light">Industry 4.0 Ready</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={handleCTAClick} className="bg-primary hover:bg-primary/90">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Setup EV CoE Now
                  </Button>
                  <LeadCaptureForm 
                    type="quotation" 
                    trigger={
                      <Button variant="outline" size="lg">
                        <Phone className="w-5 h-5 mr-2" />
                        Get Quotation
                      </Button>
                    } 
                  />
                  <Button variant="outline" size="lg" onClick={handleCTAClick}>
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/244efa9e-eee2-4439-bf56-4bae9864c2da.png" 
                  alt="EV Centre of Excellence lab setup with students learning electric vehicle technology"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SkyySkill Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkyySkill for Your EV CoE?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12 text-primary" />,
                  title: "Industry Recognition",
                  description: "Trusted by IITs, NITs, and leading engineering colleges across India"
                },
                {
                  icon: <Target className="w-12 h-12 text-aqua" />,
                  title: "100% Placement Focus",
                  description: "Industry-aligned curriculum ensuring students are job-ready"
                },
                {
                  icon: <Zap className="w-12 h-12 text-green" />,
                  title: "Latest Technology",
                  description: "Digital twin integration, AI-powered diagnostics, and IoT monitoring"
                }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lab Setup & Equipment Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Lab Setup & Equipment</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Comprehensive EV Lab Equipment</h3>
                <div className="grid gap-4">
                  {equipmentList.map((equipment, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green" />
                      <span>{equipment}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Student Benefits</h3>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Collaborations Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Industry Collaborations</h2>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8">
                Our EV CoE is developed in partnership with leading automotive OEMs, 
                ensuring your students learn on the same equipment used in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleCTAClick} className="bg-primary hover:bg-primary/90">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Partnership Details
                </Button>
                <LeadCaptureForm 
                  type="quotation" 
                  trigger={
                    <Button variant="outline" size="lg">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Request Quote
                    </Button>
                  } 
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is an EV CoE (Centre of Excellence)?</AccordionTrigger>
                <AccordionContent>
                  An EV Centre of Excellence is a specialized training facility designed to provide 
                  comprehensive education and hands-on experience in electric vehicle technology. 
                  It includes state-of-the-art equipment, curriculum, and industry partnerships.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does it take to setup an EV Lab?</AccordionTrigger>
                <AccordionContent>
                  Typically, a complete EV CoE setup takes 4-6 weeks from finalization to 
                  commissioning, including equipment installation, faculty training, and 
                  curriculum integration.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What is the investment required for EV CoE?</AccordionTrigger>
                <AccordionContent>
                  Investment varies based on lab size and equipment selection. We offer 
                  flexible packages starting from basic setups to comprehensive research-grade 
                  facilities. Contact us for a customized quote.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you provide faculty training?</AccordionTrigger>
                <AccordionContent>
                  Yes, comprehensive faculty training is included in all our packages. 
                  This includes technical training, curriculum guidance, and ongoing support 
                  to ensure effective lab utilization.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-aqua/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Setup Your EV Centre of Excellence?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 200+ institutions across India who have chosen SkyySkill Labs for their EV training needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleCTAClick} className="bg-primary hover:bg-primary/90">
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your EV CoE Journey
              </Button>
              <LeadCaptureForm 
                type="quotation" 
                trigger={
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Detailed Quote
                  </Button>
                } 
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EVCentreOfExcellence;