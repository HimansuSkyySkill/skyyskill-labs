import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { 
  Settings, 
  Cog, 
  Monitor, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Wrench,
  Cpu
} from "lucide-react";

const CNCSimulationLab = () => {
  const equipmentList = [
    "CNC Simulation Software Suites",
    "CAD/CAM Workstations",
    "Virtual Machining Centers",
    "G-Code Programming Tools",
    "Precision Measurement Equipment",
    "CNC Control Panel Simulators",
    "Toolpath Optimization Software",
    "Quality Control Training Modules"
  ];

  const benefits = [
    "Industry-standard CNC programming skills",
    "Virtual machining experience",
    "CAD/CAM software proficiency",
    "Manufacturing process optimization",
    "Quality assurance training",
    "Career opportunities in precision manufacturing"
  ];

  return (
    <>
      <Helmet>
        <title>CNC Simulation Lab & Digital Manufacturing CoE | SkyySkill Labs</title>
        <meta name="description" content="Setup advanced CNC Simulation Labs with SkyySkill Labs. Professional CNC programming, virtual machining, and digital manufacturing training." />
        <meta name="keywords" content="CNC Simulation Lab, CNC Programming, CAD CAM Training, Digital Manufacturing, Virtual Machining, SkyySkill Labs" />
        <link rel="canonical" href="https://skyyskilllabs.org/cnc-lab" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="CNC Simulation Lab & Digital Manufacturing CoE | SkyySkill Labs" />
        <meta property="og:description" content="Setup advanced CNC Simulation Labs with SkyySkill Labs. Professional CNC programming, virtual machining, and digital manufacturing training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyyskilllabs.org/cnc-lab" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "CNC Simulation Lab Setup",
            "provider": {
              "@type": "Organization",
              "name": "SkyySkill Labs",
              "url": "https://skyyskilllabs.org"
            },
            "description": "Advanced CNC Simulation Labs with professional programming and virtual machining training",
            "areaServed": "India",
            "serviceType": "Educational Infrastructure"
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-slate-600/10 to-blue-500/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  CNC Simulation Lab & Digital Manufacturing
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Master precision manufacturing with advanced CNC simulation technology. 
                  Train students in virtual machining, programming, and Industry 4.0 concepts.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="primary-light">Industry 4.0</Badge>
                  <Badge variant="green-light">Precision Ready</Badge>
                  <Badge variant="aqua-light">Virtual Training</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <LeadCaptureForm 
                    type="quotation" 
                    trigger={
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Setup CNC Simulation Lab
                      </Button>
                    } 
                  />
                  <LeadCaptureForm 
                    type="quotation" 
                    trigger={
                      <Button variant="outline" size="lg">
                        <Phone className="w-5 h-5 mr-2" />
                        Get Quotation
                      </Button>
                    } 
                  />
                  <LeadCaptureForm 
                    type="demo" 
                    trigger={
                      <Button variant="outline" size="lg">
                        <Monitor className="w-5 h-5 mr-2" />
                        Schedule Demo
                      </Button>
                    } 
                  />
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/54fc671a-f25a-45b7-9f28-17b1ea23b2b7.png" 
                  alt="CNC simulation lab with students learning digital manufacturing and programming"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SkyySkill Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkyySkill for Your CNC Simulation Lab?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Settings className="w-12 h-12 text-slate-600" />,
                  title: "Advanced Simulation",
                  description: "Industry-standard CNC simulation software with realistic virtual machining"
                },
                {
                  icon: <Cpu className="w-12 h-12 text-blue-500" />,
                  title: "Digital Manufacturing",
                  description: "Complete digital workflow from design to production simulation"
                },
                {
                  icon: <Target className="w-12 h-12 text-green" />,
                  title: "Industry Ready",
                  description: "Skills directly transferable to modern manufacturing environments"
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
                <h3 className="text-2xl font-semibold mb-6">Comprehensive CNC Simulation Equipment</h3>
                <div className="grid gap-4">
                  {equipmentList.map((equipment, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-slate-600" />
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
                      <CheckCircle className="w-5 h-5 text-blue-500" />
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
                Partner with leading CNC machine manufacturers and software companies to provide 
                students with industry-standard tools and real-world manufacturing experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LeadCaptureForm 
                  type="specs" 
                  trigger={
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Mail className="w-5 h-5 mr-2" />
                      Get Partnership Details
                    </Button>
                  } 
                />
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
                <AccordionTrigger>What are the advantages of CNC simulation training?</AccordionTrigger>
                <AccordionContent>
                  CNC simulation allows safe, cost-effective learning without material waste or 
                  machine damage. Students can practice complex operations, test programs, 
                  and make mistakes in a virtual environment before working on real machines.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Which CNC programming languages are covered?</AccordionTrigger>
                <AccordionContent>
                  Students learn G-code programming, M-codes, macro programming, and various 
                  CAM software packages. Training covers both manual programming and 
                  computer-assisted programming techniques.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Can students work on real manufacturing projects?</AccordionTrigger>
                <AccordionContent>
                  Yes, the curriculum includes real-world projects simulating actual manufacturing 
                  scenarios. Students work on parts from automotive, aerospace, and medical 
                  device industries to gain practical experience.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What career opportunities does CNC training provide?</AccordionTrigger>
                <AccordionContent>
                  Graduates can pursue careers as CNC programmers, machine operators, 
                  manufacturing engineers, quality inspectors, and production supervisors 
                  in precision manufacturing industries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-600/10 to-blue-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your CNC Simulation Lab?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prepare students for the future of precision manufacturing with cutting-edge simulation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadCaptureForm 
                type="quotation" 
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Start Your CNC Lab Journey
                  </Button>
                } 
              />
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

export default CNCSimulationLab;