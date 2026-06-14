import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  label: string;
  title: string;
  intro?: string;
  /** cockpit-readout microtext under the label, e.g. "SECTOR: WORK · CLASS: PUBLIC" */
  meta?: string;
};

/** Consistent top-of-page header for sub-routes, clearing the fixed nav. */
export function PageHeader({ label, title, intro, meta }: PageHeaderProps) {
  return (
    <header className="shell pt-32 sm:pt-36">
      <Reveal>
        <SectionLabel meta={meta}>{label}</SectionLabel>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-dim">{intro}</p>
        </Reveal>
      )}
    </header>
  );
}
