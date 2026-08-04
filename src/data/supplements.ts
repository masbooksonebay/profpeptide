/**
 * Authoritative /supplements library — category taxonomy + per-supplement assignments.
 * SINGLE SOURCE OF TRUTH: the /supplements page renders from this, and supplementCount
 * below is the one derived number every surface (the page meta, the root-layout default
 * description) cites instead of a literal that rots. check-counts.mjs fails the build if a
 * literal appears where supplementCount should; check-surfaces asserts it against the
 * /supplements route count on disk.
 */
export type SupplementCategory =
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

export interface Supplement {
  slug: string;
  name: string;
  categories: SupplementCategory[];
}

export interface SupplementCategoryMeta {
  slug: SupplementCategory;
  name: string;
}

export const supplementCategories: SupplementCategoryMeta[] = [
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

export const supplements: Supplement[] = [
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
  { slug: "lions-mane",             name: "Lion’s Mane",             categories: ["cognitive", "longevity"] },
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

export const supplementsForCategory = (slug: SupplementCategory): Supplement[] =>
  supplements.filter((s) => s.categories.includes(slug));

/**
 * Canonical supplement-profile count — the number of /supplements/<slug> pages.
 * Derived from the list above; every surface that cites it imports this.
 */
export const supplementCount: number = supplements.length;
