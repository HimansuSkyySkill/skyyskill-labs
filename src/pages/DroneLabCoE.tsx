import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { 
  Plane, 
  Camera, 
  MapPin, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Zap
} from "lucide-react";

const DroneLabCoE = () => {
  const equipmentList = [
    "Professional Drone Flight Simulators",
    "Multi-rotor & Fixed-wing Training Drones",
    "Drone Assembly & Repair Kits",
    "Flight Controller Programming Units",
    "Camera & Gimbal Systems",
    "GPS & Navigation Training Modules",
    "Battery Management Systems",
    "Drone Safety & Regulation Training"
  ];

  const benefits = [
    "Hands-on drone piloting experience",
    "Commercial drone license preparation",
    "Aerial photography & videography skills",
    "Industry-certified training programs",
    "Career opportunities in surveying & mapping",
    "Agriculture & inspection applications"
  ];

  return (
    <>
      <Helmet>
        <title>Drone Lab CoE (Centre of Excellence) | SkyySkill Labs</title>
        <meta name="description" content="Build advanced Drone Centres of Excellence with SkyySkill Labs. Professional drone training, UAV technology, and commercial pilot certification programs." />
        <meta name="keywords" content="Drone Lab, Drone CoE, UAV Training, Drone Centre of Excellence, Commercial Drone Pilot, SkyySkill Labs" />
        <link rel="canonical" href="https://skyyskilllabs.org/drone-lab" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Drone Lab CoE (Centre of Excellence) | SkyySkill Labs" />
        <meta property="og:description" content="Build advanced Drone Centres of Excellence with SkyySkill Labs. Professional drone training, UAV technology, and commercial pilot certification programs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyyskilllabs.org/drone-lab" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Drone Centre of Excellence Setup",
            "provider": {
              "@type": "Organization",
              "name": "SkyySkill Labs",
              "url": "https://skyyskilllabs.org"
            },
            "description": "Advanced Drone Labs and CoEs with professional UAV training and commercial pilot certification",
            "areaServed": "India",
            "serviceType": "Educational Infrastructure"
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600/10 to-cyan-500/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Drone Lab CoE (Centre of Excellence)
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Launch students into the future of aviation with comprehensive drone training, 
                  from basic piloting to advanced commercial applications.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="primary-light">DGCA Approved</Badge>
                  <Badge variant="green-light">Commercial Ready</Badge>
                  <Badge variant="aqua-light">Industry 4.0</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <LeadCaptureForm 
                    type="quotation" 
                    trigger={
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Setup Drone Lab
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
                        <Camera className="w-5 h-5 mr-2" />
                        Schedule Demo
                      </Button>
                    } 
                  />
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/46c9f349-5e19-4f47-b0f9-00612ed5aa97.png" 
                  alt="Drone lab training with students learning UAV technology and piloting"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SkyySkill Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkyySkill for Your Drone CoE?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Plane className="w-12 h-12 text-blue-500" />,
                  title: "Professional Training",
                  description: "Complete drone pilot certification and commercial applications training"
                },
                {
                  icon: <Camera className="w-12 h-12 text-cyan-500" />,
                  title: "Real-world Applications",
                  description: "Hands-on training in surveying, agriculture, inspection, and photography"
                },
                {
                  icon: <Target className="w-12 h-12 text-green" />,
                  title: "Industry Certification",
                  description: "DGCA-aligned training with commercial drone pilot license preparation"
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
                <h3 className="text-2xl font-semibold mb-6">Comprehensive Drone Lab Equipment</h3>
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
                      <CheckCircle className="w-5 h-5 text-cyan-500" />
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
                Partner with leading drone manufacturers and commercial operators to provide 
                students with industry-standard training and certification pathways.
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
                <AccordionTrigger>What career opportunities does drone training provide?</AccordionTrigger>
                <AccordionContent>
                  Drone training opens careers in aerial surveying, agriculture monitoring, 
                  infrastructure inspection, filmmaking, emergency services, and commercial 
                  delivery services. The drone industry is rapidly growing with high demand for skilled pilots.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Is DGCA certification included in the training?</AccordionTrigger>
                <AccordionContent>
                  Yes, our curriculum is aligned with DGCA requirements for commercial drone 
                  pilot licensing. Students receive comprehensive preparation for DGCA 
                  certification exams and practical assessments.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What types of drones are included in the lab?</AccordionTrigger>
                <AccordionContent>
                  Our lab includes various drone types: quadcopters, hexacopters, fixed-wing 
                  drones, and specialized UAVs for different applications. Students learn 
                  on both training and professional-grade equipment.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What safety measures are implemented?</AccordionTrigger>
                <AccordionContent>
                  Safety is our top priority. We provide comprehensive safety training, 
                  controlled flying environments, emergency protocols, and insurance coverage. 
                  All flights follow DGCA safety guidelines and regulations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600/10 to-cyan-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Drone Centre of Excellence?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the aviation revolution and prepare your students for the growing drone industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadCaptureForm 
                type="quotation" 
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Start Your Drone Lab Journey
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

export default DroneLabCoE;