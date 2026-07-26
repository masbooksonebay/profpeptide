/**
 * Authoritative /peptides library taxonomy — category names, display order, and
 * per-category compound assignments. SINGLE SOURCE OF TRUTH: imported by both the
 * /peptides library page and the /prices comparison index so their categories and
 * assignments can never diverge. Edit here; both surfaces follow.
 */
export interface PeptideCategory {
  name: string;
  slug: string;
  peptides: { name: string; slug: string }[];
}

export const peptideCategories: PeptideCategory[] = [
  {
    name: "Metabolic & Weight Loss",
    slug: "metabolic",
    peptides: [
      { name: "5-Amino-1MQ", slug: "5-amino-1mq" },
      { name: "Adipotide", slug: "adipotide" },
      { name: "AOD-9604", slug: "aod-9604" },
      { name: "AOD-9604 + MOTS-c", slug: "aod-9604-mots-c" },
      { name: "Cagrilintide", slug: "cagrilintide" },
      { name: "CagriSema", slug: "cagrisema" },
      { name: "Metabolic Blend (NAD+ / MOTS-c / 5-Amino-1MQ)", slug: "nad-mots-c-5-amino-1mq" },
      { name: "MOTS-c", slug: "mots-c" },
      { name: "Retatrutide", slug: "retatrutide" },
      { name: "Semaglutide", slug: "semaglutide" },
      { name: "Semaglutide + BPC-157", slug: "semaglutide-bpc-157" },
      { name: "Tirzepatide", slug: "tirzepatide" },
      { name: "Tirzepatide + BPC-157", slug: "tirzepatide-bpc-157" },
    ],
  },
  {
    name: "Recovery & Tissue Repair",
    slug: "recovery",
    peptides: [
      { name: "BPC-157", slug: "bpc-157" },
      { name: "Cibinetide (ARA-290)", slug: "cibinetide" },
      { name: "PDA (Pentadeca Arginate)", slug: "pda" },
      { name: "TB-500", slug: "tb-500" },
      { name: "Wolverine Stack", slug: "wolverine-stack" },
    ],
  },
  {
    name: "Performance & Energy",
    slug: "performance",
    peptides: [
      { name: "IGF-1 DES", slug: "igf-1-des" },
      { name: "IGF-1 LR3", slug: "igf-1-lr3" },
      { name: "MGF", slug: "mgf" },
      { name: "Follistatin", slug: "follistatin" },
    ],
  },
  {
    name: "Growth Hormone",
    slug: "growth-hormone",
    peptides: [
      { name: "CJC-1295", slug: "cjc-1295" },
      { name: "CJC-1295 DAC + Ipamorelin", slug: "cjc-1295-dac-ipamorelin" },
      { name: "CJC-1295 + Ipamorelin (GH Stack)", slug: "gh-stack" },
      { name: "GHRP-2", slug: "ghrp-2" },
      { name: "GHRP-6", slug: "ghrp-6" },
      { name: "Hexarelin", slug: "hexarelin" },
      { name: "Ipamorelin", slug: "ipamorelin" },
      { name: "MK-677", slug: "mk-677" },
      { name: "MK-677 + Ipamorelin", slug: "mk-677-ipamorelin" },
      { name: "Sermorelin", slug: "sermorelin" },
      { name: "Sermorelin + Ipamorelin", slug: "sermorelin-ipamorelin" },
      { name: "Tesamorelin", slug: "tesamorelin" },
      { name: "Tesamorelin + Ipamorelin", slug: "tesamorelin-ipamorelin" },
    ],
  },
  {
    name: "Cognitive & Nootropic",
    slug: "cognitive",
    peptides: [
      { name: "Adamax", slug: "adamax" },
      { name: "Selank", slug: "selank" },
      { name: "Semax", slug: "semax" },
      { name: "Semax + Selank", slug: "semax-selank" },
    ],
  },
  {
    name: "Skin Health & Anti-Aging",
    slug: "skin-health",
    peptides: [
      { name: "GHK-Cu", slug: "ghk-cu" },
      { name: "GLOW", slug: "glow" },
      { name: "KLOW", slug: "klow" },
      { name: "Melanotan I (Afamelanotide)", slug: "melanotan-i" },
      { name: "Melanotan II", slug: "melanotan-ii" },
    ],
  },
  {
    name: "Gut Health & Immunity",
    slug: "gut-health",
    peptides: [
      { name: "KPV", slug: "kpv" },
      { name: "KPV + BPC-157", slug: "kpv-bpc-157" },
      { name: "LL-37", slug: "ll-37" },
      { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1" },
      { name: "VIP (Vasoactive Intestinal Peptide)", slug: "vip" },
    ],
  },
  {
    name: "Sleep & Recovery",
    slug: "sleep-recovery",
    peptides: [
      { name: "DSIP", slug: "dsip" },
    ],
  },
  {
    name: "Longevity",
    slug: "longevity",
    peptides: [
      { name: "Epitalon", slug: "epitalon" },
      { name: "Glutathione (GSH)", slug: "glutathione" },
      { name: "NAD+", slug: "nad-plus" },
      { name: "SS-31 (Elamipretide)", slug: "ss-31" },
    ],
  },
  {
    // TODO: Leave Epitalon under Longevity for now. Add sibling Khavinson
    // bioregulators (Cardiogen, Cortagen) here as their profiles go live.
    name: "Bioregulators",
    slug: "bioregulators",
    peptides: [
      { name: "Pinealon", slug: "pinealon" },
      { name: "Thymogen", slug: "thymogen" },
      { name: "Cortagen", slug: "cortagen" },
      { name: "Cardiogen", slug: "cardiogen" },
    ],
  },
  {
    name: "Sexual Health",
    slug: "sexual-health",
    peptides: [
      { name: "Kisspeptin", slug: "kisspeptin" },
      { name: "Oxytocin", slug: "oxytocin" },
      { name: "PT-141", slug: "pt-141" },
      { name: "PT-141 + Oxytocin", slug: "pt-141-oxytocin" },
    ],
  },
];

/** Ordered category names (library display order) — for grouping the price index. */
export const categoryOrder: string[] = peptideCategories.map((c) => c.name);

/** slug -> library category name, for every compound in the library taxonomy. */
export const libraryCategoryOf: Record<string, string> = Object.fromEntries(
  peptideCategories.flatMap((c) => c.peptides.map((p) => [p.slug, c.name])),
);

/**
 * Routable /peptides/<slug> profile pages. The library taxonomy above covers the
 * displayed profiles; EXTRA_PROFILE_SLUGS are profile pages that exist on disk but
 * aren't surfaced in the library nav (so a price row still links to a real page,
 * never a dead link). Currently empty — every profile page on disk is surfaced in
 * the library. Add here only if a /peptides/<slug> dir is created outside it.
 */
const EXTRA_PROFILE_SLUGS: string[] = [];

export const PROFILE_SLUGS: Set<string> = new Set([
  ...peptideCategories.flatMap((c) => c.peptides.map((p) => p.slug)),
  ...EXTRA_PROFILE_SLUGS,
]);

/** True when /peptides/<slug> resolves to a real page (safe conditional links). */
export function hasProfile(slug: string): boolean {
  return PROFILE_SLUGS.has(slug);
}
