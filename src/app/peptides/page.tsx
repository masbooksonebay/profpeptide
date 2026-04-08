import Link from "next/link";

export const metadata = {
  title: "Peptide Library — 23 Research Peptide Profiles | Prof. Peptide",
  description:
    "Browse 23 research peptide profiles organized by category. Mechanisms, research summaries, dosage guidance, and safety information for each compound.",
};

const categories = [
  {
    emoji: "\uD83D\uDD25",
    name: "Metabolic & Weight Loss",
    slug: "metabolic",
    peptides: [
      { name: "Semaglutide", slug: "semaglutide" },
      { name: "Tirzepatide", slug: "tirzepatide" },
      { name: "Retatrutide", slug: "retatrutide" },
      { name: "MOTS-c", slug: "mots-c" },
      { name: "AOD-9604", slug: "aod-9604" },
    ],
  },
  {
    emoji: "\u26A1",
    name: "Recovery & Tissue Repair",
    slug: "recovery",
    peptides: [
      { name: "BPC-157", slug: "bpc-157" },
      { name: "TB-500", slug: "tb-500" },
      { name: "Wolverine Stack", slug: "wolverine-stack" },
    ],
  },
  {
    emoji: "\uD83C\uDFC3",
    name: "Performance & Energy",
    slug: "performance",
    peptides: [
      { name: "IGF-1 LR3", slug: "igf-1-lr3" },
      { name: "Follistatin", slug: "follistatin" },
    ],
  },
  {
    emoji: "\uD83E\uDDEC",
    name: "Growth Hormone",
    slug: "growth-hormone",
    peptides: [
      { name: "CJC-1295", slug: "cjc-1295" },
      { name: "Ipamorelin", slug: "ipamorelin" },
      { name: "Sermorelin", slug: "sermorelin" },
      { name: "Tesamorelin", slug: "tesamorelin" },
    ],
  },
  {
    emoji: "\uD83E\uDDE0",
    name: "Cognitive & Nootropic",
    slug: "cognitive",
    peptides: [
      { name: "Selank", slug: "selank" },
      { name: "Semax", slug: "semax" },
    ],
  },
  {
    emoji: "\u2728",
    name: "Skin Health & Anti-Aging",
    slug: "skin-health",
    peptides: [
      { name: "GHK-Cu", slug: "ghk-cu" },
      { name: "Melanotan II", slug: "melanotan-ii" },
    ],
  },
  {
    emoji: "\uD83D\uDEE1\uFE0F",
    name: "Gut Health & Immunity",
    slug: "gut-health",
    peptides: [
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1" },
    ],
  },
  {
    emoji: "\uD83C\uDF3F",
    name: "Longevity",
    slug: "longevity",
    peptides: [
      { name: "Epitalon", slug: "epitalon" },
      { name: "NAD+", slug: "nad-plus" },
    ],
  },
  {
    emoji: "\u2764\uFE0F",
    name: "Sexual Health",
    slug: "sexual-health",
    peptides: [
      { name: "PT-141", slug: "pt-141" },
    ],
  },
];

export default function PeptidesPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const filtered = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Peptide Library</h1>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
          Research profiles organized by category. Click any peptide to read the full profile including mechanism of action, key research findings, and references.
        </p>
        {filter && (
          <Link href="/peptides" className="text-xs text-[#0D7377] hover:underline mt-2 inline-block">
            &larr; Show all categories
          </Link>
        )}
      </div>

      <div className="space-y-10">
        {filtered.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
              {cat.emoji} {cat.name}
            </h2>
            <ul className="space-y-2">
              {cat.peptides.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/peptides/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] hover:text-[#0D7377] transition-all duration-150 hover:scale-105 origin-left group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#0D7377] transition-colors flex-shrink-0" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
