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
  Phone
} from "lucide-react";

const Navigation = () => {
  const labs = [
    { name: "EV Lab", path: "/ev-lab", icon: Car },
    { name: "Solar Lab", path: "/solar-lab", icon: Sun },
    { name: "Drone Lab", path: "/drone-lab", icon: Plane },
    { name: "3D Printing Lab", path: "/3d-printing-lab", icon: Printer },
    { name: "CNC Simulation Lab", path: "/cnc-lab", icon: Settings },
    { name: "Automotive Lab", path: "/automotive-lab", icon: Wrench },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/43ea47b3-d839-4e69-9efe-a88a36777bbe.png" 
            alt="SkyySkill Labs" 
            className="h-10 md:h-12" 
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 outline-none">
              Labs
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
              {labs.map((lab) => (
                <DropdownMenuItem key={lab.path} asChild>
                  <Link 
                    to={lab.path} 
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted cursor-pointer"
                  >
                    <lab.icon className="w-4 h-4" />
                    {lab.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            <Phone className="w-4 h-4" />
            Contact Us
          </Link>
          
          <a 
            href="https://skyyskill.com/career" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;