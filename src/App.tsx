import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Hardware from "./pages/Hardware";
import Electricals from "./pages/Electricals";
import Sanitary from "./pages/Sanitary";
import Paints from "./pages/Paints";
import NotFound from "./pages/NotFound";

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
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/electricals" element={<Electricals />} />
          <Route path="/sanitary" element={<Sanitary />} />
          <Route path="/paints" element={<Paints />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
