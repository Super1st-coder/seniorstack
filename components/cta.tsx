import { Button } from "@/components/button";
import { Section } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <Section id="contact" label="contact-heading" className="bg-surface">
      <SectionLabel index="06">Contact</SectionLabel>
      <h2
        id="contact-heading"
        className="mt-6 max-w-3xl text-4xl tracking-[-0.045em] text-balance md:text-6xl"
      >
        Ready to build something solid?
      </h2>
      <p className="mt-6 text-lg text-muted">Let&apos;s discuss your project.</p>
      <div className="mt-10">
        <Button href={site.bookingHref} size="lg">
          Book a Call
        </Button>
      </div>
    </Section>
  );
}
