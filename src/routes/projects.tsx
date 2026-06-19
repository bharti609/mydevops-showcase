import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — DevOps Engineer" },
      { name: "description", content: "Featured DevOps projects: CI/CD pipelines, Terraform IaC, and Kubernetes observability." },
      { property: "og:title", content: "Projects — DevOps Engineer" },
      { property: "og:description", content: "Featured DevOps projects: CI/CD pipelines, Terraform IaC, and Kubernetes observability." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  {
    title: "End-to-end CI/CD Pipeline",
    summary:
      "Production-grade pipeline using Jenkins to build Docker images, push to ECR, and deploy to EKS — with automated rollback and Slack notifications.",
    tags: ["Jenkins", "Docker", "Kubernetes", "AWS"],
  },
  {
    title: "Multi-Region Infrastructure as Code",
    summary:
      "Reusable Terraform modules provisioning VPC, EKS, RDS, and observability stack across three AWS regions with remote state in S3 + DynamoDB locking.",
    tags: ["Terraform", "AWS", "IaC"],
  },
  {
    title: "Kubernetes Monitoring Dashboard",
    summary:
      "Prometheus + Grafana + Loki stack on EKS with custom alerts, SLO dashboards, and PagerDuty integration covering 50+ microservices.",
    tags: ["Kubernetes", "Prometheus", "Grafana"],
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader
        command="git log --oneline"
        title="Selected work"
        subtitle="A few production systems I've designed, built, and operated."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h2 className="text-lg font-semibold text-foreground">{p.title}</h2>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 border-t border-border pt-4">
              <a href="#" className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline">
                <Github className="h-3.5 w-3.5" /> repo
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline">
                <ExternalLink className="h-3.5 w-3.5" /> demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
