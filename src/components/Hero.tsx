import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-back.jpg";
import { ScrollAnimation } from "./ScrollAnimation";

const Hero = () => {
  const features = [
    "40,000+ Products",
    "Fast Delivery",
    "Best Prices",
    "Expert Support"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Strong Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.95) 100%), url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="mb-8 flex justify-center pt-8 md:pt-12">
              <div className="relative">
                <img 
                  src="/home-shark-logo.png" 
                  alt="Home Shark Logo" 
                  className="h-28 md:h-36 w-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Trust Badges */}
          <ScrollAnimation animation="fade-up" delay={50}>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold text-white shadow-lg hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 animate-float-badge"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CheckCircle className="h-4 w-4 text-amber-400" />
                  {feature}
                </span>
              ))}
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 font-extrabold text-white tracking-tight leading-none drop-shadow-lg">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mb-2">Market Leader in</span>
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                Construction & Home Solutions
              </span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="space-y-2 mb-8">
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
                Everything You Need to Build Better.
              </p>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium">
                40,000+ Products • Trusted by Contractors • Best Market Prices
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/products" className="inline-block">
                <Button variant="hero" size="xl" className="w-full sm:w-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group font-normal">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/quote" className="inline-block">
                <Button size="xl" className="w-full sm:w-auto bg-white text-black font-normal px-8 py-4 rounded-xl shadow-lg hover:bg-transparent hover:text-white hover:border-2 hover:border-white hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Get Quick Quote
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center text-white px-4 py-4">
              <a 
                href="https://wa.me/918766298418" 
                className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-yellow-glow flex-shrink-0">
                  <Phone className="h-5 w-5 text-black" />
                </div>
                <span className="font-bold">Contact</span>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@homeshark.in" 
                className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-yellow-glow flex-shrink-0">
                  <Mail className="h-5 w-5 text-black" />
                </div>
                <span className="font-bold">info@homeshark.in</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/Kmb9uuyfZbNCSDih8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-yellow-glow flex-shrink-0">
                  <MapPin className="h-5 w-5 text-black" />
                </div>
                <span className="font-bold whitespace-nowrap">Home Shark</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;