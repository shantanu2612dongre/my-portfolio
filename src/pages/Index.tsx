
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { setupScrollAnimation } from "@/utils/animateOnScroll";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const cleanup = setupScrollAnimation();
    
    // Monitor theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    // Initial theme check
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground theme={theme} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
