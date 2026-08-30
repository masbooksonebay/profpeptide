// Pure string-normalization helpers for chat output. Deliberately import-free (no @/data/vendors,
// no corpus) so this can be executed directly by a plain node test script the same way the repo's
// other data modules are (transpile + run — see scripts/test-chat-format.mjs), without needing a
// test framework this project doesn't otherwise have.
//
// WHY THIS EXISTS
// Two live production instances of the same defect: "save 10% off%" and "PROF20 for 20% off off".
// Root cause: vendors.ts's `discount` field is already a COMPLETE phrase ("10% off"), but the model
// sometimes appends its own trailing "%" or "off" anyway despite the system prompt instructing it
// not to. A system-prompt instruction is a request, not a guarantee — this is the fourth exhibit on
// this project of a transformation layer with no contract about what it receives (search-index body
// text, the corpus's redaction regex, the coupon-page inline-FAQItem gap, and now this). The fix is
// code-level: normalize the doubling AFTER substitution, unconditionally, regardless of whether the
// model followed instructions. The system-prompt instruction stays too (belt and braces) — cheaper
// to avoid triggering this in the first place — but this function is the actual guarantee.
export function normalizeDiscountFormatting(text: string): string {
  let out = text;
  // "20% off off" / "20%  off   off" -> "20% off" — a doubled trailing "off", any whitespace between.
  out = out.replace(/\boff(\s+off\b)+/gi, "off");
  // "10% off%" / "10% off %" -> "10% off" — a stray "%" trailing an "off" that already has its own.
  out = out.replace(/(\boff)\s*%/gi, "$1");
  // "20%%" / "20% %" -> "20%" — repeated percent signs with only whitespace between.
  out = out.replace(/%(\s*%)+/g, "%");
  return out;
}

// ── residual code/price stripper — output-side safety backstop ───────────────────────────────────
// Used by /api/chat-app, which has NO {{CODE}}/{{DISCOUNT}} substitution and never imports vendors.ts
// (coupons/prices are deliberately absent from the app assistant). But the corpus still contains 54
// vendor pages, redacted to [[REDACTED]] where a code/price was — a model asked about a vendor could
// still HALLUCINATE a PROF-shaped code or a "$…" price from pretraining. This strips anything
// code/price-shaped unconditionally, so nothing commerce-shaped can reach an app user regardless of
// what the model wrote. Same regex family the site's redaction uses; kept here (import-free) rather
// than reaching into the site's substitution chain, so the app path pulls in zero vendor code.
const RESIDUAL_CODE_RE = /\bPROF[A-Z0-9]{2,}\b/g;
const RESIDUAL_PRICE_RE = /\$\d[\d,]*(?:\.\d{1,2})?/g;

export interface ResidualStripResult {
  text: string;
  stripped: number;
}

export function stripResidualCodesAndPrices(rawText: string): ResidualStripResult {
  let stripped = 0;
  const hit = () => {
    stripped += 1;
    return "[unavailable — see the vendor's page on profpeptide.com]";
  };
  const text = rawText.replace(RESIDUAL_CODE_RE, hit).replace(RESIDUAL_PRICE_RE, hit);
  return { text, stripped };
}
