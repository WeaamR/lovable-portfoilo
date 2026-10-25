import { describe, expect, it } from "vitest";
import { buildKnowledge, getProject, projects, sourceLinks, validateProjects } from "@/content/portfolio";
import { exampleProjectTemplate } from "@/content/project-template";

describe("project content", () => {
  it("all published projects pass validation", () => {
    expect(validateProjects(projects)).toEqual([]);
  });

  it("keeps the existing project URLs", () => {
    for (const slug of ["yelp-sentiment-analysis", "adaptiveqke", "nlp-text-preprocessing-pipeline", "neural-network-experiments"])
      expect(getProject(slug)?.slug).toBe(slug);
  });

  it("excludes the example template from the site and the assistant", () => {
    expect(projects.some((p) => p.id === exampleProjectTemplate.id)).toBe(false);
    expect(sourceLinks[`project:${exampleProjectTemplate.id}`]).toBeUndefined();
    expect(buildKnowledge()).not.toContain(exampleProjectTemplate.title);
  });

  it("rejects non-https links and missing alt text", () => {
    const bad = { ...exampleProjectTemplate, repo: "javascript:alert(1)", screenshots: [{ src: "x.png", alt: " " }] };
    const errors = validateProjects([bad]);
    expect(errors.some((e) => e.includes("repo"))).toBe(true);
    expect(errors.some((e) => e.includes("alt"))).toBe(true);
  });

  it("rejects duplicate slugs", () => {
    expect(validateProjects([projects[0]!, { ...projects[1]!, slug: projects[0]!.slug }]).some((e) => e.includes("duplicate slug"))).toBe(true);
  });
});
