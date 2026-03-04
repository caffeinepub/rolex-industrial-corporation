import { Button } from "@/components/ui/button";
import { ChevronDown, Package, X } from "lucide-react";
import { useState } from "react";

interface ProductCategory {
  id: string;
  name: string;
  image: string;
  description: string;
  subItems?: { category?: string; items: string[] }[];
}

const products: ProductCategory[] = [
  {
    id: "pipes",
    name: "Pipes & Tubes",
    image: "/assets/generated/product-pipes.dim_600x400.jpg",
    description:
      "Seamless and welded pipes and tubes in all grades of Stainless Steel, Carbon Steel, Alloy Steel, Duplex and Nickel Alloys.",
    subItems: [
      {
        items: [
          "Seamless Pipes & Tubes",
          "Welded Pipes & Tubes",
          "ERW Pipes",
          "EFW Pipes",
          "Capillary Tubes",
          "Heat Exchanger Tubes",
          "Hollow Bar",
        ],
      },
    ],
  },
  {
    id: "sheets",
    name: "Sheets / Plates / Coils",
    image: "/assets/generated/product-sheets.dim_600x400.jpg",
    description:
      "Hot Rolled, Cold Rolled, and Annealed Pickled sheets, plates and coils in all industrial grades.",
    subItems: [
      {
        items: [
          "Hot Rolled Sheets",
          "Cold Rolled Sheets",
          "Annealed Pickled (2B) Plates",
          "Coils",
          "Chequered Plates",
          "Structural Plates",
        ],
      },
    ],
  },
  {
    id: "fittings",
    name: "Pipe Fittings",
    image: "/assets/generated/product-fittings.dim_600x400.jpg",
    description:
      "Buttweld and Forged fittings in Stainless Steel, Carbon Steel, Alloy Steel, and Nickel Alloys per ASTM and DIN standards.",
    subItems: [
      {
        category: "Buttweld Fittings",
        items: [
          "Pipe Elbow (45°, 90°, 180°)",
          "Pipe Tee (Equal & Reducing)",
          "Pipe Cross",
          "Pipe Reducer (Concentric & Eccentric)",
          "Pipe End Cap",
          "Pipe Bends",
          "Stubend – Lap Joint",
          "Threaded Pipe Fittings",
          "Swage Nipples / Pipe Swage",
          "Pipe Outlet Fittings",
        ],
      },
      {
        category: "Forged Fittings",
        items: ["Socket Weld Fittings", "Pipe Nipples"],
      },
    ],
  },
  {
    id: "flanges",
    name: "Flanges",
    image: "/assets/generated/product-flanges.dim_600x400.jpg",
    description:
      "Forged and machined flanges in all pressure classes (150#–2500#) per ASME B16.5, B16.47, and DIN standards.",
    subItems: [
      {
        items: [
          "Weld Neck Flanges",
          "Slip-On Flanges",
          "Blind Flanges",
          "Socket Weld Flanges",
          "Threaded Flanges",
          "Lap Joint Flanges",
          "Screwed Flanges",
          "Plate Flanges",
        ],
      },
    ],
  },
  {
    id: "ferrule",
    name: "Ferrule Fittings",
    image: "/assets/generated/product-fittings.dim_600x400.jpg",
    description:
      "Compression ferrule fittings in Stainless Steel and other alloys for instrumentation and process piping.",
    subItems: [
      {
        items: [
          "Single Compression Ferrule",
          "Double Compression Ferrule",
          "Straight Connector",
          "Union Elbow",
          "Union Tee",
          "Reducing Union",
          "Tube to Male Connector",
        ],
      },
    ],
  },
  {
    id: "bars",
    name: "Round / Flat / Square Bar",
    image: "/assets/generated/product-bars.dim_600x400.jpg",
    description:
      "Hot and cold finished bars in stainless, carbon, alloy, duplex and nickel alloys — used for shafts, bolts, and components.",
    subItems: [
      {
        items: [
          "Round Bars",
          "Flat Bars",
          "Square Bars",
          "Hex Bars",
          "Angle Bars",
          "Channel Sections",
          "Beam Sections",
        ],
      },
    ],
  },
  {
    id: "valves",
    name: "Valves",
    image: "/assets/generated/product-pipes.dim_600x400.jpg",
    description:
      "Industrial valves in all grades and pressure ratings for process, oil & gas, and power applications.",
    subItems: [
      {
        items: [
          "Gate Valves",
          "Globe Valves",
          "Ball Valves",
          "Check Valves",
          "Butterfly Valves",
          "Needle Valves",
          "Plug Valves",
        ],
      },
    ],
  },
  {
    id: "fasteners",
    name: "Fasteners",
    image: "/assets/generated/product-bars.dim_600x400.jpg",
    description:
      "High-tensile industrial fasteners including studs, bolts, nuts, and washers in all grades.",
    subItems: [
      {
        items: [
          "Hex Bolts & Nuts",
          "Stud Bolts",
          "Eye Bolts",
          "Foundation Bolts",
          "Threaded Rods",
          "Anchor Bolts",
          "Washers",
        ],
      },
    ],
  },
  {
    id: "gasket",
    name: "Gasket",
    image: "/assets/generated/product-fittings.dim_600x400.jpg",
    description:
      "Industrial gaskets for flanged joints in high-pressure, high-temperature applications per ASME standards.",
    subItems: [
      {
        items: [
          "Ring Type Joint (RTJ)",
          "Spiral Wound Gasket",
          "Kammprofile Gasket",
          "Full Face Gasket",
          "Raised Face Gasket",
          "Metal Jacketed Gasket",
        ],
      },
    ],
  },
];

export default function ProductsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const expanded = products.find((p) => p.id === expandedId);

  return (
    <section id="products" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header — center-aligned */}
        <div className="mb-16 fade-in-up text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              What We Supply
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display font-black text-3xl lg:text-5xl text-foreground mb-3">
            Our <span className="text-gold-gradient">Product Range</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Comprehensive range of industrial steel products — from raw
            materials to precision-engineered components
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {products.map((product, idx) => (
            <button
              type="button"
              key={product.id}
              data-ocid={`products.item.${idx + 1}`}
              className={`fade-in-up product-card text-left relative bg-card border rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 ${
                expandedId === product.id
                  ? "border-primary shadow-gold"
                  : "border-border hover:border-primary/40"
              }`}
              onClick={() => handleCardClick(product.id)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {/* Expand indicator */}
                <div
                  className={`absolute top-3 right-3 w-7 h-7 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center transition-transform duration-300 ${
                    expandedId === product.id ? "rotate-180 border-primary" : ""
                  }`}
                >
                  <ChevronDown className="h-3.5 w-3.5 text-foreground/70" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded Panel */}
        {expandedId && expanded && (
          <div className="mt-8 fade-in-up">
            <div className="bg-card border border-primary/40 rounded-2xl p-6 lg:p-8 shadow-gold relative">
              <button
                type="button"
                onClick={() => setExpandedId(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-primary" />
                <h3 className="font-display font-black text-xl lg:text-2xl text-foreground">
                  {expanded.name}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 max-w-2xl">
                {expanded.description}
              </p>

              <div
                className={`grid gap-6 ${expanded.subItems && expanded.subItems.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}
              >
                {expanded.subItems?.map((group) => (
                  <div key={group.category ?? "default"}>
                    {group.category && (
                      <h4 className="font-display font-bold text-sm tracking-widest uppercase text-primary mb-3">
                        {group.category}
                      </h4>
                    )}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gold-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Request Quote for {expanded.name}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-divider" />
    </section>
  );
}
