import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <a href="/" className="block">
                <img 
                  src="/home-shark-logo.png" 
                  alt="Home Shark Logo" 
                  className="h-14 w-auto"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Market leader in construction supplies with over 40,000 items. 
              Your one-stop solution for all home construction needs.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61578261213478" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
              Quick Links
              <span className="w-8 h-0.5 bg-amber-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Our Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Services</Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Career</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
              Products
              <span className="w-8 h-0.5 bg-amber-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              <li><a href="/hardware" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Hardware</a></li>
              <li><a href="/electricals" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Electricals</a></li>
              <li><a href="/sanitary" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Sanitary</a></li>
              <li><a href="/paints" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Paints</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">Complete Catalog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5 flex items-center gap-2">
              Contact Us
              <span className="w-8 h-0.5 bg-amber-500 rounded-full" />
            </h4>
            <div className="space-y-4">
              <a 
                href="https://maps.app.goo.gl/Kmb9uuyfZbNCSDih8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-sm leading-relaxed">Tagore Market, A-26, Block A,<br />Indira Colony, Kirti Nagar<br />New Delhi, Delhi 110015</span>
              </a>
              <a 
                href="tel:+918766298418" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-semibold">+91 87662 98418</span>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@homeshark.in" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-semibold">info@homeshark.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; {currentYear} Corporate Buildcon LLP. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
