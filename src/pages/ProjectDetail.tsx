import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Building2,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Layers,
  TrendingUp,
  Play,
  Briefcase,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/portfolio";
import { projectsFr } from "@/data/portfolio.fr";
import Navigation from "@/components/portfolio/Navigation";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const currentList = lang === "fr" ? projectsFr : projects;
  const project = currentList.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (project) {
      document.title = `${project.title} — Case Study | Rayen Guesmi`;
    } else {
      document.title = "Project Not Found | Rayen Guesmi";
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="container mx-auto px-4 pt-32 pb-24 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {lang === "fr" ? "Projet introuvable" : "Project Not Found"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {lang === "fr"
              ? "Le projet demandé n'existe pas ou a été déplacé."
              : "The requested project does not exist or has been moved."}
          </p>
          <Button asChild>
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {lang === "fr" ? "Retour aux projets" : "Back to projects"}
            </Link>
          </Button>
        </main>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${project.title} — Rayen Guesmi`,
          text: project.description,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <Navigation />

      <main className="container mx-auto px-4 pt-28 pb-24 max-w-5xl">
        {/* Back navigation & Share */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/#projects")}
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>{lang === "fr" ? "Retour aux projets" : "Back to projects"}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">{lang === "fr" ? "Partager" : "Share"}</span>
          </Button>
        </div>

        {/* Hero Section */}
        <header className="mb-12 border-b border-border pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="outline" className="border-primary/40 text-primary">
              {project.category}
            </Badge>
            <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
              {project.status === "Completed" ? t("modal.completed") : project.status}
            </Badge>
            {project.role && (
              <Badge variant="secondary" className="bg-secondary/70">
                {project.role}
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
            {project.description}
          </p>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">{project.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{project.period}</span>
            </div>
            {project.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{project.location}</span>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            {project.githubUrl && (
              <Button asChild className="gap-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>{t("modal.viewSource")}</span>
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="outline" className="gap-2">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span>{t("modal.liveDemo")}</span>
                </a>
              </Button>
            )}
          </div>
        </header>

        {/* Video Demo Section (if available) */}
        {project.videoUrl && (
          <section className="mb-14" aria-labelledby="video-demo-heading">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Play className="h-5 w-5" />
              <h2 id="video-demo-heading" className="text-xl font-bold text-foreground">
                {lang === "fr" ? "Démonstration vidéo" : "Video Demonstration"}
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-border shadow-2xl bg-card">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
                aria-label={`${project.title} video demonstration`}
              >
                <source src={project.videoUrl} type="video/mp4" />
                {lang === "fr"
                  ? "Votre navigateur ne prend pas en charge la lecture vidéo."
                  : "Your browser does not support the video tag."}
              </video>
            </div>
          </section>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Column (2 cols) */}
          <div className="md:col-span-2 space-y-12">
            {/* Problem & Context */}
            {project.problem && (
              <section aria-labelledby="problem-heading">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  <h2 id="problem-heading" className="text-xl font-bold text-foreground">
                    {lang === "fr" ? "Contexte & Problème résolu" : "Context & Problem Solved"}
                  </h2>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 leading-relaxed text-muted-foreground space-y-3">
                  <p>{project.problem}</p>
                </div>
              </section>
            )}

            {/* Solution & Architecture */}
            {project.solution && (
              <section aria-labelledby="solution-heading">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Cpu className="h-5 w-5" />
                  <h2 id="solution-heading" className="text-xl font-bold text-foreground">
                    {lang === "fr" ? "Solution technique apportée" : "Technical Solution"}
                  </h2>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 leading-relaxed text-muted-foreground space-y-3">
                  <p>{project.solution}</p>
                </div>
              </section>
            )}

            {/* Architecture Pipeline */}
            {project.architecture && project.architecture.length > 0 && (
              <section aria-labelledby="architecture-heading">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Layers className="h-5 w-5" />
                  <h2 id="architecture-heading" className="text-xl font-bold text-foreground">
                    {lang === "fr" ? "Pipeline & Architecture" : "Pipeline & Architecture"}
                  </h2>
                </div>
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/30">
                  {project.architecture.map((step, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />
                      <div className="bg-card border border-border rounded-lg p-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                          {lang === "fr" ? `Étape ${idx + 1}` : `Step ${idx + 1}`}
                        </span>
                        <p className="text-sm text-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section aria-labelledby="features-heading">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                  <h2 id="features-heading" className="text-xl font-bold text-foreground">
                    {lang === "fr" ? "Fonctionnalités clés" : "Key Features"}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <Card key={idx} className="border-border bg-card">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <section aria-labelledby="challenges-heading">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Briefcase className="h-5 w-5" />
                  <h2 id="challenges-heading" className="text-xl font-bold text-foreground">
                    {lang === "fr" ? "Défis relevés & Solutions" : "Challenges & Overcoming Them"}
                  </h2>
                </div>
                <div className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="border border-border/80 bg-card rounded-lg p-4 text-sm text-muted-foreground flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results & Metrics */}
            {project.results && project.results.length > 0 && (
              <section aria-labelledby="results-heading">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <h2 id="results-heading" className="text-xl font-bold text-foreground">
                    {lang === "fr" ? "Résultats concrets & Impact" : "Measurable Results & Impact"}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-primary/5 border border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm font-medium text-foreground">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column (1 col) */}
          <aside className="space-y-8">
            {/* Tech Stack Card */}
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                <Cpu className="h-4 w-4 text-primary" />
                <span>{lang === "fr" ? "Stack technique" : "Tech Stack"}</span>
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-secondary/40">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Highlights */}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {lang === "fr" ? "Points forts" : "Highlights"}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Back to top or other projects */}
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() => navigate("/#projects")}
                  className="w-full text-xs"
                >
                  <ArrowLeft className="mr-2 h-3.5 w-3.5" />
                  {lang === "fr" ? "Voir tous les projets" : "View all projects"}
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
