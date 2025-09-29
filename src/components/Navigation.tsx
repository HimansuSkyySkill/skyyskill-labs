import FloatingButtons from "./FloatingButtons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { 
  Download, 
  ChevronDown,
  Car, 
  Sun, 
  Plane, 
  Printer, 
  Settings, 
  Wrench,
  Home,
  Phone,
  Brain,
  Store,
  Play
} from "lucide-react";
import skyyLogo from "@/assets/skyy-logo.png";

const Navigation = () => {
  const labs = [
    { name: "EV Centre of Excellence", path: "/ev-centre-of-excellence", icon: Car },
    { name: "Solar Lab CoE", path: "/solar-lab-coe", icon: Sun },
    { name: "Automotive Lab CoE", path: "/automotive-lab-coe", icon: Wrench },
    { name: "Drone Lab CoE", path: "/drone-lab", icon: Plane },
    { name: "3D Printing Lab", path: "/3d-printing-lab", icon: Printer },
    { name: "CNC Simulation Lab", path: "/cnc-lab", icon: Settings },
    { name: "AI Interactive Trainer", path: "https://www.skyyskilllabs.org/ai-trainer", icon: Brain },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-md border-b border-violet/20 z-50 shadow-card">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <img 
              src={skyyLogo} 
              alt="SkyySkill Labs" 
              className="h-10 md:h-12 relative z-10 transition-transform duration-300 group-hover:scale-105" 
            />
            {/* Glowing effect */}
            <div className="absolute inset-0 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"
                 style={{
                   background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.2))'
                 }}>
            </div>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/" className="text-foreground/80 hover:text-violet transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground/80 hover:text-violet transition-colors flex items-center gap-1 outline-none">
              Labs
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-md border border-violet/20 shadow-glow z-50">
              {labs.map((lab) => (
                <DropdownMenuItem key={lab.path} asChild>
                  {lab.name === "AI Interactive Trainer" ? (
                    <a 
                      href={lab.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted cursor-pointer"
                    >
                      <lab.icon className="w-4 h-4" />
                      {lab.name}
                    </a>
                  ) : (
                    <Link 
                      to={lab.path} 
                      className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted cursor-pointer"
                    >
                      <lab.icon className="w-4 h-4" />
                      {lab.name}
                    </Link>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/blogs" className="text-foreground/80 hover:text-violet transition-colors flex items-center gap-1">
            <Play className="w-4 h-4" />
            Blog
          </Link>
          
          <Link to="/contact" className="text-foreground/80 hover:text-violet transition-colors flex items-center gap-1">
            <Phone className="w-4 h-4" />
            Contact Us
          </Link>
          
          <a 
            href="https://skyyskill.com/career" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-violet transition-colors"
          >
            Careers
          </a>
          
          <LeadCaptureForm 
            type="brochure" 
            trigger={
              <Button variant="cta" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Brochure
              </Button>
            } 
          />
          
          <Link to="/reseller" className="text-tech-orange hover:text-tech-orange/80 transition-colors flex items-center gap-1 font-semibold bg-tech-orange/10 px-3 py-2 rounded-lg border border-tech-orange/30 hover:bg-tech-orange/20 hover:shadow-glow">
            <Store className="w-4 h-4" />
            Become Our Reseller
          </Link>
        </div>
        </div>
      </nav>
      <FloatingButtons />
    </>
  );
};

export default Navigation;