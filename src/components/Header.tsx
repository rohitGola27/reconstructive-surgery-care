import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Clinical Expertise", href: "/clinical-expertise" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50 shadow-soft">
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">RS</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-foreground leading-tight">Reconstructive Surgery</p>
            <p className="text-xs text-muted-foreground">Specialists</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild>
            <a href="#consultation">Request Consultation</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <ul className="container py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    className="block py-2 text-foreground font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 text-foreground font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Button variant="hero" className="w-full" asChild>
                <a href="#consultation">Request Consultation</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
