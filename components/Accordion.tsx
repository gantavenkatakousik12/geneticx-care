"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

/**
 * Accessible FAQ accordion (doc §7 requirement).
 *
 * - Each question is a real <button> with aria-expanded / aria-controls
 * - Panels are labelled by their trigger
 * - Fully keyboard operable; panels are collapsed via hidden, so collapsed
 *   content is removed from the a11y tree and from find-in-page noise.
 */
export default function Accordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-t-${i}`;
        const panelId = `${baseId}-p-${i}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-forest-50"
              >
                <span className="font-display text-[16.5px] font-semibold text-forest-900">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-forest-700 transition-transform ${
                    isOpen ? "rotate-45 bg-forest-100" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-6 pb-6"
            >
              <p className="max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
