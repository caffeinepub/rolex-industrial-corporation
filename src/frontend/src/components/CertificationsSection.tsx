import { Award, Building, FileCheck } from "lucide-react";

const certs = [
  {
    icon: FileCheck,
    title: "GST Certificate",
    desc: "Registered under Goods and Services Tax (GST) in India, ensuring full compliance with Indian tax regulations for all domestic and export transactions.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "hover:border-emerald-400/40",
  },
  {
    icon: Award,
    title: "RIC ISO Certification",
    desc: "ISO Quality Management System certification for Rolex Industrial Corporation, validating our commitment to international quality standards in manufacturing and supply.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/40",
  },
  {
    icon: Building,
    title: "Udyam Registration",
    desc: "Registered under Government of India's Udyam (MSME) scheme, recognizing Rolex Industrial Corporation as a certified micro, small, and medium enterprise.",
    color: "text-steel-light",
    bgColor: "bg-steel-blue/10",
    borderColor: "hover:border-steel-blue/40",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-steel-gradient">
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-divider" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Credentials
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display font-black text-3xl lg:text-5xl text-foreground mb-4">
            Our <span className="text-gold-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Backed by verifiable credentials that affirm our quality,
            compliance, and business legitimacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children max-w-4xl mx-auto">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className={`fade-in-up group bg-card border border-border ${cert.borderColor} rounded-2xl p-7 transition-all duration-300 hover:shadow-card-hover text-center`}
            >
              <div
                className={`w-14 h-14 rounded-full ${cert.bgColor} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}
              >
                <cert.icon className={`h-7 w-7 ${cert.color}`} />
              </div>
              <h3 className="font-display font-black text-lg text-foreground mb-3">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Group companies */}
        <div className="mt-20 fade-in-up">
          <h3 className="font-display font-black text-2xl text-center mb-8 text-foreground">
            Companies in <span className="text-gold-gradient">Rolex Group</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { name: "Rolex Industrial Corporation", country: "India" },
              { name: "Rolex Ferromat Private Limited", country: "India" },
              { name: "China Smart Trading Limited", country: "China" },
            ].map((company) => (
              <div
                key={company.name}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Building className="h-4 w-4 text-primary" />
                </div>
                <p className="font-display font-bold text-sm text-foreground leading-snug mb-1">
                  {company.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {company.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
