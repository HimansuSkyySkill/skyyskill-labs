import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { 
  Target, 
  Lightbulb, 
  Users, 
  Building2, 
  ArrowRight,
  CheckCircle,
  Award,
  Globe
} from "lucide-react";

const About = () => {
  const clients = [
    "IIT Delhi", "IIT Bombay", "IIT Madras", "NIT Trichy", "NIT Warangal",
    "Capgemini", "Bosch", "ASDC", "Ola Electric", "Mahindra", "Tata Motors",
    "AICTE", "Skill India", "Government Polytechnics"
  ];

  const strengths = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "100% In-house Design & Manufacturing",
      description: "Complete control over quality and customization"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Custom Solutions per Curriculum",
      description: "Tailored to specific educational requirements"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Integrated AI & Digital Twin",
      description: "Cutting-edge technology in our products"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-2">
            About SkyySkill Labs
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            A Mission to Manufacture the Future of Skill India
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering educational institutions with world-class laboratory solutions 
            for EV, Green Energy, and Advanced Technology education.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-2xl font-semibold text-primary max-w-4xl mx-auto">
              "To become India's most trusted OEM for EV, Green Energy, and Advanced Tech Labs."
            </p>
          </div>
        </div>
      </section>

      {/* R&D & OEM Strength */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-6">R&D & OEM Strength</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our commitment to innovation and quality manufacturing sets us apart in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {strength.icon}
                  </div>
                  <CardTitle className="text-xl">{strength.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {strength.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-6">Leadership & Foundation</h2>
            <p className="text-2xl font-semibold text-primary max-w-4xl mx-auto">
              "Founded by educators and engineers to bridge the skilling gap"
            </p>
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Our leadership team combines decades of educational experience with cutting-edge 
              engineering expertise, ensuring our solutions meet real-world academic needs.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">Trusted by Leading Institutions</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              We're proud to partner with India's premier educational institutions and industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-sm">{client}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2">
              100+ Successful Installations Nationwide
            </Badge>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Labs?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the leading institutions that trust SkyySkill Labs for their advanced technology education needs.
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
                  Download Brochure
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;