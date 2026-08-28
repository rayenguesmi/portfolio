import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award, ExternalLink, Calendar, CheckCircle, Eye,
  Cpu, Code, Cloud, Server, Database, Flag, Blocks
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import CertificationDetailsModal, { Certification } from "./CertificationDetailsModal";
import { useLanguage } from "@/context/LanguageContext";

const CertificationsSection = () => {
  const { lang, t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications: Certification[] = [
    {
      name: "Building RAG Agents with LLMs",
      issuer: "NVIDIA",
      date: "August 2024",
      category: "AI",
      status: lang === "fr" ? "Actif" : "Active",
      credentialId: "c28b776263b64bc2aab8bbef70b69472",
      url: "https://courses.nvidia.com/certificates/c28b776263b64bc2aab8bbef70b69472/",
      description: lang === "fr" 
        ? "Apprentissage des techniques avancées de génération augmentée par la récupération (RAG) avec des LLM."
        : "Learned advanced Retrieval-Augmented Generation (RAG) techniques with LLMs.",
      skills: ["LLMs", "RAG", "LangChain", "Vector Databases", "Python"],
      certificateImage: "/WhatsApp Image 2024-09-02 at 01.40.48_bfa855c3.jpg"
    },
    {
      name: "Building Video AI Applications at the Edge on Jetson Nano",
      issuer: "NVIDIA",
      date: "June 2024",
      category: "AI",
      status: lang === "fr" ? "Actif" : "Active",
      credentialId: "bb71e0653d104ddfa0c4270b24dc6c96",
      url: "https://courses.nvidia.com/certificates/bb71e0653d104ddfa0c4270b24dc6c96/",
      description: lang === "fr" 
        ? "Développement d'applications d'IA vidéo à la périphérie à l'aide de Jetson Nano."
        : "Developing video AI applications at the edge using Jetson Nano.",
      skills: ["Computer Vision", "Edge AI", "Jetson Nano", "TensorRT", "Python"],
      certificateImage: "/Screenshot 2024-06-25 093010.png"
    },
    {
      name: "Getting Started with Deep Learning",
      issuer: "NVIDIA",
      date: "May 2024",
      category: "AI",
      status: lang === "fr" ? "Actif" : "Active",
      credentialId: "e909a7b9739546d1bf1e2f5b828efeb6",
      url: "https://courses.nvidia.com/certificates/e909a7b9739546d1bf1e2f5b828efeb6/",
      description: lang === "fr" 
        ? "Introduction aux concepts fondamentaux de l'apprentissage profond."
        : "Introduction to fundamental deep learning concepts.",
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Keras", "Python"],
      certificateImage: "/Screenshot 2024-06-25 093121.png"
    },
    {
      name: "Scientific Computing with Python",
      issuer: "freeCodeCamp",
      date: "August 2023",
      category: "Dev",
      status: lang === "fr" ? "Actif" : "Active",
      credentialId: "fccf89bf907-9204-49fc-af0d-c0451e5e40ee",
      url: "https://freecodecamp.org/certification/fccf89bf907-9204-49fc-af0d-c0451e5e40ee/scientific-computing-with-python-v7",
      description: lang === "fr" 
        ? "Programmation Python avec des structures de données avancées, l'analyse de données et le calcul scientifique."
        : "Python programming focusing on advanced data structures, data analysis, and scientific computing.",
      skills: ["Python", "Data Analysis", "Algorithms", "Data Structures"],
      certificateImage: "/free.jpg"
    }
  ];

  const handleOpenModal = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const getProviderIcon = (issuer: string) => {
    const normalizedIssuer = issuer.toLowerCase();
    if (normalizedIssuer.includes("nvidia")) return <Cpu className="h-5 w-5" />;
    if (normalizedIssuer.includes("cisco")) return <Server className="h-5 w-5" />;
    if (normalizedIssuer.includes("python")) return <Code className="h-5 w-5" />;
    if (normalizedIssuer.includes("aws")) return <Cloud className="h-5 w-5" />;
    if (normalizedIssuer.includes("ibm")) return <Server className="h-5 w-5" />;
    if (normalizedIssuer.includes("oracle")) return <Database className="h-5 w-5" />;
    if (normalizedIssuer.includes("tryhackme")) return <Flag className="h-5 w-5" />;
    if (normalizedIssuer.includes("hashgraph")) return <Blocks className="h-5 w-5" />;
    if (normalizedIssuer.includes("365")) return <Cpu className="h-5 w-5" />;
    return <Award className="h-5 w-5" />;
  };

  const categories = ["All", "Dev", "AI"];

  return (
    <section id="certifications" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Award className="h-6 w-6" />
              <span className="text-sm uppercase tracking-wide">{t("certs.badge")}</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">{t("certs.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("certs.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <Tabs defaultValue="All" className="w-full">
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mb-10">
              <TabsList className="bg-secondary/50 p-1">
                {categories.map((category) => {
                  const displayCategory = category === "All" ? t("projects.all") : category;
                  return (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                    >
                      {displayCategory}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>
          </ScrollReveal>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications
                  .filter(cert => category === "All" || cert.category === category)
                  .map((cert, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow flex flex-col h-full">
                        <CardHeader>
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2 flex-1 mr-2">
                                {cert.name}
                              </CardTitle>
                              <div className="flex flex-col items-end gap-2">
                                <Badge 
                                  variant={cert.status === "Active" || cert.status === "Actif" ? "default" : "secondary"}
                                  className={`shrink-0 ${cert.status === "Active" || cert.status === "Actif" ? "bg-primary text-primary-foreground" : ""}`}
                                >
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  {cert.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                              <div className="p-1 bg-primary/10 rounded-md h-8 w-8 flex items-center justify-center shrink-0">
                                {cert.issuerLogoUrl ? (
                                  <img 
                                    src={cert.issuerLogoUrl} 
                                    alt={cert.issuer} 
                                    className="max-h-full max-w-full object-contain"
                                  />
                                ) : (
                                  getProviderIcon(cert.issuer)
                                )}
                              </div>
                              {cert.issuer}
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4 flex-1 flex flex-col">
                          <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{cert.description}</p>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {cert.date}
                            </div>
                            <div className="truncate max-w-[150px]" title={cert.credentialId}>
                              ID: {cert.credentialId}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-[10px]">
                                {skill}
                              </Badge>
                            ))}
                            {cert.skills.length > 3 && (
                              <Badge variant="outline" className="text-[10px]">
                                +{cert.skills.length - 3}
                              </Badge>
                            )}
                          </div>

                          <div className="pt-2 mt-auto grid grid-cols-2 gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="w-full"
                              onClick={() => handleOpenModal(cert)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              {t("modal.viewDetails")}
                            </Button>
                            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="w-full">
                              <Button variant="outline" size="sm" className="w-full group">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                {t("certs.verify")}
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <CertificationDetailsModal 
        certification={selectedCert} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default CertificationsSection;