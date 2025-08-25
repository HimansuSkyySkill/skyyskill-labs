import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, ExternalLink, Trophy, Building2, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface NewsEvent {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_type: string;
  image_url?: string;
  external_url?: string;
  featured: boolean;
}

interface Milestone {
  title: string;
  description: string;
  location?: string;
  badge: string;
  image: string;
}

const NewsEventsSection = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Lab Setup Locations from evskilllab.com
  const labSetups: Milestone[] = [
    {
      title: "Amara Raja Advanced Cell Technologies Private Limited",
      description: "State-of-the-art EV lab setup with advanced battery testing and analysis equipment for next-generation energy storage solutions.",
      badge: "CoE Partner",
      image: "/lovable-uploads/1561b211-3add-4c5a-8232-b90da9b996d8.png"
    },
    {
      title: "SkyySkill Academy, Mumbai",
      description: "Comprehensive EV training facility with complete vehicle testing and diagnostics systems for professional skill development.",
      badge: "Training Hub",
      image: "/lovable-uploads/1561b211-3add-4c5a-8232-b90da9b996d8.png"
    },
    {
      title: "Learning Hub, West Bengal",
      description: "Modern EV education center with digital twin technology and AI-integrated learning modules for advanced technical training.",
      badge: "Education Center",
      image: "/lovable-uploads/1561b211-3add-4c5a-8232-b90da9b996d8.png"
    }
  ];

  // Latest News from evskilllab.com
  const latestNews = [
    {
      title: "Greenskills Digital Academy: Empowering the Next Generation in EV Training and Green Mobility",
      description: "The future of mobility is electric, and Greenskills Digital Academy is taking a bold step forward in shaping that future. Established by SkyySkill Academy, this initiative focuses on comprehensive EV training programs.",
      type: "Partnership",
      date: "March 2024",
      image: "/lovable-uploads/28d5a824-e358-4df4-9143-4a27ac584f08.png"
    },
    {
      title: "Electric Vehicle Centre of Excellence (EVCOE) Lab Launched at RGM College, Nandyal",
      description: "SkyySkill Academy proudly announces the successful establishment of the first Electric Vehicle Centre of Excellence (EVCOE) Lab at RGM College, Andhra Pradesh.",
      type: "Launch",
      date: "February 2024", 
      image: "/lovable-uploads/28d5a824-e358-4df4-9143-4a27ac584f08.png"
    },
    {
      title: "Amara Raja & SkyySkill Labs Launch State-of-the-Art Electric Vehicle Center",
      description: "The electric mobility revolution in India has received a significant boost with the inauguration of a cutting-edge Electric Vehicle Centre of Excellence.",
      type: "Collaboration",
      date: "January 2024",
      image: "/lovable-uploads/28d5a824-e358-4df4-9143-4a27ac584f08.png"
    },
    {
      title: "Empowering the Next Generation: A Deep Dive into the Future of EV Education",
      description: "The automotive industry is undergoing its most significant transformation in a century. The shift towards electric vehicles represents not just a change in technology, but a complete reimagining of how we approach mobility.",
      type: "Innovation",
      date: "December 2023",
      image: "/lovable-uploads/28d5a824-e358-4df4-9143-4a27ac584f08.png"
    }
  ];

  useEffect(() => {
    fetchNewsEvents();
  }, []);

  const fetchNewsEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('news_events')
        .select('*')
        .order('event_date', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Error fetching news events:', error);
        return;
      }

      setNewsEvents(data || []);
    } catch (error) {
      console.error('Error fetching news events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Partnership': return 'default';
      case 'News': return 'secondary';
      case 'Achievement': return 'default';
      case 'Product Launch': return 'outline';
      case 'Event': return 'outline';
      default: return 'secondary';
    }
  };

  const handleReadMore = (item: NewsEvent) => {
    if (item.external_url) {
      window.open(item.external_url, '_blank');
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-green/5 via-background to-aqua/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded-md w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-muted rounded-md w-96 mx-auto mb-8"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-green/5 via-background to-aqua/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-aqua/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10 space-y-16">
        
        {/* EV Lab Setup as CoE Section */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="bg-gradient-to-r from-aqua/90 to-green/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Building2 className="w-5 h-5 mr-2" />
            EV Lab Setup as CoE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            <span className="bg-gradient-to-r from-aqua to-green bg-clip-text text-transparent">EV LAB SETUP</span> AS COE AT DIFFERENT PLACES
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Our Centers of Excellence are transforming technical education across India with state-of-the-art EV laboratories.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {labSetups.map((setup, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={setup.image} 
                      alt={setup.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-primary to-aqua text-white border-0 shadow-lg">
                        <Users className="w-4 h-4 mr-1" />
                        {setup.badge}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 flex-1">
                    <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2">{setup.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{setup.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* News & Events Section */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="bg-gradient-to-r from-green/90 to-orange/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Trophy className="w-5 h-5 mr-2" />
            EV Skill Lab in the NEWS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Latest News, <span className="bg-gradient-to-r from-green to-orange bg-clip-text text-transparent">Milestones & Events</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Celebrating our journey of excellence and strategic partnerships that drive innovation in EV skill development.
          </p>
          <Button 
            onClick={() => window.open('https://www.evskilllab.com/news-and-events', '_blank')}
            size="lg" 
            className="bg-gradient-to-r from-green to-orange hover:from-green/90 hover:to-orange/90 text-white text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-5 h-5 mr-3" />
            View All News & Events
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {latestNews.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:scale-105 cursor-pointer"
              onClick={() => window.open('https://www.evskilllab.com/news-and-events', '_blank')}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge 
                    variant={
                      item.type === 'Partnership' ? 'primary-light' :
                      item.type === 'Launch' ? 'green-light' :
                      item.type === 'Collaboration' ? 'aqua-light' :
                      'outline'
                    }
                    className={item.type === 'Innovation' ? 'bg-orange/10 text-orange border-orange/20' : ''}
                  >
                    {item.type}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read More
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;