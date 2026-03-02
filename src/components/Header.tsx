import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black shadow-2xl py-2" 
            : "bg-black py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="block" onClick={closeMenu}>
                <img 
                  src="/home-shark-logo.png" 
                  alt="Home Shark Logo" 
                  className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative group ${
                    isActive(link.to) 
                      ? "text-amber-400 bg-white/10" 
                      : "text-white/90 hover:text-amber-400 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-amber-400 transition-all duration-300 ${
                    isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
            </nav>

{/* CTA Buttons */}
            <div className="flex items-center justify-center px-3 py-1">
              <Link to="/quote" onClick={closeMenu}>
                <Button 
                  size="sm" 
                  className="hidden md:block bg-white text-black font-bold hover:bg-gray-100 shadow-lg transition-all duration-300 px-4 py-2"
                >
                  Get Quick Quote
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden hover:bg-white/20 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="absolute top-20 left-4 right-4 bg-black rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4">
            <nav className="flex flex-col p-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={`px-4 py-3 text-lg font-semibold rounded-xl transition-all duration-200 flex items-center justify-between ${
                    isActive(link.to)
                      ? "text-amber-400 bg-white/10"
                      : "text-white hover:text-amber-400 hover:bg-white/10"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                  <span className={isActive(link.to) ? "text-amber-400" : "opacity-0 group-hover:opacity-100 transition-opacity"}>→</span>
                </Link>
              ))}
              <div className="border-t border-white/20 my-2" />
              <Link
                to="/quote"
                onClick={closeMenu}
                className="px-4 py-3 text-lg font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl text-center shadow-lg"
              >
                Get Quote
              </Link>
              <a
                href="tel:+918766298418"
                className="mt-3 px-4 py-3 text-lg font-semibold text-white text-center border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                +91 87662 98418
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
