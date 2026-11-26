import { useState, lazy, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";
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

  const handleInternshipClick = (internship: Internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  return (
    <section id="internships" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Briefcase className="h-6 w-6" />
              <span className="text-sm uppercase tracking-wide">{t("nav.internships")}</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">{t("internships.title")}</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {currentInternships.map((internship, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer hover:scale-[1.02] active:scale-[0.98] h-full"
                onClick={() => handleInternshipClick(internship)}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {internship.logoUrl ? (
                        <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                          <img
                            src={internship.logoUrl}
                            alt={internship.company}
                            width={48}
                            height={48}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {internship.role}
                        </h3>
                        <p className="text-muted-foreground">{internship.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground flex-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{internship.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                    {internship.technologies.slice(0, 3).map((tech: string, i: number) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {internship.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{internship.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
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
