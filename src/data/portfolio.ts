import { Briefcase, Headphones, Bot } from "lucide-react";
import { Certification } from "@/components/portfolio/CertificationDetailsModal";
import { Internship } from "@/components/portfolio/InternshipDetailsModal";
import { Project } from "@/components/portfolio/ProjectDetailsModal";

export const onlineCourses: { name: string; provider: string; year: string }[] = [];

export const education = [
  {
    degree: "Engineering Degree in Software Engineering",
    institution: "ESPRIT – Private Higher School of Engineering and Technology",
    location: "Tunis, Tunisia",
    period: "Sept 2022 – June 2025",
    status: "Graduated",
    description: "Software Engineering graduate with a focus on AI, automation, DevOps, and full-stack web development. Built intelligent and scalable systems combining strong software engineering practices with Artificial Intelligence.",
    coursework: ["Software Architecture", "AI & Machine Learning", "DevOps", "Web Development", "Database Systems", "Agile/Scrum"],
    achievements: ["PFE Project: AutoTest – AI-Powered Automated Testing Platform", "Multiple internships in web development and AI integration", "NVIDIA Deep Learning Certifications"]
  },
  {
    degree: "Preparatory Program – Mathematics and Physics",
    institution: "FSM Monastir University",
    location: "Monastir, Tunisia",
    period: "Sept 2020 – June 2022",
    status: "Graduated",
    description: "Rigorous preparatory program in mathematics and physics, building strong STEM foundations before admission to engineering school.",
    coursework: ["Mathematics", "Physics", "Computer Science Fundamentals", "Engineering Principles", "Problem Solving"],
    achievements: ["Strong STEM foundation", "Admitted to ESPRIT engineering program"]
  }
];

export const projects: Project[] = [
  {
    title: "AI-Powered End-to-End Test Automation Platform",
    company: "PFE – Tunisie Telecom",
    period: "2025",
    location: "Tunis, Tunisia",
    description: "An intelligent end-to-end test automation pipeline that generates and executes Selenium test scripts automatically from Markdown specifications using Large Language Models. The pipeline parses Markdown specs → LLM generates structured test cases (positive, negative & edge cases) → DOM Scanner analyzes the live website with headless Chrome to extract real CSS selectors → Selenium scripts are generated and executed by Pytest → automated HTML/JSON reports are produced with feature-level pass/fail status. A React frontend polls real-time results via a Node.js webhook backed by MongoDB.",
    icon: Bot,
    category: "AI",
    technologies: ["Python", "FastAPI", "LLM", "Groq", "Ollama", "Selenium", "Pytest", "React", "MongoDB", "Node.js", "Docker", "GitHub Actions"],
    highlights: [
      "Zero-manual-code test generation from plain Markdown specifications",
      "Multi-LLM support: Groq (llama-3.3-70b), Ollama (qwen2.5-coder)",
      "Automatic DOM analysis using headless Chrome to extract live CSS selectors",
      "Full pipeline orchestration via FastAPI with Pytest execution",
      "Professional HTML + JSON reports with feature-level pass/fail status",
      "React frontend with real-time result polling via Node.js webhook and MongoDB"
    ],
    status: "Completed",
    images: [],
    videoUrl: "/videos/autotest-demo.mp4",
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "TimeForge – Intelligent Time & Goal Management",
    company: "Academic Project",
    period: "Feb – May 2025",
    location: "Tunis, Tunisia",
    description: "A full-stack enterprise platform for managing tasks, projects, goals, and teams. Designed for organizations that need structured project tracking with secure access, real-time updates, and exportable reporting. Built a REST API backend with Spring Boot and an Angular SPA frontend, secured with JWT authentication and supporting PDF report generation using iTextPDF.",
    icon: Briefcase,
    category: "Dev",
    technologies: ["Spring Boot", "Angular", "MySQL", "REST API", "JWT Auth", "Bootstrap", "iTextPDF"],
    highlights: [
      "Task, project and goal management for enterprise teams",
      "JWT-based authentication and authorization",
      "PDF report export with iTextPDF for project summaries",
      "RESTful API with full CRUD operations",
      "Responsive Angular SPA with Bootstrap"
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "University Dormitory Management Platform",
    company: "Academic Project",
    period: "May – Jul 2025",
    location: "Tunis, Tunisia",
    description: "A web platform for managing student room reservations, administrative requests, and dormitory monitoring in a university environment. Implemented role-based access control using Spring Security, enabling separate student and administrator workflows with secure authentication.",
    icon: Briefcase,
    category: "Dev",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security", "Bootstrap"],
    highlights: [
      "Student room reservation system with availability tracking",
      "Request handling and status monitoring for administrators",
      "Role-based access control with Spring Security",
      "Server-side rendering with Thymeleaf templates"
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "FitMe – Fitness Management Application",
    company: "Academic Project",
    period: "Oct – Dec 2024",
    location: "Tunis, Tunisia",
    description: "A personalized fitness application for coaches to deliver customized workout plans, nutrition tracking, and manage a supplement store. Built with Symfony using the MVC architecture, providing a clear separation between coach and client interfaces.",
    icon: Headphones,
    category: "Dev",
    technologies: ["Symfony", "Twig", "MySQL", "Bootstrap"],
    highlights: [
      "Personalized workout and nutrition plan management per client",
      "Integrated supplement store with product catalog",
      "Coach-client management with separate dashboards",
      "MVC architecture with Symfony and Twig templating"
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "Neo TM Application – AI Module",
    company: "Neolians",
    period: "Jun – Aug 2025",
    location: "Tunis, Tunisia",
    description: "Developed full-stack features and integrated AI modules into the Neo TM enterprise application. Implemented Keycloak Single Sign-On (SSO) and OAuth2 authentication for secure enterprise access. Integrated AI-driven data analysis and process automation modules into an existing Spring Boot / Angular platform.",
    icon: Bot,
    category: "AI",
    technologies: ["Java", "Spring Boot", "Angular", "Python", "Keycloak", "AI"],
    highlights: [
      "Keycloak SSO/OAuth2 integration for enterprise authentication",
      "AI data analysis and automation modules",
      "Full-stack development: Spring Boot backend + Angular frontend",
      "Enterprise-grade security with role-based access control"
    ],
    status: "Completed",
    images: []
  }
];

export const internships: Internship[] = [
  {
    company: "Tunisie Telecom",
    role: "PFE – AI-POWERED END-TO-END TEST AUTOMATION PLATFORM",
    period: "2025",
    location: "Tunis, Tunisia",
    description: "Designed and built an intelligent end-to-end test automation pipeline that generates and executes Selenium test scripts automatically from Markdown specifications using Large Language Models. The platform parses specs, generates structured test cases, scans the DOM with headless Chrome, produces pytest scripts, executes them, and generates full HTML/JSON reports. A React frontend polls real-time results via a Node.js webhook backed by MongoDB.",
    logoUrl: "/images-removebg-preview (1).png",
    companyUrl: "",
    technologies: ["Python", "FastAPI", "React", "Node.js", "MongoDB", "Selenium", "Pytest", "Groq", "Ollama", "Docker", "GitHub Actions"],
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
