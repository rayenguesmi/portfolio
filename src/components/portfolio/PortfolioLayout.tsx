import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import CertificationsSection from "./CertificationsSection";
import ProjectsSection from "./ProjectsSection";
import InternshipsSection from "./InternshipsSection";
import EducationSection from "./EducationSection";
import LanguagesSection from "./LanguagesSection";
import MotivationSection from "./MotivationSection";
import CodingActivitySection from "./CodingActivitySection";

const PortfolioLayout = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content / Aller au contenu principal
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection />
        <CertificationsSection />
        <ProjectsSection />
        <InternshipsSection />
        <EducationSection />
        <LanguagesSection />
        <MotivationSection />
      </main>

      {/* Floating back-to-top button */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top / Retour en haut"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default PortfolioLayout;
