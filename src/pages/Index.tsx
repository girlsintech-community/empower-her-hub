import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AgendaSection />
      <SpeakersSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
