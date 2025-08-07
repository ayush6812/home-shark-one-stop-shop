import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Career = () => {
  const positions = [
    {
      title: "Sales Executive",
      department: "Sales",
      location: "New Delhi",
      type: "Full-time",
      description: "Drive sales growth by building relationships with contractors, builders, and retail customers.",
      requirements: ["2+ years sales experience", "Knowledge of construction materials", "Strong communication skills", "Local market knowledge"]
    },
    {
      title: "Warehouse Manager",
      department: "Operations",
      location: "Kirti Nagar",
      type: "Full-time",
      description: "Oversee warehouse operations, inventory management, and ensure efficient product distribution.",
      requirements: ["3+ years warehouse experience", "Inventory management skills", "Team leadership", "Knowledge of safety protocols"]
    },
    {
      title: "Customer Support Specialist",
      department: "Customer Service",
      location: "New Delhi",
      type: "Full-time",
      description: "Provide exceptional customer service and technical support to help customers find the right solutions.",
      requirements: ["1+ years customer service", "Product knowledge", "Problem-solving skills", "Computer proficiency"]
    },
    {
      title: "Procurement Officer",
      department: "Supply Chain",
      location: "New Delhi",
      type: "Full-time",
      description: "Manage supplier relationships and ensure optimal inventory levels across all product categories.",
      requirements: ["2+ years procurement experience", "Vendor management", "Negotiation skills", "Supply chain knowledge"]
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Professional development opportunities",
    "Performance-based incentives",
    "Flexible working hours",
    "Career growth prospects"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-shark to-ocean bg-clip-text text-transparent">
              Career Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join our growing team and build a rewarding career in the construction industry. We're always looking for talented individuals who share our passion for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-shark">Open Positions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="group bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-shark/30 transition-all duration-300 hover:shadow-glow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-shark group-hover:text-ocean transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-muted-foreground">{position.department} • {position.location}</p>
                  </div>
                  <span className="bg-gradient-to-r from-shark to-ocean text-white px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {position.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-shark">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-shark rounded-full mt-2"></div>
                        <span className="text-muted-foreground text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-shark to-ocean text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 font-medium">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shark">Why Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in investing in our team members and providing an environment where everyone can thrive.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-shark to-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-shark">Ready to Join Our Team?</h2>
            <p className="text-muted-foreground mb-8">
              Don't see a position that fits? Send us your resume anyway. We're always looking for talented individuals.
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

export default Career;