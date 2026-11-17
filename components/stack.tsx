import { Section } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { TechLogo } from "@/components/tech-logo";

const practices: { name: string; description: string; logos: string[] }[] = [
  {
    name: "Web applications",
    description:
      "Next.js, React, TypeScript, Python, and Node.js. Interfaces and APIs a team can extend.",
    logos: ["nextdotjs", "react", "typescript", "python"],
  },
  {
    name: "AI applications",
    description:
      "Generative AI in the product: large language models, retrieval, agents, and the OpenAI API.",
    logos: ["openai", "langchain"],
  },
  {
    name: "Cloud systems",
    description:
      "AWS, Google Cloud, and Azure. Containers, Kubernetes, and infrastructure as code.",
    logos: ["amazonaws", "googlecloud", "microsoftazure", "kubernetes"],
  },
  {
    name: "Algorithms",
    description:
      "Algorithm development and analysis, including algorithmic trading systems.",
    logos: [],
  },
];

const domains = [
  {
    name: "Healthcare",
    detail: "Hands-on work on healthcare products.",
  },
  {
    name: "Financial services",
    detail: "Hands-on work on financial products, including algorithmic trading.",
  },
  {
    name: "Industrial IoT",
    detail: "Hands-on work on industrial IoT systems.",
  },
];

const groups: { label: string; items: { name: string; slug: string }[] }[] = [
  {
    label: "Full-stack",
    items: [
      { name: "Python", slug: "python" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "React", slug: "react" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind", slug: "tailwindcss" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Django", slug: "django" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Spring Boot", slug: "springboot" },
      { name: "GraphQL", slug: "graphql" },
      { name: "Express.js", slug: "express" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
      { name: "Prisma", slug: "prisma" },
    ],
  },
  {
    label: "AI",
    items: [
      { name: "OpenAI", slug: "openai" },
      { name: "LangChain", slug: "langchain" },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Google Cloud", slug: "googlecloud" },
      { name: "Azure", slug: "microsoftazure" },
    ],
  },
  {
    label: "Delivery",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Terraform", slug: "terraform" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Argo CD", slug: "argocd" },
      { name: "Prometheus", slug: "prometheus" },
      { name: "Grafana", slug: "grafana" },
      { name: "ELK", slug: "elastic" },
    ],
  },
];

export function Stack() {
  return (
    <Section id="stack" label="stack-heading">
      <SectionLabel index="04">Practice</SectionLabel>
      <h2
        id="stack-heading"
        className="mt-6 max-w-3xl text-4xl tracking-[-0.04em] text-balance md:text-5xl"
      >
        What we build
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
        AI applications and cloud systems that people can depend on. Complex
        integrations, demanding workloads, and technical decisions that change
        the product.
      </p>
      <ul className="mt-14 grid border-t border-l border-border sm:grid-cols-2 xl:grid-cols-4">
        {practices.map((item) => (
          <li key={item.name} className="flex flex-col border-r border-b border-border p-6">
            <p className="text-lg tracking-tight text-foreground">{item.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            {item.logos.length > 0 ? (
              <div className="mt-8 flex items-center gap-3">
                {item.logos.map((slug) => (
                  <TechLogo key={slug} slug={slug} className="h-6 w-6" />
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <p className="mt-16 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
        Domains
      </p>
      <ul className="mt-6 grid border-t border-l border-border md:grid-cols-3">
        {domains.map((item) => (
          <li key={item.name} className="border-r border-b border-border p-6">
            <p className="text-lg tracking-tight text-foreground">{item.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
          </li>
        ))}
      </ul>

      <p className="mt-16 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
        Tools
      </p>
      <div className="mt-6 space-y-10">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {group.label}
            </p>
            <ul className="mt-4 grid grid-cols-2 border-t border-l border-border sm:grid-cols-3 lg:grid-cols-6">
              {group.items.map((item) => (
                <li
                  key={item.slug}
                  className="group border-r border-b border-border p-5 transition-colors duration-300 hover:bg-surface"
                >
                  <TechLogo
                    slug={item.slug}
                    className="h-8 w-8 transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                  <p className="mt-4 text-sm tracking-tight text-foreground">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
