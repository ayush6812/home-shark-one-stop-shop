import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, Mail, MapPin, Award, Users, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const About = () => {
  const teamMembers = [
    {
      name: "Sanjay Gupta",
      title: "Managing Director, SAB Group of Companies",
      description: "A seasoned entrepreneur and industry leader, Sanjay Gupta brings over 35 years of experience in building and scaling businesses across sectors. As the Managing Director of the SAB Group of Companies, he has successfully led multiple ventures with a strong focus on quality, innovation, and customer satisfaction.",
      gradient: "from-amber-500 to-yellow-400"
    },
    {
      name: "Kushagra Gupta", 
      title: "Director, Home Shark",
      description: "Kushagra Gupta works closely with his father to bring a modern, tech-savvy approach to the business. As Director of Home Shark, he is responsible for streamlining operations, enhancing customer service, and managing the store's fast-paced invoicing system.",
      gradient: "from-amber-600 to-yellow-500"
    },
    {
      name: "Kashish Gupta",
      title: "Head of Marketing & Strategic Growth", 
      description: "Kashish Gupta brings a fresh, strategic edge to Home Shark's growth story. A postgraduate in Real Estate Management with professional experience at JLL, she adds depth to the brand's vision through expertise in marketing, brand positioning, and customer engagement.",
      gradient: "from-amber-500 to-yellow-400"
    },
    {
      name: "Sanjay Taneja",
      title: "Vice President | Director, Taneja Paints",
      description: "A seasoned expert in the paints and surface coatings industry, Mr. Sanjay Taneja serves as Vice President at Home Shark, overseeing one of the store's most critical product categories with over two decades of leadership experience.",
      gradient: "from-amber-600 to-yellow-500"
    }
  ];

  const highlights = [
    { icon: Award, title: "Premium Quality", desc: "Industry-leading products" },
    { icon: Users, title: "Expert Team", desc: "Professional guidance" },
    { icon: Target, title: "Best Prices", desc: "Competitive rates" },
    { icon: Sparkles, title: "Fast Service", desc: "Quick invoicing" }
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
                About Us
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Home Shark</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                At Home Shark, we're dedicated to simplifying the way you shop for your home. Located in the heart of Kirti Nagar, New Delhi, we serve as a trusted one-stop shop offering a complete range of hardware, electrical fittings, sanitary products, and paints.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                What Sets <span className="text-amber-500">Us Apart</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="bg-black rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg relative z-10">
                  What sets us apart is our knowledgeable team, always ready to assist you with the right products and expert suggestions. Our quick billing process ensures a smooth and efficient shopping experience.
                </p>
                <p className="text-white font-semibold text-lg relative z-10">
                  With a strong focus on variety, reliability, and service, Home Shark is your dependable partner for all things home.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                Our Leadership
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet the <span className="text-amber-500">Team</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our leadership team blends experience, innovation, and strategic insight, united by a shared vision of excellence and customer-first service.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-amber-400/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${member.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-2xl font-bold text-black">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-amber-600 font-medium text-sm">{member.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                A Vision Built on <span className="text-amber-500">Experience & Innovation</span>
              </h2>
              <div className="bg-black rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg relative z-10">
                  Together, Sanjay and Kushagra Gupta represent the perfect blend of legacy and progress. With Sanjay's extensive industry background as Managing Director of the SAB Group and Kushagra's modern retail acumen, Home Shark is built on strong foundations and a forward-looking mindset.
                </p>
                <p className="text-amber-400 font-semibold text-lg relative z-10">
                  Their commitment to quality, service, and customer trust continues to drive Home Shark's mission of becoming the go-to destination for complete home improvement solutions in Delhi NCR.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Get in <span className="text-amber-500">Touch</span>
              </h2>
              <p className="text-gray-400">Ready to start your project? Contact us today.</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={0}>
              <a 
                href="tel:+918766298418" 
                className="block bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 hover:border-amber-500/30 border border-transparent transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7 text-black" />
                </div>
                <h3 className="font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-400 group-hover:text-amber-400 transition-colors">+91 87662 98418</p>
              </a>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={100}>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@homeshark.in" 
                className="block bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 hover:border-amber-500/30 border border-transparent transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-7 w-7 text-black" />
                </div>
                <h3 className="font-bold text-white mb-2">Email</h3>
                <p className="text-gray-400 group-hover:text-amber-400 transition-colors">info@homeshark.in</p>
              </a>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={200}>
              <a 
                href="https://maps.app.goo.gl/Kmb9uuyfZbNCSDih8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 hover:border-amber-500/30 border border-transparent transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-7 w-7 text-black" />
                </div>
                <h3 className="font-bold text-white mb-2">Address</h3>
                <p className="text-gray-400 group-hover:text-amber-400 transition-colors text-sm">Kirti Nagar, New Delhi</p>
              </a>
            </ScrollAnimation>
          </div>

          <div className="text-center mt-12">
            <Link to="/quote">
              <Button size="lg" className="bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
