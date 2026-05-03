import { Badge } from "@/components/ui/badge";
import { Languages } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const LanguagesSection = () => {
  const skills = [
    "Python", "Java", "PHP", "C",
    "Angular", "React", "Flutter", "TypeScript",
    "Spring Boot", "FastAPI", "Symfony", ".NET",
    "TensorFlow", "scikit-learn", "LangChain", "Pandas",
    "MySQL", "MongoDB", "H2",
    "Docker", "Jenkins", "Git/GitHub", "Selenium", "pytest",
    "Jira", "Trello", "Agile/Scrum",
    "English B2", "French B2"
  ];

  return (
    <section id="languages" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Languages className="h-6 w-6" />
              <span className="text-sm uppercase tracking-wide">Technical Skills</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Skills & Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build intelligent and efficient systems
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 0.05} direction="up">
              <Badge variant="outline" className="text-lg p-4 hover:border-primary/50 transition-colors">
                {skill}
              </Badge>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
