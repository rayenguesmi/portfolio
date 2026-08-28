import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Globe, Users, Zap, BookOpen, Cpu } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const MotivationSection = () => {
  const motivations = [
    {
      icon: Cpu,
      title: "Building Intelligent Systems",
      description: "I'm driven by the potential of AI and automation to transform how businesses operate. Every system I build is an opportunity to make processes smarter, faster, and more reliable."
    },
    {
      icon: Lightbulb,
      title: "Solving Real-World Problems",
      description: "Software engineering is about creating tangible impact. From automating test pipelines to managing photovoltaic systems, I thrive on turning complex problems into elegant solutions."
    },
    {
      icon: Globe,
      title: "DevOps & Continuous Delivery",
      description: "I believe great software is delivered, not just written. CI/CD pipelines, Docker, and Jenkins allow me to ship reliable systems and iterate fast — quality at every step of the process."
    },
    {
      icon: Users,
      title: "Collaboration & Agile Teams",
      description: "The best products are built by great teams. I'm passionate about Agile practices, clear communication, and contributing to a culture of continuous improvement and shared ownership."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Continuous Learning",
      description: "Technology evolves rapidly. I stay current through NVIDIA deep learning certifications, data science courses, and hands-on projects that push the boundaries of what I know."
    },
    {
      icon: Heart,
      title: "Quality & Excellence",
      description: "Having worked on ISO 9001 quality management systems, I understand that excellence is a process. I apply the same rigor to my code: clean, testable, and maintainable."
    },
    {
      icon: Zap,
      title: "Automation First",
      description: "My PFE project AutoTest embodies my core belief: if a task is repetitive, automate it. I look for opportunities to remove manual work and free up human potential."
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "I believe in open collaboration and documentation. Good code tells a story, and good engineers make knowledge accessible to their teammates and the wider community."
    }
  ];

  const personalStory = {
    title: "My Journey Into Software Engineering & AI",
    content: `My passion for software engineering started during my preparatory studies in Mathematics and Physics at FSM Monastir. It was there that I realized I didn't just want to understand how systems worked — I wanted to build them.

Joining ESPRIT's engineering program gave me the foundation to turn that ambition into reality. Through projects ranging from full-stack web applications to AI-powered testing pipelines, I discovered my true interest: the intersection of intelligent automation, DevOps, and modern software architecture.

My final-year project crystallized this passion. Building an intelligent pipeline that takes plain Markdown specifications and automatically generates, executes, and reports on Selenium tests felt like the future of software quality engineering. That project taught me that the most impactful tools are the ones that make other engineers more productive.

As a Software Engineer, I bring this mindset to everything I build — whether it's integrating Keycloak for enterprise SSO, designing scalable REST APIs, implementing LLM-powered pipelines, or shipping services with Docker and CI/CD. I am here to build software that matters.`
  };


  return (
    <section id="motivation" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Heart className="h-6 w-6" />
              <span className="text-sm uppercase tracking-wide">What Drives Me</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Motivation & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passion and principles that guide my engineering journey
            </p>
          </div>
        </ScrollReveal>

        {/* Personal Story */}
        <ScrollReveal delay={0.2}>
          <Card className="mb-16 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{personalStory.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg prose-invert max-w-none">
                {personalStory.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* What Motivates Me */}
        <div className="mb-16">
          <ScrollReveal delay={0.3}>
            <h3 className="text-2xl font-bold text-center mb-8">What Motivates Me</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {motivations.map((motivation, index) => (
              <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <motivation.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {motivation.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {motivation.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <ScrollReveal delay={0.4}>
            <h3 className="text-2xl font-bold text-center mb-8">Core Values</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Quote */}
        <ScrollReveal delay={0.6}>
          <Card className="mt-16 bg-gradient-dark border-border text-center">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-foreground mb-4">
                "The best automation is the one you build once and trust forever. Build it right, test it thoroughly, ship it confidently."
              </blockquote>
              <cite className="text-primary font-semibold">- My Engineering Philosophy</cite>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MotivationSection;
