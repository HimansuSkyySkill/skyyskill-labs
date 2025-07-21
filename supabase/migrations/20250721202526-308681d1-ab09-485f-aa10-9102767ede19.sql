-- Create blogs table
CREATE TABLE public.blogs (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title text NOT NULL,
    excerpt text NOT NULL,
    content text NOT NULL,
    category text NOT NULL,
    author text NOT NULL DEFAULT 'SkyySkill Team',
    featured_image text,
    slug text NOT NULL UNIQUE,
    is_published boolean DEFAULT false,
    published_at timestamp with time zone,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read published blogs
CREATE POLICY "Anyone can view published blogs" 
ON public.blogs 
FOR SELECT 
USING (is_published = true);

-- Create policy to allow authenticated users to manage blogs (for admin)
CREATE POLICY "Authenticated users can manage blogs" 
ON public.blogs 
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blogs_updated_at
BEFORE UPDATE ON public.blogs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add indexes for better performance
CREATE INDEX idx_blogs_slug ON public.blogs(slug);
CREATE INDEX idx_blogs_published ON public.blogs(is_published, published_at);
CREATE INDEX idx_blogs_category ON public.blogs(category);

-- Insert some sample blog posts
INSERT INTO public.blogs (title, excerpt, content, category, slug, is_published, published_at) VALUES
(
    'The Future of EV Skill Development in India',
    'How electric vehicle technology is reshaping automotive education and creating new career opportunities...',
    'Electric vehicle technology is revolutionizing the automotive industry in India. As the government pushes for increased EV adoption through various policies and incentives, there is a growing need for skilled professionals who understand EV technology. This shift is creating unprecedented opportunities in education and skill development.

At SkyySkill Labs, we are at the forefront of this transformation, providing comprehensive EV training programs that bridge the gap between traditional automotive education and the future of mobility. Our courses cover everything from battery technology and motor control systems to charging infrastructure and vehicle diagnostics.

The demand for EV technicians, engineers, and specialists is expected to grow exponentially over the next decade. By investing in EV skill development today, institutions can prepare their students for tomorrow''s opportunities while contributing to India''s sustainable transportation goals.',
    'EV Technology',
    'future-of-ev-skill-development-india',
    true,
    '2024-01-15 10:00:00+00'
),
(
    'AI-Powered Learning: Transforming Technical Education',
    'Exploring how artificial intelligence and digital twins are revolutionizing hands-on learning experiences...',
    'Artificial intelligence is transforming every aspect of education, and technical training is no exception. At SkyySkill Labs, we are integrating AI-powered learning modules into our laboratory equipment to create more engaging and effective learning experiences.

Our AI-enabled labs feature intelligent tutoring systems that adapt to each student''s learning pace and style. Digital twin technology allows students to experiment with complex systems in a virtual environment before working with physical equipment, reducing risks and costs while maximizing learning outcomes.

Machine learning algorithms analyze student performance data to identify knowledge gaps and recommend personalized learning paths. This approach ensures that every student receives the support they need to succeed in their technical education journey.',
    'Innovation',
    'ai-powered-learning-transforming-technical-education',
    true,
    '2024-01-10 09:00:00+00'
),
(
    'Building Centers of Excellence: A Blueprint for Success',
    'Key strategies for educational institutions to establish world-class skill development centers...',
    'Creating a successful Center of Excellence (CoE) requires careful planning, strategic partnerships, and a deep understanding of industry needs. Based on our experience working with over 500 institutions across India, we have identified key factors that contribute to the success of skill development centers.

First, alignment with industry requirements is crucial. Our CoE models are designed in collaboration with leading industry partners to ensure that students learn skills that are directly applicable in the workplace. Second, quality infrastructure and equipment form the foundation of effective hands-on learning.

Third, comprehensive training programs for faculty ensure that educators can effectively utilize advanced laboratory equipment. Finally, continuous updates and support help institutions stay current with rapidly evolving technology trends.',
    'Education',
    'building-centers-of-excellence-blueprint-success',
    true,
    '2024-01-05 08:00:00+00'
);