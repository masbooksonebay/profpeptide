import type { Metadata } from "next";
import PpMark from "@/components/PpMark";

// Noindexed dev comparison page for the header logo lockup — current centered
// version vs. two baseline-alignment variants, using the traced SVG tile (not
// CSS text), shown on light and dark swatches. Not linked; excluded from sitemap.
export const metadata: Metadata = {
  title: "Logo lockup comparison (dev)",
  robots: { index: false, follow: false },
};

type Align = "center" | "baseline" | "lowink";

function Lockup({
  tile, word, align, dark,
}: {
  tile: number; word: number; align: Align; dark: boolean;
}) {
  const itemsClass = align === "center" ? "items-center" : "items-end";
  // items-end leaves Inter's descender ~3px below the tile edge. Nudge:
  // - lowink (B): up ~3px so descender ink is flush with the tile bottom.
  // - baseline (A): down ~3px so the baseline sits on the tile bottom (descenders below).
  const nudge = Math.round(word * 0.13);
  const wordShift =
    align === "baseline" ? `translateY(${nudge}px)` :
    align === "lowink" ? `translateY(${-nudge}px)` : undefined;
  return (
    <div className={`flex gap-2.5 ${itemsClass}`}>
      <PpMark className="flex-shrink-0" style={{ width: tile, height: tile }} interior={dark ? "#16181B" : "#0f172a"} />
      <span
        className="font-extrabold tracking-tight leading-none"
        style={{ fontSize: word, color: dark ? "#f1f5f9" : "#16181B", transform: wordShift }}
      >
        Prof. Peptide
      </span>
    </div>
  );
}

function Row({ label, tile, word, align }: { label: string; tile: number; word: number; align: Align }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-white ring-1 ring-gray-200 p-6 flex items-end min-h-[120px]">
          <Lockup tile={tile} word={word} align={align} dark={false} />
        </div>
        <div className="rounded-lg bg-[#0f172a] ring-1 ring-slate-700 p-6 flex items-end min-h-[120px]">
          <Lockup tile={tile} word={word} align={align} dark={true} />
        </div>
      </div>
    </div>
  );
}

export default function LogoComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-[#16181B] dark:text-slate-100 mb-1">Logo lockup — comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Dev preview — traced SVG tile (paths, not CSS text). Left = light surface, right = dark surface.
      </p>
      {/* Current: 36px tile, centered */}
      <Row label="Current — centered (36px tile / 20px word)" tile={36} word={20} align="center" />
      {/* Variant A: baseline flush with tile bottom (descenders drop below) */}
      <Row label="A — baseline flush w/ tile bottom (56px tile / 24px word)" tile={56} word={24} align="baseline" />
      {/* Variant B (shipped): lowest-ink flush (descender bottom on tile edge) */}
      <Row label="B — lowest-ink flush, SHIPPED (56px tile / 24px word)" tile={56} word={24} align="lowink" />
    </div>
  );
}
