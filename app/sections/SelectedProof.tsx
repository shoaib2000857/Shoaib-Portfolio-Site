import Link from "next/link";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";
import { selectedProof } from "../data/content";

export function SelectedProof() {
  return (
    <section className="border-y border-hairline bg-ink-2">
      <div className="shell section">
        <Reveal>
          <SectionLabel index="01">Selected proof</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-5 max-w-2xl text-lg text-fg-dim">
            Not a list of skills — a short stack of things with proof behind them.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {selectedProof.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <Link
                href={p.href}
                className="group flex h-full flex-col bg-panel p-6 transition-colors hover:bg-panel-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl text-muted-2">{p.n}</span>
                  <span className="tag">{p.label}</span>
                </div>
                <h3 className="mt-6 font-display text-lg leading-snug text-fg">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.detail}</p>
                <span className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-teal opacity-0 transition-opacity group-hover:opacity-100">
                  Open →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
