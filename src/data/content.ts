export const content = {
  name: "Harish Krishna K",
  tagline: "Mechanical Solutions Engineer | Hardware & Automation Systems",
  about: {
    title: "Bridging mechanical systems with AI-driven automation.",
    description: "Mechanical Engineering graduate with deep expertise in physical system design, instrumentation, and experimental validation. I specialize in translating complex engineering constraints into testable hardware solutions, building custom test infrastructure from the ground up, and applying first-principles thinking to real-world deployment challenges. My work spans mechanical design, embedded systems, and AI-powered automation — a rare combination that lets me own a problem from sensor to software.",
  },
  education: {
    degree: "B.E. in Mechanical Engineering",
    institution: "Anna University, Trichy",
    period: "2019 — 2023",
  },
  certifications: [
    "Microsoft Certified: Azure AI Engineer Associate",
    "Introduction to Battery-Management Systems — Coursera",
    "Motors and Motor Control Circuits — Coursera",
    "Equivalent Circuit Cell Model Simulation — Coursera",
    "Converter Circuits — Coursera",
    "Python Programming — GUVI",
  ],
  skills: [
    {
      category: "Mechanical & Hardware",
      items: ["Mechanical Design & CAD", "GD&T & Technical Drawing", "3D Printing & Rapid Prototyping", "FEA & Thermal Analysis", "Arduino / ESP32 / ESP8266", "Sensor Integration & Data Acquisition", "Battery Management Systems"],
    },
    {
      category: "Systems Engineering & Validation",
      items: ["System Identification & First-Principles", "Design of Experiments (DOE)", "Instrumentation & Metrology", "Root Cause Analysis (RCA)", "Test Rig Design & Fabrication", "CFD Simulation (Energy2D)"],
    },
    {
      category: "AI & Automation",
      items: ["LLM Prompt Engineering & Agentic Workflows", "CrewAI / Multi-Agent Systems", "RAG & Vector Databases", "n8n Workflow Automation", "Ollama / Local LLM Inference", "MCP (Model Context Protocol)"],
    },
    {
      category: "Software & Cloud",
      items: ["Python", "TypeScript / JavaScript", "React", "Flutter / Dart", "Docker", "PostgreSQL / MongoDB", "REST APIs", "Azure (AI Certified)"],
    },
  ],
  experience: [
    {
      company: "Techfinite Systems",
      role: "Systems Engineer",
      period: "2025 — 2026",
      points: [
        "Built an LLM-powered agentic resume screening pipeline using n8n, Ollama, and Google Drive API — evaluated ~1,000 applications autonomously, compressing a multi-day manual process to under one hour.",
        "Designed multi-agent AI pipelines using CrewAI, MCP, and RAG to automate complex document processing, significantly reducing manual review cycles.",
        "Engineered prompt chains and structured JSON extraction schemas, improving LLM output reliability through iterative optimization and strict schema validation.",
        "Developed and shipped cross-platform mobile features for a Hospital Management System using Flutter and Frappe Framework.",
        "Managed end-to-end deployment lifecycle including build preparation, QA checkpoints, and Google Play Store publication.",
      ],
    },
    {
      company: "Shriram Finance Limited",
      role: "Management Trainee",
      period: "2023 — 2024",
      points: [
        "Managed regional risk operations by conducting rigorous data-driven credit risk assessments and financial analysis for diverse clients.",
        "Analyzed operational data, financial statements, and lead generation trends to identify process bottlenecks and optimize sales conversion rates.",
        "Supervised cross-functional teams, coordinated resource allocation, and monitored individual/team performance KPIs.",
        "Streamlined back-office workflows to support scalability and ensure compliance with quality and regulatory policies.",
      ],
    },
  ],
  projects: [
    {
      title: "Experimental Thermal Test Rig",
      category: "Mechanical Design & Instrumentation",
      description: "Designed and fabricated a custom experimental test bed for measuring micro-level temperature gradients over flat surfaces. Integrated a precision gear-reduction mechanism (1:300 ratio) driving a thermocouple to resolve sub-millimeter boundary layer profiles. Validated experimental results against CFD simulations using Energy2D.",
    },
    {
      title: "Battery Monitoring & Thermal Protection System",
      category: "Embedded Systems",
      description: "Developed a complete hardware-software diagnostic pipeline for 12V Li-Ion battery packs (12 cells, 11760 mAh). Features automated thermal management (BLDC fan trigger at >40°C), over/under-voltage protection relay, and real-time serial data visualization. Programmed on Arduino Uno using C/C++.",
    },
    {
      title: "AI Resume Screening & Agentic Dispatch",
      category: "Automation / AI",
      description: "End-to-end GenAI application processing ~1,000 resumes autonomously. Multi-step LLM pipeline with prompt engineering, structured output parsing, Google Drive integration, and automated scoring logic — built with n8n, Ollama, and Python.",
    },
    {
      title: "MD-Convert",
      category: "Automation / Software",
      description: "A Streamlit-based application optimized for converting document formats (PDF, Docx) into clean Markdown for LLM context injection and RAG pipeline ingestion.",
    },
    {
      title: "ESP-Based Sensor Acquisition Platform",
      category: "Embedded Systems",
      description: "Ongoing personal lab for real-time environmental data acquisition using ESP8266/ESP32 and Arduino platforms. Integrates sensors, communication modules, and automated control logic. Includes custom 3D-printed enclosures and sensor calibration workflows.",
    },
  ],
  contact: {
    email: "harishkrishna.k@outlook.com",
    linkedin: "https://www.linkedin.com/in/harishkrishnak",
    github: "https://github.com/harishkrishna-k",
  },
};
