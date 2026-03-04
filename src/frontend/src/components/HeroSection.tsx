import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: "46+", label: "Years Experience" },
  { value: "1000+", label: "Clients Worldwide" },
  { value: "35+", label: "Countries Served" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-banner.dim_1600x800.jpg')`,
        }}
      />
      {/* Multi-layer overlay for premium depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40" />

      {/* Decorative geometric accent */}
      <div className="absolute top-1/4 right-8 lg:right-16 w-px h-48 bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 left-8 lg:left-16 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Since 1979 Badge */}
          <div
            className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-6 h-px bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary font-display">
              Since 1979
            </span>
            <div className="w-6 h-px bg-primary" />
          </div>

          {/* Main heading */}
          <h1
            className={`font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="text-foreground">India's Most</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-gold-gradient">Trusted Steel</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-foreground">Solutions Partner</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-base lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            Manufacturer, Stockist & Exporter of Pipes, Fittings, Flanges and
            Structural Steel in Stainless Steel, Carbon Steel, Alloy Steel and
            Nickel Alloys
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              onClick={() => scrollTo("products")}
              className="bg-gold-gradient text-primary-foreground font-semibold text-base px-8 py-6 shadow-gold hover:opacity-90 transition-opacity"
            >
              Explore Products
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-colors text-base px-8 py-6 bg-transparent"
            >
              Get a Quote
            </Button>
          </div>

          {/* Stats — frosted credibility banner */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            <div className="stat-glass-panel inline-flex flex-col sm:flex-row rounded-2xl overflow-hidden">
              {stats.map((stat, idx) => (
                <div
                  key={stat.value}
                  className={`flex flex-col items-center sm:items-start px-7 py-5 relative ${
                    idx < stats.length - 1
                      ? "border-b sm:border-b-0 sm:border-r border-primary/20"
                      : ""
                  }`}
                >
                  {/* Micro gold left-bar on first only */}
                  {idx === 0 && (
                    <div className="hidden sm:block absolute left-0 top-4 bottom-4 w-0.5 bg-primary rounded-full" />
                  )}
                  <span className="stat-counter text-3xl lg:text-4xl text-gold-gradient leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground tracking-[0.12em] uppercase mt-1.5 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-primary transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
