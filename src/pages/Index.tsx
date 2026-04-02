import { useEffect } from "react";
import Navbar from "@/components/velour/Navbar";
import HeroSection from "@/components/velour/HeroSection";
import StatsBar from "@/components/velour/StatsBar";
import SeenInMarquee from "@/components/velour/SeenInMarquee";
import AboutSection from "@/components/velour/AboutSection";
import ServicesSection from "@/components/velour/ServicesSection";
import GallerySection from "@/components/velour/GallerySection";
import ReviewsSection from "@/components/velour/ReviewsSection";
import PricingSection from "@/components/velour/PricingSection";
import OfferBanner from "@/components/velour/OfferBanner";
import ContactSection from "@/components/velour/ContactSection";
import Footer from "@/components/velour/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".velour-section").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <SeenInMarquee />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <PricingSection />
      <OfferBanner />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
