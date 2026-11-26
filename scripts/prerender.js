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

const staticContent = `
<div id="ssr-root" class="min-h-screen bg-background text-foreground">
  <!-- Accessibilité: lien d'évitement -->
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
    <!-- HERO SECTION -->
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

    <!-- CERTIFICATIONS SECTION -->
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

    <!-- PROJECTS SECTION -->
    <section id="projects" aria-labelledby="projects-heading" class="py-20 border-t border-border/50">
      <div class="container mx-auto px-4 max-w-5xl">
        <h2 id="projects-heading" class="text-3xl font-bold tracking-tight mb-4">Featured Projects / Projets</h2>
        <p class="text-muted-foreground mb-10">Production-ready applications and intelligent software architectures.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="p-6 rounded-2xl border border-border bg-card/60 flex flex-col justify-between">
            <div>
              <div class="text-xs font-semibold text-primary uppercase tracking-wider mb-2">AI & Automation &bull; PFE Tunisie Telecom</div>
              <h3 class="text-2xl font-bold mb-3">AutoTest – AI-Powered End-to-End Test Automation</h3>
              <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                Intelligent testing pipeline generating and executing Selenium tests from Markdown specs via LLMs (Groq, Ollama), headless Chrome DOM scanning, FastAPI orchestration, Pytest execution, and React live reporting.
              </p>
            </div>
            <div class="text-xs font-mono text-muted-foreground">Python &bull; FastAPI &bull; Selenium &bull; React &bull; MongoDB &bull; Docker &bull; LLM</div>
          </article>

          <article class="p-6 rounded-2xl border border-border bg-card/60 flex flex-col justify-between">
            <div>
              <div class="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Enterprise Software &bull; Neolians</div>
              <h3 class="text-2xl font-bold mb-3">Neo TM – Enterprise AI Module & SSO</h3>
              <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                Full-stack enterprise application with automated data analysis modules, Keycloak Single Sign-On (SSO), and OAuth2 authentication across Spring Boot and Angular services.
              </p>
            </div>
            <div class="text-xs font-mono text-muted-foreground">Java &bull; Spring Boot &bull; Angular &bull; Python &bull; Keycloak &bull; OAuth2</div>
          </article>

          <article class="p-6 rounded-2xl border border-border bg-card/60 flex flex-col justify-between">
            <div>
              <div class="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Full-Stack &bull; Academic Project</div>
              <h3 class="text-2xl font-bold mb-3">TimeForge – Smart Time & Team Management</h3>
              <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                Enterprise productivity platform for structured task tracking, objectives, team roles, JWT security, and automated PDF reports with iTextPDF.
              </p>
            </div>
            <div class="text-xs font-mono text-muted-foreground">Spring Boot &bull; Angular &bull; MySQL &bull; JWT &bull; Bootstrap &bull; iTextPDF</div>
          </article>

          <article class="p-6 rounded-2xl border border-border bg-card/60 flex flex-col justify-between">
            <div>
              <div class="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Web Application &bull; Academic Project</div>
              <h3 class="text-2xl font-bold mb-3">Dormitory & Campus Management Platform</h3>
              <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                Room reservation and student housing administrative tracking with Spring Security role-based access control and Thymeleaf server rendering.
              </p>
            </div>
            <div class="text-xs font-mono text-muted-foreground">Spring Boot &bull; Thymeleaf &bull; MySQL &bull; Spring Security</div>
          </article>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE SECTION -->
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
              <span class="text-sm text-primary font-medium">2025 | Tunis, Tunisia</span>
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

    <!-- EDUCATION SECTION -->
    <section id="education" aria-labelledby="education-heading" class="py-20 border-t border-border/50">
      <div class="container mx-auto px-4 max-w-5xl">
        <h2 id="education-heading" class="text-3xl font-bold tracking-tight mb-4">Education / Formation</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <h3 class="text-xl font-bold mb-1">Software Engineering Degree</h3>
            <p class="text-primary font-medium text-sm mb-3">ESPRIT – École Supérieure Privée d'Ingénierie et de Technologies</p>
            <p class="text-sm text-muted-foreground">Specialization in Software Engineering, AI, Distributed Systems, and DevOps.</p>
          </article>
          <article class="p-6 rounded-2xl border border-border bg-card/60">
            <h3 class="text-xl font-bold mb-1">Preparatory Program (Mathematics & Physics)</h3>
            <p class="text-primary font-medium text-sm mb-3">FSM Monastir University</p>
            <p class="text-sm text-muted-foreground">Intensive higher education preparatory program in STEM, advanced mathematics, physics, and computing.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CONTACT & FOOTER -->
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

let html = fs.readFileSync(indexPath, "utf8");

// Remplacement du contenu de <div id="root"></div> par le contenu prérendu statique
if (html.includes('<div id="root"></div>')) {
  html = html.replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);
  fs.writeFileSync(indexPath, html, "utf8");
  console.log("Successfully prerendered and injected static semantic HTML into dist/index.html");
} else {
  console.warn("Warning: <div id=\"root\"></div> not found or already replaced in dist/index.html");
}
