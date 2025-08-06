import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCategories from "@/components/ProductCategories";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-shark to-wave">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of 40,000+ construction supplies across four major categories.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search for products..." 
                className="pl-12 pr-20 h-14 text-lg bg-background/80 backdrop-blur-sm border-border/50"
              />
              <Button variant="hero" size="sm" className="absolute right-2 top-2">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <ProductCategories />

      {/* Featured Products */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Premium Steel Bolts Set",
                category: "Hardware",
                price: "₹299",
                image: "/placeholder.svg"
              },
              {
                name: "LED Panel Lights",
                category: "Electricals", 
                price: "₹1,299",
                image: "/placeholder.svg"
              },
              {
                name: "Chrome Faucet Set",
                category: "Sanitary",
                price: "₹2,499",
                image: "/placeholder.svg"
              },
              {
                name: "Ceramic Floor Tiles",
                category: "Tiles",
                price: "₹89/sq.ft",
                image: "/placeholder.svg"
              },
              {
                name: "Power Drill Kit",
                category: "Hardware",
                price: "₹3,999",
                image: "/placeholder.svg"
              },
              {
                name: "Smart Switch Panel",
                category: "Electricals",
                price: "₹899",
                image: "/placeholder.svg"
              }
            ].map((product, index) => (
              <div key={index} className="bg-gradient-card rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Product Image</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-shark font-medium mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-shark">{product.price}</span>
                    <Button variant="outline" size="sm">Add to Cart</Button>
                  </div>
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

export default Products;