// Site search index — DERIVED, not hand-maintained.
//
// The entries live in search-index.generated.ts, rebuilt from the site's single sources by
// scripts/gen-search-index.mjs (run in the build chain) and guarded by scripts/check-search-index.mjs.
// This file only owns the TYPES and the display labels. To change WHAT is searchable, edit the
// source data modules (peptideCategories.ts, supplements.ts, news.ts, vendors.ts, glossary.ts, …)
// and regenerate — never edit the generated array by hand.
//
// Synonyms / aliases (needle↔syringe, "reta"→retatrutide, brand names) are NOT here — they are a
// query-expansion layer in src/data/search-aliases.ts, applied in SearchOverlay before Fuse.
import { generatedSearchIndex } from "./search-index.generated";

export type SearchCategory =
  | "peptide"
  | "supplement"
  | "comparison"
  | "guide"
  | "news"
  | "coupon"
  | "price"
  | "glossary"
  | "page"
  | "lab";

export interface SearchEntry {
  title: string;
  url: string;
  category: SearchCategory;
  description: string;
  tags: string[];
}

export const searchIndex: SearchEntry[] = generatedSearchIndex;

export const categoryLabels: Record<SearchCategory, string> = {
  peptide: "Peptides",
  supplement: "Supplements",
  comparison: "Comparisons",
  guide: "Guides",
  news: "News",
  coupon: "Discount Codes",
  price: "Prices",
  glossary: "Glossary",
  page: "Pages",
  lab: "Labs",
};
