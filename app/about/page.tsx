import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";
import { experienceHighlights, journey, profile } from "../data/portfolio";

export const metadata: Metadata = {
  title: "About — Shoaib Sadiq Salehmohamed",
  description: profile.intro,
};

const education = journey.filter((j) => j.kind === "Education");

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="About"
        title="I like building things that feel slightly too ambitious for the time available."
        intro="I'm pursuing B.Tech CSE at KMIT alongside the IIT Madras BS in Data Science and Applications. Most of my work sits between research prototypes, hackathon systems, and full-stack products — usually with too many tabs open and an unreasonable deadline nearby."
      />

      {/* the thread */}
      <section className="shell section">
        <SectionLabel>The thread</SectionLabel>
        <Reveal delay={0.06}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-fg-dim">
            My work keeps circling one idea: take uncertain, messy, high-stakes problems — AI
            reliability, misinformation, robotics, product systems — and turn them into working,
            explainable, shipped systems with proof behind them.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">{profile.summary}</p>
        </Reveal>
      </section>

      {/* roles */}
      <section className="border-t border-hairline bg-ink-2">
        <div className="shell section">
          <SectionLabel>Roles & involvement</SectionLabel>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {experienceHighlights.map((exp, i) => (
              <Reveal key={`${exp.org}-${exp.role}`} delay={(i % 2) * 0.06}>
                <div className="panel h-full p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-teal">
                      {exp.timeframe}
                    </span>
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted-2">
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg text-fg">{exp.role}</h3>
                  <p className="mt-0.5 text-sm text-muted">{exp.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-dim">{exp.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* education */}
      <section className="shell section">
        <SectionLabel>Education</SectionLabel>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.title} delay={i * 0.06}>
              <div className="panel h-full p-6">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                  {ed.label}
                </span>
                <h3 className="mt-3 font-display text-lg leading-snug text-fg">{ed.title}</h3>
                <p className="mt-1 text-sm text-muted">{ed.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-fg-dim">{ed.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ed.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-hairline px-2 py-0.5 font-mono text-[0.66rem] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="shell">
        <Reveal>
          <div className="panel flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-xl text-fg">
              Open to research, internships, and ambitious builds.
            </p>
            <div className="flex gap-3">
              <Link href="/#contact" className="btn btn--primary">
                Get in touch
              </Link>
              <Link href="/work" className="btn btn--ghost">
                See the work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
