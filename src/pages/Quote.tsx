import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Quote = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your <span className="text-primary">Quick Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your requirements and get a personalized quote for all your construction and home improvement needs.
            </p>
          </div>
        </section>

        {/* Quote Form & Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Quote Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Your phone number" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Product Category *</Label>
                    <select id="category" className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select category</option>
                      <option value="hardware">Hardware & Tools</option>
                      <option value="electricals">Electrical Fittings</option>
                      <option value="sanitary">Sanitary & Plumbing</option>
                      <option value="paints">Paints & Coatings</option>
                      <option value="tiles">Tiles & Flooring</option>
                      <option value="multiple">Multiple Categories</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="requirements">Project Requirements *</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Describe your project requirements, quantities, specifications, etc."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Input id="timeline" placeholder="When do you need this?" className="mt-1" />
                  </div>
                  
                  <Button size="lg" className="w-full">
                    Submit Quote Request
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription>
                      Get in touch with us directly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+91 87662 98418</p>
                        <p className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 8 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">info@homeshark.in</p>
                        <p className="text-sm text-muted-foreground">We respond within 4 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Visit Our Store</h3>
                        <a 
                          href="https://maps.app.goo.gl/Kmb9uuyfZbNCSDih8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Tagore Market, A-26, Block A, Indira Colony<br />
                          Kirti Nagar, New Delhi, Delhi - 110015
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Store Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 8:00 PM<br />
                          Sunday: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Why Choose Home Shark?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 40,000+ products in stock</li>
                      <li>• Competitive wholesale prices</li>
                      <li>• Expert product consultation</li>
                      <li>• Fast billing and delivery</li>
                      <li>• Trusted by 1000+ customers</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quote;