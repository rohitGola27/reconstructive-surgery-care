import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import doctorNavin from "@/assets/navinSingh.jpg";
import doctorMarwan from "@/assets/DrMarwan.jpg";

const doctors = [
  {
    name: "Dr. Navin Singh",
    title: "Plastic & Reconstructive Surgeon",
    image: doctorNavin,
    credentials: "MD, FACS • Board-Certified",
    specialties: ["Microsurgery", "Breast Reconstruction", "Trauma Surgery"],
    description:
      "With over two decades of experience, Dr. Singh specializes in complex reconstructive procedures, bringing expertise and compassion to every patient interaction.",
  },
  {
    name: "Dr. Marwan Khalifeh",
    title: "Plastic & Reconstructive Surgeon",
    image: doctorMarwan,
    credentials: "MD, FACS • Board-Certified",
    specialties: ["Oncologic Reconstruction", "Hand Surgery", "Skin Cancer"],
    description:
      "Dr. Khalifeh combines surgical precision with artistic vision, focusing on natural results and patient well-being throughout the treatment journey.",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Our Doctors
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Your Surgical Team
          </h2>
          <p className="text-muted-foreground text-lg">
            Our board-certified surgeons combine decades of experience with a patient-centered approach to deliver exceptional outcomes.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <article
              key={doctor.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-large transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-sm text-primary font-medium mb-2">
                  {doctor.credentials}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-muted-foreground mb-4">{doctor.title}</p>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {doctor.description}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {doctor.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-medical-teal-light text-primary text-xs font-medium rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#consultation" className="group">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
