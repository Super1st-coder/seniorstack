import type { ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-accent text-foreground hover:bg-accent-hover",
  ghost:
    "border border-border bg-transparent text-foreground hover:border-border-strong hover:bg-surface",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex cursor-pointer items-center justify-center font-medium tracking-tight transition-[color,background-color,border-color,transform] duration-200 active:translate-y-px ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
