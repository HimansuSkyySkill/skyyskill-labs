import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Wrench, 
  Cog, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const AutomotiveLabCoE = () => {
  const equipmentList = [
    "Engine Diagnostics Systems",
    "Transmission Training Units",
    "Brake System Simulators",
    "Electronic Control Units (ECU)",
    "Automotive Sensors & Actuators",
    "CAN Bus Communication Tools",
    "Hybrid Vehicle Training Kits",
    "Automotive Software Tools"
  ];

  const benefits = [
    "Industry-standard training equipment",
    "Real-world problem-solving skills",
    "OEM partnership programs",
    "Placement assistance with auto companies",
    "Certification from automotive leaders",
    "Research & development projects"
  ];

  return (
    <>
      <Helmet>
        <title>Automotive Lab & Automotive CoE | SkyySkill Labs</title>
        <meta name="description" content="SkyySkill Labs delivers Automotive Labs and CoEs with industry-ready training in EV, automotive systems, diagnostics, and future mobility." />
        <meta name="keywords" content="Automotive Lab, Automotive CoE, Automotive Centre of Excellence, Car Lab, Vehicle Training, Automotive Skills, SkyySkill Labs" />
        <link rel="canonical" href="https://skyyskilllabs.org/automotive-lab-coe" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Automotive Lab & Automotive CoE | SkyySkill Labs" />
        <meta property="og:description" content="SkyySkill Labs delivers Automotive Labs and CoEs with industry-ready training in EV, automotive systems, diagnostics, and future mobility." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyyskilllabs.org/automotive-lab-coe" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Automotive Centre of Excellence Setup",
            "provider": {
              "@type": "Organization",
              "name": "SkyySkill Labs",
              "url": "https://skyyskilllabs.org"
            },
            "description": "Automotive Labs and CoEs with industry-ready training in automotive systems and future mobility",
            "areaServed": "India",
            "serviceType": "Educational Infrastructure"
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Automotive Lab & Automotive CoE
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Prepare students for the future of mobility with comprehensive automotive training, 
                  from traditional systems to electric and autonomous vehicles.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="primary-light">OEM Partnerships</Badge>
                  <Badge variant="green-light">Future Ready</Badge>
                  <Badge variant="aqua-light">Industry 4.0</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <LeadCaptureForm 
                    type="quotation" 
                    trigger={
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Setup Automotive Lab
                      </Button>
                    } 
                  />
                  <LeadCaptureForm 
                    type="demo" 
                    trigger={
                      <Button variant="outline" size="lg">
                        <Phone className="w-5 h-5 mr-2" />
                        Schedule Demo
                      </Button>
                    } 
                  />
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/1561b211-3add-4c5a-8232-b90da9b996d8.png" 
                  alt="Automotive lab training with students learning vehicle diagnostics and repair"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SkyySkill Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkyySkill for Your Automotive CoE?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Car className="w-12 h-12 text-primary" />,
                  title: "Complete Vehicle Training",
                  description: "From engine fundamentals to advanced EV and hybrid systems"
                },
                {
                  icon: <Cog className="w-12 h-12 text-blue-500" />,
                  title: "Modern Diagnostics",
                  description: "Latest diagnostic tools and software used by industry professionals"
                },
                {
                  icon: <Target className="w-12 h-12 text-green" />,
                  title: "Industry Integration",
                  description: "Direct partnerships with automotive OEMs and service providers"
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
                <h3 className="text-2xl font-semibold mb-6">Comprehensive Automotive Equipment</h3>
                <div className="grid gap-4">
                  {equipmentList.map((equipment, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
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
                Our Automotive CoE partnerships with leading automotive manufacturers ensure 
                students learn on industry-standard equipment and receive relevant certifications.
              </p>
              <LeadCaptureForm 
                type="specs" 
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Partnership Details
                  </Button>
                } 
              />
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Why should colleges set up an Automotive CoE?</AccordionTrigger>
                <AccordionContent>
                  An Automotive CoE prepares students for the rapidly evolving automotive industry, 
                  including electric vehicles, autonomous systems, and connected cars. It ensures 
                  graduates have practical skills valued by automotive employers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What career opportunities does automotive training provide?</AccordionTrigger>
                <AccordionContent>
                  Graduates can pursue careers as automotive technicians, diagnostics specialists, 
                  EV engineers, quality control engineers, service advisors, and R&D engineers 
                  in automotive companies.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you cover both traditional and electric vehicles?</AccordionTrigger>
                <AccordionContent>
                  Yes, our automotive curriculum covers traditional ICE vehicles, hybrid systems, 
                  and electric vehicles to ensure students are prepared for all segments of 
                  the automotive industry.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What support do you provide post-installation?</AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive support including faculty training, curriculum updates, 
                  technical support, equipment maintenance, and placement assistance for students.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Automotive Centre of Excellence?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prepare your students for the future of mobility with industry-leading automotive training.
            </p>
            <LeadCaptureForm 
              type="quotation" 
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Automotive Lab Journey
                </Button>
              } 
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AutomotiveLabCoE;