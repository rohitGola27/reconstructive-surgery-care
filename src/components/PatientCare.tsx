import { Heart, Shield, Award, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Personalized Care",
    description:
      "Every treatment plan is tailored to your unique needs, lifestyle, and goals. We listen first, then create a path forward together.",
  },
  {
    icon: Shield,
    title: "Safety & Ethics",
    description:
      "Your safety is our absolute priority. We follow the highest standards of medical ethics and never compromise on quality.",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Decades of combined experience and continuous training ensure you receive the most advanced, evidence-based care available.",
  },
  {
    icon: Users,
    title: "Supportive Journey",
    description:
      "From consultation through recovery, our dedicated team provides comprehensive support every step of the way.",
  },
];

export function PatientCare() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Patient-First Philosophy
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe exceptional surgical outcomes begin with understanding you as a person, not just a patient. Our approach combines clinical excellence with genuine compassion.
            </p>

            <div className="space-y-6">
              {values.slice(0, 2).map((value, index) => (
                <div
                  key={value.title}
                  className="flex gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-medical-teal-light flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {values.slice(2).map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-card animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-medical-teal-light flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-primary rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-primary-foreground">98%</p>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  Patient Satisfaction
                </p>
              </div>
              <div className="bg-accent rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-accent-foreground">20+</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
