import "./globals.css";
import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shoaib Sadiq Salehmohamed — AI Researcher & Systems Engineer",
  description:
    "AI researcher and systems engineer working across reliable language models, cyber threat intelligence, autonomous robotics, and full-stack products.",
  openGraph: {
    title: "Shoaib Sadiq Salehmohamed — AI Researcher & Systems Engineer",
    description:
      "Researching how intelligent systems fail—and engineering products that can respond.",
    type: "website",
    url: "https://shoaibssm.me",
    siteName: "Shoaib SSM",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Sadiq Salehmohamed — AI Researcher & Systems Engineer",
    description:
      "Reliable language models, cyber threat intelligence, autonomous robotics, and full-stack systems.",
  },
  alternates: {
    canonical: "https://shoaibssm.me",
  },
  metadataBase: new URL("https://shoaibssm.me"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
