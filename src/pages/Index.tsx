import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SectionDivider variant="wave" />
      <AboutSection />
      <SectionDivider variant="curve" className="bg-gradient-to-br from-background/50 to-background" />
      <FeaturesSection />
      <SectionDivider variant="wave" />
      <AgendaSection />
      <SectionDivider variant="curve" className="bg-gradient-to-br from-background/50 to-background" />
      <SpeakersSection />
      <SectionDivider variant="wave" />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
