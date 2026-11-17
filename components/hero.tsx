import { Button } from "@/components/button";
import { site } from "@/lib/site";

const layers = [
  { number: "01", name: "Interface", detail: "Next.js · React · TypeScript" },
  { number: "02", name: "Application", detail: "Python · Node.js · APIs" },
  { number: "03", name: "AI", detail: "LLMs · RAG · Agents" },
  { number: "04", name: "Data", detail: "PostgreSQL · Redis · MongoDB" },
  { number: "05", name: "Delivery", detail: "Docker · Kubernetes · AWS" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-dvh">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="hero-rise mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-muted">
              <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              SWITZERLAND
            </p>
            <h1 className="hero-rise hero-rise-2 max-w-3xl text-[2.65rem] leading-[0.98] font-medium tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4.5rem]">
              Senior Full-Stack Engineers for Swiss Companies
            </h1>
            <p className="hero-rise hero-rise-3 mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              We design, build and scale reliable web applications with senior-level
              expertise and Swiss precision.
            </p>
            <div className="hero-rise hero-rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={site.bookingHref} className="w-full sm:w-auto">
                Book a free strategy call
              </Button>
              <Button href="#approach" variant="ghost" className="w-full sm:w-auto">
                View our approach
              </Button>
            </div>
            <p className="hero-rise hero-rise-5 mt-8 text-sm text-muted">
              Switzerland-based • Senior Engineers only • Full IP Ownership
            </p>
          </div>

          <aside
            className="hero-rise hero-rise-6 border border-border bg-background/70 lg:col-span-5"
            aria-label="Reference architecture"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
                REFERENCE STACK
              </span>
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-muted">
                <span className="signal-dot h-1.5 w-1.5 bg-signal" aria-hidden="true" />
                PRODUCTION
              </span>
            </div>
            <ol className="stack-live">
              {layers.map((layer) => (
                <li
                  key={layer.number}
                  className="flex items-baseline justify-between gap-6 border-b border-border px-5 py-4 last:border-b-0"
                >
                  <div>
                    <p className="text-sm tracking-tight text-foreground">{layer.name}</p>
                    <p className="mt-1 font-mono text-[11px] text-muted">{layer.detail}</p>
                  </div>
                  <span className="font-mono text-[11px] text-muted">{layer.number}</span>
                </li>
              ))}
            </ol>
            <p className="border-t border-border px-5 py-3 font-mono text-[11px] tracking-[0.04em] text-muted">
              Handed over with full IP ownership
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
