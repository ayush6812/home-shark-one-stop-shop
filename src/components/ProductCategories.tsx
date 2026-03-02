import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import hardwareImage from "@/assets/hardware-category.jpg";
import electricalsImage from "@/assets/electricals-category.jpg";
import sanitaryImage from "@/assets/sanitary-category.jpg";
import paintsImage from "@/assets/paints-category.jpg";
import { ScrollAnimation } from "./ScrollAnimation";

const ProductCategories = () => {
  const categories = [
    {
      image: hardwareImage,
      title: "Hardware",
      description: "Complete range of tools, fasteners, and construction hardware",
      items: "10,000+ Items",
      color: "from-amber-500 to-yellow-400",
      link: "/hardware"
    },
    {
      image: electricalsImage,
      title: "Electricals",
      description: "Wiring, switches, fixtures, and electrical components",
      items: "12,000+ Items", 
      color: "from-amber-600 to-yellow-500",
      link: "/electricals"
    },
    {
      image: sanitaryImage,
      title: "Sanitary",
      description: "Pipes, fittings, fixtures, and plumbing solutions",
      items: "8,000+ Items",
      color: "from-amber-500 to-yellow-400",
      link: "/sanitary"
    },
    {
      image: paintsImage,
      title: "Paints",
      description: "Interior paints, exterior paints, and coating solutions",
      items: "10,000+ Items",
      color: "from-amber-600 to-yellow-500",
      link: "/paints"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Our Products
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Product Categories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive inventory across four major categories, ensuring we have 
              everything you need for your construction and renovation projects.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <ScrollAnimation key={index} animation="scale-up" delay={index * 100}>
              <Link 
                to={category.link}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 block"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {category.items}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 flex items-center justify-between group-hover:text-amber-500 transition-colors">
                    {category.title}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{category.description}</p>
                  <div className="flex items-center text-amber-500 font-semibold text-sm group-hover:underline underline-offset-4">
                    View Products <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">40,000+ Items Available</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  From the smallest nail to complete turnkey solutions, we have everything 
                  you need under one roof.
                </p>
                <Link to="/products">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold hover:from-amber-300 hover:to-yellow-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Browse Complete Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ProductCategories;