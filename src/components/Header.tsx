import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashNavigation = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    const hash = href.substring(1); // Remove the #

    // If we're on a different route, navigate to home with hash
    if (location.pathname === "/") {
      // Already on home page, just scroll to section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to home first, then scroll to section
      navigate("/", { state: { scrollTo: hash } });
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home and scroll to top
      navigate("/", { state: { scrollToTop: true } });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }

    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50 shadow-soft">
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">
              RS
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-foreground leading-tight">
              Restore Plastic Surgery
            </p>
            <p className="text-xs text-muted-foreground">Specialists</p>
          </div>
        </a>

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
                  onClick={(e) => handleHashNavigation(item.href, e)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="hero"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              handleHashNavigation("#consultation");
            }}
          >
            Request Consultation
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
                    onClick={(e) => handleHashNavigation(item.href, e)}
                    className="block py-2 text-foreground font-medium hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Button
                variant="hero"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleHashNavigation("#consultation");
                }}
              >
                Request Consultation
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
