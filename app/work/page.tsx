import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { CaseCard } from "../components/CaseCard";
import { Reveal } from "../components/Reveal";
import { caseStudies } from "../data/content";
import { projectArchiveSummary } from "../data/projectArchive";

export const metadata: Metadata = {
  title: "Work — Shoaib Sadiq Salehmohamed",
  description:
    "Selected case studies: TattvaDrishti, LLM reliability research, Rakshak, LingualLink, and AstraOS.",
};

export default function WorkPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Work"
        title="Selected systems, each with proof attached."
        intro="Fewer projects, told properly. Every one started as a messy, high-stakes problem and ended as something that ships and holds up."
      />

      <div className="shell mt-14 grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={(i % 2) * 0.06}>
            <CaseCard study={study} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="shell mt-12">
          <Link
            href="https://github.com/Shoaib2000857"
            target="_blank"
            className="panel flex items-center justify-between p-6 transition-colors hover:bg-panel-2"
          >
            <span>
              <span className="label">Archive</span>
              <span className="mt-1.5 block text-sm text-fg-dim">
                {projectArchiveSummary.totalRepositories}+ more repositories — hackathons,
                experiments, and open-source work.
              </span>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-teal">
              GitHub ↗
            </span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
