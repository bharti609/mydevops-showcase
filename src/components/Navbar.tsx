import { Link } from "@tanstack/react-router";
import { Moon, Sun, Terminal, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/skills", label: "skills" },
  { to: "/projects", label: "projects" },
  { to: "/certifications", label: "certs" },
  { to: "/contact", label: "contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm font-bold">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="text-foreground">~/devops</span>
          <span className="cursor-blink text-primary">_</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-1.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-1.5 font-mono text-sm bg-secondary text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-md border border-border p-2 transition-colors hover:bg-secondary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-md border border-border p-2 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 font-mono text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "px-2 py-3 font-mono text-sm text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                ./{l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
