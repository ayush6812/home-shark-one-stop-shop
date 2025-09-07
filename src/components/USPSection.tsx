import { Headphones, Clock, ShoppingCart, Award } from "lucide-react";
import { Link } from "react-router-dom";

const USPSection = () => {
  const usps = [
    {
      icon: Headphones,
      title: "Exceptional Customer Service",
      description: "Our dedicated support team ensures every query is resolved quickly and efficiently. We believe in building relationships, not just transactions.",
      stats: "24/7 Support"
    },
    {
      icon: Clock,
      title: "Lightning-Fast Invoicing",
      description: "Advanced billing system that processes invoices in minutes, not hours. Get your documentation ready instantly for seamless project flow.",
      stats: "< 5 Min Processing"
    },
    {
      icon: ShoppingCart,
      title: "One-Stop Shopping",
      description: "Why visit multiple suppliers? From basic hardware to complete project solutions, everything you need is available under one roof.",
      stats: "40,000+ Items"
    },
    {
      icon: Award,
      title: "Market Leadership",
      description: "Industry-leading quality standards and competitive pricing. We set the benchmark that others follow in the construction supply market.",
      stats: "Industry Leader"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-shark">Competitive Edge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What sets Home Shark apart from the competition? Our unwavering commitment 
            to customer satisfaction and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {usps.map((usp, index) => (
            <div 
              key={index} 
              className="flex gap-6 p-8 rounded-xl bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-shark/10 rounded-full flex items-center justify-center">
                  <usp.icon className="h-8 w-8 text-shark" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{usp.title}</h3>
                  <span className="text-sm font-medium text-shark bg-shark/10 px-3 py-1 rounded-full">
                    {usp.stats}
                  </span>
                </div>
                <p className="text-muted-foreground">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-shark to-shark-light rounded-lg p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust Home Shark for their construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <button className="bg-white text-shark font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-shark transition-colors">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;