import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import sanitaryImage from "@/assets/sanitary-category.jpg";

const Sanitary = () => {
  const sanitaryProducts = [
    { name: "Premium Faucets", price: "₹999 - ₹15,000", description: "Designer faucets and taps for kitchen and bathroom" },
    { name: "Pipes & Fittings", price: "₹50 - ₹5,000", description: "PVC, CPVC, and PPR pipes with fittings" },
    { name: "Bathroom Fixtures", price: "₹2,000 - ₹50,000", description: "Complete bathroom fixtures and accessories" },
    { name: "Water Heaters", price: "₹5,000 - ₹25,000", description: "Electric and gas water heating solutions" },
    { name: "Drainage Systems", price: "₹200 - ₹10,000", description: "Complete drainage and sewage solutions" },
    { name: "Plumbing Tools", price: "₹500 - ₹5,000", description: "Professional plumbing tools and equipment" }
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Sanitary</span> & Plumbing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Pipes, fittings, fixtures, and plumbing solutions for residential and commercial projects. Over 8,000 sanitary items.
              </p>
              <Button variant="hero" size="lg">Browse All Sanitary</Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <img src={sanitaryImage} alt="Sanitary & Plumbing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Popular Sanitary Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sanitaryProducts.map((product, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
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

export default Sanitary;