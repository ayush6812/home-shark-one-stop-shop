import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
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
                  Contact Us
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Get in <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We're here to help with all your construction and home improvement needs. Get in touch with our expert team today.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <ScrollAnimation animation="fade-up">
                <Card className="shadow-2xl shadow-amber-500/10 border-2 border-gray-100 hover:border-amber-200 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2 text-gray-900">
                      <Send className="h-6 w-6 text-amber-500" />
                      Send us a Message
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                        <Input id="name" placeholder="Your full name" className="mt-1 border-gray-300 focus:border-amber-400 focus:ring-amber-400" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" className="mt-1 border-gray-300 focus:border-amber-400 focus:ring-amber-400" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1 border-gray-300 focus:border-amber-400 focus:ring-amber-400" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" className="mt-1 border-gray-300 focus:border-amber-400 focus:ring-amber-400" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-gray-700">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..."
                        className="mt-1 min-h-[120px] border-gray-300 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>
                    
                    <Button size="lg" className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold hover:opacity-90 transition-all hover:scale-[1.02]">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <ScrollAnimation animation="fade-up" delay={100}>
                  <Card className="shadow-xl border-2 border-gray-100 hover:border-amber-200 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
                      <CardDescription className="text-gray-500">
                        Multiple ways to reach us
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Call Us</h3>
                          <a href="tel:+918766298418" className="text-amber-600 hover:underline font-medium">+91 87662 98418</a>
                          <p className="text-sm text-gray-500">Mon-Sat: 9 AM - 8 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Email Us</h3>
                          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@homeshark.in" className="text-amber-600 hover:underline font-medium">info@homeshark.in</a>
                          <p className="text-sm text-gray-500">We respond within 4 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Visit Our Store</h3>
                          <a 
                            href="https://maps.app.goo.gl/Kmb9uuyfZbNCSDih8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-amber-600 hover:underline font-medium"
                          >
                            Tagore Market, A-26, Block A, Indira Colony<br />
                            Kirti Nagar, New Delhi, Delhi - 110015
                          </a>
                          <p className="text-sm text-gray-500">Get directions on Google Maps</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                {/* Business Hours */}
                <ScrollAnimation animation="fade-up" delay={200}>
                  <Card className="shadow-lg border-2 border-gray-100 hover:border-amber-200 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-gray-900">
                        <Clock className="h-5 w-5 text-amber-500" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600 font-medium">Monday - Saturday</span>
                          <span className="font-bold text-gray-900">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600 font-medium">Sunday</span>
                          <span className="font-bold text-gray-900">10:00 AM - 6:00 PM</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                {/* Why Contact Us */}
                <ScrollAnimation animation="fade-up" delay={300}>
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-amber-500/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4 text-white">Why Contact Home Shark?</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-black text-xs">✓</span>
                          </div>
                          <span>Expert consultation on all products</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-black text-xs">✓</span>
                          </div>
                          <span>Competitive pricing and bulk discounts</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-black text-xs">✓</span>
                          </div>
                          <span>Professional installation services</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-black text-xs">✓</span>
                          </div>
                          <span>Quality assurance and warranty support</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-black text-xs">✓</span>
                          </div>
                          <span>Fast delivery across Delhi NCR</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Find Us on the <span className="text-amber-500">Map</span>
                </h2>
                <p className="text-gray-600">Located in the heart of Kirti Nagar, Delhi's furniture and hardware hub</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100">
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
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
