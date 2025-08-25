import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Calendar, User, ArrowLeft, Clock, Car, Sun, Wrench, ArrowRight } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  slug: string;
  published_at: string;
  featured_image?: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) throw error;

      setBlog(data);
      
      // Fetch related blogs from the same category
      if (data) {
        const { data: relatedData } = await supabase
          .from('blogs')
          .select('*')
          .eq('category', data.category)
          .eq('is_published', true)
          .neq('id', data.id)
          .limit(3);
        
        setRelatedBlogs(relatedData || []);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setError('Blog post not found');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const getLabLinkByCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ev skills':
        return { path: '/ev-centre-of-excellence', name: 'EV Centre of Excellence', icon: Car };
      case 'solar skills':
        return { path: '/solar-lab-coe', name: 'Solar Lab CoE', icon: Sun };
      case 'automotive skills':
        return { path: '/automotive-lab-coe', name: 'Automotive Lab CoE', icon: Wrench };
      default:
        return { path: '/contact', name: 'Contact Us', icon: User };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blogs">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | SkyySkill Labs Blog</title>
        <meta name="description" content={`${blog.content.substring(0, 155)}...`} />
        <meta name="keywords" content={`${blog.category}, ${blog.title}, SkyySkill Labs`} />
        <link rel="canonical" href={`https://skyyskilllabs.org/blog/${blog.slug}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={`${blog.title} | SkyySkill Labs`} />
        <meta property="og:description" content={`${blog.content.substring(0, 155)}...`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://skyyskilllabs.org/blog/${blog.slug}`} />
        {blog.featured_image && <meta property="og:image" content={blog.featured_image} />}
        
        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "description": blog.content.substring(0, 155),
            "author": {
              "@type": "Person",
              "name": blog.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "SkyySkill Labs",
              "url": "https://skyyskilllabs.org"
            },
            "datePublished": blog.published_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://skyyskilllabs.org/blog/${blog.slug}`
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link to="/blogs">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </Button>
              </Link>
            </div>

            {/* Featured Image */}
            {blog.featured_image && (
              <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                <img 
                  src={blog.featured_image} 
                  alt={`${blog.title} - SkyySkill Labs blog about ${blog.category.toLowerCase()}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">
                  {blog.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(blog.published_at)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {estimateReadingTime(blog.content)} min read
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex items-center text-muted-foreground">
                <User className="w-4 h-4 mr-2" />
                <span>By {blog.author}</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Internal Linking CTA */}
            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-3">Ready to Setup Your Lab?</h3>
              <p className="text-muted-foreground mb-4">
                Learn more about how SkyySkill Labs can transform your educational institution with our {blog.category.toLowerCase()} solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {(() => {
                  const labLink = getLabLinkByCategory(blog.category);
                  return (
                    <Link to={labLink.path}>
                      <Button className="flex items-center gap-2">
                        <labLink.icon className="w-4 h-4" />
                        {labLink.name}
                      </Button>
                    </Link>
                  );
                })()}
                <LeadCaptureForm 
                  type="quotation" 
                  trigger={
                    <Button variant="outline">
                      Get Free Consultation
                    </Button>
                  } 
                />
                <Link to="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedBlogs.map((relatedBlog) => (
                    <Card key={relatedBlog.id} className="group hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2 text-xs">
                          {relatedBlog.category}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {relatedBlog.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {relatedBlog.content?.substring(0, 100)}...
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link to={`/blog/${relatedBlog.slug}`}>
                          <Button variant="ghost" size="sm" className="group-hover:text-primary p-0">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;