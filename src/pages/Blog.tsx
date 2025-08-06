import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 10 Essential Tools for Home Construction",
      excerpt: "Discover the must-have tools that every homeowner and contractor should have in their toolkit for successful construction projects.",
      author: "John Smith",
      date: "March 15, 2024",
      category: "Tools & Equipment",
      image: "/placeholder.svg"
    },
    {
      title: "Electrical Safety Tips for DIY Projects",
      excerpt: "Learn essential electrical safety practices to keep yourself and your property safe during electrical installations and repairs.",
      author: "Sarah Johnson",
      date: "March 12, 2024", 
      category: "Electrical",
      image: "/placeholder.svg"
    },
    {
      title: "Choosing the Right Tiles for Your Space",
      excerpt: "A comprehensive guide to selecting the perfect tiles for different areas of your home, from bathrooms to living rooms.",
      author: "Mike Davis",
      date: "March 10, 2024",
      category: "Tiles & Flooring",
      image: "/placeholder.svg"
    },
    {
      title: "Plumbing Maintenance: Prevent Costly Repairs",
      excerpt: "Simple maintenance tips that can help you avoid expensive plumbing repairs and keep your water systems running smoothly.",
      author: "Lisa Wilson",
      date: "March 8, 2024",
      category: "Plumbing",
      image: "/placeholder.svg"
    },
    {
      title: "Sustainable Building Materials: The Future",
      excerpt: "Explore eco-friendly construction materials that are not only good for the environment but also cost-effective.",
      author: "Robert Chen",
      date: "March 5, 2024",
      category: "Sustainability",
      image: "/placeholder.svg"
    },
    {
      title: "Hardware Organization: Maximize Efficiency",
      excerpt: "Tips and tricks for organizing your hardware inventory and tools to improve productivity on construction sites.",
      author: "Emma Thompson",
      date: "March 3, 2024",
      category: "Organization",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Home Shark <span className="text-transparent bg-clip-text bg-gradient-to-r from-shark to-wave">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, tips, and guides for all your construction and home improvement needs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-card rounded-xl overflow-hidden shadow-elegant">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Featured Image</span>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="text-sm text-shark font-medium mb-3">Featured Post</div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <Button variant="hero">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-gradient-card rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-shark font-medium mb-3">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-shark/10 to-ocean/10 rounded-xl p-12 text-center border border-shark/20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to get the latest construction tips, product updates, and industry insights delivered to your inbox.
            </p>
            <Button variant="hero" size="lg">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;