import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ExternalLink,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-navy/95 via-navy/90 to-primary/80 text-white">
      {/* Parent Company Section */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Parent Company Info */}
            <div className="text-center lg:text-left">
              <Badge className="bg-orange/20 text-orange border-orange/30 mb-3 px-4 py-2 text-sm font-bold">
                🎓 Parent Company
              </Badge>
              <h3 className="text-xl font-bold text-white mb-2">
                Looking for Training?
              </h3>
              <p className="text-sm text-white/80">
                Explore skill development at SkyySkill Academy
              </p>
            </div>
            
            {/* Action Button */}
            <div className="text-center">
              <Button 
                onClick={() => window.open('https://www.skyyskill.com', '_blank')}
                variant="outline" 
                size="sm" 
                className="px-6 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex justify-center lg:justify-end gap-3">
              <Button
                onClick={() => window.open('https://www.linkedin.com/company/ev-skill-lab/?viewAsMember=true', '_blank')}
                variant="outline"
                size="sm"
                className="px-4 py-2 bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                onClick={() => window.open('https://www.instagram.com/evskilllab/', '_blank')}
                variant="outline"
                size="sm"
                className="px-4 py-2 bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/43ea47b3-d839-4e69-9efe-a88a36777bbe.png" 
                  alt="SkyySkill Labs" 
                  className="h-10 mb-3" 
                />
              </div>
              <p className="text-white/80 mb-4 text-base leading-relaxed">
                India's leading OEM for future-ready lab solutions in Electric Vehicles, 
                Solar Energy, and Advanced Manufacturing. Trusted by IITs, NITs, and 500+ institutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-aqua" />
                  <span className="text-sm">+91 9237378472</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-aqua" />
                  <span className="text-sm">proposal@evskilllab.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-aqua mt-0.5 flex-shrink-0" />
                  <span className="text-xs">Dr. Atmaram Estates, 2nd Floor, NH 65, Beside TMC, Hyder Nagar, Kukatpally, Hyderabad, Telangana 500072</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/ev-lab" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    EV Lab
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/reseller" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    Become Reseller
                  </Link>
                </li>
              </ul>
            </div>

            {/* Lab Solutions */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Lab Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/ev-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    Electric Vehicle Lab
                  </Link>
                </li>
                <li>
                  <Link to="/solar-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    Solar Lab
                  </Link>
                </li>
                <li>
                  <Link to="/drone-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    Drone Lab
                  </Link>
                </li>
                <li>
                  <Link to="/3d-printing-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    3D Printing Lab
                  </Link>
                </li>
                <li>
                  <Link to="/cnc-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    CNC Simulation Lab
                  </Link>
                </li>
                <li>
                  <Link to="/ai-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3" />
                    AI Labs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">
              © 2024 SkyySkill Labs. All rights reserved. | Part of SkyySkill Academy Group
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;