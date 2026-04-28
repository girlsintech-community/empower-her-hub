import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsStrip from "@/components/StatsStrip";
import FeaturesSection from "@/components/FeaturesSection";
import SpeakersSection from "@/components/SpeakersSection";
import RecordingsSection from "@/components/RecordingsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <SectionDivider />
      <AboutSection />
      <FeaturesSection />
      <SectionDivider />
      <SpeakersSection />
      <SectionDivider />
      <RecordingsSection />
      <SectionDivider />
      <TeamSection />
      <SectionDivider />
      <Footer />
    </div>
  );
};

export default Index;
