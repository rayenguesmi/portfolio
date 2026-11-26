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
import { Project } from "@/components/portfolio/ProjectDetailsModal";
import { Internship } from "@/components/portfolio/InternshipDetailsModal";

// ── Projets (FR) ──
export const projectsFr: Project[] = [
  {
    slug: "autotest",
    title: "Plateforme d'Automatisation de Tests End-to-End par IA",
    company: "Tunisie Telecom (PFE)",
    period: "01/2026 – 07/2026",
    location: "Tunis, Tunisie",
    role: "Ingénieur IA & Full Stack (Stagiaire PFE)",
    description:
      "Un pipeline intelligent d'automatisation de tests end-to-end générant et exécutant des scripts Selenium automatiquement à partir de spécifications Markdown via des modèles de langage (LLM).",
    problem:
      "Les tests fonctionnels manuels en environnement télécom sont lents, coûteux et fragiles. La maintenance des sélecteurs CSS sur des dizaines d'écrans entraîne un taux élevé de faux positifs à chaque mise à jour de l'interface.",
    solution:
      "Conception d'un pipeline 100% autonome : analyse des spécifications Markdown &rarr; génération des cas de test structurés par LLM (Groq / Ollama) &rarr; analyse DOM automatique par Chrome Headless pour extraire les sélecteurs réels &rarr; exécution des scripts Selenium par Pytest &rarr; rapports HTML/JSON en direct.",
    architecture:
      "Spécification Markdown &rarr; Moteur LLM (Llama 3.3 / Qwen 2.5) &rarr; Scanner DOM Headless &rarr; Moteur d'exécution Pytest &rarr; Backend FastAPI &rarr; Webhook Node.js & MongoDB &rarr; Tableau de bord React",
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
      "Génération complète de tests sans code manuel à partir de spécifications Markdown brutes",
      "Support multi-LLM : Groq Cloud (Llama 3.3 70B) et exécution locale avec Ollama (Qwen 2.5 Coder)",
      "Analyse automatique du DOM avec Chrome Headless pour extraire des sélecteurs CSS résilients",
      "Orchestration via FastAPI avec relance automatique des scénarios en cas d'instabilité réseau",
      "Tableau de bord React avec interrogation temps réel des résultats via webhooks Node.js et MongoDB",
    ],
    results: [
      "Réduction de plus de 75% du temps de création de scripts de test par rapport à Selenium manuel",
      "Génération de 50+ scénarios complets (positifs, négatifs, limites) en moins de 60 secondes",
      "Suppression totale des erreurs de sélecteurs obsolètes grâce au scanner DOM dynamique",
    ],
    status: "Completed",
    images: [],
    videoUrl: "/videos/autotest-demo.mp4",
    githubUrl: "https://github.com/rayenguesmi",
  },
  {
    slug: "devis-management",
    title: "Devis Management – Plateforme IA de Traitement de Devis",
    company: "EnerP",
    period: "08/2026 – 09/2026",
    location: "Ben Arous, Tunisie",
    role: "Software Engineer",
    description:
      "Plateforme web d'entreprise pour l'analyse automatisée par IA, le traitement, le suivi du cycle de vie des devis clients et les relances intelligentes.",
    problem:
      "Les équipes commerciales et techniques perdaient un temps précieux à retranscrire manuellement les devis complexes depuis des PDFs et emails, entraînant des retards et des relances oubliées.",
    solution:
      "Développement d'une application web centralisée dotée d'un moteur d'extraction documentaire IA, d'un suivi précis des statuts (Brouillon, En attente, Validé, Facturé) et de notifications automatisées.",
    architecture:
      "Backend FastAPI / Node.js &rarr; PostgreSQL &rarr; Pipeline d'extraction documentaire &rarr; Frontend React Tailwind &rarr; Déploiement Dockerisé",
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
      "Extraction automatique des lignes de devis et montants depuis des documents hétérogènes",
      "Gestion complète du cycle de vie des devis avec déclencheurs automatiques de relance",
      "Contrôle d'accès basé sur les rôles pour les commerciaux et la direction",
      "Tableau de bord statistique avec taux de conversion et analyses financières",
    ],
    results: [
      "Délai moyen de traitement des devis divisé par 3",
      "Zéro devis client oublié grâce au système de relances automatiques programmées",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "enerp-barcode-manager",
    title: "EnerP Barcode Manager – Suivi & Traçabilité",
    company: "EnerP",
    period: "09/2026 – 10/2026",
    location: "Ben Arous, Tunisie",
    role: "Développeur Full Stack",
    description:
      "Application web de génération, scan et suivi de codes-barres et QR codes pour fiabiliser l'identification des articles et la traçabilité des stocks.",
    problem:
      "La gestion des stocks et matériels souffrait d'erreurs de saisie manuelle et de difficultés à imprimer des étiquettes normalisées.",
    solution:
      "Mise en place d'une solution complète supportant les douchettes USB et le scan caméra, l'impression thermique directe d'étiquettes et l'historique complet des mouvements.",
    architecture:
      "SPA React &rarr; API REST Express &rarr; Base de données PostgreSQL &rarr; Moteur JsBarcode &rarr; Conteneur Docker",
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
      "Génération unique de codes-barres et QR codes par catégorie d'équipement",
      "Support matériel double : scanners laser USB et caméra embarquée d'appareil mobile",
      "Mise en page d'étiquettes en série avec impression thermique directe",
      "Journal d'audit détaillé garantissant une traçabilité utilisateur complète",
      "Modules d'importation et d'exportation de données Excel et PDF",
    ],
    results: [
      "Accélération de 60% du temps de pointage des réceptions de matériel",
      "Traçabilité garantie à 100% sur chaque article référencé",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "frais-enerp",
    title: "Frais EnerP – Gestion Mobile des Notes de Frais",
    company: "EnerP",
    period: "10/2026 – 11/2026",
    location: "Ben Arous, Tunisie",
    role: "Développeur Full Stack / Mobile",
    description:
      "Application mobile de gestion des frais de déplacement avec capture photo des justificatifs et circuit de validation hiérarchique.",
    problem:
      "Les collaborateurs en déplacement égaraient régulièrement leurs justificatifs papier, allongeant considérablement les délais de remboursement.",
    solution:
      "Création d'une application mobile intuitive permettant la prise de photo instantanée des reçus, le suivi par mission et l'approbation managériale en temps réel.",
    architecture:
      "App Mobile React Native &rarr; API Express Node.js &rarr; Stockage Justificatifs & PostgreSQL &rarr; Auth JWT &rarr; Générateur PDF",
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
      "Création de notes de frais par mission, projet et type de dépense",
      "Capture et compression automatique des photos de reçus",
      "Circuit de validation avec motifs de refus et alertes de statut en direct",
      "Génération automatique d'états récapitulatifs mensuels en format PDF",
    ],
    results: [
      "Délai de traitement des remboursements ramené de 2 semaines à moins de 48h",
      "Suppression totale des contestations relatives aux justificatifs perdus",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "neo-tm",
    title: "Application Neo TM – Modules IA & SSO Keycloak",
    company: "Neolians",
    period: "06/2025 – 08/2025",
    location: "Tunis, Tunisie",
    role: "Stagiaire Ingénieur Logiciel",
    description:
      "Modernisation d'application d'entreprise : intégration de l'authentification Keycloak SSO/OAuth2 et de modules IA d'analyse et d'automatisation.",
    problem:
      "Les applications internes fonctionnaient en silos sans authentification unique et nécessitaient des rapprochements manuels de données.",
    solution:
      "Intégration d'un serveur d'identité Keycloak pour un SSO centralisé et développement de modules analytiques intelligents en Python et Spring Boot.",
    architecture:
      "Microservices Spring Boot & Keycloak &rarr; Frontend Angular &rarr; Modules IA Python &rarr; PostgreSQL",
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
      "API REST",
      "Docker",
    ],
    highlights: [
      "Architecture de sécurité Keycloak SSO et OAuth2 pour l'accès entreprise unifié",
      "Modules d'analyse automatique de données opérationnelles",
      "Développement full-stack : backend Spring Boot et interfaces Angular modulaires",
      "Contrôle d'accès strict basé sur les rôles (RBAC)",
    ],
    results: [
      "Expérience de connexion unifiée sécurisée sur l'ensemble du système",
      "Automatisation des contrôles récurrents de données",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "timeforge",
    title: "TimeForge – Gestion Intelligente du Temps & des Objectifs",
    company: "Projet Académique",
    period: "02/2025 – 05/2025",
    location: "Tunis, Tunisie",
    role: "Lead Développeur Full Stack",
    description:
      "Plateforme d'entreprise pour le pilotage structuré des tâches, projets, objectifs d'équipe et export automatisé de bilans PDF avec iTextPDF.",
    problem:
      "Besoin d'un outil de suivi opérationnel clair et sécurisé sans la lourdeur des outils du marché.",
    solution:
      "Développement d'une application réactive avec backend Spring Boot sécurisé par JWT et frontend Angular, intégrant la génération de synthèses PDF.",
    architecture:
      "API REST Spring Boot &rarr; SPA Angular &rarr; Base de données MySQL &rarr; Auth JWT &rarr; Moteur iTextPDF",
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
      "Gestion hiérarchique des tâches, jalons de projets et objectifs",
      "Authentification et autorisations sans état basées sur JWT",
      "Génération et téléchargement de rapports PDF synthétiques avec iTextPDF",
      "API RESTful avec couverture CRUD complète et validation des entrées",
    ],
    results: [
      "Mise en œuvre réussie et adoptée sur les projets collaboratifs académiques",
      "Architecture propre respectant les bonnes pratiques de conception logicielle",
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi",
  },
  {
    slug: "photovoltaic-system",
    title: "Application de Supervision Photovoltaïque",
    company: "EnerP",
    period: "06/2024 – 08/2024",
    location: "Ben Arous, Tunisie",
    role: "Stagiaire Développeur Web",
    description:
      "Application web pour la supervision en temps réel, l'analyse télémétrique et le suivi de performance d'installations solaires.",
    problem:
      "Les exploitants manquaient d'un tableau de bord visuel centralisé pour détecter les baisses de production et défauts d'onduleurs.",
    solution:
      "Développement d'une interface web réactive agrégeant les flux de données télémétriques avec indicateurs d'état en direct.",
    architecture:
      "Application Web &rarr; API Télémétrique &rarr; Base de données temps réel &rarr; Dashboard de visualisation",
    icon: Sun,
    category: "Full Stack",
    technologies: [
      "JavaScript",
      "HTML5/CSS3",
      "Visualisation de données",
      "API REST",
      "Monitoring",
    ],
    highlights: [
      "Visualisation temps réel de la puissance produite et courbes historiques",
      "Détection des anomalies de seuil sur les chaînes de panneaux photovoltaïques",
      "Exportation des rapports périodiques de rendement énergétique",
    ],
    results: [
      "Identification immédiate des chaînes de panneaux en sous-performance",
      "Livraison d'une interface légère et fluide pour les techniciens",
    ],
    status: "Completed",
    images: [],
  },
  {
    slug: "voip-optimization",
    title: "Audit & Optimisation de la Qualité VoIP",
    company: "Amen Bank",
    period: "04/2024 – 06/2024",
    location: "Tunis, Tunisie",
    role: "Stagiaire Ingénieur",
    description:
      "Étude technique approfondie, diagnostic réseau et optimisation de la qualité de service (QoS) des communications VoIP en milieu bancaire.",
    problem:
      "Dégradations régulières des communications vocales (gigue, coupures) lors des pics de charge réseau dans les agences bancaires.",
    solution:
      "Analyse des flux SIP et RTP, détection des goulets d'étranglement et configuration de mécanismes de priorisation du trafic vocal.",
    architecture:
      "Protocoles VoIP (SIP / RTP) &rarr; Capture et analyse de paquets &rarr; Politiques QoS &rarr; Commutateurs & IPBX",
    icon: PhoneCall,
    category: "Full Stack",
    technologies: [
      "VoIP",
      "Protocoles SIP/RTP",
      "Optimisation réseau",
      "QoS",
      "Télécommunications",
      "Wireshark",
    ],
    highlights: [
      "Capture et analyse fine de paquets réseau identifiant la gigue et les retards SIP",
      "Mise en place de règles de priorisation de bande passante dédiées à la voix",
      "Rédaction d'un rapport de diagnostic et recommandations pour l'infrastructure IT",
    ],
    results: [
      "Diminution significative des coupures et amélioration de la clarté des appels",
      "Fourniture d'un guide technique de dimensionnement pour les futures extensions",
    ],
    status: "Completed",
    images: [],
  },
];

// ── Éducation (FR) ──
export const educationFr = [
  {
    degree: "Diplôme d'Ingénieur en Génie Logiciel",
    institution: "ESPRIT – École Supérieure Privée d'Ingénierie et de Technologies",
    location: "Tunis, Tunisie",
    period: "Sept 2022 – Juin 2025",
    status: "Diplômé",
    description:
      "Formation d'ingénieur d'excellence axée sur l'Architecture logicielle, l'IA appliquée, le DevOps et le développement web full-stack. Conception de systèmes logiciels intelligents, résilients et sécurisés combinant les standards de l'ingénierie et l'Intelligence Artificielle.",
    coursework: [
      "Architecture logicielle",
      "IA & Machine Learning",
      "DevOps & CI/CD",
      "Développement web full-stack",
      "Bases de données",
      "Méthodes Agiles / Scrum",
    ],
    achievements: [
      "Projet de Fin d'Études (PFE) : AutoTest – Automatisation de tests par IA chez Tunisie Telecom",
      "Multiples stages en développement web et intégration de solutions IA d'entreprise",
      "Certifications NVIDIA Deep Learning Institute",
    ],
  },
  {
    degree: "Classes Préparatoires – Mathématiques et Physique",
    institution: "Université FSM Monastir",
    location: "Monastir, Tunisie",
    period: "Sept 2020 – Juin 2022",
    status: "Diplômé",
    description:
      "Cursus préparatoire intensif en mathématiques supérieures, physique et informatique fondamentale, établissant des bases scientifiques et analytiques solides avant l'admission en école d'ingénieurs.",
    coursework: [
      "Mathématiques fondamentales",
      "Physique générale",
      "Algorithmique & Informatique",
      "Principes d'ingénierie",
      "Résolution de problèmes complexes",
    ],
    achievements: [
      "Excellente formation scientifique STEM",
      "Admission réussie au cycle d'ingénieur de l'ESPRIT",
    ],
  },
];

// ── Stages & Expériences (FR) ──
export const internshipsFr: Internship[] = [
  {
    company: "EnerP",
    role: "SOFTWARE ENGINEER",
    period: "08/2026 – Présent",
    location: "Ben Arous, Tunisie",
    description:
      "Conception et développement d'architectures logicielles en production : plateforme IA de gestion des devis, solution de suivi et scan de codes-barres/QR codes, et application mobile de notes de frais. Développement full-stack avec React, React Native, Node.js, FastAPI, PostgreSQL et Docker.",
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
      "Intégration IA",
    ],
    certificateUrl: "",
  },
  {
    company: "Tunisie Telecom",
    role: "STAGIAIRE PFE – PLATEFORME D'AUTOMATISATION DE TESTS PAR IA",
    period: "01/2026 – 07/2026",
    location: "Tunis, Tunisie",
    description:
      "Conception et développement de la plateforme AutoTest : pipeline autonome analysant des spécifications Markdown, générant des scénarios via des LLMs (Groq, Ollama), scannant le DOM avec Chrome Headless, exécutant les scripts Selenium avec Pytest et restituant les résultats en temps réel sur un tableau de bord React/MongoDB.",
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
    role: "STAGIAIRE INGÉNIEUR – DÉVELOPPEMENT & IA SUR NEO TM",
    period: "06/2025 – 08/2025",
    location: "Tunis, Tunisie",
    description:
      "Développement de fonctionnalités full-stack pour l'application d'entreprise Neo TM avec Spring Boot et Angular. Implémentation du Single Sign-On (SSO) et OAuth2 via Keycloak. Intégration de modules IA d'analyse de données et d'automatisation.",
    logoUrl: "/download__4_-removebg-preview.png",
    companyUrl: "",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "Python",
      "Keycloak",
      "OAuth2",
      "Intégration IA",
    ],
    certificateUrl: "",
  },
  {
    company: "EnerP",
    role: "STAGIAIRE DÉVELOPPEUR WEB – SUPERVISION PHOTOVOLTAÏQUE",
    period: "06/2024 – 08/2024",
    location: "Ben Arous, Tunisie",
    description:
      "Développement d'une application web de suivi télémétrique et d'analyse de performance des systèmes photovoltaïques. Surveillance en temps réel des métriques de production solaire.",
    logoUrl: "/download-removebg-preview.png",
    companyUrl: "",
    technologies: ["Développement Web", "Analyse de données", "Monitoring", "Télémétrie"],
    certificateUrl: "",
  },
  {
    company: "Amen Bank",
    role: "STAGIAIRE INGÉNIEUR – OPTIMISATION VOIP",
    period: "04/2024 – 06/2024",
    location: "Tunis, Tunisie",
    description:
      "Diagnostic et optimisation de la qualité de service (QoS) des infrastructures de communication VoIP en environnement bancaire. Analyse des flux, réduction de la gigue et amélioration de la stabilité des appels.",
    logoUrl: "/download-removebg-preview (1).png",
    companyUrl: "",
    technologies: ["VoIP", "Optimisation réseau", "QoS", "Télécommunications", "Wireshark"],
    certificateUrl: "",
  },
];
