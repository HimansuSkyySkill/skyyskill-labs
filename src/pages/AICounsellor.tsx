import React, { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  GraduationCap, 
  Award, 
  Users, 
  Globe,
  CheckCircle,
  Zap,
  Target,
  BookOpen,
  Briefcase,
  TrendingUp,
  Star
} from 'lucide-react';

const AICounsellor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [chatVisible, setChatVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Initialize HeyGen embed script
    const script = document.createElement('script');
    script.text = `!function(window){const host="https://labs.heygen.com",url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9CbGFja19TdWl0X3B1YmxpYyIs%0D%0AInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2RhNWNiYTZi%0D%0AYzdiMzRjNWVhMTM5Zjc3ZGE5OGZkYzA0XzU1MzcwL3ByZXZpZXdfdGFsa18xLndlYnAiLCJuZWVk%0D%0AUmVtb3ZlQmFja2dyb3VuZCI6dHJ1ZSwia25vd2xlZGdlQmFzZUlkIjoiMzA0OTg3ZGU3ZmNjNDlj%0D%0ANDk1MGU4MTE0MTUzZDFjMzAiLCJ1c2VybmFtZSI6IjdmMDk5YjdlMDllNzQyNmI5ZThhNmU3NzA4%0D%0AZmI3MmM0In0%3D&inIFrame=1",clientWidth=document.body.clientWidth,wrapDiv=document.createElement("div");wrapDiv.id="heygen-streaming-embed";const container=document.createElement("div");container.id="heygen-streaming-container";const stylesheet=document.createElement("style");stylesheet.innerHTML=\`#heygen-streaming-embed {z-index: 9999;position: fixed;left: 40px;bottom: 40px;width: 200px;height: 200px;border-radius: 50%;border: 2px solid #fff;box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);transition: all linear 0.1s;overflow: hidden;opacity: 0;visibility: hidden;}#heygen-streaming-embed.show {opacity: 1;visibility: visible;}#heygen-streaming-embed.expand {\\\${clientWidth<540?"height: 266px; width: 96%; left: 50%; transform: translateX(-50%);":"height: 366px; width: calc(366px * 16 / 9);"}border: 0;border-radius: 8px;}#heygen-streaming-container {width: 100%;height: 100%;}#heygen-streaming-container iframe {width: 100%;height: 100%;border: 0;}\\\`;const iframe=document.createElement("iframe");iframe.allowFullscreen=!1,iframe.title="Streaming Embed",iframe.role="dialog",iframe.allow="microphone",iframe.src=url;let visible=!1,initial=!1;window.addEventListener("message",(e=>{e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&("init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):"show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):"hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible)))})),container.appendChild(iframe),wrapDiv.appendChild(stylesheet),wrapDiv.appendChild(container),document.body.appendChild(wrapDiv)}(globalThis);`;
    document.head.appendChild(script);

    return () => {
      const embed = document.getElementById('heygen-streaming-embed');
      if (embed) {
        embed.remove();
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleChatStart = () => {
    setChatVisible(true);
    // Trigger HeyGen embed to show
    const embed = document.getElementById('heygen-streaming-embed');
    if (embed && !embed.classList.contains('show')) {
      embed.classList.add('show');
    }
  };

  const programs = [
    {
      title: "Advanced CAD/CAM/CAE Certification",
      duration: "6 Months",
      type: "Online",
      partner: "IIT Guwahati",
      features: ["100% Live Classes", "Industry Projects", "Placement Guarantee"],
      route: "/advanced-certification-cad-cam-cae"
    },
    {
      title: "Summer Internship Program",
      duration: "3 Months",
      type: "Online/Hybrid",
      partner: "IIT Kanpur",
      features: ["Real Projects", "Internship Certificate", "Mentorship"],
      route: "/certificationcourse"
    },
    {
      title: "Job Leading Courses",
      duration: "Variable",
      type: "Online",
      partner: "Industry Partners",
      features: ["100% Placement", "Live Mentorship", "No Career Break"],
      route: "/job-leading-courses"
    },
    {
      title: "Free Online Courses",
      duration: "Self-paced",
      type: "Online",
      partner: "SkyySkill Academy",
      features: ["Completely Free", "Certificate", "Skill Building"],
      route: "/free-online-courses"
    }
  ];

  const statistics = [
    { number: "1.5 Lakhs+", label: "Students Trained", icon: Users },
    { number: "30+", label: "Industry Partners", icon: Briefcase },
    { number: "7+", label: "Countries", icon: Globe },
    { number: "100%", label: "Placement Record", icon: Award }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-aqua/5" />
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
      {[...Array(20)].map((_, i) => (
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

      <Navigation />

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-fade-in">
              <Zap className="w-4 h-4 mr-2 text-primary animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-aqua bg-clip-text text-transparent">
                AI-Powered Career Counselling
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-primary via-aqua to-orange bg-clip-text text-transparent animate-pulse">
                AI Counsellor
              </span>
              <br />
              <span className="text-foreground">for SkyySkill Academy</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in">
              Get personalized guidance for your career journey with our AI-powered counsellor. 
              Discover the right courses and programs that match your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-aqua to-primary text-white border-0 px-8 hover:scale-105 transition-all duration-300"
                onClick={handleChatStart}
              >
                <Play className="w-5 h-5 mr-2" />
                Start Career Counselling
              </Button>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 mr-2 text-green" />
                100% Free Consultation
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {statistics.map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary animate-pulse" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-aqua bg-clip-text text-transparent">
                  Our Programs
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our industry-leading programs designed to boost your career
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <GraduationCap className="w-8 h-8 text-primary group-hover:animate-pulse" />
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {program.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    
                    <div className="text-sm text-muted-foreground mb-4">
                      <div className="flex items-center mb-1">
                        <Target className="w-4 h-4 mr-2" />
                        Duration: {program.duration}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Partner: {program.partner}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      onClick={() => window.open(`https://skyyskill.com${program.route}`, '_blank')}
                    >
                      Learn More
                      <TrendingUp className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-aqua bg-clip-text text-transparent">
                  Why Choose SkyySkill Academy?
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-aqua to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">100% Placement Guarantee</h3>
                  <p className="text-muted-foreground">
                    Industry's only platform with proven 100% placement record across 30+ partner companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">IIT Certified Programs</h3>
                  <p className="text-muted-foreground">
                    Get globally recognized certificates from IIT Guwahati and IIT Kanpur partnership programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange to-aqua rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Live Industry Mentorship</h3>
                  <p className="text-muted-foreground">
                    Learn from industry experts through 100% live sessions with instant doubt clearing and networking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Start your journey with our AI counsellor and discover the perfect program for your goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-aqua text-white px-8 hover:scale-105 transition-all duration-300"
                onClick={handleChatStart}
              >
                <Play className="w-5 h-5 mr-2" />
                Talk to AI Counsellor
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://skyyskill.com', '_blank')}
              >
                Explore All Courses
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AICounsellor;