import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Car,
  Sun,
  Plane,
  Printer,
  Settings,
  Wrench,
  Star,
  Play,
  Download,
  MapPin,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

const Index = () => {
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
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-primary">SkyySkill Labs</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#labs" className="text-muted-foreground hover:text-primary transition-colors">Labs</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">Clients</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="cta" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Brochure
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern Laboratory" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              India's Leading OEM for 
              <span className="bg-gradient-to-r from-aqua to-green bg-clip-text text-transparent"> EV & Green Skill Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From Engineering Colleges to Research Labs, we power the next generation of mobility and renewable energy innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Explore Labs
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-aqua mb-2">500+</div>
                <div className="text-white/80 text-sm">Institutions Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green mb-2">30,000+</div>
                <div className="text-white/80 text-sm">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">6</div>
                <div className="text-white/80 text-sm">Centres of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-aqua mb-2">Pan India</div>
                <div className="text-white/80 text-sm">Delivery Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Institutions Choose <span className="text-aqua">SkyySkill Labs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions that bridge the gap between academic learning and industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="w-8 h-8 text-aqua" />,
                title: "In-house Manufacturing & R&D",
                description: "Complete control over quality and customization"
              },
              {
                icon: <Award className="w-8 h-8 text-green" />,
                title: "Sector Skill Council Approved",
                description: "All models certified and industry-aligned"
              },
              {
                icon: <Building2 className="w-8 h-8 text-orange" />,
                title: "IITs, NITs & Govt. ITI Clients",
                description: "Trusted by India's premier institutions"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-aqua" />,
                title: "Curriculum-Aligned Skilling",
                description: "Perfect integration with academic programs"
              },
              {
                icon: <Cpu className="w-8 h-8 text-green" />,
                title: "AI & Digital Twin Enabled",
                description: "Next-generation technology integration"
              },
              {
                icon: <Settings className="w-8 h-8 text-orange" />,
                title: "Customizable Lab Packages",
                description: "From School to Research level configurations"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Labs Section */}
      <section id="labs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our <span className="text-aqua">Lab Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skill development labs designed for the future of technology
            </p>
          </div>

          <Tabs defaultValue="ev" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="ev" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                <span className="hidden sm:inline">EV Lab</span>
              </TabsTrigger>
              <TabsTrigger value="solar" className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <span className="hidden sm:inline">Solar Lab</span>
              </TabsTrigger>
              <TabsTrigger value="drone" className="flex items-center gap-2">
                <Plane className="w-4 h-4" />
                <span className="hidden sm:inline">Drone Lab</span>
              </TabsTrigger>
              <TabsTrigger value="additive" className="flex items-center gap-2">
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">3D Printing</span>
              </TabsTrigger>
              <TabsTrigger value="cnc" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">CNC Sim</span>
              </TabsTrigger>
              <TabsTrigger value="automotive" className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                <span className="hidden sm:inline">Automotive</span>
              </TabsTrigger>
            </TabsList>

            {[
              {
                id: "ev",
                title: "Electric Vehicle Skill Lab",
                description: "Comprehensive EV technology training with battery management, motor control, and charging systems",
                features: ["Battery Pack Analysis", "Motor Control Systems", "Charging Infrastructure", "EV Diagnostics"]
              },
              {
                id: "solar",
                title: "Solar/Renewable Energy Lab",
                description: "Complete renewable energy solutions covering solar PV, wind, and energy storage systems",
                features: ["Solar PV Systems", "Wind Energy", "Battery Storage", "Grid Integration"]
              },
              {
                id: "drone",
                title: "Drone Technology Lab",
                description: "UAV design, flight control, and applications in various industries",
                features: ["Flight Control Systems", "Autonomous Navigation", "Payload Integration", "Industry Applications"]
              },
              {
                id: "additive",
                title: "Additive Manufacturing Lab",
                description: "3D printing technologies from design to production including metal and polymer printing",
                features: ["FDM/SLA Printing", "Metal 3D Printing", "Design Software", "Post-Processing"]
              },
              {
                id: "cnc",
                title: "CNC Simulator Lab",
                description: "Virtual CNC machining with industry-standard software and simulation tools",
                features: ["CNC Programming", "Virtual Machining", "CAM Software", "Industry Simulation"]
              },
              {
                id: "automotive",
                title: "Automotive Technology Lab",
                description: "Traditional automotive systems with modern diagnostic and repair technologies",
                features: ["Engine Diagnostics", "Transmission Systems", "Brake Technology", "Automotive Electronics"]
              }
            ].map((lab) => (
              <TabsContent key={lab.id} value={lab.id}>
                <Card className="border-0 bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{lab.title}</CardTitle>
                    <CardDescription className="text-lg">{lab.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-4">Key Features:</h4>
                        <div className="space-y-2">
                          {lab.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <Button variant="aqua" size="lg">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Trusted by India's <span className="text-aqua">Leading Institutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-60">
            {[
              "IIT Dharwad", "NIT Raipur", "MNIT Bhopal", "Bosch", "Ola Electric", "ASDC",
              "Hero MotoCorp", "Mahindra", "TATA Motors", "Bajaj Auto", "TVS Motors", "L&T"
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className="h-16 flex items-center justify-center">
                  <span className="font-semibold text-muted-foreground">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our <span className="text-aqua">Partners Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SkyySkill Labs has transformed our engineering curriculum with their cutting-edge EV lab setup. Student engagement has increased significantly.",
                author: "Dr. Rajesh Kumar",
                position: "HOD, Electrical Engineering",
                institution: "IIT Dharwad"
              },
              {
                quote: "The comprehensive training and ongoing support provided by SkyySkill has been exceptional. Their solar lab is world-class.",
                author: "Prof. Meera Patel",
                position: "Director",
                institution: "NIT Raipur"
              },
              {
                quote: "Industry-aligned curriculum and practical training modules have prepared our students for real-world challenges effectively.",
                author: "Dr. Amit Sharma",
                position: "Principal",
                institution: "MNIT Bhopal"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 bg-gradient-card shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-aqua">{testimonial.institution}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Lead Capture */}
      <section id="contact" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-white/90">
                Let's co-create the future of skilling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <MapPin className="w-6 h-6 text-aqua" />
                  <div>
                    <div className="font-semibold">Headquarters</div>
                    <div className="text-white/80">Bengaluru, Karnataka, India</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Phone className="w-6 h-6 text-aqua" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-white/80">+91 9876543210</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Mail className="w-6 h-6 text-aqua" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">contact@skyyskill.com</div>
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="contact"
                        placeholder="Contact Number"
                        value={formData.contact}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                      <Input
                        name="institution"
                        placeholder="Institution / Company"
                        value={formData.institution}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="designation"
                        placeholder="Designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      />
                      <Input
                        name="department"
                        placeholder="Department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      />
                    </div>
                    <Textarea
                      name="requirement"
                      placeholder="Requirement / Query"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      rows={4}
                    />
                    <Button variant="cta" size="lg" type="submit" className="w-full">
                      Request Quote / Download Brochure
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Insights & <span className="text-aqua">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest in skill development and technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of EV Skill Development in India",
                excerpt: "How electric vehicle technology is reshaping automotive education and creating new career opportunities...",
                date: "January 15, 2024",
                category: "EV Technology"
              },
              {
                title: "AI-Powered Learning: Transforming Technical Education",
                excerpt: "Exploring how artificial intelligence and digital twins are revolutionizing hands-on learning experiences...",
                date: "January 10, 2024",
                category: "Innovation"
              },
              {
                title: "Building Centers of Excellence: A Blueprint for Success",
                excerpt: "Key strategies for educational institutions to establish world-class skill development centers...",
                date: "January 5, 2024",
                category: "Education"
              }
            ].map((article, index) => (
              <Card key={index} className="border-0 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 h-auto text-aqua hover:text-aqua/80">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl text-white">SkyySkill Labs</span>
              </div>
              <p className="text-white/80 mb-4">
                Empowering India's future with cutting-edge skill development solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-aqua">
                  <Globe className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Solutions</h4>
              <div className="space-y-2 text-white/80">
                <div>EV Skill Labs</div>
                <div>Solar Energy Labs</div>
                <div>Drone Technology</div>
                <div>Additive Manufacturing</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <div className="space-y-2 text-white/80">
                <div>About Us</div>
                <div>Our Clients</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/80">
                <div>Bengaluru, Karnataka</div>
                <div>+91 9876543210</div>
                <div>contact@skyyskill.com</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 SkyySkill Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
