import {
  Briefcase,
  Headphones,
  Bot,
  QrCode,
  Smartphone,
  BarChart3,
  Sun,
  PhoneCall,
} from "lucide-react";
import { Certification } from "@/components/portfolio/CertificationDetailsModal";
import { Internship } from "@/components/portfolio/InternshipDetailsModal";
import { Project } from "@/components/portfolio/ProjectDetailsModal";

export const onlineCourses: { name: string; provider: string; year: string }[] = [];

export const education = [
  {
    degree: "Software Engineering Degree",
    institution: "ESPRIT – École Supérieure Privée d'Ingénierie et de Technologies",
    location: "Tunis, Tunisia",
    period: "Sept 2022 – June 2025",
    status: "Graduated",
    description:
      "Engineering curriculum focused on Software Architecture, AI/ML systems, DevOps, and Full-Stack web development. Designed intelligent, scalable, and secure systems combining solid software engineering practices with Artificial Intelligence.",
    coursework: [
      "Software Architecture",
      "AI & Machine Learning",
      "DevOps & CI/CD",
      "Web Development",
      "Database Systems",
      "Agile/Scrum",
    ],
    achievements: [
      "Graduation Project (PFE): AutoTest – AI-Powered Automated Testing Platform",
      "Multiple internships in web development and enterprise AI integration",
      "NVIDIA Deep Learning Institute Certifications",
    ],
  },
  {
    degree: "Preparatory Program – Mathematics and Physics",
    institution: "FSM Monastir University",
    location: "Monastir, Tunisia",
    period: "Sept 2020 – June 2022",
    status: "Graduated",
    description:
      "Rigorous intensive preparatory cycle in higher mathematics, physics, and computer science fundamentals, building strong STEM foundations before engineering admission.",
    coursework: [
      "Advanced Mathematics",
      "Physics",
      "Computer Science Fundamentals",
      "Engineering Principles",
      "Analytical Problem Solving",
    ],
    achievements: ["Strong STEM foundation", "Successful admission to ESPRIT engineering program"],
  },
];

export const projects: Project[] = [
  {
    slug: "autotest",
    title: "AutoTest – AI-Powered Test Automation Platform",
    company: "Tunisie Telecom (PFE)",
    period: "01/2026 – 07/2026",
    location: "Tunis, Tunisia",
    role: "AI & Full Stack Engineer (PFE Intern)",
    description:
      "An end-to-end intelligent test automation pipeline that automatically generates, runs, and reports Selenium test scripts directly from plain Markdown specifications using Large Language Models.",
    problem:
      "Manual functional testing in enterprise telecom environments is slow, brittle, and resource-heavy. Writing Selenium scripts for multi-page user flows requires constant selector maintenance whenever UI layouts update.",
    solution:
      "Built a fully autonomous pipeline: Markdown specs are ingested by an LLM (Groq / Ollama) to extract test scenarios, Chrome Headless scans the live DOM for real CSS selectors, Pytest executes the generated Selenium scripts, and a real-time dashboard renders HTML/JSON reports.",
    architecture:
      "Markdown Spec &rarr; LLM Engine (Llama 3.3 / Qwen 2.5) &rarr; Headless DOM Scanner &rarr; Pytest Execution Engine &rarr; FastAPI Backend &rarr; Node.js Webhook & MongoDB &rarr; React Dashboard",
    icon: Bot,
    category: "AI",
    technologies: [
      "Python",
      "FastAPI",
      "LLM",
      "Groq",
      "Ollama",
      "Selenium",
      "Pytest",
      "React",
      "MongoDB",
      "Node.js",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "Zero-manual-code test script generation directly from plain Markdown documentation",
      "Multi-LLM inference support: Groq cloud (Llama 3.3 70B) and local Ollama (Qwen 2.5 Coder)",
      "Automated DOM analysis with Chrome Headless to extract real-world resilient CSS selectors",
      "FastAPI pipeline orchestration triggering Pytest suites with automated retry mechanisms",
      "Interactive React dashboard with live polling via Node.js webhooks and MongoDB audit storage",
    ],
    results: [
      "Reduced test creation time by over 75% compared to manual Selenium scripting",
      "Generated 50+ comprehensive functional test cases (positive, negative, edge) in under 60 seconds",
      "Eliminated selector mismatch errors via automated live DOM extraction",
    ],
    status: "Completed",
    images: [],
    videoUrl: "/videos/autotest-demo.mp4",
    githubUrl: "https://github.com/rayenguesmi",
  },
  {
    slug: "devis-management",
    title: "Devis Management – AI Quotation Platform",
    company: "EnerP",
    period: "08/2026 – 09/2026",
    location: "Ben Arous, Tunisia",
    role: "Software Engineer",
    description:
      "An enterprise AI platform for automated quotation parsing, customer status tracking, price estimation, and automated smart follow-ups for industrial operations.",
    problem:
      "Sales and operational teams spent countless hours manually transcribing complex technical quotes from PDFs and emails, resulting in delays, lost follow-ups, and estimation inaccuracies.",
    solution:
      "Created a centralized web application featuring AI-powered document extraction, real-time quote lifecycle tracking (Draft, Pending, Approved, Billed), and scheduled follow-up notifications.",
    architecture:
      "FastAPI / Node.js Backend &rarr; PostgreSQL &rarr; Document Extraction Pipeline &rarr; React Tailwind Dashboard &rarr; Dockerized Deployment",
    icon: BarChart3,
    category: "AI",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "Zod",
    ],
    highlights: [
      "Automated extraction of quotation line items from structured and unstructured documents",
      "Status tracking pipeline with automated follow-up email triggers",
      "Role-based access control for sales representatives and management",
      "Exportable financial analytics and quote conversion statistics",
    ],
    results: [
      "Divided quote processing turnaround time by 3x",
      "Zero missed customer follow-ups thanks to scheduled status alerts",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "enerp-barcode-manager",
    title: "EnerP Barcode Manager",
    company: "EnerP",
    period: "09/2026 – 10/2026",
    location: "Ben Arous, Tunisia",
    role: "Full Stack Developer",
    description:
      "Web application to generate, scan, and track barcodes and QR codes, ensuring reliable item identification, inventory integrity, and operation traceability.",
    problem:
      "Material warehouses suffered from manual tracking discrepancies, misplaced parts, and tedious barcode label generation.",
    solution:
      "Engineered a high-performance barcode manager supporting both camera and USB hardware scanners, custom label printing, stock movements, and audit histories.",
    architecture:
      "React SPA &rarr; Express REST API &rarr; PostgreSQL &rarr; JsBarcode Rendering &rarr; Docker Container",
    icon: QrCode,
    category: "Full Stack",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JsBarcode",
      "JWT",
      "Docker",
      "Tailwind CSS",
    ],
    highlights: [
      "Unique barcode and QR code generation for equipment and inventory parts",
      "Dual hardware support: USB laser barcode scanners and device camera scanning",
      "One-click batch label formatting and direct thermal printer output",
      "Operation logs with full user traceability and status history",
      "Import/Export engine for Excel spreadsheets and PDF summaries",
    ],
    results: [
      "Accelerated inventory stock check-in speed by 60%",
      "100% item traceability across manufacturing and shipping phases",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "frais-enerp",
    title: "Frais EnerP – Expense Tracking Mobile App",
    company: "EnerP",
    period: "10/2026 – 11/2026",
    location: "Ben Arous, Tunisia",
    role: "Full Stack / Mobile Developer",
    description:
      "Mobile application for travel expense reporting, receipt photo capture, and multi-tier manager approval workflows.",
    problem:
      "Field engineers and traveling technicians struggled with paper receipt loss and slow reimbursement validation cycles.",
    solution:
      "Designed and built an offline-first mobile app allowing engineers to photograph receipts on the go, submit per-trip expense reports, and track approval status in real-time.",
    architecture:
      "React Native Mobile App &rarr; Node.js Express API &rarr; PostgreSQL & Object Storage &rarr; JWT Auth &rarr; PDF Export Engine",
    icon: Smartphone,
    category: "Full Stack",
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Tailwind CSS",
    ],
    highlights: [
      "Expense reporting categorized by project, client trip, and currency",
      "Direct receipt image capture with automated compression and cloud storage",
      "Multi-level approval workflow with custom rejection notes and instant alerts",
      "Comprehensive monthly summaries and automated PDF expense sheet exports",
    ],
    results: [
      "Cut reimbursement approval cycles from 2 weeks to under 48 hours",
      "Eliminated lost receipt claims across all traveling engineering teams",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "neo-tm",
    title: "Neo TM – Enterprise Web Application & AI Modules",
    company: "Neolians",
    period: "06/2025 – 08/2025",
    location: "Tunis, Tunisia",
    role: "Software Engineering Intern",
    description:
      "Enterprise software modernization featuring Keycloak Single Sign-On (SSO), OAuth2 security, and AI-driven automated process modules.",
    problem:
      "Legacy internal workflows lacked centralized authentication and required repetitive manual data reconciliation.",
    solution:
      "Integrated Keycloak identity management for enterprise SSO and developed intelligent analytics microservices with Spring Boot and Python.",
    architecture:
      "Spring Boot Microservices & Keycloak &rarr; Angular Frontend &rarr; Python AI Modules &rarr; PostgreSQL",
    icon: Bot,
    category: "AI",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "Python",
      "Keycloak",
      "OAuth2",
      "SSO",
      "REST API",
      "Docker",
    ],
    highlights: [
      "Enterprise Keycloak SSO and OAuth2 authentication architecture",
      "AI-driven automated process modules for operational data inspection",
      "Responsive Angular dashboards with modular component design",
      "Strict role-based access control (RBAC) across departments",
    ],
    results: [
      "Unified login experience across internal systems with zero downtime",
      "Automated recurrent operational verification tasks",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "timeforge",
    title: "TimeForge – Smart Time & Team Management",
    company: "Academic Project",
    period: "02/2025 – 05/2025",
    location: "Tunis, Tunisia",
    role: "Full Stack Lead Developer",
    description:
      "Enterprise productivity platform for managing complex project timelines, team tasks, performance milestones, and automated PDF reporting.",
    problem:
      "Small to medium organizations need clear goal visibility without the excessive complexity of bloated enterprise suites.",
    solution:
      "Developed an ergonomic SPA with Spring Boot and Angular, featuring JWT security, team hierarchies, and instant PDF report exports via iTextPDF.",
    architecture:
      "Spring Boot REST API &rarr; Angular SPA &rarr; MySQL Database &rarr; JWT Token Engine &rarr; iTextPDF Reporting",
    icon: Briefcase,
    category: "Full Stack",
    technologies: [
      "Spring Boot",
      "Angular",
      "MySQL",
      "REST API",
      "JWT Auth",
      "Bootstrap",
      "iTextPDF",
    ],
    highlights: [
      "Hierarchical project, task, and team objective tracking",
      "JWT-based stateless authentication and authorization",
      "Automated summary report generation with custom iTextPDF layouts",
      "Complete CRUD RESTful endpoints with input validation",
    ],
    results: [
      "Deployed and tested successfully across academic team workflows",
      "Modular backend architecture with clean separation of concerns",
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi",
  },
  {
    slug: "photovoltaic-system",
    title: "Solar Energy & Photovoltaic Monitoring Platform",
    company: "EnerP",
    period: "06/2024 – 08/2024",
    location: "Ben Arous, Tunisia",
    role: "Web Developer Intern",
    description:
      "Web application for real-time monitoring, telemetry analysis, and performance tracking of commercial photovoltaic installations.",
    problem:
      "Operators lacked a unified visual tool to track solar panel production anomalies, inverter health, and telemetry drifts.",
    solution:
      "Built a responsive web dashboard aggregating telemetry data with real-time status indicators and energy yield summaries.",
    architecture:
      "Web Application &rarr; Data Ingestion API &rarr; Real-Time Telemetry Database &rarr; Visualization Dashboard",
    icon: Sun,
    category: "Full Stack",
    technologies: [
      "JavaScript",
      "HTML5/CSS3",
      "Data Visualization",
      "REST APIs",
      "Performance Monitoring",
    ],
    highlights: [
      "Real-time solar panel energy output visualization and historical telemetry charts",
      "Threshold anomaly detection for faulty inverter readings",
      "Exportable energy production performance sheets",
    ],
    results: [
      "Enabled instantaneous identification of degraded solar strings",
      "Delivered a lightweight, highly responsive monitoring dashboard",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "voip-optimization",
    title: "VoIP Infrastructure Quality & QoS Optimization",
    company: "Amen Bank",
    period: "04/2024 – 06/2024",
    location: "Tunis, Tunisia",
    role: "Engineering Intern",
    description:
      "Technical study, diagnostic analysis, and network QoS optimization for VoIP telecommunication systems in a banking environment.",
    problem:
      "Voice call degradation, packet loss, and jitter during peak banking hours hampered customer service operations.",
    solution:
      "Audited network topologies, identified bandwidth contention bottlenecks, and applied prioritized QoS traffic queuing policies.",
    architecture:
      "VoIP Protocols (SIP / RTP) &rarr; Network Packet Sniffing &rarr; QoS Policy Engine &rarr; PBX Infrastructure",
    icon: PhoneCall,
    category: "Full Stack",
    technologies: [
      "VoIP",
      "SIP/RTP Protocols",
      "Network Optimization",
      "QoS",
      "Telecommunications",
      "Wireshark",
    ],
    highlights: [
      "In-depth packet capture analysis identifying SIP signaling delays and RTP jitter",
      "Implementation of bandwidth prioritization policies for voice channels",
      "Comprehensive infrastructure diagnostic audit report for bank IT leadership",
    ],
    results: [
      "Significantly reduced voice jitter and dropped calls across branch communications",
      "Delivered actionable network sizing guidelines for future expansion",
    ],
    status: "Completed",
    images: [],
  },
];

export const internships: Internship[] = [
  {
    company: "EnerP",
    role: "SOFTWARE ENGINEER",
    period: "08/2026 – Present",
    location: "Ben Arous, Tunisia",
    description:
      "Designing and developing production software architectures: AI quotation management platforms, barcode/QR inventory tracking systems, and mobile travel expense tools. Full-stack development with React, Node.js, FastAPI, PostgreSQL, and Docker.",
    logoUrl: "/download-removebg-preview.png",
    companyUrl: "",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AI Integration",
    ],
    certificateUrl: "",
  },
  {
    company: "Tunisie Telecom",
    role: "PFE INTERN – AI-POWERED TEST AUTOMATION PLATFORM",
    period: "01/2026 – 07/2026",
    location: "Tunis, Tunisia",
    description:
      "Conceived and implemented the AutoTest platform: an autonomous pipeline parsing Markdown specs, generating test cases via LLMs (Groq, Ollama), inspecting live DOM selectors via headless Chrome, executing Selenium pytest scripts, and polling live results via a React/MongoDB dashboard.",
    logoUrl: "/images-removebg-preview (1).png",
    companyUrl: "",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Node.js",
      "MongoDB",
      "Selenium",
      "Pytest",
      "Groq",
      "Ollama",
      "Docker",
      "GitHub Actions",
    ],
    certificateUrl: "",
  },
  {
    company: "Neolians",
    role: "SOFTWARE ENGINEERING INTERN – DEV & AI ON NEO TM",
    period: "06/2025 – 08/2025",
    location: "Tunis, Tunisia",
    description:
      "Engineered full-stack features on the Neo TM platform with Spring Boot and Angular. Integrated Keycloak Single Sign-On (SSO) and OAuth2 security. Developed AI-driven modules for operational data analysis and process automation.",
    logoUrl: "/download__4_-removebg-preview.png",
    companyUrl: "",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "Python",
      "Keycloak",
      "OAuth2",
      "AI Integration",
    ],
    certificateUrl: "",
  },
  {
    company: "EnerP",
    role: "WEB DEVELOPER INTERN – PHOTOVOLTAIC MANAGEMENT APPLICATION",
    period: "06/2024 – 08/2024",
    location: "Ben Arous, Tunisia",
    description:
      "Developed a telemetry web application for photovoltaic solar system monitoring and energy performance analysis. Enabled real-time tracking of production metrics.",
    logoUrl: "/download-removebg-preview.png",
    companyUrl: "",
    technologies: ["Web Development", "Data Analysis", "Performance Monitoring", "Telemetry"],
    certificateUrl: "",
  },
  {
    company: "Amen Bank",
    role: "ENGINEERING INTERN – VOIP OPTIMIZATION",
    period: "04/2024 – 06/2024",
    location: "Tunis, Tunisia",
    description:
      "Analyzed and optimized VoIP communication infrastructure in a critical banking environment. Diagnosed packet loss, configured QoS policies, and improved voice call stability.",
    logoUrl: "/download-removebg-preview (1).png",
    companyUrl: "",
    technologies: ["VoIP", "Network Optimization", "QoS", "Telecommunications", "Wireshark"],
    certificateUrl: "",
  },
];

export const certifications: Certification[] = [
  {
    name: "Building Transformer-Based NLP Applications",
    issuer: "NVIDIA",
    date: "November 2025",
    status: "Active",
    credentialId: "ofmTRY6zTVWNwizF0hz3Tw",
    description:
      "Building production NLP applications using transformer architectures and NVIDIA deep learning tools.",
    skills: ["NLP", "Transformers", "BERT", "Deep Learning", "Python"],
    url: "https://learn.nvidia.com/certificates?id=ofmTRY6zTVWNwizF0hz3Tw",
    category: "AI",
    issuerLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
  {
    name: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    date: "November 2025",
    status: "Active",
    credentialId: "VbS_9TjYQHqbcakAGyr2-Q",
    description:
      "Implementing deep learning models to detect anomalies in industrial and time-series enterprise data.",
    skills: ["AI", "Anomaly Detection", "Deep Learning", "Industrial IoT"],
    url: "https://learn.nvidia.com/certificates?id=VbS_9TjYQHqbcakAGyr2-Q",
    category: "AI",
    issuerLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
  {
    name: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "January 2025",
    status: "Active",
    credentialId: "VJCICRl3RHiQH4qyjIU3Cw",
    description:
      "Core deep learning concepts, neural network architectures, and practical implementation with Python and PyTorch.",
    skills: ["Deep Learning", "Neural Networks", "Python", "AI Development"],
    url: "https://learn.nvidia.com/certificates?id=VJCICRl3RHiQH4qyjIU3Cw",
    category: "AI",
    issuerLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
  {
    name: "Advanced SQL",
    issuer: "365 Data Science",
    date: "November 2024",
    status: "Active",
    credentialId: "CC-73BAC5A43D",
    description:
      "Advanced SQL techniques for high-performance data querying, index optimization, and database architecture.",
    skills: ["SQL", "Database Management", "Query Optimization", "Data Analysis"],
    url: "https://learn.365datascience.com/certificates/CC-73BAC5A43D/",
    category: "Dev",
    issuerLogoUrl: "",
  },
  {
    name: "Introduction to Jupyter",
    issuer: "365 Data Science",
    date: "November 2024",
    status: "Active",
    credentialId: "CC-67627038E0",
    description:
      "Interactive data analysis, experimentation notebooks, and machine learning visualization pipelines.",
    skills: ["Jupyter", "Python", "Data Science", "Interactive Computing"],
    url: "https://learn.365datascience.com/certificates/CC-67627038E0/",
    category: "Dev",
    issuerLogoUrl: "",
  },
  {
    name: "Python Programmer Bootcamp",
    issuer: "365 Data Science",
    date: "November 2024",
    status: "Active",
    credentialId: "CC-5A3EEC3050",
    description:
      "Comprehensive Python programming from object-oriented fundamentals to data structures and scientific libraries.",
    skills: ["Python", "Programming", "Data Structures", "OOP"],
    url: "https://learn.365datascience.com/certificates/CC-5A3EEC3050/",
    category: "Dev",
    issuerLogoUrl: "",
  },
];
