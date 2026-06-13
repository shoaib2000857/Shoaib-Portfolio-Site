import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Pipeline } from "../components/Pipeline";
import { SectionLabel } from "../components/SectionLabel";
import { EvidenceTag } from "../components/EvidenceTag";
import { researchAreas } from "../data/content";
import { experienceHighlights } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Research — LLM reliability & hallucination detection",
  description:
    "How language models fail, and how systems can respond — hidden-state probing, uncertainty signals, and reliability detection at LLM Lens.",
};

const llmLens = experienceHighlights.find((e) => e.org === "LLM Lens");

const evaluation = [
  "ROC-AUC",
  "PR-AUC",
  "F1",
  "Expected Calibration Error",
  "Brier score",
  "Threshold optimization",
];

export default function ResearchPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Research"
        title="How language models fail — and how systems can respond."
        intro="My work focuses on LLM reliability: detecting hallucinations through internal transformer representations. I study whether hidden states, cross-layer behavior, and uncertainty signals can flag unreliable generations before they ever reach a user."
      />

      {/* detection pipeline */}
      <Reveal delay={0.18}>
        <div className="shell mt-12">
          <div className="rounded-lg border border-hairline bg-panel p-6 sm:p-8">
            <span className="label">detection path</span>
            <Pipeline
              className="mt-5"
              nodes={["Prompt", "Model", "Hidden states", "Probe", "Reliability signal"]}
            />
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
              Read reliability from inside the model, not from an external checker after the fact —
              cheap enough to run at inference time.
            </p>
          </div>
        </div>
      </Reveal>

      {/* questions */}
      <section className="shell section">
        <SectionLabel>Open questions</SectionLabel>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-3">
          {researchAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08}>
              <div className="h-full bg-panel p-6">
                <span className="font-mono text-xs text-muted-2">Q{i + 1}</span>
                <h3 className="mt-3 font-display text-lg text-fg">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* the paper */}
      <section className="border-y border-hairline bg-ink-2">
        <div className="shell section">
          <SectionLabel>Output</SectionLabel>
          <Reveal delay={0.06}>
            <div className="mt-8 rounded-lg border border-hairline bg-panel p-7 sm:p-8">
              <EvidenceTag>arXiv · 2026</EvidenceTag>
              <h2 className="mt-5 max-w-3xl font-display text-2xl leading-snug text-fg">
                Weakly Supervised Distillation of Hallucination Signals into Transformer
                Representations
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-dim">
                A weak-supervision framework, a 15k-sample representation-level hallucination
                dataset with full transformer hidden states, and five probing architectures for
                detecting hallucinations from internal activations — without external inference-time
                verification.
              </p>
              <Link
                href="https://arxiv.org/abs/2604.06277"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary mt-7"
              >
                Read arXiv:2604.06277 ↗
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* methods / what the work looks like */}
      {llmLens && (
        <section className="shell section">
          <SectionLabel>In practice — {llmLens.org}</SectionLabel>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-dim">
              {llmLens.summary}
            </p>
          </Reveal>
          <ul className="mt-8 border-l border-hairline">
            {llmLens.bullets.map((b, i) => (
              <Reveal as="li" key={i} delay={i * 0.04}>
                <div className="relative py-4 pl-7 text-sm leading-relaxed text-muted">
                  <span className="absolute left-[-4px] top-[1.45rem] h-2 w-2 rounded-full bg-teal" />
                  {b}
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10">
            <span className="label">Evaluation</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {evaluation.map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-hairline px-2.5 py-1 font-mono text-xs text-fg-dim"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
