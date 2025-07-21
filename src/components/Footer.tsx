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
      {/* Compact Parent Company & Social Media Section */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Parent Company */}
            <div className="text-center lg:text-left">
              <Badge className="bg-orange/20 text-orange border-orange/30 mb-4 px-4 py-2 text-sm font-bold">
                🎓 Parent Company
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-3">
                Looking for Training or Courses?
              </h3>
              <p className="text-white/80 mb-4">
                Explore comprehensive skill development programs at SkyySkill Academy
              </p>
              <Button 
                onClick={() => window.open('https://www.skyyskill.com', '_blank')}
                variant="outline" 
                size="lg" 
                className="px-6 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit our Parent Company
              </Button>
            </div>

            {/* Social Media & Quick Contact */}
            <div className="text-center lg:text-right">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us & Connect</h3>
              <div className="flex justify-center lg:justify-end gap-4 mb-4">
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
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center lg:justify-end gap-2">
                  <Phone className="w-4 h-4 text-aqua" />
                  <span>+91 9237378472</span>
                </div>
                <div className="flex items-center justify-center lg:justify-end gap-2">
                  <Mail className="w-4 h-4 text-aqua" />
                  <span>proposal@evskilllab.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Main Footer Content */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Company Info - Compact */}
            <div>
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/43ea47b3-d839-4e69-9efe-a88a36777bbe.png" 
                  alt="SkyySkill Labs" 
                  className="h-10 mb-3" 
                />
              </div>
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                India's leading OEM for future-ready lab solutions. Trusted by 500+ institutions.
              </p>
              <div className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-aqua mt-0.5 flex-shrink-0" />
                <span>Hyderabad & Bhubaneswar, India</span>
              </div>
            </div>

            {/* Quick Links - Compact */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/" className="text-white/80 hover:text-aqua transition-colors">Home</Link>
                <Link to="/about" className="text-white/80 hover:text-aqua transition-colors">About</Link>
                <Link to="/contact" className="text-white/80 hover:text-aqua transition-colors">Contact</Link>
                <Link to="/blogs" className="text-white/80 hover:text-aqua transition-colors">Blogs</Link>
                <Link to="/reseller" className="text-white/80 hover:text-aqua transition-colors">Reseller</Link>
                <a href="https://skyyskill.com/career" target="_blank" className="text-white/80 hover:text-aqua transition-colors">Careers</a>
              </div>
            </div>

            {/* Lab Solutions - Compact */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Lab Solutions</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/ev-lab" className="text-white/80 hover:text-green transition-colors">EV Lab</Link>
                <Link to="/solar-lab" className="text-white/80 hover:text-green transition-colors">Solar Lab</Link>
                <Link to="/drone-lab" className="text-white/80 hover:text-green transition-colors">Drone Lab</Link>
                <Link to="/3d-printing-lab" className="text-white/80 hover:text-green transition-colors">3D Printing</Link>
                <Link to="/cnc-lab" className="text-white/80 hover:text-green transition-colors">CNC Sim</Link>
                <Link to="/ai-lab" className="text-white/80 hover:text-green transition-colors">AI Labs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
            <div className="text-white/70">
              © 2024 SkyySkill Labs. All rights reserved. | Part of SkyySkill Academy Group
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;