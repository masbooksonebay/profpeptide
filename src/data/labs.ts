// LAB PROFILES — /labs/<slug> pilot. Pure content data, no imports (kept exec'able by
// gen-search-index.mjs / gen-chat-corpus.mjs, same discipline as faqQuestions.ts).
//
// Vendor matching is NOT stored here — it's derived at render/generation time from
// vendors.ts's `facts.labs`, matched by SLUG (see vendorsUsingLab in vendors.ts). Two vendors
// can print the same real lab's name differently on their own certificates (ILS Laboratories
// vs. Hydro Research's "ILS-Lab"), so the slug — not a name string kept here — is the join key.
//
// THE RULE THIS DATA FOLLOWS (report, never rank): every field below either states something
// Prof. Peptide independently verified (an accreditation-directory search, a byte-for-byte
// certificate comparison) or attributes a claim to the lab itself. Nothing here ranks one lab
// against another, and a clean negative accreditation search is phrased as "no record found,"
// never as a conclusion like "unaccredited."

export const ACCREDITATION_CHECKED_DATE = "September 5, 2026";

export type AccreditationBody = "A2LA" | "ANAB" | "PJLA";

export type AccreditationFinding =
  | { body: AccreditationBody; status: "no-record" }
  | { body: AccreditationBody; status: "unconfirmed-lead"; detail: string };

export interface LabPanelItem {
  name: string;
  method: string;
  measures: string;
}

export interface LabProfile {
  slug: string;
  name: string;
  location: string;
  identity: string;
  accreditationClaim: string;
  accreditationFindings: AccreditationFinding[];
  panel: LabPanelItem[];
  verification: {
    /** null when there's no separate portal — the CoA is fetched directly (Bioviridian). */
    portal: string | null;
    mechanics: string;
    limits: string;
  };
  cloneWarning?: string;
  limitations: string[];
  /** kind "lab" = the lab's own domain (rel="nofollow noopener" — cited as a source, no
   *  relationship, no reason to pass authority). kind "citation" = a third-party accreditation
   *  directory, rendered with this site's standard external-citation rel. */
  sources: { label: string; url: string; kind: "lab" | "citation" }[];
}

export const labs: LabProfile[] = [
  {
    slug: "ils-laboratories",
    name: "ILS Laboratories",
    location: "San Diego, CA",
    identity:
      "ILS Laboratories (ils-lab.com) is an analytical testing laboratory based in San Diego, CA. Its domain has been registered since 2018. It runs a digital client portal at portal.ils-lab.com, where every Certificate of Analysis it issues carries a QR code for verification, and it tests across several regulated markets beyond peptides — dietary supplements, cosmetics, raw materials and APIs, and California-licensed cannabis compliance testing.",
    accreditationClaim:
      `ILS Laboratories' own site states in several places that it is an "ISO 17025 Accredited Laboratory." As of ${ACCREDITATION_CHECKED_DATE}, that claim did not name a specific accrediting body or carry a certificate number anywhere on the page.`,
    accreditationFindings: [
      { body: "A2LA", status: "no-record" },
      { body: "ANAB", status: "no-record" },
      {
        body: "PJLA",
        status: "unconfirmed-lead",
        detail:
          `PJLA's directory lists "ILS Labs, Inc. dba Quality Cannabis Laboratories" (San Diego, CA; Certificate L25-631; Accreditation Number 112120; issued 08/22/2025, expires 08/31/2027). The city and the "ILS" name match, and ils-lab.com independently advertises California cannabis compliance testing alongside its peptide testing — consistent with a shared parent operating more than one testing line. But identity is not confirmed: the phone number on the PJLA record (619-750-6050) does not match the number ILS Laboratories publishes on its own Contact page ((619) 329-3999), and the PJLA listing carries no street address to check against the one ils-lab.com publishes (8222 Vickers St STE 106, San Diego, CA 92111). Prof. Peptide could not confirm whether this PJLA-accredited entity is the same business as the peptide-testing ILS Laboratories.`,
      },
    ],
    panel: [
      { name: "Purity & Quantitation", method: "HPLC", measures: "How much of the vial's contents is the intended peptide, by percentage" },
      { name: "Endotoxin Testing", method: "USP <85>, kinetic chromogenic LAL", measures: "Bacterial endotoxin contamination" },
      { name: "Rapid Sterility Screen", method: "DNA microarray", measures: "A broad panel of microbial contaminants; ILS states this method skips the 14-day incubation period a traditional USP <71> culture test requires" },
      { name: "Heavy Metals", method: "ICP-MS", measures: "Toxic elemental contaminants such as lead, arsenic, cadmium, and mercury" },
    ],
    verification: {
      portal: "portal.ils-lab.com",
      mechanics:
        "Every ILS Certificate of Analysis carries a QR code. Scanning it (or looking up the certificate's record at the portal) resolves to the result ILS has on file for that lot, confirming the certificate was genuinely issued by ILS and matches ILS's own record.",
      limits:
        "Portal verification confirms a certificate is authentic and matches ILS's own record for that lot — it does not confirm chain-of-custody between the sample ILS tested and the specific vial a customer received.",
    },
    cloneWarning:
      "ILS Laboratories' report template has itself been cloned: certificates branded \"Great Lake Labs,\" issued by the vendor Viper Peptides, were built on a fabricated lab identity using a layout that closely mirrors ILS's genuine report format. A report that looks like an ILS certificate is not evidence it came from ILS — only checking the portal is.",
    limitations: [
      "Prof. Peptide has not independently confirmed ILS's ISO 17025 claim against any accrediting body's own directory — see Accreditation above.",
      "Prof. Peptide verifies through the same public portal a reader would use, and has not visited ILS's laboratory or observed testing directly.",
      "Vendor certificates print this lab's name inconsistently: most PP-listed vendors print \"ILS Laboratories,\" but Hydro Research's certificates print \"ILS-Lab.\" Both refer to the same lab.",
    ],
    sources: [
      { label: "ils-lab.com", url: "https://ils-lab.com", kind: "lab" },
      { label: "portal.ils-lab.com", url: "https://portal.ils-lab.com", kind: "lab" },
      { label: "A2LA accredited-organization search", url: "https://search.a2la.org/", kind: "citation" },
      { label: "ANAB accredited-organization search", url: "https://search.anab.org/", kind: "citation" },
      { label: "PJLA accredited-organization search", url: "https://www.pjview.com/clients/pjl/pjla-accredited-labs.cfm", kind: "citation" },
    ],
  },
  {
    slug: "bioviridian",
    name: "Bioviridian",
    location: "College Station, TX",
    identity:
      "Bioviridian Inc. (bioviridians.com) is an independent analytical testing laboratory based in College Station, TX, specializing in third-party characterization of synthetic peptides using LC-MS, MALDI-MS, and HPLC instrumentation.",
    accreditationClaim: "Bioviridian's site does not claim ISO 17025 or any other laboratory accreditation.",
    accreditationFindings: [
      { body: "A2LA", status: "no-record" },
      { body: "ANAB", status: "no-record" },
      { body: "PJLA", status: "no-record" },
    ],
    panel: [
      { name: "Peptide Purity Testing", method: "LC-MS, HPLC, MALDI-MS", measures: "Identity, purity percentage, and net peptide content (NPC) of the vial's contents" },
      { name: "Bacterial Endotoxin Testing (BET)", method: "LAL and recombinant Factor C (rFC) assays, Charles River Endosafe system", measures: "Bacterial endotoxin contamination, per applicable pharmacopeial standard" },
      { name: "Heavy Metal Analysis", method: "ICP-MS", measures: "Screens 77 elements, including the major toxic heavy metals" },
      { name: "Sterility Testing", method: "USP <71>", measures: "Viable aerobic and anaerobic bacteria, fungi, and yeast, under aseptic conditions" },
    ],
    verification: {
      portal: null,
      mechanics:
        "Bioviridian publishes issued Certificates of Analysis directly at bioviridians.com/coas/<code>.pdf — there's no login or lookup form. A reader can take the code printed on a vendor's certificate, request the same file directly from Bioviridian's own domain, and compare the two documents. Prof. Peptide has done this once, for the vendor Omega1: the vendor-hosted file and the lab-hosted file were byte-identical.",
      limits:
        "A byte match confirms the exact document a vendor displays also exists, unmodified, on Bioviridian's own domain — it does not confirm chain-of-custody between the tested sample and the specific vial a customer received. Prof. Peptide has performed this comparison for one vendor's certificate (Omega1), not independently for every vendor listed below.",
    },
    limitations: [
      "Bioviridian does not claim ISO 17025 or another third-party lab accreditation, and Prof. Peptide found no record for it in A2LA, ANAB, or PJLA's own directories — see Accreditation above.",
      "Prof. Peptide's byte-match verification has been performed for one vendor's certificate, not for every vendor listed below.",
      "Prof. Peptide has not visited Bioviridian's laboratory or observed testing directly.",
    ],
    sources: [
      { label: "bioviridians.com", url: "https://bioviridians.com", kind: "lab" },
      { label: "A2LA accredited-organization search", url: "https://search.a2la.org/", kind: "citation" },
      { label: "ANAB accredited-organization search", url: "https://search.anab.org/", kind: "citation" },
      { label: "PJLA accredited-organization search", url: "https://www.pjview.com/clients/pjl/pjla-accredited-labs.cfm", kind: "citation" },
    ],
  },
];
