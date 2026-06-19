import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Target, User } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DevOps Engineer" },
      { name: "description", content: "Background, objectives, and career timeline of a cloud-native DevOps engineer." },
      { property: "og:title", content: "About — DevOps Engineer" },
      { property: "og:description", content: "Background, objectives, and career timeline of a cloud-native DevOps engineer." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  {
    when: "2023 — Present",
    role: "Senior DevOps Engineer",
    org: "CloudScale Inc.",
    detail: "Leading platform engineering on EKS. Built multi-region IaC with Terraform, cut deploy times 70%.",
  },
  {
    when: "2021 — 2023",
    role: "DevOps Engineer",
    org: "FinStack",
    detail: "Designed GitOps workflows with ArgoCD. Migrated legacy Jenkins to GitHub Actions across 40+ repos.",
  },
  {
    when: "2019 — 2021",
    role: "Cloud Engineer",
    org: "DataWorks",
    detail: "Provisioned AWS landing zones, automated backups, and introduced Prometheus + Grafana observability.",
  },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader command="cat about.md" title="About me" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 text-primary">
            <User className="h-4 w-4" />
            <span className="font-mono text-xs uppercase tracking-wider">profile</span>
          </div>
          <p className="mt-4 text-muted-foreground">
            DevOps Engineer with a strong background in cloud-native architecture, automation, and
            observability. I treat infrastructure as a product — versioned, tested, and shipped with
            the same discipline as application code.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 text-primary">
            <Target className="h-4 w-4" />
            <span className="font-mono text-xs uppercase tracking-wider">objective</span>
          </div>
          <p className="mt-4 text-muted-foreground">
            Build resilient platforms that empower engineers to deploy fearlessly. Focused on
            scalable Kubernetes, zero-downtime releases, and reducing mean time to recovery.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-2 text-primary">
          <Briefcase className="h-4 w-4" />
          <span className="font-mono text-xs uppercase tracking-wider">experience</span>
        </div>
        <ol className="mt-6 space-y-6 border-l border-border pl-6">
          {timeline.map((t) => (
            <li key={t.when} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary glow-shadow" />
              <p className="font-mono text-xs text-muted-foreground">{t.when}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {t.role} <span className="text-muted-foreground">· {t.org}</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
