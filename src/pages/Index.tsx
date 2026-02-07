import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
