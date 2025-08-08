import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-shark/5 via-transparent to-ocean/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-shark/10 to-ocean/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-ocean/10 to-wave/10 rounded-full blur-xl"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/3dfc4cc0-79fc-4351-b0ca-5e94c6d5da26.png" 
              alt="Home Shark Logo" 
              className="h-28 md:h-36 w-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 font-bold text-shark bg-gradient-to-r from-shark to-ocean bg-clip-text text-transparent leading-tight">
            Market Leader in Construction & Home Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Your one-stop destination for hardware, electricals, sanitary, and tiles. 
            Over 40,000 items with unmatched customer service and lightning-fast invoicing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl">
              Explore Our Products
            </Button>
            <Button variant="cta" size="xl">
              Get Quick Quote
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 justify-center text-slate-600">
            <div className="flex items-center gap-2 hover:text-shark transition-colors">
              <Phone className="h-5 w-5 text-shark" />
              <a href="tel:01147400000" className="font-medium">01147400000</a>
            </div>
            <div className="flex items-center gap-2 hover:text-shark transition-colors">
              <Mail className="h-5 w-5 text-shark" />
              <a href="mailto:info@homeshark.in" className="font-medium">info@homeshark.in</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-shark" />
              <span className="font-medium">Tagore Market, A-26, Block A, Kirti Nagar, New Delhi, Delhi, 110015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;