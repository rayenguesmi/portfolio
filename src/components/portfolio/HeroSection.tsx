import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Phone,
  Bot,
  BarChart2,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CyberParticles } from "@/components/ui/CyberParticles";
import PortfolioStats from "./PortfolioStats";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm = lazy(() => import("./ContactForm"));
const CvDownloadModal = lazy(() => import("./CvDownloadModal"));
const SkillsMatrixModal = lazy(() => import("./SkillsMatrixModal"));

const Typewriter = ({ text, speed = 80 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return (
    <span>
      {displayText}
      <span className="animate-pulse text-primary">_</span>
    </span>
  );
};

const techStack = [
  { label: "Python", color: "text-yellow-400  border-yellow-400/30  bg-yellow-400/8" },
  { label: "FastAPI", color: "text-green-400   border-green-400/30   bg-green-400/8" },
  { label: "React", color: "text-cyan-400    border-cyan-400/30    bg-cyan-400/8" },
  { label: "Docker", color: "text-blue-400    border-blue-400/30    bg-blue-400/8" },
  { label: "LLM", color: "text-primary     border-primary/30     bg-primary/8" },
  { label: "CI/CD", color: "text-sky-400     border-sky-400/30     bg-sky-400/8" },
];

const socials = [
  { href: "https://github.com/rayenguesmi", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/rayen-guesmi-3141a1308", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:rayen.guesmi@esprit.tn", icon: Mail, label: "Email" },
  { href: "tel:+21629046070", icon: Phone, label: "Phone" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [isCvModalOpen, setCvModalOpen] = useState(false);
  const [isSkillsMatrixOpen, setSkillsMatrixOpen] = useState(false);

  const handleOpenContactForm = () => setContactFormOpen(true);
  const handleOpenCvModal = () => setCvModalOpen(true);
  const handleOpenSkillsMatrix = () => setSkillsMatrixOpen(true);

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center pt-16 matrix-bg relative overflow-hidden"
      >
        <CyberParticles />

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-12">
            {/* ── Photo ── */}
            <ScrollReveal direction="right">
              <div className="relative flex justify-center lg:justify-start">
                {/* Glow blobs */}
                <div className="absolute -inset-10 rounded-full bg-primary/8 blur-3xl" />
                <div className="absolute -inset-6 rounded-full bg-accent/6 blur-2xl" />

                {/* Outer decorative dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 shadow-[0_0_10px_hsl(43_75%_55%/0.8)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/60 shadow-[0_0_8px_hsl(215_90%_62%/0.8)]" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/40" />

                {/* Slow rotating dashed ring */}
                <div className="absolute inset-[-16px] rounded-full border-2 border-dashed border-primary/15 animate-[spin_25s_linear_infinite] motion-reduce:animate-none" />
                {/* Counter-rotating dots ring */}
                <div className="absolute inset-[-8px] rounded-full border border-border animate-[spin_15s_linear_infinite_reverse] motion-reduce:animate-none" />

                {/* Photo frame */}
                <div className="relative p-[3px] rounded-full bg-gradient-to-br from-primary via-accent/50 to-primary/20 shadow-[0_0_50px_hsl(43_75%_55%/0.2),0_0_100px_hsl(43_75%_55%/0.08)]">
                  <div className="rounded-full overflow-hidden bg-[hsl(222_65%_6%)]">
                    <img
                      src="/Gemini_Generated_Image_h0mwonh0mwonh0mw-removebg-preview.png"
                      alt="Rayen Guesmi"
                      width={320}
                      height={320}
                      loading="eager"
                      decoding="async"
                      className="w-72 h-72 lg:w-80 lg:h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Floating chips */}
                <div className="absolute top-4 -right-4 lg:-right-10 bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl px-3 py-2 shadow-card flex items-center gap-2 text-xs font-semibold text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  AI & DevOps
                </div>
                <div className="absolute bottom-12 -right-4 lg:-right-12 bg-card/90 backdrop-blur-md border border-accent/30 rounded-xl px-3 py-2 shadow-card flex items-center gap-2 text-xs font-semibold text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Full-Stack Dev
                </div>
                <div className="absolute -bottom-2 left-4 lg:left-0 bg-card/90 backdrop-blur-md border border-border rounded-xl px-3 py-2 shadow-card flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary" />
                  {t("hero.location")}
                </div>
              </div>
            </ScrollReveal>

            {/* ── Text ── */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-5">
                {/* Status */}
                <div className="flex items-center gap-3">
                  <div className="status-badge">
                    <span className="status-dot" />
                    {t("hero.available")}
                  </div>
                  <span className="text-xs text-muted-foreground">{t("hero.open")}</span>
                </div>

                {/* Headline */}
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-xs font-mono tracking-[0.22em] uppercase text-primary/65">
                    <Terminal className="h-3.5 w-3.5" />
                    <Typewriter text={t("hero.typewriter")} />
                  </p>

                  <h1 className="text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight">
                    <span className="text-foreground/75">Hi, I'm</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-amber-300 to-accent bg-clip-text text-transparent">
                      Rayen Guesmi
                    </span>
                  </h1>

                  <p className="text-[15px] text-muted-foreground max-w-[420px] leading-relaxed pt-1">
                    {t("hero.bio")}
                  </p>
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 py-1">
                  {techStack.map(({ label, color }) => (
                    <span
                      key={label}
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${color} transition-all hover:scale-105 cursor-default`}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-primary/20 via-border to-transparent" />

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-2.5">
                  {/* Primary */}
                  <button
                    onClick={handleOpenCvModal}
                    className="group relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-glow active:scale-100"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-amber-400 transition-all" />
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Download className="relative h-4 w-4 transition-transform group-hover:translate-y-0.5 duration-200" />
                    <span className="relative tracking-wide">{t("hero.downloadCV")}</span>
                  </button>

                  {/* Contact Me */}
                  <button
                    onClick={handleOpenContactForm}
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-foreground border border-border bg-card/40 backdrop-blur-sm hover:border-primary/60 hover:text-primary hover:bg-primary/6 hover:shadow-[0_0_20px_hsl(43_75%_55%/0.12)] transition-all duration-300"
                  >
                    <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 duration-200" />
                    {t("hero.contactMe")}
                  </button>

                  {/* Skills Matrix */}
                  <button
                    onClick={handleOpenSkillsMatrix}
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-foreground border border-border bg-card/40 backdrop-blur-sm hover:border-primary/60 hover:text-primary hover:bg-primary/6 hover:shadow-[0_0_20px_hsl(43_75%_55%/0.12)] transition-all duration-300"
                  >
                    <BarChart2 className="h-4 w-4 transition-transform group-hover:scale-110 duration-200" />
                    {t("hero.skillsMatrix")}
                  </button>

                  {/* Ask AI */}
                  <button
                    onClick={() => navigate("/chat")}
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-accent border border-accent/25 bg-accent/5 hover:bg-accent/12 hover:border-accent/55 hover:shadow-[0_0_20px_hsl(215_90%_62%/0.18)] transition-all duration-300"
                  >
                    <Bot className="h-4 w-4 transition-transform group-hover:rotate-12 duration-300" />
                    {t("hero.askAI")}
                  </button>

                  {/* Activity */}
                  <button
                    onClick={() => navigate("/activity")}
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-accent border border-accent/25 bg-accent/5 hover:bg-accent/12 hover:border-accent/55 hover:shadow-[0_0_20px_hsl(215_90%_62%/0.18)] transition-all duration-300"
                  >
                    <Github className="h-4 w-4 transition-transform group-hover:scale-110 duration-200" />
                    {t("hero.activity")}
                  </button>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-2 pt-0.5">
                  {socials.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      title={label}
                      aria-label={label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/45 hover:bg-primary/8 hover:shadow-[0_0_10px_hsl(43_75%_55%/0.15)] transition-all duration-200"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                  <span className="mx-2 h-5 w-px bg-border" />
                  <span className="text-xs text-muted-foreground select-all">
                    rayen.guesmi@esprit.tn
                  </span>
                </div>

                <PortfolioStats />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-foreground/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.18em] font-medium">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </section>

      <Suspense fallback={null}>
        {isContactFormOpen && <ContactForm onClose={() => setContactFormOpen(false)} />}
        {isCvModalOpen && <CvDownloadModal onClose={() => setCvModalOpen(false)} />}
        {isSkillsMatrixOpen && <SkillsMatrixModal onClose={() => setSkillsMatrixOpen(false)} />}
      </Suspense>
    </>
  );
};

export default HeroSection;
