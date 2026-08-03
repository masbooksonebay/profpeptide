/**
 * Structured facts that compose the coupon page's subtitle (see vendorFactsLine). Populated
 * per vendor from that vendor's OWN site. Absent fields simply drop their segment.
 */
export interface VendorFacts {
  /** The vendor's PUBLISHED purity standard, e.g. "≥99%". Rendered as "{x} purity standard" —
   *  ALWAYS the vendor's stated standard, NEVER a PP-measured figure (PP tests nothing). */
  purityStandard?: string;
  /** How the vendor exposes Certificates of Analysis. */
  coa?: "per-batch" | "per-product" | "library" | "on-request" | "login-gated";
  /** Lab accreditation the vendor states, e.g. "ISO/IEC 17025". */
  labAccreditation?: string;
  /** The third-party lab the vendor names (e.g. "Kovera Labs", "Janoshik"), or a short
   *  third-party descriptor when the vendor states independent testing but names no single
   *  lab (e.g. "three independent labs"). Rendered after "Yes — " in the testing index. */
  labName?: string;
  /** Analytical methods the vendor states it runs, e.g. "HPLC, mass spec". Free text. */
  testMethods?: string;
  /** Contaminant/safety panels the vendor states it runs, e.g. "Heavy metals, endotoxin". */
  contaminants?: string;
  /** True when the vendor states cold-chain / temperature-controlled shipping. */
  coldChain?: boolean;
}

export interface Vendor {
  name: string;
  code: string;
  discount: string;
  region: "US" | "CA" | "UK" | "EU" | "IS";
  url: string;
  detailPage: string;
  editorsPick?: boolean;
  bestDeal?: boolean;
  comingSoon?: boolean;
  /** Retired vendor: page redirects to /coupons, not shown on the hub or counted. */
  retired?: boolean;
  /** Structured facts for the coupon-page subtitle (vendorFactsLine). Absent → region only. */
  facts?: VendorFacts;
}

export const regionFlag: Record<Vendor["region"], string> = {
  US: "\uD83C\uDDFA\uD83C\uDDF8",
  CA: "\uD83C\uDDE8\uD83C\uDDE6",
  UK: "\uD83C\uDDEC\uD83C\uDDE7",
  EU: "\uD83C\uDDEA\uD83C\uDDFA",
  IS: "\uD83C\uDDEE\uD83C\uDDF8",
};

export const vendors: Record<string, Vendor> = {
  "aero-peptides": {
    name: "Aero Peptides",
    code: "PROFPEPTIDE15",
    discount: "15% off",
    region: "US",
    url: "https://aeropeptides.com/?ref=PROF15",
    detailPage: "/coupons/aero-peptides",
    facts: { purityStandard: "≥98%", coa: "on-request" },
  },
  "almighty-peptides": {
    name: "Almighty Peptides",
    code: "PROFPEPTIDE",
    discount: "20% off",
    region: "US",
    url: "https://www.almightypeptides.com/?sld=profpeptide",
    detailPage: "/coupons/almighty-peptides",
    facts: { testMethods: "HPLC, mass spec" },
  },
  "alpha-peptides": {
    name: "Alpha Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://alpha-peptides.com/aff/850/",
    detailPage: "/coupons/alpha-peptides",
    facts: { coa: "library", labAccreditation: "ISO/IEC 17025" },
  },
  "ameano-peptides": {
    name: "Ameano Peptides",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://ameanopeptides.com/?ref=hmvyvxhr",
    detailPage: "/coupons/ameano-peptides",
    facts: { purityStandard: "≥99%", coa: "per-product" },
  },
  "amino-club": {
    name: "Amino Club",
    code: "PROFPEPTIDE",
    discount: "20% off",
    region: "US",
    url: "https://aminoclub.com?utm_source=affiliate_marketing&code=PROFPEPTIDE",
    detailPage: "/coupons/amino-club",
    facts: { purityStandard: "≥99%", coa: "per-batch", labAccreditation: "ISO/IEC 17025", testMethods: "HPLC, ICP-MS, PCR, USP <85>", contaminants: "Heavy metals, sterility, endotoxin" },
    editorsPick: true,
  },
  "amino-x": {
    name: "Amino X",
    code: "PROF15",
    discount: "15% off",
    region: "US",
    url: "https://aminox.net/?coupon=PROF15",
    detailPage: "/coupons/amino-x",
    facts: { coa: "on-request", purityStandard: "99%+", labName: "Kovera Labs", testMethods: "RP-HPLC, LC-MS" },
  },
  "ascension-peptides": {
    name: "Ascension Peptides",
    code: "PROFPEPTIDE",
    discount: "50% off",
    region: "US",
    url: "https://ascensionpeptides.com/ref/profpeptide/",
    detailPage: "/coupons/ascension-peptides",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "multi-stage" },
    bestDeal: true,
  },
  "behemoth-labz": {
    name: "Behemoth Labz",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://behemothlabz.com/aff/208/",
    detailPage: "/coupons/behemoth-labz",
    facts: { coa: "per-batch", labName: "Colmaric Analyticals" },
  },
  "biolongevity-labs": {
    name: "Biolongevity Labs",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://go.biolongevitylabs.com/aff_c?offer_id=1&aff_id=2702",
    detailPage: "/coupons/biolongevity-labs",
    facts: { coa: "per-batch" },
  },
  biocollex: {
    name: "BioCollex",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://biocollexresearch.com/?ref=profpeptidehq",
    detailPage: "/coupons/biocollex",
    facts: { coa: "per-batch", purityStandard: "99%" },
  },
  "crush-research": {
    name: "Crush Research",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://crushresearch.shop/?ref=PROFPEPTIDE",
    detailPage: "/coupons/crush-research",
    facts: { coa: "library" },
  },
  "ez-peptides": {
    name: "EZ Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://ezpeptides.com/?ref=nldbbgvs",
    detailPage: "/coupons/ez-peptides",
    facts: { coa: "per-batch" },
  },
  "fusion-peptide": {
    name: "Fusion Peptide",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://fusionpeptide.com/?ref=pacjbqyu",
    detailPage: "/coupons/fusion-peptide",
    retired: true,
  },
  "glacier-aminos": {
    name: "Glacier Aminos",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://glacieraminos.shop/?ref=cknlhxrm",
    detailPage: "/coupons/glacier-aminos",
    facts: { coa: "per-batch", labName: "independent US labs", testMethods: "Identity, mass, endotoxin", contaminants: "Endotoxin", coldChain: true },
    editorsPick: true,
  },
  "ignite-peptides": {
    name: "Ignite Peptides",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://ignitepeptides.com/ref/profpeptide/",
    detailPage: "/coupons/ignite-peptides",
    facts: { coa: "per-product", purityStandard: "99%+", labName: "US independent (ISO/GMP)" },
  },
  "la-peptides": {
    name: "LA Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://lapeptides.net/?ref=xocwamxz",
    detailPage: "/coupons/la-peptides",
    facts: { coa: "per-batch" },
  },
  "mile-high-compounds": {
    name: "Mile High Compounds",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://milehighcompounds.is/?ref=profpeptide",
    detailPage: "/coupons/mile-high-compounds",
    facts: { coa: "library" },
  },
  "modern-aminos": {
    name: "Modern Aminos",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://modernaminos.com/?ref=profpeptide",
    detailPage: "/coupons/modern-aminos",
    facts: { coa: "login-gated", labAccreditation: "ISO/IEC 17025" },
  },
  "nextgen-peptides": {
    name: "NextGen Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://ngpeptide.com/?ref=fysuzocl",
    detailPage: "/coupons/nextgen-peptides",
    facts: { coa: "library" },
  },
  "peptidology": {
    name: "Peptidology",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://peptidology.co/?ref=mkmhgxqi",
    detailPage: "/coupons/peptidology",
    facts: { coa: "per-batch", labAccreditation: "ISO/IEC 17025" },
  },
  "integrative-peptides": {
    name: "Integrative Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://integrativepeptides.com/affiliate/profpeptide/",
    detailPage: "/coupons/integrative-peptides",
    facts: { purityStandard: "≥99%", contaminants: "Heavy metals, endotoxin, residual solvents" },
  },
  "limitless-biotech": {
    name: "Limitless Biotech",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://www.limitlesslifenootropics.com/?_ef_transaction_id=&oid=1&affid=10477",
    detailPage: "/coupons/limitless-biotech",
    facts: { coa: "per-product", purityStandard: "≥98.5%", labName: "three independent labs", testMethods: "HPLC, LC-MS", contaminants: "Sterility, endotoxin, contaminants" },
  },
  "midwest-peptide": {
    name: "Midwest Peptide",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://midwestpeptide.com?ref=PROF10",
    detailPage: "/coupons/midwest-peptide",
    facts: { purityStandard: "≥99%", coa: "per-product" },
  },
  "oasis-labs": {
    name: "Oasis Labs",
    code: "PROF15",
    discount: "15% off",
    region: "US",
    url: "https://myoasislabs.com/?sld=profpeptide",
    detailPage: "/coupons/oasis-labs",
    facts: { coa: "per-product", purityStandard: "99%", labName: "US labs", coldChain: true },
    editorsPick: true,
  },
  "particle-peptides": {
    name: "Particle Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "UK",
    url: "https://particlepeptides.com/en/?refs=18075",
    detailPage: "/coupons/particle-peptides",
    retired: true,
  },
  "peptide-partners": {
    name: "Peptide Partners",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://peptide.partners/ref/48/",
    detailPage: "/coupons/peptide-partners",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "TrustPointe, Kovera, BioRegen, Chromate", testMethods: "HPLC, USP <85>", contaminants: "Heavy metals, endotoxin, sterility" },
    editorsPick: true,
  },
  "peptide-giants": {
    name: "Peptide Giants",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://peptidegiants.com/?ref=urunwnog",
    detailPage: "/coupons/peptide-giants",
    facts: { coa: "library" },
  },
  "purerx-peptides": {
    name: "PureRx Peptides",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://purerxpeptides.com/?ref=urunwnog",
    detailPage: "/coupons/purerx-peptides",
    facts: { coa: "per-batch" },
  },
  "peptides-gg": {
    name: "Peptides.gg",
    code: "PROF15",
    discount: "15% off",
    region: "US",
    url: "https://peptides.gg/?coupon=prof15",
    detailPage: "/coupons/peptides-gg",
    facts: { coa: "per-batch" },
  },
  purerawz: {
    name: "PureRawz",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://purerawz.co/?ref=1901",
    detailPage: "/coupons/purerawz",
    facts: { coa: "per-batch" },
  },
  "purity-peptides": {
    name: "Purity Peptides",
    code: "PROF15",
    discount: "15% off",
    region: "CA",
    url: "https://puritypeptides.is/?sld=PROF15",
    detailPage: "/coupons/purity-peptides",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "accredited (N. America)", testMethods: "HPLC, mass spec" },
  },
  "royal-peptides": {
    name: "Royal Peptides",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://royal-peptides.com/?ref=urunwnog",
    detailPage: "/coupons/royal-peptides",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "cGMP/ISO labs" },
  },
  "science-based-peptides": {
    name: "Science Based Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://www.sciencebasedpeptides.com/ref/PROFPEPTIDE",
    detailPage: "/coupons/science-based-peptides",
    facts: { coa: "per-batch" },
  },
  "spartan-peptides": {
    name: "Spartan Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://spartanpeptides.com/?a_aid=profpeptide&a_bid=ce6347d0",
    detailPage: "/coupons/spartan-peptides",
    facts: { purityStandard: "≥98%", coa: "per-batch", labName: "independent", testMethods: "HPLC, mass spec" },
  },
  "swiss-chems": {
    name: "Swiss Chems",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://swisschems.is/?ref=PROF10",
    detailPage: "/coupons/swiss-chems",
    facts: { coa: "library" },
  },
  "synthesis-peptides": {
    name: "Synthesis Peptides",
    code: "PROFPEPTIDE10",
    discount: "10% off",
    region: "US",
    url: "https://synthesispeptides.io/?synthaff=105",
    detailPage: "/coupons/synthesis-peptides",
    // HIDDEN 2026-07-24: affiliate program broken (portal redirects to homepage,
    // mixed-up accounts) and they'd be the lone non-affiliate vendor on the price
    // surface. Reuses the `retired` display-hide (off /vendors, /coupons hub, the
    // count, and the sitemap; coupon page redirects). NOT a permanent retirement —
    // data + price-suite re-onboard are preserved. Re-enable with the non-affiliate
    // vendor set by removing this one flag (and the redirect in the coupon page.tsx
    // + next.config.js). See also src/app/vendor-testing-index (row commented out).
    retired: true,
  },
  "treasure-coast-peptides": {
    name: "Treasure Coast",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://treasurecoastpeptides.com/?ref=MARKSHURTLIFF",
    detailPage: "/coupons/treasure-coast-peptides",
    facts: { coa: "per-batch" },
  },
  "vital-core-research": {
    name: "Vital Core Research",
    code: "PROF20",
    discount: "20% off",
    region: "US",
    url: "https://vitalcoreresearch.com/?ref=nbwnvhnu",
    detailPage: "/coupons/vital-core-research",
    facts: { coa: "per-product" },
  },
  "nura-peptide": {
    name: "Nura Peptide",
    code: "PROFPEPTIDE15",
    discount: "15% off",
    region: "US",
    url: "https://nurapeptide.com/?ref=profpeptide",
    detailPage: "/coupons/nura-peptide",
    facts: { coa: "library" },
  },
  // 99 Purity's sources disagree on the discount: the welcome email says 10% off, the
  // affiliate dashboard header says 15% OFF (same code, PROFPEPTIDE10). Mark's call is to
  // publish 10% — understating is safe, overstating is a broken promise. Do NOT "correct"
  // this to 15% without new evidence. Affiliate URL is PATH-BASED (/ref/profpeptide).
  "99-purity-peptides": {
    name: "99 Purity Peptides",
    code: "PROFPEPTIDE10",
    discount: "10% off",
    region: "US",
    url: "https://99puritypeptides.com/ref/profpeptide",
    detailPage: "/coupons/99-purity-peptides",
    facts: { purityStandard: "≥99%", coa: "library" },
  },
};

/**
 * Number of active (non-retired) vendors in the registry — the single source of
 * truth for the vendor count used across the site (coupons hub meta, homepage
 * stat, per-peptide vendor-count links). Plain count, no quality claim: /coupons
 * and /prices list vendors without implying vetting (that lives on
 * /best-peptide-vendors). Derive from this; never hardcode.
 */
export const activeVendorCount = Object.values(vendors).filter((v) => !v.retired).length;

const REGION_WORD: Record<Vendor["region"], string> = {
  US: "US-based",
  CA: "Canada-based",
  UK: "UK-based",
  EU: "EU-based",
  IS: "Iceland-based",
};

const COA_PHRASE: Record<NonNullable<VendorFacts["coa"]>, string> = {
  "per-batch": "per-batch COAs",
  "per-product": "a COA on each product page",
  library: "a public COA library",
  "on-request": "COAs on request",
  "login-gated": "COAs behind a research-account login",
};

/**
 * The coupon page's facts subtitle, composed from structured registry data (region + the
 * vendor's PUBLISHED purity standard + COA/lab testing), joining ONLY present segments with
 * " · ". A vendor with no `facts` degrades cleanly to its region word alone. Purity is ALWAYS
 * phrased as the vendor's standard — never a PP-measured claim. Data-driven on purpose: writing
 * this per page is what produced the hardcoded-value rot (cookie lines, stale months, pills).
 */
export function vendorFactsLine(slug: string): string {
  const v = vendors[slug];
  if (!v) return "";
  const f = v.facts ?? {};
  const segs: string[] = [REGION_WORD[v.region]];
  if (f.purityStandard) segs.push(`${f.purityStandard} purity standard`);
  const coa = f.coa ? COA_PHRASE[f.coa] : "";
  if (coa && f.labAccreditation) segs.push(`${coa} from an ${f.labAccreditation}-accredited lab`);
  else if (coa) segs.push(coa);
  else if (f.labAccreditation) segs.push(`${f.labAccreditation}-accredited lab testing`);
  return segs.join(" · ");
}

// NOTE: CODES_VERIFIED_DATE moved to @/data/codes-verified — it is now DERIVED from the
// machine link-check stamp (VENDORS_VERIFIED_ISO), not a hand-set constant here, so the
// "verified" month can never silently go stale at a month boundary. Import it from there.
// (vendors.ts must stay import-free — the check:vendors/check:grids guards execute it via a
// transpile that throws on any require — so the derivation can't live in this file.)
