import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Server, Code, Bot, Database, GitBranch, BarChart2 } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

interface SkillsMatrixModalProps {
  onClose: () => void;
}

const roles = [
  {
    name: "Foundational",
    icon: Code,
    skills: [
      { subject: 'Python', A: 85, fullMark: 100 },
      { subject: 'SQL', A: 80, fullMark: 100 },
      { subject: 'OOP', A: 85, fullMark: 100 },
      { subject: 'Git', A: 80, fullMark: 100 },
      { subject: 'REST APIs', A: 85, fullMark: 100 },
      { subject: 'Algorithms', A: 75, fullMark: 100 },
    ],
  },
  {
    name: "Frontend",
    icon: Code,
    skills: [
      { subject: 'Angular', A: 80, fullMark: 100 },
      { subject: 'React', A: 75, fullMark: 100 },
      { subject: 'Flutter', A: 65, fullMark: 100 },
      { subject: 'TypeScript', A: 75, fullMark: 100 },
      { subject: 'HTML/CSS', A: 80, fullMark: 100 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { subject: 'Spring Boot', A: 85, fullMark: 100 },
      { subject: 'FastAPI', A: 80, fullMark: 100 },
      { subject: 'Symfony', A: 75, fullMark: 100 },
      { subject: '.NET', A: 60, fullMark: 100 },
      { subject: 'Node.js', A: 70, fullMark: 100 },
      { subject: 'Keycloak', A: 70, fullMark: 100 },
    ],
  },
  {
    name: "AI / ML",
    icon: Bot,
    skills: [
      { subject: 'TensorFlow', A: 75, fullMark: 100 },
      { subject: 'scikit-learn', A: 80, fullMark: 100 },
      { subject: 'LangChain', A: 75, fullMark: 100 },
      { subject: 'NLP', A: 70, fullMark: 100 },
      { subject: 'Deep Learning', A: 70, fullMark: 100 },
      { subject: 'Pandas', A: 80, fullMark: 100 },
    ],
  },
  {
    name: "DevOps",
    icon: GitBranch,
    skills: [
      { subject: 'Docker', A: 80, fullMark: 100 },
      { subject: 'Jenkins', A: 75, fullMark: 100 },
      { subject: 'GitHub Actions', A: 70, fullMark: 100 },
      { subject: 'Selenium', A: 80, fullMark: 100 },
      { subject: 'pytest', A: 80, fullMark: 100 },
      { subject: 'CI/CD', A: 70, fullMark: 100 },
    ],
  },
  {
    name: "Project Mgmt",
    icon: BarChart2,
    skills: [
      { subject: 'Agile/Scrum', A: 80, fullMark: 100 },
      { subject: 'Jira', A: 80, fullMark: 100 },
      { subject: 'Trello', A: 85, fullMark: 100 },
      { subject: 'ISO 9001', A: 70, fullMark: 100 },
      { subject: 'Documentation', A: 75, fullMark: 100 },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { subject: 'MySQL', A: 85, fullMark: 100 },
      { subject: 'MongoDB', A: 75, fullMark: 100 },
      { subject: 'H2', A: 70, fullMark: 100 },
      { subject: 'PostgreSQL', A: 65, fullMark: 100 },
      { subject: 'Query Optim.', A: 75, fullMark: 100 },
    ],
  },
];

const SkillsMatrixModal: React.FC<SkillsMatrixModalProps> = ({ onClose }) => {
  const [selectedRole, setSelectedRole] = useState(roles[3]); // Default to AI/ML
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl h-[90vh] flex flex-col relative">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl text-primary">Skills Matrix</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col md:flex-row gap-6 mt-6 overflow-hidden">
          {/* Left Panel: Role Selector */}
          <div className="w-full md:w-1/4 grid grid-cols-2 gap-2 md:flex md:flex-col md:space-y-2 overflow-y-auto max-h-[20vh] md:max-h-none shrink-0">
            {roles.map((role) => (
              <Button
                key={role.name}
                variant={selectedRole.name === role.name ? "default" : "outline"}
                className="w-full justify-start gap-2 text-xs md:text-sm h-auto py-2"
                onClick={() => setSelectedRole(role)}
              >
                <role.icon className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                <span className="truncate">{role.name}</span>
              </Button>
            ))}
          </div>

          {/* Right Panel: Radar Chart */}
          <div className="w-full md:w-3/4 h-full min-h-[300px] flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius={isMobile ? "60%" : "80%"} data={selectedRole.skills}>
                <PolarGrid stroke="hsl(var(--muted-foreground) / 0.2)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: isMobile ? 10 : 14 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name={selectedRole.name} dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.4)" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsMatrixModal;
