import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { 
  Printer, 
  Layers, 
  Cog, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Wrench
} from "lucide-react";

const ThreeDPrintingLab = () => {
  const equipmentList = [
    "Professional 3D Printers (FDM & SLA)",
    "3D Scanning Equipment",
    "CAD Design Workstations",
    "Material Testing Units",
    "Post-processing Tools",
    "Quality Control Instruments",
    "Filament & Resin Storage Systems",
    "Safety Equipment & Ventilation"
  ];

  const benefits = [
    "Product design & prototyping skills",
    "Additive manufacturing expertise",
    "Industry-ready CAD/CAM knowledge",
    "Material science understanding",
    "Quality assurance training",
    "Career opportunities in manufacturing"
  ];

  return (
    <>
      <Helmet>
        <title>3D Printing Lab & Additive Manufacturing CoE | SkyySkill Labs</title>
        <meta name="description" content="Setup advanced 3D Printing Labs with SkyySkill Labs. Professional additive manufacturing training, prototyping, and industry-ready design skills." />
        <meta name="keywords" content="3D Printing Lab, Additive Manufacturing, 3D Printing Training, Prototyping Lab, CAD Training, SkyySkill Labs" />
        <link rel="canonical" href="https://skyyskilllabs.org/3d-printing-lab" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="3D Printing Lab & Additive Manufacturing CoE | SkyySkill Labs" />
        <meta property="og:description" content="Setup advanced 3D Printing Labs with SkyySkill Labs. Professional additive manufacturing training, prototyping, and industry-ready design skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyyskilllabs.org/3d-printing-lab" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "3D Printing Lab Setup",
            "provider": {
              "@type": "Organization",
              "name": "SkyySkill Labs",
              "url": "https://skyyskilllabs.org"
            },
            "description": "Advanced 3D Printing Labs with professional additive manufacturing training and prototyping",
            "areaServed": "India",
            "serviceType": "Educational Infrastructure"
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  3D Printing Lab & Additive Manufacturing
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform ideas into reality with cutting-edge 3D printing technology. 
                  Train students in additive manufacturing, prototyping, and design innovation.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="primary-light">Industry 4.0</Badge>
                  <Badge variant="green-light">Innovation Ready</Badge>
                  <Badge variant="aqua-light">Future Tech</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <LeadCaptureForm 
                    type="quotation" 
                    trigger={
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Setup 3D Printing Lab
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
                        <Layers className="w-5 h-5 mr-2" />
                        Schedule Demo
                      </Button>
                    } 
                  />
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/4970a248-4262-437c-8d56-3aa45ff1ea05.png" 
                  alt="3D printing lab with students learning additive manufacturing and prototyping"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SkyySkill Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkyySkill for Your 3D Printing Lab?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Printer className="w-12 h-12 text-purple-500" />,
                  title: "Latest Technology",
                  description: "Professional-grade 3D printers with multiple printing technologies and materials"
                },
                {
                  icon: <Layers className="w-12 h-12 text-pink-500" />,
                  title: "Complete Workflow",
                  description: "From design to post-processing - comprehensive additive manufacturing training"
                },
                {
                  icon: <Target className="w-12 h-12 text-green" />,
                  title: "Industry Applications",
                  description: "Real-world projects in automotive, aerospace, healthcare, and consumer products"
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
                <h3 className="text-2xl font-semibold mb-6">Comprehensive 3D Printing Equipment</h3>
                <div className="grid gap-4">
                  {equipmentList.map((equipment, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
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
                      <CheckCircle className="w-5 h-5 text-pink-500" />
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
                Partner with leading 3D printing manufacturers and design companies to provide 
                students with cutting-edge technology and real-world project experience.
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
                <AccordionTrigger>What industries use 3D printing technology?</AccordionTrigger>
                <AccordionContent>
                  3D printing is used across automotive, aerospace, healthcare, consumer products, 
                  architecture, jewelry, and education sectors. It's particularly valuable for 
                  prototyping, custom manufacturing, and small-batch production.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What materials can students work with?</AccordionTrigger>
                <AccordionContent>
                  Students learn to work with various materials including PLA, ABS, PETG, 
                  flexible filaments, resins, and specialty materials. Training covers material 
                  properties, selection criteria, and post-processing techniques.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Is CAD training included in the curriculum?</AccordionTrigger>
                <AccordionContent>
                  Yes, comprehensive CAD training is included covering design for additive 
                  manufacturing (DfAM), parametric modeling, surface modeling, and design 
                  optimization for 3D printing.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What career opportunities does 3D printing training provide?</AccordionTrigger>
                <AccordionContent>
                  Graduates can pursue careers as 3D printing technicians, design engineers, 
                  product developers, prototyping specialists, and additive manufacturing 
                  consultants across various industries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your 3D Printing Lab?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform ideas into reality and prepare students for the future of manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadCaptureForm 
                type="quotation" 
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Start Your 3D Printing Lab Journey
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

export default ThreeDPrintingLab;