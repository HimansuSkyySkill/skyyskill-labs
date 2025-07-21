-- Create reseller_leads table to collect reseller applications
CREATE TABLE public.reseller_leads (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    city text NOT NULL,
    target_city text NOT NULL,
    company_details text NOT NULL,
    additional_message text,
    status text DEFAULT 'pending',
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reseller_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert reseller applications (public form)
CREATE POLICY "Anyone can insert reseller applications" 
ON public.reseller_leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading for authenticated users (for admin access)
CREATE POLICY "Authenticated users can view reseller applications" 
ON public.reseller_leads 
FOR SELECT 
TO authenticated
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_reseller_leads_updated_at
BEFORE UPDATE ON public.reseller_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add indexes for better performance
CREATE INDEX idx_reseller_leads_email ON public.reseller_leads(email);
CREATE INDEX idx_reseller_leads_created_at ON public.reseller_leads(created_at);
CREATE INDEX idx_reseller_leads_status ON public.reseller_leads(status);