import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
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
  Home
} from "lucide-react";

const EvLab = () => {
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
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/43ea47b3-d839-4e69-9efe-a88a36777bbe.png" alt="SkyySkill Labs" className="h-16 md:h-20" />
            <div className="hidden sm:block">
              <div className="text-sm text-muted-foreground font-medium">Empowering Education with Next-Gen Lab Solutions</div>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2">
              EV Skill Lab – Centre of Excellence
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              India's Most Advanced EV Skill Lab Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              From basic hands-on training to research-grade EV test rigs—SkyySkill Labs offers complete, 
              customizable EV Centres of Excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Target className="mr-2 w-4 h-4" />
                Explore Lab Models
              </Button>
              
              <LeadCaptureForm
                type="brochure"
                trigger={
                  <Button variant="outline" size="lg">
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
                    Request Quotation
                  </Button>
                }
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    <Badge className="bg-primary/10 text-primary">{program.duration}</Badge>
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
    </div>
  );
};

export default EvLab;