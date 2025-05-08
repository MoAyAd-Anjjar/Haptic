
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import PatternDivider from "@/components/PatternDivider";
import WhyHapticSection from "@/components/WhyHapticSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersProjectsSection from "@/components/PartnersProjectsSection";
import PricingSection from "@/components/PricingSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <PatternDivider />
        <WhyHapticSection />
        <TestimonialsSection />
        <PatternDivider />
        <PartnersProjectsSection />
        <PatternDivider />
        <PricingSection />
        <PatternDivider />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
