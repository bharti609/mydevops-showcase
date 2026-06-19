import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DevOps Engineer" },
      { name: "description", content: "Get in touch about DevOps, platform engineering, or cloud architecture work." },
      { property: "og:title", content: "Contact — DevOps Engineer" },
      { property: "og:description", content: "Get in touch about DevOps, platform engineering, or cloud architecture work." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader
        command="ssh hello@devops.dev"
        title="Let's build something"
        subtitle="Open to roles, consulting, and interesting platform problems."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {[
            { Icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
            { Icon: Linkedin, label: "LinkedIn", value: "/in/devops-engineer", href: "https://linkedin.com" },
            { Icon: Github, label: "GitHub", value: "@devops-engineer", href: "https://github.com" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:-translate-y-0.5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <c.Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="truncate text-sm text-foreground">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={submit}
          className="rounded-xl border border-border bg-card p-6"
        >
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> compose message --to=devops
          </p>
          <div className="mt-5 space-y-4">
            <Field label="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Ada Lovelace" />
            <Field label="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@company.com" />
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                placeholder="Tell me about your stack, team, or the problem you're solving..."
                className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {sent ? "message sent ✓" : "send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", placeholder,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={255}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
