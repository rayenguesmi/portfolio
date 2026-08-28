import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Building2, ChevronRight } from "lucide-react";
import { education } from "@/data/portfolio";
import { educationFr } from "@/data/portfolio.fr";
import { useLanguage } from "@/context/LanguageContext";

const EducationSection = () => {
  const { lang, t } = useLanguage();
  const currentEducation = lang === "fr" ? educationFr : education;

  return (
    <section id="education" className="py-24 bg-surface-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm uppercase tracking-wide">{t("education.badge")}</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">{t("education.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("education.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          {currentEducation.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <Card className="group relative overflow-hidden bg-card/40 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Status indicator for mobile */}
                    <div className="md:hidden">
                      <Badge variant={edu.status === "Graduated" || edu.status === "Diplômé" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-primary/70" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary/70" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary/70" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-6 pt-4">
                        {edu.coursework && (
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                              <ChevronRight className="h-4 w-4 text-primary" />
                              {t("education.coursework")}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, i) => (
                                <Badge key={i} variant="outline" className="bg-background/50 hover:bg-background">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {edu.achievements && (
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                              <ChevronRight className="h-4 w-4 text-primary" />
                              {t("education.achievements")}
                            </h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Status indicator for desktop */}
                    <div className="hidden md:block shrink-0">
                      <Badge 
                        variant={edu.status === "Graduated" || edu.status === "Diplômé" ? "default" : "secondary"}
                        className="shadow-sm"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;