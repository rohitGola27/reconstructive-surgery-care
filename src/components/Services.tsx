import { Button } from "@/components/ui/button";
import {
  Heart,
  Activity,
  Stethoscope,
  Hand,
  Shield,
  Scissors,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { PDFViewer } from "./PDFViewer";

const services = [
  {
    icon: Heart,
    title: "Breast Cancer Reconstruction",
    description:
      "Comprehensive reconstruction options following mastectomy, including implant-based and autologous tissue reconstruction.",
    category: "Reconstruction",
    pdfPath: "/documents/Nipple Sparing Mastectomy.pdf",
  },
  {
    icon: Activity,
    title: "Congenital Breast Conditions",
    description:
      "Expert treatment for Poland syndrome, tuberous breast deformity, and other developmental conditions.",
    category: "Reconstruction",
    pdfPath: "/documents/Augmentation Mastopexy Paper.pdf",
  },
  {
    icon: Stethoscope,
    title: "Breast Reduction",
    description:
      "Relief from physical discomfort and improved quality of life through proven reduction techniques.",
    category: "Treatment",
    pdfPath: "/documents/Augmentation Mastopexy Paper.pdf",
  },
  {
    icon: Shield,
    title: "Skin Cancer Reconstruction",
    description:
      "Mohs reconstruction and comprehensive skin cancer treatment with optimal aesthetic outcomes.",
    category: "Oncology",
    pdfPath: "/documents/The_Buccal_Fat_Pad_Flap_for_Periorbital.24.pdf",
  },
  {
    icon: Scissors,
    title: "Trauma & Reconstructive Surgery",
    description:
      "Specialized care for complex wounds, scar revision, and post-traumatic reconstruction.",
    category: "Trauma",
    pdfPath: "/documents/Post Traumatic Maxillary Recon.pdf",
  },
  {
    icon: Hand,
    title: "Hand Injuries",
    description:
      "Expert treatment for tendon, nerve, and bone injuries with focus on functional restoration.",
    category: "Hand Surgery",
    pdfPath: "/documents/Dog Bite-Article Singh.pdf",
  },
];

export function Services() {
  const [selectedPDF, setSelectedPDF] = useState<{
    path: string;
    title: string;
  } | null>(null);

  return (
    <>
      <section id="services" className="py-20 lg:py-28 bg-background">
        <div className="container">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Specialized Surgical Services
            </h2>
            <p className="text-muted-foreground text-lg">
              From breast reconstruction to hand surgery, our team provides comprehensive care tailored to your unique needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-large border border-transparent hover:border-primary/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-medical-teal-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Category Tag */}
                <span className="inline-block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {service.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button
                  onClick={() =>
                    setSelectedPDF({
                      path: service.pdfPath,
                      title: service.title,
                    })
                  }
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all cursor-pointer"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#consultation" className="group">
                Discuss Your Options
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedPDF && (
        <PDFViewer
          open={!!selectedPDF}
          onOpenChange={(open) => !open && setSelectedPDF(null)}
          pdfPath={selectedPDF.path}
          title={selectedPDF.title}
        />
      )}
    </>
  );
}
