import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import StateGrid from "@/components/StateGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <StateGrid />
      <Footer />
    </main>
  );
};

export default Index;
