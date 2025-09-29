import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, 
  Zap, 
  Leaf, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";

const SolarLabCoE = () => {
  const handleCTAClick = () => {
    window.open('https://www.evskilllab.com/solarlab', '_blank');
  };

  const equipmentList = [
    "Solar Panel Testing Units",
    "Grid-tie Inverter Systems",
    "Battery Storage Solutions",
    "Solar Irradiance Meters",
    "Power Quality Analyzers",
    "MPPT Controller Training Kits",
    "Solar Installation Tools",
    "Energy Monitoring Systems"
  ];

  const benefits = [
    "Renewable energy skill development",
    "Green job placement opportunities",
    "Sustainable technology training",
    "Industry-certified programs",
    "Hands-on project experience",
    "Research & innovation support"
  ];

  return (
    <>
      <Helmet>
        <title>Solar Lab & Solar CoE in India | SkyySkill Labs</title>
        <meta name="description" content="Build advanced Solar Labs and Solar Centres of Excellence with SkyySkill Labs. Hands-on training, renewable energy skilling, and CSR-ready models." />
        <meta name="keywords" content="Solar Lab, Solar CoE, Solar Centre of Excellence, Renewable Energy Lab, Solar Training, Solar Skills, SkyySkill Labs" />
        <link rel="canonical" href="https://skyyskilllabs.org/solar-lab-coe" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Solar Lab & Solar CoE in India | SkyySkill Labs" />
        <meta property="og:description" content="Build advanced Solar Labs and Solar Centres of Excellence with SkyySkill Labs. Hands-on training, renewable energy skilling, and CSR-ready models." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyyskilllabs.org/solar-lab-coe" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Solar Centre of Excellence Setup",
            "provider": {
              "@type": "Organization",
              "name": "SkyySkill Labs",
              "url": "https://skyyskilllabs.org"
            },
            "description": "Advanced Solar Labs and Solar Centres of Excellence for renewable energy training",
            "areaServed": "India",
            "serviceType": "Educational Infrastructure"
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-400/10 to-orange/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Solar Lab & Solar CoE
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Build India's future with advanced Solar Centres of Excellence. 
                  Train students in renewable energy technologies and sustainable practices.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="green-light">Eco-Friendly</Badge>
                  <Badge variant="primary-light">CSR Ready</Badge>
                  <Badge variant="aqua-light">Future Skills</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={handleCTAClick} className="bg-green hover:bg-green/90 text-white border border-green/30 shadow-lg hover:shadow-[0_0_30px_hsl(var(--green)/0.6)] transition-all duration-300">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Setup Solar Lab
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleCTAClick} className="hover:shadow-[0_0_20px_hsl(var(--green)/0.4)] transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/2586a3d0-b8f9-447f-8717-4424e6582924.png" 
                  alt="Solar lab training with students learning renewable energy technology"
                  className="rounded-2xl shadow-2xl hover:shadow-[0_0_40px_hsl(var(--green)/0.5)] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SkyySkill Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkyySkill for Your Solar CoE?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sun className="w-12 h-12 text-yellow-500" />,
                  title: "Renewable Focus",
                  description: "Complete solar energy ecosystem training from basics to advanced"
                },
                {
                  icon: <Leaf className="w-12 h-12 text-green" />,
                  title: "Sustainability",
                  description: "Aligned with India's green energy goals and environmental standards"
                },
                {
                  icon: <Target className="w-12 h-12 text-primary" />,
                  title: "Industry Ready",
                  description: "Skills aligned with solar industry job requirements and certifications"
                }
              ].map((item, index) => (
                <Card key={index} className="text-center bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md border border-green/30 shadow-xl hover:shadow-[0_0_40px_hsl(var(--green)/0.4)] transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{item.description}</p>
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
                <h3 className="text-2xl font-semibold mb-6">Comprehensive Solar Lab Equipment</h3>
                <div className="grid gap-4">
                  {equipmentList.map((equipment, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green/10 to-transparent border border-green/20 hover:border-green/40 hover:shadow-[0_0_15px_hsl(var(--green)/0.3)] transition-all duration-300 group">
                      <CheckCircle className="w-5 h-5 text-green group-hover:drop-shadow-[0_0_8px_hsl(var(--green)/0.8)] transition-all duration-300" />
                      <span className="group-hover:text-green transition-colors duration-300">{equipment}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Student Benefits</h3>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 hover:border-yellow-500/40 hover:shadow-[0_0_15px_hsl(45_100%_50%/0.3)] transition-all duration-300 group">
                      <CheckCircle className="w-5 h-5 text-yellow-500 group-hover:drop-shadow-[0_0_8px_hsl(45_100%_50%/0.8)] transition-all duration-300" />
                      <span className="group-hover:text-yellow-500 transition-colors duration-300">{benefit}</span>
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
                Partner with leading solar energy companies and green technology providers 
                to ensure your students learn cutting-edge renewable energy solutions.
              </p>
              <Button size="lg" onClick={handleCTAClick} className="bg-green hover:bg-green/90 text-white border border-green/30 shadow-lg hover:shadow-[0_0_30px_hsl(var(--green)/0.6)] transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Get Partnership Details
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do Solar Labs benefit engineering students?</AccordionTrigger>
                <AccordionContent>
                  Solar Labs provide hands-on experience with renewable energy systems, preparing 
                  students for the growing green energy sector. Students learn solar panel installation, 
                  system design, energy storage, and grid integration - skills highly valued by employers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What certifications do students receive?</AccordionTrigger>
                <AccordionContent>
                  Students receive industry-recognized certifications in solar technology, 
                  renewable energy systems, and sustainable engineering practices that enhance 
                  their employability in the green energy sector.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Is this suitable for CSR initiatives?</AccordionTrigger>
                <AccordionContent>
                  Yes, Solar CoE setups align perfectly with corporate sustainability goals 
                  and CSR requirements, helping companies contribute to renewable energy 
                  education and environmental conservation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What is the ROI for institutions?</AccordionTrigger>
                <AccordionContent>
                  Solar labs often generate revenue through energy production while providing 
                  education. Additionally, they attract students interested in sustainability 
                  and help institutions meet green building standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-400/10 to-orange/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Solar Centre of Excellence?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the renewable energy revolution and prepare your students for a sustainable future.
            </p>
            <Button size="lg" onClick={handleCTAClick} className="bg-green hover:bg-green/90 text-white border border-green/30 shadow-lg hover:shadow-[0_0_30px_hsl(var(--green)/0.6)] transition-all duration-300 transform hover:scale-105">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Solar Lab Journey
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SolarLabCoE;