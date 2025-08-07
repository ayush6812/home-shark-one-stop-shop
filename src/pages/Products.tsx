import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCategories from "@/components/ProductCategories";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Products = () => {
  const categories = [
    {
      title: "Hardware",
      description: "Complete range of construction hardware including tools, fasteners, and building materials.",
      items: ["Hand Tools", "Power Tools", "Fasteners", "Building Hardware", "Safety Equipment"],
      link: "/hardware"
    },
    {
      title: "Electricals",
      description: "Comprehensive electrical solutions for residential and commercial projects.",
      items: ["Wires & Cables", "Switches & Sockets", "LED Lighting", "Electrical Panels", "Safety Devices"],
      link: "/electricals"
    },
    {
      title: "Sanitary",
      description: "Premium sanitary and plumbing solutions for modern bathrooms and kitchens.",
      items: ["Sanitaryware", "Faucets & Taps", "Pipes & Fittings", "Bathroom Accessories", "Water Heaters"],
      link: "/sanitary"
    },
    {
      title: "Tiles",
      description: "Stunning tile collections for floors, walls, and decorative applications.",
      items: ["Floor Tiles", "Wall Tiles", "Designer Tiles", "Outdoor Tiles", "Tile Adhesives"],
      link: "/tiles"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-shark to-ocean bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of 40,000+ products across all major construction and home solution categories.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-shark/30 transition-all duration-300 hover:shadow-glow">
                <h3 className="text-2xl font-bold mb-4 text-shark group-hover:text-ocean transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-shark rounded-full"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={category.link}
                  className="inline-block bg-gradient-to-r from-shark to-ocean text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium hover:scale-105 duration-300"
                >
                  Explore {category.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shark">Why Choose Our Products?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We source only the finest quality products from trusted manufacturers worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-shark to-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">40K+</span>
              </div>
              <h3 className="font-semibold mb-2 text-shark">Extensive Range</h3>
              <p className="text-muted-foreground text-sm">Over 40,000 products across all categories</p>
            </div>
            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-shark to-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">✓</span>
              </div>
              <h3 className="font-semibold mb-2 text-shark">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">All products undergo strict quality checks</p>
            </div>
            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-shark to-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">⚡</span>
              </div>
              <h3 className="font-semibold mb-2 text-shark">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">Quick processing and reliable delivery</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;