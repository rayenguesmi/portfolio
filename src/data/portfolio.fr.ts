import { Briefcase, Headphones, Bot } from "lucide-react";
import { Project } from "@/components/portfolio/ProjectDetailsModal";
import { Internship } from "@/components/portfolio/InternshipDetailsModal";

// ── Projets (FR) ──
export const projectsFr: Project[] = [
  {
    title: "Plateforme d'Automatisation de Tests End-to-End par IA",
    company: "PFE – Tunisie Telecom",
    period: "2025",
    location: "Tunis, Tunisie",
    description: "Un pipeline intelligent d'automatisation de tests end-to-end qui génère et exécute des scripts de tests Selenium automatiquement à partir de spécifications Markdown en utilisant des modèles de langage (LLM). Le pipeline analyse les specs Markdown → le LLM génère des cas de test structurés (positifs, négatifs & cas limites) → le DOM Scanner analyse le site web en direct avec Chrome headless pour extraire les sélecteurs CSS réels → les scripts Selenium sont générés et exécutés par Pytest → des rapports HTML/JSON sont produits avec un statut de réussite/échec par fonctionnalité. Un frontend React interroge les résultats en temps réel via un webhook Node.js connecté à MongoDB.",
    icon: Bot,
    category: "AI",
    technologies: ["Python", "FastAPI", "LLM", "Groq", "Ollama", "Selenium", "Pytest", "React", "MongoDB", "Node.js", "Docker", "GitHub Actions"],
    highlights: [
      "Génération de tests sans code manuel à partir de simples spécifications Markdown",
      "Support multi-LLM : Groq (llama-3.3-70b), Ollama (qwen2.5-coder)",
      "Analyse DOM automatique avec Chrome headless pour extraire les sélecteurs CSS réels",
      "Orchestration complète du pipeline via FastAPI avec exécution Pytest",
      "Rapports HTML + JSON avec statut de réussite/échec par fonctionnalité",
      "Frontend React avec interrogation des résultats en temps réel via webhook Node.js et MongoDB"
    ],
    status: "Completed",
    images: [],
    videoUrl: "/videos/autotest-demo.mp4",
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "TimeForge – Gestion Intelligente du Temps & des Objectifs",
    company: "Projet Académique",
    period: "Fév – Mai 2025",
    location: "Tunis, Tunisie",
    description: "Une plateforme full-stack d'entreprise pour gérer les tâches, projets, objectifs et équipes. Conçue pour les organisations ayant besoin d'un suivi de projet structuré avec un accès sécurisé, des mises à jour en temps réel et des rapports exportables. Backend REST API avec Spring Boot et frontend Angular SPA, sécurisé avec l'authentification JWT et supportant la génération de rapports PDF avec iTextPDF.",
    icon: Briefcase,
    category: "Dev",
    technologies: ["Spring Boot", "Angular", "MySQL", "REST API", "JWT Auth", "Bootstrap", "iTextPDF"],
    highlights: [
      "Gestion des tâches, projets et objectifs pour les équipes d'entreprise",
      "Authentification et autorisation basées sur JWT",
      "Export de rapports PDF avec iTextPDF",
      "API RESTful avec opérations CRUD complètes",
      "SPA Angular responsive avec Bootstrap"
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "Plateforme de Gestion de Résidence Universitaire",
    company: "Projet Académique",
    period: "Mai – Juil 2025",
    location: "Tunis, Tunisie",
    description: "Une plateforme web pour gérer les réservations de chambres étudiantes, les demandes administratives et le suivi de la résidence universitaire. Contrôle d'accès basé sur les rôles avec Spring Security, permettant des workflows distincts pour les étudiants et les administrateurs.",
    icon: Briefcase,
    category: "Dev",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security", "Bootstrap"],
    highlights: [
      "Système de réservation de chambres étudiantes avec suivi des disponibilités",
      "Gestion et suivi des demandes pour les administrateurs",
      "Contrôle d'accès basé sur les rôles avec Spring Security",
      "Rendu côté serveur avec les templates Thymeleaf"
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "FitMe – Application de Gestion Fitness",
    company: "Projet Académique",
    period: "Oct – Déc 2024",
    location: "Tunis, Tunisie",
    description: "Une application fitness personnalisée pour les coachs permettant de créer des plans d'entraînement sur mesure, de suivre la nutrition et de gérer une boutique de compléments. Développée avec Symfony selon l'architecture MVC.",
    icon: Headphones,
    category: "Dev",
    technologies: ["Symfony", "Twig", "MySQL", "Bootstrap"],
    highlights: [
      "Gestion des plans d'entraînement et de nutrition personnalisés par client",
      "Boutique de compléments intégrée avec catalogue produits",
      "Gestion coach-client avec tableaux de bord séparés",
      "Architecture MVC avec Symfony et templates Twig"
    ],
    status: "Completed",
    images: [],
    githubUrl: "https://github.com/rayenguesmi"
  },
  {
    title: "Application Neo TM – Module IA",
    company: "Neolians",
    period: "Juin – Août 2025",
    location: "Tunis, Tunisie",
    description: "Développement de fonctionnalités full-stack et intégration de modules IA dans l'application d'entreprise Neo TM. Implémentation de Keycloak SSO (Single Sign-On) et de l'authentification OAuth2 pour un accès entreprise sécurisé. Intégration de modules d'analyse de données et d'automatisation des processus alimentés par l'IA dans une plateforme Spring Boot / Angular existante.",
    icon: Bot,
    category: "AI",
    technologies: ["Java", "Spring Boot", "Angular", "Python", "Keycloak", "AI"],
    highlights: [
      "Intégration Keycloak SSO/OAuth2 pour l'authentification entreprise",
      "Modules d'analyse de données et d'automatisation par IA",
      "Développement full-stack : backend Spring Boot + frontend Angular",
      "Sécurité entreprise avec contrôle d'accès basé sur les rôles"
    ],
    status: "Completed",
    images: []
  }
];

// ── Éducation (FR) ──
export const educationFr = [
  {
    degree: "Diplôme d'Ingénieur en Génie Logiciel",
    institution: "ESPRIT – École Supérieure Privée d'Ingénierie et de Technologies",
    location: "Tunis, Tunisie",
    period: "Sept 2022 – Juin 2025",
    status: "Diplômé",
    description: "Diplômé en génie logiciel avec une spécialisation en IA, automatisation, DevOps et développement web full-stack. Conception de systèmes intelligents et scalables combinant des pratiques solides de génie logiciel avec l'Intelligence Artificielle.",
    coursework: ["Architecture logicielle", "IA & Machine Learning", "DevOps", "Développement web", "Bases de données", "Agile/Scrum"],
    achievements: ["Projet PFE : Plateforme d'automatisation de tests par IA", "Plusieurs stages en développement web et intégration IA", "Certifications NVIDIA Deep Learning"]
  },
  {
    degree: "Classes Préparatoires – Mathématiques et Physique",
    institution: "Université FSM Monastir",
    location: "Monastir, Tunisie",
    period: "Sept 2020 – Juin 2022",
    status: "Diplômé",
    description: "Programme préparatoire rigoureux en mathématiques et physique, posant des bases STEM solides avant l'admission en école d'ingénieurs.",
    coursework: ["Mathématiques", "Physique", "Informatique fondamentale", "Principes d'ingénierie", "Résolution de problèmes"],
    achievements: ["Solides bases STEM", "Admission au programme d'ingénierie ESPRIT"]
  }
];

// ── Stages (FR) ──
export const internshipsFr: Internship[] = [
  {
    company: "Tunisie Telecom",
    role: "PFE – PLATEFORME D'AUTOMATISATION DE TESTS END-TO-END PAR IA",
    period: "2025",
    location: "Tunis, Tunisie",
    description: "Conception et développement d'un pipeline intelligent d'automatisation de tests end-to-end qui génère et exécute des scripts Selenium à partir de spécifications Markdown via des LLMs. La plateforme analyse les specs, génère des cas de test structurés, scanne le DOM avec Chrome headless, produit des scripts pytest, les exécute et génère des rapports HTML/JSON complets. Un frontend React interroge les résultats en temps réel via un webhook Node.js et MongoDB.",
    logoUrl: "/images-removebg-preview (1).png",
    companyUrl: "",
    technologies: ["Python", "FastAPI", "React", "Node.js", "MongoDB", "Selenium", "Pytest", "Groq", "Ollama", "Docker", "GitHub Actions"],
    certificateUrl: ""
  },
  {
    company: "Neolians",
    role: "STAGIAIRE – DÉVELOPPEMENT & IA SUR L'APPLICATION NEO TM",
    period: "Juin 2025 – Août 2025",
    location: "Rue du Riyal, Tunis, Tunisie",
    description: "Développement de fonctionnalités Front-End et Back-End pour l'application Neo TM. Intégration de modules IA pour l'analyse de données et l'automatisation des processus. Implémentation de Keycloak pour le Single Sign-On (SSO) et l'authentification OAuth2 en environnement d'entreprise.",
    logoUrl: "/download__4_-removebg-preview.png",
    companyUrl: "",
    technologies: ["Java", "Spring Boot", "Angular", "Python", "AI", "Keycloak"],
    certificateUrl: ""
  },
  {
    company: "EnerP",
    role: "STAGIAIRE – APPLICATION DE GESTION DE SYSTÈMES PHOTOVOLTAÏQUES",
    period: "Juin 2024 – Août 2024",
    location: "Ben Arous, Tunisie",
    description: "Développement d'une application web pour la gestion et l'analyse des performances de systèmes photovoltaïques. Suivi en temps réel des données de panneaux solaires et des métriques de production.",
    logoUrl: "/download-removebg-preview.png",
    companyUrl: "",
    technologies: ["Développement Web", "Analyse de données", "Monitoring des performances"],
    certificateUrl: ""
  },
  {
    company: "Amen Bank",
    role: "STAGIAIRE – OPTIMISATION VOIP",
    period: "Avril 2024 – Juin 2024",
    location: "Tunis, Tunisie",
    description: "Analyse et optimisation des systèmes de communication VoIP dans un environnement bancaire. Identification des goulots d'étranglement et mise en œuvre d'améliorations pour la qualité des appels et l'efficacité du réseau.",
    logoUrl: "/download-removebg-preview (1).png",
    companyUrl: "",
    technologies: ["VoIP", "Optimisation réseau", "Télécommunications"],
    certificateUrl: ""
  }
];
