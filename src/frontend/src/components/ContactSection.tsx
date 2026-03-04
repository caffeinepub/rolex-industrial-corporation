import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  Building,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitQuote } from "../hooks/useQueries";

interface ContactInfo {
  label: string;
  value: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const contactDetails: ContactInfo[] = [
  {
    label: "Email",
    value: "rolexindcorp@gmail.com",
    href: "mailto:rolexindcorp@gmail.com",
    icon: Mail,
  },
  {
    label: "Prakash Mutha",
    value: "+91 9820043246",
    href: "tel:+919820043246",
    icon: Phone,
  },
  {
    label: "Dinesh Mutha",
    value: "+91 9867546501",
    href: "tel:+919867546501",
    icon: Phone,
  },
  {
    label: "Telephone",
    value: "+91 22 22401801 / +91 67437800/7801",
    icon: Phone,
  },
  {
    label: "Business Hours",
    value: "Mon – Sat, 10:30 am to 7:00 pm",
    icon: Clock,
  },
];

const addresses = [
  {
    label: "Corporate Office",
    value: "105/107, C.P. Tank Road, Raghav Building, Mumbai - 400004",
  },
  {
    label: "Head Office",
    value: "8th Khetwadi Lane, R.K. Building No.4, Shop No.1, Mumbai - 400004",
  },
  {
    label: "Warehouse 1",
    value: "Plot No. 944, Kalamboli Steel Yard, Kalamboli",
  },
  {
    label: "Warehouse 2",
    value: "Plot No. 17/29 MIDC Taloja, Navi Mumbai - 410 206",
  },
  { label: "Factory", value: "J15, Swastik Industrial Estate, Bhayander (E)" },
  {
    label: "China Branch",
    value:
      "Room 1101, Fortune Wisdom International Building, Keqiao, Shaoxing, Zhejiang, China",
  },
];

const productCategories = [
  "Pipes & Tubes",
  "Sheets / Plates / Coils",
  "Pipe Fittings",
  "Flanges",
  "Ferrule Fittings",
  "Round / Flat / Square Bar",
  "Valves",
  "Fasteners",
  "Gasket",
  "Other",
];

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  productInterest: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const submitQuote = useSubmitQuote();

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.productInterest)
      newErrors.productInterest = "Please select a product";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    submitQuote.mutate(
      {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        productInterest: form.productInterest,
        message: form.message,
      },
      {
        onSuccess: () => {
          setFormStatus("success");
          setForm(initialForm);
          toast.success(
            "Quote request submitted successfully! We'll contact you shortly.",
          );
        },
        onError: (err) => {
          console.error("Quote submission error:", err);
          setFormStatus("error");
          toast.error(
            "Failed to submit quote. Please try again or contact us directly.",
          );
        },
      },
    );
  };

  const isLoading = submitQuote.isPending;

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-mid/30 to-background pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Header — left-aligned editorial */}
        <div className="mb-16 fade-in-up">
          <div className="relative inline-block">
            <span className="section-number" aria-hidden="true">
              05
            </span>
            <div className="relative z-10 pt-10">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary block mb-3">
                Get In Touch
              </span>
              <h2 className="font-display font-black text-3xl lg:text-5xl text-foreground">
                Request a <span className="text-gold-gradient">Quote</span>
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-xl text-sm mt-3">
            Tell us about your requirements and our team will respond within 24
            hours with the best pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6 fade-in-up">
            {/* Contact details */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display font-black text-lg text-foreground mb-5">
                Contact Details
              </h3>
              <div className="space-y-4">
                {contactDetails.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <info.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium tracking-wide mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Addresses */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display font-black text-lg text-foreground mb-5">
                Our Locations
              </h3>
              <div className="space-y-4">
                {addresses.map((addr) => (
                  <div key={addr.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-primary tracking-wide mb-0.5">
                        {addr.label}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {addr.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div
            className="lg:col-span-3 fade-in-up"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="bg-card border border-border rounded-2xl p-7 lg:p-8">
              <h3 className="font-display font-black text-xl text-foreground mb-6">
                Send Your Enquiry
              </h3>

              {formStatus === "success" && (
                <div
                  data-ocid="contact.success_state"
                  className="mb-6 flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-400">
                      Quote request submitted!
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Our team will reach out within 24 business hours.
                    </p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="mb-6 flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-xl p-4"
                >
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-destructive">
                      Submission failed
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Please try again or email us directly at
                      rolexindcorp@gmail.com
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                    >
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                      <Input
                        id="name"
                        data-ocid="contact.name_input"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="pl-9 bg-input/50 border-input focus:border-primary"
                        disabled={isLoading}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="company"
                      className="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                    >
                      Company *
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                      <Input
                        id="company"
                        data-ocid="contact.company_input"
                        value={form.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                        placeholder="Company / Organization"
                        className="pl-9 bg-input/50 border-input focus:border-primary"
                        disabled={isLoading}
                      />
                    </div>
                    {errors.company && (
                      <p className="text-xs text-destructive">
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                    >
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                      <Input
                        id="email"
                        data-ocid="contact.email_input"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="you@company.com"
                        className="pl-9 bg-input/50 border-input focus:border-primary"
                        disabled={isLoading}
                        autoComplete="email"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                    >
                      Phone *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                      <Input
                        id="phone"
                        data-ocid="contact.phone_input"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className="pl-9 bg-input/50 border-input focus:border-primary"
                        disabled={isLoading}
                        autoComplete="tel"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Product Interest */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Product Interest *
                  </Label>
                  <Select
                    value={form.productInterest}
                    onValueChange={(val) =>
                      handleChange("productInterest", val)
                    }
                    disabled={isLoading}
                  >
                    <SelectTrigger
                      data-ocid="contact.product_select"
                      className="bg-input/50 border-input focus:border-primary"
                    >
                      <SelectValue placeholder="Select product category..." />
                    </SelectTrigger>
                    <SelectContent>
                      {productCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.productInterest && (
                    <p className="text-xs text-destructive">
                      {errors.productInterest}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                  >
                    Message / Requirements
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.message_textarea"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Describe your requirements — grade, size, quantity, delivery timeline..."
                    className="min-h-[120px] bg-input/50 border-input focus:border-primary resize-none"
                    disabled={isLoading}
                  />
                </div>

                {/* Submit */}
                <Button
                  data-ocid="contact.submit_button"
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gold-gradient text-primary-foreground font-bold text-base py-6 hover:opacity-90 transition-opacity shadow-gold"
                >
                  {isLoading ? (
                    <span
                      data-ocid="contact.loading_state"
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting Quote Request...
                    </span>
                  ) : (
                    "Submit Quote Request"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted by our sales team
                  regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
