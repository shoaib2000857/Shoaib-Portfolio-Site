export const identity = {
  name: "Shoaib Sadiq Salehmohamed",
  shortName: "Shoaib SSM",
  role: "AI researcher & systems engineer",
  location: "Hyderabad, India",
  email: "shoaibkulsums@gmail.com",
  resume: "/resume/Shoaib_Sadiq_Salehmohamed_Resume.pdf",
  github: "https://github.com/shoaib2000857",
  linkedin: "https://www.linkedin.com/in/shoaib-ssm/",
  leetcode: "https://leetcode.com/u/Shoaib_SSM/",
};

export const proofPoints = [
  {
    value: "2",
    label: "arXiv preprints",
    detail: "White-box and black-box LLM reliability",
    href: "https://arxiv.org/abs/2604.06277",
  },
  {
    value: "SIH ’25",
    label: "National winner",
    detail: "TattvaDrishti · AICTE Cyber Security Cell",
    href: "https://github.com/Team-ASHTOJ/TattvaDrishti",
  },
  {
    value: "Patent",
    label: "Application published",
    detail: "Rakshak · 202541112724 A",
    href: "https://rakshak.shoaibssm.me",
  },
];

export const featuredWork = [
  {
    index: "01",
    title: "Reliable language models",
    subtitle: "Research · LLM Lens",
    description:
      "I study whether hallucination signals can be read from transformer hidden states—and what a system should do when those signals say an answer is unreliable.",
    outcome:
      "Two arXiv preprints spanning internal representation probes and black-box behavioral detection.",
    flow: ["Prompt", "Hidden states", "Probe", "Reliability signal"],
    tags: ["PyTorch", "Transformers", "Evaluation", "Calibration"],
    primaryHref: "https://arxiv.org/abs/2604.06277",
    primaryLabel: "Read the paper",
    secondaryHref: "#research",
    secondaryLabel: "Research notes",
    kind: "research",
  },
  {
    index: "02",
    title: "Rakshak",
    subtitle: "Autonomous surveillance rover",
    description:
      "A hybrid edge–cloud rover that combines LiDAR, depth sensing, GPS, computer vision, autonomous navigation, and human takeover for perimeter monitoring.",
    outcome:
      "Led the system from hardware integration to field testing, a first-prize finish at Prakalp 2025, a conference presentation, and a published Indian patent application.",
    flow: ["Sense", "Perceive", "Navigate", "Supervise"],
    tags: ["Jetson Nano", "Pixhawk", "LiDAR", "OpenCV", "WebSockets"],
    primaryHref: "https://rakshak.shoaibssm.me",
    primaryLabel: "View project",
    secondaryHref: "https://github.com/shoaib2000857/rakshak-website",
    secondaryLabel: "Interface repo",
    kind: "robotics",
  },
  {
    index: "03",
    title: "TattvaDrishti",
    subtitle: "Cyber threat-intelligence platform",
    description:
      "An analyst-facing system for detecting AI-generated misinformation, mapping coordinated narratives, explaining risk, and preserving an auditable decision trail.",
    outcome:
      "Built with the winning Smart India Hackathon 2025 team and now continuing beyond the hackathon under the AICTE Cyber Security Cell.",
    flow: ["Ingest", "Detect", "Correlate", "Explain"],
    tags: ["FastAPI", "Next.js", "PyTorch", "SSE", "Graph intelligence"],
    primaryHref: "https://github.com/Team-ASHTOJ/TattvaDrishti",
    primaryLabel: "View repository",
    secondaryHref: null,
    secondaryLabel: null,
    kind: "intelligence",
  },
] as const;

export const supportingWork = [
  {
    title: "Carbon Passport AI",
    label: "Logistics intelligence",
    description:
      "Multimodal route optimization across road, rail, sea, and air with emissions forecasting, uncertainty ranges, explainable trade-offs, and shipment-level audit trails.",
    stack: ["FastAPI", "Next.js", "Graph data", "Ollama"],
    href: "https://github.com/shoaib2000857/green-hackathon",
    liveHref: "https://green-hackathon.vercel.app",
  },
  {
    title: "AstraOS",
    label: "Local-first AI workspace",
    description:
      "A privacy-first desktop workspace with persistent memory, grounded document Q&A, streaming chat, local models, and a Qdrant-backed retrieval layer.",
    stack: ["Tauri", "React", "FastAPI", "Qdrant", "Ollama"],
    href: "https://github.com/shoaib2000857/AstraOS",
    liveHref: null,
  },
  {
    title: "SeaWatch",
    label: "Maritime awareness MVP",
    description:
      "AIS and simulated SAR fusion for anomaly detection and dark-vessel correlation, with the limits of synthetic data documented as part of the design.",
    stack: ["Python", "FastAPI", "Isolation Forest", "Leaflet"],
    href: "https://github.com/shoaib2000857/SeaWatch",
    liveHref: null,
  },
] as const;

export const papers = [
  {
    number: "2604.06277",
    date: "April 2026",
    title:
      "Weakly Supervised Distillation of Hallucination Signals into Transformer Representations",
    description:
      "A weak-supervision framework that labels generations using grounding signals, then trains five probe architectures directly on LLaMA-2-7B hidden states so detection no longer needs external verification at inference time.",
    metrics: [
      ["15k", "labeled samples"],
      ["5", "probe architectures"],
      ["0.15–5.62 ms", "batched probe latency"],
    ],
    href: "https://arxiv.org/abs/2604.06277",
  },
  {
    number: "2606.07528",
    date: "June 2026",
    title: "BEACON: Behavioral Entropy Aggregation for Cross-Model Hallucination Detection",
    description:
      "A black-box detector built from semantic entropy, embedding geometry, chain-of-thought consistency, and paraphrase stability—useful when model internals are unavailable.",
    metrics: [
      ["0.8123", "AUROC"],
      ["7,617", "labeled examples"],
      ["7", "benchmarks"],
    ],
    href: "https://arxiv.org/abs/2606.07528",
  },
] as const;

export const experience = [
  {
    period: "Feb 2026 — now",
    role: "Research Intern",
    org: "LLM Lens",
    description:
      "Building hidden-state extraction, probe training, transfer evaluation, and calibration pipelines for LLM hallucination detection across datasets and model families.",
  },
  {
    period: "Jun 2026 — now",
    role: "Cyber Security Intern",
    org: "AICTE Cyber Security Cell",
    description:
      "Continuing TattvaDrishti beyond SIH: literature grounding, misinformation analysis, source verification, and productization for real analyst workflows.",
  },
  {
    period: "Sep 2025 — now",
    role: "Domain Expert · Web & ML",
    org: "Recurse, KMIT",
    description:
      "Designing technical problem statements, evaluating builds, and mentoring students through system design, Git, and implementation issues.",
  },
  {
    period: "Aug — Sep 2025",
    role: "Student Cohort Member",
    org: "OpenAI ChatGPT Lab · India",
    description:
      "Selected among 28 students nationwide for the inaugural cohort exploring how students use LLMs for learning, research, and collaboration.",
  },
] as const;

export const capabilities = [
  {
    label: "AI & research",
    items: ["PyTorch", "Hugging Face", "Transformers", "LLM evaluation", "OpenCV", "scikit-learn"],
  },
  {
    label: "Product engineering",
    items: ["Next.js", "React", "Vue", "FastAPI", "Flask", "Node.js", "WebSockets"],
  },
  {
    label: "Systems & data",
    items: ["PostgreSQL", "Redis", "Celery", "Docker", "Linux", "Qdrant", "CUDA"],
  },
  {
    label: "Hardware & autonomy",
    items: ["Jetson Nano", "Pixhawk", "ArduPilot", "MAVLink", "LiDAR", "ESP32"],
  },
] as const;

export const education = [
  {
    school: "Indian Institute of Technology Madras",
    degree: "BS · Data Science and Applications",
    period: "2024 — 2028",
    score: "CGPA 8.85 / 10",
  },
  {
    school: "Keshav Memorial Institute of Technology",
    degree: "B.Tech · Computer Science and Engineering",
    period: "2024 — 2028",
    score: "CGPA 8.75 / 10",
  },
] as const;
