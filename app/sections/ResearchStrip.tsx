import Link from "next/link";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";
import { Pipeline } from "../components/Pipeline";
import { researchAreas } from "../data/content";

export function ResearchStrip() {
  return (
    <section className="shell section">
      <Reveal>
        <SectionLabel index="04">Research</SectionLabel>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 max-w-3xl font-display text-2xl leading-snug text-fg sm:text-3xl">
          Researching how language models fail — and how systems can respond.
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-dim">
          At LLM Lens I study whether hidden states, cross-layer behavior, and uncertainty signals
          can detect unreliable generations before they reach a user — reading reliability from
          inside the model rather than checking it after the fact.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-8 rounded-lg border border-hairline bg-panel p-6">
          <span className="label">detection path</span>
          <Pipeline
            className="mt-4"
            nodes={["Prompt", "Model", "Hidden states", "Probe", "Reliability signal"]}
          />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-3">
        {researchAreas.map((area, i) => (
          <Reveal key={area.title} delay={i * 0.08}>
            <div className="h-full bg-panel p-6">
              <h3 className="font-display text-lg text-fg">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{area.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <Link
          href="/research"
          className="mt-10 inline-flex font-mono text-xs uppercase tracking-[0.12em] text-teal link-underline"
        >
          Read research notes →
        </Link>
      </Reveal>
    </section>
  );
}
