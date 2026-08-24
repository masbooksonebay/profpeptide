// ============================================================================
//  SITE SEARCH SYNONYMS  —  edit this file to teach search new words.
// ============================================================================
//
//  WHAT THIS IS
//  A plain lookup table mapping words a visitor might TYPE to the word that
//  actually appears on the site. Search expands the query through this table
//  BEFORE matching (query expansion), so "needle" finds the syringe guide and
//  "reta" finds Retatrutide. Nothing else needs to change.
//
//  HOW TO ADD ONE  (no code change, no rebuild logic to touch)
//  Add a line:  "typed term": "the real word",
//    - left side  = lowercase, exactly what a visitor types (add every variant)
//    - right side = a term that appears in a page title on the site
//  Examples:
//    "ozempic": "semaglutide",     ← brand → compound
//    "tb4": "tb-500",              ← abbreviation → compound
//    "needle": "syringe",          ← synonym → the word on the guide
//  Multi-word queries expand token-by-token, so "reta price" → "retatrutide price".
//
//  Found a search that returns nothing? Add the term here. That is the whole fix.
// ============================================================================

export const searchAliases: Record<string, string> = {
  // ── Injection equipment / supplies (the syringe guide is titled "…Syringe…Inject…") ──
  needle: "syringe",
  needles: "syringe",
  pin: "syringe",
  pins: "syringe",
  injection: "syringe",
  injecting: "syringe",
  inject: "syringe",
  "insulin needle": "insulin syringe",
  bacwater: "bac water",
  "bac-water": "bac water",
  bacteriostatic: "bac water",
  reconstitute: "reconstitution",
  reconstituting: "reconstitution",

  // ── Brand names → generic compound (normalized from the iOS app BRAND_ALIASES) ──
  ozempic: "semaglutide",
  wegovy: "semaglutide",
  rybelsus: "semaglutide",
  mounjaro: "tirzepatide",
  zepbound: "tirzepatide",
  saxenda: "liraglutide",
  victoza: "liraglutide",
  egrifta: "tesamorelin",
  vyleesi: "pt-141",

  // ── Common abbreviations / short forms → compound ──
  reta: "retatrutide",
  tirz: "tirzepatide",
  tirze: "tirzepatide",
  sema: "semaglutide",
  cagri: "cagrilintide",
  tb4: "tb-500",
  "tb-4": "tb-500",
  bpc: "bpc-157",
  cjc: "cjc-1295",
  ipa: "ipamorelin",
  ipam: "ipamorelin",
  mots: "mots-c",
  motsc: "mots-c",
  ghk: "ghk-cu",
  tesa: "tesamorelin",
  sermo: "sermorelin",
  mt2: "melanotan-ii",
  "mt-2": "melanotan-ii",
  mt1: "melanotan-i",
  "mt-1": "melanotan-i",
  ta1: "thymosin alpha-1",
  nad: "nad+",
  igf: "igf-1",
  ghrp: "ghrp",
  pt141: "pt-141",
  "pt 141": "pt-141",
  glow: "glow",
  klow: "klow",
  epithalon: "epitalon", // common alternate spelling
};

// Expand a raw query through the alias table before it hits Fuse.
// Whole-query match wins first (so multi-word aliases like "insulin needle" resolve); otherwise
// each token is replaced if it is an alias. Unknown words pass through unchanged.
export function expandQuery(raw: string): string {
  const q = raw.trim().toLowerCase().replace(/\s+/g, " ");
  if (!q) return raw;
  if (searchAliases[q]) return searchAliases[q];
  return q
    .split(" ")
    .map((tok) => searchAliases[tok] ?? tok)
    .join(" ");
}
