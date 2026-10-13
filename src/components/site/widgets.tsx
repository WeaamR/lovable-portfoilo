import { useState } from "react";
import { nlpExamples, nnTabs, qkePolicy, yelpResults } from "@/content/portfolio";

export function RecordedLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" aria-hidden />
      {children}
    </span>
  );
}

function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button
          key={o.id}
          role="radio"
          aria-checked={value === o.id}
          onClick={() => onChange(o.id)}
          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
            value === o.id ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function PreprocessExamples({ initial = "casing", compact = false }: { initial?: string; compact?: boolean }) {
  const [id, setId] = useState(initial);
  const ex = nlpExamples.find((e) => e.id === id) ?? nlpExamples[0]!;
  return (
    <div className="space-y-4">
      {!compact && (
        <Segmented
          label="Recorded example"
          options={nlpExamples.map((e, i) => ({ id: e.id, label: `Example ${i + 1}` }))}
          value={id}
          onChange={setId}
        />
      )}
      <div className="grid gap-3">
        <div>
          <p className="eyebrow mb-1.5 text-muted-foreground">Input</p>
          <p className="rounded-lg border bg-background px-3 py-2.5 font-mono text-sm">{ex.input}</p>
        </div>
        <div>
          <p className="eyebrow mb-1.5">Output</p>
          <p className="rounded-lg border border-primary/30 bg-accent-soft px-3 py-2.5 font-mono text-sm">{ex.output}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{ex.explanation}</p>
    </div>
  );
}

export function YelpChart() {
  const [metric, setMetric] = useState<"accuracy" | "f1">("accuracy");
  const min = 88;
  const max = 96;
  const label = metric === "accuracy" ? "Test accuracy" : "F1-score";
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Segmented
          label="Metric"
          options={[
            { id: "accuracy", label: "Accuracy" },
            { id: "f1", label: "F1-score" },
          ]}
          value={metric}
          onChange={setMetric}
        />
        <RecordedLabel>Saved experiment results — not live training</RecordedLabel>
      </div>
      <figure aria-hidden="true" className="space-y-3">
        {yelpResults.map((r) => {
          const v = r[metric];
          const w = ((v - min) / (max - min)) * 100;
          return (
            <div key={r.model} className="grid grid-cols-1 gap-1 sm:grid-cols-[13rem_1fr] sm:items-center sm:gap-4">
              <span className="text-sm">{r.model}</span>
              <div className="flex items-center gap-3">
                <div className="h-6 flex-1 rounded bg-muted">
                  <div className="h-6 rounded bg-primary transition-all" style={{ width: `${w}%` }} />
                </div>
                <span className="w-16 text-right font-mono text-sm font-semibold">{v.toFixed(2)}%</span>
              </div>
            </div>
          );
        })}
        <figcaption className="text-xs text-muted-foreground sm:pl-[14rem]">
          {label} (%) — axis spans {min}% to {max}% to make differences readable.
        </figcaption>
      </figure>
      <DataTable
        caption="Recorded results on 20,000 test reviews"
        columns={["Model", "Test accuracy", "F1-score", "Model fitting time"]}
        rows={yelpResults.map((r) => [r.model, `${r.accuracy.toFixed(2)}%`, `${r.f1.toFixed(2)}%`, `${r.fitSeconds.toFixed(2)} s`])}
      />
    </div>
  );
}

export function DataTable({ caption, columns, rows }: { caption?: string; columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[28rem] text-left text-sm">
        {caption && <caption className="border-b bg-background px-3 py-2 text-left text-xs text-muted-foreground">{caption}</caption>}
        <thead className="bg-background">
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col" className="px-3 py-2.5 font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t bg-card">
              {r.map((c, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="px-3 py-2.5 font-medium">{c}</th>
                ) : (
                  <td key={i} className="px-3 py-2.5 font-mono">{c}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PolicyLookup() {
  const [tier, setTier] = useState<string>(qkePolicy.tiers[0]!);
  const [band, setBand] = useState(0);
  const level = qkePolicy.table[tier]?.[band] ?? 512;
  return (
    <div className="space-y-5">
      <RecordedLabel>Illustration of the documented selection rules. No TLS connection is executed.</RecordedLabel>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Device tier</span>
          <select value={tier} onChange={(e) => setTier(e.target.value)} className="w-full rounded-lg border bg-card px-3 py-2">
            {qkePolicy.tiers.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">RTT band</span>
          <select value={band} onChange={(e) => setBand(Number(e.target.value))} className="w-full rounded-lg border bg-card px-3 py-2">
            {qkePolicy.bands.map((b, i) => <option key={b} value={i}>{b}</option>)}
          </select>
        </label>
      </div>
      <div className="rounded-lg border border-primary/30 bg-accent-soft p-4" aria-live="polite">
        <p className="text-xs text-muted-foreground">Selected hybrid group</p>
        <p className="mt-1 font-mono text-lg font-semibold">{qkePolicy.groups[level]}</p>
        <p className="mt-1 text-xs text-muted-foreground">Group label only — not a security rating for the whole connection.</p>
      </div>
      <DataTable
        caption="Documented policy table (ML-KEM level)"
        columns={["Device", ...qkePolicy.bands]}
        rows={qkePolicy.tiers.map((t) => [t, ...(qkePolicy.table[t] ?? []).map(String)])}
      />
      <p className="text-xs text-muted-foreground">
        512 → x25519_mlkem512 · 768 → X25519MLKEM768 · 1024 → SecP384r1MLKEM1024
      </p>
    </div>
  );
}

export function NNTabs() {
  const [id, setId] = useState(nnTabs[0]!.id);
  const tab = nnTabs.find((t) => t.id === id)!;
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Segmented label="Experiment group" options={nnTabs.map((t) => ({ id: t.id, label: t.label }))} value={id} onChange={setId} />
        <RecordedLabel>Recorded experiment results</RecordedLabel>
      </div>
      <DataTable columns={tab.columns} rows={tab.rows} />
      <p className="text-sm"><span className="font-semibold">Takeaway: </span>{tab.takeaway}</p>
    </div>
  );
}

export function Architecture() {
  const steps = ["Context Probe", "Policy Engine", "TLS Client", "Measurement"];
  return (
    <figure>
      <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-2 sm:flex-col sm:items-stretch">
            <div
              className={`flex-1 rounded-lg border px-3 py-3 text-center text-sm font-medium ${
                s === "Policy Engine" ? "border-primary bg-accent-soft text-primary" : "bg-card"
              }`}
            >
              {s}
              {s === "Policy Engine" && <span className="mt-0.5 block text-xs font-normal">Implemented by Weaam</span>}
            </div>
            {i < steps.length - 1 && <span aria-hidden className="text-muted-foreground sm:hidden">↓</span>}
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-xs text-muted-foreground">
        Pipeline order: Context Probe → Policy Engine → TLS Client → Measurement. The other components were built and evaluated as a team.
      </figcaption>
    </figure>
  );
}
