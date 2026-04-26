export type SearchCategory =
  | "peptide"
  | "supplement"
  | "comparison"
  | "news"
  | "page";

export interface SearchEntry {
  title: string;
  url: string;
  category: SearchCategory;
  description: string;
  tags: string[];
}

export const searchIndex: SearchEntry[] = [
  // Peptides
  { title: "AOD-9604", url: "/peptides/aod-9604", category: "peptide", description: "", tags: [] },
  { title: "BPC-157", url: "/peptides/bpc-157", category: "peptide", description: "", tags: [] },
  { title: "Cagrilintide", url: "/peptides/cagrilintide", category: "peptide", description: "", tags: [] },
  { title: "CJC-1295", url: "/peptides/cjc-1295", category: "peptide", description: "", tags: [] },
  { title: "DSIP", url: "/peptides/dsip", category: "peptide", description: "", tags: [] },
  { title: "Epitalon", url: "/peptides/epitalon", category: "peptide", description: "", tags: [] },
  { title: "Follistatin", url: "/peptides/follistatin", category: "peptide", description: "", tags: [] },
  { title: "GH Stack", url: "/peptides/gh-stack", category: "peptide", description: "", tags: [] },
  { title: "GHK-Cu", url: "/peptides/ghk-cu", category: "peptide", description: "", tags: [] },
  { title: "GLOW", url: "/peptides/glow", category: "peptide", description: "", tags: [] },
  { title: "IGF-1 LR3", url: "/peptides/igf-1-lr3", category: "peptide", description: "", tags: [] },
  { title: "Ipamorelin", url: "/peptides/ipamorelin", category: "peptide", description: "", tags: [] },
  { title: "KPV", url: "/peptides/kpv", category: "peptide", description: "", tags: [] },
  { title: "Melanotan II", url: "/peptides/melanotan-ii", category: "peptide", description: "", tags: [] },
  { title: "MOTS-c", url: "/peptides/mots-c", category: "peptide", description: "", tags: [] },
  { title: "NAD+", url: "/peptides/nad-plus", category: "peptide", description: "", tags: [] },
  { title: "PT-141", url: "/peptides/pt-141", category: "peptide", description: "", tags: [] },
  { title: "Retatrutide", url: "/peptides/retatrutide", category: "peptide", description: "", tags: [] },
  { title: "Selank", url: "/peptides/selank", category: "peptide", description: "", tags: [] },
  { title: "Semaglutide", url: "/peptides/semaglutide", category: "peptide", description: "", tags: [] },
  { title: "Semax", url: "/peptides/semax", category: "peptide", description: "", tags: [] },
  { title: "Sermorelin", url: "/peptides/sermorelin", category: "peptide", description: "", tags: [] },
  { title: "TB-500", url: "/peptides/tb-500", category: "peptide", description: "", tags: [] },
  { title: "Tesamorelin", url: "/peptides/tesamorelin", category: "peptide", description: "", tags: [] },
  { title: "Thymosin Alpha-1", url: "/peptides/thymosin-alpha-1", category: "peptide", description: "", tags: [] },
  { title: "Tirzepatide", url: "/peptides/tirzepatide", category: "peptide", description: "", tags: [] },
  { title: "Wolverine Stack", url: "/peptides/wolverine-stack", category: "peptide", description: "", tags: [] },

  // Supplements
  { title: "Alpha GPC", url: "/supplements/alpha-gpc", category: "supplement", description: "", tags: [] },
  { title: "Alpha Lipoic Acid", url: "/supplements/alpha-lipoic-acid", category: "supplement", description: "", tags: [] },
  { title: "Ashwagandha", url: "/supplements/ashwagandha", category: "supplement", description: "", tags: [] },
  { title: "Bacopa Monnieri", url: "/supplements/bacopa-monnieri", category: "supplement", description: "", tags: [] },
  { title: "BCAAs", url: "/supplements/bcaas", category: "supplement", description: "", tags: [] },
  { title: "Berberine", url: "/supplements/berberine", category: "supplement", description: "", tags: [] },
  { title: "Beta-Alanine", url: "/supplements/beta-alanine", category: "supplement", description: "", tags: [] },
  { title: "Biotin", url: "/supplements/biotin", category: "supplement", description: "", tags: [] },
  { title: "Caffeine", url: "/supplements/caffeine", category: "supplement", description: "", tags: [] },
  { title: "Caffeine + L-Theanine", url: "/supplements/caffeine-l-theanine", category: "supplement", description: "", tags: [] },
  { title: "Chromium", url: "/supplements/chromium", category: "supplement", description: "", tags: [] },
  { title: "Collagen Peptides", url: "/supplements/collagen-peptides", category: "supplement", description: "", tags: [] },
  { title: "Collagen Peptides (Skin)", url: "/supplements/collagen-peptides-skin", category: "supplement", description: "", tags: [] },
  { title: "CoQ10", url: "/supplements/coq10", category: "supplement", description: "", tags: [] },
  { title: "Creatine", url: "/supplements/creatine", category: "supplement", description: "", tags: [] },
  { title: "Curcumin", url: "/supplements/curcumin", category: "supplement", description: "", tags: [] },
  { title: "Electrolyte Powders", url: "/supplements/electrolyte-powders", category: "supplement", description: "", tags: [] },
  { title: "Fenugreek", url: "/supplements/fenugreek", category: "supplement", description: "", tags: [] },
  { title: "Fish Oil", url: "/supplements/fish-oil", category: "supplement", description: "", tags: [] },
  { title: "GABA", url: "/supplements/gaba", category: "supplement", description: "", tags: [] },
  { title: "Garcinia Cambogia", url: "/supplements/garcinia-cambogia", category: "supplement", description: "", tags: [] },
  { title: "Glucomannan", url: "/supplements/glucomannan", category: "supplement", description: "", tags: [] },
  { title: "Glutamine", url: "/supplements/glutamine", category: "supplement", description: "", tags: [] },
  { title: "Green Tea Extract", url: "/supplements/green-tea-extract", category: "supplement", description: "", tags: [] },
  { title: "Hyaluronic Acid", url: "/supplements/hyaluronic-acid", category: "supplement", description: "", tags: [] },
  { title: "L-Arginine", url: "/supplements/l-arginine", category: "supplement", description: "", tags: [] },
  { title: "L-Citrulline", url: "/supplements/l-citrulline", category: "supplement", description: "", tags: [] },
  { title: "L-Citrulline Malate", url: "/supplements/l-citrulline-malate", category: "supplement", description: "", tags: [] },
  { title: "L-Theanine", url: "/supplements/l-theanine", category: "supplement", description: "", tags: [] },
  { title: "Lion's Mane", url: "/supplements/lions-mane", category: "supplement", description: "", tags: [] },
  { title: "Maca Root", url: "/supplements/maca-root", category: "supplement", description: "", tags: [] },
  { title: "Magnesium", url: "/supplements/magnesium", category: "supplement", description: "", tags: [] },
  { title: "NAD+", url: "/supplements/nad-plus", category: "supplement", description: "", tags: [] },
  { title: "NMN", url: "/supplements/nmn", category: "supplement", description: "", tags: [] },
  { title: "Phosphatidylserine", url: "/supplements/phosphatidylserine", category: "supplement", description: "", tags: [] },
  { title: "Prebiotics", url: "/supplements/prebiotics", category: "supplement", description: "", tags: [] },
  { title: "Probiotics", url: "/supplements/probiotics", category: "supplement", description: "", tags: [] },
  { title: "Protein Powder", url: "/supplements/protein-powder", category: "supplement", description: "", tags: [] },
  { title: "Quercetin", url: "/supplements/quercetin", category: "supplement", description: "", tags: [] },
  { title: "Resveratrol", url: "/supplements/resveratrol", category: "supplement", description: "", tags: [] },
  { title: "Rhodiola Rosea", url: "/supplements/rhodiola-rosea", category: "supplement", description: "", tags: [] },
  { title: "Spermidine", url: "/supplements/spermidine", category: "supplement", description: "", tags: [] },
  { title: "Tongkat Ali", url: "/supplements/tongkat-ali", category: "supplement", description: "", tags: [] },
  { title: "Vitamin C", url: "/supplements/vitamin-c", category: "supplement", description: "", tags: [] },
  { title: "Vitamin C (Skin)", url: "/supplements/vitamin-c-skin", category: "supplement", description: "", tags: [] },
  { title: "Vitamin D3", url: "/supplements/vitamin-d3", category: "supplement", description: "", tags: [] },
  { title: "Zinc", url: "/supplements/zinc", category: "supplement", description: "", tags: [] },
  { title: "Zinc Carnosine", url: "/supplements/zinc-carnosine", category: "supplement", description: "", tags: [] },
  { title: "ZMA", url: "/supplements/zma", category: "supplement", description: "", tags: [] },

  // Comparisons
  { title: "Ashwagandha vs Rhodiola Rosea", url: "/compare/ashwagandha-vs-rhodiola-rosea", category: "comparison", description: "Adaptogen comparison", tags: [] },
  { title: "Berberine vs Metformin", url: "/compare/berberine-vs-metformin", category: "comparison", description: "Metabolic health comparison", tags: [] },
  { title: "BPC-157 vs GHK-Cu", url: "/compare/bpc-157-vs-ghk-cu", category: "comparison", description: "Healing & tissue repair peptide comparison", tags: [] },
  { title: "BPC-157 vs TB-500", url: "/compare/bpc-157-vs-tb-500", category: "comparison", description: "Recovery peptide comparison", tags: [] },
  { title: "CJC-1295 vs Sermorelin vs Ipamorelin", url: "/compare/cjc-1295-vs-sermorelin-vs-ipamorelin", category: "comparison", description: "Growth hormone peptide comparison", tags: [] },
  { title: "Creatine vs Beta-Alanine", url: "/compare/creatine-vs-beta-alanine", category: "comparison", description: "Performance supplement comparison", tags: [] },
  { title: "Epitalon vs NAD+", url: "/compare/epitalon-vs-nad-plus", category: "comparison", description: "Longevity compound comparison", tags: [] },
  { title: "NMN vs Niacin", url: "/compare/nmn-vs-niacin", category: "comparison", description: "NAD+ precursor comparison", tags: [] },
  { title: "NMN vs NR vs Niacin", url: "/compare/nmn-vs-nr-vs-niacin", category: "comparison", description: "NAD+ precursor comparison", tags: [] },
  { title: "Retatrutide vs Semaglutide", url: "/compare/retatrutide-vs-semaglutide", category: "comparison", description: "Triple agonist vs single agonist comparison", tags: [] },
  { title: "Retatrutide vs Tirzepatide", url: "/compare/retatrutide-vs-tirzepatide", category: "comparison", description: "Triple agonist vs dual agonist comparison", tags: [] },
  { title: "Semaglutide vs Tirzepatide", url: "/compare/semaglutide-vs-tirzepatide", category: "comparison", description: "GLP-1 peptide comparison", tags: [] },
  { title: "Semaglutide vs Tirzepatide vs Retatrutide", url: "/compare/semaglutide-vs-tirzepatide-vs-retatrutide", category: "comparison", description: "GLP-1 comparison", tags: [] },
  { title: "Semax vs Selank", url: "/compare/semax-vs-selank", category: "comparison", description: "Cognitive peptide comparison", tags: [] },

  // News
  { title: "FDA Moves to Restore Peptide Access (April 2026)", url: "/news/fda-peptide-compounding-update-april-2026", category: "news", description: "What researchers need to know", tags: [] },
  { title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List", url: "/news/rfk-peptide-ban-2026", category: "news", description: "", tags: [] },
  { title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List (v2)", url: "/news/rfk-peptide-ban-2026-v2", category: "news", description: "", tags: [] },
  { title: "RFK's Peptide Ruling: Where Things Stand (April 2026)", url: "/news/rfk-peptide-update-april-2026", category: "news", description: "", tags: [] },

  // Key pages
  { title: "Peptide Library", url: "/peptides", category: "page", description: "Browse all peptide profiles", tags: ["library", "browse"] },
  { title: "Supplement Library", url: "/supplements", category: "page", description: "Browse all supplement profiles", tags: ["library", "browse"] },
  { title: "Comparisons", url: "/compare", category: "page", description: "Side-by-side compound comparisons", tags: ["compare"] },
  { title: "News", url: "/news", category: "page", description: "Latest peptide news and updates", tags: [] },
  { title: "Discount Codes", url: "/coupons", category: "page", description: "Vendor discount codes and promo offers", tags: ["coupons", "promo", "deals"] },
  { title: "Dosage Calculator", url: "/calculator", category: "page", description: "Reconstitution and dosing calculator", tags: ["dosing", "reconstitution"] },
  { title: "FAQ", url: "/faq", category: "page", description: "Frequently asked questions", tags: [] },
  { title: "Research Hub", url: "/research", category: "page", description: "Peer-reviewed study summaries", tags: ["studies", "papers"] },
  { title: "Best Peptide Vendors", url: "/best-peptide-vendors", category: "page", description: "Vetted research suppliers", tags: ["vendors", "suppliers"] },
  { title: "Glossary", url: "/glossary", category: "page", description: "Peptide & supplement research glossary", tags: [] },
  { title: "Prof. Peptide App", url: "/app", category: "page", description: "Get the Prof. Peptide app", tags: ["mobile", "ios", "android"] },
];

export const categoryLabels: Record<SearchCategory, string> = {
  peptide: "Peptides",
  supplement: "Supplements",
  comparison: "Comparisons",
  news: "News",
  page: "Pages",
};
