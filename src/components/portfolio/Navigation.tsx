import { useState, useEffect } from "react";
import { Menu, X, Shield, User, Award, Briefcase, GraduationCap, Languages, Heart } from "lucide-react";

const navItems = [
  { icon: User,          label: "About",          href: "#about",          id: "about" },
  { icon: Award,         label: "Certifications", href: "#certifications", id: "certifications" },
  { icon: Briefcase,     label: "Projects",       href: "#projects",       id: "projects" },
  { icon: Briefcase,     label: "Internships",    href: "#internships",    id: "internships" },
  { icon: GraduationCap, label: "Education",      href: "#education",      id: "education" },
  { icon: Languages,     label: "Skills",         href: "#languages",      id: "languages" },
  { icon: Heart,         label: "Motivation",     href: "#motivation",     id: "motivation" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/96 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      {/* Gradient bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <button
            onClick={() => scrollTo("#about")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center transition-all group-hover:bg-primary/20 group-hover:border-primary/50">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <span className="text-lg font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Rayen Guesmi
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map(({ icon: Icon, label, href, id }) => {
              const active = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(href)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{label}</span>
                  {active && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border pb-3 pt-2 space-y-0.5">
            {navItems.map(({ icon: Icon, label, href, id }) => {
              const active = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(href)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    active
                      ? "text-primary bg-primary/10 border-l-2 border-primary pl-3.5"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
