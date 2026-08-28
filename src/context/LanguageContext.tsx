import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // ── Navigation ──
  "nav.about":          { en: "About",          fr: "À propos" },
  "nav.certifications": { en: "Certifications",  fr: "Certifications" },
  "nav.projects":       { en: "Projects",        fr: "Projets" },
  "nav.internships":    { en: "Internships",      fr: "Stages" },
  "nav.education":      { en: "Education",        fr: "Formation" },
  "nav.skills":         { en: "Skills",           fr: "Compétences" },
  "nav.motivation":     { en: "Motivation",       fr: "Motivation" },

  // ── Hero ──
  "hero.typewriter":    { en: "Software Engineer | Full-Stack & AI Engineer", fr: "Ingénieur Logiciel | Full-Stack & IA" },
  "hero.bio":           { en: "I build intelligent web applications, AI-powered solutions and scalable backend systems.", fr: "Je conçois des applications web intelligentes, des solutions basées sur l'IA et des systèmes backend scalables." },
  "hero.available":     { en: "Available for work", fr: "Disponible" },
  "hero.open":          { en: "· Open to opportunities", fr: "· Ouvert aux opportunités" },
  "hero.location":      { en: "Tunisia · Open to Work", fr: "Tunisie · Disponible" },
  "hero.downloadCV":    { en: "Download CV",     fr: "Télécharger CV" },
  "hero.contactMe":     { en: "Contact Me",      fr: "Me contacter" },
  "hero.skillsMatrix":  { en: "Skills Matrix",   fr: "Matrice Compétences" },
  "hero.askAI":         { en: "Ask AI",          fr: "Demander à l'IA" },
  "hero.activity":      { en: "Activity",        fr: "Activité" },

  // ── Projects Section ──
  "projects.badge":     { en: "Portfolio",       fr: "Portfolio" },
  "projects.title":     { en: "Featured Projects", fr: "Projets" },
  "projects.subtitle":  { en: "Showcasing real-world AI, automation, and full-stack projects I've developed", fr: "Projets réels en IA, automatisation et développement full-stack" },
  "projects.all":       { en: "All",             fr: "Tous" },
  "projects.highlights":{ en: "Key Highlights:", fr: "Points clés :" },
  "projects.technologies":{ en: "Technologies:", fr: "Technologies :" },

  // ── Project Modal ──
  "modal.demo":         { en: "Demo",            fr: "Démo" },
  "modal.about":        { en: "About the Project", fr: "À propos du projet" },
  "modal.highlights":   { en: "Key Highlights",  fr: "Points clés" },
  "modal.technologies": { en: "Technologies",    fr: "Technologies" },
  "modal.viewSource":   { en: "View Source Code", fr: "Voir le code source" },
  "modal.completed":    { en: "Completed",       fr: "Terminé" },

  // ── Education ──
  "education.badge":    { en: "Academic Background", fr: "Parcours académique" },
  "education.title":    { en: "Education",       fr: "Formation" },
  "education.subtitle": { en: "Academic background in software engineering, AI and full-stack development", fr: "Formation en génie logiciel, IA et développement full-stack" },
  "education.coursework":{ en: "Key Coursework:", fr: "Matières clés :" },
  "education.achievements":{ en: "Achievements:", fr: "Réalisations :" },
  "education.continuing":{ en: "Continuing Education", fr: "Formation continue" },

  // ── Internships ──
  "internships.title":  { en: "Internships",     fr: "Stages" },

  // ── Internship Modal ──
  "internship.role":    { en: "Role",            fr: "Poste" },
  "internship.period":  { en: "Period",          fr: "Période" },
  "internship.location":{ en: "Location",        fr: "Lieu" },
  "internship.about":   { en: "About",           fr: "Description" },
  "internship.technologies":{ en: "Technologies", fr: "Technologies" },
  "internship.viewCert":{ en: "View Certificate", fr: "Voir le certificat" },

  // ── Skills ──
  "skills.badge":       { en: "Technical Skills", fr: "Compétences techniques" },
  "skills.title":       { en: "Skills & Tools",  fr: "Compétences & Outils" },
  "skills.subtitle":    { en: "Technologies and tools I use to build intelligent and efficient systems", fr: "Technologies et outils que j'utilise pour construire des systèmes intelligents et efficaces" },

  // ── Motivation ──
  "motivation.badge":   { en: "What Drives Me",  fr: "Ce qui me motive" },
  "motivation.title":   { en: "Motivation & Values", fr: "Motivation & Valeurs" },
  "motivation.subtitle":{ en: "The passion and principles that guide my engineering journey", fr: "La passion et les principes qui guident mon parcours d'ingénieur" },
  "motivation.story.title": { en: "My Journey Into Software Engineering & AI", fr: "Mon parcours en génie logiciel & IA" },
  "motivation.what":    { en: "What Motivates Me", fr: "Ce qui me motive" },
  "motivation.values":  { en: "Core Values",     fr: "Valeurs fondamentales" },
  "motivation.quote":   { en: "The best automation is the one you build once and trust forever. Build it right, test it thoroughly, ship it confidently.", fr: "La meilleure automatisation est celle que l'on construit une fois et à laquelle on fait confiance pour toujours. Construire correctement, tester minutieusement, livrer avec confiance." },
  "motivation.philosophy":{ en: "My Engineering Philosophy", fr: "Ma philosophie d'ingénieur" },

  // ── Contact ──
  "contact.title":      { en: "Contact Information", fr: "Coordonnées" },

  // ── Certifications ──
  "certs.badge":        { en: "Professional Development", fr: "Développement professionnel" },
  "certs.title":        { en: "Certifications",  fr: "Certifications" },
  "certs.subtitle":     { en: "Industry-recognized certifications in AI, deep learning and data science", fr: "Certifications reconnues en IA, deep learning et data science" },
  "certs.verify":       { en: "Verify",          fr: "Vérifier" },
  "certs.view":         { en: "View Credential", fr: "Voir le diplôme" },

  // ── CV Modal ──
  "cv.title":           { en: "Download CV",     fr: "Télécharger le CV" },
  "cv.english":         { en: "Download CV (English)", fr: "Télécharger CV (Anglais)" },
  "cv.french":          { en: "Download CV (Français)", fr: "Télécharger CV (Français)" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry["en"] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
