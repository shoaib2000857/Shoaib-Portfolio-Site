import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../../data/content";
import { EvidenceTag } from "../../components/EvidenceTag";
import { Pipeline } from "../../components/Pipeline";
import { Reveal } from "../../components/Reveal";
import { Declassify } from "../../components/Declassify";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Not found" };
  return {
    title: `${study.title} — ${study.category}`,
    description: study.oneLiner,
  };
}

const Dossier = ({ label, body }: { label: string; body: string }) => (
  <div className="border-t border-hairline py-7 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-8">
    <span className="label">{label}</span>
    <p className="mt-2 text-base leading-relaxed text-fg-dim sm:mt-0">{body}</p>
  </div>
);

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="pb-24">
      <div className="shell pt-28 sm:pt-32">
        <Link
          href="/work"
          className="font-mono text-xs uppercase tracking-[0.12em] text-muted link-underline"
        >
          ← All work
        </Link>

        <Reveal>
          <p className="mt-8 font-mono text-[0.62rem] tracking-[0.2em] text-muted-2">
            ARCHIVE · ENTRY {String(idx + 1).padStart(2, "0")} · CLASS: PUBLIC
          </p>
        </Reveal>
        <Reveal delay={0.04}>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <EvidenceTag tone={study.badgeTone}>{study.badge}</EvidenceTag>
            <span className="label text-muted-2">{study.year}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-5 font-serif text-4xl font-medium tracking-tight text-fg sm:text-6xl">
            {study.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-muted">
            {study.category}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl font-display text-xl leading-snug text-fg-dim">
            {study.oneLiner}
          </p>
        </Reveal>
      </div>

      {/* pipeline — the signature trace, given room */}
      <Reveal delay={0.2}>
        <div className="shell mt-12">
          <div className="rounded-lg border border-hairline bg-panel p-6 sm:p-8">
            <span className="label">how it resolves</span>
            <Pipeline className="mt-5" nodes={study.pipeline} />
          </div>
        </div>
      </Reveal>

      {/* dossier body */}
      <div className="shell mt-6">
        <Dossier label="Problem" body={study.problem} />
        <Dossier label="Built" body={study.built} />
        <Dossier label="Role" body={study.role} />

        {/* outcomes / proof */}
        <div className="border-t border-hairline py-7 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-8">
          <span className="label">Proof</span>
          <ul className="mt-2 space-y-3 sm:mt-0">
            {study.outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-base leading-relaxed text-fg-dim">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber shadow-[0_0_7px_rgba(245,165,36,0.7)]" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* stack */}
        <div className="border-t border-hairline py-7 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-8">
          <span className="label">Stack</span>
          <div className="mt-2 flex flex-wrap gap-2 sm:mt-0">
            {study.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-hairline px-2.5 py-1 font-mono text-xs text-fg-dim"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* links */}
        {study.links.length > 0 && (
          <div className="border-t border-hairline py-7">
            <div className="flex flex-wrap gap-3">
              {study.links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${i === 0 ? "btn--primary" : "btn--ghost"}`}
                >
                  {l.label} ↗
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* field note — classified until you ask for it */}
      {study.fieldNote && (
        <Reveal>
          <div className="shell mt-10">
            <Declassify note={study.fieldNote} />
          </div>
        </Reveal>
      )}

      {/* next */}
      <div className="shell mt-12">
        <Link
          href={`/work/${next.slug}`}
          className="panel panel--hover group flex items-center justify-between p-6"
        >
          <span>
            <span className="label">Next</span>
            <span className="mt-1.5 block font-serif text-xl text-fg">{next.title}</span>
          </span>
          <span className="font-mono text-teal transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
