"use client";

import { useState } from "react";
import { FaqList } from "./FaqList";
import type { Faq } from "@/lib/site-config";

/**
 * FAQ list with working category chips. The chips used to be decorative
 * spans that looked clickable and did nothing — they now filter the list.
 */
export function FaqFilter({ faqs, chips }: { faqs: Faq[]; chips: string[] }) {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? faqs.filter((f) => f.tag === active) : faqs;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={`cursor-pointer rounded-full border-none px-4 py-2 font-sans text-[12.5px] transition-[transform,background,color] duration-[250ms] hover:scale-105 ${
            active === null
              ? "bg-green-tint font-semibold text-navy"
              : "bg-white font-medium text-muted-3"
          }`}
        >
          All
        </button>
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c === active ? null : c)}
            aria-pressed={active === c}
            className={`cursor-pointer rounded-full border-none px-4 py-2 font-sans text-[12.5px] transition-[transform,background,color] duration-[250ms] hover:scale-105 ${
              active === c
                ? "bg-green-tint font-semibold text-navy"
                : "bg-white font-medium text-muted-3"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <FaqList faqs={shown} />
    </div>
  );
}
