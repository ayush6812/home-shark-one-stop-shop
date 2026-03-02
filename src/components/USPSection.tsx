import { Headphones, Clock, ShoppingCart, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "./ScrollAnimation";

const USPSection = () => {
  const usps = [
    {
      icon: Headphones,
      title: "Exceptional Customer Service",
      description: "Our dedicated support team ensures every query is resolved quickly and efficiently.",
      stats: "24/7 Support"
    },
    {
      icon: Clock,
      title: "Lightning-Fast Invoicing",
      description: "Advanced billing system that processes invoices in minutes, not hours.",
      stats: "< 5 Min"
    },
    {
      icon: ShoppingCart,
      title: "One-Stop Shopping",
      description: "From basic hardware to complete project solutions, everything you need under one roof.",
      stats: "40,000+ Items"
    },
    {
      icon: Award,
      title: "Market Leadership",
      description: "Industry-leading quality standards and competitive pricing that others follow.",
      stats: "#1 Rated"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-amber-500">Competitive Edge</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              What sets Home Shark apart from the competition? Our unwavering commitment 
              to customer satisfaction and operational excellence.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {usps.map((usp, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div 
                className="group flex gap-5 p-6 lg:p-8 rounded-2xl bg-white border border-gray-100 hover:border-amber-400/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-1 cursor-default"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <usp.icon className="h-7 w-7 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900">{usp.title}</h3>
                    <span className="text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 px-3 py-1 rounded-full whitespace-nowrap">
                      {usp.stats}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm lg:text-base">{usp.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation animation="scale-up">
          <div className="text-center bg-black rounded-2xl p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Experience the Difference?</h3>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Home Shark for their construction needs.
              </p>
              <div className="flex justify-center">
                <Link to="/quote">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold px-10 py-4 text-lg shadow-[0_8px_20px_rgba(255,152,0,0.3)] hover:shadow-[0_12px_25px_rgba(255,152,0,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Quick Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default USPSection;
