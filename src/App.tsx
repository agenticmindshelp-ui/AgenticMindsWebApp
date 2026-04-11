import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};
import Layout from "./components/Layout";
import Index from "./pages/Index";
import YouthPrograms from "./pages/YouthPrograms";
import ProfessionalTraining from "./pages/ProfessionalTraining";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enrollment from "./pages/Enrollment";
import NotFound from "./pages/NotFound";

import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/youth-programs" element={<YouthPrograms />} />
            <Route path="/professional-training" element={<ProfessionalTraining />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
