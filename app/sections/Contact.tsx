import Link from "next/link";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";
import { contactLinks } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="border-t border-hairline bg-ink-2">
      <div className="shell section">
        <Reveal>
          <SectionLabel index="07" meta="SECTOR: COMMS · CHANNEL: OPEN">
            Contact
          </SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-fg sm:text-5xl">
            Want to build, research, or collaborate?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-dim">
            I’m open to research collaborations, AI / product internships, hackathon teams, and
            ambitious full-stack builds.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between bg-panel p-5 transition-colors hover:bg-panel-2"
              >
                <span>
                  <span className="label">{link.label}</span>
                  <span className="mt-1.5 block text-sm text-fg-dim">{link.value}</span>
                </span>
                <span className="font-mono text-teal opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
