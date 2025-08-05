import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import USPSection from "@/components/USPSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ProductCategories />
      <USPSection />
      <Footer />
    </div>
  );
};

export default Index;
