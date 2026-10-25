// ============================================================
// PROJECTS — the single editable source for every portfolio project.
// Cards, filters, detail pages (/projects/<slug>) and the AI assistant
// are all generated from this list. See README "Adding a project".
// ============================================================

export type Category = "Machine Learning" | "NLP & Data" | "Security Research";
export const categories: Category[] = ["Machine Learning", "NLP & Data", "Security Research"];

export interface Screenshot {
  /** Imported asset URL, e.g. `import shot from "@/assets/projects/x.png.asset.json"` then `shot.url`. */
  src: string;
  /** Required: describe what the image shows. */
  alt: string;
}

export interface Project {
  /** Stable internal ID. Never change once published (assistant citations use it). */
  id: string;
  /** URL slug: /projects/<slug>. Lowercase letters, numbers, hyphens. Never change once published. */
  slug: string;
  /** Set true to keep a project out of the site and the assistant. */
  draft?: boolean;
  title: string;
  subtitle: string;
  /** Short description shown on the project card. */
  purpose: string;
  /** One-line highlight shown on the card. */
  highlight: string;
  categories: Category[];
  /** Short tech list for the card (3–4 items). */
  cardTech: string[];
  /** Full tech list for the detail page. */
  technologies: string[];
  overview: string;
  problem?: string;
  approach: string[];
  /** Use `summary` for solo work; `individual` + `team` to separate your part from team work. */
  contribution: { summary?: string; individual?: string[]; team?: string[] };
  /** Optional plain-text results (bullet list). */
  results?: string[];
  keyFinding?: string;
  limitations?: string[];
  /** Optional GitHub repository URL (https). */
  repo?: string;
  /** Optional live demo URL (https). */
  demo?: string;
  screenshots?: Screenshot[];
  /** Optional extra evidence links (https). */
  evidence?: { label: string; url: string }[];
}

const yelpRepo = "https://github.com/WeaamR/yelp-sentiment-analysis-rnn-lstm";
const qkeRepo = "https://github.com/WeaamR/adaptiveqke";
const nlpRepo = "https://github.com/WeaamR/nlp-text-preprocessing-pipeline";
const nnRepo = "https://github.com/WeaamR/neural-network-experiments";

const allProjects: Project[] = [
  {
    id: "yelp-sentiment-analysis",
    slug: "yelp-sentiment-analysis",
    title: "Yelp Sentiment Analysis",
    subtitle: "Classical and recurrent models compared",
    categories: ["Machine Learning", "NLP & Data"],
    cardTech: ["Python", "scikit-learn", "TensorFlow", "Keras"],
    technologies: ["Python", "scikit-learn", "TensorFlow", "Keras", "Pandas"],
    purpose: "Binary sentiment classification on Yelp reviews with three model families.",
    highlight: "TF-IDF + Logistic Regression reached 94.35% test accuracy, ahead of LSTM (92.85%).",
    repo: yelpRepo,
    overview:
      "Compared TF-IDF with Logistic Regression, SimpleRNN, and LSTM for binary sentiment classification on Yelp reviews.",
    problem:
      "Determine how a traditional text-classification baseline compares with recurrent neural models on the same review data and evaluation split.",
    approach: [
      "Selected 100,000 training reviews (99,997 after cleaning) and evaluated on 20,000 test reviews.",
      "Built a TF-IDF + Logistic Regression baseline.",
      "Trained SimpleRNN and LSTM models with shared settings and EarlyStopping.",
      "Compared test accuracy, F1-score, and model fitting time.",
    ],
    contribution: { summary: "Data preprocessing, model development, comparison, and evaluation." },
    keyFinding:
      "The traditional baseline achieved the best test performance in this experiment. LSTM outperformed SimpleRNN but did not outperform TF-IDF + Logistic Regression.",
    limitations: [
      "TF-IDF preparation required an additional 32.20 seconds. Neural preprocessing time was not measured separately.",
      "Timings describe one experimental environment and are not end-to-end benchmarks.",
      "Results come from one recorded run with random seed 42.",
    ],
    evidence: [
      { label: "Repository", url: yelpRepo },
      { label: "Confusion matrices", url: `${yelpRepo}/tree/main/results/confusion_matrices` },
      { label: "Learning curves", url: `${yelpRepo}/tree/main/results/learning_curves` },
      { label: "Example predictions (CSV)", url: `${yelpRepo}/blob/main/results/predictions/example_predictions.csv` },
    ],
  },
  {
    id: "adaptiveqke",
    slug: "adaptiveqke",
    title: "AdaptiveQKE",
    subtitle: "Context-aware hybrid key exchange for TLS",
    categories: ["Security Research"],
    cardTech: ["Python", "OpenSSL", "liboqs", "cgroups v2"],
    technologies: ["Python", "Bash", "Linux", "OpenSSL", "liboqs", "oqs-provider", "cgroups v2"],
    purpose: "Team research prototype selecting a hybrid ECDH + ML-KEM group before a TLS 1.3 handshake.",
    highlight: "Designed the two-stage selection policy and implemented the Python policy engine.",
    repo: qkeRepo,
    overview:
      "A team undergraduate research prototype that selects a hybrid ECDH + ML-KEM group before a standard TLS 1.3 handshake. The policy is deterministic and rule-based, not a machine-learning model.",
    problem:
      "Hybrid post-quantum key-exchange groups differ in cost. The project explored choosing a group based on network and device context before the handshake begins.",
    approach: [
      "Probe context: round-trip time and device resources.",
      "Apply a two-stage, rule-based policy to choose a hybrid group.",
      "Run a standard TLS 1.3 handshake with the selected group.",
      "Record measurements across 1,800 main trials and 450 near-zero-network trials.",
    ],
    contribution: {
      individual: [
        "Designed the two-stage selection policy, including RTT rules, device classification, and CPU/memory thresholds.",
        "Implemented the Python policy engine.",
        "Produced the project's charts and tables.",
        "Designed the interactive demo interface and explanatory workflow.",
        "Developed the web demo and integrated it with the project implementation.",
      ],
      team: [
        "Research formulation",
        "Literature review",
        "Environment setup",
        "Debugging and testing",
        "Dataset validation",
        "Statistical analysis",
        "Interpretation",
        "Report writing",
        "Presentation preparation",
      ],
    },
    keyFinding:
      "The documented policy deterministically maps device tier and RTT band to a hybrid group. Recorded results are historical observations from the team's experiments.",
    limitations: [
      "The repository documents weaknesses in handshake-success detection and measurement boundaries.",
      "Recorded results are historical observations, not independently validated evidence that every handshake completed.",
      "Recorded savings are not universal improvements, production guarantees, or end-to-end security ratings.",
    ],
    evidence: [
      { label: "Repository", url: qkeRepo },
      { label: "Known issues", url: `${qkeRepo}/blob/main/docs/KNOWN_ISSUES.md` },
    ],
  },
  {
    id: "nlp-text-preprocessing-pipeline",
    slug: "nlp-text-preprocessing-pipeline",
    title: "NLP Text Preprocessing Pipeline",
    subtitle: "Preparing noisy text for analysis",
    categories: ["NLP & Data"],
    cardTech: ["Python", "Pandas", "NLTK", "Seaborn"],
    technologies: ["Python", "Pandas", "NLTK", "Matplotlib", "Seaborn"],
    purpose: "Reusable preprocessing workflow for the Twitter US Airline Sentiment dataset.",
    highlight: "Vocabulary reduced from 30,095 to 9,405 terms; 5 of 5 manual test cases passed.",
    repo: nlpRepo,
    overview:
      "Built a reusable preprocessing workflow for the Twitter US Airline Sentiment dataset, including exploratory analysis, text normalization, negation preservation, and validation.",
    problem:
      "Raw tweets contain noise such as URLs, numbers, casing, punctuation, and contractions. Text needs consistent preparation before analysis, without losing meaning carried by negation.",
    approach: [
      "Missing-value and duplicate analysis.",
      "Contraction expansion.",
      "Text cleaning and tokenization.",
      "Stop-word removal while preserving not, no, and never.",
      "Stemming versus lemmatization comparison.",
      "POS-aware WordNet lemmatization.",
      "CSV export and validation.",
    ],
    contribution: { summary: "Designed and built the preprocessing workflow, exploratory analysis, and validation tests." },
    keyFinding:
      "The workflow produced 14,398 cleaned rows and reduced vocabulary from 30,095 to 9,405 while preserving negation words.",
    limitations: [
      "This project prepares and analyzes text; it does not train a sentiment model.",
      "Vocabulary reduction alone does not prove improved model accuracy.",
      "Duplicate removal (213 texts) does not alone account for the final row count.",
    ],
    evidence: [
      { label: "Repository", url: nlpRepo },
      { label: "Charts", url: `${nlpRepo}/tree/main/results/charts` },
    ],
  },
  {
    id: "neural-network-experiments",
    slug: "neural-network-experiments",
    title: "Neural Network Experiments",
    subtitle: "Training behavior and generalization",
    categories: ["Machine Learning"],
    cardTech: ["Python", "TensorFlow", "Keras", "NumPy"],
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "Pillow"],
    purpose: "Nine groups of handwritten digit experiments on how training choices affect generalization.",
    highlight: "At 20 epochs, validation loss rose to 0.1340 while training accuracy kept climbing.",
    repo: nnRepo,
    overview:
      "Nine documented groups of handwritten digit classification experiments exploring how training choices affect validation performance, stability, and generalization.",
    problem:
      "Understand how epochs, regularization, optimizers, batch size, and activations change validation behavior on a controlled classification task.",
    approach: [
      "Prediction analysis and custom handwritten digits.",
      "Epochs and EarlyStopping.",
      "Dropout and L2 regularization.",
      "Optimizers, batch size, and activation functions.",
    ],
    contribution: { summary: "Designed, ran, and documented the experiment groups and their reports." },
    keyFinding:
      "Training accuracy continued improving while final validation loss increased at 20 epochs, indicating overfitting in this run. Dropout improved validation performance in these recorded experiments.",
    limitations: [
      "Outcomes are specific to these runs and this dataset and architecture; they do not generalize to every setting.",
      "Best validation loss and final validation loss are different measures and are reported separately.",
    ],
    evidence: [{ label: "Repository and remaining reports", url: nnRepo }],
  },
];

/** Published projects (drafts excluded). */
export const projects: Project[] = allProjects.filter((p) => !p.draft);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const isHttps = (u: string) => {
  try {
    return new URL(u).protocol === "https:";
  } catch {
    return false;
  }
};

/** Returns a list of problems; empty means the project list is valid. */
export function validateProjects(list: Project[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const p of list) {
    const at = `[${p.id || "?"}]`;
    if (!p.id) errors.push(`${at} missing id`);
    if (ids.has(p.id)) errors.push(`${at} duplicate id`);
    ids.add(p.id);
    if (!SLUG.test(p.slug)) errors.push(`${at} invalid slug "${p.slug}"`);
    if (slugs.has(p.slug)) errors.push(`${at} duplicate slug`);
    slugs.add(p.slug);
    if (!p.title.trim() || !p.purpose.trim() || !p.overview.trim()) errors.push(`${at} title, purpose and overview are required`);
    if (!p.categories.length || p.categories.some((c) => !categories.includes(c))) errors.push(`${at} unknown or missing category`);
    for (const [name, url] of [["repo", p.repo], ["demo", p.demo]] as const)
      if (url !== undefined && !isHttps(url)) errors.push(`${at} ${name} must be an https URL`);
    for (const e of p.evidence ?? []) if (!isHttps(e.url)) errors.push(`${at} evidence link "${e.label}" must be https`);
    for (const s of p.screenshots ?? []) {
      if (!s.src) errors.push(`${at} screenshot missing src`);
      if (!s.alt.trim()) errors.push(`${at} screenshot missing alt text`);
    }
  }
  return errors;
}

if (import.meta.env?.DEV) {
  const problems = validateProjects(allProjects);
  if (problems.length) console.warn("Project content problems:\n" + problems.join("\n"));
}
