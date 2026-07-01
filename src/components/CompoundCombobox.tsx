"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { compounds, compoundDisplayLabel } from "@/data/compounds";

interface Props {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  placeholder?: string;
  ariaLabel?: string;
}

// A searchable, keyboard-accessible compound selector shared by /log and
// /calculator. Options are the canonical library (Custom Peptide first, then
// alphabetical); typing filters on the DISPLAY label, so brand front-doors
// ("Ozempic (Semaglutide)") and blend compositions ("GLOW (GHK-Cu + …)") are
// searchable by brand or component. The stored value is always the canonical
// compound string.
export default function CompoundCombobox({ value, onChange, id, placeholder = "Search compounds…", ariaLabel = "Compound" }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const baseId = useId();
  const listboxId = `${baseId}-listbox`;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return compounds;
    return compounds.filter((c) => compoundDisplayLabel(c).toLowerCase().includes(q));
  }, [query]);

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Keep the active option scrolled into view.
  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const openMenu = () => {
    setOpen(true);
    setQuery("");
    const sel = filtered.findIndex((c) => c === value);
    setActive(sel >= 0 ? sel : 0);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const choose = (name: string) => {
    onChange(name);
    setOpen(false);
    setQuery("");
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) return openMenu();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      if (open && filtered[active]) {
        e.preventDefault();
        choose(filtered[active]);
      }
    } else if (e.key === "Escape") {
      if (open) {
        e.preventDefault();
        setOpen(false);
      }
    }
  };

  const triggerCls =
    "w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-md border border-gray-300 dark:border-slate-600 text-sm bg-gray-50 dark:bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0891b2] transition text-left";

  return (
    <div className="relative w-full" ref={rootRef}>
      <button
        type="button"
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
        className={triggerCls}
      >
        <span className={value ? "text-gray-800 dark:text-slate-200" : "text-gray-400 dark:text-slate-500"}>
          {value ? compoundDisplayLabel(value) : placeholder}
        </span>
        <svg className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full min-w-[18rem] rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-[#1e293b] shadow-lg overflow-hidden">
          <div className="p-2 border-b border-gray-100 dark:border-slate-700">
            <input
              ref={inputRef}
              type="text"
              role="searchbox"
              aria-label="Search compounds"
              aria-controls={listboxId}
              aria-activedescendant={filtered[active] ? `${baseId}-opt-${active}` : undefined}
              placeholder={placeholder}
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActive(0); }}
              onKeyDown={onKeyDown}
              autoComplete="off"
              className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-slate-600 text-sm bg-gray-50 dark:bg-[#0f172a] text-gray-800 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
            />
          </div>
          <ul ref={listRef} id={listboxId} role="listbox" aria-label={ariaLabel} className="max-h-72 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm text-gray-400 dark:text-slate-500">No compounds match &ldquo;{query}&rdquo;.</li>
            ) : (
              filtered.map((c, i) => {
                const selected = c === value;
                const isActive = i === active;
                return (
                  <li
                    key={c}
                    id={`${baseId}-opt-${i}`}
                    data-idx={i}
                    role="option"
                    aria-selected={selected}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={(e) => { e.preventDefault(); choose(c); }}
                    className={`px-4 py-2.5 text-sm cursor-pointer leading-snug break-words flex items-center justify-between gap-2 ${
                      isActive ? "bg-[#0891b2] text-white" : "text-gray-700 dark:text-slate-200"
                    }`}
                  >
                    <span>{compoundDisplayLabel(c)}</span>
                    {selected && (
                      <svg className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-[#0891b2]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
