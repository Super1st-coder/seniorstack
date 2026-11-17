import { Container } from "@/components/container";
import { LogoLink } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <LogoLink />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Senior full-stack engineering for Swiss companies. We design, build,
              and hand over systems you fully own.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted">SITE</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-muted"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted">CONTACT</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.bookingHref}
                  className="text-sm text-foreground transition-colors hover:text-muted"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SeniorStack</p>
          <p>Swiss Company</p>
        </div>
      </Container>
    </footer>
  );
}
