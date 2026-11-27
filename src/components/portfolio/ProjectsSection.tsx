import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Github, ArrowRight, Search, Eye, RotateCcw } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project } from "./ProjectDetailsModal";
import { projects } from "@/data/portfolio";
import { projectsFr } from "@/data/portfolio.fr";
import { useLanguage } from "@/context/LanguageContext";

const ProjectDetailsModal = lazy(() => import("./ProjectDetailsModal"));

const CATEGORIES = ["All", "AI", "Full Stack", "DevOps", "Mobile"];

const ProjectsSection = () => {
  const { lang, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const currentProjects = lang === "fr" ? projectsFr : projects;

  const categoryLabels: Record<string, string> = {
    All: lang === "fr" ? "Tous" : "All",
    AI: lang === "fr" ? "IA" : "AI",
    "Full Stack": "Full Stack",
    DevOps: "DevOps",
    Mobile: "Mobile",
  };

  const filteredProjects = currentProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category.toLowerCase() === activeCategory.toLowerCase();

    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesDesc = project.description.toLowerCase().includes(query);
    const matchesTech = project.technologies.some((tech) => tech.toLowerCase().includes(query));
    const matchesCompany = project.company.toLowerCase().includes(query);

    return matchesTitle || matchesDesc || matchesTech || matchesCompany;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleResetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Briefcase className="h-6 w-6" />
              <span className="text-sm uppercase tracking-wide">{t("projects.badge")}</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">{t("projects.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Filters and Search Bar */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-10">
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-200 text-xs sm:text-sm"
                >
                  {categoryLabels[category] || category}
                </Button>
              ))}
            </div>

            {/* Tech Search input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === "fr"
                    ? "Filtrer par techno (React, Python...)"
                    : "Filter by tech (React, Python...)"
                }
                className="pl-9 h-9 text-xs sm:text-sm bg-card/60 border-border"
                aria-label="Filter projects by technology"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-card/40 border border-border/60 rounded-2xl max-w-md mx-auto">
            <p className="text-muted-foreground mb-4">
              {lang === "fr"
                ? "Aucun projet ne correspond à votre recherche."
                : "No projects match your current filters."}
            </p>
            <Button variant="outline" size="sm" onClick={handleResetFilters} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              <span>{lang === "fr" ? "Réinitialiser les filtres" : "Reset filters"}</span>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.slug || index} delay={index * 0.08}>
                <Card
                  className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer hover:scale-[1.01] active:scale-[0.99] h-full flex flex-col justify-between"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 shrink-0">
                            {project.githubUrl && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-primary"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.githubUrl, "_blank");
                                }}
                                title={t("modal.viewSource")}
                              >
                                <Github className="h-5 w-5" />
                              </Button>
                            )}
                            <Badge variant="outline" className="w-fit">
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                          <p>{project.company}</p>
                          <p>{project.period}</p>
                          {project.location && <p>{project.location}</p>}
                        </div>
                        <Badge
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className="mt-2 w-fit"
                        >
                          {project.status === "Completed" ? t("modal.completed") : project.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-foreground text-xs uppercase tracking-wider">
                          {t("projects.highlights")}
                        </h4>
                        <ul className="space-y-1">
                          {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                            <li
                              key={highlightIndex}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                              <span className="line-clamp-1">{highlight}</span>
                            </li>
                          ))}
                          {project.highlights.length > 2 && (
                            <li className="text-xs text-primary mt-1 italic">
                              + {project.highlights.length - 2}{" "}
                              {lang === "fr" ? "autres points forts" : "more highlights"}
                            </li>
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-foreground text-xs uppercase tracking-wider">
                          {t("projects.technologies")}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 5).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 5 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 5}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-border flex items-center justify-between text-xs mt-4">
                      <span className="inline-flex items-center gap-1 text-muted-foreground group-hover:text-foreground transition-colors">
                        <Eye className="h-3.5 w-3.5" />
                        <span>{lang === "fr" ? "Aperçu rapide" : "Quick preview"}</span>
                      </span>

                      {project.slug && (
                        <Link
                          to={`/projects/${project.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline hover:translate-x-0.5 transition-transform"
                        >
                          <span>{lang === "fr" ? "Étude de cas" : "Case study"}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <ProjectDetailsModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default ProjectsSection;
