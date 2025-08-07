import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Essential Tools Every Contractor Should Have in 2024",
      excerpt: "Discover the must-have tools that can boost productivity and efficiency on your construction projects.",
      date: "March 15, 2024",
      category: "Hardware",
      readTime: "5 min read"
    },
    {
      title: "Smart Home Electrical Solutions: Future-Proofing Your Property",
      excerpt: "Learn about the latest electrical innovations that are transforming modern homes and buildings.",
      date: "March 10, 2024",
      category: "Electricals",
      readTime: "7 min read"
    },
    {
      title: "Sustainable Building Materials: A Complete Guide",
      excerpt: "Explore eco-friendly construction materials that reduce environmental impact without compromising quality.",
      date: "March 5, 2024",
      category: "General",
      readTime: "8 min read"
    },
    {
      title: "Modern Bathroom Design Trends with Premium Sanitary Solutions",
      excerpt: "Transform your bathroom space with the latest design trends and high-quality sanitary fixtures.",
      date: "February 28, 2024",
      category: "Sanitary",
      readTime: "6 min read"
    },
    {
      title: "Tile Installation Best Practices for Long-Lasting Results",
      excerpt: "Professional tips and techniques for perfect tile installation that stands the test of time.",
      date: "February 20, 2024",
      category: "Tiles",
      readTime: "10 min read"
    },
    {
      title: "Cost-Effective Construction: Maximizing Value Without Compromising Quality",
      excerpt: "Strategic approaches to reduce construction costs while maintaining high standards and quality.",
      date: "February 15, 2024",
      category: "General",
      readTime: "12 min read"
    }
  ];

  const categories = ["All", "Hardware", "Electricals", "Sanitary", "Tiles", "General"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-shark to-ocean bg-clip-text text-transparent">
              Blog & Industry Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay informed with expert advice, industry trends, and practical tips for your construction and home improvement projects.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-border/50 text-muted-foreground hover:border-shark hover:text-shark transition-all duration-300 hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group bg-background/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-shark/30 transition-all duration-300 hover:shadow-glow hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-shark/10 to-ocean/10"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-gradient-to-r from-shark to-ocean text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-shark group-hover:text-ocean transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">{post.date}</span>
                    <button className="text-shark hover:text-ocean transition-colors font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-shark">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest industry insights, product updates, and expert tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm focus:outline-none focus:border-shark transition-colors"
              />
              <button className="bg-gradient-to-r from-shark to-ocean text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;