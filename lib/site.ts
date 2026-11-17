export const site = {
  name: "SeniorStack",
  domain: "seniorstack.ch",
  url: "https://seniorstack.ch",
  email: "support@seniorstack.ch",
  description:
    "We design, build and scale reliable web applications with senior-level expertise and Swiss precision.",
  bookingHref:
    "mailto:support@seniorstack.ch?subject=Strategy%20call%20with%20SeniorStack",
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
] as const;
