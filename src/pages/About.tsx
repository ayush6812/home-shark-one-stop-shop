import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-shark to-ocean bg-clip-text text-transparent">
              About Home Shark
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in construction and home solutions since inception. We combine expertise with innovation to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-shark">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Home Shark began with a simple mission: to revolutionize the construction supply industry by providing comprehensive solutions under one roof. Our journey started with recognizing the gap in the market for a reliable, efficient, and customer-focused supplier.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Today, we serve thousands of customers with over 40,000 products ranging from hardware and electricals to sanitary and tiles. Our commitment to quality and service has made us a market leader in construction solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located at Tagore Market, Kirti Nagar, New Delhi, we continue to expand our reach while maintaining our core values of integrity, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-shark/10 to-ocean/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-shark">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-shark rounded-full mt-2"></div>
                  <span className="text-muted-foreground">40,000+ products in stock</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-shark rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Lightning-fast invoicing system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-shark rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Expert customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-shark rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Competitive pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-shark rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Reliable delivery network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shark">Get in Touch</h2>
            <p className="text-muted-foreground">Ready to start your project? Contact us today.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a 
              href="tel:01147400000" 
              className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-shark/30 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <h3 className="font-semibold mb-2 text-shark group-hover:text-ocean transition-colors">Phone</h3>
              <p className="text-muted-foreground">01147400000</p>
            </a>
            <a 
              href="https://homeshark.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-shark/30 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <h3 className="font-semibold mb-2 text-shark group-hover:text-ocean transition-colors">Website</h3>
              <p className="text-muted-foreground">https://homeshark.in/</p>
            </a>
            <div className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50">
              <h3 className="font-semibold mb-2 text-shark">Address</h3>
              <p className="text-muted-foreground text-sm">A-26, Block A, Indira Colony, Kirti Nagar, New Delhi, 110015</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;