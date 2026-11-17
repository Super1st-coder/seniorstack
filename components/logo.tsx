export function LogoLink({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label="SeniorStack, home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="h-3 w-3 shrink-0 bg-accent" aria-hidden="true" />
      <span className="text-[15px] font-medium tracking-[-0.04em] whitespace-nowrap text-foreground">
        SeniorStack
      </span>
    </a>
  );
}
