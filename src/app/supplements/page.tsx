import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CategoryIcon } from "@/components/CategoryIcon";

export const metadata = {
  alternates: { canonical: "/supplements" },
  title: "Supplement Library — 48 Natural Supplement Profiles | Prof. Peptide",
  description:
    "Browse 48 natural supplement profiles covering metabolic health, recovery, cognition, longevity, and more. Evidence-based and independently researched.",
};

const categories = [
  {
    name: "Metabolic & Weight Loss",
    slug: "metabolic",
    supplements: [
      { name: "Berberine", slug: "berberine" },
      { name: "Green Tea Extract", slug: "green-tea-extract" },
      { name: "Alpha Lipoic Acid", slug: "alpha-lipoic-acid" },
      { name: "Caffeine", slug: "caffeine" },
      { name: "Chromium", slug: "chromium" },
      { name: "Garcinia Cambogia", slug: "garcinia-cambogia" },
      { name: "Glucomannan", slug: "glucomannan" },
    ],
  },
  {
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
    name: "Performance & Energy",
    slug: "performance",
    supplements: [
      { name: "Creatine", slug: "creatine" },
      { name: "Protein Powder", slug: "protein-powder" },
      { name: "Caffeine + L-Theanine", slug: "caffeine-l-theanine" },
      { name: "BCAAs", slug: "bcaas" },
      { name: "Beta-Alanine", slug: "beta-alanine" },
      { name: "Electrolyte Powders", slug: "electrolyte-powders" },
      { name: "L-Citrulline Malate", slug: "l-citrulline-malate" },
    ],
  },
  {
    name: "Cognitive & Nootropic",
    slug: "cognitive",
    supplements: [
      { name: "Lion\u2019s Mane", slug: "lions-mane" },
      { name: "L-Theanine", slug: "l-theanine" },
      { name: "Alpha GPC", slug: "alpha-gpc" },
      { name: "Rhodiola Rosea", slug: "rhodiola-rosea" },
      { name: "Bacopa Monnieri", slug: "bacopa-monnieri" },
      { name: "Phosphatidylserine", slug: "phosphatidylserine" },
    ],
  },
  {
    name: "Growth Hormone Support",
    slug: "growth-hormone",
    supplements: [
      { name: "Ashwagandha", slug: "ashwagandha" },
      { name: "ZMA", slug: "zma" },
      { name: "GABA", slug: "gaba" },
      { name: "L-Arginine", slug: "l-arginine" },
    ],
  },
  {
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
    name: "Gut Health & Immunity",
    slug: "gut-health",
    supplements: [
      { name: "Probiotics", slug: "probiotics" },
      { name: "Vitamin D3", slug: "vitamin-d3" },
      { name: "Fish Oil", slug: "fish-oil" },
      { name: "Magnesium", slug: "magnesium" },
      { name: "Zinc", slug: "zinc" },
      { name: "Prebiotics", slug: "prebiotics" },
    ],
  },
  {
    name: "Longevity",
    slug: "longevity",
    supplements: [
      { name: "NAD+", slug: "nad-plus" },
      { name: "NMN", slug: "nmn" },
      { name: "CoQ10", slug: "coq10" },
      { name: "Resveratrol", slug: "resveratrol" },
      { name: "Quercetin", slug: "quercetin" },
      { name: "Spermidine", slug: "spermidine" },
    ],
  },
  {
    name: "Sexual Health",
    slug: "sexual-health",
    supplements: [
      { name: "Tongkat Ali", slug: "tongkat-ali" },
      { name: "Maca Root", slug: "maca-root" },
      { name: "L-Citrulline", slug: "l-citrulline" },
      { name: "Fenugreek", slug: "fenugreek" },
    ],
  },
];

export default function SupplementsPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const filtered = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements"}]}} />
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Supplement Library</h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-xl text-sm leading-relaxed">
          Evidence-based supplement profiles organized by category. Click any supplement to read the
          full profile including uses, benefits, and research.
        </p>
        {filter && (
          <Link href="/supplements" className="text-xs text-[#0891b2] hover:underline mt-2 inline-block">
            &larr; Show all categories
          </Link>
        )}
      </div>
      <div className="space-y-10">
        {filtered.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
              <CategoryIcon name={cat.name} /> {cat.name}
            </h2>
            <ul className="space-y-2">
              {cat.supplements.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/supplements/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] dark:text-slate-200 hover:text-[#0891b2] transition-all duration-150 hover:scale-105 origin-left group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-600 group-hover:bg-[#0891b2] transition-colors flex-shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
