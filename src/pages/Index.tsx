import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { EnergizzoCard } from "@/components/landing/EnergizzoCard";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 mesh-gradient" />
      <div className="fixed inset-0 aurora-bg pointer-events-none" />
      <div className="grain-overlay" />

      <div className="relative z-10">
        <header>
          <Navbar />
        </header>
        <main>
          <HeroSection />
          <ServicesSection />
          <HowItWorksSection />
          <WhyChooseSection />
          <PricingSection />
          <FAQSection />
          <EnergizzoCard />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
