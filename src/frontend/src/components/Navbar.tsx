import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  activeSection: string;
  scrolled: boolean;
}

const productLinks = [
  "Pipes & Tubes",
  "Sheets / Plates / Coils",
  "Pipe Fittings",
  "Flanges",
  "Ferrule Fittings",
  "Round / Flat / Square Bar",
  "Valves",
  "Fasteners",
  "Gasket",
];

const gradeLinks = [
  "Stainless Steel",
  "Carbon Steel",
  "Alloy Steel",
  "Special Grades",
];

const mobileNavLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Grades", id: "grades" },
  { label: "Industries", id: "industries" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ activeSection, scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [gradesOpen, setGradesOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
    setProductsOpen(false);
    setGradesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_4px_30px_oklch(0_0_0/0.4)] border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex flex-col items-start group"
            aria-label="Rolex Industrial Corporation"
          >
            <span className="font-display font-black text-xl lg:text-2xl leading-none tracking-tight text-gold-gradient">
              ROLEX
            </span>
            <span className="text-[10px] lg:text-xs text-muted-foreground tracking-[0.2em] uppercase font-medium leading-none mt-0.5 group-hover:text-foreground/80 transition-colors">
              Industrial Corporation
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              type="button"
              data-ocid="nav.link.1"
              onClick={() => scrollTo("home")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                activeSection === "home"
                  ? "nav-pill-active"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              Home
            </button>
            <button
              type="button"
              data-ocid="nav.link.2"
              onClick={() => scrollTo("about")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                activeSection === "about"
                  ? "nav-pill-active"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              About
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                data-ocid="nav.link.3"
                onClick={() => scrollTo("products")}
                className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === "products"
                    ? "nav-pill-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                Products <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-lg shadow-[0_20px_40px_oklch(0_0_0/0.5)] py-1.5 z-50">
                  {productLinks.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => scrollTo("products")}
                      className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Grades Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGradesOpen(true)}
              onMouseLeave={() => setGradesOpen(false)}
            >
              <button
                type="button"
                data-ocid="nav.link.4"
                onClick={() => scrollTo("grades")}
                className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === "grades"
                    ? "nav-pill-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                Grades <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {gradesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-popover border border-border rounded-lg shadow-[0_20px_40px_oklch(0_0_0/0.5)] py-1.5 z-50">
                  {gradeLinks.map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => scrollTo("grades")}
                      className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {g}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              data-ocid="nav.link.5"
              onClick={() => scrollTo("industries")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                activeSection === "industries"
                  ? "nav-pill-active"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              Industries
            </button>
            <button
              type="button"
              data-ocid="nav.link.6"
              onClick={() => scrollTo("contact")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                activeSection === "contact"
                  ? "nav-pill-active"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              data-ocid="nav.get_quote_button"
              onClick={() => scrollTo("contact")}
              className="hidden lg:flex bg-gold-gradient text-primary-foreground font-semibold hover:opacity-95 hover:scale-[1.04] hover:shadow-gold transition-all duration-200 shadow-gold text-sm px-5"
            >
              Get Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-border">
          <nav className="container px-4 py-4 flex flex-col gap-1">
            {mobileNavLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              data-ocid="nav.get_quote_button"
              onClick={() => scrollTo("contact")}
              className="mt-2 w-full bg-gold-gradient text-primary-foreground font-semibold"
            >
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
