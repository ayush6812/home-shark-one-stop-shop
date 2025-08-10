import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hardwareImage from "@/assets/hardware-category.jpg";
import electricalsImage from "@/assets/electricals-category.jpg";
import sanitaryImage from "@/assets/sanitary-category.jpg";
import paintsImage from "@/assets/paints-category.jpg";

const ProductCategories = () => {
  const categories = [
    {
      image: hardwareImage,
      title: "Hardware",
      description: "Complete range of tools, fasteners, and construction hardware",
      items: "10,000+ Items",
      color: "from-shark to-shark-light",
      link: "/hardware"
    },
    {
      image: electricalsImage,
      title: "Electricals",
      description: "Wiring, switches, fixtures, and electrical components",
      items: "12,000+ Items", 
      color: "from-orange-500 to-orange-600",
      link: "/electricals"
    },
    {
      image: sanitaryImage,
      title: "Sanitary",
      description: "Pipes, fittings, fixtures, and plumbing solutions",
      items: "8,000+ Items",
      color: "from-blue-500 to-blue-600",
      link: "/sanitary"
    },
    {
      image: paintsImage,
      title: "Paints",
      description: "Premium paints, coatings, and finishing solutions",
      items: "10,000+ Items",
      link: "/paints"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            <Link 
              key={index} 
              to={category.link}
              className="group relative overflow-hidden rounded-xl bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 transform block"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="relative p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <p className="text-shark font-semibold text-lg mb-6">{category.items}</p>
                <Button variant="outline" className="w-full group-hover:bg-shark group-hover:text-white transition-colors">
                  View Products
                </Button>
              </div>
            </Link>
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
            <Link to="/products">
              <Button variant="hero" size="lg">
                Browse Complete Catalog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;