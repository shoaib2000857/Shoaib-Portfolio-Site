import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";
import { coreDirection } from "../data/content";

export function CoreDirection() {
  return (
    <section className="shell section">
      <Reveal>
        <SectionLabel index="02" meta="SECTOR: DIRECTION · 3 CHANNELS">
          Core direction
        </SectionLabel>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 max-w-3xl font-serif text-2xl leading-snug text-fg sm:text-4xl">
          I work where AI research meets shipped product.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-3">
        {coreDirection.map((c, i) => (
          <Reveal key={c.key} delay={i * 0.08}>
            <div className="flex h-full flex-col bg-panel p-7">
              <span className="font-mono text-xs text-muted-2">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl text-fg">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
