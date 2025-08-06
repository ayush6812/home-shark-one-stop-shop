import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import electricalsImage from "@/assets/electricals-category.jpg";

const Electricals = () => {
  const electricalProducts = [
    { name: "LED Lighting Solutions", price: "₹199 - ₹5,000", description: "Energy-efficient LED lights for all applications" },
    { name: "Switches & Outlets", price: "₹50 - ₹500", description: "Premium switches and electrical outlets" },
    { name: "Electrical Cables", price: "₹25 - ₹2,000", description: "High-quality wiring cables and conductors" },
    { name: "Circuit Breakers", price: "₹500 - ₹10,000", description: "Safety circuit breakers and protection devices" },
    { name: "Conduits & Fittings", price: "₹100 - ₹1,500", description: "Electrical conduits and connection fittings" },
    { name: "Junction Boxes", price: "₹75 - ₹800", description: "Electrical junction and distribution boxes" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Electrical</span> Components
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Wiring, switches, fixtures, and electrical components from trusted brands. Over 12,000 electrical items available.
              </p>
              <Button variant="hero" size="lg">Browse All Electricals</Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <img src={electricalsImage} alt="Electrical Components" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Popular Electrical Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electricalProducts.map((product, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">{product.price}</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electricals;