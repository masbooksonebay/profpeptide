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
  /** A specific third-party lab VERIFIED from the vendor's own COA — a proper noun
   *  (e.g. "Kovera Labs", "Janoshik"). NEVER a vague descriptor: a vendor's own
   *  unverified account of its testing goes in `labClaim`, not here. Rendered as a
   *  stated fact ("Tested by {labName}") in the testing index. */
  labName?: string;
  /** The vendor's OWN unverified description of its testing, used when no specific
   *  lab is confirmable from a COA (e.g. "independent US labs", "cGMP/ISO labs").
   *  Rendered ATTRIBUTED ('Vendor states: "{labClaim}"') so a reader can tell a
   *  vendor's assertion apart from a COA-verified lab at a glance. */
  labClaim?: string;
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
  region: "US" | "CA" | "UK" | "EU" | "IS" | "AE";
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
  AE: "\uD83C\uDDE6\uD83C\uDDEA", // \uD83C\uDDE6\uD83C\uDDEA UAE \u2014 first Middle East / GCC vendor (NOVA Labs)
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
    facts: { labName: "Bioviridian", testMethods: "RP-HPLC, MALDI-MS" },
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
    facts: { purityStandard: "≥99%", coa: "per-product", labName: "Janoshik", testMethods: "HPLC, LC-MS" },
  },
  "amino-club": {
    name: "Amino Club",
    code: "PROFPEPTIDE",
    discount: "20% off",
    region: "US",
    url: "https://aminoclub.com?utm_source=affiliate_marketing&code=PROFPEPTIDE",
    detailPage: "/coupons/amino-club",
    facts: { purityStandard: "≥99%", coa: "per-batch", labClaim: "ISO 17025 accredited laboratories", labAccreditation: "ISO/IEC 17025", testMethods: "HPLC, ICP-MS, PCR, USP <85>", contaminants: "Heavy metals, sterility, endotoxin" },
    editorsPick: true,
  },
  "amino-x": {
    name: "Amino X",
    code: "PROF15",
    discount: "15% off",
    region: "US",
    url: "https://aminox.net/?coupon=PROF15",
    detailPage: "/coupons/amino-x",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "Kovera Labs", testMethods: "RP-HPLC, LC-MS" },
  },
  // Onboarded 2026-08 (GoAffPro; PROFPEPTIDE bound to the affiliate account, 15% verified in-cart).
  // Janoshik is VENDOR-STATED only: the sole public "cert" is a labelled "Sample CoA" (an on-page
  // table — BPC-157, lot AMP-2026-001, 99.42%, HPLC/ESI-MS — "actual results vary by lot"), not a
  // real Janoshik document; lot-specific COAs are email-request only. So Janoshik goes in labClaim
  // (attributed), NOT labName (which requires a verified COA). purityStandard/testMethods are the
  // vendor's stated figures. coa: on-request. WooCommerce checkout is case-insensitive (uppercase
  // PROFPEPTIDE applied cleanly in-cart).
  "amp-peptides": {
    name: "AMP Peptides",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://amp-peptides.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/amp-peptides",
    facts: { purityStandard: "99%+", coa: "on-request", labClaim: "Janoshik Analytical, independent third-party lab", testMethods: "HPLC, ESI-MS" },
  },
  "ascension-peptides": {
    name: "Ascension Peptides",
    code: "PROFPEPTIDE",
    discount: "50% off",
    region: "US",
    url: "https://ascensionpeptides.com/ref/profpeptide/",
    detailPage: "/coupons/ascension-peptides",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "MZ BioLabs", testMethods: "HPLC-UV, HPLC-MS" },
  },
  "behemoth-labz": {
    name: "Behemoth Labz",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://behemothlabz.com/aff/208/",
    detailPage: "/coupons/behemoth-labz",
    facts: { coa: "per-batch", labName: "Colmaric Analyticals", testMethods: "HPLC" },
  },
  "biolongevity-labs": {
    name: "Biolongevity Labs",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://go.biolongevitylabs.com/aff_c?offer_id=1&aff_id=2702",
    detailPage: "/coupons/biolongevity-labs",
    facts: { coa: "per-batch", labName: "BioRegen", purityStandard: "99%+", testMethods: "LC-MS with UV" },
  },
  // BioPure's discount is 5% off — the LOWEST on the roster. That IS the discount; do NOT
  // round it up anywhere. Site states ">99%" purity (homepage, stated consistently) and a COA
  // with each product. Its WHO/GMP + ISO 9001 certification is for the MANUFACTURING facility,
  // not a named testing lab — so labAccreditation is intentionally absent.
  "biopure-peptides": {
    name: "BioPure Peptides",
    code: "PROFPEPTIDE",
    discount: "5% off",
    region: "US",
    url: "https://biopurepeptides.com/?sld=profpeptide",
    detailPage: "/coupons/biopure-peptides",
    // Job-2 cert pass (Aug 2026): NO COAs published online — product pages carry only a
    // "Third Party Tested" badge and say a COA "comes with the product"; no lab is named
    // anywhere on the site and none is downloadable. The prior labName "AxisPharm" was a
    // phantom (unverifiable; not on the site) — removed. coa: on-request.
    facts: { purityStandard: "≥99%", coa: "on-request" },
  },
  biocollex: {
    name: "BioCollex",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://biocollexresearch.com/?ref=profpeptidehq",
    detailPage: "/coupons/biocollex",
    facts: { coa: "per-batch", purityStandard: "99%", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS" },
  },
  "crush-research": {
    name: "Crush Research",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://crushresearch.shop/?ref=PROFPEPTIDE",
    detailPage: "/coupons/crush-research",
    facts: { coa: "per-batch", labName: "ILS Laboratories", labAccreditation: "ISO/IEC 17025", testMethods: "HPLC, ICP-MS, PCR, USP <85>", contaminants: "Heavy metals (ICP-MS), sterility (PCR), endotoxin (USP <85>)" },
  },
  "ez-peptides": {
    name: "EZ Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://ezpeptides.com/?ref=nldbbgvs",
    detailPage: "/coupons/ez-peptides",
    facts: { coa: "per-batch", labName: "Janoshik", testMethods: "HPLC, LC-MS" },
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
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://glacieraminos.shop/?ref=cknlhxrm",
    detailPage: "/coupons/glacier-aminos",
    facts: { coa: "per-batch", labName: "Forever Young Pharmacy, Freedom Diagnostics, Kovera Labs", testMethods: "RP-HPLC, LC-MS", contaminants: "Endotoxin; sterility + heavy metals on Kovera lots", coldChain: true },
    editorsPick: true,
  },
  "ignite-peptides": {
    name: "Ignite Peptides",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://ignitepeptides.com/ref/profpeptide/",
    detailPage: "/coupons/ignite-peptides",
    facts: { coa: "per-product", purityStandard: "99%+", labName: "Janoshik, Freedom Diagnostics", testMethods: "HPLC, LC-MS" },
  },
  // Onboarded 2026-08 (GoAffPro; PROFPEPTIDE bound, 15% verified in-cart — 20% is the commission,
  // NOT the customer discount). Public COA library (10 of 24 have a published COA; rest "in
  // verification"/request). Split across TWO named labs, verified from the certs: Freedom
  // Diagnostics (BPC/GHK/GLP-2T/GLP-3R/MOTS-C/TB-500/Tesamorelin; signed Alex Johnson; searchable
  // code) and Krause Analytical LLC, Austin TX (GLP-1S=Semaglutide, MT-1, MT-2; signed Mark C.
  // Krause). Certs print ONLY purity (RP-HPLC-UV) + identity (LC-MS) + net content — NOT the
  // endotoxin/microbial/sterility/ISO-7 the homepage claims, so those stay attributed (no
  // facts.contaminants). No accreditation printed. coa: library.
  "improved-peptides": {
    name: "Improved Peptides",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://improvedpeptides.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/improved-peptides",
    facts: { purityStandard: "≥99%", coa: "library", labName: "Freedom Diagnostics, Krause Analytical", testMethods: "RP-HPLC-UV, LC-MS" },
  },
  "la-peptides": {
    name: "LA Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://lapeptides.net/?ref=xocwamxz",
    detailPage: "/coupons/la-peptides",
    facts: { coa: "per-batch", labName: "Bioviridian", purityStandard: "99%+", testMethods: "RP-HPLC, LC-MS", contaminants: "Endotoxin (USP <85>), heavy metals (USP <232>), sterility (USP <71>)" },
  },
  "mile-high-compounds": {
    name: "Mile High Compounds",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://milehighcompounds.is/?ref=profpeptide",
    detailPage: "/coupons/mile-high-compounds",
    // Job-2 cert pass (Aug 2026): real, public, batch-versioned COA library (70+ products, each
    // "View COA" + N previous batches). Two named labs, verified from certs — Chromate (most;
    // RP-HPLC-UV identity/quantity/purity; QR verify at chromate.org/verify; signed Lucas Weber;
    // NO accreditation) and Vanguard Laboratory, Olympia WA (e.g. Sermorelin; HPLC-UV/VIS purity +
    // quantity; ISO 17025:2017 / A2LA #6377.01.01 PRINTED; signed Dustin Newman). Certs print
    // identity + purity + content only — NOT the endotoxin/sterility/heavy-metals the "8x" claim
    // implies (attributed, not in facts). Identity is HPLC spec-match, not MS. Coded GLP names
    // decode from CAS: MHC-2 TRZ=Tirzepatide, MHC-3 RT=Retatrutide, MHC-1 SM=Semaglutide.
    facts: { coa: "library", labName: "Chromate, Vanguard Laboratory", purityStandard: "99%+", testMethods: "RP-HPLC-UV" },
  },
  "modern-aminos": {
    name: "Modern Aminos",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://modernaminos.com/?ref=profpeptide",
    detailPage: "/coupons/modern-aminos",
    facts: { coa: "login-gated", labName: "Vanguard Laboratory, Freedom Diagnostics, TrustPointe Analytics", labAccreditation: "ISO/IEC 17025", testMethods: "HPLC-UV/VIS, LC-MS/MS", contaminants: "Endotoxin (USP <85>)" },
  },
  "nextgen-peptides": {
    name: "NextGen Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://ngpeptide.com/?ref=fysuzocl",
    detailPage: "/coupons/nextgen-peptides",
    facts: { coa: "library", labName: "ILS Laboratories", labAccreditation: "ISO/IEC 17025", purityStandard: "≥99%", testMethods: "HPLC, ICP-MS", contaminants: "Heavy metals (ICP-MS, USP <233>), endotoxin (USP <85>), sterility (PCR), fentanyl screen" },
  },
  "peptidology": {
    name: "Peptidology",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://peptidology.co/?ref=mkmhgxqi",
    detailPage: "/coupons/peptidology",
    facts: { coa: "per-batch", labName: "Vanguard Laboratory, Eagle Analytical Services", labAccreditation: "ISO/IEC 17025", testMethods: "HPLC-UV/VIS, ICP-MS, GC-MS", contaminants: "Heavy metals (ICP-MS), endotoxin (LAL), sterility (USP <71> + ScanRDI), residual solvents (GC-MS), TFA" },
  },
  "integrative-peptides": {
    name: "Integrative Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://integrativepeptides.com/affiliate/profpeptide/",
    detailPage: "/coupons/integrative-peptides",
    facts: { purityStandard: "≥99%" },
  },
  // Legendary publishes ONLY a generic "every product is third-party tested" claim — no COA
  // library, no named/accredited lab, and no vendor-stated purity standard (the "99% pure" on
  // their site is a customer review, not a company spec). Mark has an email describing a six-
  // point panel + fentanyl screening, but NONE of that is public — do NOT add it to facts or
  // copy. Facts intentionally omitted. Note the www host and the ?affiliate= param.
  "legendary-peptides": {
    name: "Legendary Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://www.legendarypeptides.com/?affiliate=PROFPEPTIDE",
    detailPage: "/coupons/legendary-peptides",
    facts: { coa: "per-product", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS", contaminants: "Endotoxin (USP <85>); recent lots: microbial (PCR), fentanyl" },
  },
  "limitless-biotech": {
    name: "Limitless Biotech",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://www.limitlesslifenootropics.com/?_ef_transaction_id=&oid=1&affid=10477",
    detailPage: "/coupons/limitless-biotech",
    facts: { coa: "on-request", purityStandard: "≥98.5%", labClaim: "three independent labs", testMethods: "HPLC, LC-MS", contaminants: "Sterility, endotoxin, contaminants" },
  },
  "midwest-peptide": {
    name: "Midwest Peptide",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://midwestpeptide.com?ref=PROFPEPTIDE",
    detailPage: "/coupons/midwest-peptide",
    facts: { coa: "per-batch", labName: "ILS Laboratories, Freedom Diagnostics", labAccreditation: "ISO/IEC 17025", purityStandard: "≥99%", testMethods: "RP-HPLC-UV, mass spectrometry", contaminants: "Heavy metals (ICP-MS, USP <233>), endotoxin (LAL), sterility (PCR), fentanyl screen" },
  },
  "ion-peptide": {
    name: "Ion Peptide",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://ionpeptide.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/ion-peptide",
    // Onboarded 2026-08 (VETTED PASS): domain 2025-08-11 (~1yr), public catalog + prices (woo Store
    // API), public 195-item per-lot COA LIBRARY at /lab-results/ from Kovera Labs — verified from a read
    // cert (KVR-2026-BA8308): purity RP-HPLC + identity LC-MS + endotoxin + microbial + heavy metals +
    // 3-vial conformity, QR -> koveralabs.com/verify (the LAB, not ionpeptide) + per-record access code.
    // No ISO/A2LA accreditation printed -> none stated. Kovera not new to PP (amino-x, glacier-aminos).
    // ⚠️ Cart/checkout is behind a "Wholesale Research Supply Portal" account login, so the in-cart code
    // AND the combined ?apply-promo=profpeptide&ref= URL are UNVERIFIED — using the plain ?ref= link
    // until Mark confirms logged-in (see ONBOARDING_BACKLOG). Coded GLPs DECODED via Mark's first-hand
    // confirmation (2026-08): ION-1S=Semaglutide, ION-2T=Tirzepatide, ION-3R=Retatrutide. Evidence tier =
    // first-hand confirmation, NOT a certificate (same treatment as Real's GLYCON-X vial label); a future
    // price-pull decoder should carry this forward.
    facts: { coa: "library", purityStandard: "99%+", labName: "Kovera Labs", testMethods: "RP-HPLC, LC-MS", contaminants: "Endotoxin (LAL, ≤0.5 EU/mL), microbial sterility, heavy metals (As/Cd/Pb/Hg)" },
  },
  "oasis-labs": {
    name: "Oasis Labs",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://myoasislabs.com/?sld=profpeptide",
    detailPage: "/coupons/oasis-labs",
    facts: { coa: "per-batch", purityStandard: "99%", labName: "Bioviridian, BioRegen", testMethods: "RP-HPLC, MALDI-MS, LC-MS", coldChain: true },
  },
  // Restored 2026-08 after Particle issued a working code. Prices are in EUR — verified at
  // checkout: €30.89 with the PROFPEPTIDE 10% discount of €3.09, so the code works end to end.
  // Same non-USD currency class as NOVA (AED). Coupon-page-only for TWO independent reasons:
  // PrestaShop with no price-pull adapter, AND non-USD pricing that blocks /prices rows until the
  // currency decision is made. Region is EU: ships from Slovakia (verified on their shipping page).
  "particle-peptides": {
    name: "Particle Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "EU",
    url: "https://particlepeptides.com/en/?refs=18075",
    detailPage: "/coupons/particle-peptides",
    // Job-2 cert pass: public COA Vault (~86 docs). Every reviewed COA (batches 2026302 May,
    // 2026314 Jun, 2026336 Jul 2026) issued by Liquilabs s.r.o., Zlatníky-Hodkovice, Czechia —
    // a SINGLE named third-party lab, not the "multiple laboratories" the page claimed. 12-page
    // per-batch certs w/ QR verify (base.liquilabs.cz). No accreditation printed on the COA (the
    // ISO 9001/13485 the page cites is the MANUFACTURER's, so labAccreditation stays absent).
    // Detection is HPLC-UV with spectral + RT identity — NOT mass spec; don't claim MS.
    facts: { coa: "library", labName: "Liquilabs", testMethods: "RP-HPLC-UV; identity by UV spectrum + retention time", contaminants: "Microbial (USP <61>/Ph. Eur. 2.6.12), endotoxin (USP <85>/Ph. Eur. 2.6.14), heavy metals (7 elements, USP <232>/Ph. Eur. 5.20)" },
  },
  "peptide-partners": {
    name: "Peptide Partners",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://peptide.partners/ref/48/",
    detailPage: "/coupons/peptide-partners",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "TrustPointe, Kovera, BioRegen", testMethods: "RP-HPLC, LC-MS, ICP, USP <85>", contaminants: "Heavy metals (ICP), endotoxin (USP <85>), sterility (PCR)" },
    editorsPick: true,
  },
  "peptide-giants": {
    name: "Peptide Giants",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://peptidegiants.com/?ref=urunwnog",
    detailPage: "/coupons/peptide-giants",
    facts: { coa: "library", labName: "Janoshik", testMethods: "HPLC" },
  },
  "purerx-peptides": {
    name: "PureRx Peptides",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://purerxpeptides.com/?ref=urunwnog",
    detailPage: "/coupons/purerx-peptides",
    facts: { labName: "Accumark Labs, Forever Young Analytics", testMethods: "HPLC" },
  },
  "peptides-gg": {
    name: "Peptides.gg",
    code: "PROF15",
    discount: "15% off",
    region: "US",
    url: "https://peptides.gg/?coupon=prof15",
    detailPage: "/coupons/peptides-gg",
    facts: { coa: "per-batch", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS" },
  },
  purerawz: {
    name: "PureRawz",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://purerawz.co/?ref=1901",
    detailPage: "/coupons/purerawz",
    facts: { coa: "per-batch", labName: "MZ Biolabs", purityStandard: "99%", testMethods: "HPLC-UV, mass spec" },
  },
  "purity-peptides": {
    name: "Purity Peptides",
    code: "PROF15",
    discount: "15% off",
    region: "CA",
    url: "https://puritypeptides.is/?sld=PROF15",
    detailPage: "/coupons/purity-peptides",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "MDX Biolabs, Vanguard Laboratory", testMethods: "HPLC, mass spec", contaminants: "Endotoxin (LAL)" },
  },
  "real-peptides": {
    name: "Real Peptides",
    code: "PROFPEPTIDE",
    discount: "20% off",
    region: "US",
    url: "https://www.realpeptides.co/ref/688/",
    detailPage: "/coupons/real-peptides",
    facts: { coa: "per-product", labName: "Freedom Diagnostics", purityStandard: "≥99%", testMethods: "HPLC-UV, LC-MS", contaminants: "Endotoxin (USP <85>)" },
  },
  "royal-peptides": {
    name: "Royal Peptides",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://royal-peptides.com/?ref=urunwnog",
    detailPage: "/coupons/royal-peptides",
    facts: { coa: "per-batch", labName: "Janoshik", purityStandard: "99%+", testMethods: "HPLC", labClaim: "cGMP/ISO manufacturing (vendor-stated)" },
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
    facts: { purityStandard: "≥98%", coa: "per-batch", labName: "MZ BioLabs", testMethods: "HPLC, mass spec" },
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
    // Job-2 cert pass (Aug 2026): NO COAs published online — product pages carry only a
    // "Third Party Tested" badge, name no lab, and publish no certificate. The prior labName
    // "Janoshik, Freedom Diagnostics" and purityStandard "99%+" appear NOWHERE on the site —
    // both phantoms, removed. (Freedom Diagnostics ledger: this was an unsupported claim, so
    // treasure-coast does NOT belong to the Freedom concentration.) coa: on-request.
    facts: { coa: "on-request" },
  },
  "valkyrie-peptides": {
    name: "Valkyrie Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://valkyriepeps.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/valkyrie-peptides",
    // Onboarded Aug 2026 from TWO real per-lot certs (Horizon Analytical, US) for ONE lot (VP-7672189)
    // of ONE compound (Retatrutide): purity 99.33% by UPLC/MS (mass-spec identity, CAS 2381089-83-2 /
    // C221H342N46O68 / PubChem 171390338) + endotoxin <0.05 EU/mL on the matched -E lot. Signed Aleksey
    // Yevtodiyenko PhD. NO accreditation printed (do NOT set labAccreditation). Heavy-metals + microbial
    // are site-claimed but NOT on the certs — attributed in prose, NOT in facts.contaminants. Store went
    // hard login-walled 2026-08-09: no price pull, no cart test, COAs login-gated. Payments Zelle/Cash
    // App/Venmo only (no cards). coupon bound to the account. Cert Identity field reads valkyriepeptides.com
    // vs the valkyriepeps.com store — a second same-operation signal (Trustpilot was the first); not proof.
    facts: { coa: "login-gated", labName: "Horizon Analytical", testMethods: "UPLC-MS", contaminants: "Endotoxin (<0.05 EU/mL)" },
  },
  "vital-core-research": {
    name: "Vital Core Research",
    code: "PROF20",
    discount: "20% off",
    region: "US",
    url: "https://vitalcoreresearch.com/?ref=nbwnvhnu",
    detailPage: "/coupons/vital-core-research",
    // Cert pass (Aug 2026): 3 real per-lot certs from Vanguard Laboratory, Olympia WA — ISO 17025:2017 /
    // A2LA #6377.01.01 PRINTED; signed Dustin Newman (Lab Director) + Tori Johnson (Ops Mgr). TWO panels
    // only, both HPLC-UV/VIS: chromatographic purity (99.19–99.66% observed) + quantity. NOT identity/MS,
    // endotoxin, heavy-metals, sterility, or microbial — do not imply them. Certs self-limit (Vanguard did
    // not observe sampling, cannot confirm authenticity/lot representativeness). All 3 dated 2025.
    facts: { coa: "per-product", labName: "Vanguard Laboratory", labAccreditation: "ISO/IEC 17025:2017 (A2LA #6377.01.01)", testMethods: "HPLC-UV/VIS" },
  },
  // Brand is "NOVA Labs"; storefront domain is nova-biolabs.com — both intentional, do NOT
  // "fix" the name to match the domain. First Middle East / GCC vendor: region "AE" (UAE-based),
  // which required adding AE to the region union + regionFlag + REGION_WORD. Affiliate commission
  // is denominated in AED on their dashboard — a payout/FX consideration unique to this vendor;
  // NEVER put commission or its currency on the page.
  "nova-labs": {
    name: "NOVA Labs",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "AE",
    url: "https://www.nova-biolabs.com/?ref=kbandvut",
    detailPage: "/coupons/nova-labs",
    facts: { purityStandard: "≥99%", coa: "per-batch", labName: "Janoshik", testMethods: "HPLC", coldChain: true },
  },
  "nura-peptide": {
    name: "Nura Peptide",
    code: "PROFPEPTIDE15",
    discount: "15% off",
    region: "US",
    url: "https://nurapeptide.com/?ref=profpeptide",
    detailPage: "/coupons/nura-peptide",
    facts: { coa: "library", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS", contaminants: "Endotoxin (USP <85>), microbial (PCR)" },
  },
  // 99 Purity's sources disagree on the discount: the welcome email says 10% off, the
  // affiliate dashboard header says 15% OFF (same code, now PROFPEPTIDE — was PROFPEPTIDE10). Mark's call is to
  // publish 10% — understating is safe, overstating is a broken promise. Do NOT "correct"
  // this to 15% without new evidence. Affiliate URL is PATH-BASED (/ref/profpeptide).
  "99-purity-peptides": {
    name: "99 Purity Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://99puritypeptides.com/ref/profpeptide",
    detailPage: "/coupons/99-purity-peptides",
    facts: { purityStandard: "≥99%", coa: "per-batch", labName: "Eagle Analytical Services", testMethods: "USP <621> potency", contaminants: "Sterility (ScanRDI), endotoxin (USP <85>)" },
  },
  // Licensed Peptides originally issued a SHARED code (Affiliate5) handed to EVERY affiliate;
  // they swapped it to the unique PROFPEPTIDE on request. If it ever reverts to a shared code,
  // code-based attribution breaks completely for this vendor (every affiliate's buyers collide
  // on one code) — only the path-based /ref/60815/ link would still attribute. Discount is 5%
  // (ties BioPure as the lowest on the roster) — do NOT round it up. Affiliate URL is
  // PATH-BASED (/ref/60815/), same shape as 99-purity and peptide-partners.
  "licensed-peptides": {
    name: "Licensed Peptides",
    code: "PROFPEPTIDE",
    discount: "5% off",
    region: "US",
    url: "https://licensedpeptides.com/ref/60815/",
    detailPage: "/coupons/licensed-peptides",
    facts: { coa: "per-batch", labName: "Vanguard Laboratory", labAccreditation: "ISO/IEC 17025:2017", purityStandard: "99%+", testMethods: "HPLC-UV/VIS", contaminants: "Heavy metals (ICP-MS), endotoxin (LAL), sterility (USP <71>), residual solvents (GC-MS), TFA (ion chromatography)" },
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

/**
 * Active vendors with a COMPLETED certificate pass — a named third-party lab recorded in
 * `facts.labName` (PP read an actual certificate). Distinct from `facts.labClaim`, which is a
 * lab the vendor NAMES but whose certificate PP has not seen (attributed, not counted here).
 * Derived, never hardcoded — the /methodology page cites this so the figure can't rot as passes
 * are added. A conservative floor: a few vendors had a COA read during coded-name decoding
 * without a `facts.labName`, so the true number of certificates opened is at least this.
 */
export const certVerifiedVendorCount = Object.values(vendors).filter(
  (v) => !v.retired && v.facts?.labName,
).length;

const REGION_WORD: Record<Vendor["region"], string> = {
  US: "US-based",
  CA: "Canada-based",
  UK: "UK-based",
  EU: "EU-based",
  IS: "Iceland-based",
  AE: "UAE-based",
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
