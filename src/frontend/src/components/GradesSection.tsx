import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stainlessGrades = [
  {
    grade: "SS 304 / 304L",
    desc: "General purpose austenitic. Excellent corrosion resistance. Most widely used stainless grade.",
    tags: ["Pipes", "Sheets", "Fittings"],
  },
  {
    grade: "SS 316 / 316L",
    desc: "Superior corrosion resistance with molybdenum. Ideal for marine and chemical processing.",
    tags: ["Pipes", "Plates", "Flanges"],
  },
  {
    grade: "SS 347 / 347H",
    desc: "Niobium-stabilized. Excellent for high-temperature service and heat exchangers.",
    tags: ["Tubes", "Fittings"],
  },
  {
    grade: "SS 321 / 321H",
    desc: "Titanium-stabilized austenitic. Resistant to intergranular corrosion at elevated temperatures.",
    tags: ["Pipes", "Fittings"],
  },
  {
    grade: "SS 310 / 310S",
    desc: "High chromium-nickel austenitic. Excellent oxidation resistance up to 1150°C.",
    tags: ["Plates", "Pipes"],
  },
  {
    grade: "SS 904L",
    desc: "Super austenitic. Outstanding resistance to corrosion in reducing acid environments.",
    tags: ["Pipes", "Sheets"],
  },
  {
    grade: "SS 317L",
    desc: "Higher Mo than 316L. Superior corrosion resistance in chloride and reducing environments.",
    tags: ["Sheets", "Pipes"],
  },
];

const carbonGrades = [
  {
    grade: "A210 Gr. A1",
    desc: "Medium carbon steel for boiler and superheater tubes. Seamless construction per ASME SA-210.",
    tags: ["Tubes", "Boiler"],
  },
  {
    grade: "A106 Gr. B",
    desc: "Seamless carbon steel pipe for high-temperature service in power plants and refineries.",
    tags: ["Pipes", "Seamless"],
  },
];

const alloyGrades = [
  {
    grade: "ASTM A335 P-11 / T-11",
    desc: "1¼Cr–½Mo alloy steel. For high-temp, high-pressure service in boilers and power plants.",
    tags: ["Pipes", "Tubes"],
  },
  {
    grade: "ASTM A335 P-22 / T-22",
    desc: "2¼Cr–1Mo alloy steel. Superior creep resistance, widely used in power generation.",
    tags: ["Pipes", "Tubes"],
  },
  {
    grade: "ASTM A335 P-5 / T-5",
    desc: "5Cr–½Mo alloy steel. Exceptional corrosion resistance in high-temperature services.",
    tags: ["Pipes", "Tubes"],
  },
  {
    grade: "ASTM A335 P-9 & P-91",
    desc: "9Cr alloy steel. P-91 with enhanced creep strength for ultra-supercritical applications.",
    tags: ["Pipes", "Critical"],
  },
];

const specialGrades = [
  {
    grade: "Duplex 2205",
    color: "from-[oklch(0.40_0.12_240)] to-[oklch(0.30_0.10_250)]",
  },
  {
    grade: "Super Duplex 2507",
    color: "from-[oklch(0.35_0.14_240)] to-[oklch(0.25_0.12_260)]",
  },
  {
    grade: "Nickel Alloys",
    color: "from-[oklch(0.40_0.06_240)] to-[oklch(0.28_0.04_255)]",
  },
  {
    grade: "Brass",
    color: "from-[oklch(0.60_0.12_72)] to-[oklch(0.50_0.10_68)]",
  },
  {
    grade: "Copper",
    color: "from-[oklch(0.55_0.15_42)] to-[oklch(0.45_0.12_38)]",
  },
  {
    grade: "Aluminium",
    color: "from-[oklch(0.65_0.04_240)] to-[oklch(0.50_0.03_245)]",
  },
  {
    grade: "Monel 400/K500",
    color: "from-[oklch(0.42_0.08_200)] to-[oklch(0.32_0.06_210)]",
  },
  {
    grade: "Inconel 600/625",
    color: "from-[oklch(0.38_0.10_255)] to-[oklch(0.28_0.08_260)]",
  },
  {
    grade: "Hastelloy C-276",
    color: "from-[oklch(0.35_0.08_200)] to-[oklch(0.25_0.06_205)]",
  },
  {
    grade: "Stainless Steel",
    color: "from-[oklch(0.40_0.03_240)] to-[oklch(0.28_0.02_250)]",
  },
];

interface GradeCardProps {
  grade: string;
  desc: string;
  tags: string[];
}

function GradeCard({ grade, desc, tags }: GradeCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover group">
      <h4 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
        {grade}
      </h4>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
        {desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-[10px] font-medium tracking-wider"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function GradesSection() {
  return (
    <section
      id="grades"
      className="py-24 lg:py-32 relative overflow-hidden bg-steel-gradient"
    >
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-divider" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header — left-aligned editorial */}
        <div className="mb-16 fade-in-up">
          <div className="relative inline-block">
            <span className="section-number" aria-hidden="true">
              03
            </span>
            <div className="relative z-10 pt-10">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary block mb-3">
                Material Grades
              </span>
              <h2 className="font-display font-black text-3xl lg:text-5xl text-foreground">
                Grades We{" "}
                <span className="text-gold-gradient">Stock & Supply</span>
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-xl text-sm mt-3">
            All materials available with ASTM, DIN, IBR, and customer-specified
            certifications
          </p>
        </div>

        {/* Standard Grades Tabs */}
        <div className="fade-in-up mb-16">
          <Tabs defaultValue="stainless">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-card border border-border p-1 gap-1 h-auto">
                <TabsTrigger
                  value="stainless"
                  data-ocid="grades.tab.1"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-md transition-all"
                >
                  Stainless Steel
                </TabsTrigger>
                <TabsTrigger
                  value="carbon"
                  data-ocid="grades.tab.2"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-md transition-all"
                >
                  Carbon Steel
                </TabsTrigger>
                <TabsTrigger
                  value="alloy"
                  data-ocid="grades.tab.3"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-md transition-all"
                >
                  Alloy Steel
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="stainless">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 stagger-children">
                {stainlessGrades.map((g) => (
                  <div key={g.grade} className="fade-in-up">
                    <GradeCard {...g} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="carbon">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto stagger-children">
                {carbonGrades.map((g) => (
                  <div key={g.grade} className="fade-in-up">
                    <GradeCard {...g} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alloy">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
                {alloyGrades.map((g) => (
                  <div key={g.grade} className="fade-in-up">
                    <GradeCard {...g} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Special Grades */}
        <div>
          <h3 className="font-display font-black text-2xl lg:text-3xl text-center mb-8 fade-in-up">
            Special & Exotic <span className="text-gold-gradient">Grades</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 stagger-children">
            {specialGrades.map((sg, i) => (
              <div
                key={sg.grade}
                data-ocid={`special-grades.item.${i + 1}`}
                className="fade-in-up group relative overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sg.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative p-4 flex items-center justify-center min-h-[80px]">
                  <span className="font-display font-bold text-sm text-center text-foreground leading-tight">
                    {sg.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
