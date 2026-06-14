/*
  Content layer for the "SIGNAL" rebuild.
  Case studies are the heart of the site — each reads like a dossier with a
  pipeline diagram (the signature trace) showing how messy input becomes signal.
*/

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  /** evidence label shown as a tag, e.g. "SIH 2025 WINNER" */
  badge: string;
  badgeTone: "warm" | "cold";
  year: string;
  oneLiner: string;
  problem: string;
  built: string;
  role: string;
  /** a personal "field note" — starts redacted, declassifies on click */
  fieldNote?: string;
  /** the signature pipeline: messy input → usable signal */
  pipeline: string[];
  outcomes: string[];
  stack: string[];
  links: { label: string; href: string }[];
  /** featured on the homepage, in this order */
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tattvadrishti",
    title: "TattvaDrishti",
    category: "AI threat-intelligence platform",
    badge: "SIH 2025 Winner",
    badgeTone: "warm",
    year: "2025",
    oneLiner:
      "An end-to-end platform that detects, attributes, and explains LLM-powered misinformation for analysts.",
    problem:
      "LLM-generated misinformation and coordinated influence campaigns are fast, cheap, and hard to detect, attribute, or explain. Analysts need more than a yes/no classifier — they need provenance, risk, and an audit trail they can defend.",
    built:
      "A full pipeline: fine-tuned DeBERTa-v3-Large models for AI-generated content detection and model-family attribution, layered with graph intelligence for coordinated-campaign discovery, explainable risk scoring, real-time SSE dashboards, and tamper-proof, blockchain-backed audit trails.",
    role: "Full-stack and system design — model integration, the analyst-facing interface, real-time data flow, and the audit layer.",
    fieldNote:
      "36 hours, no sleep, and a model that refused to converge until 4 a.m. We didn't build a classifier — we built something an analyst could actually defend in a room.",
    pipeline: ["Content", "Detection", "Attribution", "Risk score", "Analyst dashboard"],
    outcomes: [
      "Won Smart India Hackathon 2025 under the AICTE Cybersecurity Cell.",
      "95% accuracy on AI-generated content detection.",
      "98% accuracy on model-family attribution.",
      "Graph intelligence + explainable risk scoring + tamper-proof audit trails.",
    ],
    stack: ["FastAPI", "Next.js", "PyTorch", "DeBERTa-v3", "Graph intelligence", "SSE"],
    links: [{ label: "Repository", href: "https://github.com/Team-ASHTOJ/TattvaDrishti" }],
    featured: true,
  },
  {
    slug: "llm-reliability",
    title: "LLM Reliability Research",
    category: "Hallucination detection · LLM Lens",
    badge: "arXiv Paper",
    badgeTone: "warm",
    year: "2025–present",
    oneLiner:
      "Detecting hallucinations from inside the model — reading hidden states before unreliable text reaches a user.",
    problem:
      "Language models hallucinate confidently, and most detection happens after generation with external verifiers. Can the unreliability be read directly from the model's own internal representations, cheaply and at inference time?",
    built:
      "PyTorch pipelines that extract hidden-state embeddings from models like LLaMA and Qwen, cross-layer and hierarchical probing architectures that model correlations across layers, scalable labelled-dataset generation, and a full evaluation suite — ROC-AUC, PR-AUC, F1, Expected Calibration Error, Brier score, threshold optimization — across A100/H100 GPUs.",
    role: "Research intern — experimentation pipelines, probing architectures, dataset construction, and evaluation. Co-author on the resulting paper.",
    fieldNote:
      "The fascinating part: a model often 'knows' it's about to make something up — the uncertainty is sitting right there in the activations, if you know where to look.",
    pipeline: ["Prompt", "Model", "Hidden states", "Probe", "Reliability signal"],
    outcomes: [
      "Co-authored arXiv:2604.06277 on distilling hallucination signals into transformer representations.",
      "Built a 15k-sample representation-level hallucination dataset with full hidden states.",
      "Five probing architectures for internal hallucination detection without inference-time verifiers.",
    ],
    stack: ["PyTorch", "Transformers", "Hugging Face", "CUDA", "A100/H100"],
    links: [{ label: "Read the paper", href: "https://arxiv.org/abs/2604.06277" }],
    featured: true,
  },
  {
    slug: "rakshak",
    title: "Rakshak",
    category: "Autonomous surveillance rover",
    badge: "Patent Published",
    badgeTone: "warm",
    year: "2026",
    oneLiner:
      "A real-world autonomous rover for perimeter surveillance — perception, localization, and safety holding together in the field.",
    problem:
      "Autonomous perimeter monitoring needs perception, localization, control, and safety logic to hold up together under real conditions — not just in simulation. A failure in any layer is a failure of the system.",
    built:
      "An integrated rover on Jetson Nano + Pixhawk fusing LiDAR, GPS, IMU, and vision, with hybrid mission logic, dual-mode control, obstacle avoidance, face recognition, real-time video streaming, and telemetry.",
    role: "Led the project end-to-end — system integration, mission logic, safety overrides, and the perception/telemetry stack.",
    fieldNote:
      "Real hardware humbles you fast. The sim was flawless; the field had dust, GPS drift, and a rover that wanted to drive into a wall. Making it hold together taught me more than any course.",
    pipeline: ["Sensors", "Perception", "Localization", "Control", "Autonomous patrol"],
    outcomes: [
      "Co-inventor on published Indian Patent Application No. 202541112724 A (Jan 2026).",
      "Hybrid localization with dual-mode (autonomous / manual) control.",
      "On-board face recognition, obstacle avoidance, and live video telemetry.",
    ],
    stack: ["Jetson Nano", "Pixhawk", "LiDAR", "OpenCV", "WebSockets", "GPS/IMU"],
    links: [
      { label: "Live site", href: "https://rakshak-website.vercel.app" },
      { label: "Repository", href: "https://github.com/shoaib2000857/rakshak-website" },
    ],
    featured: true,
  },
  {
    slug: "linguallink",
    title: "LingualLink",
    category: "Real-time multilingual chat",
    badge: "Full-stack AI",
    badgeTone: "cold",
    year: "2025",
    oneLiner:
      "A real-time chat platform that translates across languages live, built on a production-shaped stack.",
    problem:
      "Real-time multilingual conversation means low-latency translation, persistent state, and presence — all at once, without the interface feeling laggy.",
    built:
      "A FastAPI + Next.js platform with WebSockets for live messaging, Redis for presence and caching, PostgreSQL and MongoDB for state, and optimized ML inference for in-line translation.",
    role: "Full-stack — backend services, real-time layer, data modelling, and the inference path.",
    fieldNote:
      "Three databases is two too many — until you actually need presence, history, and state at once. Latency is the whole product; everything else is negotiable.",
    pipeline: ["Message", "Inference", "Translation", "WebSocket", "Delivery"],
    outcomes: [
      "Live cross-language messaging with optimized inference.",
      "Production-shaped polyglot persistence (Postgres + MongoDB + Redis).",
    ],
    stack: ["FastAPI", "Next.js", "WebSockets", "Redis", "PostgreSQL", "MongoDB"],
    links: [],
    featured: false,
  },
  {
    slug: "astraos",
    title: "AstraOS",
    category: "Memory-augmented AI workspace",
    badge: "Active Prototype",
    badgeTone: "cold",
    year: "2025–present",
    oneLiner:
      "A privacy-first personal AI workspace with persistent memory and document-grounded retrieval.",
    problem:
      "General assistants forget everything and send everything to the cloud. What does a private, persistent, local-first AI workspace look like as a real product?",
    built:
      "A FastAPI + React system with local LLM workflows, streaming chat, persistent memory, and document-grounded retrieval — built with desktop-native ambition.",
    role: "Solo — architecture, backend, retrieval, and interface.",
    fieldNote:
      "Building the assistant I actually wanted: one that remembers, runs locally, and never quietly ships my notes to someone else's cloud. Ambitious for a side project — which is exactly why I'm building it.",
    pipeline: ["Query", "Retrieval", "Memory", "Local LLM", "Response"],
    outcomes: [
      "Persistent memory across sessions with local-first privacy.",
      "Document-grounded retrieval and streaming chat.",
    ],
    stack: ["FastAPI", "React", "TypeScript", "Local LLMs", "RAG"],
    links: [{ label: "Repository", href: "https://github.com/shoaib2000857/AstraOS" }],
    featured: true,
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/* ---- the four headline proofs, for the homepage readout band ---- */
export const selectedProof = [
  {
    n: "01",
    label: "National Win",
    title: "Smart India Hackathon 2025 Winner",
    detail:
      "Built TattvaDrishti, an AI threat-intelligence platform for LLM-powered misinformation.",
    href: "/work/tattvadrishti",
  },
  {
    n: "02",
    label: "Research",
    title: "LLM Reliability, published",
    detail: "Co-authored arXiv:2604.06277 on hidden-state hallucination detection at LLM Lens.",
    href: "/research",
  },
  {
    n: "03",
    label: "Patent",
    title: "Patent-published robotics",
    detail: "Co-inventor on Rakshak, an autonomous surveillance rover (App. No. 202541112724 A).",
    href: "/work/rakshak",
  },
  {
    n: "04",
    label: "Cohort",
    title: "OpenAI ChatGPT Lab",
    detail: "Selected among 28 students nationwide for India's inaugural student cohort.",
    href: "/proof",
  },
];

/* ---- "what I do" — direction, not skills ---- */
export const coreDirection = [
  {
    key: "reliable-ai",
    title: "Reliable AI",
    detail:
      "Hallucination detection, uncertainty estimation, hidden-state probes, evaluation pipelines, and model-behavior analysis.",
  },
  {
    key: "intelligence-systems",
    title: "Intelligence Systems",
    detail:
      "Threat intelligence, misinformation analysis, graph-based risk scoring, and analyst-facing dashboards.",
  },
  {
    key: "full-stack",
    title: "Full-Stack Execution",
    detail:
      "Next.js, FastAPI, PyTorch, real-time interfaces, and data pipelines — products built under hackathon-speed constraints.",
  },
];

/* ---- research focus areas for the /research page ---- */
export const researchAreas = [
  {
    title: "Hidden-state probing",
    detail:
      "Whether internal activations encode hallucination signals across layers and datasets — and how to read them.",
  },
  {
    title: "Cross-model portability",
    detail:
      "Whether reliability detectors trained on one model family transfer to another, or have to be re-learned.",
  },
  {
    title: "Reliability controllers",
    detail:
      "Lightweight control layers that can detect, abstain, or seek evidence during generation, before text reaches a user.",
  },
];

/* ---- grouped toolchain (no progress bars, ever) ---- */
export const toolchain = [
  {
    group: "AI / ML",
    items: ["PyTorch", "Transformers", "Hugging Face", "OpenCV", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Flask", "Node.js", "Express", "Redis", "Celery", "SQLAlchemy"],
  },
  {
    group: "Frontend",
    items: ["Next.js", "React", "Vue", "Tailwind", "Framer Motion"],
  },
  {
    group: "Systems",
    items: ["Docker", "Linux", "WebSockets", "GitHub Actions", "Azure", "AWS", "GCP"],
  },
  {
    group: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"],
  },
];

/* ---- compact build log (chronological, newest first) ---- */
export const buildLog = [
  {
    year: "2026",
    title: "Research Intern — LLM Lens",
    detail: "LLM reliability, hallucination detection, and hidden-state evaluation pipelines.",
    tone: "cold" as const,
  },
  {
    year: "2026",
    title: "Rakshak patent published",
    detail:
      "Co-inventor on an autonomous surveillance rover — Indian Patent App. No. 202541112724 A.",
    tone: "warm" as const,
  },
  {
    year: "2025",
    title: "Smart India Hackathon Winner",
    detail:
      "Built TattvaDrishti for AI-driven threat intelligence under the AICTE Cybersecurity Cell.",
    tone: "warm" as const,
  },
  {
    year: "2025",
    title: "OpenAI ChatGPT Lab for Students",
    detail: "Selected for India's inaugural student cohort (28 nationwide).",
    tone: "warm" as const,
  },
  {
    year: "2024",
    title: "Dual academic track begins",
    detail: "B.Tech CSE at KMIT alongside the IIT Madras BS in Data Science & Applications.",
    tone: "cold" as const,
  },
  {
    year: "2024",
    title: "Open source — GSSoC + Hacktoberfest",
    detail: "Top 8% of GSSoC contributors; Hacktoberfest Super Contributor.",
    tone: "cold" as const,
  },
];
