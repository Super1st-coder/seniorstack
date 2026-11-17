import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "SeniorStack — Senior Full-Stack Engineers for Swiss Companies",
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "senior full-stack",
    "Switzerland",
    "web application development",
    "Next.js",
    "software architecture",
    "team augmentation",
    "AI applications",
    "cloud systems",
    "Python",
    "AWS",
    "Kubernetes",
    "Geneva",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_CH",
    url: site.url,
    siteName: site.name,
    title: "SeniorStack — Senior Full-Stack Engineers for Swiss Companies",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SeniorStack — Senior Full-Stack Engineers for Swiss Companies",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: "Switzerland",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CH",
  },
  knowsAbout: ["Web applications", "AI applications", "Cloud systems"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
