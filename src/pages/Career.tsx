import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Career = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-shark to-wave">Home Shark</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your career with the market leader in construction supplies. We're always looking for passionate individuals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Great Team",
                description: "Work with passionate professionals in a collaborative environment"
              },
              {
                icon: Briefcase,
                title: "Growth Opportunities",
                description: "Clear career paths and skill development programs"
              },
              {
                icon: Clock,
                title: "Work-Life Balance",
                description: "Flexible schedules and comprehensive benefits package"
              },
              {
                icon: MapPin,
                title: "Prime Location",
                description: "Convenient workplace location with modern facilities"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-shark to-shark-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Sales Executive",
                department: "Sales",
                type: "Full-time",
                location: "Main Store",
                description: "Join our sales team to help customers find the right products for their construction needs."
              },
              {
                title: "Warehouse Manager",
                department: "Operations",
                type: "Full-time", 
                location: "Warehouse",
                description: "Manage inventory, oversee deliveries, and ensure efficient warehouse operations."
              },
              {
                title: "Customer Service Representative",
                department: "Customer Service",
                type: "Full-time",
                location: "Main Store",
                description: "Provide excellent customer service and handle inquiries via phone, email, and in-person."
              },
              {
                title: "Delivery Driver",
                department: "Logistics",
                type: "Full-time",
                location: "Field",
                description: "Ensure timely and safe delivery of products to customer locations."
              }
            ].map((job, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-8">
                    <Button variant="hero">Apply Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-shark/10 to-ocean/10 rounded-xl p-12 text-center border border-shark/20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Don't See Your Role?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="hero" size="lg">
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;