-- Create news_events table for storing news and events
CREATE TABLE public.news_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('News', 'Event', 'Partnership', 'Achievement', 'Product Launch')),
  image_url TEXT,
  external_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is public news)
CREATE POLICY "News events are publicly readable" 
ON public.news_events 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_news_events_updated_at
BEFORE UPDATE ON public.news_events
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data based on SkyySkill partnerships and achievements
INSERT INTO public.news_events (title, description, event_date, event_type, image_url, external_url, featured) VALUES
('Partnership with IIT Kanpur for Advanced Certification Programs', 'SkyySkill Academy announces strategic partnership with IIT Kanpur to deliver globally recognized certification programs in Electric Vehicle technology and advanced manufacturing.', '2024-07-05', 'Partnership', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop', 'https://www.youtube.com/watch?v=wWZi9DVtXT4', true),

('MoU Signed with TN Auto Skills Initiative by Government of Tamil Nadu', 'SkyySkill Academy partners with Tamil Nadu Government and ASDC to promote EV skill development and establish Centers of Excellence across Tamil Nadu.', '2024-06-09', 'Partnership', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop', 'https://skyyskill.com', true),

('Partnership with DSDEO, Govt. of Odisha under Nua Odisha Program', 'Strategic collaboration to empower Mayurbhanj youth with cutting-edge EV technology training and skill development programs.', '2024-05-27', 'Partnership', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop', 'https://skyyskill.com', true),

('100% Job Placement Guarantee Program Launch', 'Launch of industry-first 100% job placement guarantee program with comprehensive bootcamp training for core engineering sectors.', '2024-04-15', 'Product Launch', 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop', 'https://skyyskill.com/job-leading-courses', false),

('National Award for Outstanding Skill Development Platform', 'SkyySkill Academy receives national recognition for innovative skill development programs and industry partnerships.', '2024-03-10', 'Achievement', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop', 'https://skyyskill.com', false),

('AI-Powered Lab Solutions for EV Technology Training', 'Introduction of AI-integrated laboratory equipment and digital twin technologies for next-generation technical education in Electric Vehicle domain.', '2024-02-20', 'Product Launch', 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop', 'https://skyyskill.com/ev-lab', false);