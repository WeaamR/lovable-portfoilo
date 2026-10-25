import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAssistant } from "@/components/site/assistant";
import { HeroShowcase } from "@/components/site/hero-showcase";
import { categories, education, getProjectById, learning, profile, projects, skills, training, type Category } from "@/content/portfolio";
import portrait from "@/assets/weaam-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Weaam Abdalaal — AI & Data Science Portfolio" },
      { name: "description", content: "Machine learning, NLP, and data science projects by Weaam Abdalaal: model comparisons, preprocessing pipelines, and experiments." },
      { property: "og:title", content: "Weaam Abdalaal — AI & Data Science Portfolio" },
      { property: "og:description", content: "Explore how Weaam prepares data, compares models, and interprets experiments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({ id, eyebrow, title, children, centerMobile = false }: { id: string; eyebrow: string; title: string; children: React.ReactNode; centerMobile?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t py-20 sm:py-24">
      <div className="container-page">
        <div className={centerMobile ? "text-center md:text-left" : undefined}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  const { open } = useAssistant();
  const [filter, setFilter] = useState<"All" | Category>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <main id="main">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="min-w-0 text-center lg:text-left">
            <p className="eyebrow">{profile.focus}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{profile.headline}</h1>
            <p className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground lg:mx-0">{profile.description}</p>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground lg:mx-0">{profile.supporting}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button asChild size="lg">
                <a href="#projects">Explore Projects <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" onClick={open}>
                <MessageSquare className="h-4 w-4" /> Ask About My Work
              </Button>
            </div>
            <p className="mt-6 flex items-center justify-center gap-1.5 text-sm lg:justify-start text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden /> {profile.location}
            </p>
          </div>
          <HeroShowcase />
        </div>
      </section>

      <Section id="about" eyebrow="About" title="Understanding why a solution works" centerMobile>
        <div className="grid items-center gap-10 md:grid-cols-[18rem_1fr]">
          <img
            src={portrait.url}
            alt="Portrait of Weaam Abdalaal"
            width={288}
            height={360}
            loading="lazy"
            className="mx-auto aspect-[4/5] h-auto w-full max-w-64 rounded-2xl md:max-w-72 border object-cover object-top"
          />
          <div className="mx-auto max-w-[36rem] space-y-5 text-center text-base leading-relaxed sm:text-[1.05rem] md:mx-0 md:max-w-2xl md:text-left">{profile.about.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}</div>
        </div>
      </Section>

      <Section id="projects" eyebrow="Selected work" title="Projects">
        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === c ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <ul className="grid gap-5 md:grid-cols-2">
          {shown.map((p) => (
            <li key={p.id} className="surface lift flex h-full flex-col p-6">
              <p className="text-xs font-medium text-primary">{p.categories.join(" · ")}</p>
              <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.purpose}</p>
              <p className="mt-4 border-l-2 border-primary pl-3 text-sm">{p.highlight}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                {p.cardTech.map((t) => (
                  <li key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs">{t}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Explore Project <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                    <Github className="h-3.5 w-3.5" /> GitHub<span className="sr-only"> repository for {p.title}</span>
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                    <ExternalLink className="h-3.5 w-3.5" /> Live demo<span className="sr-only"> for {p.title}</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" eyebrow="Skills" title="Skills and evidence">
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="surface p-6">
              <h3 className="text-lg font-bold">{s.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((i) => <li key={i} className="rounded-md border bg-background px-2.5 py-1 text-sm">{i}</li>)}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">Explore supporting projects:</p>
              <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                {s.evidence.flatMap((id) => {
                  const ep = getProjectById(id);
                  return ep ? [
                    <li key={id}>
                      <Link to="/projects/$slug" params={{ slug: ep.slug }} className="text-sm font-medium text-primary hover:underline">
                        {ep.title}
                      </Link>
                    </li>,
                  ] : [];
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-dashed p-6">
          <h3 className="text-base font-bold">Currently learning</h3>
          <p className="mt-1 text-sm text-muted-foreground">In training — not yet demonstrated in the projects above.</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {learning.map((l) => <li key={l} className="rounded-md bg-muted px-2.5 py-1 text-sm">{l}</li>)}
          </ul>
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Education and training">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface p-6">
            <h3 className="text-lg font-bold">{education.degree}</h3>
            <p className="mt-1 text-muted-foreground">{education.school}</p>
            <p className="mt-4 text-sm">{education.date}</p>
            <p className="text-sm font-semibold text-primary">{education.gpa}</p>
          </div>
          <ul className="surface divide-y">
            {training.map((t) => (
              <li key={t.name} className="flex flex-wrap items-baseline justify-between gap-2 p-5">
                <div className="min-w-0">
                  <p className="font-semibold">{t.name}</p>
                  {t.provider && <p className="text-sm text-muted-foreground">{t.provider}</p>}
                </div>
                <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-primary">{t.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s talk about the work">
        <p className="mx-auto max-w-xl text-center text-muted-foreground sm:mx-0 sm:text-left">Email me at <a href={`mailto:${profile.email}`} className="font-medium text-primary underline underline-offset-4">{profile.email}</a> or reach me through LinkedIn. Code and project evidence are on GitHub.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}><Mail className="h-4 w-4" /> Email</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
          </Button>
        </div>
      </Section>
    </main>
  );
}
