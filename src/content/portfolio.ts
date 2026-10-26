// Single source of truth for the site AND the AI assistant.
// Recorded metrics live here, separate from presentation components.

export const profile = {
  name: "Weaam Abdalaal",
  focus: "AI & Data Science",
  headline: "Exploring data. Building intelligence.",
  description:
    "Information Cyber Security Engineering graduate with practical project experience in machine learning, NLP, and data analysis using Python.",
  supporting: "Currently training in Generative and Agentic AI and AI automation.",
  location: "Palestine",
  email: "weaamraed19@gmail.com",
  github: "https://github.com/WeaamR",
  linkedin: "https://www.linkedin.com/in/weaam-abdalaal",
  about: [
    "I'm Weaam Abdalaal, a recent Cybersecurity Information Engineering graduate from the University College of Applied Sciences (UCAS), building my career at the intersection of AI and cybersecurity.",
    "My foundation is in security and networking, which shaped how I approach problems: carefully, with attention to evidence and limitations. I apply that mindset to AI and data science, where I work across the workflow from data preparation and model development to evaluation and documentation. My projects include NLP preprocessing pipelines, a Yelp sentiment analysis comparing TF-IDF + Logistic Regression, SimpleRNN, and LSTM models, and neural network experiments. In my graduation project, AdaptiveQKE, a team research project on hybrid post-quantum key exchange for TLS 1.3, I designed and implemented the selection policy and built the interactive web demo.",
    "I learn best through practical projects, applying technical concepts to real-world problems. I'm currently deepening my skills through training in Generative AI, Agentic AI, and intelligent automation.",
    "I'm drawn to problems at the intersection of AI and security, and I do my best work on collaborative, hands-on projects. I'm open to internships, research collaborations, and remote or international opportunities in this space.",
  ],
} as const;

export * from "./projects";
import { projects } from "./projects";

// ---------- Recorded results ----------

export const yelpResults = [
  { model: "TF-IDF + Logistic Regression", accuracy: 94.35, f1: 94.34, fitSeconds: 4.1 },
  { model: "SimpleRNN", accuracy: 91.29, f1: 91.4, fitSeconds: 111.37 },
  { model: "LSTM", accuracy: 92.85, f1: 92.9, fitSeconds: 79.14 },
];

export const yelpDataset = [
  { label: "Selected training reviews", value: "100,000" },
  { label: "Training reviews after cleaning", value: "99,997" },
  { label: "Test reviews", value: "20,000" },
];

export const yelpSettings = [
  ["Random seed", "42"],
  ["Vocabulary size", "20,000"],
  ["Maximum sequence length", "300"],
  ["Embedding dimension", "64"],
  ["Recurrent units", "64"],
  ["Batch size", "128"],
  ["Maximum epochs", "10"],
  ["Validation split", "20%"],
  ["EarlyStopping patience", "3"],
  ["Vocabulary coverage", "≈ 98.86% of training-token occurrences"],
];

export const yelpTrainingNote =
  "Both neural models reached their lowest validation loss at epoch 2 and stopped after epoch 5.";

export const qkePolicy = {
  tiers: ["High-performance", "Mid-range", "Constrained"] as const,
  bands: ["RTT < 50 ms", "50 ms ≤ RTT ≤ 100 ms", "RTT > 100 ms"] as const,
  table: {
    "High-performance": [1024, 768, 512],
    "Mid-range": [768, 768, 512],
    Constrained: [512, 512, 512],
  } as Record<string, number[]>,
  groups: { 512: "x25519_mlkem512", 768: "X25519MLKEM768", 1024: "SecP384r1MLKEM1024" } as Record<number, string>,
  datasets: [
    { label: "Main trials", value: "1,800" },
    { label: "Near-zero-network trials", value: "450" },
  ],
};

export const nlpStats = [
  { label: "Original rows", value: "14,640" },
  { label: "Duplicate review texts removed", value: "213" },
  { label: "Final cleaned rows", value: "14,398" },
  { label: "Vocabulary before cleaning", value: "30,095" },
  { label: "Vocabulary after cleaning", value: "9,405" },
  { label: "Manual test cases passed", value: "5 / 5" },
];

export const nlpExamples = [
  {
    id: "casing",
    input: "This product is AMAZING!!!",
    output: "product amazing",
    explanation: "Text is lowercased, punctuation is removed, and stop words such as “this” and “is” are dropped.",
  },
  {
    id: "negation",
    input: "I do not recommend this product.",
    output: "not recommend product",
    explanation: "Negation is retained during stop-word removal.",
  },
  {
    id: "noise",
    input: "Visit https://shop.com to buy 3 items.",
    output: "visit buy item",
    explanation: "The URL and number are removed, stop words are dropped, and “items” is lemmatized to “item”.",
  },
];

export const nnTabs = [
  {
    id: "epochs",
    label: "Training duration",
    columns: ["Epochs", "Final train accuracy", "Final validation accuracy", "Final validation loss"],
    rows: [
      ["5", "97.83%", "97.34%", "0.0963"],
      ["10", "99.08%", "97.74%", "0.0862"],
      ["20", "99.70%", "97.48%", "0.1340"],
    ],
    takeaway:
      "Training accuracy continued improving while final validation loss increased at 20 epochs, indicating overfitting in this run.",
  },
  {
    id: "dropout",
    label: "Dropout",
    columns: ["Rate", "Final validation accuracy", "Final validation loss"],
    rows: [
      ["0.0", "97.36%", "0.1296"],
      ["0.1", "97.92%", "0.0949"],
      ["0.3", "97.96%", "0.0748"],
    ],
    takeaway: "Dropout improved validation performance in these recorded experiments.",
  },
  {
    id: "optimizers",
    label: "Optimizers",
    columns: ["Optimizer", "Best validation loss"],
    rows: [
      ["SGD", "0.1101"],
      ["SGD with Momentum", "0.0814"],
      ["Adam", "0.0986"],
      ["AdamW", "0.0985"],
    ],
    takeaway:
      "SGD with Momentum achieved the lowest best validation loss in this comparison, while Adam and AdamW converged faster. This table reports best (not final) validation loss.",
  },
];

// ---------- Skills, education ----------

export const skills: {
  group: string;
  items: string[];
  evidence: string[];
}[] = [
  {
    group: "Programming & Data",
    items: [
      "Python",
      "SQL (Basic)",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning",
      "EDA",
    ],
    evidence: [
      "nlp-text-preprocessing-pipeline",
      "yelp-sentiment-analysis",
    ],
  },
  {
    group: "Machine Learning & NLP",
    items: [
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "Classification",
      "Model Evaluation",
      "RNN",
      "LSTM",
      "NLTK",
      "TF-IDF",
      "Tokenization",
      "Lemmatization",
    ],
    evidence: [
      "yelp-sentiment-analysis",
      "neural-network-experiments",
      "nlp-text-preprocessing-pipeline",
    ],
  },
  {
    group: "Generative AI & RAG",
    items: [
      "AI Agents",
      "Prompt Design",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Conversation Memory",
      "Google Gemini",
      "OpenRouter",
    ],
    evidence: [
      "n8n-rag-course-assistant",
      "plancraft-ai",
      "xyz-real-estate-assistant",
    ],
  },
{
  group: "Workflow Automation & Integrations",
  items: [
    "n8n",
    "Zapier",
    "APIs",
    "Webhooks",
    "Telegram Bots",
    "Google Sheets Integration",
    "Structured JSON Output",
  ],
  evidence: [
    "url-threat-analysis-bot",
    "xyz-real-estate-assistant",
    "plancraft-ai",
    "ai-complaint-routing-automation",
  ],
},
  {
    group: "Web Application Prototyping",
    items: [
      "Lovable",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "User Flows",
    ],
    evidence: [
      "the-inner-room",
      "skillbridge-lite",
      "plancraft-ai",
    ],
  },
  {
    group: "Security Research & Development Tools",
    items: [
      "Hybrid Post-Quantum Key Exchange",
      "TLS 1.3",
      "Selection Policy Design",
      "VirusTotal Integration",
      "Git/GitHub",
      "Linux",
      "Bash",
      "Jupyter",
      "Google Colab",
      "LaTeX",
    ],
    evidence: [
      "adaptiveqke",
      "url-threat-analysis-bot",
    ],
  },
];
export const learning = ["Generative AI", "Agentic AI", "AI Automation"];

export const education = {
  degree: "B.Sc. in Information Cyber Security Engineering",
  school: "University College of Applied Sciences (UCAS)",
  date: "September 2026",
  gpa: "GPA: 93.24% — Excellent",
};
export const training = [
  { name: "Generative & Agentic AI", status: "In Progress" },
  { name: "AI & Intelligent Automation", provider: "Women’s Affairs Center, Gaza", status: "In Progress" },
  { name: "DS4A — Palestine", provider: "Correlation One", status: "Accepted into Program" },
];

export const assistantQuestions = [
  "Which project best demonstrates data analysis?",
  "What did your comparison of Logistic Regression and LSTM show?",
  "What did you implement independently in AdaptiveQKE?",
  "What did your neural-network experiments show about overfitting?",
];

/** Allowed source links the assistant may cite (stable IDs). */
export const sourceLinks: Record<string, { label: string; href: string }> = Object.fromEntries([
  ...projects.map((p) => [`project:${p.id}`, { label: p.title, href: `/projects/${p.id}` }]),
  ["section:skills", { label: "Skills", href: "/#skills" }],
  ["section:education", { label: "Education & training", href: "/#education" }],
  ["section:about", { label: "About", href: "/#about" }],
]);

/** Plain-text knowledge base for the assistant, built from the same content. */
export function buildKnowledge(): string {
  const p = projects
    .map(
      (x) =>
        [
          `## [project:${x.id}] ${x.title} — ${x.subtitle}`,
          `Categories: ${x.categories.join(", ")}. Technologies: ${x.technologies.join(", ")}.`,
          `Overview: ${x.overview}`,
          x.problem && `Problem: ${x.problem}`,
          `Approach: ${x.approach.join(" ")}`,
          `Contribution: ${x.contribution.summary ?? ""}${x.contribution.individual?.length ? ` INDEPENDENT (Weaam alone): ${x.contribution.individual.join(" ")}` : ""}${x.contribution.team?.length ? ` COLLABORATIVE (team): ${x.contribution.team.join(", ")}.` : ""}`,
          x.results?.length && `Results: ${x.results.join(" ")}`,
          x.keyFinding && `Key finding: ${x.keyFinding}`,
          x.limitations?.length && `Limitations: ${x.limitations.join(" ")}`,
          x.repo && `Repository: ${x.repo}`,
          x.demo && `Live demo: ${x.demo}`,
        ]
          .filter(Boolean)
          .join("\n"),
    )
    .join("\n\n");
  const yelp = yelpResults
    .map((r) => `${r.model}: accuracy ${r.accuracy}%, F1 ${r.f1}%, fitting time ${r.fitSeconds} s`)
    .join("; ");
  const nn = nnTabs.map((t) => `${t.label}: ${t.rows.map((r) => r.join(" / ")).join("; ")} (${t.columns.join(", ")}). ${t.takeaway}`).join("\n");
  return `# Profile
${profile.name}, ${profile.focus}. ${profile.description} ${profile.supporting} Location: ${profile.location}. Email: ${profile.email}. GitHub: ${profile.github}. LinkedIn: ${profile.linkedin}.
# [section:about] About
${profile.about.join("\n")}
Open to: internships, research collaborations, and remote or international opportunities at the intersection of AI and security.
No phone, years of experience, or CV are published.

# Projects
${p}

# Recorded results
Yelp: ${yelp}. Dataset: 100,000 selected training reviews, 99,997 after cleaning, 20,000 test. ${yelpTrainingNote}
AdaptiveQKE documented policy lookup (cite project:adaptiveqke; this is a policy lookup, no TLS connection is executed). High-performance device rules: RTT < 50 ms → SecP384r1MLKEM1024; 50 ms ≤ RTT ≤ 100 ms (so exactly 50 ms and exactly 100 ms) → X25519MLKEM768; RTT > 100 ms → x25519_mlkem512. Mid-range: RTT < 50 ms → X25519MLKEM768; 50 ms ≤ RTT ≤ 100 ms → X25519MLKEM768; RTT > 100 ms → x25519_mlkem512. Constrained: x25519_mlkem512 in every band. Datasets: 1,800 main trials, 450 near-zero-network trials.
NLP pipeline: ${nlpStats.map((s) => `${s.label} ${s.value}`).join("; ")}.
Neural network experiments:
${nn}

# [section:skills] Skills
${skills.map((s) => `${s.group}: ${s.items.join(", ")}`).join("\n")}
Currently learning (not yet demonstrated in projects): ${learning.join(", ")}.

# [section:education] Education & training
${education.degree}, ${education.school}, ${education.date}, ${education.gpa}.
${training.map((t) => `${t.name}${t.provider ? ` — ${t.provider}` : ""} — ${t.status}`).join("\n")}`;
}

export const heroShowcase = {
  title: "Inside My Projects",
  nlp: {
    heading: "Text preprocessing",
    input: "I do not recommend this product.",
    output: ["not", "recommend", "product"],
    highlight: "not",
    explanation: "Negation is preserved during stop-word removal.",
    label: "Recorded example — not live inference.",
    linkLabel: "Explore NLP project",
    slug: "nlp-text-preprocessing-pipeline",
  },
  models: {
    heading: "Yelp model comparison",
    order: ["TF-IDF + Logistic Regression", "LSTM", "SimpleRNN"],
    takeaway: "The traditional baseline achieved the best test accuracy in this experiment.",
    label: "Recorded results — not live training.",
    linkLabel: "Explore Yelp project",
    slug: "yelp-sentiment-analysis",
  },
  security: {
    heading: "AdaptiveQKE",
    steps: ["Context Probe", "Policy Engine", "TLS Client", "Measurement"],
    highlight: "Policy Engine",
    text: "Weaam independently designed and implemented the selection policy within a team research project.",
    label: "Architecture illustration — no live TLS connection.",
    linkLabel: "Explore AdaptiveQKE",
    slug: "adaptiveqke",
  },
};
