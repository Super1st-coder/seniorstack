import { Section } from "@/components/container";
import { SectionLabel } from "@/components/section-label";

function serviceSpan(index: number) {
  if (index === 4) return "md:col-span-2 xl:col-span-3";
  if (index === 3) return "xl:col-span-3";
  return "xl:col-span-2";
}

const services = [
  {
    number: "01",
    title: "Custom Web Application Development",
    description:
      "Next.js, React, and TypeScript on the interface. Python and Node.js behind it. Clear models, and code your team can extend.",
  },
  {
    number: "02",
    title: "Technical Leadership & Architecture",
    description:
      "Senior judgment on structure, risk, and tradeoffs. System design and technical architecture that stay coherent as the product grows.",
  },
  {
    number: "03",
    title: "MVP to Scale",
    description:
      "A precise first release, followed by the hardening required for real users, real data, and demanding workloads.",
  },
  {
    number: "04",
    title: "Team Augmentation",
    description:
      "Senior engineers embedded in your team. They ship production code and raise the standard of the work around them.",
  },
  {
    number: "05",
    title: "Legacy Modernization",
    description:
      "Aging systems replaced in careful steps, including complex integrations. The business stays up while the foundation becomes something you can own.",
  },
];

export function Services() {
  return (
    <Section id="services" label="services-heading">
      <SectionLabel index="01">Services</SectionLabel>
      <h2
        id="services-heading"
        className="mt-6 max-w-2xl text-4xl tracking-[-0.04em] text-balance md:text-5xl"
      >
        Services
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
        Web applications, AI applications, cloud systems, and algorithm
        development. Architecture and senior capacity, scoped to the work in
        front of you.
      </p>
      <ul className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {services.map((service, index) => (
          <li
            key={service.title}
            className={`group relative overflow-hidden border border-border bg-surface p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-border-strong ${serviceSpan(index)}`}
          >
            <span
              className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                {service.number}
              </span>
              <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
            </div>
            <h3 className="mt-10 text-xl tracking-tight text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
