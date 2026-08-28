import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";

interface CvDownloadModalProps {
  onClose: () => void;
}

const CvDownloadModal = ({ onClose }: CvDownloadModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card/90 backdrop-blur-xl border-primary/20 shadow-glow">
        <Card className="border-0 bg-transparent shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground">
              {t("cv.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <a href="/english-cv.pdf" download="Rayen-Guesmi-CV-EN.pdf" rel="noopener noreferrer">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  {t("cv.english")}
                </Button>
              </a>
              <a href="/fr-cv.pdf" download="Rayen-Guesmi-CV-FR.pdf" rel="noopener noreferrer">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  {t("cv.french")}
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default CvDownloadModal;
