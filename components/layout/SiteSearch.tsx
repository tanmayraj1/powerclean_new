"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchSite, type SearchEntry } from "@/lib/search-index";

/**
 * Site-wide instant search.
 *
 * The index is built from the same data the pages render and ships with the
 * bundle, so results appear as you type with no request per keystroke. It
 * searches products by name and SKU code, families, solutions, methods,
 * industries, cities, glossary terms, articles, guides and videos — typing
 * "845" finds LF-45, "tce" finds the replacement guide, "sample" finds the
 * cleanup trial.
 */
export function SiteSearch({ solid }: { solid: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const results = useMemo(() => searchSite(query, 8), [query]);

  useEffect(() => setActive(0), [query]);

  // close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const go = (entry?: SearchEntry) => {
    const target = entry ?? results[active];
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
    router.push(target ? target.href : `/products?q=${encodeURIComponent(query)}`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const showList = open && query.trim().length >= 2;

  return (
    <div ref={boxRef} className="relative">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          go();
        }}
        className={`flex items-center gap-2 rounded-full py-[7px] pl-[18px] pr-[7px] transition-[background,box-shadow] duration-300 ${
          solid ? "bg-azure" : "bg-white/12 ring-1 ring-inset ring-white/25"
        }`}
      >
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search products, codes, guides"
          aria-label="Search the site"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            showList && results[active] ? `${listId}-${active}` : undefined
          }
          className={`w-[150px] border-none bg-transparent font-sans text-[13px] outline-none [&::-webkit-search-cancel-button]:hidden ${
            solid
              ? "text-navy placeholder:text-muted"
              : "text-white placeholder:text-white/75"
          }`}
        />
        <button
          type="submit"
          aria-label="Search the site"
          className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-none transition-colors ${
            solid ? "bg-navy" : "bg-white"
          }`}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke={solid ? "#ffffff" : "#292F6E"}
            strokeWidth="2.4"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </button>
      </form>

      {showList && (
        <div
          id={listId}
          role="listbox"
          aria-label="Search results"
          className="absolute right-0 top-[calc(100%+10px)] z-[1200] max-h-[68vh] w-[360px] overflow-y-auto rounded-card border border-line-2 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(29,31,35,.4)]"
        >
          {results.length === 0 ? (
            <p className="px-4 py-5 text-[13px] leading-[1.6] text-muted-3">
              Nothing matched &ldquo;{query}&rdquo;. Try a product code such as{" "}
              <span className="font-mono text-navy">XL</span> or{" "}
              <span className="font-mono text-navy">845</span>, a metal, or a
              problem like <span className="text-navy">white rust</span>.
            </p>
          ) : (
            results.map((r, i) => (
              <button
                key={r.href + r.title}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r)}
                className={`flex w-full cursor-pointer items-start gap-3 rounded-xl border-none px-3 py-2.5 text-left transition-colors ${
                  i === active ? "bg-green-tint" : "bg-transparent"
                }`}
              >
                <span className="mt-[3px] shrink-0 rounded-full bg-azure px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-[0.08em] text-muted-3">
                  {r.kind}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13.5px] font-semibold text-navy">
                    {r.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[12px] text-muted">
                    {r.hint}
                  </span>
                </span>
              </button>
            ))
          )}
          <div className="mt-1 border-t border-line-2 px-3 pb-1 pt-2 text-[11px] text-muted">
            <kbd className="font-mono">↑↓</kbd> to move ·{" "}
            <kbd className="font-mono">↵</kbd> to open ·{" "}
            <kbd className="font-mono">esc</kbd> to close
          </div>
        </div>
      )}
    </div>
  );
}
