import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-shark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/3dfc4cc0-79fc-4351-b0ca-5e94c6d5da26.png" 
                alt="Home Shark Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6">
              Market leader in construction supplies with over 40,000 items. 
              Your one-stop solution for all home construction needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-wave cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-wave cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-wave cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-wave cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="/about" className="hover:text-wave transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-wave transition-colors">Our Products</a></li>
              <li><a href="/services" className="hover:text-wave transition-colors">Services</a></li>
              <li><a href="/career" className="hover:text-wave transition-colors">Career</a></li>
              <li><a href="/blog" className="hover:text-wave transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="/hardware" className="hover:text-wave transition-colors">Hardware</a></li>
              <li><a href="/electricals" className="hover:text-wave transition-colors">Electricals</a></li>
              <li><a href="/sanitary" className="hover:text-wave transition-colors">Sanitary</a></li>
              <li><a href="/tiles" className="hover:text-wave transition-colors">Tiles</a></li>
              <li><a href="/products" className="hover:text-wave transition-colors">Complete Catalog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-wave" />
                <span>A-26, Block A, Indira Colony<br />Kirti Nagar, New Delhi, 110015</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-wave" />
                <span>01147400000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-wave" />
                <span>https://homeshark.in/</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Home Shark. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;