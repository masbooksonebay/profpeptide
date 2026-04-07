import Link from "next/link";

export const metadata = {
  title: "Research | Prof. Peptide",
  description: "Peer-reviewed research summaries organized by peptide.",
};

const categories = [
  {
    emoji: "\uD83D\uDD25",
    name: "Metabolic & Weight Loss",
    peptides: [
      { name: "Semaglutide", slug: "semaglutide", active: true },
      { name: "Tirzepatide", slug: "tirzepatide", active: true },
      { name: "Retatrutide", slug: "retatrutide", active: true },
      { name: "MOTS-c", slug: "mots-c", active: true },
      { name: "AOD-9604", slug: "aod-9604", active: true },
    ],
  },
  {
    emoji: "\u26A1",
    name: "Recovery & Tissue Repair",
    peptides: [
      { name: "BPC-157", slug: "bpc-157", active: true },
      { name: "TB-500", slug: "tb-500", active: true },
      { name: "Wolverine Stack", slug: "wolverine-stack", active: true },
    ],
  },
  {
    emoji: "\uD83C\uDFC3",
    name: "Performance & Energy",
    peptides: [
      { name: "IGF-1 LR3", slug: "igf-1-lr3" },
      { name: "Follistatin", slug: "follistatin" },
    ],
  },
  {
    emoji: "\uD83E\uDDEC",
    name: "Growth Hormone",
    peptides: [
      { name: "CJC-1295", slug: "cjc-1295" },
      { name: "Ipamorelin", slug: "ipamorelin" },
      { name: "Sermorelin", slug: "sermorelin" },
      { name: "Tesamorelin", slug: "tesamorelin" },
      { name: "GH Stack", slug: "gh-stack" },
    ],
  },
  {
    emoji: "\uD83E\uDDE0",
    name: "Cognitive & Nootropic",
    peptides: [
      { name: "Semax", slug: "semax" },
      { name: "Selank", slug: "selank" },
    ],
  },
  {
    emoji: "\u2728",
    name: "Skin Health & Anti-Aging",
    peptides: [
      { name: "GHK-Cu", slug: "ghk-cu" },
      { name: "Melanotan II", slug: "melanotan-ii" },
    ],
  },
  {
    emoji: "\uD83D\uDEE1\uFE0F",
    name: "Gut Health & Immunity",
    peptides: [
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1" },
    ],
  },
  {
    emoji: "\uD83C\uDF3F",
    name: "Longevity",
    peptides: [
      { name: "Epitalon", slug: "epitalon" },
      { name: "NAD+", slug: "nad-plus" },
    ],
  },
  {
    emoji: "\u2764\uFE0F",
    name: "Sexual Health",
    peptides: [
      { name: "PT-141", slug: "pt-141" },
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Peer-Reviewed Studies</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Research</h1>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
          Peer-reviewed research summaries organized by peptide. Click any peptide to read key studies and plain-English summaries.
        </p>
      </div>

      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
              {cat.emoji} {cat.name}
            </h2>
            <ul className="space-y-2">
              {cat.peptides.map((p) =>
                "active" in p && p.active ? (
                  <li key={p.slug}>
                    <Link
                      href={`/research/${p.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] hover:text-[#0D7377] transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#0D7377] transition-colors flex-shrink-0" />
                      {p.name}
                    </Link>
                  </li>
                ) : (
                  <li key={p.slug} className="inline-flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-gray-200 flex-shrink-0" />
                    {p.name}
                    <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Coming Soon</span>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
