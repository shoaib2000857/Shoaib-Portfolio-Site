import Link from "next/link";
import { contactLinks, profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink-2">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_8px_rgba(91,215,200,0.8)]" />
            <span className="font-mono text-sm font-semibold tracking-[0.18em] text-fg">
              SSM /SIGNAL
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Signal from noise — AI systems, research prototypes, and full-stack products, with proof
            attached. Built with Next.js, Tailwind, and Framer Motion.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {contactLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-teal"
            >
              {link.label} ↗
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell flex flex-col gap-1 border-t border-hairline py-5 text-[0.7rem] text-muted-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono tracking-[0.12em]">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono tracking-[0.12em]">{profile.location}</span>
      </div>
    </footer>
  );
}
