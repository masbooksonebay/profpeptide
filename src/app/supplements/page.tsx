import Link from "next/link";

export const metadata = {
  title: "Supplement Library | Prof. Peptide",
  description: "Evidence-based supplement profiles organized by category.",
};

const categories = [
  {
    name: "🔥 Metabolic & Weight Loss",
    supplements: [
      { name: "Berberine", slug: "berberine" },
      { name: "Glucomannan", slug: "glucomannan" },
      { name: "Green Tea Extract", slug: "green-tea-extract" },
      { name: "Garcinia Cambogia", slug: "garcinia-cambogia" },
      { name: "Alpha Lipoic Acid", slug: "alpha-lipoic-acid" },
      { name: "Caffeine", slug: "caffeine" },
    ],
  },
  {
    name: "⚡ Recovery & Tissue Repair",
    supplements: [
      { name: "Collagen Peptides", slug: "collagen-peptides" },
      { name: "Glutamine", slug: "glutamine" },
      { name: "Curcumin", slug: "curcumin" },
      { name: "Vitamin C", slug: "vitamin-c" },
      { name: "Zinc Carnosine", slug: "zinc-carnosine" },
    ],
  },
  {
    name: "🏃 Performance & Energy",
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
    name: "🧠 Cognitive & Nootropic",
    supplements: [
      { name: "Lion's Mane", slug: "lions-mane" },
      { name: "L-Theanine", slug: "l-theanine" },
      { name: "Alpha GPC", slug: "alpha-gpc" },
      { name: "Bacopa Monnieri", slug: "bacopa-monnieri" },
      { name: "Phosphatidylserine", slug: "phosphatidylserine" },
      { name: "Rhodiola Rosea", slug: "rhodiola-rosea" },
    ],
  },
  {
    name: "🧬 Growth Hormone Support",
    supplements: [
      { name: "Ashwagandha", slug: "ashwagandha" },
      { name: "L-Arginine", slug: "l-arginine" },
      { name: "GABA", slug: "gaba" },
      { name: "ZMA", slug: "zma" },
    ],
  },
  {
    name: "✨ Skin Health & Anti-Aging",
    supplements: [
      { name: "Collagen Peptides", slug: "collagen-peptides" },
      { name: "Hyaluronic Acid", slug: "hyaluronic-acid" },
      { name: "Vitamin C", slug: "vitamin-c" },
      { name: "Biotin", slug: "biotin" },
    ],
  },
  {
    name: "🛡️ Gut Health & Immunity",
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
    name: "🌿 Longevity",
    supplements: [
      { name: "NMN", slug: "nmn" },
      { name: "Resveratrol", slug: "resveratrol" },
      { name: "Quercetin", slug: "quercetin" },
      { name: "Spermidine", slug: "spermidine" },
      { name: "CoQ10", slug: "coq10" },
    ],
  },
  {
    name: "❤️ Sexual Health",
    supplements: [
      { name: "Maca Root", slug: "maca-root" },
      { name: "L-Citrulline", slug: "l-citrulline" },
      { name: "Tongkat Ali", slug: "tongkat-ali" },
      { name: "Fenugreek", slug: "fenugreek" },
    ],
  },
];

export default function SupplementsPage() {
  return (
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Supplement Library</h1>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
          Evidence-based supplement profiles organized by category. Click any supplement to read the
          full profile including uses, benefits, and research.
        </p>
      </div>
      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
              {cat.name}
            </h2>
            <ul className="space-y-2">
              {cat.supplements.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/supplements/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] hover:text-[#0D7377] transition-colors group"
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
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-10 text-xs text-amber-800">
        <strong>Disclaimer:</strong> All information is for educational and research purposes only. Not medical advice. Not for human use.
      </div>
    </div>
  );
}