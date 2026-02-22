import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudySection from "@/components/CaseStudySection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudySection />
      <ClientsSection />
      <ContactSection />
      <TestimonialsSection />
      <FoundersSection />
      <Footer />
    </div>
  );
};

export default Index;
