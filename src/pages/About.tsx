import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Sanjay Gupta",
      title: "Managing Director, SAB Group of Companies",
      description: "A seasoned entrepreneur and industry leader, Sanjay Gupta brings over 35 years of experience in building and scaling businesses across sectors. As the Managing Director of the SAB Group of Companies, he has successfully led multiple ventures with a strong focus on quality, innovation, and customer satisfaction. With his deep understanding of market dynamics and consumer needs, Sanjay founded Home Shark as a natural extension of his vision—to provide a complete home solution under one roof."
    },
    {
      name: "Kushagra Gupta", 
      title: "Director, Home Shark",
      description: "Kushagra Gupta, the next-generation entrepreneur in the family, works closely with his father to bring a modern, tech-savvy approach to the business. As Director of Home Shark, Kushagra is responsible for streamlining operations, enhancing customer service, and managing the store's fast-paced invoicing system. With a background in business strategy and operations management, Kushagra focuses on improving internal systems, optimizing product offerings, and ensuring that the store stays ahead of market trends."
    },
    {
      name: "Kashish Gupta",
      title: "Head of Marketing & Strategic Growth, Home Shark", 
      description: "Kashish Gupta brings a fresh, strategic edge to Home Shark's growth story. A postgraduate in Real Estate Management with professional experience at JLL (Jones Lang LaSalle), she adds depth to the brand's vision through her expertise in marketing, brand positioning, and customer engagement. With a keen eye for detail and a modern understanding of consumer behavior, Kashish leads the brand's marketing efforts, digital presence, and visual identity."
    },
    {
      name: "Sanjay Taneja",
      title: "Vice President, Home Shark | Director, Taneja Paints",
      description: "A seasoned expert in the paints and surface coatings industry, Mr. Sanjay Taneja serves as Vice President at Home Shark, overseeing one of the store's most critical product categories. With over two decades of leadership at Taneja Paints, he brings deep technical knowledge and industry insight to the Home Shark team. In his role, Mr. Taneja is responsible for enhancing the paints, coatings, and surface finish segments."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-shark to-ocean bg-clip-text text-transparent">
              About Home Shark
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Home Shark, we're dedicated to simplifying the way you shop for your home. Located in the heart of Kirti Nagar, New Delhi, we serve as a trusted one-stop shop offering a complete range of hardware, electrical fittings, sanitary products, and paints—everything you need to build, upgrade, or refresh your space.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Short */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-shark">What Sets Us Apart</h2>
            <div className="bg-gradient-to-br from-shark/10 to-ocean/10 rounded-2xl p-8 mb-12">
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                What sets us apart is our knowledgeable team, always ready to assist you with the right products and expert suggestions. Our quick billing process ensures a smooth and efficient shopping experience, whether you're a homeowner, interior designer, or contractor.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium text-shark">
                With a strong focus on variety, reliability, and service, Home Shark is your dependable partner for all things home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owners */}
      <section className="py-16 bg-gradient-to-br from-shark/5 to-ocean/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-shark">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team blends experience, innovation, and strategic insight, united by a shared vision of excellence and customer-first service.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-shark/30 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <h3 className="text-2xl font-bold mb-2 text-shark">{member.name}</h3>
                <h4 className="text-lg font-semibold mb-4 text-ocean">{member.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-shark">A Vision Built on Experience and Innovation</h2>
            <div className="bg-gradient-to-br from-shark/10 to-ocean/10 rounded-2xl p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Together, Sanjay and Kushagra Gupta represent the perfect blend of legacy and progress. With Sanjay's extensive industry background as Managing Director of the SAB Group and Kushagra's modern retail acumen, Home Shark is built on strong foundations and a forward-looking mindset.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium text-shark">
                Their commitment to quality, service, and customer trust continues to drive Home Shark's mission of becoming the go-to destination for complete home improvement solutions in Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-br from-shark/5 to-ocean/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shark">Get in Touch</h2>
            <p className="text-muted-foreground">Ready to start your project? Contact us today.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a 
              href="tel:01147400000" 
              className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-shark/30 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <h3 className="font-semibold mb-2 text-shark group-hover:text-ocean transition-colors">Phone</h3>
              <p className="text-muted-foreground">01147400000</p>
            </a>
            <a 
              href="mailto:info@homeshark.in" 
              className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-shark/30 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <h3 className="font-semibold mb-2 text-shark group-hover:text-ocean transition-colors">Email</h3>
              <p className="text-muted-foreground">info@homeshark.in</p>
            </a>
            <div className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50">
              <h3 className="font-semibold mb-2 text-shark">Address</h3>
              <p className="text-muted-foreground text-sm">Tagore Market, A-26, Block A, Kirti Nagar, New Delhi, Delhi, 110015</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;