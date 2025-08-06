import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3dfc4cc0-79fc-4351-b0ca-5e94c6d5da26.png" 
              alt="Home Shark Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-shark transition-colors">Home</a>
            <a href="/about" className="text-foreground hover:text-shark transition-colors">About</a>
            <a href="/products" className="text-foreground hover:text-shark transition-colors">Products</a>
            <a href="/services" className="text-foreground hover:text-shark transition-colors">Services</a>
            <a href="/blog" className="text-foreground hover:text-shark transition-colors">Blog</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 XXXXX XXXXX</span>
            </div>
            <Button variant="hero" size="sm" className="hidden sm:block">
              Get Quote
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;