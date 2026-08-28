import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  category: string;
  status: string;
  credentialId: string;
  url: string;
  description: string;
  skills: string[];
  issuerLogoUrl?: string;
  certificateImage?: string;
}

interface CertificationDetailsModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationDetailsModal = ({ certification, isOpen, onClose }: CertificationDetailsModalProps) => {
  const { t } = useLanguage();
  if (!certification) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-2xl font-bold mb-2">
                {certification.name}
              </DialogTitle>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  {certification.issuerLogoUrl && (
                    <img 
                      src={certification.issuerLogoUrl} 
                      alt={certification.issuer} 
                      className="h-5 w-auto object-contain"
                    />
                  )}
                  <span className="font-semibold text-foreground">{certification.issuer}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {certification.date}
                </div>
              </div>
            </div>
            <Badge 
              variant={certification.status === "Active" || certification.status === "Actif" ? "default" : "secondary"}
              className={`shrink-0 ${certification.status === "Active" || certification.status === "Actif" ? "bg-primary text-primary-foreground" : ""}`}
            >
              <CheckCircle className="h-3 w-3 mr-1" />
              {certification.status}
            </Badge>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-8">
            {certification.certificateImage && (
              <div className="w-full bg-muted/30 rounded-lg p-4 border flex justify-center">
                <img 
                  src={certification.certificateImage} 
                  alt={`${certification.name} Certificate`}
                  className="max-h-[300px] w-auto object-contain rounded-md shadow-sm"
                />
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6 bg-secondary/30 rounded-lg p-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Credential ID</p>
                <p className="font-mono text-sm text-foreground break-all">{certification.credentialId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("projects.category")}</p>
                <Badge variant="outline">{certification.category}</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">{t("certs.about")}</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {certification.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">{t("skills.title")}</h3>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-muted hover:bg-muted">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-4 border-t">
              <Button variant="outline" onClick={onClose}>
                {t("common.close")}
              </Button>
              <Button 
                className="gap-2"
                onClick={() => window.open(certification.url, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                {t("certs.verify")}
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationDetailsModal;
