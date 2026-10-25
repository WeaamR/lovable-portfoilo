import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject, nlpStats, projects, qkePolicy, yelpDataset, yelpSettings, yelpTrainingNote, type Project } from "@/content/portfolio";
import { Architecture, DataTable, NNTabs, PolicyLookup, PreprocessExamples, RecordedLabel, YelpChart } from "@/components/site/widgets";
import yLstm from "@/assets/artifacts/yelp-lstm.png.asset.json";
import yRnn from "@/assets/artifacts/yelp-simple_rnn.png.asset.json";
import yTfidf from "@/assets/artifacts/yelp-tfidf_logistic_regression.png.asset.json";
import yLstmCurve from "@/assets/artifacts/yelp-lstm_training.png.asset.json";
import yRnnCurve from "@/assets/artifacts/yelp-simple_rnn_training.png.asset.json";
import nDist from "@/assets/artifacts/nlp-sentiment_distribution.png.asset.json";
import nWords from "@/assets/artifacts/nlp-top_20_clean_words.png.asset.json";
import nAir from "@/assets/artifacts/nlp-reviews_per_airline.png.asset.json";
import nNeg from "@/assets/artifacts/nlp-negative_reasons.png.asset.json";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found — Weaam Abdalaal" }, { name: "robots", content: "noindex" }] };
    const title = `${p.title} — Weaam Abdalaal`;
    return {
      meta: [
        { title },
        { name: "description", content: p.overview },
        { property: "og:title", content: title },
        { property: "og:description", content: p.overview },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t py-10">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Artifacts({ items, source }: { items: { src: string; alt: string }[]; source: string }) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <figure key={i.src} className="surface overflow-hidden p-3">
            <img src={i.src} alt={i.alt} loading="lazy" className="w-full rounded-md bg-card" />
            <figcaption className="mt-2 text-xs text-muted-foreground">{i.alt}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Images from the project repository: <a href={source} target="_blank" rel="noreferrer" className="text-primary underline">{source.replace("https://github.com/", "")}</a>
      </p>
    </div>
  );
}

function Stats({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((s) => (
        <div key={s.label} className="surface p-4">
          <dt className="text-xs text-muted-foreground">{s.label}</dt>
          <dd className="mt-1 font-display text-2xl font-extrabold">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function hasCustomResults(id: string) {
  return ["yelp-sentiment-analysis", "adaptiveqke", "nlp-text-preprocessing-pipeline", "neural-network-experiments"].includes(id);
}

function Results({ p }: { p: Project }) {
  if (p.id === "yelp-sentiment-analysis")
    return (
      <div className="space-y-8">
        <Stats items={yelpDataset} />
        <YelpChart />
        <p className="text-sm text-muted-foreground">
          TF-IDF preparation required an additional 32.20 seconds. Neural preprocessing time was not measured separately. Timings describe one experimental environment and are not end-to-end benchmarks.
        </p>
        <details className="surface p-5">
          <summary className="cursor-pointer font-semibold">Experimental settings</summary>
          <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {yelpSettings.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b py-1.5">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right font-mono">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm">{yelpTrainingNote}</p>
        </details>
        <div>
          <h3 className="mb-3 font-semibold">Confusion matrices</h3>
          <Artifacts
            source={`${p.repo}/tree/main/results/confusion_matrices`}
            items={[
              { src: yTfidf.url, alt: "Confusion matrix — TF-IDF + Logistic Regression" },
              { src: yRnn.url, alt: "Confusion matrix — SimpleRNN" },
              { src: yLstm.url, alt: "Confusion matrix — LSTM" },
            ]}
          />
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Learning curves</h3>
          <Artifacts
            source={`${p.repo}/tree/main/results/learning_curves`}
            items={[
              { src: yRnnCurve.url, alt: "Training and validation curves — SimpleRNN" },
              { src: yLstmCurve.url, alt: "Training and validation curves — LSTM" },
            ]}
          />
        </div>
      </div>
    );
  if (p.id === "adaptiveqke")
    return (
      <div className="space-y-8">
        <Architecture />
        <Stats items={qkePolicy.datasets} />
        <div className="surface p-5 sm:p-6">
          <h3 className="mb-4 font-semibold">Policy lookup</h3>
          <PolicyLookup />
        </div>
      </div>
    );
  if (p.id === "nlp-text-preprocessing-pipeline")
    return (
      <div className="space-y-8">
        <Stats items={nlpStats} />
        <div className="surface p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold">Recorded examples</h3>
            <RecordedLabel>Recorded outputs — not live Python execution</RecordedLabel>
          </div>
          <PreprocessExamples />
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Exploratory charts</h3>
          <Artifacts
            source={`${p.repo}/tree/main/results/charts`}
            items={[
              { src: nDist.url, alt: "Sentiment distribution" },
              { src: nAir.url, alt: "Reviews per airline" },
              { src: nNeg.url, alt: "Negative reasons" },
              { src: nWords.url, alt: "Top 20 words after cleaning" },
            ]}
          />
        </div>
      </div>
    );
  if (p.id !== "neural-network-experiments")
    return p.results?.length ? <ul className="list-disc space-y-1.5 pl-5">{p.results.map((r) => <li key={r}>{r}</li>)}</ul> : null;
  return (
    <div className="surface p-5 sm:p-6">
      <NNTabs />
      <p className="mt-4 text-sm text-muted-foreground">
        Remaining reports (prediction analysis, custom digits, EarlyStopping, L2, batch size, activations) are in the{" "}
        <a href={p.repo ?? "#"} target="_blank" rel="noreferrer" className="text-primary underline">repository</a>.
      </p>
    </div>
  );
}

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.id === p.id);
  const next = projects[(idx + 1) % projects.length]!;
  return (
    <main id="main" className="container-page max-w-4xl py-12 sm:py-16">
      <Link to="/" hash="projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>
      <header className="mt-6 pb-10">
        <p className="eyebrow">{p.categories.join(" · ")}</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{p.title}</h1>
        <p className="mt-3 text-xl text-muted-foreground">{p.subtitle}</p>
        {(p.repo || p.demo) && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                View repository <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                Live demo <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </header>

      <Block title="Overview"><p className="leading-relaxed">{p.overview}</p></Block>
      {p.problem && <Block title="Problem"><p className="leading-relaxed">{p.problem}</p></Block>}
      <Block title="Approach">
        <ul className="list-disc space-y-1.5 pl-5">{p.approach.map((a) => <li key={a}>{a}</li>)}</ul>
      </Block>
      <Block title="My Contribution">
        {p.contribution.summary && <p>{p.contribution.summary}</p>}
        {(p.contribution.individual?.length || p.contribution.team?.length) && (
          <div className="grid gap-5 md:grid-cols-2">
            <div className="surface border-primary/40 p-5">
              <h3 className="font-semibold text-primary">Completed independently</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">{p.contribution.individual?.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <div className="surface p-5">
              <h3 className="font-semibold">Collaborative (team)</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">{p.contribution.team?.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        )}
      </Block>
      {(hasCustomResults(p.id) || !!p.results?.length) && (
        <Block title={p.id === "adaptiveqke" ? "Demonstration" : "Recorded Results"}><Results p={p} /></Block>
      )}
      {!!p.screenshots?.length && (
        <Block title="Screenshots">
          <div className="grid gap-4 sm:grid-cols-2">
            {p.screenshots.map((i) => (
              <figure key={i.src} className="surface overflow-hidden p-3">
                <img src={i.src} alt={i.alt} loading="lazy" className="w-full rounded-md bg-card" />
                <figcaption className="mt-2 text-xs text-muted-foreground">{i.alt}</figcaption>
              </figure>
            ))}
          </div>
        </Block>
      )}
      {p.keyFinding && <Block title="Key Finding"><p className="border-l-2 border-primary pl-4 leading-relaxed">{p.keyFinding}</p></Block>}
      {!!p.limitations?.length && (
        <Block title="Limitations">
          <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground">{p.limitations.map((l) => <li key={l}>{l}</li>)}</ul>
        </Block>
      )}
      <Block title="Technologies">
        <ul className="flex flex-wrap gap-1.5">{p.technologies.map((t) => <li key={t} className="rounded-md bg-muted px-2.5 py-1 text-sm">{t}</li>)}</ul>
      </Block>
      {!!p.evidence?.length && <Block title="Repository and evidence">
        <ul className="space-y-2">
          {p.evidence.map((e) => (
            <li key={e.url}>
              <a href={e.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                {e.label} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </Block>}

      <nav aria-label="More projects" className="mt-6 flex flex-wrap justify-between gap-4 border-t pt-8">
        <Link to="/" hash="projects" className="text-sm font-medium hover:underline">← Back to project grid</Link>
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="text-sm font-medium text-primary hover:underline">
          Next: {next.title} →
        </Link>
      </nav>
    </main>
  );
}
