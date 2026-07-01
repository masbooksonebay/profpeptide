// Canonical compound library for the site's tracking/calculator tools.
// PORTED VERBATIM from the iOS app repo (~/dev/profpeptide-app):
//   - LIBRARY + Custom Peptide + sort + mgDefaults + BLEND_COMPONENTS +
//     compoundDisplayLabel  ← constants/compounds.ts
//   - BRAND_ALIASES + canonicalCompound                ← constants/pkData.ts
// Do not add, rename, or omit entries here without matching the app.

const CUSTOM_PEPTIDE = "Custom Peptide";

const LIBRARY = [
  // Core singles (CJC-1295 carries the DAC form label; no-DAC is a separate,
  // non-accumulating entry).
  "AOD-9604", "BPC-157", "CJC-1295 (DAC)", "CJC-1295 (no DAC) / Mod GRF 1-29",
  "Epitalon", "Follistatin", "GHK-Cu", "GLOW", "IGF-1 LR3", "Ipamorelin",
  "Melanotan II", "MOTS-c", "NAD+", "PT-141", "Retatrutide", "Selank", "Semax",
  "Semaglutide", "Sermorelin", "TB-500", "Tesamorelin", "Thymosin Alpha-1",
  "Tirzepatide", "Wolverine Stack",
  // Site-parity singles.
  "5-Amino-1MQ", "Cagrilintide", "Cardiogen", "Cortagen", "DSIP", "KPV",
  "Melanotan I (Afamelanotide)", "MK-677", "Pinealon", "SS-31 (Elamipretide)",
  "Thymogen", "VIP (Vasoactive Intestinal Peptide)",
  // Liraglutide — daily GLP-1 (its own curve).
  "Liraglutide",
  // Site-parity blends.
  "AOD-9604 + MOTS-c", "CagriSema", "CJC-1295 + Ipamorelin (GH Stack)",
  "CJC-1295 DAC + Ipamorelin", "KLOW", "KPV + BPC-157",
  "Metabolic Blend (NAD+ / MOTS-c / 5-Amino-1MQ)", "MK-677 + Ipamorelin",
  "PT-141 + Oxytocin", "Semaglutide + BPC-157", "Semax + Selank",
  "Sermorelin + Ipamorelin", "Tesamorelin + Ipamorelin", "Tirzepatide + BPC-157",
  // Brand front-doors. Resolve to their generic's unit default via canonicalCompound().
  "Wegovy (Semaglutide)", "Ozempic (Semaglutide)", "Mounjaro (Tirzepatide)",
  "Zepbound (Tirzepatide)", "Saxenda (Liraglutide)", "Victoza (Liraglutide)",
  "Egrifta (Tesamorelin)", "Vyleesi (PT-141)",
];

// "Custom Peptide" pinned first (catch-all / default); the rest alphabetized
// case- and diacritic-insensitively, matching the app's collation.
export const compounds = [
  CUSTOM_PEPTIDE,
  ...LIBRARY.slice().sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })),
];

// Compounds conventionally dosed in mg rather than mcg. Brand aliases are NOT
// listed here — resolve through canonicalCompound() so a brand inherits its
// generic's unit default (e.g. "Wegovy (Semaglutide)" → mg).
export const mgDefaults = new Set([
  "Semaglutide", "Tirzepatide", "Retatrutide", "NAD+",
  "Cagrilintide", "CagriSema", "Liraglutide", "5-Amino-1MQ", "MK-677",
  "Semaglutide + BPC-157", "Tirzepatide + BPC-157",
  "Metabolic Blend (NAD+ / MOTS-c / 5-Amino-1MQ)",
]);

// Brand/legacy name → canonical compound key. Ported from the app's pkData.ts.
export const BRAND_ALIASES: Record<string, string> = {
  "Wegovy (Semaglutide)": "Semaglutide",
  "Ozempic (Semaglutide)": "Semaglutide",
  "Mounjaro (Tirzepatide)": "Tirzepatide",
  "Zepbound (Tirzepatide)": "Tirzepatide",
  "Saxenda (Liraglutide)": "Liraglutide",
  "Victoza (Liraglutide)": "Liraglutide",
  "Egrifta (Tesamorelin)": "Tesamorelin",
  "Vyleesi (PT-141)": "PT-141",
  // Legacy: bare "CJC-1295" (which was the DAC curve) keeps resolving to DAC.
  "CJC-1295": "CJC-1295 (DAC)",
};

/** Resolve a brand/legacy name to its canonical compound key (else itself). */
export function canonicalCompound(name: string): string {
  return BRAND_ALIASES[name] ?? name;
}

/** True if the compound (resolving brand/legacy aliases) defaults to mg dosing. */
export function mgDefaultFor(name: string): boolean {
  return mgDefaults.has(canonicalCompound(name));
}

// DISPLAY-ONLY blend composition ("Name (Components)"). Keyed by the EXACT
// canonical string; the stored/looked-up compound never changes. Only blends
// whose name doesn't already state its components are listed.
export const BLEND_COMPONENTS: Record<string, string> = {
  GLOW: "GHK-Cu + BPC-157 + TB-500",
  KLOW: "BPC-157 + TB-500 + GHK-Cu + KPV",
  "Wolverine Stack": "BPC-157 + TB-500",
  CagriSema: "Cagrilintide + Semaglutide",
};

/** Picker-row label: `Name (Components)` for listed blends, else the name as-is.
 *  DISPLAY ONLY — never use where the compound is stored, saved, or looked up. */
export function compoundDisplayLabel(name: string): string {
  const parts = BLEND_COMPONENTS[name];
  return parts ? `${name} (${parts})` : name;
}
