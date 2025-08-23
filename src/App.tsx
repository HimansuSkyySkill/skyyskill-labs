import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reseller from "./pages/Reseller";
import EvLab from "./pages/EvLab";
import AITrainer from "./pages/AITrainer";
import AICounsellor from "./pages/AICounsellor";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import BlogAdmin from "./pages/BlogAdmin";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";
import ChatbotTrigger from "./components/ChatbotTrigger";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reseller" element={<Reseller />} />
          <Route path="/ev-lab" element={<EvLab />} />
          <Route path="/ai-trainer" element={<AITrainer />} />
          <Route path="/ai-counsellor" element={<AICounsellor />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/solar-lab" element={<UnderConstruction title="Solar Lab - Coming Soon" />} />
          <Route path="/drone-lab" element={<UnderConstruction title="Drone Lab - Coming Soon" />} />
          <Route path="/automotive-lab" element={<UnderConstruction title="Automotive Lab - Coming Soon" />} />
          <Route path="/3d-printing-lab" element={<UnderConstruction title="3D Printing Lab - Coming Soon" />} />
          <Route path="/cnc-lab" element={<UnderConstruction title="CNC Simulation Lab - Coming Soon" />} />
          <Route path="/ai-lab" element={<UnderConstruction title="AI Labs - Coming Soon" />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin/blogs" element={<BlogAdmin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatbotTrigger />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
