import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Construction, Wrench } from "lucide-react";

interface UnderConstructionProps {
  title?: string;
}

const UnderConstruction = ({ title = "Page Under Construction" }: UnderConstructionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-gradient-card">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange to-primary rounded-full flex items-center justify-center">
                <Construction className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're working hard to bring you an amazing experience. 
              Our team is crafting something special for this section.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Wrench className="w-5 h-5 animate-bounce" />
              <span className="text-lg font-medium">Coming Soon</span>
              <Wrench className="w-5 h-5 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="default" size="lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnderConstruction;