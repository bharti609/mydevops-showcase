import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Cloud, Container, GitBranch, Server } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevOps Engineer — Portfolio" },
      { name: "description", content: "DevOps Engineer building reliable cloud infrastructure with AWS, Kubernetes, and Terraform." },
      { property: "og:title", content: "DevOps Engineer — Portfolio" },
      { property: "og:description", content: "DevOps Engineer building reliable cloud infrastructure with AWS, Kubernetes, and Terraform." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stack = [
  { icon: Cloud, label: "AWS" },
  { icon: Container, label: "Kubernetes" },
  { icon: GitBranch, label: "CI/CD" },
  { icon: Server, label: "Terraform" },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="absolute inset-0 hero-glow" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="animate-float-up">
            <p className="font-mono text-sm text-primary">
              <span className="text-muted-foreground">$</span> whoami
              <span className="cursor-blink ml-1">_</span>
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Shipping reliable <br className="hidden sm:block" />
              <span className="text-gradient">infrastructure</span> at scale.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              I'm a DevOps Engineer automating cloud platforms, containerizing workloads, and
              building CI/CD pipelines that let teams ship faster — without breaking things.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow"
              >
                view projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                get in touch
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stack.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3 backdrop-blur transition-colors hover:border-primary/50"
                >
                  <s.icon className="h-5 w-5 text-primary" />
                  <span className="font-mono text-sm font-medium text-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3">
          {[
            { k: "5+", v: "Years of experience" },
            { k: "200+", v: "Pipelines deployed" },
            { k: "99.9%", v: "Uptime delivered" },
          ].map((s) => (
            <div key={s.v} className="text-center sm:text-left">
              <div className="font-mono text-4xl font-bold text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
