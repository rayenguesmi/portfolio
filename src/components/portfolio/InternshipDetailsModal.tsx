import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface Internship {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  logoUrl: string;
  companyUrl: string;
  technologies: string[];
  certificateUrl?: string;
  type?: "experience" | "internship";
}

interface InternshipDetailsModalProps {
  internship: Internship | null;
  isOpen: boolean;
  onClose: () => void;
}

const InternshipDetailsModal = ({ internship, isOpen, onClose }: InternshipDetailsModalProps) => {
  const { t } = useLanguage();
  if (!internship) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-6 pb-2 shrink-0">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-muted/40 p-2 flex items-center justify-center shrink-0">
              {internship.logoUrl ? (
                <img
                  src={internship.logoUrl}
                  alt={`${internship.company} logo`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Building2 className="w-8 h-8 text-primary" />
              )}
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">{internship.company}</DialogTitle>
              {internship.companyUrl && (
                <a
                  href={internship.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1 mt-1"
                >
                  Visit Company <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 p-6 pt-4">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6 bg-secondary/30 rounded-lg p-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("internship.role")}</p>
                <p className="font-semibold text-foreground">{internship.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("internship.period")}</p>
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {internship.period}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-muted-foreground mb-1">{t("internship.location")}</p>
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {internship.location}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">{t("internship.about")}</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {internship.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">{t("internship.technologies")}</h3>
              <div className="flex flex-wrap gap-2">
                {internship.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-background/50 hover:bg-background"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {internship.certificateUrl && (
              <div className="pt-4 flex justify-center">
                <Button
                  className="gap-2"
                  onClick={() => window.open(internship.certificateUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("internship.viewCert")}
                </Button>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default InternshipDetailsModal;
