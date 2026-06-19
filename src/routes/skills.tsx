import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — DevOps Engineer" },
      { name: "description", content: "Tooling and technologies: AWS, Docker, Kubernetes, Jenkins, Terraform, Linux, Git, CI/CD." },
      { property: "og:title", content: "Skills — DevOps Engineer" },
      { property: "og:description", content: "Tooling and technologies: AWS, Docker, Kubernetes, Jenkins, Terraform, Linux, Git, CI/CD." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const skills = [
  { name: "AWS", level: 95, desc: "EC2, EKS, S3, IAM, Lambda, VPC, RDS, CloudFront" },
  { name: "Kubernetes", level: 92, desc: "EKS, Helm, ArgoCD, operators, custom controllers" },
  { name: "Docker", level: 95, desc: "Multi-stage builds, Compose, image hardening" },
  { name: "Terraform", level: 90, desc: "Multi-region modules, state mgmt, policy as code" },
  { name: "Jenkins", level: 85, desc: "Declarative pipelines, shared libraries, agents" },
  { name: "CI/CD", level: 93, desc: "GitHub Actions, GitLab CI, ArgoCD, Flux" },
  { name: "Linux", level: 90, desc: "Ubuntu, RHEL, systemd, networking, performance tuning" },
  { name: "Git", level: 95, desc: "Trunk-based, GitFlow, GitOps workflows" },
];

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader
        command="ls ./skills"
        title="Tools of the trade"
        subtitle="A focused stack honed over years of shipping production workloads."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:-translate-y-0.5"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-mono text-base font-semibold text-foreground">{s.name}</h3>
              <span className="font-mono text-xs text-primary">{s.level}%</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
