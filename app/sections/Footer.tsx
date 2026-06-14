import Link from "next/link";
import { contactLinks, profile } from "../data/portfolio";
import { FooterConstellation } from "../components/FooterConstellation";

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-ink-2">
      <div className="shell grid gap-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_8px_rgba(91,215,200,0.8)]" />
            <span className="font-mono text-sm font-semibold tracking-[0.18em] text-fg">
              SSM /SIGNAL
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Signal from noise — AI systems, research prototypes, and full-stack products, with proof
            attached. A celestial archive, built with Next.js, Tailwind, and Framer Motion.
          </p>

          <nav className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
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

        {/* hidden constellation — the bright star opens the afterword */}
        <div className="md:justify-self-end">
          <FooterConstellation />
          <p className="mt-1 text-right font-mono text-[0.58rem] tracking-[0.2em] text-muted-2">
            13.0827°N 80.2707°E · CHENNAI
          </p>
        </div>
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
