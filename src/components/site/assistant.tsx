import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, RotateCcw, Send, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { askAssistant } from "@/lib/assistant.functions";
import { assistantQuestions } from "@/content/portfolio";

type Msg = { role: "user" | "assistant"; content: string; sources?: { label: string; href: string }[] };

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useAssistant = () => useContext(Ctx);

const MAX = 500;

export function AssistantProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ msg: string; retryable: boolean } | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const ask = useServerFn(askAssistant);

  async function send(history: Msg[]) {
    setLoading(true);
    setError(null);
    try {
      const res = await ask({ data: { messages: history.map(({ role, content }) => ({ role, content })) } });
      if (res.ok) setMessages([...history, { role: "assistant", content: res.text, sources: res.sources }]);
      else setError({ msg: res.error, retryable: res.retryable });
    } catch {
      setError({ msg: "The assistant is unavailable right now. You can still explore the projects.", retryable: true });
    } finally {
      setLoading(false);
    }
  }

  function submit(q: string) {
    const question = q.trim().slice(0, MAX);
    if (!question || loading) return;
    const next = [...messages, { role: "user" as const, content: question }];
    setMessages(next);
    setInput("");
    void send(next);
  }

  return (
    <Ctx.Provider value={{ open: () => setOpen(true) }}>
      {children}
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent
          className="flex w-full flex-col gap-0 p-0 sm:max-w-md"
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            inputRef.current?.focus();
          }}
        >
          <SheetHeader className="border-b p-5 text-left">
            <SheetTitle className="font-display">Ask About My Work</SheetTitle>
            <SheetDescription>
              AI answers based only on this portfolio's documented content. Conversations are not saved.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 space-y-4 overflow-y-auto p-5" aria-live="polite">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Try a question:</p>
                {assistantQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => submit(q)}
                    className="block w-full rounded-lg border bg-card px-3 py-2.5 text-left text-sm transition-colors hover:border-primary hover:bg-accent-soft"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-xl bg-primary px-3.5 py-2.5 text-sm text-primary-foreground"
                      : "rounded-xl border bg-card px-3.5 py-3 text-sm"
                  }
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{m.content}</p>
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 border-t pt-2.5">
                      <span className="text-xs text-muted-foreground">Sources:</span>
                      {m.sources.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="text-xs font-medium text-primary underline-offset-2 hover:underline"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <p className="flex items-center gap-2 text-sm text-muted-foreground" role="status">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Thinking…
              </p>
            )}
            {error && (
              <div role="alert" className="rounded-lg border border-destructive/40 bg-card p-3 text-sm">
                <p className="text-destructive">{error.msg}</p>
                <p className="mt-1 text-muted-foreground">
                  You can still browse the <Link to="/" hash="projects" onClick={() => setOpen(false)} className="text-primary underline">projects</Link>.
                </p>
                {error.retryable && (
                  <Button size="sm" variant="outline" className="mt-2" onClick={() => send(messages)}>
                    <RotateCcw className="h-3.5 w-3.5" /> Retry
                  </Button>
                )}
              </div>
            )}
          </div>

          <form
            className="border-t p-4"
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
          >
            <label htmlFor="assistant-input" className="sr-only">Your question</label>
            <textarea
              id="assistant-input"
              ref={inputRef}
              value={input}
              maxLength={MAX}
              rows={2}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit(input);
                }
              }}
              placeholder="Ask about a project, result, or contribution…"
              className="w-full resize-none rounded-lg border bg-card px-3 py-2 text-sm focus-visible:outline-2"
            />
            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">{input.length}/{MAX}</span>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={!messages.length && !error}
                  onClick={() => {
                    setMessages([]);
                    setError(null);
                  }}
                >
                  <Trash2 className="h-3.5 w-3.5" /> Clear
                </Button>
                <Button type="submit" size="sm" disabled={loading || !input.trim()}>
                  <Send className="h-3.5 w-3.5" /> Ask
                </Button>
              </div>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </Ctx.Provider>
  );
}
