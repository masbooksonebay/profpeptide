import type { Metadata } from "next";

// Noindexed dev comparison page for the header logo lockup — current centered
// version vs. two baseline-alignment variants, at the new larger size, shown on
// light and dark swatches. Not linked anywhere; excluded from the sitemap.
export const metadata: Metadata = {
  title: "Logo lockup comparison (dev)",
  robots: { index: false, follow: false },
};

type Align = "center" | "baseline" | "lowink";

function Lockup({
  tile, pp, word, border, align, dark,
}: {
  tile: number; pp: number; word: number; border: number; align: Align; dark: boolean;
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
      <span
        className="flex items-center justify-center rounded-md border-brand bg-[#1e2d3d] text-white font-bold leading-none select-none flex-shrink-0"
        style={{ width: tile, height: tile, borderWidth: border, fontSize: pp }}
      >
        Pp
      </span>
      <span
        className="font-extrabold tracking-tight leading-none"
        style={{ fontSize: word, color: dark ? "#f1f5f9" : "#1e2d3d", transform: wordShift }}
      >
        Prof. Peptide
      </span>
    </div>
  );
}

function Row({ label, tile, pp, word, border, align }: { label: string; tile: number; pp: number; word: number; border: number; align: Align }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-white ring-1 ring-gray-200 p-6 flex items-end min-h-[120px]">
          <Lockup tile={tile} pp={pp} word={word} border={border} align={align} dark={false} />
        </div>
        <div className="rounded-lg bg-[#0f172a] ring-1 ring-slate-700 p-6 flex items-end min-h-[120px]">
          <Lockup tile={tile} pp={pp} word={word} border={border} align={align} dark={true} />
        </div>
      </div>
    </div>
  );
}

export default function LogoComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-1">Logo lockup — comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Dev preview. Left = light surface, right = dark surface. Guide: each lockup sits on the box baseline.
      </p>
      {/* Current: 36px tile, 16px Pp, 20px wordmark, 1.5px border, centered */}
      <Row label="Current — centered (36px tile / 16px Pp / 20px word / 1.5px)" tile={36} pp={16} word={20} border={1.5} align="center" />
      {/* Variant A: baseline flush with tile bottom (descenders drop below) */}
      <Row label="A — baseline flush w/ tile bottom (56px / 48px Pp / 24px word / 3px)" tile={56} pp={48} word={24} border={3} align="baseline" />
      {/* Variant B: lowest-ink flush (descender bottom on tile edge, baseline above) */}
      <Row label="B — lowest-ink flush (56px / 48px Pp / 24px word / 3px)" tile={56} pp={48} word={24} border={3} align="lowink" />
    </div>
  );
}
