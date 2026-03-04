import {
  Building2,
  Eye,
  Factory,
  Globe2,
  Heart,
  Package,
  Target,
} from "lucide-react";

const timelineItems = [
  {
    year: "1979",
    title: "Founded",
    desc: "Mr. Mithalal Mutha established Rolex Industrial Corporation in Mumbai, focusing on steel fittings and flanges.",
  },
  {
    year: "1980s",
    title: "Expanded Range",
    desc: "Extended product lines to include Stainless Steel and Carbon Steel pipes, plates and structural materials.",
  },
  {
    year: "1990s",
    title: "Next Generation",
    desc: "Sons Prakash Mutha and Dinesh Mutha joined the business, bringing new energy and expanding operations.",
  },
  {
    year: "2000s",
    title: "Trusted Across India",
    desc: "Became one of India's most recognized names in industrial steel supplies, serving 1000+ clients.",
  },
  {
    year: "2010s",
    title: "International Expansion",
    desc: "Achieved export presence in 35+ countries. Became Authorized Dealer of Jindal Stainless Steel.",
  },
  {
    year: "Today",
    title: "Global Presence",
    desc: "Headquartered in Mumbai with warehouses, factory, and a branch in China — serving global industry.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide high-quality pipe fittings, flanges, and steel products, ensuring exceptional standards, reliable solutions, and customer satisfaction through innovation and excellence.",
    color: "text-primary",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To continuously expand our reach and capabilities, becoming the go-to provider for high-quality steel products worldwide, fostering long-term partnerships through consistent excellence.",
    color: "text-steel-blue",
  },
  {
    icon: Heart,
    title: "Customer Service",
    desc: "Our team is committed to providing prompt assistance, technical guidance, and personalized solutions to ensure a seamless experience for all clients, irrespective of order size.",
    color: "text-primary",
  },
];

const infrastructure = [
  "Corporate Office in Mumbai (C.P. Tank Road)",
  "Head Office at 8th Khetwadi Lane, Mumbai",
  "Warehouse — Kalamboli Steel Yard",
  "Warehouse — MIDC Taloja, Navi Mumbai",
  "Manufacturing Factory — Bhayander (E)",
  "International Branch — Keqiao, Zhejiang, China",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-steel-gradient opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-divider" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header — center-aligned */}
        <div className="mb-16 fade-in-up text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Our Story
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display font-black text-3xl lg:text-5xl text-foreground">
            Rolex Group of <span className="text-gold-gradient">Companies</span>
          </h2>
        </div>

        {/* Company Intro */}
        <div className="max-w-4xl mx-auto mb-20 fade-in-up">
          <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-[inset_0_1px_0_oklch(0.77_0.155_68/0.1)]">
            <div className="absolute top-6 left-8 text-6xl text-primary/20 font-serif leading-none select-none">
              "
            </div>
            <p className="relative text-base lg:text-lg text-muted-foreground leading-relaxed pl-4 italic">
              We are pleased to introduce ourselves as manufacturers of Pipe
              Fittings and Flanges in Stainless Steel, Carbon Steel, Duplex
              Steel, Alloy Steel, and Nickel Alloys, complying with ASTM, DIN,
              and other customer-specified standards. Additionally, we are a
              leading stockist of Pipes, Plates, Round Bars, Hex Bars, Tubes,
              and Structural Materials in all grades. We are also an{" "}
              <span className="text-primary font-semibold not-italic">
                Authorized Dealer of Jindal Stainless Steel Pipes and Tubes.
              </span>
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground/60 pl-4">
              — Rolex Industrial Corporation, Est. 1979
            </p>
          </div>
        </div>

        {/* Mission/Vision/Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 stagger-children">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="fade-in-up bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className={`h-5 w-5 ${pillar.color}`} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="font-display font-black text-2xl lg:text-3xl text-center mb-10 fade-in-up">
            Our <span className="text-gold-gradient">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden sm:block lg:transform lg:-translate-x-1/2" />

            <div className="space-y-8">
              {timelineItems.map((item, idx) => (
                <div
                  key={item.year}
                  className={`fade-in-up relative flex flex-col sm:flex-row gap-4 lg:gap-0 ${
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`sm:pl-12 lg:pl-0 lg:w-[calc(50%-2rem)] ${
                      idx % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors ${
                        idx % 2 === 0 ? "lg:ml-auto" : ""
                      }`}
                    >
                      <span className="text-xs font-bold tracking-widest text-primary uppercase">
                        {item.year}
                      </span>
                      <h4 className="font-display font-bold text-base text-foreground mt-1 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="fade-in-up bg-card border border-border rounded-2xl p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-6 w-6 text-primary" />
            <h3 className="font-display font-black text-2xl text-foreground">
              Infrastructure
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {infrastructure.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
