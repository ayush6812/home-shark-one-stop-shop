import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import hardwareImage from "@/assets/hardware-category.jpg";

const Hardware = () => {
  const hardwareProducts = [
    { name: "Steel Bolts & Nuts", price: "₹25 - ₹500", description: "High-grade steel bolts and nuts in various sizes" },
    { name: "Power Tools", price: "₹999 - ₹15,000", description: "Professional power tools for construction" },
    { name: "Hand Tools", price: "₹199 - ₹2,999", description: "Complete range of hand tools for all trades" },
    { name: "Screws & Fasteners", price: "₹5 - ₹200", description: "Premium screws and fastening solutions" },
    { name: "Construction Hardware", price: "₹50 - ₹5,000", description: "Brackets, hinges, and construction hardware" },
    { name: "Safety Equipment", price: "₹100 - ₹3,000", description: "Personal protective equipment for construction" }
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-shark to-wave">Hardware</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete range of tools, fasteners, and construction hardware for professionals and DIY enthusiasts. Over 10,000 items in stock.
              </p>
              <Button variant="hero" size="lg">Browse All Hardware</Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <img src={hardwareImage} alt="Hardware Store" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Popular Hardware Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareProducts.map((product, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-shark">{product.price}</span>
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

export default Hardware;