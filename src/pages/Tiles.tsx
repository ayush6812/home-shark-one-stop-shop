import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import tilesImage from "@/assets/tiles-category.jpg";

const Tiles = () => {
  const tilesProducts = [
    { name: "Ceramic Floor Tiles", price: "₹45 - ₹200/sq.ft", description: "Durable ceramic tiles for flooring applications" },
    { name: "Vitrified Tiles", price: "₹80 - ₹500/sq.ft", description: "Premium vitrified tiles with superior finish" },
    { name: "Wall Tiles", price: "₹35 - ₹300/sq.ft", description: "Decorative wall tiles for kitchens and bathrooms" },
    { name: "Granite Tiles", price: "₹150 - ₹800/sq.ft", description: "Natural granite tiles for luxury applications" },
    { name: "Designer Tiles", price: "₹200 - ₹1000/sq.ft", description: "Artistic and designer tiles for premium spaces" },
    { name: "Outdoor Tiles", price: "₹60 - ₹400/sq.ft", description: "Weather-resistant tiles for outdoor use" }
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Tiles</span> & Flooring
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Floor tiles, wall tiles, and ceramic solutions for every space. Over 10,000 tile options to choose from.
              </p>
              <Button variant="hero" size="lg">Browse All Tiles</Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <img src={tilesImage} alt="Tiles Showroom" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Popular Tile Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tilesProducts.map((product, index) => (
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

export default Tiles;