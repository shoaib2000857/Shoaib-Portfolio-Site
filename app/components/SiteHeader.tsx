"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Work", href: "/work" },
  { label: "Research", href: "/research" },
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_8px_rgba(91,215,200,0.8)] transition-transform group-hover:scale-125" />
          <span className="font-mono text-sm font-semibold tracking-[0.18em] text-fg">SSM</span>
          <span className="hidden font-mono text-[0.62rem] tracking-[0.2em] text-muted-2 sm:inline">
            /SIGNAL
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                isActive(item.href) ? "text-teal" : "text-muted hover:text-fg"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume/Shoaib_Sadiq_Salehmohamed_Resume.pdf"
            className="btn btn--ghost"
            target="_blank"
          >
            Résumé
          </Link>
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-fg md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-ink/95 backdrop-blur-md md:hidden">
          <nav className="shell flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-3 font-mono text-sm uppercase tracking-[0.12em] ${
                  isActive(item.href) ? "bg-panel text-teal" : "text-fg-dim hover:bg-panel"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/resume/Shoaib_Sadiq_Salehmohamed_Resume.pdf"
              target="_blank"
              className="mt-2 rounded-md border border-hairline px-3 py-3 font-mono text-sm uppercase tracking-[0.12em] text-teal"
            >
              Résumé ↗
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
