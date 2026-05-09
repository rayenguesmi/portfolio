import { Briefcase, BarChart2, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { projects, internships, certifications } from "@/data/portfolio";

const CountUp = ({ end, duration = 1800 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
};

const PortfolioStats = () => {
  const completedProjects = projects.filter((p) => p.status === "Completed").length;

  const stats = [
    { label: "Projects", value: completedProjects, icon: Briefcase },
    { label: "Internships",  value: internships.length,    icon: BarChart2 },
    { label: "Certifications", value: certifications.length, icon: Award },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mt-2">
      {stats.map(({ label, value, icon: Icon }, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-colors"
        >
          <Icon className="h-4 w-4 text-primary mb-0.5" />
          <span className="text-2xl font-extrabold text-foreground leading-none">
            <CountUp end={value} />
          </span>
          <p className="text-xs text-muted-foreground text-center leading-tight">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioStats;
