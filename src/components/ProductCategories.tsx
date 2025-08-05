import { Wrench, Zap, Droplets, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCategories = () => {
  const categories = [
    {
      icon: Wrench,
      title: "Hardware",
      description: "Complete range of tools, fasteners, and construction hardware",
      items: "10,000+ Items",
      color: "from-shark to-shark-light"
    },
    {
      icon: Zap,
      title: "Electricals",
      description: "Wiring, switches, fixtures, and electrical components",
      items: "12,000+ Items", 
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Droplets,
      title: "Sanitary",
      description: "Pipes, fittings, fixtures, and plumbing solutions",
      items: "8,000+ Items",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Grid3X3,
      title: "Tiles",
      description: "Floor tiles, wall tiles, and ceramic solutions",
      items: "10,000+ Items",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive inventory across four major categories, ensuring we have 
            everything you need for your construction and renovation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 transform"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <p className="text-shark font-semibold text-lg mb-6">{category.items}</p>
                <Button variant="outline" className="w-full group-hover:bg-shark group-hover:text-white transition-colors">
                  View Products
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-shark/10 to-ocean/10 rounded-xl p-8 max-w-4xl mx-auto border border-shark/20">
            <h3 className="text-2xl font-bold mb-4 text-shark">40,000+ Items Available</h3>
            <p className="text-muted-foreground mb-6">
              From the smallest nail to complete turnkey solutions, we have everything 
              you need under one roof. Our extensive inventory ensures you never have to 
              look elsewhere for your construction needs.
            </p>
            <Button variant="hero" size="lg">
              Browse Complete Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;