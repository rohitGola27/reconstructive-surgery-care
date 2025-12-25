import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";

const galleryItems = [
  { id: 1, category: "Breast Reconstruction" },
  { id: 2, category: "Skin Cancer" },
  { id: 3, category: "Trauma Repair" },
  { id: 4, category: "Breast Reconstruction" },
  { id: 5, category: "Hand Surgery" },
  { id: 6, category: "Scar Revision" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Results
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Before & After Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            View real patient outcomes to understand what's possible with our expert surgical care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Placeholder for before/after images */}
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal-light to-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">{item.id}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/70 px-4">
                    {item.category}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-medium">View Details</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 max-w-2xl mx-auto mt-10 p-4 bg-accent/50 rounded-xl">
          <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Results shown are from actual patients and represent individual outcomes. Your results may vary based on your specific condition and treatment plan. All images are shared with patient consent.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#consultation" className="group">
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
