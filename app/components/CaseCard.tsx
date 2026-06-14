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
