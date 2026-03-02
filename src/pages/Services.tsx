import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Calculator, Headphones, Clock, Shield, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Link } from "react-router-dom";

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
      <section className="relative bg-black py-28 pt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                Our Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Services</span> for You
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Beyond products, we provide comprehensive services to ensure your construction and home improvement projects succeed.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-10 w-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Ready to Get <span className="text-amber-500">Started</span>?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and discover how our services can help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+91 87662 98418"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30"
                >
                  <span>📞</span> Call: +91 87662 98418
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <span>→</span>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
