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
  /** One-line testing/COA note shown under the vendor's card in the profile VendorHighlightBlock.
   *  Single source (was hardcoded per-profile in each `highlights` array, which drifted). Keep it
   *  card-width-safe (~2 short lines) and factual — no accreditation Capstone doesn't hold, no
   *  purity figure Nura doesn't publish.
   *
   *  DELIBERATELY ABSENT on ascension-peptides, ez-peptides, and peptide-partners — do NOT add one.
   *  Their profile notes are PER-COMPOUND on purpose: they encode the compound's store-specific
   *  product name so a buyer can find it (ascension "Sold as R-10 / R-30" on retatrutide vs "Sold as
   *  T-10 / T-30" on tirzepatide; peptide-partners "Sold as 'GLP-3 Retatrutide'"; ez-peptides lists
   *  the compounds each SKU actually stocks). A single registry note can't vary by compound, so
   *  collapsing them into one blockNote would destroy the exact identifier a buyer needs. They
   *  intentionally stay on per-profile `highlights` notes. */
  blockNote?: string;
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
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    // ⚠️ ?ref=PROF15 is Aero's GoAffPro affiliate IDENTIFIER, not the coupon code —
    // it stays as-is even though the checkout code changed PROFPEPTIDE15 → PROFPEPTIDE.
    url: "https://aeropeptides.com/?ref=PROF15",
    detailPage: "/coupons/aero-peptides",
    facts: { purityStandard: "≥98%", coa: "on-request" },
    // Drift-resolved 2026-08-18: chose "≥98% purity" over "Third-party ISO-lab tested". Aero's COAs
    // report ≥98% area-percent purity (a concrete, checkable figure, mirrored in facts.purityStandard);
    // the ISO claim rests on an UNNAMED external lab we haven't verified — no labAccreditation here.
    blockNote: "≥98% purity · COAs on request",
  },
  // Testing read 2026-08-30: Freedom Diagnostics. Search codes from Alera's own certificates
  // (Aler2603030070, Aler2605140255) resolve on the LAB's public index, not on Alera's site; the
  // index shows 26 certificates across three submission dates (Mar 3, Mar 24, May 14 2026). The
  // cert read: lot 0002 AOD-9604, 99.36%, panel = HPLC-UV purity + MS identity + net content, no
  // contaminant panel — so no `contaminants`, and Freedom prints no accreditation on these, so
  // `labAccreditation` stays empty (the capstone/Accumark shape).
  // ⚠️ PUBLISHING gap, not a testing gap: the product pages publish only the March lot-0001 certs
  // while the lab index holds 26. The page states what the index shows, attributed, and does not
  // claim per-lot publishing they don't do — `coa: "library"`, never "per-batch".
  "alera-research": {
    name: "Alera Research",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://www.aleraresearch.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/alera-research",
    blockNote: "Freedom Diagnostics \u2014 HPLC-UV + MS",
    facts: { coa: "library", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS", purityStandard: "99%+" },
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
    url: "https://alpha-peptides.io/aff/850/",
    detailPage: "/coupons/alpha-peptides",
    facts: { coa: "library", labAccreditation: "ISO/IEC 17025" },
  },
  "athena-peptides": {
    name: "Athena Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    // GoAffPro program (accepted PP). ?ref=PROFPEPTIDE per Mark's portal read; coupon code issued
    // lowercase ('profpeptide') but rendered uppercase for roster consistency (Mark's call, 2026-08-27
    // — codes are case-insensitive at checkout). Customer discount is 10% — the 15% figure is the
    // affiliate COMMISSION, never the card/H1. COAs live per-product-page (their architecture, no
    // central library): 2025 certs = Freedom Diagnostics (FreedomDiagnosticsTesting.com), 2026 certs
    // = Bioviridian Inc (Bryan/College Station TX, bioviridians.com/coa-search.html — the current lab).
    // Both lab-side verifiable; certs carry "Lot: NA" with a QC/search code (vial label <-> chromatogram
    // <-> portal) as traceability. GLP line coded GLP-1 S / GLP-2 T / GLP-3 R (GLP-2 T = Tirzepatide,
    // confirmed on a Bioviridian cert). Domain footprint to Jul 2020.
    url: "https://athenapeptides.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/athena-peptides",
    facts: { coa: "per-product", labName: "Freedom Diagnostics, Bioviridian Inc", testMethods: "RP-HPLC (214nm), LC-MS/MS, MALDI-MS" },
    blockNote: "Per-product COAs, lab-side verification (Freedom Diagnostics / Bioviridian)",
  },
  "order-my-peptides": {
    name: "Order My Peptides",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    // GoAffPro program (accepted PP). Code-priority attribution — issued lowercase ('profpeptide')
    // but rendered uppercase for roster consistency (Mark's call, 2026-08-27 — case-insensitive at
    // checkout); plain domain used. Operated by New Life Health Labs LLC. Per-batch
    // COA library at /coas tested by Accumark Labs (HPLC-DAD identity/quantity/purity); each cert
    // carries a QR + sample code that resolves on the lab's own site (accumarklabs.com).
    url: "https://ordermypeptides.com/",
    detailPage: "/coupons/order-my-peptides",
    facts: { coa: "library", labName: "Accumark Labs", testMethods: "HPLC-DAD (identity, quantity, purity)" },
    blockNote: "Per-batch COAs, QR-verifiable at the lab (Accumark)",
  },
  "ameano-peptides": {
    name: "Ameano Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://ameanopeptides.com/?ref=hmvyvxhr",
    detailPage: "/coupons/ameano-peptides",
    facts: { purityStandard: "≥99%", coa: "per-product", labName: "Janoshik", testMethods: "HPLC, LC-MS" },
    blockNote: "Published per-product COAs · third-party verified",
  },
  "amino-club": {
    name: "Amino Club",
    code: "PROFPEPTIDE",
    // TEMPORARY BOOST 35% (vendor-confirmed), runs through Mon Aug 31 2026 11:59 PM EDT,
    // then REVERT to "20% off". No dated-expiry support in this schema, so the revert is
    // logged in scripts/price-pull/skip-ledger.json (_pending_reverts) for the Aug 31
    // weekend run. Every rate surface derives from this string — reverting here reverts all.
    discount: "35% off",
    region: "US",
    url: "https://aminoclub.com?utm_source=affiliate_marketing&code=PROFPEPTIDE",
    detailPage: "/coupons/amino-club",
    facts: { purityStandard: "≥99%", coa: "per-batch", labClaim: "ISO 17025 accredited laboratories", labAccreditation: "ISO/IEC 17025", testMethods: "HPLC, ICP-MS, PCR, USP <85>", contaminants: "Heavy metals, sterility, endotoxin" },
    blockNote: "ISO 17025 tested · batch COAs",
    editorsPick: true,
  },
  "amino-x": {
    name: "Amino X",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://aminox.net/?coupon=PROFPEPTIDE",
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
    // blockNote sourced 2026-09-01 from this vendor's own /coupons/ascension-peptides page:
    //   "Ascension states a 99%+ purity standard for its catalog, and every COA is downloadable"
    blockNote: "Public COAs \u00b7 vendor-stated 99%+",
    facts: { coa: "per-batch", purityStandard: "99%+", labName: "MZ BioLabs", testMethods: "HPLC-UV, HPLC-MS" },
  },
  "biolongevity-labs": {
    name: "Biolongevity Labs",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://go.biolongevitylabs.com/aff_c?offer_id=1&aff_id=2702",
    detailPage: "/coupons/biolongevity-labs",
    facts: { coa: "per-batch", labName: "BioRegen", purityStandard: "99%+", testMethods: "LC-MS with UV" },
    blockNote: "Per-batch COAs",
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
  "biocollex": {
    name: "BioCollex",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://biocollexresearch.com/?ref=profpeptidehq",
    detailPage: "/coupons/biocollex",
    // blockNote sourced 2026-09-01 from this vendor's own /coupons/biocollex page:
    //   "All products are independently tested to a 99% purity standard by Freedom Diagnostics"
    blockNote: "Freedom Diagnostics \u00b7 99% purity",
    facts: { coa: "per-batch", purityStandard: "99%", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS" },
  },
  // Onboarded Aug 2026. WooCommerce; catalog + per-vial prices public (no account gate). COAs are
  // published PRE-PURCHASE in a per-lot library (/lab-testing-coas/) by Accumark Labs (a DBA of
  // Valence Analytical LLC; Anaheim CA; Lab ID ACL-001), independently verifiable by an AccuVerify
  // code on the LAB's own domain (accumarklabs.com/accuverify) — verified first-hand (Semaglutide
  // lot 1045 = 99.56%; Retatrutide 30 mg lot 1051 = 99.52%). labName is COA-VERIFIED, so it goes in
  // labName (not labClaim). Accumark prints NO laboratory accreditation on its certificates, so
  // labAccreditation stays EMPTY — do NOT state one. The Accumark CORE PANEL covers identity, purity
  // and quantity only (no endotoxin / heavy-metal / sterility), so contaminants stays EMPTY.
  // purityStandard is the certificate's spec line; measured lots span 98.2%–99.92%. coa: library.
  // Code PROFPEPTIDE (10% off) is newly issued with no recorded conversions yet → GRACED tier
  // (attribution.ts) by the same standard as nura-peptide, but NOT set here pending Mark's call.
  "capstone-peptides": {
    name: "Capstone Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://capstonepeptides.com/",
    detailPage: "/coupons/capstone-peptides",
    editorsPick: true,
    facts: { purityStandard: "≥98% by HPLC", coa: "library", labName: "Accumark Labs", testMethods: "HPLC" },
    blockNote: "Accumark Labs · digital COAs",
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
    // blockNote sourced 2026-09-01 from this vendor's own /coupons/ez-peptides page:
    //   "Every EZ Peptides batch is third-party tested by Janoshik, an independent analytical laboratory"
    blockNote: "Janoshik-tested \u00b7 COA per batch",
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
    // Drift-resolved 2026-08-18: chose "Batch-traceable COAs" over the generic "Batch COAs". Glacier
    // publishes a batch-searchable COA library — each cert ties to a batch number, with Kovera /verify
    // and Freedom Diagnostics search codes — so traceability is the verified distinction, not just COAs.
    blockNote: "Batch-traceable COAs · cold-chain shipping",
  },
  "hydro-research": {
    name: "Hydro Research",
    code: "PROFPEPTIDE",
    discount: "20% off",
    region: "US",
    // Standing affiliate code (welcome email): PROFPEPTIDE = 20% off, permanent. SliceWP,
    // code-priority attribution (the code credits regardless of link) — so the plain domain is used
    // (no SliceWP ref link supplied). Current evergreen sale codes live in the page's sale section,
    // NOT here: PROFPEPTIDE50 (50% off GLPs), PROFPEPTIDE25 (25% off everything else).
    url: "https://hydroresearchpeptides.com/",
    detailPage: "/coupons/hydro-research",
    facts: { coa: "library", labName: "Janoshik, Chromate Labs, ILS-Lab", testMethods: "HPLC (purity), LC-MS/identity", contaminants: "endotoxin, heavy metals, sterility" },
    blockNote: "Portal-verifiable COAs (Janoshik/Chromate)",
  },
  "paradigm-peptides": {
    name: "Paradigm Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    // GoAffPro (loader confirmed in source). Ref link first-hand from Mark's GoAffPro dashboard.
    // Gate B basis is Finnrick's independent blind-testing program (no self-published COAs on the
    // Wix storefront) — #7 of 307 on Finnrick, verified live 2026-08-26. This is the hyphenated
    // paradigm-peptide.com, which disavows the former (unrelated, defunct) paradigmpeptides.com;
    // Finnrick's domain verification + post-2025 test history are specific to this site.
    url: "https://www.paradigm-peptide.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/paradigm-peptides",
    blockNote: "#7 of 307 on Finnrick's independent testing (Aug 2026)",
  },
  "ignite-peptides": {
    name: "Ignite Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://ignitepeptides.com/ref/profpeptide/",
    detailPage: "/coupons/ignite-peptides",
    // blockNote sourced 2026-09-01 from this vendor's own /coupons/ignite-peptides page:
    //   "The published Certificates of Analysis are issued by two independent labs: Janoshik"
    blockNote: "Two independent labs \u00b7 per-product COAs",
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
  // Testing read 2026-08-30: TWO labs. Chromate COA #33551, client "MogLabs.bio", batch BPC002 —
  // purity 98.353% against a >98% spec, PLUS sterility USP <1223> BacT/ALERT (Pass), endotoxin by
  // kinetic chromogenic LAL (<0.0945 EU/mg) and metals <50 ppb. The access code is printed in full
  // with a QR and VERIFIES against Chromate's own records. Second lab: Janoshik #109342, same client.
  // Chromate prints no accreditation on the certificate, so `labAccreditation` stays empty.
  // 🔴 Their COA library exposes PREVIOUS lots as well as the current one — the best lot-history
  // transparency of any vendor screened. Nobody else on the roster offers it.
  // ⚠️ Latest evidence is ~April 2026 (~4 months old at the time of the read). The page DATES the
  // testing rather than writing it as current-to-the-month.
  "moglabs": {
    name: "Moglabs",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://moglabs.bio/?ref=profpeptide",
    detailPage: "/coupons/moglabs",
    blockNote: "Chromate + Janoshik \u2014 sterility, endotoxin, metals",
    facts: {
      coa: "library",
      labName: "Chromate",
      testMethods: "HPLC purity, sterility USP <1223> (BacT/ALERT), kinetic chromogenic LAL endotoxin, metals",
      contaminants: "Sterility (USP <1223> BacT/ALERT), endotoxin (kinetic chromogenic LAL), metals",
      purityStandard: "98%+",
    },
  },
  "modern-aminos": {
    name: "Modern Aminos",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://modernaminos.com/?ref=profpeptide",
    detailPage: "/coupons/modern-aminos",
    facts: { coa: "login-gated", labName: "Vanguard Laboratory, Freedom Diagnostics, TrustPointe Analytics", labAccreditation: "ISO/IEC 17025", testMethods: "HPLC-UV/VIS, LC-MS/MS", contaminants: "Endotoxin (USP <85>)" },
    blockNote: "ISO 17025 lab",
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
    blockNote: "ISO 17025 lab · batch COAs",
  },
  // Testing read 2026-08-31 (first-hand recon, this session): Freedom Diagnostics. IRON publishes a
  // COA library of 20 certificates. Each carries a Search Code, and the code resolves on the LAB's
  // OWN domain — coas.freedomdiagnosticstesting.com/<Code>.pdf — not only on IRON's site. Verified
  // end-to-end: IRON2510230085 returns a real PDF whose contents match the file IRON publishes
  // exactly (Cagrilintide 10MG, lot IR-2510-005, 11.66 mg net, 99.834%). That lab-side
  // resolvability is the Omega1 standard and it is the reason this vendor clears the gate.
  // PANEL (what the certificates actually run): identity, purity, net peptide content, appearance,
  // by HPLC-UV coupled with mass spectrometry. No contaminant panel, so no `contaminants`; Freedom
  // prints no accreditation on these, so `labAccreditation` stays empty — same shape as alera and
  // capstone/Accumark.
  // 🔴 NO `purityStandard`. The certificates report OBSERVED results (99.229–99.834% on the lots
  // read), and IRON publishes no purity SPEC. A spec is a different claim from a result, and the
  // runbook's rule is to carry only what the certs show — so this field is deliberately absent.
  // ⚠️ `coa: "library"`, never "per-batch": 20 published certificates against a far larger catalog.
  // Vendor claims NOT carried anywhere (cGMP facility, years in operation, endotoxin/LAL testing)
  // are unsupported by the certificates read and appear on no PP surface, asserted or attributed.
  // Storefront sits behind an account login wall — no PP copy implies otherwise.
  "iron-peptides": {
    name: "IRON Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://ironpeptides.is/?ref=PROFPEPTIDE",
    detailPage: "/coupons/iron-peptides",
    blockNote: "Freedom Diagnostics \u00b7 lab-verifiable COAs",
    facts: { coa: "library", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS" },
  },
  "integrative-peptides": {
    name: "Integrative Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://integrativepeptides.com/affiliate/profpeptide/",
    detailPage: "/coupons/integrative-peptides",
    facts: { purityStandard: "≥99%" },
    // Drift-resolved 2026-08-18: chose "Oral format" over "Oral capsules & spray". The coupon page
    // documents oral capsules/tablets and topical preparations but names no spray, so the specific
    // "spray" claim is unsupported; "Oral format" is the defensible generalization.
    blockNote: "Oral format — no injection needed",
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
    discount: "15% off",
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
  "forge-performance-co": {
    name: "Forge Performance Co",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    // Affiliate link /ref/34/ issued by Forge (2026-08-21) — www + trailing slash, used EXACTLY as
    // given (curl → 200, no redirect; NOT normalization-sensitive, so new URL() leaves it byte-identical).
    // 10% is the READER rate — the agreement's tiered commission + personal-discount ladder are NOT the
    // reader's rate and appear nowhere on the site.
    url: "https://www.forgeperformanceco.com/ref/34/",
    detailPage: "/coupons/forge-performance-co",
    // Onboarded 2026-08-21 (VETTED PASS, not account-gated): Texas LLC, Austin (3801 N Capital of Texas
    // Hwy, Ste E240-3348) — no ISO/A2LA accreditation printed, so none stated. Public catalog + per-vial
    // prices (machine-readable → price-pull viable, NOT skip-ledgered). Public batch-searchable COA
    // LIBRARY at /coas/ + /verify-a-coa/: certs from THREE independent US labs — Freedom Diagnostics,
    // ILS Laboratories, Kovera Labs — each confirmed on the LAB's own portal (report#/search/access
    // code), not on Forge's site; cap+crimp color keys to the matching certificate. Panel documented by
    // the library: HPLC purity, LC-MS identity, net content, heavy metals (ICP-MS), endotoxin USP <85>,
    // microbial (PCR), + a FENTANYL screen (LC-MS) — rare on the roster and the standout. Purity: site
    // claims all batches ≥99% (an aggregated RESULT, not a published minimum) → deliberately NOT carried
    // as a purityStandard fact. Coded GLP line DECODED first-hand by Mark (2026-08, affiliate account
    // access): GLP-RT = Retatrutide, GLP-TZ = Tirzepatide (decoders._forge; same standard as
    // ion-peptide/real-peptides). Price-pulled 2026-08-23 (15 singles + 4 blends; GLP-RT 2/3-Pack bulk
    // excluded, REBUILD/IGNITION/FPC-31 excluded — see the pull report). Research based on the site's
    // COA-library/verify pages, not a raw certificate PDF read.
    facts: { coa: "library", labName: "Freedom Diagnostics, ILS Laboratories, Kovera Labs", testMethods: "HPLC, LC-MS, ICP-MS, PCR, USP <85>", contaminants: "Heavy metals (ICP-MS), endotoxin (USP <85>), microbial sterility (PCR), fentanyl screen (LC-MS)" },
    blockNote: "Three-lab batch COAs · fentanyl-screened · verify on each lab's portal",
  },
  "oasis-labs": {
    name: "Oasis Labs",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://myoasislabs.com/?sld=profpeptide",
    detailPage: "/coupons/oasis-labs",
    // blockNote sourced 2026-09-01 from this vendor's own /coupons/oasis-labs page:
    //   "Recent batches are tested by Bioviridian \u2014 identity by MALDI-MS, purity by RP-HPLC (214 nm)"
    blockNote: "Bioviridian-tested \u00b7 verifiable COAs",
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
    // blockNote sourced 2026-09-01 from this vendor's own /coupons/peptide-partners page:
    //   "two independent labs that currently run in parallel, TrustPointe Analytics (Dorr, MI) and Kovera Labs"
    blockNote: "TrustPointe + Kovera \u00b7 endotoxin & sterility",
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
    blockNote: "Third-party tested by Janoshik",
  },
  "peptides-gg": {
    name: "Peptides.gg",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    // Code rebound PROF15 -> PROFPEPTIDE (vendor-confirmed to Mark, 2026-08-27). Same class as the
    // Royal/Ignite rebind (a147382f) — the drift risk is hardcoded FAQ literals on the coupon page
    // and the price-data doc, not just this entry.
    url: "https://peptides.gg/?coupon=profpeptide",
    detailPage: "/coupons/peptides-gg",
    facts: { coa: "per-batch", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS" },
    blockNote: "Per-batch COAs",
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
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://royal-peptides.com/?ref=urunwnog",
    detailPage: "/coupons/royal-peptides",
    facts: { coa: "per-batch", labName: "Janoshik", purityStandard: "99%+", testMethods: "HPLC", labClaim: "cGMP/ISO manufacturing (vendor-stated)" },
    blockNote: "cGMP/ISO labs · batch COAs",
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
    // CORRECTED on migration 2026-08-18: the per-profile note was "Per-batch COAs", but the Job-2
    // cert pass above found NO published COAs (badge only, coa: on-request) — that note was a phantom.
    // blockNote is the factual version matching facts, not a verbatim carry-over of the drifted note.
    blockNote: "Third-party tested · COA on request",
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
    // blockNote sourced 2026-09-01 from this vendor's own /coupons/vital-core-research page:
    //   "issued by Vanguard Laboratory of Olympia, Washington \u2014 an ISO/IEC 17025:2017 accredited laboratory"
    blockNote: "Vanguard Labs \u00b7 ISO 17025 accredited",
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
    code: "PROFPEPTIDE",
    discount: "25% off",
    region: "US",
    // ?ref=profpeptide is Nura's GoAffPro affiliate identifier — leave untouched.
    url: "https://nurapeptide.com/?ref=profpeptide",
    detailPage: "/coupons/nura-peptide",
    facts: { coa: "library", labName: "Freedom Diagnostics", testMethods: "HPLC-UV, LC-MS", contaminants: "Endotoxin (USP <85>), microbial (PCR)" },
    blockNote: "Freedom Diagnostics · verifiable COAs",
    editorsPick: true,
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
  // Testing read 2026-08-30: Freedom Diagnostics, client "Level Up Peptides", lot LU-LC10.A,
  // reported Aug 24 2026. This is the DEEPEST panel on the roster and it is why the vendor earns a
  // page at all: purity 99.85% (HPLC-UV), identity (LC-MS), net content, endotoxin USP <85> run in
  // DUPLICATE (both <=0.05 EU/mL), microbial PCR (no detectable microbial DNA), and elemental
  // impurities by ICP-MS (As/Cd/Pb/Hg). Lab index: 21 certificates across 7 dates, May 26 -> Aug 18
  // 2026 — an active cadence, not a one-off.
  // Freedom prints no accreditation on these certificates, so `labAccreditation` stays empty.
  // 🔴 STOREFRONT IS REGISTER-TO-BROWSE. Every HTML catalog path serves "Login Required — to browse
  // this website, please log in or create an account"; zero product tiles render. The coupon page
  // says so plainly rather than listing a catalog a reader cannot reach.
  "level-up-peptides": {
    name: "Level Up Peptides",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://level-up-peptides.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/level-up-peptides",
    blockNote: "Freedom Diagnostics \u2014 endotoxin + microbial + metals",
    facts: {
      coa: "login-gated",
      labName: "Freedom Diagnostics",
      testMethods: "HPLC-UV, LC-MS, ICP-MS, USP <85> endotoxin, microbial PCR",
      contaminants: "Endotoxin (USP <85>, in duplicate), microbial DNA (PCR), elemental impurities (ICP-MS: As, Cd, Pb, Hg)",
      purityStandard: "99%+",
    },
  },
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
 * Highest discount rate (percent) among ACTIVE vendors — powers the "up to N%" claim on the
 * /coupons hub so it can never advertise a rate no live vendor offers. Derived from the same
 * `discount` strings every surface reads, never typed by hand.
 */
export const maxActiveDiscountPct = Math.max(
  ...Object.values(vendors)
    .filter((v) => !v.retired)
    .map((v) => parseInt(v.discount.match(/(\d+)/)?.[1] ?? "0", 10)),
);

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
