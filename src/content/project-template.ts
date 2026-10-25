// ============================================================
// EXAMPLE PROJECT TEMPLATE — NOT PUBLISHED.
// This file is never imported by the site or the assistant.
// Copy the object below into `allProjects` in `src/content/projects.ts`,
// fill it in, and remove `draft: true` when it is ready to publish.
// ============================================================
import type { Project } from "./projects";
// import shot1 from "@/assets/projects/my-project-1.png.asset.json";

export const exampleProjectTemplate: Project = {
  draft: true, // keeps it hidden even if copied; delete this line to publish
  id: "my-new-project", // stable ID, never change after publishing
  slug: "my-new-project", // URL: /projects/my-new-project
  title: "My New Project",
  subtitle: "One-line subtitle",
  purpose: "Short description shown on the project card.",
  highlight: "One concrete result shown on the card.",
  categories: ["Machine Learning"], // must be one of `categories`
  cardTech: ["Python", "Pandas"],
  technologies: ["Python", "Pandas", "scikit-learn"],
  overview: "What the project is, in two or three sentences.",
  problem: "Optional: the question or problem it addresses.",
  approach: ["Step one.", "Step two."],
  contribution: {
    // Solo work: use `summary` only.
    // Team work: list your own part in `individual` and shared work in `team`.
    individual: ["What I built myself."],
    team: ["What the team did together."],
  },
  results: ["Optional: a recorded result."],
  keyFinding: "Optional: the main takeaway.",
  limitations: ["Optional: an honest limitation."],
  repo: "https://github.com/WeaamR/my-new-project", // optional, https only
  demo: "https://example.com", // optional, https only
  screenshots: [
    // { src: shot1.url, alt: "Describe what the screenshot shows" },
  ],
  evidence: [{ label: "Repository", url: "https://github.com/WeaamR/my-new-project" }],
};
