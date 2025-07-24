import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
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

const NewsEventsSection = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);

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
    <section className="py-20 bg-gradient-to-br from-green/5 via-background to-aqua/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-aqua/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-gradient-to-r from-green/90 to-aqua/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Calendar className="w-5 h-5 mr-2" />
            News & Events
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Latest <span className="bg-gradient-to-r from-aqua to-green bg-clip-text text-transparent">News & Events</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            SkyySkill has been actively participating in various events & have been featured in media.
          </p>
          <Button 
            onClick={() => window.open('https://www.skyyskill.com', '_blank')}
            size="lg" 
            className="bg-gradient-to-r from-green to-aqua hover:from-green/90 hover:to-aqua/90 text-white text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-5 h-5 mr-3" />
            View All News & Events
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsEvents.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:scale-105 cursor-pointer"
              onClick={() => handleReadMore(item)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image_url || `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop`} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge 
                    variant={getBadgeVariant(item.event_type)} 
                    className={`text-xs ${
                      item.event_type === 'Partnership' ? 'bg-primary/10 text-primary border-primary/20' :
                      item.event_type === 'Achievement' ? 'bg-green/10 text-green border-green/20' :
                      item.event_type === 'Product Launch' ? 'bg-aqua/10 text-aqua border-aqua/20' :
                      'bg-orange/10 text-orange border-orange/20'
                    }`}
                  >
                    {item.event_type}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(item.event_date)}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {item.description}
                </p>
                {item.external_url && (
                  <div className="flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read More
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {newsEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No news events available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEventsSection;