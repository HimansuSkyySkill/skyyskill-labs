import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play, Quote, Star, FileText } from 'lucide-react';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const FacultyFeedback = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const testimonials = [
    {
      id: "c1_TSK9ztRE",
      title: "Faculty Experience - EV Lab Implementation",
      thumbnail: "/lovable-uploads/1d59208d-8dbb-490c-87e8-0788cad26a88.png",
      faculty: "Prof. Kusum Tarani",
      institution: "Bharati Vidyapeeth's College of Engineering, Delhi"
    },
    {
      id: "mOgkZ3j7ZFI", 
      title: "Center of Excellence Impact Assessment",
      thumbnail: `https://img.youtube.com/vi/mOgkZ3j7ZFI/maxresdefault.jpg`,
      faculty: "Department Head",
      institution: "Premier Engineering College"
    },
    {
      id: "wvPRWJnGxy0",
      title: "Student Learning Outcomes & Faculty Insights",
      thumbnail: `https://img.youtube.com/vi/wvPRWJnGxy0/maxresdefault.jpg`,
      faculty: "Research Professor",
      institution: "Technology University"
    },
    {
      id: "3-Uznc2iruw",
      title: "CoE Success Story - Faculty Perspective",
      thumbnail: `https://img.youtube.com/vi/3-Uznc2iruw/maxresdefault.jpg`,
      faculty: "Lab Coordinator",
      institution: "Government Technical Institute"
    }
  ];

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background Elements with Glowing Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-ai-breathe"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-3xl animate-ai-breathe" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-pink/10 rounded-full blur-3xl animate-ai-breathe" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-primary/90 to-aqua/80 text-white border-0 mb-6 px-6 py-3 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Quote className="w-4 h-4 mr-2" />
            Faculty Testimonials
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">What Faculty Say About Our</span>
            <span className="block bg-gradient-to-r from-violet via-purple-pink to-cyan bg-clip-text text-transparent mt-2 drop-shadow-[0_0_30px_hsl(var(--violet)/0.5)]">
              Centers of Excellence
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hear directly from educators who have experienced the transformation in their institutions through our advanced lab solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-2xl hover:shadow-violet/20 transition-all duration-300 hover:scale-105 border-0 bg-slate-900/80 backdrop-blur-md border border-violet/20 cursor-pointer"
              onClick={() => handleVideoClick(testimonial.id)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src={testimonial.thumbnail} 
                    alt={testimonial.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Video Badge */}
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    LIVE
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    Video
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-violet transition-colors">
                    {testimonial.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-300">
                      {testimonial.faculty}
                    </p>
                    <p className="text-xs text-slate-400">
                      {testimonial.institution}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Faculty Review
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Watch Now
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action with Dark Themed Background */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl p-12 relative overflow-hidden border border-violet/30 shadow-2xl">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-cyan/10 rounded-2xl pointer-events-none"></div>
            
            {/* Floating orb effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-pink/20 rounded-full blur-3xl animate-ai-breathe"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet via-purple-pink to-cyan bg-clip-text text-transparent drop-shadow-[0_0_30px_hsl(var(--violet)/0.5)]">
                  Join the Growing Community
                </span>
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                Discover how our Centers of Excellence can transform your institution's approach to modern education and skill development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <Badge className="px-8 py-3 text-base bg-violet/20 text-violet border border-violet/30 hover:bg-violet/30 hover:shadow-[0_0_20px_hsl(var(--violet)/0.5)] transition-all duration-300">
                  500+ Satisfied Faculty Members
                </Badge>
                
                <LeadCaptureForm 
                  type="quotation" 
                  trigger={
                    <Button className="bg-gradient-to-r from-orange to-red-500 hover:from-orange/90 hover:to-red-500/90 text-white px-10 py-6 text-base font-semibold shadow-xl hover:shadow-[0_0_40px_hsl(var(--orange)/0.6)] transition-all duration-300 transform hover:scale-105 border-0">
                      <FileText className="w-5 h-5 mr-2" />
                      Get a Quotation Now
                    </Button>
                  } 
                />
                
                <Badge className="px-8 py-3 text-base bg-cyan/20 text-cyan border border-cyan/30 hover:bg-cyan/30 hover:shadow-[0_0_20px_hsl(var(--cyan)/0.5)] transition-all duration-300">
                  95% Positive Feedback Rate
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={handleCloseVideo}>
        <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
          <div className="relative bg-black rounded-lg overflow-hidden">
            {selectedVideo && (
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Faculty Feedback Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FacultyFeedback;