import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import React, { ReactNode } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { Footer } from "./sections/Footer";
import { CosmicBackground } from "./components/CosmicBackground";

// cinematic, high-contrast serif — hero & chapter titles
const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_TITLE = "Shoaib Sadiq Salehmohamed — AI systems & research";
const SITE_DESC =
  "I build AI systems that turn uncertainty into usable signal. Research intern on LLM reliability, Smart India Hackathon 2025 winner, patent-published roboticist, and full-stack builder.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    type: "website",
    url: "https://shoaibssm.me",
    siteName: "Shoaib Sadiq Salehmohamed",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  metadataBase: new URL("https://shoaibssm.me"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <CosmicBackground />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-teal focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
