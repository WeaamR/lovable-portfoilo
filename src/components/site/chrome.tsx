import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/portfolio";
import { useAssistant } from "./assistant";

const nav = [
  { label: "About", hash: "about" },
  { label: "Projects", hash: "projects" },
  { label: "Skills", hash: "skills" },
  { label: "Education", hash: "education" },
  { label: "Contact", hash: "contact" },
];

export function Header() {
  const { open } = useAssistant();
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-card focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="min-w-0 truncate font-display text-base font-extrabold tracking-tight">
          {profile.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.hash} to="/" hash={n.hash} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button size="sm" onClick={open} className="hidden sm:inline-flex">
            <MessageSquare className="h-4 w-4" /> Ask About My Work
          </Button>
          <Button size="icon" variant="outline" onClick={open} className="sm:hidden" aria-label="Ask About My Work">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="md:hidden"
            aria-expanded={menu}
            aria-controls="mobile-nav"
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu((v) => !v)}
          >
            {menu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      {menu && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-card md:hidden">
          <ul className="container-page py-2">
            {nav.map((n) => (
              <li key={n.hash}>
                <Link to="/" hash={n.hash} onClick={() => setMenu(false)} className="block py-3 text-base">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container-page flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
