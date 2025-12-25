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

const services = [
  {
    icon: Heart,
    title: "Breast Cancer Reconstruction",
    description:
      "Comprehensive reconstruction options following mastectomy, including implant-based and autologous tissue reconstruction.",
    category: "Reconstruction",
  },
  {
    icon: Activity,
    title: "Congenital Breast Conditions",
    description:
      "Expert treatment for Poland syndrome, tuberous breast deformity, and other developmental conditions.",
    category: "Reconstruction",
  },
  {
    icon: Stethoscope,
    title: "Breast Reduction",
    description:
      "Relief from physical discomfort and improved quality of life through proven reduction techniques.",
    category: "Treatment",
  },
  {
    icon: Shield,
    title: "Skin Cancer Reconstruction",
    description:
      "Mohs reconstruction and comprehensive skin cancer treatment with optimal aesthetic outcomes.",
    category: "Oncology",
  },
  {
    icon: Scissors,
    title: "Trauma & Reconstructive Surgery",
    description:
      "Specialized care for complex wounds, scar revision, and post-traumatic reconstruction.",
    category: "Trauma",
  },
  {
    icon: Hand,
    title: "Hand Injuries",
    description:
      "Expert treatment for tendon, nerve, and bone injuries with focus on functional restoration.",
    category: "Hand Surgery",
  },
];

export function Services() {
  return (
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
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
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
  );
}
