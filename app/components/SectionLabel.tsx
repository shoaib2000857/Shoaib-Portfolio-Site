type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Instrument-style section marker: `01 / SELECTED PROOF` with a cold tick.
 * The recurring mono voice that frames every section as a readout.
 */
export function SectionLabel({ index, children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(91,215,200,0.7)]" />
      <span className="label">
        {index ? <span className="text-teal">{index}</span> : null}
        {index ? <span className="mx-2 text-muted-2">/</span> : null}
        {children}
      </span>
    </div>
  );
}
