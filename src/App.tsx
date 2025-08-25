import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reseller from "./pages/Reseller";
import EvLab from "./pages/EvLab";
import LabVideos from "./pages/LabVideos";
import AITrainer from "./pages/AITrainer";
import AICounsellor from "./pages/AICounsellor";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import BlogAdmin from "./pages/BlogAdmin";
import EVCentreOfExcellence from "./pages/EVCentreOfExcellence";
import SolarLabCoE from "./pages/SolarLabCoE";
import AutomotiveLabCoE from "./pages/AutomotiveLabCoE";
import DroneLabCoE from "./pages/DroneLabCoE";
import ThreeDPrintingLab from "./pages/ThreeDPrintingLab";
import CNCSimulationLab from "./pages/CNCSimulationLab";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";
// import ChatbotTrigger from "./components/ChatbotTrigger";
import WhatsAppChat from "./components/WhatsAppChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
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
          <Route path="/ev-centre-of-excellence" element={<EVCentreOfExcellence />} />
          <Route path="/solar-lab-coe" element={<SolarLabCoE />} />
          <Route path="/automotive-lab-coe" element={<AutomotiveLabCoE />} />
          <Route path="/drone-lab" element={<DroneLabCoE />} />
          <Route path="/3d-printing-lab" element={<ThreeDPrintingLab />} />
          <Route path="/cnc-lab" element={<CNCSimulationLab />} />
          <Route path="/ai-trainer" element={<AITrainer />} />
          <Route path="/ai-counsellor" element={<AICounsellor />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/solar-lab" element={<UnderConstruction title="Solar Lab - Coming Soon" />} />
          <Route path="/automotive-lab" element={<UnderConstruction title="Automotive Lab - Coming Soon" />} />
          <Route path="/ai-lab" element={<UnderConstruction title="AI Labs - Coming Soon" />} />
          <Route path="/lab-videos" element={<LabVideos />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin/blogs" element={<BlogAdmin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
          <WhatsAppChat />
          {/* <ChatbotTrigger /> */}
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
