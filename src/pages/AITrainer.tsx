import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, MessageCircle, Users, Star, Zap, Play, ArrowRight } from "lucide-react";

const AITrainer = () => {
  useEffect(() => {
    // Load HeyGen script when component mounts
    const script = document.createElement('script');
    script.innerHTML = `
      !function(window){const host="https://labs.heygen.com",url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJQZWRyb19DaGFpcl9TaXR0aW5nX3B1Ymxp%0D%0AYyIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzkyZGU3%0D%0AOWU1MzNhODQyMWJiODZkYTYzYTBlNWViMTJmXzU3MDEwL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJu%0D%0AZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImFjMmY3YmM5YWI5%0D%0AYjQwNWM4NDllZmFhZTM1ZjhiNzE5IiwidXNlcm5hbWUiOiI3ZjA5OWI3ZTA5ZTc0MjZiOWU4YTZl%0D%0ANzcwOGZiNzJjNCJ9&inIFrame=1",clientWidth=document.body.clientWidth,wrapDiv=document.createElement("div");wrapDiv.id="heygen-streaming-embed";const container=document.createElement("div");container.id="heygen-streaming-container";const stylesheet=document.createElement("style");stylesheet.innerHTML=\`
        #heygen-streaming-embed {
          z-index: 9999;
          position: fixed;
          left: 40px;
          bottom: 40px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 2px solid #fff;
          box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
          transition: all linear 0.1s;
          overflow: hidden;

          opacity: 0;
          visibility: hidden;
        }
        #heygen-streaming-embed.show {
          opacity: 1;
          visibility: visible;
        }
        #heygen-streaming-embed.expand {
          \${clientWidth<540?"height: 266px; width: 96%; left: 50%; transform: translateX(-50%);":"height: 366px; width: calc(366px * 16 / 9);"}
          border: 0;
          border-radius: 8px;
        }
        #heygen-streaming-container {
          width: 100%;
          height: 100%;
        }
        #heygen-streaming-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        \`;const iframe=document.createElement("iframe");iframe.allowFullscreen=!1,iframe.title="Streaming Embed",iframe.role="dialog",iframe.allow="microphone",iframe.src=url;let visible=!1,initial=!1;window.addEventListener("message",(e=>{e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&("init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):"show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):"hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible)))})),container.appendChild(iframe),wrapDiv.appendChild(stylesheet),wrapDiv.appendChild(container),document.body.appendChild(wrapDiv)}(globalThis);
    `;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.head.removeChild(script);
      const embed = document.getElementById('heygen-streaming-embed');
      if (embed) {
        document.body.removeChild(embed);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/20 via-background to-aqua/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-aqua/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-aqua/90 to-primary/80 text-white border-0 mb-8 px-8 py-4 text-lg font-bold shadow-lg">
              <Brain className="w-6 h-6 mr-2" />
              Interactive AI Trainer
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
              Meet Your Personal
              <span className="block bg-gradient-to-r from-aqua via-green to-primary bg-clip-text text-transparent mt-2">
                EV Guru
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Experience the future of learning with our AI-powered trainer. Get personalized guidance, 
              instant answers, and interactive lessons on Electric Vehicle technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="hero" className="text-lg px-10 py-6 h-auto">
                <Play className="w-6 h-6 mr-3" />
                Start Learning Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto">
                <MessageCircle className="w-6 h-6 mr-3" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-border">
              <div className="text-4xl md:text-5xl font-bold text-aqua mb-3">24/7</div>
              <div className="text-muted-foreground text-sm font-medium">Available</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-border">
              <div className="text-4xl md:text-5xl font-bold text-green mb-3">50+</div>
              <div className="text-muted-foreground text-sm font-medium">Topics Covered</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-border">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-3">1000+</div>
              <div className="text-muted-foreground text-sm font-medium">Students Trained</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">98%</div>
              <div className="text-muted-foreground text-sm font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Trainer Interaction Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Interact with <span className="text-aqua">EV Guru</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Click the AI avatar below to start your personalized learning journey. 
              Ask questions, get instant explanations, and explore EV technology concepts interactively.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center gap-3">
                  <Brain className="w-8 h-8 text-aqua" />
                  Interactive EV Guru
                </CardTitle>
                <CardDescription className="text-lg">
                  Your personal AI trainer for Electric Vehicle technology
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary/5 via-background to-aqua/5 rounded-2xl p-8 text-center">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-aqua to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">EV Guru is Ready!</h3>
                    <p className="text-muted-foreground mb-6">
                      Click the floating avatar (bottom-left corner) to start your interactive learning session.
                      Ask about battery technology, motor systems, charging infrastructure, and more!
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-aqua/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageCircle className="w-6 h-6 text-aqua" />
                      </div>
                      <h4 className="font-semibold text-primary mb-2">Ask Questions</h4>
                      <p className="text-sm text-muted-foreground">Get instant answers to your EV technology queries</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-6 h-6 text-green" />
                      </div>
                      <h4 className="font-semibold text-primary mb-2">Interactive Learning</h4>
                      <p className="text-sm text-muted-foreground">Engage in dynamic conversations about complex topics</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-orange" />
                      </div>
                      <h4 className="font-semibold text-primary mb-2">Personalized</h4>
                      <p className="text-sm text-muted-foreground">Tailored learning experience based on your level</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Our <span className="text-green">AI Trainer</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of technical education with our advanced AI-powered learning platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Advanced AI Technology",
                description: "Powered by cutting-edge AI that understands context and provides accurate, relevant answers to your EV technology questions.",
                color: "primary"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Natural Conversations",
                description: "Engage in human-like conversations with our AI trainer. Ask follow-up questions and dive deep into any topic.",
                color: "aqua"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Responses",
                description: "Get immediate answers to your questions without waiting. Learn at your own pace with real-time interaction.",
                color: "green"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Personalized Learning",
                description: "The AI adapts to your learning style and knowledge level, providing customized explanations and examples.",
                color: "orange"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Expert Knowledge Base",
                description: "Access comprehensive knowledge about EV technology, from basics to advanced concepts, all in one place.",
                color: "primary"
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Interactive Demonstrations",
                description: "Visual and interactive explanations that make complex EV concepts easy to understand and remember.",
                color: "aqua"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-${feature.color} rounded-xl flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-aqua to-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of students and professionals who are advancing their EV knowledge with our AI trainer.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 h-auto border-white"
          >
            <ArrowRight className="w-6 h-6 mr-3" />
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AITrainer;