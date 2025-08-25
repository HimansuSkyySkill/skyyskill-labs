import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import Navigation from "@/components/Navigation";
import NewsEventsSection from "@/components/NewsEventsSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Battery, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Download,
  FileText,
  Calculator,
  GraduationCap,
  Building,
  Microscope,
  BookOpen,
  Target,
  Trophy,
  Home,
  Play,
  Car,
  Cpu,
  Cog,
  Globe
} from "lucide-react";

const EvLab = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Cursor tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleVideoClick = () => {
    setSelectedVideo("thOcbYE-Vqk");
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };
  const labTypes = {
    basic: {
      title: "Basic CoE",
      price: "₹15L+",
      space: "500 sqft",
      description: "Target: ITI, Polytechnics, Basic Engineering Courses",
      features: [
        "2-wheeler E-Scooter Cut Model with Servicing",
        "Battery Pack Tester (99V 20A)",
        "Pulse Spot Welder for Battery Assembly",
        "DIY Battery Manufacturing Kit (48V 15Ah)",
        "Open Models: BLDC Motor, Hub Motor, Differential",
        "BMS, SMPS, Controller, DC-DC Converter",
        "Cluster Display, EV Tree with LED",
        "Safety Tools"
      ],
      ideal: "ITI, Polytechnics, Basic Engineering"
    },
    intermediate: {
      title: "Intermediate CoE",
      price: "₹22L+",
      space: "700 sqft",
      description: "Target: Advanced ITI, Diploma Students",
      features: [
        "All Basic CoE components included",
        "3-Wheeler Prime Loader (Open Cargo)",
        "Basic Charging Station Instruction Kit",
        "8-Channel Battery Charging/Discharging Workbench",
        "Li-ion Battery Characteristics Trainer",
        "Enhanced diagnostic capabilities",
        "Advanced safety protocols"
      ],
      ideal: "Advanced ITI, Diploma Programs"
    },
    advanced: {
      title: "Advanced CoE",
      price: "₹32L–50L",
      space: "1150–1500+ sqft",
      description: "Target: BTech/Engineering Colleges & Skill Universities",
      features: [
        "All Basic + Intermediate components",
        "2-Wheeler Dyno Simulator",
        "3-Wheeler MIDC Test Rig (30Ah battery)",
        "4-Wheeler Drivetrain with MIDC + Regenerative System",
        "Power Electronics Demo Bench",
        "CAN-enabled BMS + Model-Based Design (MBD)",
        "Steer-by-Wire & Brake-by-Wire RIGs",
        "4-Wheeler Chassis Dyno"
      ],
      ideal: "BTech/Engineering Colleges, Universities"
    },
    addon: {
      title: "Add-On Research Labs",
      price: "₹50L to ₹2Cr+",
      space: "Custom",
      description: "Target: Research Labs, R&D Centres, Skill Universities",
      features: [
        "ADAS Calibration Chassis Dyno",
        "Programmable Modular Motor Control Unit",
        "Vehicle Control Unit (VCU)",
        "Steer-by-Wire, Brake-by-Wire, BMS with MBD",
        "EV Buggy Simulator with Live Telemetry",
        "IoT-enabled 4-Wheeler & E-Rickshaw Simulators",
        "200+ modular customization products"
      ],
      ideal: "Research Labs, R&D Centres"
    }
  };

  const trainingPrograms = [
    { name: "Basic EV Technology", duration: "48 hrs", certification: "ASDC Approved" },
    { name: "Battery Pack Design", duration: "49 hrs", certification: "ASDC Approved" },
    { name: "2/3/4 Wheeler EV Tech", duration: "24 hrs each", certification: "ASDC Approved" },
    { name: "EV Fundamentals", duration: "144 hrs", certification: "ASDC Approved" },
    { name: "Master Certification in EV Tech & Mfg.", duration: "8 weeks", certification: "ASDC Approved" },
    { name: "Software Courses", duration: "Flexible", certification: "MATLAB, SolidWorks, CATIA, ANSYS, AutoCAD" }
  ];

  const clients = [
    { name: "IIT Dharwad", logo: "🏛️" },
    { name: "NIT Raipur", logo: "🏛️" },
    { name: "MANIT Bhopal", logo: "🏛️" },
    { name: "TNS Foundation", logo: "🏢" },
    { name: "Ola", logo: "🚗" },
    { name: "MG Motors", logo: "🚗" },
    { name: "ASDC", logo: "🎓" }
  ];

  const galleryImages = [
    { id: 1, title: "EV Lab Setup at IIT", description: "Complete lab installation" },
    { id: 2, title: "Battery Testing Station", description: "Advanced testing equipment" },
    { id: 3, title: "Student Training Session", description: "Hands-on learning experience" },
    { id: 4, title: "Research Lab Configuration", description: "High-end research setup" }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Students Trained", value: "10,000+" },
    { icon: <Award className="w-6 h-6" />, label: "Institutions", value: "150+" },
    { icon: <Star className="w-6 h-6" />, label: "Satisfaction Rate", value: "98%" },
    { icon: <Zap className="w-6 h-6" />, label: "Labs Installed", value: "500+" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-primary/5 to-aqua/10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
        </div>
      </div>

      {/* Cursor Following Light */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-30"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, hsl(var(--aqua)) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Navigation */}
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <Zap className="w-4 h-4 mr-2 text-primary animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-aqua bg-clip-text text-transparent">
                EV Skill Lab – Centre of Excellence
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-aqua to-green bg-clip-text text-transparent animate-pulse">
                India's Most Advanced
              </span>
              <br />
              <span className="text-foreground">EV Skill Lab Ecosystem</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              From basic hands-on training to research-grade EV test rigs—SkyySkill Labs offers complete, 
              customizable EV Centres of Excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-aqua to-primary text-white border-0 px-8 hover:scale-105 transition-all duration-300">
                <Target className="mr-2 w-5 h-5" />
                Explore Lab Models
              </Button>
              
              <LeadCaptureForm
                type="brochure"
                trigger={
                  <Button variant="outline" size="lg" className="px-8 hover:scale-105 transition-all duration-300">
                    <Download className="mr-2 w-5 h-5" />
                    Download Brochure
                  </Button>
                }
              />
              
              <LeadCaptureForm
                type="quotation"
                trigger={
                  <Button variant="outline" size="lg" className="px-8 hover:scale-105 transition-all duration-300">
                    <Calculator className="mr-2 w-5 h-5" />
                    Request Quotation
                  </Button>
                }
              />
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-primary to-aqua rounded-full flex items-center justify-center text-white animate-pulse">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why EV CoE Section with Video */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-aqua/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-aqua/90 to-green/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              🎯 Why EV CoE is Essential
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why EV CoE is <span className="bg-gradient-to-r from-primary to-aqua bg-clip-text text-transparent">Required at Your College</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the strategic importance of establishing an Electric Vehicle Centre of Excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="relative">
              <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-0">
                  <div 
                    className="aspect-video cursor-pointer relative group"
                    onClick={handleVideoClick}
                  >
                    <img
                      src="https://img.youtube.com/vi/thOcbYE-Vqk/maxresdefault.jpg"
                      alt="Why EV CoE is Required at Your College"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
                      Click to Play
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-aqua to-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Readiness</h3>
                  <p className="text-muted-foreground">Prepare students for the rapidly growing EV industry with hands-on experience on real-world equipment.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certification & Recognition</h3>
                  <p className="text-muted-foreground">ASDC approved programs ensure your institution meets national skill development standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green to-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Future Technology Integration</h3>
                  <p className="text-muted-foreground">Stay ahead with AI, IoT, and digital twin technologies integrated into lab setups.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange to-aqua rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
                  <p className="text-muted-foreground">World-class lab setups that meet international educational and industry benchmarks.</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-aqua text-white px-8 mt-8 hover:scale-105 transition-all duration-300"
                onClick={handleVideoClick}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Full Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={handleCloseVideo}>
        <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
          <div className="relative bg-black rounded-lg overflow-hidden">
            {selectedVideo && (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Why EV CoE is Required at Your College"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Explore Lab Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">📘 Explore Our Lab Models</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete EV Centre of Excellence solutions tailored to your institution's needs and budget.
            </p>
          </div>

          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic CoE</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate CoE</TabsTrigger>
              <TabsTrigger value="advanced">Advanced CoE</TabsTrigger>
              <TabsTrigger value="addon">Add-On Research</TabsTrigger>
            </TabsList>

            {Object.entries(labTypes).map(([key, lab]) => (
              <TabsContent key={key} value={key}>
                <Card className={`border-l-4 ${
                  key === 'basic' ? 'border-l-blue-500 bg-blue-50/30' :
                  key === 'intermediate' ? 'border-l-yellow-500 bg-yellow-50/30' :
                  key === 'advanced' ? 'border-l-orange-500 bg-orange-50/30' :
                  'border-l-red-500 bg-red-50/30'
                }`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className={`text-2xl mb-2 ${
                          key === 'basic' ? 'text-blue-700' :
                          key === 'intermediate' ? 'text-yellow-700' :
                          key === 'advanced' ? 'text-orange-700' :
                          'text-red-700'
                        }`}>
                          {key === 'basic' ? '🟦' : key === 'intermediate' ? '🟨' : key === 'advanced' ? '🟧' : '🟥'} {lab.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium">{lab.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{lab.price}</div>
                        <Badge className="bg-accent/10 text-accent border-accent/20 mt-1">
                          {lab.space}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-1">{lab.ideal}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          Key Products & Features
                        </h4>
                        <ul className="space-y-2">
                          {lab.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-4">Complete Package Includes</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Complete installation & commissioning</li>
                          <li>• Faculty development program</li>
                          <li>• ASDC approved curriculum</li>
                          <li>• Student lab manuals & guides</li>
                          <li>• 2-year comprehensive warranty</li>
                          <li>• Free FDP every 6-8 months</li>
                          <li>• Technical support & maintenance</li>
                          <li>• Software licenses included</li>
                        </ul>
                        
                        <div className="mt-6 space-y-3">
                          <LeadCaptureForm
                            type="quotation"
                            trigger={
                              <Button className="w-full">
                                <Calculator className="mr-2 w-4 h-4" />
                                Get Custom Quote
                              </Button>
                            }
                          />
                          
                          <LeadCaptureForm
                            type="brochure"
                            trigger={
                              <Button variant="outline" className="w-full">
                                <FileText className="mr-2 w-4 h-4" />
                                Download Details
                              </Button>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">📚 Training Programs (ASDC Approved)</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skill development programs aligned with industry standards and accreditation requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    {program.name}
                  </CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge variant="primary-light">{program.duration}</Badge>
                    <Badge variant="outline">{program.certification}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Academic Alignment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">🧠 Research + Academic Alignment</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Accreditation Support</h3>
                <p className="text-sm text-muted-foreground">AICTE/NBA/NCVT accreditations</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Faculty Development</h3>
                <p className="text-sm text-muted-foreground">Internship + FDP + Patent Support</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">Free FDP every 6–8 months</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Microscope className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Research Support</h3>
                <p className="text-sm text-muted-foreground">Live Research Use-Cases</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">🎓 Client Testimonials & Partnerships</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading educational institutions and industry partners across India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{client.logo}</div>
                <div className="text-sm font-medium">{client.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">GRIET, Hyderabad</h4>
                    <p className="text-sm text-muted-foreground">
                      "The EV lab setup has transformed our curriculum delivery. Students are now industry-ready with hands-on experience."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Sandip University</h4>
                    <p className="text-sm text-muted-foreground">
                      "Excellent support and comprehensive training programs. The research capabilities have enhanced our academic offerings."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">🖼️ Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See our EV lab setups in action across various institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-primary" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">{image.title}</h4>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Always Sticky */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t-2 border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">📩 Ready to Build Your EV Centre of Excellence?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join 150+ institutions that trust SkyySkill Labs for their EV education needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <LeadCaptureForm
              type="brochure"
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Download className="mr-2 w-4 h-4" />
                  Download Brochure
                </Button>
              }
            />
            
            <LeadCaptureForm
              type="quotation"
              trigger={
                <Button variant="outline" size="lg">
                  <Calculator className="mr-2 w-4 h-4" />
                  Request Quote
                </Button>
              }
            />
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-2">🎯 SEO Keywords: EV Skill Lab India, EV Lab Equipment Manufacturer, Electric Vehicle CoE Setup</p>
            <p>EV Training Lab for Colleges, Digital Twin EV Testing, CAN BMS Test Rigs, ASDC EV Lab, Skill India EV Courses</p>
          </div>
        </div>
      </section>

      <NewsEventsSection />
      <Footer />
    </div>
  );
};

export default EvLab;