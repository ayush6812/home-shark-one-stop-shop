import { Building, Users, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import warehouseImage from "@/assets/warehouse.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Building,
      title: "40,000+ Items",
      description: "Comprehensive inventory covering all your construction needs"
    },
    {
      icon: Users,
      title: "Expert Customer Service",
      description: "Dedicated support team to guide you through every project"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Invoicing",
      description: "Quick processing and billing for seamless transactions"
    },
    {
      icon: CheckCircle,
      title: "One-Stop Solution",
      description: "Everything from nails to turnkey modular kitchens"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Why Home Shark Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-shark">Home Shark</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We position ourselves as the market leader - the shark that leads the industry. 
            Our commitment to excellence makes us your trusted partner for all home construction needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-shark/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-shark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Excellence Through Complete Construction Solutions
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-shark">Comprehensive Inventory:</strong> From hardware essentials to premium paints, 
                electrical components to sanitary fixtures - our 40,000+ item inventory ensures you find everything 
                needed for your construction and renovation projects under one roof.
              </p>
              <p>
                <strong className="text-shark">Market Leadership:</strong> As the industry shark, we lead through 
                innovation and reliability. Our state-of-the-art warehouse facilities and expert team deliver 
                unmatched service quality that contractors and homeowners depend on.
              </p>
              <p>
                Whether you're sourcing a single nail or planning a complete turnkey modular kitchen, 
                our streamlined processes and extensive product range guarantee project success from start to finish.
              </p>
            </div>
            <Button variant="hero" size="lg" className="mt-6">
              Learn More About Us
            </Button>
          </div>
          <div className="relative">
            <img 
              src={warehouseImage} 
              alt="Home Shark Warehouse" 
              className="rounded-lg shadow-elegant w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shark/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;