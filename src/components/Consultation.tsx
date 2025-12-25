import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarDays, ArrowRight, Shield, Clock, Info } from "lucide-react";

export function Consultation() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formId = import.meta.env.VITE_GOOGLE_FORM_ID;;
  const embeddedFormUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`;

  return (
    <section id="consultation" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CalendarDays className="w-4 h-4" />
            Schedule Your Visit
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Take the Next Step?
          </h2>

          <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your options with our board-certified surgeons. We'll create a personalized plan tailored to your goals.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">No Obligation</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-large group"
            onClick={() => setIsFormOpen(true)}
          >
            Request Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Google Form Dialog */}
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] w-full p-0 overflow-y-auto">
              <DialogHeader className="px-6 pt-6 pb-4">
                <DialogTitle>Request Consultation</DialogTitle>
              </DialogHeader>
              <div className="px-6 pb-6 text-black">
                <iframe
                  src={embeddedFormUrl}
                  width="100%"  
                  height="600"
                  className="w-full border-0"
                  title="Consultation Request Form"
                >
                  Loading…
                </iframe>
              </div>
            </DialogContent>
          </Dialog>
          {/* Disclaimer */}
          <div className="flex items-center justify-center gap-2 mt-8 text-primary-foreground/60 text-sm">
            <Info className="w-4 h-4" />
            <span>
              This is a consultation request. No patient information is stored on this website.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
