import { useRef, useState, type KeyboardEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { heroShowcase as h, yelpResults } from "@/content/portfolio";

const tabs = [
  { id: "nlp", label: "NLP" },
  { id: "models", label: "Models" },
  { id: "security", label: "Security" },
] as const;
type TabId = (typeof tabs)[number]["id"];

function Footer({ label, link, slug }: { label: string; link: string; slug: string }) {
  return (
    <div className="mt-auto space-y-3 pt-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <Link to="/projects/$slug" params={{ slug }} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary hover:underline">
        {link} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </div>
  );
}

export function HeroShowcase() {
  const [tab, setTab] = useState<TabId>("nlp");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    else return;
    e.preventDefault();
    setTab(tabs[n]!.id);
    refs.current[n]?.focus();
  };
  const bars = h.models.order.map((m) => yelpResults.find((r) => r.model === m)!).filter(Boolean);

  return (
    <aside aria-labelledby="showcase-title" className="surface mx-auto w-full max-w-md p-5 shadow-sm sm:p-6 lg:max-w-none">
      <h2 id="showcase-title" className="text-base font-bold">{h.title}</h2>
      <div role="tablist" aria-label={h.title} className="mt-4 grid grid-cols-3 gap-1.5">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { refs.current[i] = el; }}
            id={`tab-${t.id}`}
            role="tab"
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => onKey(e, i)}
            className={`min-h-10 rounded-lg px-3 text-sm font-medium transition-colors ${
              tab === t.id ? "bg-primary text-primary-foreground" : "bg-accent-soft text-foreground hover:bg-border"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div id={`panel-${tab}`} role="tabpanel" aria-labelledby={`tab-${tab}`} tabIndex={0} className="mt-5 flex min-h-[19rem] flex-col rounded-lg">
        {tab === "nlp" && (
          <>
            <h3 className="text-sm font-bold">{h.nlp.heading}</h3>
            <p className="eyebrow mt-3 mb-1.5 text-muted-foreground">Input</p>
            <p className="rounded-lg border bg-background px-3 py-2.5 font-mono text-sm">{h.nlp.input}</p>
            <p className="eyebrow mt-3 mb-1.5">Output</p>
            <p className="rounded-lg border bg-accent-soft px-3 py-2.5 font-mono text-sm">
              {h.nlp.output.map((w, i) => (
                <span key={w}>
                  {i > 0 && " "}
                  {w === h.nlp.highlight ? <mark className="rounded bg-primary px-1 font-semibold text-primary-foreground">{w}</mark> : w}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{h.nlp.explanation}</p>
            <Footer label={h.nlp.label} link={h.nlp.linkLabel} slug={h.nlp.slug} />
          </>
        )}
        {tab === "models" && (
          <>
            <h3 className="text-sm font-bold">{h.models.heading}</h3>
            <p className="mt-1 text-xs text-muted-foreground">Test accuracy (0–100%)</p>
            <ul className="mt-3 space-y-3">
              {bars.map((r) => (
                <li key={r.model}>
                  <div className="flex items-baseline justify-between gap-2 text-sm">
                    <span className="min-w-0">{r.model}</span>
                    <span className="shrink-0 font-mono font-semibold">{r.accuracy.toFixed(2)}%</span>
                  </div>
                  <div className="mt-1 h-2.5 rounded-full bg-accent-soft" aria-hidden>
                    <div className="h-2.5 rounded-full bg-primary" style={{ width: `${r.accuracy}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">{h.models.takeaway}</p>
            <Footer label={h.models.label} link={h.models.linkLabel} slug={h.models.slug} />
          </>
        )}
        {tab === "security" && (
          <>
            <h3 className="text-sm font-bold">{h.security.heading}</h3>
            <ol className="mt-3 grid grid-cols-2 gap-2 text-center text-xs sm:text-sm" aria-label="Pipeline order">
              {h.security.steps.map((s, i) => (
                <li
                  key={s}
                  className={`rounded-lg border px-2 py-2.5 font-medium ${
                    s === h.security.highlight ? "border-primary bg-primary text-primary-foreground" : "bg-background text-muted-foreground"
                  }`}
                >
                  <span className="sr-only">Step {i + 1}: </span>{s}
                </li>
              ))}
            </ol>
            <p className="mt-2 text-center text-xs text-muted-foreground" aria-hidden>
              {h.security.steps.join(" → ")}
            </p>
            <p className="mt-3 text-sm">{h.security.text}</p>
            <Footer label={h.security.label} link={h.security.linkLabel} slug={h.security.slug} />
          </>
        )}
      </div>
    </aside>
  );
}
