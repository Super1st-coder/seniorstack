import type { ReactNode } from "react";

function Icon({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

function MarkText({ children }: { children: string }) {
  return (
    <text
      x="16"
      y="21"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontSize="9"
      fontFamily="var(--font-geist-mono), ui-monospace, monospace"
    >
      {children}
    </text>
  );
}

const glyphs: Record<string, ReactNode> = {
  web: (
    <>
      <rect x="5" y="7" width="22" height="18" rx="2" />
      <path d="M5 12h22M9 21h6" />
    </>
  ),
  ai: (
    <>
      <circle cx="8" cy="16" r="2.25" />
      <circle cx="16" cy="8" r="2.25" />
      <circle cx="24" cy="16" r="2.25" />
      <circle cx="16" cy="24" r="2.25" />
      <path d="M10 15.1 14.2 9.6M17.8 9.6 22 15.1M22.2 17.7 17.6 22.3M14.4 22.3 9.8 17.7" />
    </>
  ),
  cloud: <path d="M12 23h10.5a4.5 4.5 0 0 0 .4-9 6 6 0 0 0-11.4-1.6A4 4 0 0 0 12 23Z" />,
  algo: (
    <>
      <circle cx="7" cy="16" r="2" />
      <circle cx="16" cy="9" r="2" />
      <circle cx="16" cy="23" r="2" />
      <circle cx="25" cy="16" r="2" />
      <path d="M9 16h5.2M18 10.2 23.2 14.6M18 21.8 23.2 17.4M16 11v10" />
    </>
  ),
  next: (
    <>
      <circle cx="16" cy="16" r="11" />
      <path d="M11.5 21.5v-11L21 21.5v-11" />
    </>
  ),
  react: (
    <>
      <ellipse cx="16" cy="16" rx="11" ry="4.2" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)" />
      <circle cx="16" cy="16" r="1.7" fill="currentColor" stroke="none" />
    </>
  ),
  typescript: (
    <>
      <rect x="5" y="5" width="22" height="22" rx="3" />
      <MarkText>TS</MarkText>
    </>
  ),
  javascript: (
    <>
      <rect x="5" y="5" width="22" height="22" rx="3" />
      <MarkText>JS</MarkText>
    </>
  ),
  python: (
    <>
      <path d="M13 6.5h6.2A3.3 3.3 0 0 1 22.5 9.8V14H13a3.5 3.5 0 0 1-3.5-3.5v-.5A3.5 3.5 0 0 1 13 6.5Z" />
      <path d="M19 25.5h-6.2A3.3 3.3 0 0 1 9.5 22.2V18H19a3.5 3.5 0 0 1 3.5 3.5v.5a3.5 3.5 0 0 1-3.5 3.5Z" />
      <path d="M19 14h3.2v2.2M13 18H9.8v-2.2" />
      <circle cx="12.2" cy="10" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="19.8" cy="22" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  node: (
    <>
      <path d="M16 4.5 26.5 10.5v11L16 27.5 5.5 21.5v-11L16 4.5Z" />
      <path d="M16 11.5v9M12.5 14.2 16 16.2l3.5-2" />
    </>
  ),
  django: (
    <>
      <circle cx="16" cy="16" r="11" />
      <MarkText>Dj</MarkText>
    </>
  ),
  fastapi: <path d="M18 4.5 9.5 17H16l-2 10.5L23 14h-6.5L18 4.5Z" />,
  spring: (
    <>
      <path d="M8 24c8-1.5 14-9 16-17-8 1.5-14 8-16 17Z" />
      <path d="M11 20c4-2 8-6 10-11" />
    </>
  ),
  graphql: (
    <>
      <circle cx="16" cy="7" r="2" />
      <circle cx="7.5" cy="23" r="2" />
      <circle cx="24.5" cy="23" r="2" />
      <path d="M16 9 9.2 21.2M16 9l6.8 12.2M9.5 23h13" />
    </>
  ),
  express: (
    <>
      <path d="M6 9h20M6 16h14M6 23h20" />
      <path d="M22 13.5 26 16l-4 2.5" />
    </>
  ),
  postgres: (
    <>
      <ellipse cx="16" cy="9" rx="8" ry="3" />
      <path d="M8 9v14c0 1.7 3.6 3 8 3s8-1.3 8-3V9" />
      <path d="M8 14.5c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  mongo: (
    <>
      <path d="M16 5c2.2 5.5 6.5 8 6.5 14.2a6.5 6.5 0 0 1-13 0C9.5 13 13.8 10.5 16 5Z" />
      <path d="M16 26.5v-4" />
    </>
  ),
  mysql: (
    <>
      <path d="M6 19c1.5-6 7-9 13-7 2.5.8 4.2 2.4 5.5 2.6-1.6 1.6-3.4 1.8-5 .8-.6 3.6-4 6.2-8.8 6.2-3.6 0-5.6-1.8-5.7-3.6 1.8.8 3.4.6 5.2-.8" />
      <path d="M24.5 14.5c1.2-1.2 2.4-1.2 3.2-.4" />
    </>
  ),
  redis: (
    <>
      <path d="M16 6 27 11.5 16 17 5 11.5 16 6Z" />
      <path d="M5 11.5V20L16 25.5 27 20v-8.5" />
      <path d="M16 17v8.5" />
    </>
  ),
  prisma: (
    <>
      <path d="M16 5.5 27 25.5H5L16 5.5Z" />
      <path d="M16 5.5v20M16 15.5 5 25.5M16 15.5 27 25.5" />
    </>
  ),
  llm: (
    <>
      <rect x="6" y="7" width="20" height="14" rx="2" />
      <path d="M12 21v4l4-4M10 12h12M10 16h7" />
    </>
  ),
  openai: (
    <>
      <circle cx="16" cy="16" r="2.4" />
      <path d="M16 5.5v6M16 20.5v6M6.2 10.2l5.2 3M20.6 18.8l5.2 3M6.2 21.8l5.2-3M20.6 13.2l5.2-3" />
    </>
  ),
  langchain: (
    <>
      <rect x="4" y="12" width="14" height="8" rx="4" />
      <rect x="14" y="12" width="14" height="8" rx="4" />
    </>
  ),
  rag: (
    <>
      <rect x="6" y="6" width="13" height="17" rx="1.5" />
      <path d="M9 11h7M9 15h7" />
      <circle cx="22" cy="21" r="3.5" />
      <path d="M24.6 23.6 28 27" />
    </>
  ),
  agents: (
    <>
      <circle cx="8" cy="11" r="2.2" />
      <circle cx="24" cy="11" r="2.2" />
      <circle cx="16" cy="22" r="2.2" />
      <path d="M10 12.4 14.2 20.2M22 12.4 17.8 20.2M10.2 11h11.6" />
    </>
  ),
  aws: (
    <>
      <path d="M7 18.5c3 3.4 15 3.4 18 0" />
      <path d="M22 16.2 26 18.6 23.2 21.6" />
    </>
  ),
  gcp: (
    <>
      <path d="M12.5 23h9a4 4 0 0 0 .3-8 5.2 5.2 0 0 0-10-1.4A3.6 3.6 0 0 0 12.5 23Z" />
      <path d="M16 13.5 18.2 17h-4.4L16 13.5Z" />
    </>
  ),
  azure: <path d="M7 24 14.2 6h3.2L26 24h-4.2l-1.5-3.6h-7.2L11.6 24H7Z" />,
  docker: (
    <>
      <path d="M7 17.5h5v-4H7v4Zm6 0h5v-4h-5v4Zm6 0h5v-4h-5v4Zm-6-5h5v-4h-5v4Z" />
      <path d="M6.5 17.5h19V21a4 4 0 0 1-4 4h-11a4 4 0 0 1-4-4v-3.5Z" />
    </>
  ),
  kubernetes: (
    <>
      <circle cx="16" cy="16" r="3" />
      <path d="M16 5v8M16 19v8M6.5 10.5l7 4M18.5 17.5l7 4M6.5 21.5l7-4M18.5 14.5l7-4" />
    </>
  ),
  terraform: (
    <>
      <path d="M6 11h8v6H6zM16 7h8v6h-8zM16 17h8v6h-8z" />
    </>
  ),
  github: (
    <>
      <circle cx="16" cy="16" r="11" />
      <path d="M13 20.5v-2.2a2.4 2.4 0 0 1 .7-1.8c-2.2-.2-4.2-1-4.2-4.2a3.2 3.2 0 0 1 .9-2.2s.8-.2 2.6.9a9 9 0 0 1 4.8 0c1.8-1.1 2.6-.9 2.6-.9a3.2 3.2 0 0 1 .9 2.2c0 3.2-2 4-4.2 4.2.6.4.9 1.2.9 2.2v1.8" />
    </>
  ),
  jenkins: (
    <>
      <circle cx="16" cy="16" r="7" />
      <path d="M16 5v3M16 24v3M5 16h3M24 16h3M8.2 8.2l2.1 2.1M21.7 21.7l2.1 2.1M8.2 23.8l2.1-2.1M21.7 10.3l2.1-2.1" />
    </>
  ),
  argo: (
    <>
      <path d="M16 6c0 7 4 12 10 16" />
      <path d="M16 6C16 13 12 18 6 22" />
      <path d="M6 24h20" />
    </>
  ),
  prometheus: <path d="M16 5c1.2 4.5 6 6.2 6 12.2A6 6 0 0 1 10 23c0-3 2.2-4.6 3.2-7.2.2 2.8 2 3.2 2.8-10.8Z" />,
  grafana: (
    <>
      <circle cx="16" cy="16" r="9" />
      <circle cx="16" cy="16" r="1.7" fill="currentColor" stroke="none" />
      <path d="M16 16V8.5M16 16l6.2-3.6M16 16l5.2 5.2" />
    </>
  ),
  elk: <path d="M7 10h18M7 16h14M7 22h10" />,
  tailwind: (
    <>
      <path d="M5 14c2.2-3.2 4.2-4.8 6.2-4.8 3 0 3.4 2.6 5.8 2.6 2 0 3.2-1.4 5-2.8" />
      <path d="M5 21c2.2-3.2 4.2-4.8 6.2-4.8 3 0 3.4 2.6 5.8 2.6 2 0 3.2-1.4 5-2.8" />
    </>
  ),
};

export type MarkId = keyof typeof glyphs;

export function TechMark({ id, className }: { id: MarkId; className?: string }) {
  return <Icon className={className ?? "h-7 w-7"}>{glyphs[id]}</Icon>;
}
