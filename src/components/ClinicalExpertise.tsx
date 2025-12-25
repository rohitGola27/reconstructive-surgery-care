import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCategories = [
  "Microsurgery",
  "Breast Reconstruction",
  "Oncology",
  "Trauma",
];

export function ClinicalExpertise() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Clinical Expertise
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Clinical Expertise & Case Studies
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Explore selected clinical work, techniques, and educational resources reflecting our surgeons' experience and contributions to the field.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredCategories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1.5 bg-medical-teal-light text-primary text-sm font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/clinical-expertise" className="group">
                  <BookOpen className="w-5 h-5" />
                  Explore Full Directory
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Right Content - Preview Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Advances in Microsurgical Breast Reconstruction",
                  category: "Microsurgery",
                },
                {
                  title: "Outcomes in Post-Mastectomy Reconstruction",
                  category: "Breast Reconstruction",
                },
                {
                  title: "Innovations in Skin Cancer Treatment",
                  category: "Oncology",
                },
              ].map((doc, index) => (
                <div
                  key={doc.title}
                  className="bg-card rounded-xl p-5 shadow-card hover:shadow-medium transition-all duration-300 flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {doc.category}
                    </span>
                    <h4 className="font-semibold text-foreground mt-1 text-sm">
                      {doc.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
