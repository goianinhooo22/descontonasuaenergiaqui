import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import StateGrid from "@/components/StateGrid";
import FAQSection from "@/components/FAQSection";
import HighVoltageSection from "@/components/HighVoltageSection";
import VideoSection from "@/components/VideoSection";
import IGreenClubSection from "@/components/IGreenClubSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <StateGrid />
      <FAQSection />
      <HighVoltageSection />
      <VideoSection />
      <IGreenClubSection />
      <Footer />
    </main>
  );
};

export default Index;
