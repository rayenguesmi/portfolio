import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, "../dist");
const indexPath = path.join(distPath, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("Error: dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const rawTemplate = fs.readFileSync(indexPath, "utf8");

const projectsData = [
  {
    slug: "autotest",
    title: "AutoTest – AI-Powered Test Automation",
    category: "AI",
    company: "Tunisia Telecom (PFE)",
    period: "01/2026 – 07/2026",
    role: "AI & Full Stack Engineer (PFE Intern)",
    description: "Conceived and engineered an end-to-end automated testing system driven by LLMs (Groq, Ollama) generating Python Selenium scripts from structured Markdown specifications, with headless Chrome DOM scanning and real-time execution analytics.",
    technologies: ["Python", "FastAPI", "Selenium", "Docker", "MongoDB", "React", "Groq API", "Ollama", "GitLab CI"],
    problem: "Telecom testing teams faced extensive test execution cycles and fragile manual script maintenance for complex enterprise telecommunication web portals.",
    solution: "Built a dual-tier intelligent pipeline that analyzes live DOM snapshots with headless Chrome, prompts LLMs with schema-constrained system prompts to generate executable Selenium Pytest suites, and reports real-time execution telemetry in a React dashboard.",
    results: [
      "85% reduction in end-to-end regression testing cycle times",
      "99.2% accuracy in automated DOM element locator generation",
      "Zero manual script authoring required for standard user workflows"
    ],
  },
  {
    slug: "enerp-barcode-manager",
    title: "EnerP Barcode Manager",
    category: "Full Stack",
    company: "EnerP",
    period: "09/2026 – 10/2026",
    role: "Full Stack Developer",
    description: "Web application for barcode & QR code generation, camera/USB scanner support, label printing, and inventory item tracking with role-based security.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JsBarcode", "JWT", "Docker"],
    problem: "Manual stock entry caused inventory discrepancies, slow item processing, and label identification errors in solar warehouse operations.",
    solution: "Developed an inventory web platform supporting unique barcode generation, USB/camera scanning, batch printing, and Excel/PDF synchronization with PostgreSQL.",
    results: [
      "60% acceleration in warehouse stock verification and checkout",
      "100% item traceability across import/export logistics",
      "Elimination of manual entry typos"
    ],
  },
  {
    slug: "frais-enerp",
    title: "Frais EnerP – Mobile Expense Management",
    category: "Mobile",
    company: "EnerP",
    period: "10/2026 – 11/2026",
    role: "Full Stack / Mobile Developer",
    description: "Cross-platform mobile application for field technician travel expense tracking with camera receipt capture and multi-tier manager approval workflow.",
    technologies: ["React Native", "Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    problem: "Field engineers spent days compiling paper receipts for travel reimbursement, resulting in delayed approvals and lost documentation.",
    solution: "Engineered a streamlined React Native app enabling on-the-go receipt photography, expense categorization, push notifications, and managerial approval.",
    results: [
      "75% faster reimbursement cycle from submission to accounting sign-off",
      "100% digital receipt compliance and searchable archive",
      "Real-time mobile tracking for field technicians"
    ],
  },
  {
    slug: "devis-management",
    title: "Commercial Quotation & Photovoltaic Sizing Platform",
    category: "Full Stack",
    company: "EnerP",
    period: "08/2026 – Present",
    role: "Software Engineer",
    description: "Comprehensive software suite for calculating solar panel installations, generating dynamic commercial quotes, and exporting detailed PDF contracts.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Docker"],
    problem: "Photovoltaic quotation workflows relied on disparate spreadsheets and manual sizing formulas prone to estimation inaccuracies.",
    solution: "Created an integrated commercial quoting engine that automates photovoltaic capacity calculations, margin analysis, and formatted PDF generation.",
    results: [
      "Quotation creation time reduced from 2 hours to 8 minutes",
      "Zero calculation discrepancy in equipment specifications",
      "Direct integration with enterprise customer records"
    ],
  },
  {
    slug: "neo-tm",
    title: "Neo TM – Enterprise AI Module & SSO",
    category: "Full Stack",
    company: "Neolians",
    period: "06/2025 – 08/2025",
    role: "Software Engineering Intern",
    description: "Enterprise test management solution featuring automated data analysis, Keycloak Single Sign-On (SSO), and OAuth2 authentication across microservices.",
    technologies: ["Java", "Spring Boot", "Angular", "Python", "Keycloak", "OAuth2", "PostgreSQL"],
    problem: "Siloed authentication across legacy test management tools and absence of predictive analysis for test run failures.",
    solution: "Integrated centralized Keycloak SSO with OAuth2 token exchange and engineered Python-based analytics pipelines integrated into Spring Boot.",
    results: [
      "Unified single sign-on across multi-tier test platforms",
      "Automated failure categorization saving QA triage hours",
      "Enterprise security compliance and role-based permissions"
    ],
  },
  {
    slug: "timeforge",
    title: "TimeForge – Smart Time & Team Management",
    category: "Full Stack",
    company: "Academic Project",
    period: "2024",
    role: "Full Stack Engineer",
    description: "Enterprise platform for structured task tracking, objective progress bars, team roles, JWT security, and automated PDF reports.",
    technologies: ["Spring Boot", "Angular", "MySQL", "JWT", "Bootstrap", "iTextPDF"],
    problem: "Small teams struggled to monitor multi-project milestones and generate audit-ready timesheets without costly subscriptions.",
    solution: "Constructed a high-performance Spring Boot and Angular platform with robust JWT role-based security and server-rendered PDF reporting.",
    results: [
      "Complete task-to-milestone auditability",
      "Automated one-click PDF timesheet generation",
      "Responsive interface optimized for desktop and tablet"
    ],
  },
  {
    slug: "photovoltaic-system",
    title: "Photovoltaic Solar Monitoring Platform",
    category: "DevOps",
    company: "EnerP",
    period: "06/2024 – 08/2024",
    role: "Web Developer Intern",
    description: "Solar energy installation monitoring application with live data telemetry, energy yield metrics, and interactive charts.",
    technologies: ["React", "Node.js", "Chart.js", "Express", "REST API", "Git"],
    problem: "Operators lacked a unified interface to track live power outputs and detect yield drops across multiple solar installations.",
    solution: "Designed and implemented interactive real-time telemetry dashboards presenting daily/monthly yields, irradiance data, and anomaly alerts.",
    results: [
      "Live multi-site monitoring with sub-minute metric updates",
      "Intuitive graphical visualizer for technical and non-technical staff"
    ],
  },
  {
    slug: "voip-optimization",
    title: "VoIP Infrastructure Optimization & QoS Monitoring",
    category: "DevOps",
    company: "Amen Bank",
    period: "04/2024 – 06/2024",
    role: "Engineering Intern",
    description: "Telecommunication and banking VoIP infrastructure analysis, Quality of Service (QoS) tuning, and network diagnostic reports.",
    technologies: ["VoIP", "SIP Protocol", "Wireshark", "Network QoS", "Linux"],
    problem: "Intermittent jitter and packet loss affected inter-branch banking telecommunications during peak transaction hours.",
    solution: "Conducted packet-level SIP traffic analysis using Wireshark, reconfigured VLAN QoS prioritization, and documented bandwidth allocation rules.",
    results: [
      "Significant reduction in voice packet jitter across branch links",
      "Delivered comprehensive QoS configuration manual for bank sysadmins"
    ],
  },
];

// 1. Generate Static Prerender for Homepage
const homepageProjectsHtml = projectsData.map(p => `
  <article class="p-6 rounded-2xl border border-border bg-card/60 flex flex-col justify-between">
    <div>
      <div class="text-xs font-semibold text-primary uppercase tracking-wider mb-2">${p.category} &bull; ${p.company}</div>
      <h3 class="text-2xl font-bold mb-3"><a href="/projects/${p.slug}" class="hover:text-primary transition-colors">${p.title}</a></h3>
      <p class="text-sm text-muted-foreground leading-relaxed mb-4">${p.description}</p>
    </div>
    <div>
      <div class="text-xs font-mono text-muted-foreground mb-4">${p.technologies.join(" &bull; ")}</div>
      <a href="/projects/${p.slug}" class="inline-flex items-center text-xs font-semibold text-primary hover:underline">
        Case Study / Étude de cas &rarr;
      </a>
    </div>
  </article>
`).join("\n");

const homepageStatic = `
<div id="ssr-root" class="min-h-screen bg-background text-foreground">
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg">
    Skip to main content / Aller au contenu principal
  </a>

  <header role="banner" class="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="font-bold text-lg text-primary">RG</span>
        <span class="font-semibold text-foreground">Rayen Guesmi</span>
      </div>
      <nav role="navigation" aria-label="Main Navigation" class="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <a href="#about" class="hover:text-primary transition-colors">About</a>
        <a href="#certifications" class="hover:text-primary transition-colors">Certifications</a>
        <a href="#projects" class="hover:text-primary transition-colors">Projects</a>
        <a href="#internships" class="hover:text-primary transition-colors">Experience</a>
        <a href="#education" class="hover:text-primary transition-colors">Education</a>
        <a href="#languages" class="hover:text-primary transition-colors">Skills</a>
        <a href="#motivation" class="hover:text-primary transition-colors">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content" role="main" class="pt-16">
    <section id="about" aria-labelledby="hero-heading" class="min-h-[85vh] flex flex-col items-center justify-center py-20">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Software Engineer @ EnerP &bull; Available for opportunities
        </div>
        <h1 id="hero-heading" class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Hi, I'm <span class="text-primary">Rayen Guesmi</span>
        </h1>
        <p class="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
          Software Engineer specializing in AI Systems, Full-Stack Architecture, and DevOps. Building intelligent, reliable, and scalable web solutions with Python, FastAPI, React, Spring Boot, and Docker.
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <a href="#projects" class="px-6 py-3 rounded-xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            View Projects / Voir mes projets
          </a>
          <a href="#internships" class="px-6 py-3 rounded-xl font-medium border border-border bg-card text-foreground hover:bg-muted transition-colors">
            Professional Experience
          </a>
          <a href="#certifications" class="px-6 py-3 rounded-xl font-medium border border-border bg-card text-foreground hover:bg-muted transition-colors">
            NVIDIA Certifications
          </a>
        </div>
      </div>
    </section>

    <section id="certifications" aria-labelledby="certs-heading" class="py-20 border-t border-border/50">
      <div class="container mx-auto px-4 max-w-5xl">
        <h2 id="certs-heading" class="text-3xl font-bold tracking-tight mb-4">Certifications</h2>
        <p class="text-muted-foreground mb-10">Accreditations and specialized training in Deep Learning, NLP, and Data Engineering.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <h3 class="text-xl font-bold mb-2">Building Transformer-Based NLP Applications</h3>
            <p class="text-sm text-primary font-medium mb-2">NVIDIA Deep Learning Institute &bull; 2025</p>
            <p class="text-sm text-muted-foreground">Transformer architectures, BERT, and NLP pipelines using NVIDIA deep learning frameworks.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <h3 class="text-xl font-bold mb-2">Applications of AI for Anomaly Detection</h3>
            <p class="text-sm text-primary font-medium mb-2">NVIDIA Deep Learning Institute &bull; 2025</p>
            <p class="text-sm text-muted-foreground">Industrial AI and time-series anomaly detection for IoT and business operations.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <h3 class="text-xl font-bold mb-2">Fundamentals of Deep Learning</h3>
            <p class="text-sm text-primary font-medium mb-2">NVIDIA Deep Learning Institute &bull; 2025</p>
            <p class="text-sm text-muted-foreground">Neural network design, computer vision, and model training fundamentals with Python.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <h3 class="text-xl font-bold mb-2">Advanced SQL & Python Bootcamp</h3>
            <p class="text-sm text-primary font-medium mb-2">365 Data Science &bull; 2024</p>
            <p class="text-sm text-muted-foreground">Complex queries, query optimization, database management, and object-oriented Python.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" aria-labelledby="projects-heading" class="py-20 border-t border-border/50">
      <div class="container mx-auto px-4 max-w-5xl">
        <h2 id="projects-heading" class="text-3xl font-bold tracking-tight mb-4">Featured Projects / Projets</h2>
        <p class="text-muted-foreground mb-10">Production-ready applications, intelligent automation pipelines, and enterprise architectures.</p>
        <div class="grid md:grid-cols-2 gap-6">
          ${homepageProjectsHtml}
        </div>
      </div>
    </section>

    <section id="internships" aria-labelledby="experience-heading" class="py-20 border-t border-border/50">
      <div class="container mx-auto px-4 max-w-5xl">
        <h2 id="experience-heading" class="text-3xl font-bold tracking-tight mb-4">Experience / Expérience</h2>
        <p class="text-muted-foreground mb-10">Professional trajectory and technical roles.</p>
        <div class="space-y-6">
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 class="text-xl font-bold">Software Engineer &bull; EnerP</h3>
              <span class="text-sm text-primary font-medium">08/2026 – Present | Ben Arous, Tunisia</span>
            </div>
            <p class="text-sm text-muted-foreground">Designing and developing high-performance software and photovoltaic management platforms.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 class="text-xl font-bold">Software Engineering Intern (PFE) &bull; Tunisie Telecom</h3>
              <span class="text-sm text-primary font-medium">01/2026 – 07/2026 | Tunis, Tunisia</span>
            </div>
            <p class="text-sm text-muted-foreground">Conception and implementation of the AI-driven end-to-end automated testing system (AutoTest) with Selenium, FastAPI, and LLMs.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 class="text-xl font-bold">Software Engineering Intern &bull; Neolians</h3>
              <span class="text-sm text-primary font-medium">06/2025 – 08/2025 | Tunis, Tunisia</span>
            </div>
            <p class="text-sm text-muted-foreground">Full-stack feature development on Neo TM, Keycloak SSO integration, and AI-powered data processing modules.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 class="text-xl font-bold">Web Developer Intern &bull; EnerP</h3>
              <span class="text-sm text-primary font-medium">06/2024 – 08/2024 | Ben Arous, Tunisia</span>
            </div>
            <p class="text-sm text-muted-foreground">Solar energy system monitoring application with live data visualization and telemetry metrics.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 class="text-xl font-bold">Engineering Intern &bull; Amen Bank</h3>
              <span class="text-sm text-primary font-medium">04/2024 – 06/2024 | Tunis, Tunisia</span>
            </div>
            <p class="text-sm text-muted-foreground">VoIP communication infrastructure optimization, QoS monitoring, and network performance tuning.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="education" aria-labelledby="education-heading" class="py-20 border-t border-border/50">
      <div class="container mx-auto px-4 max-w-5xl">
        <h2 id="education-heading" class="text-3xl font-bold tracking-tight mb-4">Education / Formation</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <h3 class="text-xl font-bold mb-1">Software Engineering Degree</h3>
            <p class="text-primary font-medium text-sm mb-3">ESPRIT – École Supérieure Privée d'Ingénierie et de Technologies (2023 - 2025)</p>
            <p class="text-sm text-muted-foreground">Specialization in Software Engineering, AI, Distributed Systems, and DevOps.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <h3 class="text-xl font-bold mb-1">Preparatory Program (Mathematics & Physics)</h3>
            <p class="text-primary font-medium text-sm mb-3">FSM Monastir University (2020 - 2023)</p>
            <p class="text-sm text-muted-foreground">Intensive higher education preparatory program in STEM, advanced mathematics, physics, and computing.</p>
          </article>
        </div>
      </div>
    </section>

    <footer id="motivation" class="py-16 border-t border-border bg-card/30">
      <div class="container mx-auto px-4 max-w-5xl text-center">
        <h2 class="text-2xl font-bold mb-4">Let's Connect / Travaillons ensemble</h2>
        <p class="text-muted-foreground mb-6">Open to software engineering roles, high-impact AI/Full-Stack challenges, and freelance collaborations.</p>
        <div class="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="mailto:rayen.guesmi@esprit.tn" class="text-primary hover:underline font-medium">rayen.guesmi@esprit.tn</a>
          <a href="https://linkedin.com/in/rayen-guesmi-3141a1308" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground">LinkedIn</a>
          <a href="https://github.com/rayenguesmi" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground">GitHub</a>
        </div>
        <p class="text-xs text-muted-foreground/60">&copy; ${new Date().getFullYear()} Rayen Guesmi. All rights reserved.</p>
      </div>
    </footer>
  </main>
</div>
`.trim();

// Write homepage prerender
let homeHtml = rawTemplate.replace('<div id="root"></div>', `<div id="root">${homepageStatic}</div>`);
fs.writeFileSync(indexPath, homeHtml, "utf8");
console.log("Successfully prerendered and injected static semantic HTML into dist/index.html");

// 2. Generate Static Prerender for each project /projects/:slug
projectsData.forEach((project) => {
  const projectDir = path.join(distPath, "projects", project.slug);
  fs.mkdirSync(projectDir, { recursive: true });

  const projectCanonical = `https://rayen-guesmi.vercel.app/projects/${project.slug}`;
  const projectPageTitle = `${project.title} — Case Study | Rayen Guesmi`;
  const projectPageDesc = `${project.description.slice(0, 160)}...`;

  const resultsHtml = (project.results || [])
    .map((r) => `<li class="text-sm font-medium text-foreground py-1">&bull; ${r}</li>`)
    .join("\n");

  const techBadgesHtml = project.technologies
    .map((t) => `<span class="px-2.5 py-1 rounded-md text-xs bg-secondary border border-border">${t}</span>`)
    .join(" ");

  const projectStatic = `
<div id="ssr-root" class="min-h-screen bg-background text-foreground">
  <header role="banner" class="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 font-bold text-primary">
        <span>&larr; Rayen Guesmi Portfolio</span>
      </a>
      <a href="/#projects" class="text-sm font-medium text-muted-foreground hover:text-foreground">
        All Projects
      </a>
    </div>
  </header>

  <main role="main" class="container mx-auto px-4 pt-28 pb-24 max-w-5xl">
    <div class="mb-8">
      <a href="/#projects" class="text-sm text-primary font-medium hover:underline">&larr; Back to all projects / Retour</a>
    </div>

    <header class="mb-12 border-b border-border pb-10">
      <div class="inline-flex gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
        <span>${project.category}</span> &bull; <span>${project.company}</span> &bull; <span>${project.period}</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">${project.title}</h1>
      <p class="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-6">
        ${techBadgesHtml}
      </div>
    </header>

    <div class="space-y-10">
      <section>
        <h2 class="text-2xl font-bold mb-3">Context & Problem Solved</h2>
        <p class="text-muted-foreground leading-relaxed bg-card/60 border border-border rounded-xl p-6">${project.problem}</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-3">Technical Solution</h2>
        <p class="text-muted-foreground leading-relaxed bg-card/60 border border-border rounded-xl p-6">${project.solution}</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-3">Measurable Results & Impact</h2>
        <ul class="bg-card/60 border border-border rounded-xl p-6 space-y-2">
          ${resultsHtml}
        </ul>
      </section>
    </div>
  </main>
</div>
`.trim();

  let projectHtml = rawTemplate
    .replace(/<title>.*?<\/title>/, `<title>${projectPageTitle}</title>`)
    .replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${projectCanonical}" />`)
    .replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${projectPageDesc}" />`)
    .replace('<div id="root"></div>', `<div id="root">${projectStatic}</div>`);

  fs.writeFileSync(path.join(projectDir, "index.html"), projectHtml, "utf8");
  console.log(`Prerendered: /projects/${project.slug}`);
});
