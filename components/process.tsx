import { Section } from "@/components/container";
import { SectionLabel } from "@/components/section-label";

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We map the product, the constraints, and the technical risk before any build begins.",
  },
  {
    number: "02",
    title: "Clear Proposal",
    description:
      "You receive a written scope, architecture, timeline, and price. The work is explicit.",
  },
  {
    number: "03",
    title: "Iterative Development",
    description:
      "We ship in short cycles. You see working software and can correct course early.",
  },
  {
    number: "04",
    title: "Handover & Support",
    description:
      "Repository, documentation, and access move to you. We remain available once it is live.",
  },
];

export function Process() {
  return (
    <Section id="approach" label="approach-heading">
      <SectionLabel index="03">Approach</SectionLabel>
      <h2
        id="approach-heading"
        className="mt-6 max-w-2xl text-4xl tracking-[-0.04em] text-balance md:text-5xl"
      >
        How we work
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
        A short path from the first conversation to a system your team can run.
      </p>
      <ol className="mt-14 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.number} className="border-r border-b border-border p-7">
            <span className="font-mono text-xs text-accent">{step.number}</span>
            <h3 className="mt-10 text-xl tracking-tight text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
