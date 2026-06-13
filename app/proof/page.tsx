import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";
import { EvidenceTag } from "../components/EvidenceTag";
import { wins, credentials } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Proof — Shoaib Sadiq Salehmohamed",
  description:
    "The evidence wall: SIH 2025 win, a published patent, an arXiv paper, the OpenAI ChatGPT Lab cohort, and more.",
};

export default function ProofPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Proof"
        title="The evidence wall."
        intro="Claims are cheap. Here's the verifiable record behind the work — wins, publications, and recognition, each linked to its source."
      />

      {/* headline wins */}
      <section className="shell section">
        <SectionLabel>Headlines</SectionLabel>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {wins.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="flex h-full flex-col bg-panel p-6">
                <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_7px_rgba(245,165,36,0.7)]" />
                <h3 className="mt-4 font-display text-lg leading-snug text-fg">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* full credentials */}
      <section className="border-t border-hairline bg-ink-2">
        <div className="shell section">
          <SectionLabel>Record</SectionLabel>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {credentials.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.06}>
                <Link
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel panel--hover group flex h-full flex-col p-6"
                >
                  <div className="flex items-center justify-between">
                    <EvidenceTag tone="cold">{c.issuer}</EvidenceTag>
                    <span className="font-mono text-teal opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-snug text-fg">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.detail}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
