import Link from "next/link";

export const metadata = {
  title: "Supplement Library — 48 Natural Supplement Profiles | Prof. Peptide",
  description:
    "Browse 48 natural supplement profiles covering metabolic health, recovery, cognition, longevity, and more. Evidence-based and independently researched.",
};

const categories = [
  {
    emoji: "\uD83D\uDD25",
    name: "Metabolic & Weight Loss",
    slug: "metabolic",
    supplements: [
      { name: "Berberine", slug: "berberine" },
      { name: "Glucomannan", slug: "glucomannan" },
      { name: "Green Tea Extract", slug: "green-tea-extract" },
      { name: "Garcinia Cambogia", slug: "garcinia-cambogia" },
      { name: "Alpha Lipoic Acid", slug: "alpha-lipoic-acid" },
      { name: "Caffeine", slug: "caffeine" },
      { name: "Chromium", slug: "chromium" },
    ],
  },
  {
    emoji: "\u26A1",
    name: "Recovery & Tissue Repair",
    slug: "recovery",
    supplements: [
      { name: "Collagen Peptides", slug: "collagen-peptides" },
      { name: "Glutamine", slug: "glutamine" },
      { name: "Curcumin", slug: "curcumin" },
      { name: "Vitamin C", slug: "vitamin-c" },
      { name: "Zinc Carnosine", slug: "zinc-carnosine" },
    ],
  },
  {
    emoji: "\uD83C\uDFC3",
    name: "Performance & Energy",
    slug: "performance",
    supplements: [
      { name: "Creatine", slug: "creatine" },
      { name: "Protein Powder", slug: "protein-powder" },
      { name: "Electrolyte Powders", slug: "electrolyte-powders" },
      { name: "BCAAs", slug: "bcaas" },
      { name: "Beta-Alanine", slug: "beta-alanine" },
      { name: "Caffeine + L-Theanine", slug: "caffeine-l-theanine" },
      { name: "L-Citrulline Malate", slug: "l-citrulline-malate" },
    ],
  },
  {
    emoji: "\uD83E\uDDE0",
    name: "Cognitive & Nootropic",
    slug: "cognitive",
    supplements: [
      { name: "Lion\u2019s Mane", slug: "lions-mane" },
      { name: "L-Theanine", slug: "l-theanine" },
      { name: "Alpha GPC", slug: "alpha-gpc" },
      { name: "Bacopa Monnieri", slug: "bacopa-monnieri" },
      { name: "Phosphatidylserine", slug: "phosphatidylserine" },
      { name: "Rhodiola Rosea", slug: "rhodiola-rosea" },
    ],
  },
  {
    emoji: "\uD83E\uDDEC",
    name: "Growth Hormone Support",
    slug: "growth-hormone",
    supplements: [
      { name: "Ashwagandha", slug: "ashwagandha" },
      { name: "L-Arginine", slug: "l-arginine" },
      { name: "GABA", slug: "gaba" },
      { name: "ZMA", slug: "zma" },
    ],
  },
  {
    emoji: "\u2728",
    name: "Skin Health & Anti-Aging",
    slug: "skin-health",
    supplements: [
      { name: "Collagen Peptides", slug: "collagen-peptides-skin" },
      { name: "Hyaluronic Acid", slug: "hyaluronic-acid" },
      { name: "Vitamin C", slug: "vitamin-c-skin" },
      { name: "Biotin", slug: "biotin" },
    ],
  },
  {
    emoji: "\uD83D\uDEE1\uFE0F",
    name: "Gut Health & Immunity",
    slug: "gut-health",
    supplements: [
      { name: "Probiotics", slug: "probiotics" },
      { name: "Prebiotics", slug: "prebiotics" },
      { name: "Vitamin D3", slug: "vitamin-d3" },
      { name: "Fish Oil", slug: "fish-oil" },
      { name: "Magnesium", slug: "magnesium" },
      { name: "Zinc", slug: "zinc" },
    ],
  },
  {
    emoji: "\uD83C\uDF3F",
    name: "Longevity",
    slug: "longevity",
    supplements: [
      { name: "NAD+", slug: "nad-plus" },
      { name: "NMN", slug: "nmn" },
      { name: "Resveratrol", slug: "resveratrol" },
      { name: "Quercetin", slug: "quercetin" },
      { name: "Spermidine", slug: "spermidine" },
      { name: "CoQ10", slug: "coq10" },
    ],
  },
  {
    emoji: "\u2764\uFE0F",
    name: "Sexual Health",
    slug: "sexual-health",
    supplements: [
      { name: "Maca Root", slug: "maca-root" },
      { name: "L-Citrulline", slug: "l-citrulline" },
      { name: "Tongkat Ali", slug: "tongkat-ali" },
      { name: "Fenugreek", slug: "fenugreek" },
    ],
  },
];

export default function SupplementsPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const filtered = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Supplement Library</h1>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
          Evidence-based supplement profiles organized by category. Click any supplement to read the
          full profile including uses, benefits, and research.
        </p>
        {filter && (
          <Link href="/supplements" className="text-xs text-[#0D7377] hover:underline mt-2 inline-block">
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
              {cat.supplements.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/supplements/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] hover:text-[#0D7377] transition-all duration-150 hover:scale-105 origin-left group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#0D7377] transition-colors flex-shrink-0" />
                    {s.name}
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
