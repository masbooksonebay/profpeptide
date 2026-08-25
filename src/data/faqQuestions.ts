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
    related: ["how-often-is-bpc-157-dosed"],
    whereToBuy: { compoundSlug: "tb-500" },
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
