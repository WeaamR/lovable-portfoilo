// ============================================================
// PROJECTS — the single editable source for every portfolio project.
// Cards, filters, detail pages (/projects/<slug>) and the AI assistant
// are all generated from this list. See README "Adding a project".
// ============================================================
export type Category = "Machine Learning" | "NLP & Data" | "Security Research" | "Web Applications";

export const categories: Category[] = [
  "Machine Learning",
  "NLP & Data",
  "Security Research",
  "Web Applications",
];

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
  id: "taskbridge",
  slug: "taskbridge",
  title: "TaskBridge",
  subtitle: "Turn work requests into actionable plans",
  categories: ["Web Applications"],

  cardTech: [
    "React",
    "TypeScript",
    "Supabase",
    "TanStack",
  ],

  technologies: [
    "React",
    "TypeScript",
    "TanStack Start",
    "TanStack Router",
    "TanStack Query",
    "Tailwind CSS",
    "Supabase",
    "Zod",
    "Vitest",
    "Testing Library",
    "Lovable",
  ],

  purpose:
    "A work-planning application that helps freelancers and early-career professionals clarify requests, define outcomes, organize tasks, and track delivery progress.",

  highlight:
    "Brings the original request, desired outcome, priorities, deadlines, and task progress into one editable plan.",

  repo:
    "https://github.com/WeaamR/taskbridge-weaam-lovale",

  demo:
    "https://taskbridge-weaam.lovable.app",

  overview:
    "TaskBridge helps users turn loosely defined work requests into structured plans. Users capture the brief and desired outcome, add prioritized tasks, and track work through To Do, In Progress, and Done. Plans also support deadlines, deliverables, and a next step. Planning and task breakdown are performed by the user; the application does not implement AI-generated plans.",

  problem:
    "Freelance work requests often lack a clear definition of success or an actionable checklist. Keeping requirements, tasks, and follow-up notes in separate places makes progress harder to track. TaskBridge organizes these details around a single work plan.",

  approach: [
    "Provide email/password authentication with account creation, confirmation resend, and password recovery flows.",
    "Capture a plan title, request description, and desired outcome, with an optional deadline.",
    "Allow users to create, view, edit, and delete plans, including deliverables and the next step.",
    "Support adding, editing, and deleting tasks with High, Medium, or Low priorities.",
    "Track task status as To Do, In Progress, or Done.",
    "Calculate completion as the rounded percentage of Done tasks, with 0% displayed for plans without tasks.",
    "Use Supabase for authentication and data, with TanStack Query for queries and mutations.",
    "Provide validation messages, loading states, retry actions, toasts, and deletion confirmations.",
  ],

  contribution: {
    summary:
      "The project combines a plan-and-task interface, Supabase integration, authentication flows, progress calculation, and user feedback states. The repository includes application source, test definitions, and an illustrated usage walkthrough.",
  },

  results: [
    "The documented walkthrough shows a homepage hero-design brief being organized into a plan and individual tasks.",
    "Screenshots demonstrate plan creation, a task list, an add-task form, and task-status selection.",
    "The source implements plan and task CRUD operations alongside completion tracking.",
    "Progress counts only Done tasks: one completed task out of three produces 33%.",
    "The repository includes tests for progress calculation, signup behavior, authentication form interactions, recovery, and routing; no passing test run is claimed here.",
  ],

  keyFinding:
    "A clear link between the original request, desired outcome, and individual tasks makes delivery progress easier to understand. Completion reflects finished tasks rather than tasks that are merely in progress.",

  limitations: [
    "Plans and task breakdowns are entered manually; AI generation is not implemented.",
    "The supplied migrations do not include the initial plans and plan_tasks table definitions, so a fresh deployment requires additional database setup.",
    "The supplied files do not establish the complete row-level security configuration for plans and tasks; cross-user isolation requires verification.",
    "The screenshots do not demonstrate a completed plan or a full progress transition from 0% to 100%.",
    "Build, lint, tests, and live authentication and CRUD operations were not executed during this portfolio review.",
    "Deployment requires support for TanStack Start server functions and appropriate server-side configuration.",
  ],

  screenshots: [
    {
      src:
        "https://raw.githubusercontent.com/WeaamR/taskbridge-weaam-lovale/main/assets/01-home.png",
      alt:
        "TaskBridge landing page introducing the clarify, break down, and deliver workflow.",
    },
    {
      src:
        "https://raw.githubusercontent.com/WeaamR/taskbridge-weaam-lovale/main/assets/02-create-account.png",
      alt:
        "TaskBridge account creation screen with email and password fields.",
    },
    {
      src:
        "https://raw.githubusercontent.com/WeaamR/taskbridge-weaam-lovale/main/assets/03-create-plan.png",
      alt:
        "Create Plan form containing a homepage hero-design request, desired outcome, and optional deadline.",
    },
    {
      src:
        "https://raw.githubusercontent.com/WeaamR/taskbridge-weaam-lovale/main/assets/04-plan-and-tasks.png",
      alt:
        "Plan details showing the brief, goal, progress, existing tasks, and a form for adding another task.",
    },
    {
      src:
        "https://raw.githubusercontent.com/WeaamR/taskbridge-weaam-lovale/main/assets/05-update-status.png",
      alt:
        "Task status selector showing To Do, In Progress, and Done options.",
    },
  ],

  evidence: [
    {
      label: "Project documentation",
      url:
        "https://github.com/WeaamR/taskbridge-weaam-lovale/blob/main/README.md",
    },
    {
      label: "Live application",
      url:
        "https://taskbridge-weaam.lovable.app",
    },
    {
      label: "Progress calculation",
      url:
        "https://github.com/WeaamR/taskbridge-weaam-lovale/blob/main/src/lib/plans.ts",
    },
    {
      label: "Existing test definitions",
      url:
        "https://github.com/WeaamR/taskbridge-weaam-lovale/tree/main/src/test",
    },
  ],
},
  {
  id: "ai-complaint-routing-automation",
  slug: "ai-complaint-routing-automation",
  title: "AI Complaint Routing Automation",
  subtitle: "AI-assisted complaint intake and routing with Zapier",
  categories: ["NLP & Data"],

  cardTech: [
    "Zapier",
    "AI by Zapier",
    "Google Sheets",
    "Gmail",
  ],

  technologies: [
    "Zapier",
    "Google Forms",
    "AI by Zapier",
    "Code by Zapier",
    "JavaScript",
    "Paths by Zapier",
    "Google Sheets",
    "Gmail",
  ],

  purpose:
    "A workflow designed to organize customer complaints, prepare tracking records, and route submissions to ready-for-handling, missing-information, or human-review paths.",

  highlight:
    "Connects AI-assisted analysis, employee lookup, spreadsheet tracking, and email notifications across three complaint-handling paths.",

  repo:
    "https://github.com/WeaamR/ai-complaint-routing-automation",

  overview:
    "AI Complaint Routing Automation is a Zapier workflow design for managing complaints submitted through Google Forms. The shared flow includes AI analysis, validation and routing preparation, employee lookup, notification-recipient selection, and record creation in Google Sheets. Three handling paths then provide different combinations of record updates and Gmail notifications. The repository documents the configuration layout through two workflow screenshots.",

  problem:
    "Customer complaints can arrive with incomplete information and require different follow-up actions. This project explores a structured workflow for organizing submissions, requesting missing details, and directing cases to the appropriate person for handling or review.",

  approach: [
    "Start the workflow when Google Forms receives a new response.",
    "Use an AI by Zapier step to analyze the customer complaint.",
    "Include Code by Zapier steps for validation and routing preparation, followed by employee lookup and notification-recipient selection.",
    "Create a complaint-tracking row in Google Sheets before evaluating the handling paths.",
    "Provide a ready-complaint path that updates the record and emails the responsible person and customer.",
    "Provide a missing-information path with a JavaScript step, an AI-generated follow-up request, a customer email, and a record update.",
    "Provide a human-review path that updates the record and emails the responsible person and customer.",
  ],

  contribution: {
    summary:
      "The project brings together complaint intake, AI-assisted analysis, tracking, and conditional communications in a documented Zapier workflow design.",
  },

  results: [
    "Two screenshots document the shared processing flow and three named handling paths.",
    "The visible configuration contains steps numbered 1 through 20, including branch conditions and actions.",
    "The design includes Google Sheets record creation and updates, employee lookup, and Gmail notification steps.",
    "A dedicated AI step is included for drafting requests for missing customer information.",
  ],

  keyFinding:
    "The workflow design distinguishes complaints that are ready for handling from those requiring more information or human review. Its routing behavior and execution reliability still require evidence from configured conditions and actual test runs.",

  limitations: [
    "The repository contains documentation and screenshots, without an executable Zap export, JavaScript source, or AI prompts.",
    "Routing conditions and validation rules are not visible, so branch exclusivity and coverage cannot be verified.",
    "Employee-matching logic, recipient-selection rules, and behavior after a failed lookup are not documented.",
    "Successful spreadsheet writes and delivered emails are not demonstrated by the supplied evidence.",
    "The missing-information path does not show how subsequent customer replies are received or linked to the original complaint.",
    "The human-review path does not show an approval interface or automatic continuation after a reviewer responds.",
    "Runtime, routing accuracy, and operating costs have not been measured in the supplied evidence.",
  ],

  screenshots: [
    {
      src:
        "https://raw.githubusercontent.com/WeaamR/ai-complaint-routing-automation/main/assets/intake-workflow.png",
      alt:
        "Zapier complaint intake workflow showing Google Forms, AI analysis, validation and routing, employee lookup, recipient selection, and record creation.",
    },
    {
      src:
        "https://raw.githubusercontent.com/WeaamR/ai-complaint-routing-automation/main/assets/routing-paths.png",
      alt:
        "Three complaint-handling paths for ready complaints, missing information, and human review, with Google Sheets updates and Gmail notifications.",
    },
  ],

  evidence: [
    {
      label: "Project documentation",
      url:
        "https://github.com/WeaamR/ai-complaint-routing-automation/blob/main/README.md",
    },
    {
      label: "Intake workflow",
      url:
        "https://raw.githubusercontent.com/WeaamR/ai-complaint-routing-automation/main/assets/intake-workflow.png",
    },
    {
      label: "Complaint routing paths",
      url:
        "https://raw.githubusercontent.com/WeaamR/ai-complaint-routing-automation/main/assets/routing-paths.png",
    },
  ],
},
  {
  id: "xyz-real-estate-assistant",
  slug: "xyz-real-estate-assistant",
  title: "XYZ Real Estate Assistant",
  subtitle: "Conversational lead intake with n8n and Telegram",
  categories: ["NLP & Data"],
  cardTech: ["n8n", "Telegram", "OpenRouter", "Google Sheets"],
  technologies: [
    "n8n",
    "Telegram Bot API",
    "OpenRouter",
    "AI Agent",
    "Simple Memory",
    "Google Sheets",
  ],

  purpose:
    "A conversational assistant that collects property requirements and contact details through Telegram, requests customer confirmation, and can save the collected lead through a Google Sheets tool.",

  highlight:
    "Combines guided conversations, budget categorization, conversation memory, and spreadsheet integration in one automation workflow.",

  repo: "https://github.com/WeaamR/xyz-real-estate-assistant",

  overview:
    "XYZ Real Estate Assistant is an n8n prototype for handling initial property enquiries. A Telegram-connected AI agent guides customers through purchase or rental questions, gathers missing information, and prepares a summary for confirmation. The agent has access to a Google Sheets append tool for recording the collected details. The documented conversation demonstrates budget categorization and a switch from English to Arabic.",

  problem:
    "Property enquiries often arrive as short, incomplete messages. Collecting requirements through repeated manual follow-ups can leave inconsistent records. This project explores how a conversational workflow can organize those enquiries into structured leads for a real estate team.",

  approach: [
    "Receive customer text messages through a Telegram Trigger and pass them to an n8n AI Agent.",
    "Use an OpenRouter chat model with instructions to ask one question at a time, reuse supplied details, and clarify ambiguous answers.",
    "Maintain recent conversation context with Simple Memory, using the Telegram sender ID as the session key and a context window of 15 interactions.",
    "Guide purchase and rental enquiries through different required questions and map budgets into explicitly defined ranges.",
    "Instruct the agent to summarize the collected details and obtain explicit customer confirmation before saving.",
    "Expose a Google Sheets append tool with nine mapped lead fields, then return the agent's response to the originating Telegram chat.",
  ],

  contribution: {
    summary:
      "The implementation brings together conversational intake instructions, Telegram messaging, recent conversation memory, and a Google Sheets agent tool. The repository includes an importable workflow, configuration guidance, screenshots, and documented verification limits.",
  },

  results: [
    "The documented conversation shows a $350,000 budget categorized as $200,000 to below $400,000.",
    "The conversation example demonstrates the assistant switching from English to Arabic following the customer's request.",
    "A second screenshot shows customer confirmation followed by an Arabic completion message.",
    "A sanitized, inactive n8n workflow is available for import and configuration with separate credentials and a destination spreadsheet.",
  ],

  keyFinding:
    "The prototype demonstrates conversational intake and agent-tool integration. Confirmation and data-quality rules are expressed in the agent prompt; stronger guarantees require separate validation and verification of the actual spreadsheet write.",

  limitations: [
    "The screenshots do not include the saved spreadsheet row or the Google Sheets tool result, so the visible completion message alone does not verify a successful write.",
    "Confirmation, field completeness, allowed values, and duplicate avoidance rely on agent instructions. The workflow has no separate validation, duplicate-detection, or error-handling branch.",
    "Memory uses the sender ID without the chat ID, so the same sender can share context across different chats. The memory buffer is not a permanent customer database.",
    "The exported field name 'First Ourcase' has an unclear business meaning, and rental budgets do not specify a monthly or yearly period.",
    "The workflow handles intake and record creation; it does not search property listings, recommend available properties, book viewings, or notify staff.",
    "The configured OpenRouter route is 'openrouter/free', which does not identify one fixed underlying model.",
  ],

  screenshots: [
    {
      src: "https://raw.githubusercontent.com/WeaamR/xyz-real-estate-assistant/main/assets/workflow.png",
      alt: "n8n workflow connecting Telegram, an AI Agent, OpenRouter, Simple Memory, and a Google Sheets append tool.",
    },
    {
      src: "https://raw.githubusercontent.com/WeaamR/xyz-real-estate-assistant/main/assets/conversation.png",
      alt: "Telegram conversation demonstrating property intake, budget categorization, and switching from English to Arabic.",
    },
    {
      src: "https://raw.githubusercontent.com/WeaamR/xyz-real-estate-assistant/main/assets/confirmation.png",
      alt: "Customer confirmation followed by the assistant's Arabic completion message.",
    },
  ],

  evidence: [
    {
      label: "Project documentation",
      url: "https://github.com/WeaamR/xyz-real-estate-assistant/blob/main/README.md",
    },
    {
      label: "Importable n8n workflow",
      url: "https://github.com/WeaamR/xyz-real-estate-assistant/blob/main/workflows/XYZ_Real_Estate_Assistant.json",
    },
    {
      label: "Workflow overview",
      url: "https://raw.githubusercontent.com/WeaamR/xyz-real-estate-assistant/main/assets/workflow.png",
    },
    {
      label: "Conversation example",
      url: "https://raw.githubusercontent.com/WeaamR/xyz-real-estate-assistant/main/assets/conversation.png",
    },
    {
      label: "Confirmation example",
      url: "https://raw.githubusercontent.com/WeaamR/xyz-real-estate-assistant/main/assets/confirmation.png",
    },
  ],
},
    {
    id: "n8n-rag-course-assistant",
    slug: "n8n-rag-course-assistant",
    title: "RAG Course Assistant",
    subtitle: "Document question answering with n8n",
    categories: ["NLP & Data"],
    cardTech: ["n8n", "Google Gemini", "OpenAI", "Supabase"],
    technologies: [
      "n8n",
      "Google Gemini",
      "OpenAI Embeddings",
      "Supabase Vector Store",
      "Retrieval-Augmented Generation",
      "Conversation Memory",
    ],
    purpose:
      "A course assistant that retrieves relevant document passages and uses a language model to answer questions about an AI automation guide.",
    highlight:
      "Combines semantic retrieval, language generation, and recent conversation context in an n8n workflow.",
    repo: "https://github.com/WeaamR/n8n-rag-course-assistant",
    overview:
      "A guided RAG prototype built with an n8n AI Agent, Google Gemini, OpenAI embeddings, and Supabase. The shared workflow handles chat and retrieval from an existing indexed knowledge base.",
    problem:
      "Learners need a practical way to find relevant information within a course guide and ask follow-up questions.",
    approach: [
      "Receive questions through an n8n Chat Trigger.",
      "Connect an AI Agent to Gemini, conversation memory, and a document retrieval tool.",
      "Embed search queries using OpenAI text-embedding-3-small.",
      "Retrieve relevant passages from Supabase using the documents table and match_documents function.",
      "Configure a retrieval limit of four passages and a memory window of five interactions.",
      "Use retrieved information to support the generated response.",
    ],
    contribution: {
      summary:
        "Guided implementation and configuration of the n8n chat and retrieval workflow, with a documented question-answering demonstration. The source guide and training material belong to their respective authors.",
    },
    results: [
      "One documented successful run identified the source as The AI Automation Starter Guide (2026 Edition).",
      "The recorded execution reported 4.69 seconds and 2,283 tokens; these are single-run observations, not benchmarks.",
      "The repository includes a sanitized workflow export, setup guidance, architecture documentation, and an evaluation plan.",
    ],
    limitations: [
      "The executable export covers chat and retrieval only; a separate ingestion workflow is not included.",
      "Credentials and an indexed Supabase knowledge base must be configured separately.",
      "The submitted system prompt does not explicitly require retrieval, citations, or abstention when evidence is missing.",
      "Full retrieved passages were not visible in the demonstration, so comprehensive answer grounding was not established.",
      "Simple Memory requires further session-isolation and deployment testing before scaling.",
    ],
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/WeaamR/n8n-rag-course-assistant/main/assets/workflow-overview.png",
        alt:
          "n8n RAG workflow connecting the Chat Trigger and AI Agent to Google Gemini, Simple Memory, Supabase Vector Store, and OpenAI Embeddings.",
      },
    ],
    evidence: [
      {
        label: "Project documentation",
        url: "https://github.com/WeaamR/n8n-rag-course-assistant#readme",
      },
      {
        label: "View full-size workflow",
        url: "https://raw.githubusercontent.com/WeaamR/n8n-rag-course-assistant/main/assets/workflow-overview.png",
      },
      {
        label: "Workflow JSON",
        url: "https://github.com/WeaamR/n8n-rag-course-assistant/blob/main/workflows/RAG_AI_Agent.json",
      },
      {
        label: "Setup guide",
        url: "https://github.com/WeaamR/n8n-rag-course-assistant/blob/main/docs/setup.md",
      },
      {
        label: "Evaluation and limitations",
        url: "https://github.com/WeaamR/n8n-rag-course-assistant/blob/main/docs/evaluation.md",
      },
    ],
  },
    {
    id: "plancraft-ai",
    slug: "plancraft-ai",
    title: "PlanCraft AI",
    subtitle: "Turn project ideas into actionable plans",
    categories: ["Web Applications"],
    cardTech: ["n8n", "Google Gemini", "Supabase", "Lovable"],
    technologies: [
      "n8n",
      "Google Gemini",
      "Supabase",
      "Webhooks",
      "JSON Schema",
      "Lovable",
    ],
    purpose:
      "An AI-assisted planning application that transforms project briefs into structured execution phases, priorities, recommendations, and risks.",
    highlight:
      "Connects a web interface with an automation workflow for generating, storing, and displaying structured project plans.",
    repo: "https://github.com/WeaamR/plancraft-ai-weaam",
    demo: "https://plancraft-ai-weaam.lovable.app/",
    overview:
      "Users describe a project, its goal, and constraints. An n8n workflow retrieves the saved request from Supabase, uses Google Gemini to generate a structured plan, saves the result, and updates the request status.",
    problem:
      "A project idea often lacks a clear starting point, ordered execution steps, priorities, and an assessment of potential risks.",
    approach: [
      "Collect the project title, description, main goal, and additional context through a web form.",
      "Store the request in Supabase and pass its identifier to the automation webhook.",
      "Retrieve the saved brief and use Gemini to generate a project-specific plan.",
      "Parse the response against a JSON schema covering phases, actions, priorities, risks, and duration.",
      "Save the generated plan and mark the corresponding request as completed.",
      "Display the original brief alongside the structured result.",
    ],
    contribution: {
      summary:
        "Application and automation integration using Lovable, n8n, Supabase, and Google Gemini, documented through the request-to-plan user journey.",
    },
    results: [
      "A documented graphic design studio example progresses from Pending to Completed.",
      "The displayed result includes four prioritized execution phases, recommendations, risks with mitigations, and a 30-day estimated duration.",
      "The example demonstrates plan generation, not achievement of the proposed business goals.",
    ],
    limitations: [
      "Generated plans require human review; structured output does not guarantee feasibility or factual accuracy.",
      "The documented example does not establish aggregate output quality, latency, or generation cost.",
      "An HTTP 202 acknowledgement indicates receipt, not successful plan generation.",
    ],
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/WeaamR/plancraft-ai-weaam/main/assets/homepage.png",
        alt:
          "PlanCraft AI homepage showing the project brief form and saved plans.",
      },
      {
        src: "https://raw.githubusercontent.com/WeaamR/plancraft-ai-weaam/main/assets/n8n-workflow.png",
        alt:
          "n8n workflow connecting a webhook, Supabase request lookup, Gemini generation, structured output parsing, plan storage, and status update.",
      },
      {
        src: "https://raw.githubusercontent.com/WeaamR/plancraft-ai-weaam/main/assets/completed-plan.png",
        alt:
          "Completed graphic design studio plan with prioritized execution phases, recommendations, risks, and mitigations.",
      },
    ],
    evidence: [
      {
        label: "Project documentation",
        url: "https://github.com/WeaamR/plancraft-ai-weaam#readme",
      },
      {
        label: "View full-size workflow",
        url: "https://raw.githubusercontent.com/WeaamR/plancraft-ai-weaam/main/assets/n8n-workflow.png",
      },
      {
        label: "Documented generation example",
        url: "https://github.com/WeaamR/plancraft-ai-weaam#demonstrated-result",
      },
    ],
  },
    {
    id: "skillbridge-lite",
    slug: "skillbridge-lite",
    title: "SkillBridge Lite",
    subtitle: "Understand your fit. Discover your next step.",
    categories: ["Web Applications"],
    cardTech: ["React", "TypeScript", "TanStack", "Tailwind CSS"],
    technologies: [
      "React",
      "TypeScript",
      "TanStack Start",
      "TanStack Router",
      "Tailwind CSS",
      "Vite",
      "Lovable",
    ],
    purpose:
      "A career-guidance prototype comparing profile evidence with sample opportunities to explain relevant skills, potential gaps, and practical next steps.",
    highlight:
      "Distinguishes missing evidence from missing skills and connects recommendations to the user's profile.",
    repo: "https://github.com/WeaamR/skillbridge-lite-weaam",
    demo: "https://skillbridgelite.lovable.app/",
    overview:
      "SkillBridge Lite helps students, recent graduates, and early-career professionals explore how their documented skills, projects, and experience relate to a sample opportunity. Results are organized into relevant skills, potential gaps, and recommended next steps.",
    problem:
      "Opportunity requirements can be difficult to connect with concrete profile evidence, leaving users unsure what to highlight or improve.",
    approach: [
      "Provide an editable profile covering name, headline, background, skills, projects, and experience.",
      "Let users browse clearly labeled sample opportunities and review their requirements.",
      "Present an analysis flow with visible loading feedback.",
      "Explain relevant skills using supporting profile evidence.",
      "Identify undocumented requirements and recommend practical improvements.",
    ],
    contribution: {
      summary:
        "Development of a career-guidance prototype using Lovable, documented through its profile, opportunity-browsing, and analysis user journeys.",
    },
    results: [
      "A documented example connects Python and API experience to an AI Automation Intern sample opportunity.",
      "The displayed analysis identifies missing evidence for AI-service integration, workflow development, and process documentation.",
      "Six repository screenshots document the journey from homepage to completed analysis.",
    ],
    limitations: [
      "Opportunities are sample data, not verified live vacancies.",
      "The output provides guidance; it does not predict hiring outcomes or rank applicants.",
      "Screenshots document one displayed analysis, not measured accuracy across multiple profiles.",
      "The model integration and permanent profile storage were not independently verified in this review.",
    ],
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/WeaamR/skillbridge-lite-weaam/main/assets/home.png",
        alt:
          "SkillBridge Lite homepage with Explore Opportunities and Complete My Profile actions.",
      },
      {
        src: "https://raw.githubusercontent.com/WeaamR/skillbridge-lite-weaam/main/assets/profile.png",
        alt:
          "Editable profile with skills, projects, experience, and a sample-data notice.",
      },
      {
        src: "https://raw.githubusercontent.com/WeaamR/skillbridge-lite-weaam/main/assets/opportunities.png",
        alt:
          "Sample opportunities presented as cards with role descriptions and required skills.",
      },
      {
        src: "https://raw.githubusercontent.com/WeaamR/skillbridge-lite-weaam/main/assets/analysis-result.png",
        alt:
          "Analysis showing relevant skills, supporting evidence, potential gaps, and recommended next steps.",
      },
    ],
    evidence: [
      {
        label: "Project documentation",
        url: "https://github.com/WeaamR/skillbridge-lite-weaam#readme",
      },
      {
        label: "Screenshots and user journey",
        url: "https://github.com/WeaamR/skillbridge-lite-weaam#screenshots-and-user-journey",
      },
    ],
  },
    {
    id: "url-threat-analysis-bot",
    slug: "url-threat-analysis-bot",
    title: "URL Threat Analysis Bot",
    subtitle: "AI-assisted URL reputation analysis through Telegram",
    categories: ["Security Research"],
    cardTech: ["n8n", "Telegram", "VirusTotal", "OpenRouter"],
    technologies: [
      "n8n",
      "Telegram Bot API",
      "JavaScript",
      "HTTP APIs",
      "VirusTotal",
      "OpenRouter",
    ],
    purpose:
      "A Telegram bot that turns URL reputation reports into clear Arabic explanations of potential threats.",
    highlight:
      "Connects security report data with an AI-assisted explanation through an automated n8n workflow.",
    repo: "https://github.com/WeaamR/url-threat-analysis-bot",
    overview:
      "An n8n workflow receives URLs through Telegram, requests reputation report information, extracts engine classifications, and uses OpenRouter to produce an Arabic explanation of the findings.",
    problem:
      "Security reports contain multiple engine classifications that can be difficult to interpret without context about uncertainty and report freshness.",
    approach: [
      "Receive a URL through a Telegram message.",
      "Process the message with JavaScript and conditional workflow nodes.",
      "Prepare a URL identifier and request report information through an HTTP integration.",
      "Extract scan classifications and pass them to an OpenRouter analysis step.",
      "Return an Arabic explanation with classification counts, the available analysis timestamp, and cautionary notes.",
    ],
    contribution: {
      summary:
        "Workflow integration connecting Telegram, URL reputation report data, and AI-assisted explanations using n8n.",
    },
    results: [
      "One documented Telegram response presents 3 malicious detections out of 93 engines.",
      "A second documented response presents 2 suspicious classifications out of 92 engines.",
      "The examples explain uncertainty rather than treating engine counts as definitive safety verdicts.",
    ],
    limitations: [
      "The repository contains documentation and screenshots; an executable workflow JSON export is not included.",
      "The evidence does not establish whether each request triggers a new scan or retrieves an existing report.",
      "Exact validation conditions, model configuration, and error-handling behavior are not documented.",
      "No measured accuracy, latency, or cost is reported. Zero detections do not guarantee URL safety.",
    ],
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/WeaamR/url-threat-analysis-bot/main/assets/n8n-workflow.png",
        alt:
          "n8n workflow connecting Telegram input, JavaScript processing, conditional routing, HTTP report lookup, scan-result extraction, OpenRouter analysis, and a Telegram response.",
      },
    ],
    evidence: [
      {
        label: "Project documentation",
        url: "https://github.com/WeaamR/url-threat-analysis-bot#readme",
      },
      {
        label: "View full-size workflow",
        url: "https://raw.githubusercontent.com/WeaamR/url-threat-analysis-bot/main/assets/n8n-workflow.png",
      },
      {
        label: "Telegram demonstration reports",
        url: "https://github.com/WeaamR/url-threat-analysis-bot#demonstration-results",
      },
    ],
  },
    {
    id: "the-inner-room",
    slug: "the-inner-room",
    title: "THE INNER ROOM",
    subtitle: "A workspace for exploring fictional characters",
    categories: ["Web Applications"],
    cardTech: ["React", "TypeScript", "Supabase", "Lovable"],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "TanStack",
      "Tailwind CSS",
      "Vitest",
      "Lovable",
    ],
    purpose:
      "A bilingual platform helping writers explore character decisions, motivations, and consequences through challenging dilemmas.",
    highlight:
      "Arabic and English support, character profiles, and draft-to-completion exploration workflows.",
    repo: "https://github.com/WeaamR/inner-room-schema-scout",
    demo: "https://inner-room-schema-scout.lovable.app/",
    overview:
      "THE INNER ROOM supports fictional character development through writing projects, character profiles, and structured scenario explorations.",
    problem:
      "Writers need a structured way to connect character choices with motivations, fears, values, and consequences.",
    approach: [
      "Organize writing projects and detailed character profiles.",
      "Explore dilemmas through decision, motivation, potential cost, and author reflection.",
      "Allow incomplete explorations to be saved as drafts and validate required fields before completion.",
      "Support Arabic and English interfaces with RTL and LTR layouts.",
      "Use Supabase for authentication and data storage.",
    ],
    contribution: {
      summary:
        "AI-assisted application development using Lovable and Supabase, with project documentation and testing evidence.",
    },
    results: [
      "Repository documentation reports 12 passing automated tests across 4 test files.",
      "Screenshots document completed explorations, validation feedback, draft database records, and the logged-out access flow.",
    ],
    limitations: [
      "The reported automated tests cover selected local behaviors, not complete end-to-end functionality.",
      "Cross-user database access isolation and full live database integration remain unverified in the available evidence.",
      "AI-assisted development does not imply AI-generated stories or characters within the application.",
    ],
    evidence: [
      {
        label: "Project documentation and testing evidence",
        url: "https://github.com/WeaamR/inner-room-schema-scout#readme",
      },
    ],
  },
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
