import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-shark to-wave">Home Shark</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Market leader in construction supplies with over two decades of experience serving builders, contractors, and homeowners across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2000, Home Shark began as a small hardware store with a simple mission: 
                to provide quality construction supplies with exceptional service. Over the years, 
                we've grown into the region's most trusted supplier, maintaining our commitment to 
                excellence while expanding our inventory to over 40,000 items.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we serve thousands of satisfied customers ranging from large construction 
                companies to individual homeowners, all while maintaining the personal touch that 
                made us who we are.
              </p>
            </div>
            <div className="bg-gradient-card rounded-xl p-8 shadow-elegant">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-shark mb-2">20+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-shark mb-2">40K+</div>
                  <div className="text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-shark mb-2">5000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-shark mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why Choose Home Shark?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Only premium brands and certified products in our inventory"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Knowledgeable staff to help you find exactly what you need"
              },
              {
                icon: Clock,
                title: "Fast Service",
                description: "Quick processing and delivery to keep your projects on track"
              },
              {
                icon: MapPin,
                title: "Local Presence",
                description: "Conveniently located with strong community connections"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-shark to-shark-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;