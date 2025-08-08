import { Package, Users, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import warehouseImage from "@/assets/warehouse.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Package,
      title: "40,000+ Products",
      description: "Comprehensive inventory covering all your construction and home improvement needs"
    },
    {
      icon: Users,
      title: "Expert Service",
      description: "Dedicated customer support with industry expertise to guide your projects"
    },
    {
      icon: Clock,
      title: "Quick Invoicing", 
      description: "Lightning-fast billing system for seamless transaction experience"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Premium products from trusted brands with guaranteed satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-shark mb-6">
            Why Choose Home Shark?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine the reliability of a home with the fierce determination of a shark 
            to deliver exceptional construction solutions that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-accent/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-shark to-ocean w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-shark mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Company Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-r from-shark/10 to-ocean/10 p-8 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold text-shark mb-6">Our Philosophy</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-shark pl-6">
                  <h4 className="text-xl font-semibold text-shark mb-2">🏠 HOME</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Represents comfort, trust, and reliability. We create a foundation 
                    of trust with every customer, ensuring your projects feel secure and supported.
                  </p>
                </div>
                
                <div className="border-l-4 border-ocean pl-6">
                  <h4 className="text-xl font-semibold text-ocean mb-2">🦈 SHARK</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Symbolizes our aggressive pursuit of excellence, efficiency, and market leadership. 
                    We move fast, adapt quickly, and always stay ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={warehouseImage} 
                alt="Home Shark Warehouse"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">State-of-the-Art Facility</h4>
                <p className="text-white/90">Modern warehouse with advanced inventory management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="hover:scale-105 transition-transform duration-300">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;