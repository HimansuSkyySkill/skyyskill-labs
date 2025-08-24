import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

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

const LabVideos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Video Carousel Section */}
      <section className="py-16 relative overflow-hidden pt-20">
        {/* Enhanced Background Design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-primary/5 to-aqua/10"></div>
          <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}></div>
          
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
              🎥 Our Lab Solutions in Action
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Take a Visual Tour <span className="text-aqua">of Our State-of-the-Art</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our state-of-the-art laboratory equipment and training solutions in action
            </p>
          </div>

          {/* Video Carousel */}
          <VideoCarousel />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LabVideos;