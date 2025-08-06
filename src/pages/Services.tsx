import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Calculator, Headphones, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-shark to-wave">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive support services to make your construction projects seamless and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Same-day delivery for orders placed before 2 PM. Free delivery for orders above ₹5,000.",
                features: ["Same-day delivery", "Free shipping over ₹5,000", "Real-time tracking"]
              },
              {
                icon: Calculator,
                title: "Quick Invoicing",
                description: "Get your invoices instantly with our advanced billing system. Digital receipts and GST compliance.",
                features: ["Instant invoicing", "Digital receipts", "GST compliant"]
              },
              {
                icon: Headphones,
                title: "Expert Consultation",
                description: "Our team of experts helps you choose the right products for your specific project needs.",
                features: ["Product consultation", "Project planning", "Technical support"]
              },
              {
                icon: Clock,
                title: "Extended Hours",
                description: "Open 7 days a week with extended hours to accommodate your busy construction schedule.",
                features: ["7 days a week", "Extended hours", "Holiday availability"]
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "All products come with manufacturer warranty and our quality assurance guarantee.",
                features: ["Manufacturer warranty", "Quality guarantee", "Easy returns"]
              },
              {
                icon: MapPin,
                title: "Site Delivery",
                description: "Direct delivery to your construction site with proper handling and placement services.",
                features: ["Site delivery", "Proper handling", "Placement assistance"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-shark to-shark-light rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-shark rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-shark/10 to-ocean/10 rounded-xl p-12 text-center border border-shark/20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Need Custom Solutions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We offer customized solutions for large projects, bulk orders, and specialized requirements. 
              Contact our team to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Custom Quote
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;