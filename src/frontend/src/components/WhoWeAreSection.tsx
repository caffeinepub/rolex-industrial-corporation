import { Factory, Globe2, Package2 } from "lucide-react";

const roles = [
  {
    icon: Package2,
    role: "Stockist",
    title: "Leading Stockist",
    desc: "We are a leading stockist for over 46+ years with presence in more than 35 countries, maintaining ready stock across all grades and dimensions.",
    stats: [
      { value: "46+", label: "Years" },
      { value: "35+", label: "Countries" },
    ],
  },
  {
    icon: Globe2,
    role: "Exporter",
    title: "Reputed Exporter",
    desc: "Rolex Group of Companies is one of the reputed export houses from India, shipping industrial steel products to clients across Asia, Europe, Middle East, and Americas.",
    stats: [
      { value: "1000+", label: "Clients" },
      { value: "Global", label: "Reach" },
    ],
  },
  {
    icon: Factory,
    role: "Manufacturer",
    title: "Precision Manufacturer",
    desc: "We are professional manufacturers of Pipe Fittings, Flanges, and Forged Fittings, complying with ASTM, DIN, and customer-specific international standards.",
    stats: [
      { value: "ASTM", label: "Certified" },
      { value: "DIN", label: "Standard" },
    ],
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Our Identity
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display font-black text-3xl lg:text-5xl text-foreground mb-4">
            Who We <span className="text-gold-gradient">Are</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {roles.map((role) => (
            <div
              key={role.role}
              className="fade-in-up group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Top accent bar - using gradient not solid border */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary to-primary/40" />

              <div className="p-7">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <role.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Role badge */}
                <div className="inline-block mb-3 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                    {role.role}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-foreground mb-3">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {role.desc}
                </p>

                {/* Stats */}
                <div className="flex gap-6 pt-4 border-t border-border">
                  {role.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <span className="font-display font-black text-xl text-gold-gradient">
                        {stat.value}
                      </span>
                      <span className="text-xs text-muted-foreground mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-divider" />
    </section>
  );
}
