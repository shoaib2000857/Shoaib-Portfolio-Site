import Link from "next/link";
import { SectionLabel } from "../components/SectionLabel";
import { Reveal } from "../components/Reveal";
import { CaseCard } from "../components/CaseCard";
import { featuredCaseStudies } from "../data/content";

export function FeaturedWork() {
  return (
    <section className="border-t border-hairline bg-ink-2">
      <div className="shell section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <SectionLabel index="03">Featured work</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 max-w-2xl font-display text-2xl leading-snug text-fg sm:text-3xl">
                Five things that matter — each one a problem turned into a working system.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link
              href="/work"
              className="font-mono text-xs uppercase tracking-[0.12em] text-muted link-underline"
            >
              All work →
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredCaseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 0.08}>
              <CaseCard study={study} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
