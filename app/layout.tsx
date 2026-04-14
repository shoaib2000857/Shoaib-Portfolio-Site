import "./globals.css";
import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shoaib Sadiq Salehmohamed | Sci-Fi Portfolio",
  description:
    "Immersive portfolio for Shoaib Sadiq Salehmohamed, featuring projects, credentials, and a cinematic sci-fi interface.",
  openGraph: {
    title: "Shoaib Sadiq Salehmohamed | Sci-Fi Portfolio",
    description:
      "Immersive portfolio for Shoaib Sadiq Salehmohamed, featuring projects, credentials, and a cinematic sci-fi interface.",
    type: "website",
  },
  metadataBase: new URL("https://shoaibssm.me"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
