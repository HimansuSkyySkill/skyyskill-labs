import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Cpu, 
  Shield, 
  Cog, 
  BookOpen, 
  Building2,
  ChevronLeft,
  ChevronRight 
} from "lucide-react";

const SlidingUSPSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const usps = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "ASDC Approved Labs",
      subtitle: "Government Certified",
      description: "Sector Skill Council approved equipment and curriculum aligned with national standards",
      color: "bg-gradient-to-br from-primary/20 to-primary/10",
      iconColor: "text-primary",
      vector: (
        <svg className="absolute top-4 right-4 w-20 h-20 opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
            <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="20s" repeatCount="indefinite"/>
          </circle>
          <path d="M30 50 L45 65 L70 35" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      )
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "AI & Digital Twin Enabled",
      subtitle: "Industry 4.0 Ready",
      description: "Next-generation technology integration with simulation and AI-powered learning modules",
      color: "bg-gradient-to-br from-aqua/20 to-aqua/10",
      iconColor: "text-aqua",
      vector: (
        <svg className="absolute top-4 right-4 w-20 h-20 opacity-20" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" rx="8"/>
          <circle cx="35" cy="35" r="3" fill="currentColor">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="65" cy="35" r="3" fill="currentColor">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="35" cy="65" r="3" fill="currentColor">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          <circle cx="65" cy="65" r="3" fill="currentColor">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
        </svg>
      )
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "500+ Institutions Trust Us",
      subtitle: "Proven Track Record",
      description: "Deployed in IITs, NITs, and leading institutions across India with 99% satisfaction",
      color: "bg-gradient-to-br from-green/20 to-green/10",
      iconColor: "text-green",
      vector: (
        <svg className="absolute top-4 right-4 w-20 h-20 opacity-20" viewBox="0 0 100 100">
          <rect x="20" y="40" width="15" height="40" fill="currentColor">
            <animate attributeName="height" values="40;50;40" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="40" y="30" width="15" height="50" fill="currentColor">
            <animate attributeName="height" values="50;60;50" dur="3s" repeatCount="indefinite" begin="0.5s"/>
          </rect>
          <rect x="60" y="20" width="15" height="60" fill="currentColor">
            <animate attributeName="height" values="60;70;60" dur="3s" repeatCount="indefinite" begin="1s"/>
          </rect>
        </svg>
      )
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "End-to-End Solutions",
      subtitle: "Complete Ecosystem",
      description: "From installation to training, placement support, and ongoing maintenance",
      color: "bg-gradient-to-br from-orange/20 to-orange/10",
      iconColor: "text-orange",
      vector: (
        <svg className="absolute top-4 right-4 w-20 h-20 opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="10" fill="currentColor"/>
          <g>
            <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" dur="10s" repeatCount="indefinite"/>
            <rect x="48" y="15" width="4" height="20" fill="currentColor"/>
            <rect x="48" y="65" width="4" height="20" fill="currentColor"/>
            <rect x="15" y="48" width="20" height="4" fill="currentColor"/>
            <rect x="65" y="48" width="20" height="4" fill="currentColor"/>
          </g>
        </svg>
      )
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Curriculum Aligned",
      subtitle: "Future-Ready Skills",
      description: "Perfect integration with NEP 2020 and industry requirements for job-ready graduates",
      color: "bg-gradient-to-br from-purple/20 to-purple/10",
      iconColor: "text-purple-600",
      vector: (
        <svg className="absolute top-4 right-4 w-20 h-20 opacity-20" viewBox="0 0 100 100">
          <rect x="25" y="20" width="50" height="60" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
          <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0,30;30,0;0,30" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="35" y1="45" x2="60" y2="45" stroke="currentColor" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0,25;25,0;0,25" dur="4s" repeatCount="indefinite" begin="0.5s"/>
          </line>
          <line x1="35" y1="55" x2="55" y2="55" stroke="currentColor" strokeWidth="2">
            <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="4s" repeatCount="indefinite" begin="1s"/>
          </line>
        </svg>
      )
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Assurance",
      subtitle: "1 Year Warranty + AMC",
      description: "ISO certified manufacturing with comprehensive warranty and maintenance support",
      color: "bg-gradient-to-br from-red/20 to-red/10",
      iconColor: "text-red-600",
      vector: (
        <svg className="absolute top-4 right-4 w-20 h-20 opacity-20" viewBox="0 0 100 100">
          <path d="M50 15 L65 25 L65 55 Q65 70 50 85 Q35 70 35 55 L35 25 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M42 45 L48 52 L58 38" stroke="currentColor" strokeWidth="3" fill="none">
            <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % usps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [usps.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % usps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + usps.length) % usps.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-aqua/3 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-primary/80 to-aqua/70 text-white border-0 mb-6 px-6 py-3 text-base font-semibold shadow-md">
            ✨ Why Choose SkyySkill Labs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Unique Selling <span className="text-aqua">Propositions</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us India's leading lab solution provider
          </p>
        </div>

        {/* Main Sliding USP */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="relative">
            <Card className={`${usps[currentSlide].color} border-0 shadow-lg transform transition-all duration-700 ease-in-out hover:scale-102`}>
              <CardContent className="p-6 md:p-8">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${usps[currentSlide].iconColor} bg-white/40 backdrop-blur-sm shadow-md`}>
                        {React.cloneElement(usps[currentSlide].icon, { className: "w-8 h-8" })}
                      </div>
                      <Badge className="bg-white/20 text-primary border-white/30 backdrop-blur-sm text-sm">
                        {usps[currentSlide].subtitle}
                      </Badge>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                      {usps[currentSlide].title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {usps[currentSlide].description}
                    </p>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className={`w-48 h-48 rounded-full ${usps[currentSlide].color} ${usps[currentSlide].iconColor} flex items-center justify-center relative`}>
                      {usps[currentSlide].vector}
                      <div className={`w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center ${usps[currentSlide].iconColor}`}>
                        {React.cloneElement(usps[currentSlide].icon, { className: "w-12 h-12" })}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-primary hover:bg-white hover:text-primary transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-primary hover:bg-white hover:text-primary transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {usps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary scale-110' : 'bg-primary/20 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Mini USP Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {usps.map((usp, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 ${
                index === currentSlide ? usp.color + ' scale-105' : 'bg-background hover:bg-secondary/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                  index === currentSlide ? usp.iconColor + ' bg-white/30' : 'bg-primary/10 text-primary'
                }`}>
                  <div className="w-6 h-6">
                    {React.cloneElement(usp.icon, { className: "w-6 h-6" })}
                  </div>
                </div>
                <h4 className="text-xs font-semibold text-primary group-hover:text-aqua transition-colors">
                  {usp.subtitle}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingUSPSection;