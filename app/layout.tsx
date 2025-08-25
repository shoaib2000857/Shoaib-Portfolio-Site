import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shoaib's Portfolio",
  description: "Portfolio of Shoaib Sadiq Salehmohamed - Data Science and Programming Student",
  openGraph: {
    title: "Shoaib's Portfolio",
    description: "Portfolio of Shoaib Sadiq Salehmohamed - Data Science and Programming Student",
    type: "website",
  },
  metadataBase: new URL("https://shoaibssm.me"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
