"use client";

import { useState } from "react";

/**
 * A field note that starts CLASSIFIED — text blurred/redacted — and reveals on
 * click, with a brief scan. The thriller/dossier beat, tied to real content.
 */
export function Declassify({ note }: { note: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="panel panel--archive p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="label">
          Field note ·{" "}
          <span className={revealed ? "text-teal" : "text-crimson"}>
            {revealed ? "declassified" : "classified"}
          </span>
        </span>
        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-teal transition-colors hover:text-fg"
          >
            [ declassify ]
          </button>
        )}
      </div>

      <p
        className={`mt-4 font-serif text-lg italic leading-relaxed transition-all duration-500 ${
          revealed ? "text-fg-dim blur-0 select-text" : "select-none text-muted-2 blur-[5px]"
        }`}
        aria-hidden={!revealed}
      >
        {note}
      </p>
    </div>
  );
}
