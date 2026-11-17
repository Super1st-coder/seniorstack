import type { ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
  );
}

export function Section({
  id,
  label,
  children,
  className = "",
}: {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={label}
      className={`reveal border-t border-border py-24 md:py-32 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
