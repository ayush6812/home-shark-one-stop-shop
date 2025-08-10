import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import paintsImage from "@/assets/paints-category.jpg";

const Paints = () => {
  const paintsProducts = [
    { name: "Interior Emulsion", price: "₹150 - ₹500/litre", description: "Premium interior wall paints with excellent finish" },
    { name: "Exterior Paints", price: "₹200 - ₹800/litre", description: "Weather-resistant exterior paints for long-lasting protection" },
    { name: "Primer & Putty", price: "₹80 - ₹300/litre", description: "Wall preparation products for smooth painting" },
    { name: "Wood Stains", price: "₹250 - ₹1000/litre", description: "Premium wood stains and varnishes" },
    { name: "Texture Paints", price: "₹300 - ₹1200/litre", description: "Decorative texture paints for artistic walls" },
    { name: "Industrial Coatings", price: "₹400 - ₹2000/litre", description: "Specialized coatings for industrial applications" }
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Paints</span> & Coatings
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Interior paints, exterior paints, and coating solutions for every surface. Over 10,000 paint options to choose from.
              </p>
              <Button variant="hero" size="lg">Browse All Paints</Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <img src={paintsImage} alt="Paints Showroom" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Popular Paint Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintsProducts.map((product, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">{product.price}</span>
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

export default Paints;