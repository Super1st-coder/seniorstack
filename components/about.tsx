import { Section } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

const facts = [
  { label: "Base", value: "Geneva area" },
  { label: "Practice", value: "Senior engineers only" },
  { label: "Ownership", value: "Full code and IP" },
  { label: "Contact", value: site.email, href: `mailto:${site.email}` },
];

export function About() {
  return (
    <Section id="about" label="about-heading">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionLabel index="05">About</SectionLabel>
          <h2
            id="about-heading"
            className="mt-6 text-4xl tracking-[-0.04em] text-balance md:text-5xl"
          >
            A senior practice, based in Switzerland.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-muted lg:col-span-6 lg:pt-12">
          SeniorStack is a Swiss company in the Geneva area. We build AI
          applications and cloud systems that people can depend on, from complex
          integrations to the technical decisions that change a product. The
          work spans healthcare, financial services, and industrial IoT. The
          engineers you meet are the engineers who design the system and write
          the code.
        </p>
      </div>
      <dl className="mt-14 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="border-r border-b border-border p-6">
            <dt className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {fact.label}
            </dt>
            <dd className="mt-4 text-lg tracking-tight text-foreground">
              {fact.href ? (
                <a
                  href={fact.href}
                  className="underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {fact.value}
                </a>
              ) : (
                fact.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
