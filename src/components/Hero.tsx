import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Award } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abstract medical background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/60" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-medical-teal-light text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-up">
              <Shield className="w-4 h-4" />
              Board-Certified Specialists
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up delay-100">
              Expert{" "}
              <span className="text-primary">Reconstructive</span>
              <br />
              Surgery Care
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg animate-fade-up delay-200">
              Compassionate, personalized care from board-certified surgeons specializing in plastic and reconstructive procedures. Restoring confidence, rebuilding lives.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <a href="#consultation" className="group">
                  Request Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-up delay-400">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-medical-teal-light flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Patient-First Care</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-medical-teal-light flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">20+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-scale-in delay-200">
                <p className="text-4xl font-bold text-primary">2,500+</p>
                <p className="text-muted-foreground mt-1">Successful Surgeries</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-scale-in delay-400">
                <p className="text-4xl font-bold text-primary">98%</p>
                <p className="text-muted-foreground mt-1">Patient Satisfaction</p>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-scale-in delay-300">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-muted-foreground mt-1">Research Publications</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-card animate-scale-in delay-500">
                <p className="text-4xl font-bold text-primary">2</p>
                <p className="text-muted-foreground mt-1">Board-Certified Surgeons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
