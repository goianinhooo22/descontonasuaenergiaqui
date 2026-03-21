import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import StateGrid from "@/components/StateGrid";
import FAQSection from "@/components/FAQSection";
import HighVoltageSection from "@/components/HighVoltageSection";
import VideoSection from "@/components/VideoSection";
import IGreenClubSection from "@/components/IGreenClubSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
