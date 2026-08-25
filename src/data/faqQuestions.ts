// Single source of truth for the /faq/[slug] question pages.
//
// Each entry is ONE googled question answered comprehensively on its own page. The
// dynamic route (src/app/faq/[slug]/page.tsx) renders from this array, its FAQPage
// JSON-LD is built from the SAME text via faqAnswerText() (never a second copy), and
// the derived search index (scripts/gen-search-index.mjs) indexes each question from
// here. Import-free / no JSX — the generator executes this module like glossary.ts, so
// the answer body is structured DATA the page maps to markup, not React nodes.
//
// Content rule: report, never advise. State what is "commonly used" / "the standard",
// not "you should". RUO framing holds — for research use, not human use.

export type FaqBlock =
  | { kind: "heading"; text: string }
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] };

export interface FaqQuestion {
  /** URL segment: /faq/<slug>. */
  slug: string;
  /** The question, as typed into search — used for the H1 and the FAQPage schema question. */
  question: string;
  /** <title>. Mirrors the query; may add the answer hook. */
  title: string;
  /** Meta description — MUST carry the specific figures (the gauge/length numbers). */
  metaDescription: string;
  /** Extra search-index match terms (the GSC queries this page targets). */
  searchTags: string[];
  /** One-line brief for the /faq hub "In-depth answers" list. */
  hubBlurb: string;
  /** The direct answer, 40–60 words, figures first — rendered lead + schema opener. */
  lede: string;
  /** The comprehensive answer body. */
  body: FaqBlock[];
  /** Handoff to the canonical page for depth. */
  handoff: { href: string; label: string; text: string };
}

export const faqQuestions: FaqQuestion[] = [
  {
    slug: "what-size-needle-for-peptides",
    question: "What size needle for peptides?",
    title: "What Size Needle for Peptides? Gauge and Length",
    metaDescription:
      "Subcutaneous peptide injections commonly use a 29–31 gauge, 5/16-inch (8 mm) insulin needle — 30 gauge is the usual default. How gauge and length are chosen, plus the insulin-syringe sizes they pair with.",
    searchTags: [
      "needle size",
      "peptide needle size",
      "what size needle for peptide injection",
      "insulin needle for peptides",
      "syringe size for peptides",
      "needle gauge",
    ],
    hubBlurb:
      "The needle gauge and length commonly used for subcutaneous peptide injection, and the insulin-syringe barrel sizes that pair with them.",
    lede:
      "For subcutaneous peptide injection the size most commonly used is a 29-to-31-gauge insulin needle, 5/16 inch (8 mm) long, with 30 gauge the usual factory default. Higher gauge numbers mean thinner needles, and the short 8 mm length keeps the injection in subcutaneous fat rather than muscle.",
    body: [
      {
        kind: "heading",
        text: "Gauge: 29–31, and why thinner is the norm",
      },
      {
        kind: "p",
        text:
          "Needle gauge runs backwards — a higher number is a thinner needle, so 31 gauge is finer than 29 gauge. The 29–31 gauge range is standard for subcutaneous peptide work, and 30 gauge is the most common factory default on pre-packaged insulin syringes. Thinner needles are favored because low-viscosity peptide solutions flow easily through them and they cause less pain, bruising, and tissue trauma than thicker needles.",
      },
      {
        kind: "heading",
        text: "Length: 5/16 inch (8 mm) for subcutaneous",
      },
      {
        kind: "p",
        text:
          "The standard subcutaneous length is 5/16 inch (8 mm) — long enough to clear the dermis and reach the subcutaneous fat layer, short enough not to enter muscle on a pinched fold. A 1/2-inch (12.7 mm) length exists but is intended for intramuscular injection, which is rarely the right route for peptides; a small number of protocols specify it, so the individual peptide's profile is the place to check before assuming.",
      },
      {
        kind: "heading",
        text: "The syringe the needle comes on",
      },
      {
        kind: "p",
        text:
          "For peptide research the needle almost always arrives fixed to a U-100 insulin syringe (100 units = 1 mL). Barrels come in 0.3 mL (30 units), 0.5 mL (50 units), and 1 mL (100 units); across all three the needle gauge and length are typically identical — barrel capacity is the only variable, chosen for the draw volume and tick precision, not the needle. Smaller barrels have finer tick spacing, which is why 0.3 mL and 0.5 mL are common for the small 2–10 unit draws typical of peptide doses.",
      },
      {
        kind: "list",
        items: [
          "Gauge: 29–31 (higher number = thinner); 30 g is the usual default.",
          "Length: 5/16 in (8 mm) for subcutaneous; 1/2 in (12.7 mm) is for intramuscular.",
          "Syringe: U-100 insulin syringe; 0.3 or 0.5 mL barrel for typical microdoses, 1 mL for larger volumes.",
        ],
      },
    ],
    handoff: {
      href: "/guides/syringes-and-injection",
      label: "Insulin Syringes & Injection guide",
      text:
        "For injection technique, site rotation, unit-to-mcg conversion, and reconstitution, see the full",
    },
  },
];

/** Flatten a question to the plain-text answer used verbatim in the FAQPage schema —
 *  the SAME text the page renders, so schema and visible answer can never diverge. */
export function faqAnswerText(q: FaqQuestion): string {
  const parts = [q.lede];
  for (const b of q.body) {
    if (b.kind === "p" || b.kind === "heading") parts.push(b.text);
    else if (b.kind === "list") parts.push(b.items.join(" "));
  }
  parts.push(`${q.handoff.text} ${q.handoff.label}.`);
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

export const faqQuestionBySlug = (slug: string): FaqQuestion | undefined =>
  faqQuestions.find((q) => q.slug === slug);
