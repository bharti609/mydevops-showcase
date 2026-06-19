import { createFileRoute } from "@tanstack/react-router";
import { Award, BadgeCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — DevOps Engineer" },
      { name: "description", content: "AWS and DevOps certifications validating cloud and platform expertise." },
      { property: "og:title", content: "Certifications — DevOps Engineer" },
      { property: "og:description", content: "AWS and DevOps certifications validating cloud and platform expertise." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certifications,
});

const groups = [
  {
    label: "AWS",
    items: [
      { name: "AWS Certified Solutions Architect — Associate", year: "2024" },
      { name: "AWS Certified DevOps Engineer — Professional", year: "2024" },
      { name: "AWS Certified SysOps Administrator", year: "2023" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Certified Kubernetes Administrator (CKA)", year: "2024" },
      { name: "HashiCorp Certified: Terraform Associate", year: "2023" },
      { name: "Docker Certified Associate", year: "2022" },
    ],
  },
];

function Certifications() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader
        command="kubectl get certifications"
        title="Certifications"
        subtitle="Verified credentials across cloud and platform engineering."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider">{g.label}</span>
            </div>
            <ul className="mt-4 space-y-3">
              {g.items.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">issued {c.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
