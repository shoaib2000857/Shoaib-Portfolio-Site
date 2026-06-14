import Link from "next/link";
import { CaseStudy } from "../data/content";
import { EvidenceTag } from "./EvidenceTag";
import { Pipeline } from "./Pipeline";

/** A case study rendered as a declassified archive entry. */
export function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const entry = String(index + 1).padStart(2, "0");
  return (
    <Link
      href={`/work/${study.slug}`}
      className="panel panel--hover panel--archive group flex flex-col p-7 sm:p-8"
    >
      {/* nebula bloom on hover (atmosphere, not blue) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: "radial-gradient(circle, #6E4FB0, transparent 70%)" }}
      />
      {/* a micro-constellation forms on hover — signals connecting */}
      <svg
        aria-hidden
        viewBox="0 0 112 80"
        className="pointer-events-none absolute right-5 top-5 h-16 w-24 opacity-0 transition-opacity duration-700 group-hover:opacity-70"
      >
        <g stroke="#3A8F86" strokeWidth="0.6">
          <line x1="12" y1="58" x2="42" y2="30" />
          <line x1="42" y1="30" x2="72" y2="50" />
          <line x1="72" y1="50" x2="98" y2="20" />
          <line x1="42" y1="30" x2="58" y2="72" />
        </g>
        <circle cx="12" cy="58" r="1.3" fill="#8A86A0" />
        <circle cx="42" cy="30" r="1.6" fill="#A589D8" />
        <circle cx="72" cy="50" r="1.3" fill="#8A86A0" />
        <circle cx="58" cy="72" r="1.2" fill="#8A86A0" />
        <circle cx="98" cy="20" r="2" fill="#F5A524" />
      </svg>

      {/* archive header strip */}
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-2">
          Entry {entry}
        </span>
        <EvidenceTag tone={study.badgeTone}>{study.badge}</EvidenceTag>
      </div>

      <h3 className="mt-5 font-serif text-2xl font-medium text-fg">{study.title}</h3>
      <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
        {study.category}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-fg-dim">{study.oneLiner}</p>

      <div className="mt-6 border-t border-hairline pt-5">
        <Pipeline nodes={study.pipeline} />
      </div>

      {/* cockpit readout */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-2">
        <span>
          <span className="text-muted">yr</span> {study.year}
        </span>
        <span className="hidden h-3 w-px bg-hairline sm:block" />
        {study.stack.slice(0, 3).map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-teal">
        Open dossier
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
