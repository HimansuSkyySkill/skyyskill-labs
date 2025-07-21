import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const NewsEventsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green/5 via-background to-aqua/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
          <Button 
            onClick={() => window.open('https://www.evskilllab.com/news-and-events', '_blank')}
            size="lg" 
            className="bg-green hover:bg-green/90 text-lg px-10 py-6 h-auto"
          >
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
          }].map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;