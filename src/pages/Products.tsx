import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollAnimation } from "@/components/ScrollAnimation";

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
      <section className="relative bg-black py-28 pt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                Our Products
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quality <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Products</span> for Every Need
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover our comprehensive range of 40,000+ products across all major construction and home solution categories.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {category.title}
                    </h3>
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <span className="text-black font-bold text-lg">→</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={category.link}
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-black transition-all duration-300"
                  >
                    Explore {category.title}
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-amber-500">Our Products</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We source only the finest quality products from trusted manufacturers worldwide.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-up" delay={0}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
                  <span className="text-3xl text-black font-bold">40K+</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Extensive Range</h3>
                <p className="text-gray-600">Over 40,000 products across all categories</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
                  <span className="text-3xl text-black font-bold">✓</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Quality Assured</h3>
                <p className="text-gray-600">All products undergo strict quality checks</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
                  <span className="text-3xl text-black font-bold">⚡</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Fast Delivery</h3>
                <p className="text-gray-600">Quick processing and reliable delivery</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
