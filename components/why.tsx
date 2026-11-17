import { Section } from "@/components/container";
import { SectionLabel } from "@/components/section-label";

const points = [
  {
    number: "01",
    title: "Only senior engineers",
    description:
      "Every engineer on your project has owned production systems. The people who scope the work are the people who build it.",
  },
  {
    number: "02",
    title: "Swiss company (reliability & data protection)",
    description:
      "A Swiss company, with the reliability and data-protection expectations that come with working here.",
  },
  {
    number: "03",
    title: "Direct communication",
    description:
      "You speak with the engineers doing the work. Decisions stay short, and context stays intact.",
  },
  {
    number: "04",
    title: "Full code & IP ownership",
    description:
      "The repository, the infrastructure, and the intellectual property are yours from the start.",
  },
  {
    number: "05",
    title: "Focus on long-term maintainability",
    description:
      "We write systems the next team can understand, change, and run without us in the room.",
  },
];

export function Why() {
  return (
    <Section id="why" label="why-heading">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel index="02">Why SeniorStack</SectionLabel>
          <h2
            id="why-heading"
            className="mt-6 text-4xl tracking-[-0.04em] text-balance md:text-5xl"
          >
            Why companies choose SeniorStack
          </h2>
        </div>
        <ol className="lg:col-span-7">
          {points.map((point) => (
            <li
              key={point.number}
              className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-border py-7 last:border-b"
            >
              <span className="pt-1 font-mono text-xs text-accent">{point.number}</span>
              <div>
                <h3 className="text-lg tracking-tight text-foreground">{point.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
