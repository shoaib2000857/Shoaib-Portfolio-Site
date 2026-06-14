type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  /** optional mission-readout microtext, e.g. "SECTOR: PROOF · CLASS: PUBLIC" */
  meta?: string;
  className?: string;
};

/**
 * Instrument-style section marker: `01 / SELECTED PROOF` with a cold tick,
 * and an optional cockpit-readout meta line. The recurring mono voice that
 * frames every section as an archive entry.
 */
export function SectionLabel({ index, children, meta, className = "" }: SectionLabelProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(91,215,200,0.7)]" />
        <span className="label">
          {index ? <span className="text-teal">{index}</span> : null}
          {index ? <span className="mx-2 text-muted-2">/</span> : null}
          {children}
        </span>
      </div>
      {meta ? (
        <span className="mt-2 block pl-[1.125rem] font-mono text-[0.6rem] tracking-[0.2em] text-muted-2">
          {meta}
        </span>
      ) : null}
    </div>
  );
}
