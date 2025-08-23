import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsEventsSection from "@/components/NewsEventsSection";
import { ArrowRight, Award, Users, Building2, Globe, CheckCircle, Cog, BookOpen, Shield, Cpu, Zap, Car, Sun, Plane, Printer, Settings, Wrench, Star, Play, Download, MapPin, Phone, Mail, Calendar, Camera, Trophy, Handshake, Brain } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";
import { PhotoGallery } from "@/components/PhotoGallery";
import FacultyFeedback from "@/components/FacultyFeedback";

// Video Carousel Component
const VideoCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<any>(null);
  const videos = [{
    id: "IPcGAYwm2XM",
    title: "Our CoE at Birla Vishwakarma Mahavidyalaya",
    thumbnail: `https://img.youtube.com/vi/IPcGAYwm2XM/maxresdefault.jpg`
  }, {
    id: "rc_MreN-n_0",
    title: "See our manufacturing facility",
    thumbnail: `https://img.youtube.com/vi/rc_MreN-n_0/maxresdefault.jpg`
  }, {
    id: "oo06Dp-2t5E",
    title: "BMS Can bus protocol training & Research module",
    thumbnail: `https://img.youtube.com/vi/oo06Dp-2t5E/maxresdefault.jpg`
  }, {
    id: "dn0Rrno-5jY",
    title: "Lab at NIT Raipur",
    thumbnail: `https://img.youtube.com/vi/dn0Rrno-5jY/maxresdefault.jpg`
  }, {
    id: "dNVI0MIYNrY",
    title: "Charging System training",
    thumbnail: `https://img.youtube.com/vi/dNVI0MIYNrY/maxresdefault.jpg`
  }, {
    id: "SVkZTWtsrj4",
    title: "MIDC based variable load Motor controller testing bench",
    thumbnail: `https://img.youtube.com/vi/SVkZTWtsrj4/maxresdefault.jpg`
  }, {
    id: "Ur00tKpaCxY",
    title: "Li-Ion characteristic training bench",
    thumbnail: `https://img.youtube.com/vi/Ur00tKpaCxY/maxresdefault.jpg`
  }, {
    id: "IR6KCQojENU",
    title: "Sample lab at Govt Polytechnic",
    thumbnail: `https://img.youtube.com/vi/IR6KCQojENU/maxresdefault.jpg`
  }];
  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
    setIsAutoPlaying(false);
  };
  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setIsAutoPlaying(true);
  };
  return <div className="max-w-6xl mx-auto">
      <Carousel ref={carouselRef} opts={{
      align: "start",
      loop: true
    }} plugins={isAutoPlaying ? [Autoplay({
      delay: 5000
    })] : []} className="w-full">
        <CarouselContent>
          {videos.map((video, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-0 shadow-xl bg-background/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden cursor-pointer relative group-hover:shadow-lg transition-all duration-300" onClick={() => handleVideoClick(video.id)}>
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      Click to Play
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center text-primary group-hover:text-aqua transition-colors duration-300">
                    {video.title}
                  </h3>
                </CardContent>
              </Card>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={handleCloseVideo}>
        <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
          <div className="relative bg-black rounded-lg overflow-hidden">
            {selectedVideo && <div className="aspect-video">
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} title="Video Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
              </div>}
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};

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

  // Cursor tracking effect for AI section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursorLight = document.getElementById('cursor-light');
      if (cursorLight) {
        const rect = cursorLight.parentElement?.getBoundingClientRect();
        if (rect) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          cursorLight.style.left = `${x}px`;
          cursorLight.style.top = `${y}px`;
          cursorLight.style.transform = 'translate(-50%, -50%)';
        }
      }
    };
    const aiSection = document.getElementById('ai-trainer-section');
    if (aiSection) {
      aiSection.addEventListener('mousemove', handleMouseMove);
      return () => aiSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ai-grid">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Modern Laboratory" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-hero"></div>
          
          {/* AI Floating Elements - Reduced Glow */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-navy/10 rounded-full blur-xl animate-ai-breathe"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-aqua/10 rounded-full blur-xl animate-ai-breathe" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-green/10 rounded-full blur-xl animate-ai-breathe" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="mb-8">
              <Badge className="bg-aqua/20 text-aqua border-aqua/30 mb-6 px-4 py-2 text-sm font-medium">🏆 India's Leading OEM for EV & Green Skill Labs & CoEs</Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-hologram">
              India's First AI-Ready
              <span className="block bg-gradient-to-r from-cyan via-electric-blue to-aqua bg-clip-text text-transparent mt-2">EV Centre of Excellence Ecosystem</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
              From ITI to IIT, SkyySkill delivers Industry 4.0-aligned, AI-integrated, patented EV Labs
            </p>
            <p className="text-base md:text-lg text-cyan/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Empowering institutions with cutting-edge infrastructure and innovation capacity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <LeadCaptureForm 
                type="quotation" 
                trigger={
                  <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
                    <Play className="w-6 h-6 mr-3" />
                    Get a Quotation
                  </Button>
                } 
              />
              <LeadCaptureForm type="brochure" trigger={<Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy">
                    <Download className="w-6 h-6 mr-3" />
                    Download Brochure
                  </Button>} />
            </div>

            {/* Enhanced Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-dark-navy/40 backdrop-blur-sm rounded-2xl border border-cyan/20 animate-neural-pulse">
                <div className="text-4xl md:text-5xl font-bold text-cyan mb-3">60+</div>
                <div className="text-white/90 text-sm font-medium">Labs</div>
                <div className="text-cyan/70 text-xs mt-1">Across India</div>
              </div>
              <div className="text-center p-6 bg-dark-navy/40 backdrop-blur-sm rounded-2xl border border-electric-blue/20 animate-neural-pulse" style={{animationDelay: '0.5s'}}>
                <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-3">30K+</div>
                <div className="text-white/90 text-sm font-medium">Students Trained</div>
                <div className="text-electric-blue/70 text-xs mt-1">Annually</div>
              </div>
              <div className="text-center p-6 bg-dark-navy/40 backdrop-blur-sm rounded-2xl border border-aqua/20 animate-neural-pulse" style={{animationDelay: '1s'}}>
                <div className="text-4xl md:text-5xl font-bold text-aqua mb-3">625+</div>
                <div className="text-white/90 text-sm font-medium">Product Category</div>
                <div className="text-aqua/70 text-xs mt-1">Cutting-edge Tech</div>
              </div>
              <div className="text-center p-6 bg-dark-navy/40 backdrop-blur-sm rounded-2xl border border-cyan/20 animate-neural-pulse" style={{animationDelay: '1.5s'}}>
                <div className="text-4xl md:text-5xl font-bold text-cyan mb-3">15+</div>
                <div className="text-white/90 text-sm font-medium">Years Experience</div>
                <div className="text-cyan/70 text-xs mt-1">Industry Leader</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-aqua/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-aqua/90 to-green/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              ✨ The SkyySkill Advantage
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
              Why Leading Institutions 
              <span className="block bg-gradient-to-r from-aqua via-green to-primary bg-clip-text text-transparent mt-4">Choose SkyySkill Labs</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Research-driven. Industry-aligned. Future-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[{
            icon: <Cog className="w-8 h-8" />,
            title: "In-house Manufacturing & R&D",
            description: "Complete control over quality, customization, and innovation. Our state-of-the-art facilities ensure precision engineering.",
            highlight: "100% Made in India",
            color: "primary"
          }, {
            icon: <Award className="w-8 h-8" />,
            title: "Sector Skill Council Approved",
            description: "All lab models are certified and aligned with national skill development standards and industry requirements.",
            highlight: "Government Certified",
            color: "aqua"
          }, {
            icon: <Building2 className="w-8 h-8" />,
            title: "Premier Institution Network",
            description: "Trusted by IITs, NITs, Government ITIs, and leading private institutions across India.",
            highlight: "50+ IITs & NITs",
            color: "green"
          }, {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Curriculum-Aligned Solutions",
            description: "Perfect integration with academic programs, from basic concepts to advanced research applications.",
            highlight: "Future-Ready Skills",
            color: "orange"
          }, {
            icon: <Cpu className="w-8 h-8" />,
            title: "AI & Digital Twin Enabled",
            description: "Next-generation technology integration with simulation, virtual reality, and AI-powered learning modules.",
            highlight: "Industry 4.0 Ready",
            color: "primary"
          }, {
            icon: <Settings className="w-8 h-8" />,
            title: "Flexible Lab Configurations",
            description: "From basic school setups to advanced research facilities, fully customizable to your requirements.",
            highlight: "Scalable Solutions",
            color: "aqua"
          }].map((item, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-${item.color} rounded-xl flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <Badge className={`bg-${item.color}/10 text-${item.color} border-${item.color}/20`}>
                      {item.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-navy/10 via-aqua/5 to-green/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Proven Track Record
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence is reflected in our achievements and client satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2">60+</div>
                <div className="text-sm text-muted-foreground">Labs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-aqua mb-2">2.5L+</div>
                <div className="text-sm text-muted-foreground">Trained Across Our Labs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green mb-2">600+</div>
                <div className="text-sm text-muted-foreground">Items Manufactured In House</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electric Vehicle CoE Section */}
      <section id="ev-coe" className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-2">
              🏆 Center of Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Electric Vehicle <span className="text-aqua">Center of Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              India's most comprehensive EV skill development ecosystem with cutting-edge technology 
              and industry-aligned training programs.
            </p>
            {/* Metrics Section */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-xs text-muted-foreground">Institutions</div>
              </div>
              <div className="text-center p-4 bg-aqua/5 rounded-xl">
                <div className="text-2xl font-bold text-aqua">15K+</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
              <div className="text-center p-4 bg-green/5 rounded-xl">
                <div className="text-2xl font-bold text-green">99%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.open('https://www.evskilllab.com', '_blank')} size="lg" className="bg-gradient-to-r from-primary via-aqua to-green hover:from-primary/90 hover:via-aqua/90 hover:to-green/90 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Car className="w-6 h-6 mr-3" />
                Explore our various labs
              </Button>
              <LeadCaptureForm 
                type="quotation" 
                trigger={
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                    Get a quotation
                  </Button>
                } 
              />
              <LeadCaptureForm 
                type="brochure" 
                trigger={
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                    Download Brochure
                  </Button>
                } 
              />
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                Know More
              </Button>
            </div>
          </div>

          {/* Lab Images Carousel - Moved up */}
          <div className="container mx-auto px-4 py-12">
            <div className="relative bg-gradient-to-br from-primary/10 to-aqua/10 p-4 lg:p-6 rounded-2xl max-w-4xl mx-auto">
              <Carousel className="w-full max-w-md mx-auto" plugins={[Autoplay({
              delay: 2000
            })]}>
                <CarouselContent>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/44f1617a-3351-4ffe-b6e9-bd19b5487061.png" alt="EV Lab Equipment Display" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/44f1617a-3351-4ffe-b6e9-bd19b5487061.png" alt="EV Lab Equipment Display" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/66f17b2d-4841-46ae-8c59-d86053609fcd.png" alt="EV Lab Training Systems" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/66f17b2d-4841-46ae-8c59-d86053609fcd.png" alt="EV Lab Training Systems" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/a795a1e7-2815-4fde-b4c4-b2e5554a4476.png" alt="EV Components Lab" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/a795a1e7-2815-4fde-b4c4-b2e5554a4476.png" alt="EV Components Lab" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/c6671eee-13e6-440b-8270-1cc8862cc4b1.png" alt="EV Testing Lab Overview" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/c6671eee-13e6-440b-8270-1cc8862cc4b1.png" alt="EV Testing Lab Overview" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/7136fb6c-8ed0-4863-bf95-3ed7e518119a.png" alt="Battery Technology Lab" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/7136fb6c-8ed0-4863-bf95-3ed7e518119a.png" alt="Battery Technology Lab" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/d1bd14a3-43d1-4305-ac7e-19c00b6a835b.png" alt="EV Skills Training Center" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/d1bd14a3-43d1-4305-ac7e-19c00b6a835b.png" alt="EV Skills Training Center" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/c96ae964-86d9-4628-a53e-ccc2d9314e3a.png" alt="Advanced EV Lab Setup" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/c96ae964-86d9-4628-a53e-ccc2d9314e3a.png" alt="Advanced EV Lab Setup" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/4a10bf6b-dbcf-4d08-ae97-eefaf62af213.png" alt="EV Testing Equipment" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/4a10bf6b-dbcf-4d08-ae97-eefaf62af213.png" alt="EV Testing Equipment" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/0d0bf5c8-113c-49c1-93df-41dfbcb4c921.png" alt="Battery Analysis System" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/0d0bf5c8-113c-49c1-93df-41dfbcb4c921.png" alt="Battery Analysis System" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                  <CarouselItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img src="/lovable-uploads/13281197-eba4-4fbd-b5a0-d1d6ee060741.png" alt="Electrical Training Kit" className="w-full h-full object-cover" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <img src="/lovable-uploads/13281197-eba4-4fbd-b5a0-d1d6ee060741.png" alt="Electrical Training Kit" className="w-full h-auto object-contain rounded-lg" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>

          {/* EV Lab Details */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary text-white shadow-lg">
                    <Car className="w-6 h-6" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    ASDC Approved
                  </Badge>
                </div>
                
                <h3 className="text-3xl font-bold text-primary mb-4">Electric Vehicle Technology Lab</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Comprehensive EV ecosystem training covering battery technology, motor systems, charging infrastructure, and vehicle diagnostics for the next generation of automotive engineers.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green" />
                      Core Modules
                    </h4>
                    <div className="space-y-3">
                      {["Battery Management Systems", "BLDC Motor Control", "Fast Charging Technology"].map((feature, index) => <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-aqua rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green" />
                      Advanced Features
                    </h4>
                    <div className="space-y-3">
                      {["EV Diagnostics & Testing", "Hybrid Vehicle Systems", "Safety & Protection Circuits"].map((feature, index) => <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Labs Section */}
      <section id="other-labs" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-aqua/10 text-aqua border-aqua/20 mb-6 px-4 py-2">
              🔬 Technology Labs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Other Lab/ <span className="text-aqua">CoE Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive lab solutions across emerging technology domains for future-ready skill development.
            </p>
          </div>

          <Tabs defaultValue="solar" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 bg-background/50 backdrop-blur-sm border border-border/50 p-1 h-auto">
                <TabsTrigger value="solar" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-aqua data-[state=active]:text-white">
                  <Sun className="w-8 h-8" />
                  <span className="text-xs font-medium">Solar Lab</span>
                </TabsTrigger>
                <TabsTrigger value="drone" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-green data-[state=active]:text-white">
                  <Plane className="w-8 h-8" />
                  <span className="text-xs font-medium">Drone Lab</span>
                </TabsTrigger>
                <TabsTrigger value="additive" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-orange data-[state=active]:text-white">
                  <Printer className="w-8 h-8" />
                  <span className="text-xs font-medium">3D Printing</span>
                </TabsTrigger>
                <TabsTrigger value="cnc" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Settings className="w-8 h-8" />
                  <span className="text-xs font-medium">CNC Sim</span>
                </TabsTrigger>
                <TabsTrigger value="automotive" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-aqua data-[state=active]:text-white">
                  <Wrench className="w-8 h-8" />
                  <span className="text-xs font-medium">Automotive</span>
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:bg-green data-[state=active]:text-white">
                  <Brain className="w-8 h-8" />
                  <span className="text-xs font-medium">AI Labs</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {[{
            id: "solar",
            title: "Solar & Renewable Energy Lab",
            description: "Complete renewable energy solutions covering photovoltaic systems, wind energy, energy storage, and smart grid integration for sustainable energy professionals.",
            features: ["Solar PV Design & Installation", "Wind Energy Systems", "Battery Storage Solutions", "Grid-Tie Inverters", "Energy Monitoring", "Hybrid Power Systems"],
            color: "aqua",
            stats: {
              institutions: "150+",
              students: "12K+",
              certifications: "MNRE Aligned"
            }
          }, {
            id: "drone",
            title: "Unmanned Aerial Vehicle Lab",
            description: "Advanced UAV technology covering drone assembly, flight control systems, autonomous navigation, and industry-specific applications for aerospace and surveillance sectors.",
            features: ["Flight Control Systems", "Autonomous Navigation", "Gimbal & Camera Integration", "Mission Planning Software", "Industry Applications", "Safety Protocols"],
            color: "green",
            stats: {
              institutions: "100+",
              students: "8K+",
              certifications: "DGCA Guidelines"
            }
          }, {
            id: "additive",
            title: "Additive Manufacturing Lab",
            description: "Cutting-edge 3D printing technologies from rapid prototyping to production-grade manufacturing, covering polymer, metal, and ceramic additive processes.",
            features: ["FDM/SLA/SLS Printing", "Metal 3D Printing", "CAD/CAM Integration", "Post-Processing Techniques", "Quality Control", "Material Science"],
            color: "orange",
            stats: {
              institutions: "120+",
              students: "10K+",
              certifications: "Industry Standard"
            }
          }, {
            id: "cnc",
            title: "CNC Simulation & Programming Lab",
            description: "Virtual CNC machining environment with industry-standard software, simulation tools, and programming techniques for precision manufacturing education.",
            features: ["CNC Programming (G & M Codes)", "Virtual Machining", "CAM Software Training", "Toolpath Optimization", "Industry Simulation", "Quality Inspection"],
            color: "primary",
            stats: {
              institutions: "180+",
              students: "14K+",
              certifications: "ISO Compliant"
            }
          }, {
            id: "automotive",
            title: "Advanced Automotive Technology Lab",
            description: "Modern automotive systems covering engine management, transmission technology, vehicle diagnostics, and emerging automotive electronics for future mobility.",
            features: ["Engine Management Systems", "Transmission Technology", "Vehicle Diagnostics", "Automotive Electronics", "Connected Car Tech", "Emission Control"],
            color: "aqua",
            stats: {
              institutions: "250+",
              students: "18K+",
              certifications: "ARAI Recognized"
            }
          }, {
            id: "ai",
            title: "Artificial Intelligence & Machine Learning Lab",
            description: "Next-generation AI and ML laboratory featuring deep learning frameworks, computer vision, natural language processing, and robotics for emerging technology education.",
            features: ["Machine Learning Algorithms", "Computer Vision Systems", "Natural Language Processing", "AI-Powered Robotics", "Deep Learning Frameworks", "Industry AI Applications"],
            color: "green",
            stats: {
              institutions: "80+",
              students: "6K+",
              certifications: "Industry Aligned"
            }
          }].map(lab => <TabsContent key={lab.id} value={lab.id} className="mt-0">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${lab.color} text-white shadow-lg`}>
                          {lab.id === "solar" && <Sun className="w-6 h-6" />}
                          {lab.id === "drone" && <Plane className="w-6 h-6" />}
                          {lab.id === "additive" && <Printer className="w-6 h-6" />}
                          {lab.id === "cnc" && <Settings className="w-6 h-6" />}
                          {lab.id === "automotive" && <Wrench className="w-6 h-6" />}
                          {lab.id === "ai" && <Brain className="w-6 h-6" />}
                        </div>
                        <Badge className={`bg-${lab.color}/10 text-${lab.color} border-${lab.color}/20`}>
                          Next-Gen Technology
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-primary mb-4">{lab.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">{lab.description}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green" />
                            Core Modules
                          </h4>
                          <div className="space-y-3">
                            {lab.features.slice(0, 3).map((feature, index) => <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-aqua rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>)}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green" />
                            Advanced Features
                          </h4>
                          <div className="space-y-3">
                            {lab.features.slice(3).map((feature, index) => <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>)}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <LeadCaptureForm type="demo" trigger={<Button className={`bg-${lab.color} hover:bg-${lab.color}/90 text-white`} size="lg">
                              Request Demo
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>} />
                        <LeadCaptureForm type="specs" trigger={<Button variant="outline" size="lg">
                              Download Specs
                              <Download className="w-4 h-4 ml-2" />
                            </Button>} />
                        <Button variant="secondary" size="lg" onClick={() => {
                      if (lab.id === "ev") {
                        window.open("https://www.evskilllab.com", "_blank");
                      } else if (lab.id === "solar") {
                        window.open("https://www.evskilllab.com/solarlab", "_blank");
                      } else if (lab.id === "cnc") {
                        window.open("https://www.evskilllab.com/cnc-simulator", "_blank");
                      } else if (lab.id === "drone") {
                        window.location.href = "/drone-lab";
                      } else if (lab.id === "automotive") {
                        window.location.href = "/automotive-lab";
                      } else if (lab.id === "additive") {
                        window.location.href = "/3d-printing-lab";
                      }
                    }} className="bg-gradient-to-r from-aqua to-green text-white border-0 hover:from-aqua/90 hover:to-green/90">
                          Know More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Stats Side */}
                    <div className="bg-gradient-to-br from-primary/5 via-aqua/5 to-green/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <h4 className="text-xl font-bold text-primary mb-2">Lab Impact</h4>
                        <p className="text-sm text-muted-foreground">Real numbers, real results</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6">
                        <div className="text-center p-6 bg-background/50 rounded-2xl border border-border/50">
                          <div className="text-3xl font-bold text-primary mb-2">{lab.stats.institutions}</div>
                          <div className="text-sm text-muted-foreground">Institutions Equipped</div>
                        </div>
                        <div className="text-center p-6 bg-background/50 rounded-2xl border border-border/50">
                          <div className="text-3xl font-bold text-aqua mb-2">{lab.stats.students}</div>
                          <div className="text-sm text-muted-foreground">Students Trained</div>
                        </div>
                        <div className="text-center p-6 bg-background/50 rounded-2xl border border-border/50">
                          <div className="text-lg font-bold text-green mb-2">{lab.stats.certifications}</div>
                          <div className="text-sm text-muted-foreground">Certification</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>)}
          </Tabs>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Enhanced Background Design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-primary/5 to-aqua/10"></div>
          <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/90"></div>
          
          {/* Floating geometric elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-aqua/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green/10 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange/10 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-aqua/90 to-green/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              🎥 View Our Labs in Action
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              View Our Various <span className="text-aqua">Labs / Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our state-of-the-art facilities and innovative training solutions in action
            </p>
          </div>

          {/* Video Carousel */}
          <VideoCarousel />
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-12 bg-secondary/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Trusted by India's <span className="text-aqua">Leading Institutions</span>
            </h2>
          </div>

          {/* Auto-sliding logos */}
          <div className="relative">
            <div className="flex animate-marquee space-x-16 items-center">
              {["IIT Dharwad", "NIT Raipur", "MNIT Bhopal", "Bosch", "Ola Electric", "ASDC", "Hero MotoCorp", "Mahindra", "TATA Motors", "Bajaj Auto", "TVS Motors", "L&T"].map((client, index) => <div key={index} className="flex-shrink-0 w-48 h-20 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="font-bold text-lg text-foreground whitespace-nowrap">{client}</span>
                </div>)}
              {/* Duplicate for seamless loop */}
              {["IIT Dharwad", "NIT Raipur", "MNIT Bhopal", "Bosch", "Ola Electric", "ASDC", "Hero MotoCorp", "Mahindra", "TATA Motors", "Bajaj Auto", "TVS Motors", "L&T"].map((client, index) => <div key={`dup-${index}`} className="flex-shrink-0 w-48 h-20 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="font-bold text-lg text-foreground whitespace-nowrap">{client}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our <span className="text-aqua">Partners Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            quote: "SkyySkill Labs has transformed our engineering curriculum with their cutting-edge EV lab setup. Student engagement has increased significantly.",
            author: "Dr. Rajesh Kumar",
            position: "HOD, Electrical Engineering",
            institution: "IIT Dharwad"
          }, {
            quote: "The comprehensive training and ongoing support provided by SkyySkill has been exceptional. Their solar lab is world-class.",
            author: "Prof. Meera Patel",
            position: "Director",
            institution: "NIT Raipur"
          }, {
            quote: "Industry-aligned curriculum and practical training modules have prepared our students for real-world challenges effectively.",
            author: "Dr. Amit Sharma",
            position: "Principal",
            institution: "MNIT Bhopal"
          }].map((testimonial, index) => <Card key={index} className="border-0 bg-gradient-card shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange text-orange" />)}
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
              </Card>)}
          </div>

          {/* AI Trainer Banner */}
          <div className="mt-12">
            <Card id="ai-trainer-section" className="border-0 shadow-2xl bg-gradient-to-r from-primary/10 via-aqua/5 to-green/10 overflow-hidden">
              <CardContent className="p-8 relative overflow-hidden">
                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-aqua/30 to-green/20"></div>
                  <div className="absolute inset-0" style={{
                  backgroundImage: `
                      linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                  backgroundSize: '20px 20px',
                  animation: 'grid-move 8s linear infinite'
                }}></div>
                </div>

                {/* Cursor Following Light Effect */}
                <div id="cursor-light" className="absolute w-96 h-96 bg-gradient-radial from-aqua/30 via-primary/20 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-300 ease-out" style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}></div>

                {/* Floating AI Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-aqua/60 rounded-full animate-float" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}></div>)}
                </div>

                {/* Main Content */}
                <div className="relative z-10 text-center">
                  <Badge className="bg-gradient-to-r from-aqua/90 to-primary/80 text-white border-0 mb-6 px-6 py-3 text-lg font-bold shadow-lg animate-pulse-glow">
                    <Brain className="w-5 h-5 mr-2 animate-spin-slow" />
                    AI-Powered Training
                  </Badge>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
                    Meet Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua via-green to-primary animate-gradient-x">AI Trainer</span>
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in-delay">
                    Experience next-generation interactive learning with our EV Guru. 
                    Get instant AI-powered answers, personalized guidance, and immersive training.
                  </p>
                  
                  {/* AI Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
                    <div className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-aqua/20 hover:border-aqua/40 transition-all animate-scale-in">
                      <div className="text-2xl font-bold text-aqua">24/7</div>
                      <div className="text-xs text-muted-foreground">AI Available</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-green/20 hover:border-green/40 transition-all animate-scale-in" style={{
                    animationDelay: '0.1s'
                  }}>
                      <div className="text-2xl font-bold text-green">∞</div>
                      <div className="text-xs text-muted-foreground">Learning Paths</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all animate-scale-in" style={{
                    animationDelay: '0.2s'
                  }}>
                      <div className="text-2xl font-bold text-primary">AI</div>
                      <div className="text-xs text-muted-foreground">Powered</div>
                    </div>
                  </div>

                  <Link to="/ai-trainer">
                    <Button size="lg" className="relative overflow-hidden bg-gradient-to-r from-primary via-aqua to-green hover:from-primary/90 hover:via-aqua/90 hover:to-green/90 text-white text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                      <Brain className="w-6 h-6 mr-3" />
                      Try AI Trainer Now
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* News & Events Section */}
      <section className="py-16 bg-gradient-to-br from-green/5 via-background to-aqua/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-green/90 to-aqua/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              News & Events
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Latest <span className="text-aqua">News & Events</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest developments, events, and industry insights.
            </p>
            <Button onClick={() => window.open('https://www.evskilllab.com/news-and-events', '_blank')} size="lg" className="bg-green hover:bg-green/90 text-lg px-10 py-6 h-auto">
              <Calendar className="w-5 h-5 mr-3" />
              View All News & Events
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "National Skill Development Summit 2024",
            date: "March 15, 2024",
            type: "Event",
            description: "Join us at the National Skill Development Summit where we'll showcase our latest EV lab innovations and training methodologies.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
          }, {
            title: "Partnership with Leading Automotive Companies",
            date: "February 28, 2024",
            type: "News",
            description: "SkyySkill Labs announces strategic partnerships with major automotive manufacturers to enhance EV skill development programs.",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
          }, {
            title: "New AI-Powered Lab Solutions Launch",
            date: "February 10, 2024",
            type: "Product Launch",
            description: "Introducing our revolutionary AI-integrated laboratory equipment designed for next-generation technical education.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
          }].map((item, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={item.type === 'Event' ? 'default' : item.type === 'News' ? 'secondary' : 'outline'} className="text-xs">
                      {item.type}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Faculty Feedback Section */}
      <FacultyFeedback />

      {/* Product Gallery Section */}
      <PhotoGallery />


      {/* Contact/Lead Capture */}
      <section id="contact" className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-white/90">
                Let's co-create the future of skilling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-white">
                  <MapPin className="w-6 h-6 text-aqua mt-1" />
                  <div>
                    <div className="font-semibold">Head Office</div>
                    <div className="text-white/80">Dr. Atmaram Estates, 2nd Floor, NH 65, Beside TMC, Hyder Nagar, Kukatpally, Hyderabad, Telangana 500072</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-white">
                  <Phone className="w-6 h-6 text-aqua mt-1" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-white/80">+91 9237378472, +91-92373 82498, +91-9348291070</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-white">
                  <Mail className="w-6 h-6 text-aqua mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">proposal@evskilllab.com<br />ashmita.dutta@skyyskill.com</div>
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" required />
                      <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" required />
                      <Input name="institution" placeholder="Institution / Company" value={formData.institution} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="designation" placeholder="Designation" value={formData.designation} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                      <Input name="department" placeholder="Department" value={formData.department} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                    </div>
                    <Textarea name="requirement" placeholder="Requirement / Query" value={formData.requirement} onChange={handleInputChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" rows={4} />
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

      {/* Office Locations Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-primary/90 to-aqua/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg">
              <MapPin className="w-5 h-5 mr-2" />
              Our Locations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Visit Our <span className="text-aqua">Office Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with us at our state-of-the-art facilities across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Hyderabad Office */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Headquarters
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Hyderabad Office</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground">Dr. Atmaram Estates, 2nd Floor, NH 65, Beside TMC, Hyder Nagar, Kukatpally, Hyderabad, Telangana 500072</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground">+91 9237378472, +91-92373 82498, +91-9348291070</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">proposal@evskilllab.com<br />ashmita.dutta@skyyskill.com</div>
                    </div>
                  </div>
                </div>
                <Button onClick={() => window.open('https://maps.app.goo.gl/H2aYGspRFg1MAJDUA', '_blank')} className="w-full bg-primary hover:bg-primary/90">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Bhubaneswar Office */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-aqua rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-aqua/10 text-aqua border-aqua/20">
                    Regional Office
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Bhubaneswar Office</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground">Room Number 302, Campus 11, KIIT University, KIIT TBI, Patia, Bhubaneswar, Odisha 751024</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground">+91 9237378472, +91-92373 82498, +91-9348291070</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-aqua mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">proposal@evskilllab.com<br />ashmita.dutta@skyyskill.com</div>
                    </div>
                  </div>
                </div>
                <Button onClick={() => window.open('https://share.google/KFL2mIuiZ0z3Znp4q', '_blank')} className="w-full bg-aqua hover:bg-aqua/90">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Insights & <span className="text-aqua">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest in skill development and technology
            </p>
            <Link to="/blogs">
              <Button variant="outline" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Blogs
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "The Future of EV Skill Development in India",
            excerpt: "How electric vehicle technology is reshaping automotive education and creating new career opportunities...",
            date: "January 15, 2024",
            category: "EV Technology",
            slug: "future-of-ev-skill-development-india"
          }, {
            title: "AI-Powered Learning: Transforming Technical Education",
            excerpt: "Exploring how artificial intelligence and digital twins are revolutionizing hands-on learning experiences...",
            date: "January 10, 2024",
            category: "Innovation",
            slug: "ai-powered-learning-transforming-technical-education"
          }, {
            title: "Building Centers of Excellence: A Blueprint for Success",
            excerpt: "Key strategies for educational institutions to establish world-class skill development centers...",
            date: "January 5, 2024",
            category: "Education",
            slug: "building-centers-of-excellence-blueprint-success"
          }].map((article, index) => <Card key={index} className="border-0 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
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
                  <Link to={`/blog/${article.slug}`}>
                    <Button variant="ghost" className="p-0 h-auto text-aqua hover:text-aqua/80">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
