import { Building, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import warehouseImage from "@/assets/warehouse.jpg";
import { ScrollAnimation } from "./ScrollAnimation";

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
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Why Home Shark Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-shark/10 text-shark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-shark">Home Shark</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We position ourselves as the market leader - the shark that leads the industry. 
              Our commitment to excellence makes us your trusted partner for all home construction needs.
            </p>
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div className="text-center p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 hover:border-shark/30 hover:shadow-xl hover:shadow-shark/5 transition-all duration-500 transform hover:-translate-y-2 cursor-default">
                <div className="w-14 h-14 bg-gradient-to-br from-shark to-shark-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;