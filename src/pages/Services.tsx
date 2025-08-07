import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Calculator, Headphones, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Fast Invoicing System",
      description: "Lightning-fast billing and documentation services to keep your projects moving without delays.",
      features: ["Instant Invoicing", "Digital Records", "GST Compliance", "Payment Tracking"]
    },
    {
      icon: Headphones,
      title: "Expert Consultation",
      description: "Our team of experts helps you choose the right products for your specific project requirements and budget.",
      features: ["Technical Specifications", "Budget Planning", "Product Comparison", "Quality Assessment"]
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Reliable delivery network ensuring your products reach the right place at the right time.",
      features: ["Timely Delivery", "Secure Packaging", "Real-time Tracking", "Installation Support"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive quality checks and warranties to ensure you receive only the best products.",
      features: ["Pre-delivery Inspection", "Quality Certificates", "Return Policy", "Warranty Support"]
    },
    {
      icon: Clock,
      title: "Bulk Supply Solutions",
      description: "Specialized services for contractors and builders requiring large quantity orders with competitive pricing.",
      features: ["Volume Discounts", "Scheduled Deliveries", "Credit Facilities", "Dedicated Support"]
    },
    {
      icon: MapPin,
      title: "Customer Support",
      description: "Dedicated customer service team available to assist you throughout your project journey.",
      features: ["24/7 Support", "Technical Assistance", "Order Tracking", "After-sales Service"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-shark to-ocean bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Beyond products, we provide comprehensive services to ensure your construction and home improvement projects succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-shark/30 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-shark to-ocean rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-shark group-hover:text-ocean transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-shark to-ocean rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-shark">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and discover how our services can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:01147400000"
                className="bg-gradient-to-r from-shark to-ocean text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 font-medium"
              >
                Call: 01147400000
              </a>
              <a 
                href="https://homeshark.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-shark text-shark px-8 py-3 rounded-lg hover:bg-shark hover:text-white transition-all duration-300 hover:scale-105 font-medium"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;