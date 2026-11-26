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
    </div>
  );
};

export default PortfolioLayout;
