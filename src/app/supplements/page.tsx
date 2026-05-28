import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CategoryIcon } from "@/components/CategoryIcon";

export const metadata = {
  alternates: { canonical: "/supplements" },
  title: "Supplement Library — 51 Natural Supplement Profiles | Prof. Peptide",
  description:
    "Browse 51 natural supplement profiles covering metabolic health, recovery, cognition, longevity, sleep, and more. Evidence-based and independently researched.",
};

type SupplementCategory =
  | "metabolic"
  | "recovery"
  | "performance"
  | "cognitive"
  | "growth-hormone"
  | "skin-health"
  | "gut-health"
  | "sleep-recovery"
  | "longevity"
  | "sexual-health";

interface Supplement {
  slug: string;
  name: string;
  categories: SupplementCategory[];
}

interface CategoryMeta {
  slug: SupplementCategory;
  name: string;
}

const categories: CategoryMeta[] = [
  { slug: "metabolic", name: "Metabolic & Weight Loss" },
  { slug: "recovery", name: "Recovery & Tissue Repair" },
  { slug: "performance", name: "Performance & Energy" },
  { slug: "cognitive", name: "Cognitive & Nootropic" },
  { slug: "growth-hormone", name: "Growth Hormone Support" },
  { slug: "skin-health", name: "Skin Health & Anti-Aging" },
  { slug: "gut-health", name: "Gut Health & Immunity" },
  { slug: "sleep-recovery", name: "Sleep & Recovery" },
  { slug: "longevity", name: "Longevity" },
  { slug: "sexual-health", name: "Sexual Health" },
];

const supplements: Supplement[] = [
  { slug: "alpha-gpc",              name: "Alpha GPC",               categories: ["cognitive"] },
  { slug: "alpha-lipoic-acid",      name: "Alpha Lipoic Acid",       categories: ["metabolic", "longevity"] },
  { slug: "apigenin",               name: "Apigenin",                categories: ["sleep-recovery", "longevity"] },
  { slug: "ashwagandha",            name: "Ashwagandha",             categories: ["growth-hormone", "sleep-recovery"] },
  { slug: "bacopa-monnieri",        name: "Bacopa Monnieri",         categories: ["cognitive"] },
  { slug: "bcaas",                  name: "BCAAs",                   categories: ["performance", "recovery"] },
  { slug: "berberine",              name: "Berberine",               categories: ["metabolic", "gut-health"] },
  { slug: "beta-alanine",           name: "Beta-Alanine",            categories: ["performance"] },
  { slug: "biotin",                 name: "Biotin",                  categories: ["skin-health"] },
  { slug: "caffeine",               name: "Caffeine",                categories: ["metabolic", "performance", "cognitive"] },
  { slug: "caffeine-l-theanine",    name: "Caffeine + L-Theanine",   categories: ["performance", "cognitive"] },
  { slug: "chromium",               name: "Chromium",                categories: ["metabolic"] },
  { slug: "collagen-peptides",      name: "Collagen Peptides",       categories: ["recovery"] },
  { slug: "collagen-peptides-skin", name: "Collagen Peptides",       categories: ["skin-health"] },
  { slug: "coq10",                  name: "CoQ10",                   categories: ["longevity", "performance"] },
  { slug: "creatine",               name: "Creatine",                categories: ["performance", "cognitive"] },
  { slug: "curcumin",               name: "Curcumin",                categories: ["recovery", "longevity"] },
  { slug: "electrolyte-powders",    name: "Electrolyte Powders",     categories: ["performance"] },
  { slug: "fenugreek",              name: "Fenugreek",               categories: ["sexual-health", "growth-hormone"] },
  { slug: "fish-oil",               name: "Fish Oil",                categories: ["gut-health", "cognitive", "longevity"] },
  { slug: "gaba",                   name: "GABA",                    categories: ["growth-hormone", "sleep-recovery"] },
  { slug: "garcinia-cambogia",      name: "Garcinia Cambogia",       categories: ["metabolic"] },
  { slug: "glucomannan",            name: "Glucomannan",             categories: ["metabolic", "gut-health"] },
  { slug: "glutamine",              name: "Glutamine",               categories: ["recovery", "gut-health"] },
  { slug: "glycine",                name: "Glycine",                 categories: ["sleep-recovery", "longevity"] },
  { slug: "green-tea-extract",      name: "Green Tea Extract",       categories: ["metabolic", "longevity"] },
  { slug: "hyaluronic-acid",        name: "Hyaluronic Acid",         categories: ["skin-health", "recovery"] },
  { slug: "l-arginine",             name: "L-Arginine",              categories: ["growth-hormone", "performance", "sexual-health"] },
  { slug: "l-citrulline",           name: "L-Citrulline",            categories: ["sexual-health", "performance"] },
  { slug: "l-citrulline-malate",    name: "L-Citrulline Malate",     categories: ["performance"] },
  { slug: "l-theanine",             name: "L-Theanine",              categories: ["cognitive", "sleep-recovery"] },
  { slug: "lions-mane",             name: "Lion’s Mane",        categories: ["cognitive", "longevity"] },
  { slug: "maca-root",              name: "Maca Root",               categories: ["sexual-health", "performance"] },
  { slug: "magnesium",              name: "Magnesium",               categories: ["gut-health", "sleep-recovery", "performance"] },
  { slug: "melatonin",              name: "Melatonin",               categories: ["sleep-recovery", "longevity"] },
  { slug: "nad-plus",               name: "NAD+",                    categories: ["longevity", "performance"] },
  { slug: "nmn",                    name: "NMN",                     categories: ["longevity", "performance"] },
  { slug: "phosphatidylserine",     name: "Phosphatidylserine",      categories: ["cognitive", "sleep-recovery"] },
  { slug: "prebiotics",             name: "Prebiotics",              categories: ["gut-health"] },
  { slug: "probiotics",             name: "Probiotics",              categories: ["gut-health"] },
  { slug: "protein-powder",         name: "Protein Powder",          categories: ["performance", "recovery"] },
  { slug: "quercetin",              name: "Quercetin",               categories: ["longevity", "gut-health"] },
  { slug: "resveratrol",            name: "Resveratrol",             categories: ["longevity"] },
  { slug: "rhodiola-rosea",         name: "Rhodiola Rosea",          categories: ["cognitive", "performance"] },
  { slug: "spermidine",             name: "Spermidine",              categories: ["longevity"] },
  { slug: "tart-cherry",            name: "Tart Cherry",             categories: ["sleep-recovery", "recovery"] },
  { slug: "tongkat-ali",            name: "Tongkat Ali",             categories: ["sexual-health", "growth-hormone"] },
  { slug: "vitamin-c",              name: "Vitamin C",               categories: ["recovery", "gut-health"] },
  { slug: "vitamin-c-skin",         name: "Vitamin C",               categories: ["skin-health"] },
  { slug: "vitamin-d3",             name: "Vitamin D3",              categories: ["recovery", "gut-health"] },
  { slug: "zinc",                   name: "Zinc",                    categories: ["gut-health", "recovery"] },
  { slug: "zinc-carnosine",         name: "Zinc Carnosine",          categories: ["recovery", "gut-health"] },
  { slug: "zma",                    name: "ZMA",                     categories: ["growth-hormone", "sleep-recovery"] },
];

const supplementsForCategory = (slug: SupplementCategory) =>
  supplements.filter((s) => s.categories.includes(slug));

export default function SupplementsPage({ searchParams }: { searchParams: { category?: string } }) {
  const filter = searchParams.category;
  const visibleCategories = filter ? categories.filter((c) => c.slug === filter) : categories;

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements"}]}} />
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Supplement Library</h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-xl text-lg leading-relaxed">
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
        {visibleCategories.map((cat) => {
          const items = supplementsForCategory(cat.slug);
          return (
            <div key={cat.slug}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
                <CategoryIcon name={cat.name} /> {cat.name}
              </h2>
              <ul className="space-y-2">
                {items.map((s) => (
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
          );
        })}
      </div>
    </div>
    </>
  );
}
