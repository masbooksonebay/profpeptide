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
  | { kind: "list"; items: string[] }
  // An inline call-to-action paragraph: prose + one link. Used for a mid-answer handoff
  // (e.g. the units section → /calculator). Rendered as a <p> with a <Link>; its text + label
  // are folded into the schema answer via faqAnswerText, so schema still matches the visible text.
  | { kind: "cta"; text: string; href: string; label: string };

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
  /** Slugs of related FAQ question pages in the same cluster — rendered as cross-links. */
  related?: string[];
  /** Compound FAQ pages end with a "Where to Buy" vendor block (standing rule). `compoundSlug`
   *  drives the shared <VendorHighlightBlock>'s /prices CTA; the vendor SET is the fixed curated
   *  trio pinned in the page. Injection-prep pages (needle/bac water) omit this. */
  whereToBuy?: { compoundSlug: string };
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
    related: ["can-you-use-insulin-needles-for-peptides", "how-much-bac-water-for-peptides"],
  },
  {
    slug: "can-you-use-insulin-needles-for-peptides",
    question: "Can you use insulin needles for peptides?",
    title: "Can You Use Insulin Needles for Peptides? Yes — U-100 Syringes",
    metaDescription:
      "Yes — U-100 insulin syringes are the standard for subcutaneous peptide injection: a 29–31 gauge, 5/16-inch (8 mm) fixed needle on a barrel calibrated 100 units = 1 mL. How the unit markings map to peptide doses, plus the single-use caveats.",
    searchTags: [
      "insulin needles",
      "insulin syringe",
      "can you use insulin needles for peptides",
      "can i use insulin needles for peptides",
      "can you use insulin syringes for peptides",
      "are insulin needles good for peptides",
      "insulin syringe units per ml",
      "how many units is 500 mcg on an insulin syringe",
      "u-100 insulin syringe markings",
    ],
    hubBlurb:
      "Whether insulin syringes are the right tool for subcutaneous peptide injection (yes), the U-100 unit system, and how the markings map to peptide doses.",
    lede:
      "Yes — U-100 insulin syringes are the standard tool for subcutaneous peptide injection. They pair a fine 29-to-31-gauge, 5/16-inch (8 mm) fixed needle with a barrel calibrated so 100 units equals 1 mL, which suits the small microgram-to-milligram doses peptides are reconstituted to. They are single-use, and the needle is not replaceable.",
    body: [
      {
        kind: "heading",
        text: "Why insulin syringes fit peptide injection",
      },
      {
        kind: "p",
        text:
          "Insulin syringes became the default for peptide research for the same reasons they suit insulin: a fine 29–31 gauge needle, a short 5/16-inch (8 mm) length that lands in subcutaneous fat, and tightly-spaced unit markings that resolve the very small volumes a reconstituted peptide dose occupies. They are inexpensive, sold in boxes at any pharmacy, and have minimal dead space at the tip so the drawn volume matches the dose closely. The needle is fixed to the barrel rather than swappable, which keeps the whole path sterile and low-waste.",
      },
      {
        kind: "heading",
        text: "The U-100 unit system: 100 units = 1 mL",
      },
      {
        kind: "p",
        text:
          "\"U-100\" means the barrel is calibrated so 100 units of fluid equal exactly 1 mL — so 1 unit is 0.01 mL. The ticks measure VOLUME of liquid, not the amount of peptide. Barrels come in 0.3 mL (30 units), 0.5 mL (50 units), and 1 mL (100 units); the needle gauge and length are typically identical across all three, and the smaller barrels have finer tick spacing, which is why 0.3 and 0.5 mL are common for the small draws typical of peptide doses.",
      },
      {
        kind: "heading",
        text: "Reading the markings for peptide dosing",
      },
      {
        kind: "p",
        text:
          "Because units are a volume measure, a unit count does not map to a fixed peptide dose — the conversion depends entirely on the reconstitution (how many mg went into the vial and how much bacteriostatic water). The standard is 100 units per mL (U-100); to turn units into micrograms you need the vial's mg and the water volume. So \"how many units is 500 mcg\" has no single answer — it changes with the mix. The relationship: mcg per unit = (mg in vial ÷ mL of water) × 10.",
      },
      {
        kind: "cta",
        text: "For the exact units to draw for any dose and reconstitution, the",
        href: "/calculator",
        label: "Prof. Peptide dosage calculator",
      },
      {
        kind: "heading",
        text: "Single-use and the fixed needle",
      },
      {
        kind: "p",
        text:
          "Insulin syringes are single-use: the needle dulls on the first insertion, and the industry consensus across diabetes care and peptide research is one use per needle. Because the needle is integral to the barrel, it is not replaced separately — the whole syringe is discarded into a sharps container after one use. Reusing one is reported to increase pain, tissue trauma, and vial-contamination risk for negligible savings.",
      },
      {
        kind: "list",
        items: [
          "Calibration: U-100 — 100 units = 1 mL, so 1 unit = 0.01 mL (units are volume, not dose).",
          "Needle: 29–31 gauge, 5/16 in (8 mm), fixed to the barrel; 30 g is the usual default.",
          "Barrels: 0.3 mL (30 u), 0.5 mL (50 u), 1 mL (100 u) — smaller barrels read finer.",
          "Single-use; the needle is not replaceable.",
        ],
      },
    ],
    handoff: {
      href: "/guides/syringes-and-injection",
      label: "Insulin Syringes & Injection guide",
      text:
        "For injection technique, injection sites, unit-to-mcg conversion, and reconstitution, see the full",
    },
    related: ["what-size-needle-for-peptides", "how-much-bac-water-for-peptides"],
  },
  {
    slug: "how-much-bac-water-for-peptides",
    question: "How much bac water do you add to peptides?",
    title: "How Much Bac Water for Peptides? The mg ÷ mL Rule",
    metaDescription:
      "There's no single volume — the bacteriostatic water you add sets the concentration (mg ÷ mL = mg/mL). 1–3 mL per vial is commonly used; a 10 mg vial in 2 mL gives 5 mg/mL, so 1 unit (0.01 mL) draws 50 mcg. The dosage calculator does the math.",
    searchTags: [
      "bac water",
      "bacteriostatic water",
      "how much bac water for peptides",
      "how much bac water for 10mg peptide",
      "how much bac water for ghk-cu",
      "how much bacteriostatic water for peptides",
      "can i use an insulin syringe to reconstitute peptides",
      "what size needle for reconstituting peptides",
      "how to reconstitute peptides",
      "reconstitution",
    ],
    hubBlurb:
      "How the amount of bacteriostatic water sets the concentration (mg ÷ mL), the commonly used range, and a worked 10 mg / 2 mL example — with the math on the calculator.",
    lede:
      "There's no single correct volume — the amount of bacteriostatic water you add sets the concentration, and concentration sets how many units each dose draws. A commonly used range is 1–3 mL per vial. The rule is simple: milligrams in the vial ÷ millilitres of water = mg per mL.",
    body: [
      {
        kind: "heading",
        text: "The relationship: mg ÷ mL sets the concentration",
      },
      {
        kind: "p",
        text:
          "The volume of bacteriostatic water is a choice, not a fixed number — it determines the concentration of the reconstituted solution, and the concentration determines how many syringe units each dose occupies. More water means a lower concentration, which means more units (a larger, easier-to-read draw) for the same dose; less water means a higher concentration and a smaller draw. Peptides are commonly reconstituted with roughly 1–3 mL per vial, chosen so a typical dose lands on readable unit marks.",
      },
      {
        kind: "heading",
        text: "A worked example: a 10 mg vial + 2 mL",
      },
      {
        kind: "p",
        text:
          "Add 2 mL of bacteriostatic water to a 10 mg vial and the concentration is 10 mg ÷ 2 mL = 5 mg/mL. On a U-100 insulin syringe 1 unit is 0.01 mL, so 1 unit draws 0.05 mg (50 mcg) — a 250 mcg dose is 5 units. The same 10 mg vial in 1 mL instead gives 10 mg/mL, so 1 unit draws 100 mcg and the same dose is 2.5 units. The volume you pick simply shifts where your dose lands on the barrel.",
      },
      {
        kind: "cta",
        text: "For the exact water volume and units to draw for your vial size and target dose, the",
        href: "/calculator",
        label: "Prof. Peptide dosage calculator",
      },
      {
        kind: "heading",
        text: "Why the volume choice matters",
      },
      {
        kind: "p",
        text:
          "The point of picking a volume is dose measurability. Too concentrated and a typical dose is a 1–2 unit sliver that's hard to draw accurately; too dilute and the draw can exceed the barrel. The commonly used approach is to choose a concentration so the intended dose falls in a comfortable 5–30 unit range on the syringe, then write the reconstitution volume on the vial and keep it consistent.",
      },
      {
        kind: "heading",
        text: "Can you use an insulin syringe to reconstitute?",
      },
      {
        kind: "p",
        text:
          "Yes — the same U-100 insulin syringe both draws the bacteriostatic water into the vial and later draws each dose. Add the water slowly down the inside wall of the vial rather than blasting it onto the powder, and swirl gently rather than shaking, which is reported to degrade some peptides. Some researchers use a larger syringe to move the water and switch to the insulin syringe for dosing, but for the small volumes involved one insulin syringe handles both.",
      },
      {
        kind: "cta",
        text: "The needle that draws the water is the same one that injects the dose —",
        href: "/faq/what-size-needle-for-peptides",
        label: "what size needle for peptides",
      },
      {
        kind: "list",
        items: [
          "Rule: mg in vial ÷ mL of water = mg/mL (concentration).",
          "Commonly used: about 1–3 mL of bacteriostatic water per vial.",
          "Example: 10 mg + 2 mL = 5 mg/mL; 1 unit (0.01 mL) = 50 mcg.",
          "An insulin syringe both reconstitutes and doses; add water slowly, don't shake.",
        ],
      },
    ],
    handoff: {
      href: "/guides/syringes-and-injection",
      label: "Insulin Syringes & Injection guide",
      text:
        "For reconstitution step by step, unit-to-mcg conversion, storage, and injection technique, see the full",
    },
    related: ["what-size-needle-for-peptides", "can-you-use-insulin-needles-for-peptides"],
  },
  {
    slug: "how-often-is-retatrutide-dosed",
    question: "How often is retatrutide dosed?",
    title: "How Often Is Retatrutide Dosed? Once Weekly in Trials",
    metaDescription:
      "In the retatrutide trials the dose was a once-weekly subcutaneous injection, escalated every 4 weeks from a low start up to 12 mg; Phase 2 tested 0.5–12 mg weekly (half-life ~6 days supports weekly dosing). Reported from the trial protocols, not a recommendation.",
    searchTags: [
      "reta dosing",
      "retatrutide dosing",
      "how often is retatrutide dosed",
      "how often do you take reta",
      "retatrutide dosing schedule",
      "how often to inject retatrutide",
      "retatrutide dosing frequency",
    ],
    hubBlurb:
      "The once-weekly subcutaneous schedule and every-4-week titration the retatrutide trials used, reported from the profile's cited Phase 2/3 protocols.",
    lede:
      "In the clinical trials retatrutide was given as a once-weekly subcutaneous injection, with the dose escalated every 4 weeks from a low start up to a 12 mg maximum. The Phase 2 trials tested doses from 0.5 mg to 12 mg weekly. This reports the trial protocols, not a dosing recommendation.",
    body: [
      {
        kind: "heading",
        text: "Once-weekly, by subcutaneous injection",
      },
      {
        kind: "p",
        text:
          "In the trials retatrutide was administered once weekly by subcutaneous injection. Its half-life is approximately 6 days, which supports a once-weekly interval, with steady state reached in about 4–5 weeks at each dose level.",
      },
      {
        kind: "heading",
        text: "The escalation the trials used",
      },
      {
        kind: "p",
        text:
          "Rather than starting at the target dose, the trials raised the dose every 4 weeks. The Phase 3 TRIUMPH protocol stepped it up as follows, all once weekly; the Phase 2 trials tested the 0.5 mg to 12 mg weekly range.",
      },
      {
        kind: "list",
        items: [
          "Weeks 1–4: 2 mg once weekly.",
          "Weeks 5–8: 4 mg once weekly.",
          "Weeks 9–12: 6 mg once weekly.",
          "Weeks 13–16: 9 mg once weekly.",
          "Weeks 17+: 12 mg once weekly (the maximum dose tested).",
        ],
      },
      {
        kind: "heading",
        text: "Why the trials escalated slowly",
      },
      {
        kind: "p",
        text:
          "The stepwise increase was used to give the body time to adapt and to reduce gastrointestinal side effects. Phase 2 data showed that starting at a higher dose (4 mg) increased side-effect rates without improving outcomes, which is why the trials began low and titrated up.",
      },
      {
        kind: "heading",
        text: "How long the trials ran",
      },
      {
        kind: "p",
        text:
          "The Phase 2 obesity trial ran 48 weeks in 338 adults, and the companion Phase 2 type 2 diabetes trial ran 36 weeks in 281 adults — both with the once-weekly injection maintained across the study.",
      },
      {
        kind: "list",
        items: [
          "Frequency: once weekly, subcutaneous.",
          "Titration: dose raised every 4 weeks (TRIUMPH: 2 → 4 → 6 → 9 → 12 mg).",
          "Phase 2 dose range tested: 0.5–12 mg weekly.",
          "Half-life ~6 days; steady state in ~4–5 weeks per dose level.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/retatrutide",
      label: "Retatrutide research profile",
      text:
        "For the mechanism, trial results, side effects, sources, and full dosing detail, see the",
    },
    related: ["how-often-is-tirzepatide-dosed", "how-often-is-semaglutide-dosed"],
    whereToBuy: { compoundSlug: "retatrutide" },
  },
  {
    slug: "how-often-is-tirzepatide-dosed",
    question: "How often is tirzepatide dosed?",
    title: "How Often Is Tirzepatide Dosed? Once Weekly in Trials",
    metaDescription:
      "In the SURMOUNT/SURPASS trials and the FDA-approved label, tirzepatide is a once-weekly subcutaneous injection, escalated every 4 weeks from 2.5 mg through 15 mg over 20 weeks (2.5→5→7.5→10→12.5→15), then held at a 5, 10, or 15 mg weekly maintenance dose. Reported from the protocols, not a recommendation.",
    searchTags: [
      "tirzepatide dosing",
      "how often is tirzepatide dosed",
      "tirzepatide dosing schedule",
      "how often to inject tirzepatide",
      "tirz dosing",
      "how often do you take tirzepatide",
      "tirzepatide frequency",
    ],
    hubBlurb:
      "The once-weekly subcutaneous schedule and every-4-week titration (2.5→15 mg) the tirzepatide trials and FDA label used.",
    lede:
      "In the SURMOUNT and SURPASS trials and the FDA-approved label, tirzepatide is given as a once-weekly subcutaneous injection. The dose is escalated every 4 weeks from a 2.5 mg start through 15 mg over 20 weeks (2.5 → 5 → 7.5 → 10 → 12.5 → 15), then held at a 5, 10, or 15 mg weekly maintenance dose. This reports the trial and label protocols, not a recommendation.",
    body: [
      {
        kind: "heading",
        text: "Once-weekly, by subcutaneous injection",
      },
      {
        kind: "p",
        text:
          "In the trials and on the FDA-approved label, tirzepatide is administered once weekly by subcutaneous injection. Its half-life is approximately 5 days, which supports the once-weekly interval, with steady state reached in about 4 weeks at each dose level.",
      },
      {
        kind: "heading",
        text: "The titration the trials used",
      },
      {
        kind: "p",
        text:
          "Rather than starting at the target dose, the FDA-approved schedule (the SURMOUNT-1 protocol) raises the dose every 4 weeks over 20 weeks, all once weekly:",
      },
      {
        kind: "list",
        items: [
          "Weeks 1–4: 2.5 mg once weekly (initiation dose).",
          "Weeks 5–8: 5 mg once weekly.",
          "Weeks 9–12: 7.5 mg once weekly.",
          "Weeks 13–16: 10 mg once weekly.",
          "Weeks 17–20: 12.5 mg once weekly.",
          "Weeks 21+: 15 mg once weekly (maximum dose).",
        ],
      },
      {
        kind: "heading",
        text: "Maintenance and why it titrates slowly",
      },
      {
        kind: "p",
        text:
          "Maintenance doses in the trials were 5, 10, or 15 mg once weekly. The slow titration is used to reduce gastrointestinal side effects; faster escalation was reported to increase side-effect rates without improving outcomes.",
      },
      {
        kind: "cta",
        text: "To convert a mg dose to syringe units and plan reconstitution, the",
        href: "/calculator",
        label: "Prof. Peptide dosage calculator",
      },
      {
        kind: "list",
        items: [
          "Frequency: once weekly, subcutaneous.",
          "Titration: dose raised every 4 weeks (2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg) over 20 weeks.",
          "Maintenance: 5, 10, or 15 mg once weekly.",
          "Half-life ~5 days; steady state in ~4 weeks per dose level.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/tirzepatide",
      label: "Tirzepatide research profile",
      text:
        "For the mechanism, trial results, side effects, sources, and full dosing detail, see the",
    },
    related: ["how-often-is-retatrutide-dosed", "how-often-is-semaglutide-dosed"],
    whereToBuy: { compoundSlug: "tirzepatide" },
  },
  {
    slug: "how-often-is-semaglutide-dosed",
    question: "How often is semaglutide dosed?",
    title: "How Often Is Semaglutide Dosed? Once Weekly in Trials",
    metaDescription:
      "In the STEP trials and the FDA label, injectable semaglutide is a once-weekly subcutaneous injection, escalated every 4 weeks from 0.25 mg to 2.4 mg over 16 weeks (Wegovy); Ozempic tops out at 2.0 mg weekly, and oral Rybelsus is taken daily. Half-life ~7 days. Reported from the protocols.",
    searchTags: [
      "semaglutide dosing",
      "how often is semaglutide dosed",
      "semaglutide dosing schedule",
      "how often to inject semaglutide",
      "sema dosing",
      "how often do you take semaglutide",
      "semaglutide frequency",
      "ozempic dosing schedule",
      "wegovy dosing schedule",
    ],
    hubBlurb:
      "The once-weekly injectable schedule (0.25→2.4 mg), the Ozempic/Rybelsus variants, and the every-4-week titration the semaglutide trials and label used.",
    lede:
      "In the STEP trials and the FDA-approved label, injectable semaglutide (Wegovy/Ozempic) is given as a once-weekly subcutaneous injection, escalated every 4 weeks from 0.25 mg to a 2.4 mg maintenance dose over 16 weeks. Oral semaglutide (Rybelsus) is a daily tablet instead. This reports the trial and label protocols, not a recommendation.",
    body: [
      {
        kind: "heading",
        text: "Once weekly by injection; daily as an oral tablet",
      },
      {
        kind: "p",
        text:
          "Injectable semaglutide (Wegovy for weight management, Ozempic for type 2 diabetes) is administered once weekly by subcutaneous injection; its half-life is approximately 7 days, which supports the once-weekly interval. Oral semaglutide (Rybelsus, type 2 diabetes only) is taken once daily instead.",
      },
      {
        kind: "heading",
        text: "The Wegovy titration",
      },
      {
        kind: "p",
        text:
          "The Wegovy weight-management schedule escalates the dose every 4 weeks over 16 weeks, all once weekly:",
      },
      {
        kind: "list",
        items: [
          "Weeks 1–4: 0.25 mg once weekly.",
          "Weeks 5–8: 0.5 mg once weekly.",
          "Weeks 9–12: 1.0 mg once weekly.",
          "Weeks 13–16: 1.7 mg once weekly.",
          "Weeks 17+: 2.4 mg once weekly (maintenance).",
        ],
      },
      {
        kind: "heading",
        text: "Ozempic and oral Rybelsus",
      },
      {
        kind: "p",
        text:
          "For type 2 diabetes, Ozempic tops out at 2.0 mg once weekly, escalating 0.25 → 0.5 → 1.0 → 2.0 mg with each step at least 4 weeks. Oral Rybelsus is taken once daily on an empty stomach at 3, 7, or 14 mg; its low oral bioavailability is why the tablet doses are larger than the injectable.",
      },
      {
        kind: "heading",
        text: "Why it titrates slowly",
      },
      {
        kind: "p",
        text:
          "The stepwise increase is used to reduce gastrointestinal side effects; escalating faster was reported to raise side-effect rates without improving outcomes.",
      },
      {
        kind: "cta",
        text: "To convert a mg dose to syringe units and plan reconstitution, the",
        href: "/calculator",
        label: "Prof. Peptide dosage calculator",
      },
      {
        kind: "list",
        items: [
          "Injectable: once weekly, subcutaneous; oral Rybelsus: once daily.",
          "Wegovy titration: 0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg every 4 weeks over 16 weeks.",
          "Ozempic max: 2.0 mg once weekly.",
          "Half-life ~7 days; steady state in ~4–5 weeks per dose level.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/semaglutide",
      label: "Semaglutide research profile",
      text:
        "For the mechanism, trial results, side effects, sources, and full dosing detail, see the",
    },
    related: ["how-often-is-retatrutide-dosed", "how-often-is-tirzepatide-dosed"],
    whereToBuy: { compoundSlug: "semaglutide" },
  },
  {
    slug: "how-often-are-cjc-1295-and-ipamorelin-dosed",
    question: "How often are CJC-1295 and Ipamorelin dosed?",
    title: "How Often Are CJC-1295 and Ipamorelin Dosed? Frequency Explained",
    metaDescription:
      "Frequency follows each compound's half-life: CJC-1295 with DAC is dosed once weekly (6–8-day half-life), while CJC-1295 without DAC and Ipamorelin are dosed multiple times daily (short half-lives). No controlled trial established a combined protocol; amounts are convention. Reported from the cited pharmacology.",
    searchTags: [
      "cjc-1295 ipamorelin dosing",
      "how often are cjc-1295 and ipamorelin dosed",
      "cjc 1295 ipamorelin dosing schedule",
      "how often to inject cjc-1295 ipamorelin",
      "gh stack dosing",
      "cjc ipamorelin frequency",
      "ipamorelin dosing",
      "cjc-1295 dosing",
    ],
    hubBlurb:
      "Why the pair's frequency splits by half-life — CJC-1295 DAC weekly vs no-DAC CJC and Ipamorelin multiple times daily — with the combination's no-trial caveat.",
    lede:
      "The dosing frequency follows each compound's half-life. CJC-1295 with DAC has a 6–8-day half-life (from a cited human pharmacokinetic study) and is dosed once weekly; CJC-1295 without DAC (Mod GRF 1-29) and Ipamorelin have short half-lives and are dosed multiple times daily, most commonly pre-bed. No controlled trial established a combined protocol.",
    body: [
      {
        kind: "heading",
        text: "Frequency follows half-life",
      },
      {
        kind: "p",
        text:
          "The DAC form of CJC-1295 binds albumin, giving it a 6–8-day half-life (documented in a cited human pharmacokinetic study), which is why it is dosed once weekly. CJC-1295 without DAC (Mod GRF 1-29) and Ipamorelin have short half-lives, so they are dosed several times daily — pre-bed being the most common single-dose timing, aligning with the natural overnight growth-hormone pulse.",
      },
      {
        kind: "heading",
        text: "The two ways the pair is run",
      },
      {
        kind: "list",
        items: [
          "Standard (no-DAC) pair: CJC-1295 no-DAC and Ipamorelin are co-administered at the same frequency — multiple times daily — because their short half-lives are synchronized.",
          "DAC alternative: CJC-1295 DAC once weekly, with Ipamorelin still dosed daily — two different schedules, since Ipamorelin's daily pulse adds the pulsatile signal the long-acting CJC-1295 DAC does not.",
        ],
      },
      {
        kind: "heading",
        text: "About the amounts and the combination",
      },
      {
        kind: "p",
        text:
          "This reports frequency, which follows the cited pharmacology. The specific microgram amounts and exact number of daily doses are community convention, not from a controlled trial — the profiles state there are no approved dosing standards for the combination itself. Reported, not a recommendation.",
      },
      {
        kind: "list",
        items: [
          "CJC-1295 with DAC: once weekly (6–8-day half-life).",
          "CJC-1295 without DAC (Mod GRF 1-29): multiple times daily (short half-life).",
          "Ipamorelin: multiple times daily, pre-bed most common (short half-life).",
          "No controlled-trial protocol for the combination; amounts are convention.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/gh-stack",
      label: "GH Stack (CJC-1295 + Ipamorelin) profile",
      text:
        "For each compound's mechanism, the cited pharmacokinetic sources, and the full context, see the",
    },
    whereToBuy: { compoundSlug: "gh-stack" },
  },
  {
    slug: "how-often-is-bpc-157-dosed",
    question: "How often is BPC-157 dosed?",
    title: "How Often Is BPC-157 Dosed? What the Evidence Actually Shows",
    metaDescription:
      "No human clinical trial has established a BPC-157 dosing frequency. The once/twice-daily figures circulated online are community convention, not trial data — the cited evidence is largely animal-model plus one small human case series (a single localized injection, no dose). Reported as what the literature studied.",
    searchTags: [
      "bpc-157 dosing",
      "how often is bpc-157 dosed",
      "bpc 157 dosing schedule",
      "how often to inject bpc-157",
      "bpc-157 frequency",
      "how often do you take bpc-157",
      "bpc157 dosing",
    ],
    hubBlurb:
      "Why there is no established BPC-157 dosing frequency — the circulating numbers are convention, and the cited evidence is animal-model plus one small human case series.",
    lede:
      "No human clinical trial has established a dosing frequency for BPC-157. The once-or-twice-daily figures circulated online are community convention, not trial data. The published evidence cited on its profile is largely animal-model work on mechanism and tissue healing, plus one small human case series — so there is no studied schedule to report.",
    body: [
      {
        kind: "heading",
        text: "No established human dosing protocol",
      },
      {
        kind: "p",
        text:
          "BPC-157 is not FDA-approved and has no completed human dosing trial. The frequencies and amounts repeated across the research community — including named influencer protocols — are convention, not figures derived from a controlled study. This page reports that state honestly rather than presenting convention as an answer.",
      },
      {
        kind: "heading",
        text: "What the cited literature actually studied",
      },
      {
        kind: "p",
        text:
          "Most of the cited BPC-157 literature is animal-model work examining mechanism and tissue repair, not a dosing schedule. The one cited human report is a small case series in which patients with chronic knee pain received a single localized injection, with no standardized dose or frequency established; a registered Phase-1 oral trial has no published results.",
      },
      {
        kind: "cta",
        text: "For how BPC-157 and TB-500 compare as research peptides, see the",
        href: "/compare/bpc-157-vs-tb-500",
        label: "BPC-157 vs TB-500 comparison",
      },
      {
        kind: "list",
        items: [
          "No human clinical trial has established a dosing frequency.",
          "The circulating once/twice-daily figures are community convention, not trial data.",
          "The one cited human datum is a single localized injection (no dose reported).",
          "Most cited evidence is animal-model, on mechanism and healing.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/bpc-157",
      label: "BPC-157 research profile",
      text:
        "For the mechanism, the cited studies, side effects, and the community convention in context, see the",
    },
    related: ["how-often-is-tb-500-dosed"],
    whereToBuy: { compoundSlug: "bpc-157" },
  },
  {
    slug: "how-often-is-tb-500-dosed",
    question: "How often is TB-500 dosed?",
    title: "How Often Is TB-500 Dosed? What the Evidence Actually Shows",
    metaDescription:
      "No human clinical trial has established a TB-500 dosing frequency. The circulated twice-weekly loading / weekly maintenance figures are community convention, not trial data — the cited studies cover mechanism and wound healing, and the multi-day half-life is an animal estimate. Reported as what the literature studied.",
    searchTags: [
      "tb-500 dosing",
      "how often is tb-500 dosed",
      "tb 500 dosing schedule",
      "how often to inject tb-500",
      "tb-500 frequency",
      "how often do you take tb-500",
      "tb500 dosing",
      "thymosin beta 4 dosing",
    ],
    hubBlurb:
      "Why there is no established TB-500 dosing frequency — the loading/maintenance numbers are convention, and the cited studies are mechanism/wound-healing with an animal-estimated half-life.",
    lede:
      "No human clinical trial has established a dosing frequency for TB-500. The twice-weekly loading and weekly maintenance figures circulated online are community convention, not trial data. The cited studies examined mechanism and wound healing rather than a dosing schedule, and the multi-day half-life is an estimate from animal work — so there is no studied schedule to report.",
    body: [
      {
        kind: "heading",
        text: "No established human dosing protocol",
      },
      {
        kind: "p",
        text:
          "TB-500 is not FDA-approved and has no completed human dosing trial establishing a frequency. The loading-then-maintenance regimen repeated across the research community is convention, loosely attributed to early clinical trials whose doses were never published. This page reports that state rather than presenting the convention as an answer.",
      },
      {
        kind: "heading",
        text: "What the cited literature actually studied",
      },
      {
        kind: "p",
        text:
          "The cited TB-500 studies examined mechanism, cell migration, and wound-healing outcomes — not a dosing schedule. The multi-day half-life that is offered as the rationale for infrequent dosing is an estimate from animal pharmacokinetics, not a human-trial figure. No cited study reports a frequency or dose amount for research use.",
      },
      {
        kind: "cta",
        text: "For how TB-500 and BPC-157 compare as research peptides, see the",
        href: "/compare/bpc-157-vs-tb-500",
        label: "BPC-157 vs TB-500 comparison",
      },
      {
        kind: "list",
        items: [
          "No human clinical trial has established a dosing frequency.",
          "The circulating twice-weekly/loading-maintenance figures are community convention.",
          "The cited studies cover mechanism and wound healing, not a schedule.",
          "The multi-day half-life is an animal-study estimate.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/tb-500",
      label: "TB-500 research profile",
      text:
        "For the mechanism, the cited studies, side effects, and the community convention in context, see the",
    },
    related: ["how-often-is-bpc-157-dosed", "thymosin-beta-4-side-effects"],
    whereToBuy: { compoundSlug: "tb-500" },
  },
  {
    slug: "thymosin-beta-4-side-effects",
    question: "What are the side effects of thymosin beta-4?",
    title: "Thymosin Beta-4 (TB-500) Side Effects: What Studies Report",
    metaDescription:
      "No human trial has characterized thymosin beta-4 (TB-500) side effects. Human exposure is two Phase 2 trials terminated for non-efficacy with no published safety data; the cited studies cover wound-healing mechanism in animals. The theoretical tumor question its angiogenic role raises is unresolved by the cited literature.",
    searchTags: [
      "thymosin beta 4 side effects",
      "thymosin beta-4 side effects",
      "tb4 side effects",
      "tb4 frag side effects",
      "tb-500 side effects",
      "tb500 side effects",
      "does tb-500 cause cancer",
      "thymosin beta 4 safety",
    ],
    hubBlurb:
      "Why there is no characterized human side-effect profile for thymosin beta-4 / TB-500 — human exposure is two terminated Phase 2 trials, the cited studies are animal wound-healing mechanism, and the tumor question stays theoretical.",
    lede:
      "No human clinical trial has characterized the side effects of thymosin beta-4 or its synthetic fragment TB-500. Human exposure is limited to two Phase 2 trials terminated for non-efficacy before publishing safety data, and the cited literature studies wound-healing mechanism in animals — so repeated “no side effects” claims reflect absence of study, not evidence of absence.",
    body: [
      {
        kind: "heading",
        text: "TB-500 and thymosin beta-4: the same molecule?",
      },
      {
        kind: "p",
        text:
          "TB-500 is a synthetic fragment of thymosin beta-4, the 43-amino-acid protein the body produces naturally. The fragment keeps the active cell-migration region in a shorter, easier-to-synthesize form. Research literature — and search queries — use the two names interchangeably, though strict pharmacology references distinguish the full endogenous protein from the synthetic fragment.",
      },
      {
        kind: "cta",
        text: "For how the fragment compares with BPC-157 as a research peptide, see the",
        href: "/compare/bpc-157-vs-tb-500",
        label: "BPC-157 vs TB-500 comparison",
      },
      {
        kind: "heading",
        text: "What human safety data actually exists",
      },
      {
        kind: "p",
        text:
          "Human exposure to thymosin beta-4 is limited to two RegeneRx-sponsored Phase 2 trials — in pressure ulcers (NCT00382161) and epidermolysis bullosa (NCT00311766) — both terminated for non-efficacy reasons such as patient availability and drug expiration, not for safety findings. Neither produced a published adverse-event dataset. There are no completed Phase 3 trials and no long-term human safety data.",
      },
      {
        kind: "heading",
        text: "What the cited studies examined",
      },
      {
        kind: "p",
        text:
          "The literature cited on the profile studies mechanism and wound healing — actin binding, cell migration, angiogenesis, and tissue repair — largely in animal models. These studies were not designed to characterize side effects, so they neither report nor rule out adverse effects in humans. Claims that TB-500 has “no side effects” reflect this absence of study rather than evidence of safety.",
      },
      {
        kind: "heading",
        text: "The tumor-growth question",
      },
      {
        kind: "p",
        text:
          "Because thymosin beta-4 promotes cell migration and angiogenesis — the growth of new blood vessels — a theoretical question has been raised about whether it could stimulate existing tumors. The cited literature does not resolve this: those studies were designed to measure wound-healing and regenerative activity, not malignancy risk, and no cited trial assessed it in humans. The question is open, not answered, in the sources this profile cites.",
      },
      {
        kind: "list",
        items: [
          "No human trial has characterized the side effects of thymosin beta-4 / TB-500.",
          "Human exposure is two Phase 2 trials, both terminated for non-efficacy, with no published safety data.",
          "The cited studies examine wound-healing mechanism in animal models, not adverse effects.",
          "The theoretical tumor-stimulation question is not resolved by the cited literature.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/tb-500",
      label: "TB-500 research profile",
      text:
        "For the mechanism, the cited studies, and how the side-effect question is discussed in context, see the",
    },
    related: ["how-often-is-tb-500-dosed"],
    whereToBuy: { compoundSlug: "tb-500" },
  },
  {
    slug: "igf-1-lr3-side-effects",
    question: "What are the side effects of IGF-1 LR3?",
    title: "IGF-1 LR3 Side Effects: What the Evidence Shows",
    metaDescription:
      "Hypoglycemia is the one IGF-1 LR3 side effect the cited literature supports — IGF-1's insulin-like glucose-uptake effect, reported alongside food. No controlled human trial has characterized the analog itself, and the cited sources do not resolve the IGF-1/cancer question its mitogenic mechanism raises.",
    searchTags: [
      "igf 1 lr3 side effects",
      "igf-1 lr3 side effects",
      "side effects of igf 1 lr3",
      "igf-1 lr3",
      "igf lr3",
      "igf lr3 side effects",
      "igf 1 peptide side effects",
    ],
    hubBlurb:
      "The one cited IGF-1 LR3 side effect (hypoglycemia) versus what is not established — the analog has no controlled human trials, and the cited sources leave the IGF-1/cancer question open.",
    lede:
      "The one side effect the cited literature supports is hypoglycemia — IGF-1's insulin-like effect on glucose uptake, documented in the cited review of IGF-I as an anabolic agent and reported alongside food. Beyond that, no controlled human trial has characterized IGF-1 LR3 specifically, so native IGF-1's profile does not transfer automatically to the analog.",
    body: [
      {
        kind: "heading",
        text: "IGF-1 LR3 vs native IGF-1: why the safety profile does not transfer",
      },
      {
        kind: "p",
        text:
          "Native IGF-1 exists as an approved drug (mecasermin / Increlex, for severe primary IGF-1 deficiency in children). IGF-1 LR3 is a modified analog — an arginine substitution at position 3 and a 13-amino-acid N-terminal extension reduce its binding-protein affinity, extending half-life from minutes to roughly 20–30 hours and raising potency about threefold. Because the analog stays active far longer and is not the approved molecule, IGF-1's clinical adverse-event profile does not automatically describe it — and IGF-1 LR3 itself has no controlled human trials.",
      },
      {
        kind: "heading",
        text: "Hypoglycemia — the cited adverse effect",
      },
      {
        kind: "p",
        text:
          "The cited pharmacological review of growth hormone, IGF-I, and insulin as anabolic agents documents hypoglycemia as IGF-I's principal adverse effect, driven by its insulin-like action on glucose uptake. Because IGF-1 LR3 retains and prolongs IGF-1 receptor agonism, this is the mechanistically central risk for the analog — and the reason the research convention pairs administration with food, since injected without food the glucose-uptake effect can lower blood sugar.",
      },
      {
        kind: "heading",
        text: "The cancer / mitogenic question",
      },
      {
        kind: "p",
        text:
          "IGF-1 is a growth factor: the cited mechanism studies show IGF-1 LR3 drives cell proliferation through the PI3K/Akt and MAPK/ERK pathways. That mitogenic action is the basis for a theoretical concern — whether it could accelerate the growth of a pre-existing tumor. The cited literature does not resolve this: those studies characterized muscle, bone, and signalling mechanisms, not cancer outcomes, and no cited trial measured malignancy risk in humans. The question is open, not answered, in the sources this profile cites.",
      },
      {
        kind: "heading",
        text: "What is not established",
      },
      {
        kind: "p",
        text:
          "Other effects discussed in the research community — joint pain, fluid retention, carpal-tunnel-like numbness, and receptor desensitization with sustained high-dose use — are not characterized in the cited literature. They are reported anecdotally rather than measured in a trial of the analog, and no completed human safety study of IGF-1 LR3 exists to confirm or rule them out.",
      },
      {
        kind: "list",
        items: [
          "Hypoglycemia is the one adverse effect the cited literature supports (IGF-1's insulin-like glucose-uptake action).",
          "IGF-1 LR3 has no controlled human trials; native IGF-1's approved-drug profile does not transfer automatically.",
          "The mitogenic mechanism is cited; the human cancer-risk question is not resolved by the cited sources.",
          "Other reported effects are anecdotal, not characterized in the cited literature.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/igf-1-lr3",
      label: "IGF-1 LR3 research profile",
      text:
        "For the mechanism, the cited studies, dosing convention, and regulatory status in context, see the",
    },
    whereToBuy: { compoundSlug: "igf-1-lr3" },
  },
  {
    slug: "klow-peptide-blend-side-effects",
    question: "What are the side effects of the KLOW peptide blend?",
    title: "KLOW Blend Side Effects: BPC-157, TB-500, GHK-Cu, KPV",
    metaDescription:
      "No study has examined the KLOW blend (BPC-157, TB-500, GHK-Cu, KPV) itself — side-effect information is per-component only, and for each, human data is limited or absent: BPC-157 and TB-500 have no completed human trials, GHK-Cu's human evidence is topical, and KPV has not completed clinical trials.",
    searchTags: [
      "klow peptide blend side effects",
      "klow side effects",
      "klow blend side effects",
      "klow peptide side effects",
      "klow bpc-157 tb-500 ghk-cu kpv",
      "klow blend bpc-157 tb-500 ghk-cu kpv side effects",
    ],
    hubBlurb:
      "Why there is no blend-level side-effect data for KLOW — no trial has studied the four-peptide combination, so side effects are per-component, and each component's human safety data is limited or absent.",
    lede:
      "No study has examined the side effects of the KLOW blend itself — there are no controlled trials of the four-peptide combination (BPC-157, TB-500, GHK-Cu, KPV), so any side-effect information is per-component, not blend-level. And for each of the four, human side-effect data is limited or absent; the cited evidence is largely animal and mechanistic.",
    body: [
      {
        kind: "heading",
        text: "No blend-level safety data",
      },
      {
        kind: "p",
        text:
          "KLOW is a compounded four-peptide blend — BPC-157, TB-500, GHK-Cu, and KPV, typically a pre-blended 80 mg vial. No clinical trial has studied the combination itself; the synergy rationale rests on the components' complementary mechanisms, not on a comparative trial of the blend. Nothing below is a blend-level finding — each item is sourced from one component's own cited literature.",
      },
      {
        kind: "heading",
        text: "BPC-157 and TB-500",
      },
      {
        kind: "p",
        text:
          "Neither BPC-157 nor TB-500 has completed human trials characterizing side effects. For both, the cited literature studies wound-healing mechanism largely in animal models — it neither reports nor rules out adverse effects in humans. TB-500's terminated Phase 2 human trials produced no published adverse-event data.",
      },
      {
        kind: "cta",
        text: "TB-500's side-effect evidence is covered in the",
        href: "/faq/thymosin-beta-4-side-effects",
        label: "thymosin beta-4 side-effects page",
      },
      {
        kind: "cta",
        text: "and BPC-157's dosing evidence in",
        href: "/faq/how-often-is-bpc-157-dosed",
        label: "how often BPC-157 is dosed",
      },
      {
        kind: "heading",
        text: "GHK-Cu",
      },
      {
        kind: "p",
        text:
          "GHK-Cu's strongest human evidence is topical: a small controlled trial of the topical copper-tripeptide complex after laser skin resurfacing is among the few human studies, and topical cosmetic use has a long safety record. Injectable GHK-Cu — the route relevant to KLOW — is different: it is not FDA-approved (the FDA prohibited compounded injectable preparation in 2023), and its systemic effects come from animal and limited human research, not controlled human safety trials.",
      },
      {
        kind: "heading",
        text: "KPV",
      },
      {
        kind: "p",
        text:
          "KPV is an anti-inflammatory tripeptide derived from α-MSH; its cited evidence is animal-model (colitis, dermatitis) and mechanistic (NF-κB inhibition, PepT1-mediated uptake). It has not completed Phase 2 or 3 human trials, so its side-effect profile in humans is not characterized in the cited literature.",
      },
      {
        kind: "heading",
        text: "What this means for the blend",
      },
      {
        kind: "p",
        text:
          "Because each component's human side-effect data is limited or absent, and no study has looked at the four together, the blend's side-effect profile cannot be stated from evidence — combining them is not shown to be safer or riskier than any component alone. Reports of mild effects (injection-site reactions, transient fatigue, mild GI changes) are anecdotal and consistent with what the individual components are reported to produce, not measured in a trial of the blend.",
      },
      {
        kind: "list",
        items: [
          "No controlled trial has studied the KLOW combination; there is no blend-level side-effect data.",
          "BPC-157 and TB-500 have no completed human trials; the cited evidence is animal wound-healing mechanism.",
          "GHK-Cu's cited human evidence is topical; injectable systemic safety is not established in controlled trials.",
          "KPV has not completed human trials; its evidence is animal-model and mechanistic.",
          "Reports of mild effects are anecdotal, not measured in a trial of the blend.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/klow",
      label: "KLOW blend research profile",
      text:
        "For each component's mechanism, the cited studies, and the blend's dosing and regulatory status in context, see the",
    },
    related: ["thymosin-beta-4-side-effects"],
    whereToBuy: { compoundSlug: "klow" },
  },
  {
    slug: "how-often-is-testosterone-cypionate-injected",
    question: "How often is testosterone cypionate injected?",
    title: "How Often Is Testosterone Cypionate Injected? What the Label and Guidelines Say",
    metaDescription:
      "The FDA Depo-Testosterone label states 50–400 mg every two to four weeks intramuscularly; the 2018 Endocrine Society guideline describes 75–100 mg weekly or 150–200 mg every two weeks. Testosterone cypionate's half-life is about eight days — the basis for these intervals. What each named source states.",
    searchTags: [
      "how often is testosterone cypionate injected",
      "how often do you inject testosterone cypionate",
      "testosterone cypionate injection frequency",
      "how often to take testosterone cypionate",
      "testosterone cypionate dosing frequency",
      "testosterone cypionate how often injection",
    ],
    hubBlurb:
      "What the FDA Depo-Testosterone label and the 2018 Endocrine Society guideline state about testosterone cypionate injection frequency, and the ~8-day half-life behind the intervals.",
    lede:
      "The FDA label for Depo-Testosterone (testosterone cypionate) states 50–400 mg intramuscularly every two to four weeks for replacement in hypogonadal men. The 2018 Endocrine Society guideline instead describes 75–100 mg weekly or 150–200 mg every two weeks. The label puts the drug's half-life at about eight days, which is the rationale for these intervals.",
    body: [
      {
        kind: "heading",
        text: "What the FDA label states",
      },
      {
        kind: "p",
        text:
          "The FDA prescribing information for Depo-Testosterone (testosterone cypionate injection, a Schedule III controlled substance) gives the dosage for replacement in the hypogonadal male as 50–400 mg administered intramuscularly every two to four weeks. It specifies intramuscular use only, given deep in the gluteal muscle. This is the label's stated schedule, reported as written.",
      },
      {
        kind: "heading",
        text: "What the Endocrine Society guideline describes",
      },
      {
        kind: "p",
        text:
          "The 2018 Endocrine Society Clinical Practice Guideline (Bhasin et al., The Journal of Clinical Endocrinology & Metabolism, 2018) lists, as typical starting doses for intramuscular testosterone enanthate or cypionate, 150–200 mg every two weeks or 75–100 mg weekly. These are shorter intervals and smaller per-dose amounts than the label's two-to-four-week schedule.",
      },
      {
        kind: "heading",
        text: "Why the intervals are what they are (half-life)",
      },
      {
        kind: "p",
        text:
          "The FDA label states that testosterone cypionate's half-life after intramuscular injection is approximately eight days. With a half-life of roughly a week, a dose every one to two weeks falls within about one half-life — the pharmacologic basis for the guideline's weekly and every-two-week intervals, whereas the label's wider two-to-four-week schedule allows larger peaks and troughs between injections.",
      },
      {
        kind: "heading",
        text: "Where the label and the guideline differ",
      },
      {
        kind: "p",
        text:
          "The two named sources describe different schedules: the FDA label, 50–400 mg every two to four weeks; the 2018 Endocrine Society guideline, 75–100 mg weekly or 150–200 mg every two weeks. Both are reported here as each source states them. Testosterone cypionate is a prescription medication and a controlled substance; which schedule applies to a given person is a clinical decision made with a licensed physician. This page is educational and describes what the documents say — it is not medical advice.",
      },
      {
        kind: "list",
        items: [
          "FDA Depo-Testosterone label: 50–400 mg intramuscularly every two to four weeks.",
          "2018 Endocrine Society guideline: 75–100 mg weekly or 150–200 mg every two weeks.",
          "The label states the half-life is about eight days — the basis for these intervals.",
        ],
      },
    ],
    handoff: {
      href: "/app",
      label: "Prof. Peptide app",
      text:
        "For estimated level curves modelled from the published ~8-day half-life across weekly, every-two-week, and titration schedules, see the",
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
    else if (b.kind === "cta") parts.push(`${b.text} ${b.label}.`);
  }
  parts.push(`${q.handoff.text} ${q.handoff.label}.`);
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

export const faqQuestionBySlug = (slug: string): FaqQuestion | undefined =>
  faqQuestions.find((q) => q.slug === slug);
