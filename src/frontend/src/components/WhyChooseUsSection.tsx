import { Layers3, ShieldCheck, Warehouse, Wrench } from "lucide-react";

const features = [
  {
    icon: Warehouse,
    title: "Large Inventory & Ready Stock",
    desc: "Extensive stock of pipes, plates, bars, and tubes across all grades for prompt deliveries and seamless project execution without delays.",
    highlight: "Immediate dispatch available",
  },
  {
    icon: ShieldCheck,
    title: "High-Quality Products",
    desc: "We adhere to the highest quality standards through rigorous testing and inspections, ensuring every product meets ASTM, DIN, and IBR specifications.",
    highlight: "ASTM · DIN · IBR Certified",
  },
  {
    icon: Layers3,
    title: "Diverse Material Range",
    desc: "Offering stainless steel, carbon steel, alloy steel, duplex steel, and nickel alloys to meet various industrial requirements across sectors.",
    highlight: "10+ material categories",
  },
  {
    icon: Wrench,
    title: "Customization & Precision",
    desc: "Tailored solutions to meet specific customer requirements with precision engineering and strict quality control throughout the production process.",
    highlight: "Custom specs accepted",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      data-ocid="why-us.section"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />

      {/* Centered background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16 fade-in-up text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Our Strengths
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display font-black text-3xl lg:text-5xl text-foreground">
            Why Choose <span className="text-gold-gradient">Rolex?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="fade-in-up group relative bg-card border border-border rounded-2xl p-7 lg:p-8 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-6 font-display font-black text-7xl text-primary/5 select-none leading-none group-hover:text-primary/10 transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-display font-black text-lg lg:text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature.desc}
                </p>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-primary tracking-wide">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authorized dealer callout */}
        <div className="mt-10 fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-base text-foreground">
                Authorized Dealer — Jindal Stainless Steel Pipes & Tubes
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                As an authorized dealer of Jindal Stainless, we guarantee
                authenticity, quality, and competitive pricing on all JSL
                products.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-divider" />
    </section>
  );
}
