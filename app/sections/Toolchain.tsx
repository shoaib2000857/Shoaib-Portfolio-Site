import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";
import { toolchain } from "../data/content";

export function Toolchain() {
  return (
    <section className="shell section">
      <Reveal>
        <SectionLabel index="06">Toolchain</SectionLabel>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 max-w-2xl font-display text-2xl leading-snug text-fg sm:text-3xl">
          What I reach for.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {toolchain.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05}>
            <div className="h-full bg-panel p-6">
              <span className="label text-teal">{group.group}</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-hairline px-2.5 py-1 font-mono text-xs text-fg-dim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
