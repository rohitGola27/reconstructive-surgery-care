import { TrendingUp, Target, Clock, CheckCircle, Info } from "lucide-react";

const outcomes = [
  {
    icon: TrendingUp,
    stat: "95%+",
    label: "Successful Outcomes",
    description: "Consistently high success rates across all procedures",
  },
  {
    icon: Target,
    stat: "Precise",
    label: "Surgical Technique",
    description: "Advanced microsurgical and reconstructive methods",
  },
  {
    icon: Clock,
    stat: "Optimized",
    label: "Recovery Time",
    description: "Focused protocols for faster, smoother healing",
  },
  {
    icon: CheckCircle,
    stat: "Complete",
    label: "Follow-up Care",
    description: "Comprehensive post-operative support and monitoring",
  },
];

export function Outcomes() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Treatment Philosophy
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Patient Outcomes
          </h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to excellence is reflected in the outcomes we achieve for our patients through meticulous technique and personalized care.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.label}
              className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-large transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-medical-teal-light flex items-center justify-center mx-auto mb-4">
                <outcome.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary mb-1">{outcome.stat}</p>
              <p className="font-semibold text-foreground mb-2">{outcome.label}</p>
              <p className="text-sm text-muted-foreground">{outcome.description}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 max-w-2xl mx-auto mt-12 p-4 bg-accent/50 rounded-xl">
          <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Individual results may vary based on your specific condition, health status, and treatment plan. During your consultation, we'll discuss realistic expectations for your unique situation.
          </p>
        </div>
      </div>
    </section>
  );
}
