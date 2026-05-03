import { Briefcase, Headphones, Bot } from "lucide-react";
import { Certification } from "@/components/portfolio/CertificationDetailsModal";
import { Internship } from "@/components/portfolio/InternshipDetailsModal";
import { Project } from "@/components/portfolio/ProjectDetailsModal";

export const onlineCourses: { name: string; provider: string; year: string }[] = [];

export const education = [
  {
    degree: "Engineering Program in Software Engineering",
    institution: "ESPRIT – Private Higher School of Engineering and Technology",
    location: "Tunis, Tunisia",
    period: "Sept 2023 – Dec 2025",
    status: "In Progress",
    description: "Final-year software engineering student focused on AI, automation, DevOps, and full-stack web development. Building intelligent and efficient systems that enhance business performance.",
    coursework: ["Software Architecture", "AI & Machine Learning", "DevOps", "Web Development", "Database Systems", "Agile/Scrum"],
    achievements: ["PFE Project: AutoTest – AI-Powered Automated Testing Platform", "Multiple internships in web development and AI integration", "ISO 9001 quality management project"]
  },
  {
    degree: "Preparatory Program – Mathematics and Physics",
    institution: "FSM Monastir University",
    location: "Monastir, Tunisia",
    period: "Sept 2020 – June 2023",
    status: "Graduated",
    description: "Rigorous preparatory program in mathematics and physics preparing for engineering school entrance.",
    coursework: ["Mathematics", "Physics", "Computer Science Fundamentals", "Engineering Principles", "Problem Solving"],
    achievements: ["Strong STEM foundation", "Admitted to ESPRIT engineering program"]
  }
];

export const projects: Project[] = [
  {
    title: "AutoTest – AI-Powered Automated Testing Platform",
    company: "PFE – ESPRIT",
    period: "2025",
    location: "Tunis, Tunisia",
    description: "An intelligent end-to-end test automation pipeline that generates and executes Selenium test scripts automatically from plain Markdown specifications using LLMs. Users write specs in Markdown → LLM #1 (SpecParser) converts them into structured JSON → LLM #2 (TestCaseGenerator) generates positive, negative & edge case test cases → DOMScanner scans the real website with headless Chrome to extract true CSS selectors → SeleniumGenerator produces ready-to-run pytest scripts → TestRunner executes tests and captures JUnit XML results → ReportGenerator produces a full HTML + JSON report with pass/fail per feature. React frontend polls results every 2s via Node.js webhook and MongoDB.",
    icon: Bot,
    category: "AI",
    technologies: ["Python", "FastAPI", "React", "Node.js", "MongoDB", "Selenium", "pytest", "LangChain", "Groq API", "Ollama", "Jinja2", "Docker"],
    highlights: [
      "Multi-LLM support: Groq (llama-3.3-70b), Ollama (qwen2.5-coder), OpenAI, Anthropic",
      "Automatic DOM analysis with Selenium headless Chrome",
      "Zero-manual-code test generation from Markdown specs",
      "Full pipeline orchestration via FastAPI",
      "Professional HTML reports with feature-level pass/fail status"
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "TimeForge – Intelligent Time & Goal Management",
    company: "Academic Project",
    period: "Feb – May 2025",
    location: "Tunis, Tunisia",
    description: "A platform for companies to manage tasks, projects, goals, and teams. Features JWT authentication, REST API, and PDF report generation for enterprise use.",
    icon: Briefcase,
    category: "Dev",
    technologies: ["Spring Boot", "Angular", "MySQL", "REST API", "JWT Auth", "Bootstrap", "iTextPDF"],
    highlights: ["Task and project management for teams", "JWT authentication", "PDF report export"],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "University Dormitory Management Platform",
    company: "Academic Project",
    period: "May – Jul 2025",
    location: "Tunis, Tunisia",
    description: "Web platform for student room reservations, request handling, and monitoring in university dormitories. Secure access with Spring Security.",
    icon: Briefcase,
    category: "Dev",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security", "Bootstrap"],
    highlights: ["Room reservation system", "Request handling & monitoring", "Spring Security access control"],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "FitMe – Fitness Management Application",
    company: "Academic Project",
    period: "Oct – Dec 2024",
    location: "Tunis, Tunisia",
    description: "Personalized fitness application for coaches offering customized workout plans, nutrition tracking, and a supplement store. Built with Symfony.",
    icon: Headphones,
    category: "Dev",
    technologies: ["Symfony", "Twig", "MySQL", "Bootstrap"],
    highlights: ["Personalized workout & nutrition plans", "Supplement store integration", "Coach-client management"],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "Neo TM Application – AI Module",
    company: "Neolians",
    period: "Jun – Aug 2025",
    location: "Tunis, Tunisia",
    description: "AI-powered professional web application with Keycloak SSO/OAuth2 authentication. Integrated AI modules for data analysis and automation into an enterprise platform.",
    icon: Bot,
    category: "AI",
    technologies: ["Java", "Spring Boot", "Angular", "Python", "Keycloak", "AI"],
    highlights: ["Keycloak SSO/OAuth2 authentication", "AI data analysis modules", "Full-stack enterprise integration"],
    status: "Completed",
    images: []
  }
];

export const internships: Internship[] = [
  {
    company: "Tunisie Telecom",
    role: "PFE – AUTOTEST: AI-POWERED AUTOMATED TESTING PLATFORM",
    period: "2025",
    location: "Tunis, Tunisia",
    description: "Final-year engineering project (PFE). Built an intelligent end-to-end test automation pipeline that generates and executes Selenium test scripts automatically from plain Markdown specifications using LLMs. The pipeline parses specs, generates test cases, scans the DOM with headless Chrome, generates pytest scripts, executes them, and produces full HTML/JSON reports. React frontend polls results in real time via Node.js webhook and MongoDB.",
    logoUrl: "/images-removebg-preview (1).png",
    companyUrl: "",
    technologies: ["Python", "FastAPI", "React", "Node.js", "MongoDB", "Selenium", "pytest", "LangChain", "Groq API", "Ollama", "Docker"],
    certificateUrl: ""
  },
  {
    company: "Neolians",
    role: "INTERN – DEVELOPMENT & AI ON NEO TM APPLICATION",
    period: "June 2025 – August 2025",
    location: "Rue du Riyal, Tunis, Tunisia",
    description: "Developed Front-End and Back-End features for the Neo TM application. Integrated AI modules for data analysis and process automation. Implemented Keycloak for Single Sign-On (SSO) and OAuth2 authentication in an enterprise environment.",
    logoUrl: "/download__4_-removebg-preview.png",
    companyUrl: "",
    technologies: ["Java", "Spring Boot", "Angular", "Python", "AI", "Keycloak"],
    certificateUrl: ""
  },
  {
    company: "EnerP",
    role: "INTERN – PHOTOVOLTAIC SYSTEM MANAGEMENT APPLICATION",
    period: "June 2024 – August 2024",
    location: "Ben Arous, Tunisia",
    description: "Developed a web application for photovoltaic system management and performance analysis. Enabled monitoring of solar panel data and production metrics in real time.",
    logoUrl: "/download-removebg-preview.png",
    companyUrl: "",
    technologies: ["Web Development", "Data Analysis", "Performance Monitoring"],
    certificateUrl: ""
  },
  {
    company: "Amen Bank",
    role: "INTERN – VOIP OPTIMIZATION",
    period: "April 2024 – June 2024",
    location: "Tunis, Tunisia",
    description: "Analyzed and optimized VoIP communication systems in a banking environment. Identified bottlenecks and implemented improvements to enhance call quality and network efficiency.",
    logoUrl: "/download-removebg-preview (1).png",
    companyUrl: "",
    technologies: ["VoIP", "Network Optimization", "Telecommunications"],
    certificateUrl: ""
  }
];

export const certifications: Certification[] = [
  {
    name: "Building Transformer-Based NLP Applications",
    issuer: "NVIDIA",
    date: "November 2025",
    status: "Active",
    credentialId: "ofmTRY6zTVWNwizF0hz3Tw",
    description: "Building NLP applications using transformer architectures with NVIDIA deep learning tools.",
    skills: ["NLP", "Transformers", "BERT", "Deep Learning", "Python"],
    url: "https://learn.nvidia.com/certificates?id=ofmTRY6zTVWNwizF0hz3Tw",
    category: "AI",
    issuerLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  },
  {
    name: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    date: "November 2025",
    status: "Active",
    credentialId: "VbS_9TjYQHqbcakAGyr2-Q",
    description: "Implementing AI models to detect anomalies in industrial and business data.",
    skills: ["AI", "Anomaly Detection", "Deep Learning", "Industrial IoT"],
    url: "https://learn.nvidia.com/certificates?id=VbS_9TjYQHqbcakAGyr2-Q",
    category: "AI",
    issuerLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  },
  {
    name: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "January 2025",
    status: "Active",
    credentialId: "VJCICRl3RHiQH4qyjIU3Cw",
    description: "Core deep learning concepts and practical implementation using Python and NVIDIA tools.",
    skills: ["Deep Learning", "Neural Networks", "Python", "AI Development"],
    url: "https://learn.nvidia.com/certificates?id=VJCICRl3RHiQH4qyjIU3Cw",
    category: "AI",
    issuerLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  },
  {
    name: "Advanced SQL",
    issuer: "365 Data Science",
    date: "November 2024",
    status: "Active",
    credentialId: "CC-73BAC5A43D",
    description: "Advanced SQL techniques for data analysis, query optimization, and database management.",
    skills: ["SQL", "Database Management", "Query Optimization", "Data Analysis"],
    url: "https://learn.365datascience.com/certificates/CC-73BAC5A43D/",
    category: "Dev",
    issuerLogoUrl: ""
  },
  {
    name: "Introduction to Jupyter",
    issuer: "365 Data Science",
    date: "November 2024",
    status: "Active",
    credentialId: "CC-67627038E0",
    description: "Using Jupyter Notebooks for data science, machine learning, and interactive computing.",
    skills: ["Jupyter", "Python", "Data Science", "Interactive Computing"],
    url: "https://learn.365datascience.com/certificates/CC-67627038E0/",
    category: "Dev",
    issuerLogoUrl: ""
  },
  {
    name: "Python Programmer Bootcamp",
    issuer: "365 Data Science",
    date: "November 2024",
    status: "Active",
    credentialId: "CC-5A3EEC3050",
    description: "Comprehensive Python programming from fundamentals to advanced concepts for data science.",
    skills: ["Python", "Programming", "Data Structures", "OOP"],
    url: "https://learn.365datascience.com/certificates/CC-5A3EEC3050/",
    category: "Dev",
    issuerLogoUrl: ""
  },
  {
    name: "Intro to NLP for AI",
    issuer: "365 Data Science",
    date: "November 2024",
    status: "Active",
    credentialId: "CC-F5B7A92840",
    description: "Introduction to Natural Language Processing techniques and their application in AI systems.",
    skills: ["NLP", "Text Processing", "AI", "Python"],
    url: "https://learn.365datascience.com/certificates/CC-F5B7A92840/",
    category: "AI",
    issuerLogoUrl: ""
  },
  {
    name: "Deep Learning with TensorFlow 2",
    issuer: "365 Data Science",
    date: "November 2024",
    status: "Active",
    credentialId: "CC-3A90893029",
    description: "Building and training deep learning models using TensorFlow 2 for real-world AI applications.",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Python"],
    url: "https://learn.365datascience.com/certificates/CC-3A90893029/",
    category: "AI",
    issuerLogoUrl: ""
  }
];
