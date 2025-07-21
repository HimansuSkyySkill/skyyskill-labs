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
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-orange/20 text-orange border-orange/30 mb-6 px-6 py-3 text-lg font-bold">
              🎓 Parent Company
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Looking for Training or Courses?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Explore comprehensive skill development programs at our parent company SkyySkill Academy
            </p>
            
            <Button 
              onClick={() => window.open('https://www.skyyskill.com', '_blank')}
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy mb-12"
            >
              <ExternalLink className="w-6 h-6 mr-3" />
              Visit our Parent Company Website
            </Button>

            {/* Social Media Links */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
              <div className="flex gap-6">
                <Button
                  onClick={() => window.open('https://www.linkedin.com/company/ev-skill-lab/?viewAsMember=true', '_blank')}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy"
                >
                  <Linkedin className="w-6 h-6 mr-3" />
                  LinkedIn
                </Button>
                <Button
                  onClick={() => window.open('https://www.instagram.com/evskilllab/', '_blank')}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy"
                >
                  <Instagram className="w-6 h-6 mr-3" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/43ea47b3-d839-4e69-9efe-a88a36777bbe.png" 
                  alt="SkyySkill Labs" 
                  className="h-12 mb-4" 
                />
              </div>
              <p className="text-white/80 mb-6 text-lg leading-relaxed">
                India's leading OEM for future-ready lab solutions in Electric Vehicles, 
                Solar Energy, and Advanced Manufacturing. Trusted by IITs, NITs, and 500+ institutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-aqua" />
                  <span>+91 9237378472</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-aqua" />
                  <span>proposal@evskilllab.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                  <span className="text-sm">Dr. Atmaram Estates, 2nd Floor, NH 65, Beside TMC, Hyder Nagar, Kukatpally, Hyderabad, Telangana 500072</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/ev-lab" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    EV Lab
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/reseller" className="text-white/80 hover:text-aqua transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Become Reseller
                  </Link>
                </li>
              </ul>
            </div>

            {/* Lab Solutions */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Lab Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/ev-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Electric Vehicle Lab
                  </Link>
                </li>
                <li>
                  <Link to="/solar-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Solar Lab
                  </Link>
                </li>
                <li>
                  <Link to="/drone-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Drone Lab
                  </Link>
                </li>
                <li>
                  <Link to="/3d-printing-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    3D Printing Lab
                  </Link>
                </li>
                <li>
                  <Link to="/cnc-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    CNC Simulation Lab
                  </Link>
                </li>
                <li>
                  <Link to="/ai-lab" className="text-white/80 hover:text-green transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    AI Labs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
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