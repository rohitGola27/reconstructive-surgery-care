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
