export const content = {
  name: "Harish Krishna K",
  tagline: "Mechanical Solutions Engineer | Hardware & Automation Systems",
  summary: "Mechanical Engineering graduate with hands-on experience designing, instrumenting, and validating physical systems. Skilled in translating engineering requirements into testable hardware solutions through rapid prototyping, sensor integration, experimental validation, and system-level problem solving. Experienced in building custom test infrastructure and applying first-principles engineering to real-world hardware challenges, supported by strong scripting and automation capabilities to accelerate integration and deployment.",
  education: {
    degree: "Bachelor of Engineering (B.E.), Mechanical Engineering",
    institution: "Anna University, Trichy",
    period: "2019 — 2023",
  },
  certifications: [
    { name: "Microsoft Certified: Azure AI Engineer Associate", url: "https://learn.microsoft.com/api/credentials/share/en-gb/Harish%20KrishnaK/6C2C67A36AEC710E" },
    { name: "Introduction to Battery-Management Systems — Coursera", url: "https://coursera.org/verify/8WAJ3KT8ZSU7" },
    { name: "Motors and Motor Control Circuits — Coursera", url: "https://coursera.org/verify/A48Z35QTTCKM" },
    { name: "Equivalent Circuit Cell Model Simulation — Coursera", url: "https://coursera.org/verify/R6H22VZPMRC8" },
    { name: "Converter Circuits — Coursera", url: "https://coursera.org/verify/48WXQXH9BGCL" },
    { name: "Python Programming — GUVI", url: "https://guvi.in/certificate?id=Wg627Z109DB6R119Ff" },
  ],
  languages: [
    { lang: "Tamil", proficiency: "LSRW" },
    { lang: "English", proficiency: "LSRW" },
    { lang: "Telugu", proficiency: "LS" },
    { lang: "Kannada", proficiency: "LS" },
    { lang: "Hindi", proficiency: "RW" },
  ],
  skills: [
    {
      category: "Mechanical Design & CAD",
      items: ["CAD Drafting & Technical Drawing", "Rapid Prototyping (3D Printing)", "Reverse Engineering", "Design for Manufacturing (DFM)"],
    },
    {
      category: "Systems Engineering & Validation",
      items: ["System Identification & Instrumentation", "Experimental Validation", "Design of Experiments (DOE)", "Thermal Analysis", "Root Cause Analysis"],
    },
    {
      category: "Automation & Integration",
      items: ["Sensor Data Acquisition", "Microcontroller Integration (Arduino/ESP)", "Python", "GenAI APIs", "Workflow Automation (n8n)"],
    },
    {
      category: "Operations & Deployment",
      items: ["Process Bottleneck Resolution", "Lean / Six Sigma", "Cross-Functional Coordination"],
    },
  ],
  experience: [
    {
      company: "Techfinite Systems",
      location: "Coimbatore, TN",
      role: "Associate System Engineer Trainee",
      period: "03/2025 – 04/2026",
      points: [
        "Designed automation and integration workflows using Python and low-code platforms (n8n), translating complex operational requirements into repeatable and scalable system architectures.",
        "Deployed automated applications and multi-agent AI pipelines (CrewAI, MCP, RAG) to handle complex document processing, reducing manual review effort.",
        "Developed and shipped cross-platform mobile tools using Flutter, effectively bridging user interfaces with complex backend logic.",
        "Ensured high-reliability structured data extraction through iterative prompt optimization and strict schema validation.",
      ],
    },
    {
      company: "Shriram Finance Limited",
      location: "Hosur, TN",
      role: "Management Trainee (Operations & Coordination)",
      period: "11/2023 – 08/2024",
      points: [
        "Analyzed operational data to identify process bottlenecks, optimizing workflows to scale regional capacity and reduce process cycle times.",
        "Coordinated cross-functional teams and allocated resources to ensure strict compliance with quality, regulatory, and cost constraints.",
        "Managed regional risk operations by conducting rigorous, data-driven assessments for diverse clients.",
      ],
    },
  ],
  projects: [
    {
      title: "Design, Instrumentation & Validation of Experimental Thermal Test Rig",
      category: "Mechanical Design & Instrumentation",
      period: "02/2022 – 06/2022",
      points: [
        "Designed and fabricated a custom experimental test bed using an electrically heated vertical copper plate, glass shielding, and a double-stage gear reduction mechanism (1:300 ratio) to estimate thermal boundary layers.",
        "Integrated a thermocouple sensor with a precision gear-driven pointer mechanism to accurately measure the micro-level temperature gradient away from the heated surface.",
        "Validated experimental observations against theoretical heat-transfer models through CFD-based simulation and comparative error analysis using Energy2D.",
      ],
      links: [],
    },
    {
      title: "Embedded Battery Monitoring and Thermal Protection System",
      category: "Embedded Systems",
      period: "02/2023 – 05/2023",
      points: [
        "Monitored voltage, current, and thermal parameters across a custom-built 12V 18650 Lithium-Ion battery pack using integrated sensing (LM35, ACS712) and data acquisition systems.",
        "Engineered an automated thermal management system utilizing an Arduino Uno R3, a 12V relay, a heat sink with heat pipes, and a BLDC fan to dynamically regulate battery temperature and prevent thermal runaway.",
      ],
      links: [
        { label: "Live Dashboard", url: "https://harishkrishna-k.github.io/Li-ion_PMS/demo-dashboard/" },
      ],
    },
    {
      title: "ESP-Based Sensor Acquisition and Control Platform",
      category: "Embedded Systems",
      period: "Ongoing",
      points: [
        "Designed embedded sensing systems using ESP8266/ESP32 and Arduino platforms for real-time acquisition of environmental and operational data.",
        "Integrated sensors, communication modules, and automated control logic to support experimentation, instrumentation, and hardware validation workflows.",
        "Performed sensor calibration, data validation, and troubleshooting to improve measurement reliability and system repeatability.",
      ],
      links: [],
    },
    {
      title: "MD-Convert",
      category: "Automation / Software",
      period: "",
      points: [
        "Streamlit-based application that converts various document formats (PDF, Docx) into clean Markdown, optimized for LLM context injection and RAG pipeline ingestion.",
      ],
      links: [
        { label: "Live App", url: "https://md-convert.streamlit.app/" },
      ],
    },
  ],
  contact: {
    email: "harishkrishna.k@outlook.com",
    linkedin: "https://www.linkedin.com/in/harishkrishnak",
    github: "https://github.com/harishkrishna-k",
  },
};
