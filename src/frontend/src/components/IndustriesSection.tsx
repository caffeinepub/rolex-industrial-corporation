interface Industry {
  name: string;
  image: string;
  desc: string;
  ocid: string;
}

const industries: Industry[] = [
  {
    name: "Oil & Gas",
    image: "/assets/generated/industry-oilgas.dim_400x300.jpg",
    desc: "High-pressure pipelines, wellhead fittings, and refinery components in all grades.",
    ocid: "industries.item.1",
  },
  {
    name: "Chemical",
    image: "/assets/generated/industry-chemical.dim_400x300.jpg",
    desc: "Corrosion-resistant piping systems for chemical processing plants and storage.",
    ocid: "industries.item.2",
  },
  {
    name: "Aerospace",
    image: "/assets/generated/industry-aerospace.dim_400x300.jpg",
    desc: "Precision-engineered steel parts and structural components for aerospace applications.",
    ocid: "industries.item.3",
  },
  {
    name: "Power Plant",
    image: "/assets/generated/industry-power.dim_400x300.jpg",
    desc: "Boiler pipes, superheater tubes, and steam system fittings for power generation.",
    ocid: "industries.item.4",
  },
  {
    name: "Construction",
    image: "/assets/generated/industry-construction.dim_400x300.jpg",
    desc: "Structural steel, beams, and plates for civil engineering and building projects.",
    ocid: "industries.item.5",
  },
  {
    name: "Marine",
    image: "/assets/generated/industry-marine.dim_400x300.jpg",
    desc: "Marine-grade stainless steel for offshore platforms and shipbuilding applications.",
    ocid: "industries.item.6",
  },
  {
    name: "Sugar Industry",
    image: "/assets/generated/industry-sugar.dim_400x300.jpg",
    desc: "Corrosion-resistant pipes and fittings for sugar processing equipment and evaporators.",
    ocid: "industries.item.7",
  },
  {
    name: "Cement Industry",
    image: "/assets/generated/industry-cement.dim_400x300.jpg",
    desc: "High-strength structural steel and carbon pipes for cement plants and kilns.",
    ocid: "industries.item.8",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-24 lg:py-32 relative overflow-hidden bg-steel-gradient"
    >
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-divider" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header — center-aligned */}
        <div className="mb-16 fade-in-up text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Sectors We Serve
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display font-black text-3xl lg:text-5xl text-foreground mb-3">
            Industries We <span className="text-gold-gradient">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Supplying precision steel components to critical industrial sectors
            across India and globally
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {industries.map((industry) => (
            <div
              key={industry.name}
              data-ocid={industry.ocid}
              className="fade-in-up group relative rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 product-card cursor-default h-56"
            >
              {/* Background */}
              <img
                src={industry.image}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display font-black text-base text-foreground mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {industry.desc}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
