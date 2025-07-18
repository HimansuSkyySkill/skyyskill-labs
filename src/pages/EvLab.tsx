import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { 
  Zap, 
  Battery, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award
} from "lucide-react";

const EvLab = () => {
  const labTypes = {
    basic: {
      title: "Basic EV Lab",
      price: "₹3,50,000",
      description: "Perfect for undergraduate programs and introductory EV concepts",
      features: [
        "Basic EV chassis with motor",
        "Battery management system trainer",
        "Charging port demonstration",
        "Motor controller basics",
        "Safety systems overview",
        "Student workstation (4 students)",
        "Basic measurement tools",
        "Curriculum guide included"
      ],
      ideal: "Engineering colleges, Polytechnics"
    },
    intermediate: {
      title: "Intermediate EV Lab",
      price: "₹8,75,000",
      description: "Advanced features for comprehensive EV technology education",
      features: [
        "Complete functional EV platform",
        "Advanced battery management system",
        "Regenerative braking demonstration",
        "DC/AC motor comparison",
        "Charging infrastructure models",
        "Diagnostic tools and software",
        "IoT monitoring system",
        "Advanced measurement equipment",
        "Research project capabilities",
        "Multi-student access (8 students)"
      ],
      ideal: "Engineering colleges, Universities"
    },
    advanced: {
      title: "Advanced EV Lab",
      price: "₹15,25,000",
      description: "Industry-grade setup for research and advanced learning",
      features: [
        "Full-scale EV development platform",
        "Multiple battery chemistry testing",
        "Fast charging simulation",
        "Vehicle dynamics testing",
        "Digital twin integration",
        "AI-powered diagnostics",
        "Industry-standard software tools",
        "Research & development capabilities",
        "Real-time data analytics",
        "Professional measurement suite",
        "Multi-lab networking (12+ students)"
      ],
      ideal: "Research institutions, IITs, NITs"
    }
  };

  const addOnLabs = [
    {
      title: "Battery Technology Lab",
      price: "₹4,50,000",
      description: "Specialized lab for battery research and testing",
      features: ["Cell testing equipment", "Thermal management", "Safety protocols"]
    },
    {
      title: "Charging Infrastructure Lab",
      price: "₹6,20,000",
      description: "Complete charging station simulation and testing",
      features: ["AC/DC charging", "Grid integration", "Smart charging"]
    },
    {
      title: "Motor & Controller Lab",
      price: "₹5,80,000",
      description: "In-depth motor technology and control systems",
      features: ["BLDC/PMSM motors", "Controller programming", "Performance testing"]
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Students Trained", value: "10,000+" },
    { icon: <Award className="w-6 h-6" />, label: "Institutions", value: "150+" },
    { icon: <Star className="w-6 h-6" />, label: "Satisfaction Rate", value: "98%" },
    { icon: <Zap className="w-6 h-6" />, label: "Labs Installed", value: "500+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2">
              Electric Vehicle Labs
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              EV Lab Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Complete Electric Vehicle laboratory setups from basic learning to advanced research. 
              Industry-aligned curriculum and hands-on experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadCaptureForm
                type="quotation"
                trigger={
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Custom Quotation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                }
              />
              
              <LeadCaptureForm
                type="brochure"
                trigger={
                  <Button variant="outline" size="lg">
                    Download EV Lab Brochure
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

      {/* Lab Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Choose Your EV Lab Configuration</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From foundational learning to cutting-edge research, we have the perfect EV lab setup for your institution.
            </p>
          </div>

          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Lab</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate Lab</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Lab</TabsTrigger>
            </TabsList>

            {Object.entries(labTypes).map(([key, lab]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{lab.title}</CardTitle>
                        <CardDescription className="text-lg">{lab.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{lab.price}</div>
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          {lab.ideal}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          Included Features
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
                        <h4 className="font-semibold mb-4">What You Get</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Complete installation & setup</li>
                          <li>• Faculty training program</li>
                          <li>• Curriculum & lab manuals</li>
                          <li>• 2-year comprehensive warranty</li>
                          <li>• Technical support & maintenance</li>
                          <li>• Software updates included</li>
                        </ul>
                        
                        <div className="mt-6 space-y-3">
                          <LeadCaptureForm
                            type="quotation"
                            trigger={
                              <Button className="w-full">
                                Get Detailed Quotation
                              </Button>
                            }
                          />
                          
                          <LeadCaptureForm
                            type="brochure"
                            trigger={
                              <Button variant="outline" className="w-full">
                                Download Specifications
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

      {/* Add-on Labs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Specialized Add-on Labs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhance your EV lab with specialized modules for focused learning and research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOnLabs.map((lab, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{lab.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{lab.price}</div>
                  </div>
                  <CardDescription>{lab.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {lab.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <LeadCaptureForm
                    type="quotation"
                    trigger={
                      <Button variant="outline" className="w-full">
                        Get Quote
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-6">Ready to Electrify Your Education?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the leading institutions that are preparing students for the electric vehicle revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LeadCaptureForm
              type="quotation"
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Lab Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              }
            />
            
            <Button variant="outline" size="lg">
              <a href="/contact">Contact Our Experts</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvLab;