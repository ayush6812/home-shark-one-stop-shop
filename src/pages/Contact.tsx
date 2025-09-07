import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Our Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help with all your construction and home improvement needs. Get in touch with our expert team today.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="h-6 w-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
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
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                    <CardDescription>
                      Multiple ways to reach us
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <a href="tel:01147400000" className="text-primary hover:underline font-medium">01147400000</a>
                        <p className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 8 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <a href="mailto:info@homeshark.in" className="text-primary hover:underline font-medium">info@homeshark.in</a>
                        <p className="text-sm text-muted-foreground">We respond within 4 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Visit Our Store</h3>
                        <a 
                          href="https://www.google.com/maps?q=Tagore+Market,+A-26,+Block+A,+Kirti+Nagar,+New+Delhi,+Delhi,+110015" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Tagore Market, A-26, Block A<br />
                          Kirti Nagar, New Delhi - 110015
                        </a>
                        <p className="text-sm text-muted-foreground">Get directions on Google Maps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Saturday</span>
                        <span className="font-medium">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">10:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Contact Us */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Why Contact Home Shark?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Expert consultation on all products</li>
                      <li>• Competitive pricing and bulk discounts</li>
                      <li>• Professional installation services</li>
                      <li>• Quality assurance and warranty support</li>
                      <li>• Fast delivery across Delhi NCR</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Find Us on the Map</h2>
              <p className="text-muted-foreground">Located in the heart of Kirti Nagar, Delhi's furniture and hardware hub</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0123456789!2d77.1234567!3d28.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTagore%20Market%2C%20Kirti%20Nagar!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Home Shark Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;