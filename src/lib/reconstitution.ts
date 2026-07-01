// Shared peptide reconstitution math + compound list.
// SINGLE SOURCE OF TRUTH — consumed by the Calculator (/calculator) and the Log (/log).
// Do not duplicate these formulas elsewhere; import from here.

// Compound library + mg-default set now live in the canonical data module
// (src/data/compounds.ts), ported from the iOS app. Re-exported here so existing
// importers keep working and there is a single source of truth.
export { compounds as COMPOUNDS, mgDefaults as MG_DEFAULT_COMPOUNDS } from "@/data/compounds";

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
