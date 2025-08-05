import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-shark/90 via-shark/60 to-shark/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            HOME <span className="text-wave drop-shadow-2xl">SHARK</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold drop-shadow-lg bg-shark/20 backdrop-blur-sm rounded-lg py-3 px-6 border border-white/10">
            Market Leader in Construction & Home Solutions
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
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
          <div className="flex flex-col md:flex-row gap-6 justify-center text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@homeshark.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Your Location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;