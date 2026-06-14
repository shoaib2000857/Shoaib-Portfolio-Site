import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";
import { buildLog } from "../data/content";

export function BuildLog() {
  return (
    <section className="border-t border-hairline bg-ink-2">
      <div className="shell section">
        <Reveal>
          <SectionLabel index="05" meta="SECTOR: LOG · CHRONOLOGICAL">
            Build log
          </SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-2xl font-serif text-2xl leading-snug text-fg sm:text-4xl">
            A running record of what got built, won, and shipped.
          </h2>
        </Reveal>

        <ol className="mt-12 border-l border-hairline">
          {buildLog.map((entry, i) => (
            <Reveal as="li" key={`${entry.year}-${entry.title}`} delay={i * 0.05}>
              <div className="relative grid gap-1 py-5 pl-8 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <span
                  className={`absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full border-2 border-ink-2 ${
                    entry.tone === "warm" ? "bg-amber" : "bg-teal"
                  }`}
                />
                <span className="font-mono text-sm text-muted">{entry.year}</span>
                <div>
                  <h3 className="font-display text-lg text-fg">{entry.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{entry.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
