// Shared peptide reconstitution math + compound list.
// SINGLE SOURCE OF TRUTH — consumed by the Calculator (/calculator) and the Log (/log).
// Do not duplicate these formulas elsewhere; import from here.

export const COMPOUNDS = [
  "Custom Peptide",
  "AOD-9604", "BPC-157", "CJC-1295", "Epitalon", "Follistatin",
  "GHK-Cu", "GLOW", "IGF-1 LR3", "Ipamorelin", "Melanotan II",
  "MOTS-c", "NAD+", "PT-141", "Retatrutide", "Selank", "Semax",
  "Semaglutide", "Sermorelin", "TB-500", "Tesamorelin",
  "Thymosin Alpha-1", "Tirzepatide", "Wolverine Stack",
];

// Compounds conventionally dosed in mg rather than mcg.
export const MG_DEFAULT_COMPOUNDS = new Set([
  "Semaglutide", "Tirzepatide", "Retatrutide", "NAD+",
]);

export type DoseUnit = "mcg" | "mg";

export interface ReconstitutionInput {
  vialMg: number;
  bacWaterMl: number;
  dose: number;
  doseUnit: DoseUnit;
}

export interface ReconstitutionResult {
  concentrationMcgPerMl: number;
  concentrationMgPerMl: number;
  drawVolumeMl: number;
  syringeUnits: number; // U-100 insulin syringe
}

/**
 * Core reconstitution math. Identical formulas to the Calculator:
 *   concentration (mcg/mL) = (vial mg × 1000) ÷ water mL
 *   draw volume (mL)       = dose (mcg) ÷ concentration
 *   syringe units (U-100)  = draw volume mL × 100
 * Returns null when any input is missing or non-positive.
 */
export function computeReconstitution({
  vialMg,
  bacWaterMl,
  dose,
  doseUnit,
}: ReconstitutionInput): ReconstitutionResult | null {
  if (
    !vialMg || !bacWaterMl || !dose ||
    vialMg <= 0 || bacWaterMl <= 0 || dose <= 0
  ) {
    return null;
  }
  const doseInMcg = doseUnit === "mg" ? dose * 1000 : dose;
  const vialMcg = vialMg * 1000;
  const concentrationMcgPerMl = vialMcg / bacWaterMl;
  const drawVolumeMl = doseInMcg / concentrationMcgPerMl;
  const syringeUnits = drawVolumeMl * 100;
  return {
    concentrationMcgPerMl,
    concentrationMgPerMl: concentrationMcgPerMl / 1000,
    drawVolumeMl,
    syringeUnits,
  };
}
