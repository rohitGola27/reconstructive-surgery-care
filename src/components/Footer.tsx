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
                  <p className="text-sm">
                    7601 Lewinsville Road Suite 300 Mclean, VA 22102
                  </p>
                </div>
              </div>
              <a
                href="tel:+703-269-0015"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">703-269-0015</span>
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
            © {new Date().getFullYear()} Restore Plastic Surgery. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.google.com/maps/place/7601+Lewinsville+Rd+STE+300,+McLean,+VA+22102,+USA/@38.9346215,-77.2097581,17z/data=!3m1!4b1!4m6!3m5!1s0x89b64ababe944535:0x3fdb95abd338db87!8m2!3d38.9346215!4d-77.2071778!16s%2Fg%2F11f4lknmh9?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
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
