export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: string;
}) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      {children}
    </p>
  );
}
