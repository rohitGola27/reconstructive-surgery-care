import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Breast Reconstruction", href: "#services" },
    { label: "Skin Cancer Treatment", href: "#services" },
    { label: "Trauma Surgery", href: "#services" },
    { label: "Hand Surgery", href: "#services" },
  ],
  company: [
    { label: "Our Doctors", href: "#doctors" },
    { label: "Gallery", href: "#gallery" },
    { label: "Clinical Expertise", href: "/clinical-expertise" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-foreground text-primary-foreground/80 pt-16 pb-8"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-primary-foreground/10">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  RS
                </span>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground leading-tight">
                  Restore Plastic Surgery
                </p>
                <p className="text-xs text-primary-foreground/60">
                  Specialists
                </p>
              </div>
            </Link>

            <p className="text-primary-foreground/60 text-sm mb-6 max-w-sm">
              Board-certified plastic and reconstructive surgeons dedicated to
              exceptional patient care and outcomes.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">123 Medical Center Drive</p>
                  <p className="text-sm text-primary-foreground/60">
                    Suite 400, Washington, DC 20001
                  </p>
                </div>
              </div>
              <a
                href="tel:+12025551234"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">(202) 555-1234</span>
              </a>
              <a
                href="mailto:info@reconstructivesurgery.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">info@reconstructivesurgery.com</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Reconstructive Surgery Specialists. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=123+Medical+Center+Drive,+Suite+400,+Washington,+DC+20001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/50 hover:text-primary transition-colors"
            >
              View on Map
            </a>
            <span className="text-primary-foreground/30">|</span>
            <span className="text-sm text-primary-foreground/50">
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
