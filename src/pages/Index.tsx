import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Doctors } from "@/components/Doctors";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { PatientCare } from "@/components/PatientCare";
import { Outcomes } from "@/components/Outcomes";
import { ClinicalExpertise } from "@/components/ClinicalExpertise";
import { Consultation } from "@/components/Consultation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a scrollTo state from navigation
    const state = location.state as { scrollTo?: string; scrollToTop?: boolean } | null;
    const hash = location.hash.substring(1); // Remove the #
    
    if (state?.scrollToTop) {
      // Scroll to top when navigating from logo click
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 150);
      });
      return;
    }
    
    const scrollToId = state?.scrollTo || hash;
    
    if (scrollToId) {
      // Use requestAnimationFrame for more reliable timing
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.getElementById(scrollToId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      });
    }
  }, [location.state, location.hash]);

  return (
    <>
      <Helmet>
        <title>Reconstructive Surgery Specialists | Expert Plastic Surgeons</title>
        <meta
          name="description"
          content="Board-certified plastic and reconstructive surgeons specializing in breast reconstruction, skin cancer treatment, and trauma surgery. Personalized care with exceptional outcomes."
        />
      </Helmet>

      <Header />
      
      <main>
        <Hero />
        <Doctors />
        <Services />
        <Gallery />
        <PatientCare />
        <Outcomes />
        <ClinicalExpertise />
        <Consultation />
      </main>

      <Footer />
    </>
  );
};

export default Index;
