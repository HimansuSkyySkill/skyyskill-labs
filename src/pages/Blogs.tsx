import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Calendar, User, ArrowRight, Search, BookOpen, Car, Sun, Wrench, Building2 } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  slug: string;
  published_at: string;
  featured_image?: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  // Predefined categories for SEO
  const predefinedCategories = [
    "EV Skills",
    "Solar Skills", 
    "Automotive Skills",
    "CSR & Collaborations"
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;

      setBlogs(data || []);
      
      // Merge predefined categories with existing ones from database
      const existingCategories = [...new Set(data?.map(blog => blog.category) || [])];
      const allCategories = [...new Set([...predefinedCategories, ...existingCategories])];
      setCategories(allCategories);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>EV CoE, Solar Lab & Automotive CoE Insights | SkyySkill Labs Blog</title>
        <meta name="description" content="Expert insights on EV Centres of Excellence, Solar Labs, and Automotive CoEs. Latest trends in skill development, lab setups, and industry collaboration." />
        <meta name="keywords" content="EV CoE Blog, Solar Lab Insights, Automotive CoE Articles, Skill Development, Lab Setup, SkyySkill Labs" />
        <link rel="canonical" href="https://skyyskilllabs.org/blogs" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="EV CoE, Solar Lab & Automotive CoE Insights | SkyySkill Labs Blog" />
        <meta property="og:description" content="Expert insights on EV Centres of Excellence, Solar Labs, and Automotive CoEs. Latest trends in skill development, lab setups, and industry collaboration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skyyskilllabs.org/blogs" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SkyySkill Labs Blog",
            "description": "Expert insights on EV CoEs, Solar Labs, and Automotive training",
            "url": "https://skyyskilllabs.org/blogs",
            "publisher": {
              "@type": "Organization",
              "name": "SkyySkill Labs",
              "url": "https://skyyskilllabs.org"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="primary-light" className="mb-6 px-6 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Insights & Innovation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              EV CoE, Solar Lab & Automotive Skills Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert insights on EV Centres of Excellence, Solar Labs, Automotive CoEs, and the future of technical education in India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/ev-centre-of-excellence">
                <Button variant="outline" className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  EV CoE Solutions
                </Button>
              </Link>
              <Link to="/solar-lab-coe">
                <Button variant="outline" className="flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Solar Lab Setup
                </Button>
              </Link>
              <Link to="/automotive-lab-coe">
                <Button variant="outline" className="flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Automotive CoE
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Our Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "EV Skills", icon: Car, color: "text-blue-500", description: "Electric Vehicle training and CoE insights" },
                { name: "Solar Skills", icon: Sun, color: "text-yellow-500", description: "Solar Lab setup and renewable energy training" },
                { name: "Automotive Skills", icon: Wrench, color: "text-green-500", description: "Automotive CoE and modern vehicle technology" },
                { name: "CSR & Collaborations", icon: Building2, color: "text-purple-500", description: "Industry partnerships and CSR initiatives" }
              ].map((category, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedCategory(category.name)}>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <category.icon className={`w-12 h-12 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-muted-foreground">Filter by:</span>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                {searchTerm || selectedCategory !== "all" 
                  ? "Try adjusting your search or filter criteria."
                  : "Check back soon for new articles!"
                }
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredBlogs.map((blog) => (
                    <Card key={blog.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {blog.featured_image && (
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={blog.featured_image} 
                            alt={`${blog.title} - SkyySkill Labs blog about ${blog.category.toLowerCase()}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {blog.category}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(blog.published_at)}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {blog.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {blog.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="w-4 h-4 mr-1" />
                            {blog.author}
                          </div>
                          <Link to={`/blog/${blog.slug}`}>
                            <Button variant="ghost" size="sm" className="group-hover:text-primary">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8 sticky top-8">
                  {/* Categories Widget */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {predefinedCategories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedCategory === category 
                                ? 'bg-primary text-white' 
                                : 'hover:bg-muted'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Latest Posts Widget */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Latest Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {blogs.slice(0, 3).map((blog) => (
                          <div key={blog.id} className="border-b pb-3 last:border-b-0">
                            <Link to={`/blog/${blog.slug}`} className="block">
                              <h4 className="font-semibold text-sm hover:text-primary transition-colors line-clamp-2">
                                {blog.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {formatDate(blog.published_at)}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA Widget */}
                  <Card className="bg-gradient-to-br from-primary/10 to-aqua/10">
                    <CardHeader>
                      <CardTitle className="text-lg">Need a Lab Setup?</CardTitle>
                      <CardDescription>
                        Get expert consultation for your EV CoE, Solar Lab, or Automotive training facility.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <LeadCaptureForm 
                        type="quotation" 
                        trigger={
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            Get Free Consultation
                          </Button>
                        } 
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-aqua/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Setup Your Lab?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get expert guidance on EV CoE, Solar Lab, or Automotive training facility setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ev-centre-of-excellence">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Car className="w-5 h-5 mr-2" />
                Setup EV CoE
              </Button>
            </Link>
            <Link to="/solar-lab-coe">
              <Button variant="outline" size="lg">
                <Sun className="w-5 h-5 mr-2" />
                Solar Lab CoE
              </Button>
            </Link>
            <Link to="/automotive-lab-coe">
              <Button variant="outline" size="lg">
                <Wrench className="w-5 h-5 mr-2" />
                Automotive CoE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
  );
};

export default Blogs;