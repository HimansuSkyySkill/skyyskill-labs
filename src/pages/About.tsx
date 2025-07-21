import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Award, 
  Users, 
  Building2, 
  Globe, 
  CheckCircle, 
  Cog, 
  BookOpen, 
  Shield, 
  Cpu, 
  Zap, 
  Target,
  Lightbulb,
  Download,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  Play
} from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    institution: "",
    designation: "",
    department: "",
    requirement: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const teamMembers = [
    {
      name: "Himansu Sekhar Panda",
      position: "Founder & CEO",
      description: "Entrepreneur | Alumnus of BITS Pilani | Former Triveni Turbines",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Siddhant",
      position: "Co-founder & Operations Head",
      description: "Started as an intern, now leads execution across 5 states",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mr. Sajeeth",
      position: "Head of R&D",
      description: "EV Specialist & former academician, leading lab R&D innovations",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Suchismita Sahoo",
      position: "Head of B2B Labs",
      description: "Building a culture of discipline, empathy, and excellence",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const clients = [
    "IIT Dharwad", "NIT Raipur", "MANIT Bhopal", "TNS Foundation", 
    "MG Motor India", "Ola Electric", "Capgemini", "Microsoft", 
    "30+ Govt. ITIs", "15+ Engineering Colleges"
  ];

  const trustFactors = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ASDC Approved EV Lab OEM",
      description: "Sector Skill Council certified courses & equipment",
      color: "primary"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Digital Twin-enabled",
      description: "Next-generation lab modules with advanced simulation",
      color: "aqua"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "End-to-end Services",
      description: "Installation, FDPs, Student Training, Placement support",
      color: "green"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Customizable Packages",
      description: "From School to Research level with 1-year warranty + AMC",
      color: "orange"
    }
  ];

  const missionPoints = [
    "Bridge the skill gap in Electric Mobility, Green Energy, and Advanced Manufacturing",
    "Enable Tier-2 & Tier-3 institutions to host cutting-edge Centres of Excellence", 
    "Promote Make in India, AI, and Digital Twin-integrated labs",
    "Offer end-to-end Lab Setup + Training + Placement + Research Support"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Modern Laboratory" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-aqua/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="mb-8">
              <Badge className="bg-aqua/20 text-aqua border-aqua/30 mb-6 px-4 py-2 text-sm font-medium">
                🏆 About SkyySkill Labs
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Transforming Skilling with
              <span className="block bg-gradient-to-r from-aqua via-green to-orange bg-clip-text text-transparent mt-2">
                Innovation & Impact
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              At SkyySkill Labs, we don't just manufacture lab equipment—we build futures through research, technology, and training integration.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-32 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-aqua/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-aqua/90 to-green/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              ✨ Who We Are
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              India's Leading OEM for
              <span className="block bg-gradient-to-r from-aqua via-green to-primary bg-clip-text text-transparent mt-4">
                Future-Ready Lab Solutions
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 mb-16">
              <p>
                SkyySkill Labs is the product innovation and manufacturing vertical of <strong className="text-primary">SkyySkill Academy</strong>, India's national-level award-winning skill development platform. We specialize in designing, developing, and delivering <strong className="text-primary">OEM-grade labs</strong> that empower institutions—from ITIs to IITs—to lead the green economy revolution.
              </p>
              <p>
                Our labs are deployed in <strong className="text-primary">Electric Vehicles, Solar/Renewable Energy, Drones, Additive Manufacturing, Automotive Mechatronics, and CNC simulation.</strong> We blend <strong className="text-primary">Research + Skilling + Training</strong> into every lab we build—making us India's <strong className="text-aqua">only ASDC-approved EV lab OEM</strong> with pan-India implementation expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-orange/10 text-orange border-orange/20 mb-8 px-8 py-4 text-lg font-bold">
              📚 Our Legacy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              How It All Started
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                SkyySkill Academy began as a small workshop series in 2013 by our Founder & CEO, <strong className="text-primary">Himansu Sekhar Panda</strong>, driven by a passion for hands-on learning and future technology.
              </p>
              <p>
                In 2018, it was formally launched as <strong className="text-primary">Skyy Rider Institutions</strong> and later rebranded as <strong className="text-primary">SkyySkill Academy</strong> to reflect a broader national mission.
              </p>
              <p>
                Today, the Academy has trained over <strong className="text-aqua">30,000+ students</strong>, partnered with <strong className="text-primary">IIT Kanpur, IIT Guwahati, ASDC, MG Motors, Bosch, Ola</strong>, and deployed CoEs across <strong className="text-green">60+ institutions</strong>.
              </p>
              <p>
                SkyySkill Labs was born from the need to design <strong className="text-primary">indigenous, scalable, and AI-enabled lab infrastructure</strong> for Indian colleges and skilling centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-32 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <Target className="w-16 h-16 text-primary mx-auto lg:mx-0 mb-6" />
                <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-3 text-lg font-bold">
                  🎯 Our Vision
                </Badge>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-primary leading-relaxed border-l-4 border-primary pl-6">
                "To become the most trusted OEM partner for futuristic skill labs across EV, Green Energy, and Next-Gen Tech domains—enabling India's skilling infrastructure to meet global industry demands."
              </blockquote>
            </div>

            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <Lightbulb className="w-16 h-16 text-aqua mx-auto lg:mx-0 mb-6" />
                <Badge className="bg-aqua/10 text-aqua border-aqua/20 px-6 py-3 text-lg font-bold">
                  🚀 Our Mission
                </Badge>
              </div>
              <ul className="space-y-4 text-lg text-muted-foreground">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-green/10 text-green border-green/20 mb-8 px-8 py-4 text-lg font-bold">
              👨‍🔬 Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Leadership That Drives Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the visionaries and experts behind SkyySkill Labs' success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border bg-background overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-primary mb-2">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-aqua/10 text-aqua border-aqua/20 mb-3 mx-auto">
                    {member.position}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence & Clients Section */}
      <section className="py-32 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-orange/10 text-orange border-orange/20 mb-8 px-8 py-4 text-lg font-bold">
              🌍 Our Presence & Clients
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Trusted by India's Leading Institutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From IITs to Government ITIs, we're the preferred partner for cutting-edge lab infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {clients.map((client, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border bg-background text-center p-6">
                <div className="text-primary font-bold text-sm group-hover:text-aqua transition-colors">
                  {client}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Badge className="bg-gradient-to-r from-green/90 to-aqua/80 text-white border-0 px-8 py-4 text-lg font-bold shadow-lg">
              60+ Institutions Partnered | 500+ Labs Deployed
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Institutions Trust Us Section */}
      <section className="py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-8 px-8 py-4 text-lg font-bold">
              🧠 Why Institutions Trust Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              The SkyySkill Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading capabilities that set us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-${factor.color} rounded-xl flex items-center justify-center text-white`}>
                      {factor.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {factor.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {factor.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-navy/10 via-aqua/5 to-green/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-aqua mb-2">FDP</div>
                <div className="text-sm text-muted-foreground">Every 6-8 months</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green mb-2">1 Year</div>
                <div className="text-sm text-muted-foreground">Warranty + AMC</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">Research</div>
                <div className="text-sm text-muted-foreground">& Patent Support</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-aqua/90 to-green/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              📩 Ready to Transform?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Want to Transform Your Institution?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Join 60+ institutions who partnered with SkyySkill Labs to set up world-class CoEs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <LeadCaptureForm
                type="brochure"
                trigger={
                  <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
                    <Download className="w-6 h-6 mr-3" />
                    Download Company Brochure
                  </Button>
                }
              />
              <LeadCaptureForm
                type="quotation"
                trigger={
                  <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto bg-white/10 border-white/30 text-primary hover:bg-primary hover:text-white">
                    <Mail className="w-6 h-6 mr-3" />
                    Get in Touch
                  </Button>
                }
              />
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-aqua/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-green/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      </section>
    </div>
  );
};

export default About;