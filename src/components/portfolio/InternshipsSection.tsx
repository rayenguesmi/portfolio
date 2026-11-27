import { useState, lazy, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase, GraduationCap, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Internship } from "./InternshipDetailsModal";
import { internships } from "@/data/portfolio";
import { internshipsFr } from "@/data/portfolio.fr";
import { useLanguage } from "@/context/LanguageContext";

const InternshipDetailsModal = lazy(() => import("./InternshipDetailsModal"));

const InternshipsSection = () => {
  const { lang, t } = useLanguage();
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentInternships = lang === "fr" ? internshipsFr : internships;

  const experiences = currentInternships.filter((i) => i.type === "experience");
  const stages = currentInternships.filter((i) => i.type !== "experience");

  const handleInternshipClick = (internship: Internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  const LogoBlock = ({ item }: { item: Internship }) => (
    <div className="w-14 h-14 rounded-xl bg-white/5 border border-border p-1.5 flex items-center justify-center shrink-0">
      {item.logoUrl ? (
        <img
          src={item.logoUrl}
          alt={`${item.company} logo`}
          width={52}
          height={52}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
        />
      ) : (
        <Building2 className="h-6 w-6 text-primary" />
      )}
    </div>
  );

  return (
    <section id="internships" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Briefcase className="h-6 w-6" />
              <span className="text-sm uppercase tracking-wide">{t("nav.internships")}</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">{t("internships.title")}</h2>
          </div>
        </ScrollReveal>

        {/* ── Professional Experience ── */}
        {experiences.length > 0 && (
          <div className="max-w-5xl mx-auto mb-14">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  {t("internships.section.exp")}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {experiences.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card
                    className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                    onClick={() => handleInternshipClick(item)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <LogoBlock item={item} />

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <div>
                              <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                                {item.company}
                              </h4>
                              <p className="text-sm text-primary font-semibold uppercase tracking-wider mt-0.5">
                                {item.role}
                              </p>
                            </div>
                            <Badge className="w-fit shrink-0 bg-primary/15 text-primary border-primary/30 text-xs font-semibold">
                              CDI · En poste
                            </Badge>
                          </div>

                          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5 shrink-0" />
                              {item.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 shrink-0" />
                              {item.location}
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.slice(0, 6).map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {item.technologies.length > 6 && (
                              <Badge variant="outline" className="text-xs">
                                +{item.technologies.length - 6}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* ── Internships ── */}
        {stages.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold text-foreground">
                  {t("internships.section.int")}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-5">
              {stages.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <Card
                    className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer hover:scale-[1.02] active:scale-[0.98] h-full"
                    onClick={() => handleInternshipClick(item)}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Logo + role header */}
                      <div className="flex items-start gap-3 mb-4">
                        <LogoBlock item={item} />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-2">
                            {item.role}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-0.5">{item.company}</p>
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="space-y-1.5 mb-4 text-sm text-muted-foreground flex-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 shrink-0" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border mt-auto">
                        {item.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {item.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <InternshipDetailsModal
            internship={selectedInternship}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default InternshipsSection;
