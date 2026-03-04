import { Heart, Mail, MapPin, Phone } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Products", id: "products" },
  { label: "Grades", id: "grades" },
  { label: "Industries", id: "industries" },
  { label: "Contact", id: "contact" },
];

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-ocid="footer.section"
      className="relative bg-navy border-t border-border overflow-hidden"
    >
      {/* Subtle top accent */}
      <div className="h-px gold-divider" />

      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-[oklch(0.07_0.012_255)] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="flex flex-col items-start mb-5"
              aria-label="Go to top"
            >
              <span className="font-display font-black text-2xl leading-none tracking-tight text-gold-gradient">
                ROLEX
              </span>
              <span className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase font-medium mt-0.5">
                Industrial Corporation
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              India's most trusted manufacturer, stockist & exporter of
              industrial steel products. Established 1979 in Mumbai.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:rolexindcorp@gmail.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-primary/70" />
                rolexindcorp@gmail.com
              </a>
              <a
                href="tel:+919867546501"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-primary/70" />
                +91 9867546501
              </a>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary/70 mt-0.5 flex-shrink-0" />
                <span>8th Khetwadi Lane, Mumbai - 400004</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-black text-sm tracking-widest uppercase text-primary mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-black text-sm tracking-widest uppercase text-primary mb-5">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((product) => (
                <li key={product}>
                  <button
                    type="button"
                    onClick={() => scrollTo("products")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3" />
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h4 className="font-display font-black text-sm tracking-widest uppercase text-primary mb-5">
              Group Companies
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                "Rolex Industrial Corporation",
                "Rolex Ferromat Private Limited",
                "China Smart Trading Limited",
              ].map((company) => (
                <li key={company} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {company}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border">
              <h5 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                Certifications
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {["GST", "ISO", "Udyam", "ASTM", "DIN"].map((cert) => (
                  <span
                    key={cert}
                    className="text-[10px] px-2 py-0.5 rounded border border-primary/20 text-primary/80 bg-primary/5 font-bold tracking-wider"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px gold-divider mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {year} Rolex Group of Companies. All Rights Reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            Built with <Heart className="h-3 w-3 text-primary fill-current" />{" "}
            using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
