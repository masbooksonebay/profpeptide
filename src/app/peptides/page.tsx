import Link from "next/link";

export const metadata = {
  title: "Peptide Library | Prof. Peptide",
  description: "Research profiles organized by category.",
};

const categories = [
  {
    emoji: "🔥",
    name: "Metabolic & Weight Loss",
    peptides: [
      { name: "Semaglutide", slug: "semaglutide" },
      { name: "Tirzepatide", slug: "tirzepatide" },
      { name: "Retatrutide", slug: "retatrutide" },
      { name: "MOTS-c", slug: "mots-c" },
      { name: "AOD-9604", slug: "aod-9604" },
    ],
  },
  {
    emoji: "⚡",
    name: "Recovery & Tissue Repair",
    peptides: [
      { name: "BPC-157", slug: "bpc-157" },
      { name: "TB-500", slug: "tb-500" },
      { name: "Wolverine Stack", slug: "wolverine-stack" },
    ],
  },
  {
    emoji: "🏃",
    name: "Performance & Energy",
    peptides: [
      { name: "IGF-1 LR3", slug: "igf-1-lr3" },
      { name: "Follistatin", slug: "follistatin" },
    ],
  },
  {
    emoji: "🧬",
    name: "Growth Hormone",
    peptides: [
      { name: "CJC-1295", slug: "cjc-1295" },
      { name: "Ipamorelin", slug: "ipamorelin" },
      { name: "Sermorelin", slug: "sermorelin" },
      { name: "Tesamorelin", slug: "tesamorelin" },
    ],
  },
  {
    emoji: "🧠",
    name: "Cognitive & Nootropic",
    peptides: [
      { name: "Selank", slug: "selank" },
      { name: "Semax", slug: "semax" },
    ],
  },
  {
    emoji: "✨",
    name: "Skin Health & Anti-Aging",
    peptides: [
      { name: "GHK-Cu", slug: "ghk-cu" },
      { name: "Melanotan II", slug: "melanotan-ii" },
    ],
  },
  {
    emoji: "🛡️",
    name: "Gut Health & Immunity",
    peptides: [
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1" },
    ],
  },
  {
    emoji: "🌿",
    name: "Longevity",
    peptides: [
      { name: "Epitalon", slug: "epitalon" },
      { name: "NAD+", slug: "nad-plus" },
    ],
  },
  {
    emoji: "❤️",
    name: "Sexual Health",
    peptides: [
      { name: "PT-141", slug: "pt-141" },
    ],
  },
];

export default function PeptidesPage() {
  return (
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Peptide Library</h1>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
          Research profiles organized by category. Click any peptide to read the full profile including mechanism of action, key research findings, and references.
        </p>
      </div>

      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
              {cat.emoji} {cat.name}
            </h2>
            <ul className="space-y-2">
              {cat.peptides.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/peptides/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] hover:text-[#0D7377] transition-colors group"
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

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-10 text-xs text-amber-800">
        <strong>Disclaimer:</strong> All information is for educational and research purposes only. Not medical advice. Not for human use.
      </div>
    </div>
  );
}
