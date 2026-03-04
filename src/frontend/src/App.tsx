import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GradesSection from "./components/GradesSection";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section
      const sections = [
        "home",
        "about",
        "products",
        "grades",
        "industries",
        "contact",
      ];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for fade-in-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    const elements = document.querySelectorAll(".fade-in-up");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar activeSection={activeSection} scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GradesSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <WhoWeAreSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
