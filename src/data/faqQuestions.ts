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
  | { kind: "cta"; text: string; href: string; label: string }
  // A reference table — the extractable artifact on a mechanics question ("how much BAC water").
  // `caption` states what the table IS, so the schema answer (faqAnswerText) stays readable when the
  // grid is flattened to prose; `note` carries the caveat that must travel with the numbers.
  // TWO SANCTIONED USES, both "a fact per row, no row preferred":
  //   1. RECONSTITUTION ARITHMETIC — a row converts a volume to a concentration to syringe units.
  //      It must never imply which row a reader should pick: that is a dosing recommendation
  //      wearing a table's clothes, and it is exactly how the competitor pages this pattern
  //      answers get it wrong.
  //   2. REPORTED ADVERSE-EVENT RATES — a row is one effect, the rate observed, and the trial that
  //      observed it. Added for the retatrutide side-effects spoke, where the rates ARE the answer
  //      and a prose list buries them. The same discipline applies: every row carries its source,
  //      so the table reports findings and never advises. A rate with no named trial does not
  //      belong in one — a percentage reads as clinical fact whether or not it earned it.
  | { kind: "table"; caption: string; headers: string[]; rows: string[][]; note?: string }
  // A Sources block, following the NEWS-ARTICLE citation pattern rather than the profile's numbered
  // references: PRIMARY sources (Federal Register, FDA, court filings, statute text) listed before
  // SECONDARY (law-firm analysis, trade press), each with a note saying what it is being cited FOR.
  // Only for question pages that make regulatory or legal claims — a dosing page does not need one.
  // 🔒 CITE ONLY WHAT WAS READ. A citation to a source nobody opened borrows authority the page has
  // not earned, and this project has now caught three separate instances of a secondary source
  // repeating something that turned out to be false.
  | { kind: "sources"; primary: FaqSource[]; secondary?: FaqSource[] };

export interface FaqSource {
  /** Full citation as it should read on the page. */
  cite: string;
  href: string;
  /** What this source is being relied on FOR — never omitted; it is what makes the citation checkable. */
  note: string;
}

/** Groups the /faq hub's In-depth cards into sections. The hub DERIVES its grouping from this
 *  field (never a hand-ordered list), so a new question lands in its section automatically. */
export type FaqCategory = "basics" | "uses" | "injection" | "dosing" | "frequency" | "side-effects" | "trt" | "legality";

/** Section order + display titles for the In-depth grouping. Titles use the hub's accordion
 *  section-header typography. */
// Order is reading order for a newcomer: what they are, what they are for, how they are prepared,
// how they are dosed, what goes wrong, and where the law sits. TRT sits last because it is a
// distinct audience rather than a step in that sequence.
//
// ⚠️ TITLES MIRROR THE PROFILE TOCs. Every peptide profile renders the same section vocabulary —
// "What is {X} used for?", "How is {X} dosed?", "What are the side effects of {X}?" — so the FAQ
// categories use the same words rather than near-synonyms. Two navigation systems describing one
// thing differently is drift, and this codebase has already paid for that with six "Back to" label
// variants for a single destination.
export const FAQ_CATEGORY_ORDER: { key: FaqCategory; title: string }[] = [
  { key: "basics", title: "Peptide Basics" },
  { key: "uses", title: "What Peptides Are Used For" },
  // Retitled from "Injection & Preparation": its four questions (needle size, insulin needles, bac
  // water x2) are all about preparing a dose, which is what the reconstitution category page covers.
  // Keeping the KEY means the existing spokes stay grouped rather than being orphaned by a rename.
  { key: "injection", title: "Reconstitution & Preparation" },
  { key: "dosing", title: "Dosing" },
  // Split out of "dosing" (Mark, 2026-08-30). "How is X dosed" (amount) and "how often is X dosed"
  // (frequency) are different queries with different intent, and answering both under one heading
  // meant one compound produced two entries a picker could not tell apart. Two categories let the
  // category itself do the disambiguating, so each picker lists a compound name exactly once.
  { key: "frequency", title: "Dosing Frequency" },
  { key: "side-effects", title: "Side Effects" },
  { key: "legality", title: "Legality & Regulation" },
  { key: "trt", title: "Testosterone & TRT" },
];

export interface FaqQuestion {
  /** URL segment: /faq/<slug>. */
  slug: string;
  /** In-depth hub section this question belongs to. */
  category: FaqCategory;
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
  /** Manual cross-links, for the GENERAL spokes only (needle size, bac water, the TRT cluster).
   *  Category pages and per-compound spokes DERIVE their Related list instead — see
   *  lib/faq-related.ts — because the useful relation for those two shapes is structural:
   *  a category page relates to other category pages, and a compound spoke relates to the same
   *  compound's other spokes. Setting this on either shape has no effect; the derivation wins. */
  related?: string[];
  /** Marks this entry as the CATEGORY PAGE for a category — the in-depth general answer that sits
   *  between /faq and the per-compound spokes. The hub features it at the head of its group, and
   *  every spoke in that category links up to it. At most one per category. */
  categoryFor?: FaqCategory;
  /** Compound FAQ pages end with a "Where to Buy" vendor block (standing rule). `compoundSlug`
   *  drives the shared <VendorHighlightBlock>'s /prices CTA; the vendor SET is the fixed curated
   *  trio pinned in the page. Injection-prep pages (needle/bac water) omit this. */
  whereToBuy?: { compoundSlug: string };
}

export const faqQuestions: FaqQuestion[] = [
  {
    slug: "what-are-research-peptides",
    category: "basics",
    categoryFor: "basics",
    question: "What are research peptides?",
    title: "What Are Research Peptides? Short Chains, Sold for Lab Use",
    metaDescription:
      "A peptide is a short chain of amino acids — shorter than a protein, larger than a single amino acid. “Research peptide” is a commercial category, not a chemical one: material sold labelled for laboratory use rather than approved for people.",
    searchTags: ["what are research peptides","what is a research peptide","research peptides meaning","peptides vs proteins","what does research peptide mean","are peptides drugs"],
    hubBlurb: "What a peptide actually is chemically, why “research peptide” describes a sales channel rather than a molecule, and how the category relates to approved drugs.",
    lede:
      "A peptide is a short chain of amino acids — longer than a single amino acid, shorter than a protein, with the boundary drawn loosely around fifty residues. “Research peptide” is not a chemical category at all: it describes how the material is sold, labelled for laboratory use rather than approved for people.",
    body: [
      { kind: "heading", text: "The chemistry, briefly" },
      { kind: "p", text: "Amino acids joined by peptide bonds form a chain. Two make a dipeptide, a handful an oligopeptide, and somewhere past roughly fifty the word becomes protein — a convention rather than a hard line. Length matters practically: short chains are digested in the gut, which is why most are studied by injection, and they clear quickly, which is why dosing intervals differ so widely between compounds." },
      { kind: "p", text: "Sequence determines everything else. BPC-157 is fifteen amino acids; semaglutide is a modified GLP-1 analogue engineered for a week-long half-life. Both are peptides. Almost nothing else about them is comparable, which is why this site keeps a page per compound rather than a page about peptides." },
      { kind: "heading", text: "“Research peptide” describes a channel, not a molecule" },
      { kind: "p", text: "The phrase is commercial. It marks material sold labelled for laboratory use — not evaluated, not approved, and not manufactured to pharmaceutical standards by default. The same molecule can exist in both worlds: semaglutide is an approved medicine under brand names and is also sold as research-grade powder. The chemistry does not change across that line; the regulatory status, the quality assurance and the legal position all do." },
      { kind: "p", text: "That is why purity documentation carries the weight it does here. With no approval process standing behind a vial, third-party certificates are the only evidence of what is in it." },
      { kind: "cta", text: "How vendors are assessed on exactly that evidence is set out in the", href: "/methodology", label: "methodology" },
      { kind: "heading", text: "Approved, investigational, or neither" },
      { kind: "list", items: [
        "Approved — a regulator has reviewed the evidence and cleared a specific product for a specific use. Semaglutide and tirzepatide are here.",
        "Investigational — in trials, with no approval anywhere yet. Retatrutide and cagrilintide are here.",
        "Neither — studied to varying depths, sometimes for decades, but never taken through a completed approval process. Most of the compounds people mean by “research peptide” sit here.",
      ]},
      { kind: "p", text: "The third group is the widest and the most uneven. Some have substantial animal literature and no human trials; others have early human data that stopped. What they share is the absence of a regulator's verdict, which is a different thing from a negative one." },
    ],
    handoff: { href: "/faq", label: "questions hub", text: "For the other common questions about research peptides, see the" },
  },
  {
    slug: "what-are-peptides-used-for",
    category: "uses",
    categoryFor: "uses",
    question: "What are peptides used for?",
    title: "What Are Peptides Used For? What the Research Actually Studied",
    metaDescription:
      "Research peptides cluster into a handful of areas — metabolic and weight, tissue repair, growth-hormone signalling, cognition, and pigmentation. What matters per compound is which of those a trial actually tested, and how far that testing went.",
    searchTags: ["what are peptides used for","what do research peptides do","peptide uses","what is bpc-157 used for","peptides for recovery","peptide research areas"],
    hubBlurb: "The research areas peptides cluster into, and why “used for” on this site means what a study examined rather than what a vendor advertises.",
    lede:
      "Research peptides cluster into a few areas: metabolic and weight regulation, tissue repair, growth-hormone signalling, cognition, and pigmentation. What a given compound is “used for” on this site means what the published research examined — which is frequently narrower than the claims made around it.",
    body: [
      { kind: "heading", text: "The clusters" },
      { kind: "list", items: [
        "Metabolic and weight — the incretin family, where the evidence is deepest because these compounds went through commercial drug development.",
        "Tissue repair and recovery — largely animal literature, often extensive, with human trials scarce.",
        "Growth-hormone signalling — secretagogues that raise endogenous GH rather than supplying it, with older clinical work behind several of them.",
        "Cognition and mood — a cluster where much of the human data was generated outside Western regulatory systems and is harder to appraise.",
        "Pigmentation and skin — a small group where the mechanism is well characterised and the safety literature is thin.",
      ]},
      { kind: "heading", text: "What “studied for” is doing in that sentence" },
      { kind: "p", text: "A compound being studied for something is not evidence that it achieves it. Trials fail, and a large share of the literature behind these compounds is preclinical — cells and animals, where a mechanism can be real and still not translate. Each profile states the evidence stage rather than flattening everything into “research shows.”" },
      { kind: "p", text: "The gap between the studied use and the marketed use is where most confusion on this subject originates. A peptide investigated in a rat tendon model becomes, three retellings later, a recovery product. The intermediate steps — does it work in humans, at what exposure, with what safety — are exactly the ones missing." },
      { kind: "cta", text: "For how the evidence behind each compound is weighed and labelled, see the", href: "/methodology", label: "methodology" },
      { kind: "heading", text: "Why the per-compound page is the real answer" },
      { kind: "p", text: "Grouping by research area is useful for orientation and misleading past that point. Two compounds in the same cluster can differ by decades of evidence: within the metabolic group, one has completed Phase 3 trials with published outcomes and another has never been given to a human. The cluster tells you what question was being asked, not what answer came back." },
    ],
    handoff: { href: "/faq", label: "questions hub", text: "For the other common questions about research peptides, see the" },
  },
  {
    slug: "how-are-peptides-reconstituted",
    category: "injection",
    categoryFor: "injection",
    question: "How are peptides reconstituted?",
    title: "How Are Peptides Reconstituted? The Arithmetic, Step by Step",
    metaDescription:
      "Reconstitution is arithmetic, not protocol: the water sets the concentration and the concentration sets the syringe units. Any volume works. Bacteriostatic versus sterile water, the mechanics, and why the vial contents never change.",
    searchTags: ["how to reconstitute peptides","peptide reconstitution","how much bac water","mixing peptides","bacteriostatic water peptides","reconstitution calculator"],
    hubBlurb: "Why any volume works, what the water actually changes, and the handling steps that protect the material — the general version of the per-compound maths.",
    lede:
      "Reconstitution is arithmetic rather than protocol. A vial holds a fixed mass of lyophilised powder; the water added is a solvent that sets how concentrated the solution becomes. Any volume works, because the amount of peptide drawn for a given dose is identical either way — only the number of syringe units changes.",
    body: [
      { kind: "heading", text: "What the water changes, and what it does not" },
      { kind: "p", text: "Adding more water lowers the concentration and raises the units measured for the same milligram amount. It does not dilute the dose, add anything, or make the material weaker. The only thing being optimised is legibility on the syringe barrel: a standard 100-unit insulin syringe holds 1 mL, so a combination that pushes one measurement past 100 units means drawing twice." },
      { kind: "p", text: "The arithmetic is one line. Units equal the dose in milligrams divided by the concentration in milligrams per millilitre, multiplied by one hundred. Everything else about reconstitution follows from that." },
      { kind: "cta", text: "To run it for a specific vial size and volume rather than by hand, use the", href: "/calculator", label: "dosage calculator" },
      { kind: "heading", text: "Bacteriostatic versus sterile water" },
      { kind: "p", text: "Bacteriostatic water contains 0.9% benzyl alcohol, a preservative that inhibits bacterial growth and permits a vial to be entered more than once. Sterile water has no preservative and is single-use: every entry after the first introduces organisms into a medium that will not suppress them. Where a vial is measured out across several occasions, that preservative is the entire distinction between the two." },
      { kind: "heading", text: "Handling" },
      { kind: "list", items: [
        "Both rubber stoppers are swabbed with alcohol and allowed to dry — wiping while wet moves contaminants rather than killing them.",
        "The water is aimed down the inside wall of the glass rather than onto the powder; a stream striking lyophilised peptide directly can denature it.",
        "The vial is swirled until dissolved rather than shaken, because peptides are sensitive to the shear forces agitation creates.",
        "A clear solution is expected; particulates or cloudiness after full dissolution indicate the vial should not be used.",
        "Reconstituted material is refrigerated. The lyophilised powder is comparatively stable; the solution is not.",
      ]},
      { kind: "p", text: "These are mechanical steps, and they are the one part of this subject where an instruction is simply an instruction. Nothing here depends on which compound is in the vial." },
      { kind: "heading", text: "Where the per-compound pages differ" },
      { kind: "p", text: "Vial sizes vary, and the dose points worth tabulating vary with them — a compound with a published trial schedule has meaningful milligram figures to convert, and one without has none. That is why the reference tables live on the individual pages rather than here." },
    ],
    handoff: { href: "/faq", label: "questions hub", text: "For the other common questions about research peptides, see the" },
  },
  {
    slug: "how-are-peptides-dosed",
    category: "dosing",
    categoryFor: "dosing",
    question: "How are peptides dosed?",
    title: "How Are Peptides Dosed? Trial Figures Versus Convention",
    metaDescription:
      "Two different kinds of figure circulate: what a trial or approved label established, and what a research community conventionally practises. They are not the same claim, and for most peptides only the second exists.",
    searchTags: ["how are peptides dosed","peptide dosing","peptide dosage guide","peptide dose amount","mg vs mcg peptides","peptide dosage mg"],
    hubBlurb: "Why two kinds of dosing figure circulate, how to tell them apart, and what half-life has to do with injection frequency.",
    lede:
      "Two different kinds of figure circulate, and confusing them is the central problem. One is what a clinical trial or an approved label actually established. The other is what a research community conventionally practises. For most research peptides only the second exists — and a convention is a practice that circulates, not a finding.",
    body: [
      { kind: "heading", text: "Telling the two apart" },
      { kind: "p", text: "A trial figure comes with a protocol, a participant count, and published outcomes; it can be checked. A convention comes with repetition. Both are worth reporting, and this site reports both while labelling which is which — an honest absence is more useful than a plausible number filling the gap." },
      { kind: "p", text: "The tell is attribution. Where a figure can be traced to a named trial or a product label, the page says so. Where it cannot, the page says that instead, rather than borrowing authority from the fact that a number is widely repeated." },
      { kind: "heading", text: "Where no trial established an amount" },
      { kind: "p", text: "For compounds with no completed human dosing trial — which is most of them — the honest answer to “how is this dosed” begins by saying that no trial established a dose, and then reports what circulates anyway. Both halves are true and the page needs both." },
      { kind: "heading", text: "How amounts are written" },
      { kind: "p", text: "Milligrams and micrograms both appear, and a factor of a thousand separates them: 250 mcg and 0.25 mg are the same amount written two ways. Trial protocols for the engineered incretins are usually stated in milligrams, while figures for the growth-hormone secretagogues are more often quoted in micrograms. Some preclinical figures are expressed per kilogram of body weight instead, which is a different kind of number and does not resolve to a fixed amount without one." },
      { kind: "cta", text: "To convert any milligram figure into syringe units, use the", href: "/calculator", label: "dosage calculator" },
    ],
    handoff: { href: "/faq", label: "questions hub", text: "For the other common questions about research peptides, see the" },
  },
  {
    slug: "how-often-are-peptides-dosed",
    category: "frequency",
    categoryFor: "frequency",
    question: "How often are peptides dosed?",
    title: "How Often Are Peptides Dosed? Half-Life Sets the Interval",
    metaDescription:
      "Frequency is not a preference — it follows from how fast a compound clears. Engineered incretins hold a concentration for days and appear weekly; short-lived secretagogues appear daily or more often. For most research peptides no trial established a schedule at all.",
    searchTags: ["how often are peptides dosed","peptide dosing frequency","how often to inject peptides","peptide dosing schedule","peptide half life dosing","weekly vs daily peptides"],
    hubBlurb: "Why one compound appears weekly and another several times a day, what titration is actually for, and how to read a schedule nobody ran a trial on.",
    lede:
      "Frequency follows from clearance rather than preference. A compound that leaves circulation in under an hour cannot hold a steady concentration on a weekly interval, and one engineered to persist for days has no reason to be given more often than that. Where a schedule exists at all, half-life is what set it.",
    body: [
      { kind: "heading", text: "Half-life sets the interval" },
      { kind: "p", text: "A compound cleared in under an hour cannot hold a steady concentration on weekly administration, which is why several growth-hormone secretagogues appear in multiple-times-daily schedules. Engineered incretins carry structural modifications that extend half-life to days, which is what makes once-weekly administration coherent for them." },
      { kind: "p", text: "That is also why frequency and amount are separate questions. Two schedules can deliver the same weekly total and behave differently, because what changes is the shape of the concentration curve rather than the quantity." },
      { kind: "heading", text: "What titration is for" },
      { kind: "p", text: "Where a schedule escalates in steps rather than starting at its maintenance figure, that is usually tolerability rather than efficacy: the published rationale is generally that starting high raises side-effect rates without improving outcomes. The escalation is a property of the published protocol, not a rule about how anything ought to be approached." },
      { kind: "heading", text: "Where no trial established a schedule" },
      { kind: "p", text: "For most research peptides no completed human trial fixed an interval, and what circulates instead is a convention — a practice that repeats, not a finding. Prof. Peptide reports those conventions and says plainly that they are conventions. Where a half-life has been measured, that measurement is the one piece of evidence a frequency claim can actually be checked against, so the per-compound pages lead with it." },
      { kind: "cta", text: "To convert any schedule's milligram figure into syringe units, use the", href: "/calculator", label: "dosage calculator" },
    ],
    handoff: { href: "/faq", label: "questions hub", text: "For the other common questions about research peptides, see the" },
  },
  {
    slug: "what-are-the-side-effects-of-peptides",
    category: "side-effects",
    categoryFor: "side-effects",
    question: "What are the side effects of peptides?",
    title: "What Are the Side Effects of Peptides? What Is Known, and What Isn’t",
    metaDescription:
      "For most research peptides no human trial has characterised a side-effect profile at all. Where effects are documented they are compound-specific — the incretins have trial-scale safety data, most others have almost none.",
    searchTags: ["peptide side effects","are peptides safe","research peptide side effects","peptide risks","do peptides have side effects","peptide safety"],
    hubBlurb: "Why a general answer is mostly an absence, what the documented effects look like where they exist, and why injection-site reactions are the one common thread.",
    lede:
      "For most research peptides, no human trial has characterised a side-effect profile at all — so the honest general answer is that it is largely unknown. Where effects are documented, they are compound-specific: the incretin drugs carry trial-scale safety data, and most other compounds carry almost none.",
    body: [
      { kind: "heading", text: "Why the general answer is an absence" },
      { kind: "p", text: "Side-effect profiles come from systematic collection during controlled trials. Compounds that never completed that process have no such dataset, and what circulates instead is self-report — uncontrolled, unblinded, and structurally unable to detect anything rare, delayed, or silent. Absence of reported effects in that setting is not evidence of safety; it is mostly evidence that nobody was measuring." },
      { kind: "p", text: "Preclinical work has the opposite limitation. Animal safety data can be extensive and still not transfer, because dose scaling, metabolism and exposure duration all differ." },
      { kind: "heading", text: "Where real data exists" },
      { kind: "p", text: "The incretin class is the exception. Gastrointestinal effects — nausea, vomiting, diarrhoea, constipation — are the most frequently reported in those trials, generally most pronounced during dose escalation. Those profiles come from thousands of participants under observation, which is a categorically different evidential basis from the rest of this field." },
      { kind: "p", text: "Injection-site reactions are the one thread running across almost everything administered subcutaneously: localised redness, irritation or swelling, independent of what is in the syringe." },
      { kind: "heading", text: "The questions the literature has not closed" },
      { kind: "p", text: "Some compounds raise theoretical concerns their evidence base cannot resolve — growth-signalling pathways and angiogenic mechanisms both prompt long-term questions that short studies were never designed to answer. Those pages say the question is open rather than answering it in either direction, because an unresolved question reported as resolved is the more damaging error." },
      { kind: "p", text: "Purity is a separate hazard from pharmacology. With no approval process standing behind a vial, contamination and mislabelling are failure modes that have nothing to do with the molecule itself." },
    ],
    handoff: { href: "/faq", label: "questions hub", text: "For the other common questions about research peptides, see the" },
  },
  {
    slug: "are-research-peptides-legal",
    category: "legality",
    categoryFor: "legality",
    question: "Are research peptides legal in the United States?",
    title: "Are Research Peptides Legal in the US? The Three Lanes, Explained",
    metaDescription:
      "Most research peptides are not controlled substances, but they are not approved for human use either — and \u201Clegal\u201D depends entirely on which channel you mean. 503A pharmacy compounding, 503B outsourcing, and research-use-only sales are three separate regimes. Nothing proposed in 2026 has been finalised.",
    searchTags: [
      "are research peptides legal",
      "are peptides legal",
      "is it legal to buy research peptides",
      "peptide legality usa",
      "are research peptides legal in the us",
      "research use only peptides legal",
      "peptide fda regulation",
      "are peptides controlled substances",
    ],
    hubBlurb:
      "Why there is no single answer: 503A compounding, 503B outsourcing and research-use-only sales are three separate regulatory channels, and the 2026 movement is proposed rather than final.",
    lede:
      "There is no single answer, because \u201Clegal\u201D depends on which channel is meant. Most research peptides are not federally scheduled controlled substances, but they are also not FDA-approved for human use \u2014 selling one for human use makes it an unapproved new drug regardless of what the label says. Compounding, outsourcing and research-use-only sales are three separate regimes with different rules.",
    body: [
      { kind: "heading", text: "The short answer, and why it cannot be shorter" },
      {
        kind: "p",
        text:
          "Two things are true at once, and most coverage picks one. Most research peptides are not listed as federally scheduled controlled substances, so possessing one is not the kind of offence that possessing a Schedule II drug is. And no research peptide is FDA-approved for human use \u2014 which means that once a product is intended for human use, it is an unapproved new drug under the Federal Food, Drug, and Cosmetic Act, and distributing it violates the Act. The gap between those two facts is the entire subject.",
      },
      {
        kind: "p",
        text:
          "That is a regulatory grey area, not a settled permission. It is also moving: several federal actions in 2026 have changed what is proposed, and none of them has yet changed what is final.",
      },
      { kind: "heading", text: "Three lanes, not one rulebook" },
      {
        kind: "p",
        text:
          "The single most common error is treating \u201Cpeptide regulation\u201D as one thing. It runs through three separate channels, each with its own statutory test, its own list of substances, and its own timeline. A rule that moves in one lane frequently says nothing at all about the others.",
      },
      {
        kind: "list",
        items: [
          "503A \u2014 a state-licensed pharmacy compounding a drug for one identified patient against a prescription.",
          "503B \u2014 an FDA-registered outsourcing facility compounding in bulk, generally without a patient-specific prescription.",
          "Research-use-only \u2014 material sold labelled for laboratory use, outside both compounding regimes entirely.",
        ],
      },
      {
        kind: "cta",
        text: "This framework, and which 2026 action lands in which lane, is set out in full in",
        href: "/news/glp1-compounding-503a-503b-three-lanes-2026",
        label: "the three-lanes explainer",
      },
      { kind: "heading", text: "Category 1 and Category 2 \u2014 what placement actually restricts" },
      {
        kind: "p",
        text:
          "For the compounding lanes, the FDA sorts nominated bulk drug substances into categories. FDA titles them plainly: Category 1 is \u201CBulk Drug Substances Under Evaluation,\u201D Category 2 \u201Cthose that Raise Significant Safety Concerns,\u201D Category 3 \u201Cnominated without adequate support.\u201D Category 1 is an interim status carrying enforcement discretion during assessment \u2014 not authorisation, and not placement on the 503A Bulks List, which takes a final rule. In April 2026 the FDA removed twelve peptides from Category 2 after their nominations were withdrawn (docket FDA-2025-N-6895).",
      },
      {
        kind: "p",
        text:
          "The precision that matters: removal from Category 2 is not authorisation to compound, and it does not move a substance into Category 1. FDA\u2019s Category 1 list as updated May 14, 2026 contains none of the seven peptides the advisory committee reviewed \u2014 its only peptide-family entries are GHK-Cu (except injectable routes) and Vasoactive Intestinal Peptide. A vendor presenting the Category 2 removals as \u201Cpeptides are being legalised\u201D is describing something that did not happen.",
      },
      { kind: "heading", text: "What moved in 2026 \u2014 and what \u201Cproposed\u201D means" },
      {
        kind: "p",
        text:
          "On April 30, 2026 the FDA proposed to exclude semaglutide, tirzepatide and liraglutide from the 503B Bulks List, having found no clinical need. The notice published in the Federal Register on May 1 and the comment window, extended to July 30, 2026, has closed. The agency is weighing comments. No final rule has issued \u2014 proposed and banned remain different words.",
      },
      {
        kind: "p",
        text:
          "Separately, the FDA\u2019s Pharmacy Compounding Advisory Committee met on July 23\u201324, 2026 and recommended six peptides \u2014 BPC-157, KPV, TB-500, MOTS-c, Epitalon and Semax \u2014 for the 503A Bulks List, rejecting DSIP. Those votes are non-binding recommendations. Placement requires the FDA to act through rulemaking with HHS sign-off, a process observers expect to run into 2027. Nothing became compoundable on the day of the vote.",
      },
      {
        kind: "cta",
        text: "The recorded tallies and what the vote does and does not do are covered in",
        href: "/news/fda-pcac-peptide-vote-july-2026",
        label: "the PCAC vote recap",
      },
      { kind: "heading", text: "A \u201Cresearch use only\u201D label is not a legal shield" },
      {
        kind: "p",
        text:
          "This is the part most often misunderstood, and it is settled enough to state plainly: the disclaimer does not control the analysis. Intended use does. The FDA has issued a run of warning letters to peptide sellers \u2014 among them Summit Research Peptides (December 2024), USApeptide.com (February 2025), Pinnacle Peptides (December 2025) and Wholesale Peptide (June 2026) \u2014 each finding that despite labelling reading \u201Cresearch use only\u201D or \u201Cnot for human consumption,\u201D evidence from the labelling and websites established the products were intended as drugs for human use. On that finding the products are unapproved new drugs under section 505(a).",
      },
      {
        kind: "p",
        text:
          "The same theory drives private litigation. On August 12, 2026 Eli Lilly filed six federal lawsuits over retatrutide sales, pleading state unfair-competition and consumer-protection statutes rather than patent or FDCA claims, and arguing that the marketing conduct around a label \u2014 dosing charts, injection instructions, weight-loss claims, consumer-facing distribution \u2014 is evidence of intended human use. Those cases are unresolved: a lawsuit is an allegation, and no court has found any defendant liable.",
      },
      {
        kind: "cta",
        text: "The pleading architecture, and why Lilly avoided patent and FDCA claims, is examined in",
        href: "/news/lilly-retatrutide-lawsuits-ruo-sellers-2026",
        label: "the retatrutide lawsuits piece",
      },
      { kind: "heading", text: "States are moving too \u2014 and what a state law cannot do" },
      {
        kind: "p",
        text:
          "Louisiana Act 374 took effect on August 1, 2026, the first state statute we can identify that legislates on peptides by name. Its enacted text restrains state licensing boards from prohibiting providers and pharmacists from working with peptides, conditioned on compliance with the federal compounding provisions and the applicable USP-NF chapters.",
      },
      {
        kind: "p",
        text:
          "A state controls licensure; it does not control what federal law permits to be compounded. A statute telling state boards not to punish a pharmacist removes one enforcer, not the federal prohibition. Act 374 is drafted to avoid that collision \u2014 its protection only ever attaches to conduct that is already federally compliant.",
      },
      {
        kind: "cta",
        text: "What the legislature removed from the bill before passage, and why it matters, is in",
        href: "/news/louisiana-act-374-state-peptide-compounding-2026",
        label: "the Act 374 analysis",
      },
      { kind: "heading", text: "What this does not mean" },
      {
        kind: "list",
        items: [
          "This is not legal advice. It reports the regulatory position; it does not tell anyone what they may lawfully do.",
          "None of the 2026 movement is final. A proposal is not a rule, and an advisory recommendation is not an approval.",
          "\u201CNot a controlled substance\u201D is not the same as \u201Capproved,\u201D and it is not a green light for human use.",
          "The position is evolving, and the dates on this page are part of its meaning.",
        ],
      },
      {
        kind: "cta",
        text: "How Prof. Peptide sources and checks what it publishes is set out in the",
        href: "/methodology",
        label: "methodology",
      },
      {
        kind: "sources",
        primary: [
          {
            cite: "FDA, Warning Letter to Wholesale Peptide (MARCS-CMS 729447, June 17, 2026)",
            href: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/wholesale-peptide-729447-06172026",
            note: "the FDA's position that \u201Cresearch use only\u201D labelling does not prevent a product being an unapproved new drug where evidence shows intended human use",
          },
          {
            cite: "FDA, Warning Letter to USApeptide.com (MARCS-CMS 696885, February 26, 2025)",
            href: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/usapeptidecom-696885-02262025",
            note: "the same finding against a different seller, with the disclaimers quoted",
          },
          {
            cite: "FDA, Warning Letter to Summit Research Peptides (MARCS-CMS 695607, December 10, 2024)",
            href: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/summit-research-peptides-695607-12102024",
            note: "the earliest of the recent letters, establishing this as a pattern rather than a one-off",
          },
          {
            cite: "FDA, Bulk Drug Substances Nominated for Use in Compounding Under Section 503A (categories 1\u20133, updated May 14, 2026)",
            href: "https://www.fda.gov/media/94155/download",
            note: "FDA\u2019s own titles for the categories, and the Category 1 contents \u2014 which include none of the seven peptides the July 2026 advisory committee reviewed",
          },
          {
            cite: "Louisiana Act No. 374 (SB 253), 2026 Regular Session \u2014 enrolled act enacting R.S. 37:23.5",
            href: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1478374",
            note: "the enacted Louisiana text, which differs materially from the bill as introduced",
          },
        ],
        secondary: [
          {
            cite: "Prof. Peptide, The 503B Exclusion and the Three Lanes of Peptide Access (August 17, 2026)",
            href: "/news/glp1-compounding-503a-503b-three-lanes-2026",
            note: "the lane framework, the Category 2 removals and docket FDA-2025-N-6895, and the Federal Register dates and comment deadline, each cited to primary sources there",
          },
          {
            cite: "Prof. Peptide, FDA Advisory Panel Recommends Six Peptides for Compounding (August 5, 2026)",
            href: "/news/fda-pcac-peptide-vote-july-2026",
            note: "the July 23\u201324 PCAC tallies and the rulemaking steps that must follow a recommendation",
          },
          {
            cite: "Prof. Peptide, Lilly Sues Six Retatrutide Sellers (August 29, 2026)",
            href: "/news/lilly-retatrutide-lawsuits-ruo-sellers-2026",
            note: "the six case captions, the eight-state pleading, and the absence of patent and FDCA claims",
          },
        ],
      },
    ],
    handoff: {
      href: "/faq",
      label: "questions hub",
      text: "For the other common questions about research peptides, see the",
    },
  },
  {
    slug: "what-size-needle-for-peptides",
    category: "injection",
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
    category: "injection",
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
    category: "injection",
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
    slug: "how-much-bac-water-for-retatrutide",
    category: "injection",
    question: "How much bacteriostatic water for retatrutide?",
    title: "How Much Bacteriostatic Water for Retatrutide? Reconstitution Math",
    metaDescription:
      "Any volume works — the water only sets the concentration. 1 mL into a 10 mg vial gives 10 mg/mL, so 2 mg is 20 units on a 100-unit insulin syringe; 2 mL gives 5 mg/mL and doubles the units. Reference table for common vial sizes, with the arithmetic shown.",
    searchTags: [
      "how much bac water for retatrutide",
      "retatrutide reconstitution",
      "how to reconstitute retatrutide",
      "retatrutide bacteriostatic water",
      "retatrutide mixing calculator",
      "retatrutide units",
      "how much water to mix retatrutide",
      "reta reconstitution",
    ],
    hubBlurb:
      "There is no single correct volume — the water sets the concentration, and the concentration sets the syringe units. The reference table converts vial size and volume into units for the trial dose points.",
    lede:
      "Any volume works, because the bacteriostatic water only sets the concentration — it does not change how much peptide is in the vial. Adding 1 mL to a 10 mg vial gives 10 mg/mL, so a 2 mg dose measures 20 units on a 100-unit insulin syringe. Adding 2 mL gives 5 mg/mL and the same 2 mg becomes 40 units.",
    body: [
      { kind: "heading", text: "Why there is no single correct volume" },
      {
        kind: "p",
        text:
          "Reconstitution is arithmetic, not a protocol. The vial contains a fixed mass of lyophilized peptide; the water is a solvent that determines how concentrated the resulting solution is. More water means a lower concentration and more syringe units for the same milligram amount — the amount of peptide drawn is identical either way. What a volume changes is how easy the measurement is to read on the syringe barrel.",
      },
      {
        kind: "p",
        text:
          "The practical constraint is the syringe. A standard 100-unit insulin syringe holds 1 mL, so any combination that pushes a single measurement past 100 units means drawing twice. Choosing a concentration that lands the intended measurement comfortably inside one barrel is the only thing the volume decision is optimizing.",
      },
      { kind: "heading", text: "Reference table: volume, concentration, and syringe units" },
      {
        kind: "table",
        caption:
          "Units on a 100-unit (1 mL) insulin syringe. Dose points are the Phase 3 TRIUMPH escalation steps, listed because they are the figures the trials used — not as a recommendation to use any of them.",
        headers: ["Vial + water", "Concentration", "2 mg", "4 mg", "6 mg", "9 mg", "12 mg"],
        rows: [
          ["10 mg + 1 mL", "10 mg/mL", "20 units", "40 units", "60 units", "90 units", "—"],
          ["10 mg + 2 mL", "5 mg/mL", "40 units", "80 units", "over 100", "over 100", "—"],
          ["20 mg + 1 mL", "20 mg/mL", "10 units", "20 units", "30 units", "45 units", "60 units"],
          ["20 mg + 2 mL", "10 mg/mL", "20 units", "40 units", "60 units", "90 units", "over 100"],
        ],
        note:
          "\u2014 marks a dose larger than the vial holds. \u201COver 100\u201D marks a measurement that exceeds one 100-unit syringe. The arithmetic is: units = (dose in mg \u00f7 concentration in mg/mL) \u00d7 100.",
      },
      {
        kind: "cta",
        text: "To run these numbers for any vial size and volume rather than reading them off a table, use the",
        href: "/calculator",
        label: "dosage calculator",
      },
      { kind: "heading", text: "Bacteriostatic versus sterile water" },
      {
        kind: "p",
        text:
          "Bacteriostatic water contains 0.9% benzyl alcohol, a preservative that inhibits bacterial growth and allows a reconstituted vial to be entered more than once. Sterile water contains no preservative: it is single-use, because every needle entry after the first risks introducing organisms into a medium that will not suppress them. For a vial measured out across multiple occasions, the preservative is the entire distinction.",
      },
      { kind: "heading", text: "Mechanics" },
      {
        kind: "list",
        items: [
          "Swab both rubber stoppers with alcohol and let them dry — wiping while wet moves contaminants rather than killing them.",
          "Aim the water down the inside wall of the glass, not directly onto the powder. A stream striking lyophilized peptide directly can denature it.",
          "Swirl gently until dissolved. Do not shake: peptides are sensitive to the shear forces agitation creates.",
          "A clear solution is expected. Visible particulates or cloudiness after full dissolution indicate the vial should not be used.",
          "Refrigerate after reconstitution. The lyophilized powder is comparatively stable, but the solution is not.",
        ],
      },
      { kind: "heading", text: "Storage after reconstitution" },
      {
        kind: "p",
        text:
          "Reconstituted peptide is stored refrigerated at 2-8 degrees Celsius and protected from light. Retatrutide has no approved product label, so there is no manufacturer-established in-use stability period to cite — the storage practice reported here is general peptide handling, not a figure derived from a retatrutide stability study.",
      },
    ],
    handoff: {
      href: "/peptides/retatrutide",
      label: "Retatrutide profile",
      text: "For other common questions regarding retatrutide, see the full",
    },
    whereToBuy: { compoundSlug: "retatrutide" },
  },
  {
    slug: "how-is-retatrutide-dosed-in-research",
    category: "dosing",
    question: "How is retatrutide dosed in research?",
    title: "How Is Retatrutide Dosed in Research? Trial Doses and Escalation",
    metaDescription:
      "Phase 2 tested 0.5-12 mg weekly; Phase 3 TRIUMPH escalates from 2 mg every four weeks to 9 mg and 12 mg maintenance. Retatrutide is investigational with no approved label, so there is no approved dosing standard — only what the trials administered.",
    searchTags: [
      "how is retatrutide dosed",
      "retatrutide dosing research",
      "retatrutide trial doses",
      "retatrutide escalation schedule",
      "triumph retatrutide dose",
      "retatrutide phase 3 dosing",
      "retatrutide mg per week",
      "reta dosing",
    ],
    hubBlurb:
      "The doses the retatrutide trials actually administered — Phase 2's 0.5-12 mg range and the Phase 3 TRIUMPH escalation — and why no approved dosing standard exists.",
    lede:
      "Retatrutide is administered once weekly by subcutaneous injection in trials. Phase 2 tested 0.5 mg to 12 mg weekly; Phase 3 TRIUMPH uses a stepwise escalation starting at 2 mg and increasing every four weeks, with 9 mg and 12 mg tested as maintenance doses. It is investigational, so no approved dosing standard exists outside these protocols.",
    body: [
      { kind: "heading", text: "What the trials administered" },
      {
        kind: "p",
        text:
          "The Phase 2 program tested weekly doses from 0.5 mg to 12 mg. The Phase 3 TRIUMPH program escalates in four-week steps — 2 mg, then 4 mg, then 6 mg, then 9 mg, with 12 mg as the highest maintenance dose tested. Half-life is approximately six days, which is the pharmacokinetic basis for the once-weekly interval, with steady state reached across four to five weeks at each level.",
      },
      {
        kind: "p",
        text:
          "The escalation is not incidental to the protocol. Phase 2 data showed that beginning at 4 mg rather than titrating up increased gastrointestinal side-effect rates without improving outcomes, which is why the trials step rather than start high.",
      },
      { kind: "heading", text: "Why there is no approved dosing standard" },
      {
        kind: "p",
        text:
          "Retatrutide has no marketing approval in any jurisdiction, so there is no prescribing information, no label-established dose, and no regulator-reviewed dosing standard. Every figure above is a trial protocol figure — what was administered to enrolled participants under supervision, reported here as what the research used. Material sold as research-use-only carries no dosing instructions of any kind.",
      },
      {
        kind: "cta",
        text: "To convert any of these milligram figures into syringe units for a given vial and volume, use the",
        href: "/calculator",
        label: "dosage calculator",
      },
      {
        kind: "list",
        items: [
          "Phase 2: 0.5 mg to 12 mg weekly, subcutaneous.",
          "Phase 3 TRIUMPH: 2 mg start, escalating every four weeks.",
          "TRIUMPH-4 tested 9 mg and 12 mg as maintenance doses.",
          "Approximately six-day half-life; once-weekly administration.",
          "No approved label, and therefore no approved dosing standard.",
        ],
      },
    ],
    handoff: {
      href: "/peptides/retatrutide",
      label: "Retatrutide profile",
      text: "For other common questions regarding retatrutide, see the full",
    },
    whereToBuy: { compoundSlug: "retatrutide" },
  },
  {
    slug: "how-often-is-retatrutide-dosed",
    category: "frequency",
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
    whereToBuy: { compoundSlug: "retatrutide" },
  },
  {
    slug: "what-is-retatrutide-used-for",
    category: "uses",
    question: "What is retatrutide used for?",
    title: "What Is Retatrutide Used For? The Indications Actually Being Trialled",
    metaDescription:
      "Retatrutide is investigational and approved nowhere, so the answer is what Lilly\u2019s TRIUMPH programme is testing. Obesity and type 2 diabetes have reported; cardiovascular outcomes, sleep apnea and metabolic liver disease are still running.",
    searchTags: ["what is retatrutide used for","retatrutide uses","retatrutide indications","what does retatrutide do","retatrutide weight loss","retatrutide diabetes","retatrutide clinical trials"],
    hubBlurb: "Which indications have reported and which are still running \u2014 organised by how far the evidence has actually travelled, not by what the compound might do.",
    lede:
      "Retatrutide holds no approval in any jurisdiction, so there is no labelled indication to report. What exists instead is a trial programme: Eli Lilly\u2019s TRIUMPH studies, where obesity is the lead indication and type 2 diabetes the second. Four further indications are under investigation and have not reported Phase 3 results.",
    body: [
      { kind: "heading", text: "Indications that have reported" },
      { kind: "p", text: "Two Phase 3 readouts have landed. TRIUMPH-4, reported in December 2025, enrolled adults with obesity and knee osteoarthritis and recorded average weight loss of 28.7% at the 12 mg dose across 68 weeks; the same study recorded a 44-point improvement on the WOMAC pain subscale, an osteoarthritis measure. TRANSCEND-T2D-1, reported in March 2026, enrolled people with type 2 diabetes and recorded a 2.0% reduction in A1C alongside 16.8% weight loss at 12 mg over 40 weeks." },
      { kind: "p", text: "Those two figures answer different questions and are not interchangeable. A1C measures glycaemic control; the weight figures measure body mass. A study reporting both is reporting two outcomes, not one outcome twice." },
      { kind: "heading", text: "Indications still under investigation" },
      { kind: "list", items: [
        "Cardiovascular outcomes \u2014 TRIUMPH-3 is running in patients with established cardiovascular disease, with results expected in 2027 or later.",
        "Obstructive sleep apnea \u2014 Phase 2 recorded a 42% reduction in the apnea-hypopnea index; a dedicated Phase 3 sits in the TRIUMPH programme.",
        "Metabolic liver disease (MASH) \u2014 Phase 2 recorded reductions in liver fat and improved insulin sensitivity, with a Phase 3 underway.",
      ]},
      { kind: "p", text: "A Phase 2 signal is a reason to run a Phase 3, not a smaller version of one. The apnea and liver figures above are the former, and the distinction is the whole difference between an indication that has been demonstrated and one that is being tested." },
      { kind: "heading", text: "Why the list is broader than most compounds\u2019" },
      { kind: "p", text: "Retatrutide agonises three receptors \u2014 GLP-1, GIP and glucagon \u2014 where semaglutide engages one and tirzepatide two. The glucagon arm is what makes a wide indication list mechanistically plausible, because glucagon signalling touches hepatic fat and energy expenditure rather than appetite alone. Plausible is not demonstrated: the breadth of the programme reflects a hypothesis Lilly is funding, and each indication stands or falls on its own readout." },
      { kind: "p", text: "That is also why this page will date. Two of six indications have reported; the rest are scheduled through 2027, and any of them can fail." },
      { kind: "list", items: [
        "No approval anywhere \u2014 every use below is investigational.",
        "Reported: obesity (TRIUMPH-4, 28.7% at 12 mg / 68 weeks) and type 2 diabetes (TRANSCEND-T2D-1, 2.0% A1C at 12 mg / 40 weeks).",
        "Reported alongside obesity: knee osteoarthritis pain (44-point WOMAC improvement, TRIUMPH-4).",
        "Running, not reported: cardiovascular outcomes, sleep apnea, metabolic liver disease.",
      ]},
    ],
    handoff: {
      href: "/peptides/retatrutide",
      label: "Retatrutide profile",
      text: "For other common questions regarding retatrutide, see the full",
    },
    whereToBuy: { compoundSlug: "retatrutide" },
  },
  {
    slug: "what-are-the-side-effects-of-retatrutide",
    category: "side-effects",
    question: "What are the side effects of retatrutide?",
    title: "Retatrutide Side Effects: Reported Rates from the Trials",
    metaDescription:
      "Gastrointestinal effects dominate, as across the incretin class \u2014 but dysesthesia, reported in about 21% at 12 mg in TRIUMPH-4, is specific to retatrutide and not seen with semaglutide or tirzepatide. Reported rates, with the trial that reported each.",
    searchTags: ["retatrutide side effects","retatrutide safety","does retatrutide cause nausea","retatrutide dysesthesia","retatrutide side effects 12mg","retatrutide adverse events","is retatrutide safe"],
    hubBlurb: "The reported rates with the trial behind each, the dysesthesia finding that is specific to retatrutide, and what trial safety data does not tell you about a research-market vial.",
    lede:
      "Gastrointestinal effects dominate, as they do across the incretin class, and they were most pronounced during dose escalation. One finding is specific to retatrutide: dysesthesia \u2014 abnormal skin sensations \u2014 was reported in about 21% of participants at 12 mg in TRIUMPH-4, and has not been reported with semaglutide or tirzepatide.",
    body: [
      { kind: "heading", text: "The dysesthesia finding" },
      { kind: "p", text: "Dysesthesia covers tingling, burning or prickling sensations in the skin. It is the one effect that separates retatrutide\u2019s reported profile from the rest of the class, and the proposed explanation is the glucagon-receptor arm that the other two compounds do not have. That explanation is a hypothesis about mechanism rather than a demonstrated cause." },
      { kind: "heading", text: "Reported rates" },
      { kind: "table",
        caption: "Effects reported in the retatrutide trials, with the rate and the study that reported it. Ranges reflect different doses across studies; the higher figure is generally the 12 mg arm.",
        headers: ["Effect", "Reported rate", "Reported in"],
        rows: [
          ["Nausea", "up to 60%", "Phase 2, 12 mg"],
          ["Diarrhoea", "15\u201333%", "higher doses"],
          ["Vomiting", "21\u201326%", "higher doses"],
          ["Constipation", "11\u201325%", "across doses"],
          ["Dysesthesia", "~21%", "TRIUMPH-4, 12 mg"],
          ["Injection-site reactions", "up to 8%", "across doses"],
          ["Heart-rhythm changes", "~6% (vs 3% placebo)", "trials"],
          ["Gallbladder events", "~1.1%", "trials"],
          ["Liver-enzyme elevation (transient ALT)", "~1%", "trials"],
          ["Pancreatitis", "~0.4%", "Phase 2"],
        ],
        note: "Resting heart rate rose by an average of 5\u201310 beats per minute, peaking around week 24 before declining. Every figure here is an observed rate in a controlled trial population, not a prediction for any individual.",
      },
      { kind: "heading", text: "How the totals compare" },
      { kind: "p", text: "Discontinuation attributable to side effects ranged from 6% to 16% across the Phase 2 trials, concentrated in the escalation phase rather than at maintenance. The serious adverse event rate was 4% \u2014 the same figure recorded in the placebo arm, which is the comparison that gives the number meaning. Most reported effects were graded mild to moderate and diminished with continued administration." },
      { kind: "heading", text: "What this data does not cover" },
      { kind: "p", text: "Every rate above comes from a controlled trial of Lilly\u2019s clinical material, administered at defined doses under supervision, with adverse events collected systematically. A vial sold on the research market is not that material, and the trial safety profile does not transfer to it: identity, purity and actual content are separate questions from pharmacology, and no rate table can speak to them." },
      { kind: "p", text: "The programme is also ongoing. The longest published exposure is 68 weeks, so effects that would only appear over years are outside what any current dataset could have detected." },
    ],
    handoff: {
      href: "/peptides/retatrutide",
      label: "Retatrutide profile",
      text: "For other common questions regarding retatrutide, see the full",
    },
    whereToBuy: { compoundSlug: "retatrutide" },
  },
  {
    slug: "how-often-is-tirzepatide-dosed",
    category: "frequency",
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
    whereToBuy: { compoundSlug: "tirzepatide" },
  },
  {
    slug: "how-often-is-semaglutide-dosed",
    category: "frequency",
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
    whereToBuy: { compoundSlug: "semaglutide" },
  },
  {
    slug: "how-often-are-cjc-1295-and-ipamorelin-dosed",
    category: "frequency",
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
    category: "frequency",
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
    whereToBuy: { compoundSlug: "bpc-157" },
  },
  {
    slug: "how-often-is-tb-500-dosed",
    category: "frequency",
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
    whereToBuy: { compoundSlug: "tb-500" },
  },
  {
    slug: "thymosin-beta-4-side-effects",
    category: "side-effects",
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
    whereToBuy: { compoundSlug: "tb-500" },
  },
  {
    slug: "igf-1-lr3-side-effects",
    category: "side-effects",
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
    category: "side-effects",
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
    whereToBuy: { compoundSlug: "klow" },
  },
  {
    slug: "how-often-is-testosterone-cypionate-injected",
    category: "trt",
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
    related: [
      "how-often-is-testosterone-enanthate-injected",
      "can-testosterone-be-injected-subcutaneously",
      "how-long-does-trt-take-to-work",
      "how-often-is-bloodwork-done-on-trt",
    ],
  },
  {
    slug: "how-often-is-testosterone-enanthate-injected",
    category: "trt",
    question: "How often is testosterone enanthate injected?",
    title: "How Often Is Testosterone Enanthate Injected? What the Label and Guidelines Say",
    metaDescription:
      "Two FDA labels differ: the classic intramuscular testosterone enanthate label states 50–400 mg every two to four weeks; Xyosted, an approved weekly subcutaneous auto-injector, states 75 mg once weekly (50–100 mg range). The 2018 Endocrine Society guideline describes 75–100 mg weekly or 150–200 mg every two weeks.",
    searchTags: [
      "how often is testosterone enanthate injected",
      "testosterone enanthate injection frequency",
      "how often to inject testosterone enanthate",
      "testosterone enanthate dosing frequency",
      "testosterone enanthate how often injection",
    ],
    hubBlurb:
      "What the classic intramuscular testosterone enanthate label, the weekly-subcutaneous Xyosted label, and the 2018 Endocrine Society guideline each state about injection frequency.",
    lede:
      "Two FDA labels for testosterone enanthate give different schedules. The classic intramuscular label (Delatestryl lineage) states 50–400 mg every two to four weeks. Xyosted, an FDA-approved weekly subcutaneous auto-injector, states 75 mg once a week, titratable 50–100 mg. The 2018 Endocrine Society guideline describes 75–100 mg weekly or 150–200 mg every two weeks.",
    body: [
      {
        kind: "heading",
        text: "What the intramuscular label states",
      },
      {
        kind: "p",
        text:
          "The FDA prescribing information for intramuscular testosterone enanthate (the Delatestryl lineage, a Schedule III controlled substance) gives the replacement dosage as 50 to 400 mg every two to four weeks, for intramuscular use only, injected deeply into the gluteal muscle. The label attributes the multi-week interval to slow absorption of the ester from its oil depot rather than to a long half-life of testosterone itself — it states testosterone's half-life as 10 to 100 minutes.",
      },
      {
        kind: "heading",
        text: "What the Xyosted label states (weekly subcutaneous)",
      },
      {
        kind: "p",
        text:
          "Xyosted is an FDA-approved testosterone enanthate auto-injector for once-weekly subcutaneous injection in the abdomen. Its labeled starting dose is 75 mg once a week, adjustable in 25 mg steps to a range of 50 to 100 mg weekly based on testosterone trough levels. This is a different route and a shorter interval than the classic intramuscular label — reported here as the Xyosted label states it.",
      },
      {
        kind: "heading",
        text: "What the Endocrine Society guideline describes",
      },
      {
        kind: "p",
        text:
          "The 2018 Endocrine Society Clinical Practice Guideline (Bhasin et al., The Journal of Clinical Endocrinology & Metabolism, 2018) lists, as typical starting doses for intramuscular testosterone enanthate or cypionate, 150–200 mg every two weeks or 75–100 mg weekly.",
      },
      {
        kind: "heading",
        text: "Where the enanthate schedules differ",
      },
      {
        kind: "p",
        text:
          "Across the named sources the intervals differ: the classic intramuscular label, 50–400 mg every two to four weeks; Xyosted, 75 mg (50–100 mg) subcutaneously once weekly; the Endocrine Society guideline, 75–100 mg weekly or 150–200 mg every two weeks. Each is reported as its source states it. Testosterone enanthate is a prescription medication and a controlled substance; which schedule applies to a given person is a clinical decision made with a licensed physician. This page is educational and describes what the documents say — it is not medical advice.",
      },
      {
        kind: "list",
        items: [
          "Classic IM label (Delatestryl lineage): 50–400 mg intramuscularly every two to four weeks.",
          "Xyosted (FDA-approved): 75 mg subcutaneously once weekly, titratable 50–100 mg.",
          "2018 Endocrine Society guideline: 75–100 mg weekly or 150–200 mg every two weeks.",
        ],
      },
    ],
    handoff: {
      href: "/app",
      label: "Prof. Peptide app",
      text:
        "For estimated testosterone level curves modelled from published pharmacokinetic data across weekly, every-two-week, and titration schedules, see the",
    },
    related: [
      "how-often-is-testosterone-cypionate-injected",
      "can-testosterone-be-injected-subcutaneously",
      "how-long-does-trt-take-to-work",
      "how-often-is-bloodwork-done-on-trt",
    ],
  },
  {
    slug: "can-testosterone-be-injected-subcutaneously",
    category: "trt",
    question: "Can testosterone be injected subcutaneously?",
    title: "Can Testosterone Be Injected Subcutaneously? What the Labels Say",
    metaDescription:
      "Yes — Xyosted, an FDA-approved testosterone enanthate auto-injector, is labeled for once-weekly subcutaneous injection (75 mg, 50–100 mg range). The classic Depo-Testosterone and Delatestryl labels are intramuscular only. A 2018 study (Am J Health-Syst Pharm) found subcutaneous exposure comparable to intramuscular.",
    searchTags: [
      "can you inject testosterone subcutaneously",
      "can testosterone be injected subcutaneously",
      "subcutaneous testosterone injection",
      "testosterone subq vs im",
      "testosterone subcutaneous vs intramuscular",
      "subq testosterone injection",
    ],
    hubBlurb:
      "Whether testosterone can be injected subcutaneously — the FDA-approved weekly SC product, the intramuscular-only classic labels, and a published SC-vs-IM pharmacokinetic comparison.",
    lede:
      "Yes. Xyosted, an FDA-approved testosterone enanthate auto-injector, is labeled for once-weekly subcutaneous injection in the abdomen (75 mg, titratable 50–100 mg). The classic testosterone labels — Depo-Testosterone and Delatestryl — are intramuscular only. A 2018 pharmacokinetic study found subcutaneous testosterone delivered exposure comparable to intramuscular injection.",
    body: [
      {
        kind: "heading",
        text: "Yes — there is an FDA-approved subcutaneous product",
      },
      {
        kind: "p",
        text:
          "Xyosted (testosterone enanthate) is FDA-approved for testosterone replacement in adult men by once-weekly subcutaneous injection in the abdominal region. Its labeled starting dose is 75 mg once a week, adjustable to a range of 50 to 100 mg. That approval is the direct answer: testosterone can be injected subcutaneously, and there is a product specifically labeled for that route.",
      },
      {
        kind: "heading",
        text: "The classic labels are intramuscular only",
      },
      {
        kind: "p",
        text:
          "The older testosterone ester labels are written for intramuscular use. Depo-Testosterone (testosterone cypionate) states intramuscular use only, and Delatestryl (testosterone enanthate) states “for intramuscular use only,” injected deep in the gluteal muscle. The subcutaneous route is specific to products such as Xyosted that are labeled for it.",
      },
      {
        kind: "heading",
        text: "What a pharmacokinetic comparison found",
      },
      {
        kind: "p",
        text:
          "A 2018 pilot pharmacokinetic study (Wilson, Kiang, and Ensom, American Journal of Health-System Pharmacy, 75(6):351–358) compared subcutaneous and intramuscular testosterone injection in people on stable therapy. It reported that total testosterone exposure was comparable between the two routes (mean AUC 1.7 versus 1.9 nmol·days/L/mg, p > 0.05) and that the subcutaneous route was more tolerable. This is that study's finding, reported as such.",
      },
      {
        kind: "heading",
        text: "What this means",
      },
      {
        kind: "p",
        text:
          "The named sources support that subcutaneous testosterone injection is an established, FDA-approved route (Xyosted) and that a published comparison found it delivered testosterone exposure comparable to intramuscular injection. Testosterone is a prescription medication and a controlled substance; route and dose are clinical decisions made with a licensed physician. This page is educational and describes what the documents say — it is not medical advice.",
      },
      {
        kind: "list",
        items: [
          "Xyosted is FDA-approved for once-weekly subcutaneous testosterone (75 mg, 50–100 mg range).",
          "Depo-Testosterone and Delatestryl are labeled intramuscular only.",
          "A 2018 study (Am J Health-Syst Pharm 75(6):351) found SC exposure comparable to IM (AUC 1.7 vs 1.9, p > 0.05).",
        ],
      },
    ],
    handoff: {
      href: "/app",
      label: "Prof. Peptide app",
      text:
        "For estimated testosterone level curves modelled from published pharmacokinetic data across weekly and every-two-week schedules, see the",
    },
    related: [
      "how-often-is-testosterone-cypionate-injected",
      "how-often-is-testosterone-enanthate-injected",
      "how-long-does-trt-take-to-work",
      "how-often-is-bloodwork-done-on-trt",
    ],
  },
  {
    slug: "how-long-does-trt-take-to-work",
    category: "trt",
    question: "How long does TRT take to work?",
    title: "How Long Does TRT Take to Work? What the Research Reports",
    metaDescription:
      "A 2011 review (Saad et al., European Journal of Endocrinology) mapped testosterone therapy's onset: sexual interest at about three weeks, erections up to six months, mood at three to six weeks, body composition at twelve to sixteen weeks, red cells at three months. Reported findings, not promises.",
    searchTags: [
      "how long does trt take to work",
      "how long for testosterone to work",
      "trt timeline",
      "how long does testosterone take to work",
      "testosterone therapy timeline",
      "when does trt start working",
    ],
    hubBlurb:
      "What the published onset-of-effects review (Saad et al. 2011) reports about when testosterone therapy's effects appear and peak, domain by domain.",
    lede:
      "A widely cited review — Saad et al. (2011, European Journal of Endocrinology) — mapped when testosterone treatment's effects appear. It reported effects on sexual interest after about three weeks, changes in erections up to six months, mood effects at three to six weeks, and body-composition changes over twelve to sixteen weeks. These are the review's reported timelines, not guarantees.",
    body: [
      {
        kind: "heading",
        text: "Where the timelines come from",
      },
      {
        kind: "p",
        text:
          "The standard reference for how quickly testosterone therapy acts is a 2011 review — Saad, Aversa, Isidori, Zafalon, Zitzmann, and Gooren, “Onset of effects of testosterone treatment and time span until maximum effects are achieved,” European Journal of Endocrinology, 165(5):675–685. It compiled, across published studies, when each type of effect first appears and when it reaches a maximum. The figures below are that review's, reported as findings.",
      },
      {
        kind: "heading",
        text: "Sexual effects",
      },
      {
        kind: "p",
        text:
          "The review reported that effects on sexual interest appear after three weeks, plateauing at six weeks, with no further increase expected beyond that. Changes in erections and ejaculations may require up to six months.",
      },
      {
        kind: "heading",
        text: "Mood, metabolic, and body-composition effects",
      },
      {
        kind: "p",
        text:
          "It reported that effects on depressive mood become detectable after three to six weeks, with a maximum at eighteen to thirty weeks. Effects on lipids appeared after four weeks, maximal at six to twelve months. Insulin sensitivity may improve within days, but effects on glycemic control become evident only after three to twelve months. Changes in fat mass, lean body mass, and muscle strength occur within twelve to sixteen weeks and stabilize at six to twelve months.",
      },
      {
        kind: "heading",
        text: "Blood, prostate, and bone",
      },
      {
        kind: "p",
        text:
          "The review reported that effects on red blood cell production are evident at three months, peaking at nine to twelve months; that PSA and prostate volume rise marginally, plateauing at twelve months; and that effects on bone are detectable after six months and continue for at least three years.",
      },
      {
        kind: "heading",
        text: "How to read these numbers",
      },
      {
        kind: "p",
        text:
          "These are timelines the review compiled from published studies — when effects were observed to appear and peak — not a promise of what any individual will experience. Testosterone therapy is a prescription treatment; whether it is appropriate, and what to expect, are clinical questions for a licensed physician. This page is educational and describes what the review reports — it is not medical advice.",
      },
      {
        kind: "list",
        items: [
          "Saad et al. 2011 (Eur J Endocrinol 165(5):675): sexual interest at ~3 weeks; erections up to 6 months.",
          "Mood at 3–6 weeks (max 18–30 weeks); lipids from 4 weeks; body composition at 12–16 weeks.",
          "Red cells at 3 months (peak 9–12 months); bone from 6 months. Reported findings, not promises.",
        ],
      },
    ],
    handoff: {
      href: "/app",
      label: "Prof. Peptide app",
      text:
        "To track a testosterone protocol and its estimated level curves over time, see the",
    },
    related: [
      "what-is-a-normal-testosterone-level",
      "how-often-is-bloodwork-done-on-trt",
      "does-trt-cause-hair-loss",
    ],
  },
  {
    slug: "what-is-a-normal-testosterone-level",
    category: "trt",
    question: "What is a normal testosterone level?",
    title: "What Is a Normal Testosterone Level? Reference Ranges by Source",
    metaDescription:
      "The harmonized normal total-testosterone range (Travison 2017, healthy nonobese men 19–39) is 264–916 ng/dL, median 531; the 2018 Endocrine Society guideline uses 264 ng/dL as the lower diagnostic threshold. Ranges vary by lab and assay — reported as the named sources state.",
    searchTags: [
      "what is a normal testosterone level",
      "normal testosterone levels by age",
      "testosterone reference range",
      "normal testosterone range",
      "healthy testosterone level",
      "testosterone levels chart",
    ],
    hubBlurb:
      "The harmonized normal testosterone reference range (264–916 ng/dL) from Travison 2017 and the Endocrine Society's 264 ng/dL diagnostic threshold — with the caveat that ranges vary by lab and assay.",
    lede:
      "The most widely used harmonized reference range for total testosterone in healthy nonobese men aged 19–39 is 264–916 ng/dL (2.5th–97.5th percentile), with a median of 531 ng/dL, per Travison et al. (2017). The 2018 Endocrine Society guideline uses 264 ng/dL as the lower diagnostic threshold. Ranges vary by lab and assay.",
    body: [
      {
        kind: "heading",
        text: "The harmonized reference range",
      },
      {
        kind: "p",
        text:
          "A 2017 study — Travison, Vesper, Orwoll, et al., The Journal of Clinical Endocrinology & Metabolism, 102(4):1161–1173 — pooled four cohorts of healthy nonobese men aged 19–39 and, after standardizing to a CDC reference method, reported these total-testosterone percentiles: 2.5th 264, 5th 303, 50th (median) 531, 95th 852, 97.5th 916 ng/dL. The 264–916 ng/dL span between the 2.5th and 97.5th percentiles is the commonly cited “normal” range.",
      },
      {
        kind: "heading",
        text: "The diagnostic threshold guidelines use",
      },
      {
        kind: "p",
        text:
          "The 2018 Endocrine Society Clinical Practice Guideline (Bhasin et al., JCEM 103(5):1715–1744) adopts 264 ng/dL — the lower limit of that harmonized range — as the threshold below which, with consistent symptoms and a repeat morning measurement, hypogonadism is considered. These figures are reported as the sources state them, not as a personal target.",
      },
      {
        kind: "heading",
        text: "Why ranges vary by lab and assay",
      },
      {
        kind: "p",
        text:
          "The Travison paper is explicit that lab results are not directly comparable: “A substantial proportion of intercohort variation in testosterone levels is due to assay differences.” Before harmonization, three cohorts of men aged 40–49 measured 501, 551, and 618 ng/dL; after standardizing to the CDC method they converged to 487, 494, and 471. A given lab's reference interval depends on its assay and population — which is why the harmonized range exists, and why an individual result is read against the reporting lab's own range.",
      },
      {
        kind: "list",
        items: [
          "Harmonized normal range (Travison 2017, healthy nonobese men 19–39): 264–916 ng/dL, median 531.",
          "Endocrine Society 2018 lower diagnostic threshold: 264 ng/dL.",
          "Results vary by lab and assay — read against the reporting lab's own reference interval.",
        ],
      },
    ],
    handoff: {
      href: "/app",
      label: "Prof. Peptide app",
      text:
        "To log testosterone results and track them over time against a protocol, see the",
    },
    related: [
      "how-often-is-bloodwork-done-on-trt",
      "how-long-does-trt-take-to-work",
      "does-trt-cause-hair-loss",
    ],
  },
  {
    slug: "how-often-is-bloodwork-done-on-trt",
    category: "trt",
    question: "How often is bloodwork done on TRT?",
    title: "How Often Is Bloodwork Done on TRT? The Monitoring Schedule",
    metaDescription:
      "The 2018 Endocrine Society guideline recommends evaluating men on TRT at 3–6 months then annually: testosterone and hematocrit at baseline, 3–6 months, and annually; PSA and prostate exam before starting and at 3–6 months for men 40+ with baseline PSA above 0.6 ng/mL. The guideline's protocol, reported.",
    searchTags: [
      "how often is bloodwork done on trt",
      "trt blood work how often",
      "trt monitoring schedule",
      "what labs for trt",
      "trt lab tests",
      "trt bloodwork frequency",
    ],
    hubBlurb:
      "The 2018 Endocrine Society monitoring schedule for testosterone therapy — testosterone and hematocrit at baseline, 3–6 months, and annually; PSA and a prostate exam for men 40+.",
    lede:
      "The 2018 Endocrine Society guideline recommends evaluating men on testosterone therapy at 3–6 months after starting, then annually. It calls for measuring testosterone and hematocrit at baseline, 3–6 months, and annually, plus PSA and a prostate exam before starting and at 3–6 months for men 40 and older with a baseline PSA above 0.6 ng/mL.",
    body: [
      {
        kind: "heading",
        text: "The Endocrine Society monitoring schedule",
      },
      {
        kind: "p",
        text:
          "The 2018 Endocrine Society Clinical Practice Guideline (Bhasin et al., The Journal of Clinical Endocrinology & Metabolism, 103(5):1715–1744) recommends a standardized plan during the first year of therapy: evaluate symptoms, adverse effects, and adherence, and measure serum testosterone and hematocrit, at an initial follow-up of 3–6 months after starting.",
      },
      {
        kind: "heading",
        text: "Testosterone",
      },
      {
        kind: "p",
        text:
          "The guideline recommends measuring serum testosterone to confirm it is in the target range (it targets the mid-normal range for the assay used), checked at the 3–6 month follow-up and then periodically.",
      },
      {
        kind: "heading",
        text: "Hematocrit",
      },
      {
        kind: "p",
        text:
          "Because testosterone can raise red-cell mass, the guideline recommends checking hematocrit at baseline, at 3–6 months, and then annually. It advises against starting therapy in a man whose baseline hematocrit is already above the lab's upper limit without first addressing the erythrocytosis risk.",
      },
      {
        kind: "heading",
        text: "PSA and prostate exam",
      },
      {
        kind: "p",
        text:
          "For men 40 and older with a baseline PSA above 0.6 ng/mL, the guideline recommends a digital rectal exam and PSA before starting, again at 3–6 months, and thereafter in line with standard prostate-cancer screening guidelines.",
      },
      {
        kind: "p",
        text:
          "This is the guideline's monitoring protocol, reported as written. Testosterone therapy is a prescription treatment; what to test and how often for a given person is a clinical decision made with a licensed physician. This page is educational and describes what the guideline says — it is not medical advice.",
      },
      {
        kind: "list",
        items: [
          "Initial follow-up: 3–6 months after starting, then annually (Endocrine Society 2018).",
          "Testosterone + hematocrit: baseline, 3–6 months, then annually.",
          "PSA + prostate exam: men 40+ with baseline PSA >0.6 ng/mL — before, at 3–6 months, then per screening guidelines.",
        ],
      },
    ],
    handoff: {
      href: "/app",
      label: "Prof. Peptide app",
      text:
        "To log and track these labs over time on a testosterone protocol, see the",
    },
    related: [
      "what-is-a-normal-testosterone-level",
      "how-long-does-trt-take-to-work",
      "does-trt-cause-hair-loss",
    ],
  },
  {
    slug: "does-trt-cause-hair-loss",
    category: "trt",
    question: "Does TRT cause hair loss?",
    title: "Does TRT Cause Hair Loss? What the Mechanism and Evidence Show",
    metaDescription:
      "Male pattern hair loss is DHT-driven: 5-alpha-reductase converts testosterone to DHT, which miniaturizes scalp follicles in genetically susceptible men (~80% heritable). TRT raises androgens, but the cited literature establishes no TRT-specific hair-loss rate — the mechanism is known, the outcome is not quantified.",
    searchTags: [
      "does trt cause hair loss",
      "trt hair loss",
      "does testosterone cause hair loss",
      "testosterone therapy hair loss",
      "trt and balding",
      "does trt cause balding",
    ],
    hubBlurb:
      "The DHT mechanism behind androgenetic alopecia and why TRT-specific hair-loss outcomes are not quantified in the cited literature — mechanism known, outcome not established.",
    lede:
      "Male pattern hair loss is driven by DHT, a testosterone metabolite: 5-alpha-reductase converts testosterone to DHT, which binds scalp-follicle receptors and miniaturizes them in genetically susceptible men (heredity is ~80% of the predisposition). Testosterone therapy raises androgen levels, but the cited literature does not establish a TRT-specific rate of hair loss — the mechanism is known, the outcome is not quantified.",
    body: [
      {
        kind: "heading",
        text: "The mechanism: testosterone → DHT → follicle miniaturization",
      },
      {
        kind: "p",
        text:
          "Male androgenetic alopecia is an androgen-driven process. As the Endotext chapter on Male Androgenetic Alopecia (Asfour, Cranwell, Sinclair, 2023) describes it, the enzyme 5-alpha-reductase converts testosterone to the more active metabolite DHT; “DHT binds the androgen receptor with 5 times the avidity of testosterone,” and DHT binding to the scalp hair follicle androgen receptors produces male androgenetic alopecia. The histological hallmark is progressive hair-follicle miniaturization — shorter growth phases and smaller hairs.",
      },
      {
        kind: "heading",
        text: "Genetic susceptibility decides who is affected",
      },
      {
        kind: "p",
        text:
          "Whether this process happens is largely inherited. The same source reports that “twin studies identified heredity as accounting for around 80% of the predisposition to baldness,” following a polygenic pattern rather than simple dominance. The androgen-receptor gene is described as necessary but not sufficient — androgens drive the process, but only in men whose genetics make their follicles susceptible.",
      },
      {
        kind: "heading",
        text: "Where TRT fits — and what is not established",
      },
      {
        kind: "p",
        text:
          "Testosterone therapy raises circulating androgens, including the substrate 5-alpha-reductase converts to DHT — so mechanistically it can accelerate hair loss in men already genetically susceptible to androgenetic alopecia. But the cited literature stops there: the androgenetic-alopecia source does not address exogenous testosterone therapy and scalp hair loss, and provides no TRT-specific incidence. What is established is the DHT mechanism and its genetic gating; what is not established, in these sources, is how often — or how much — hair loss occurs specifically as a result of testosterone therapy. The historical observation that castrated men did not develop pattern baldness unless given testosterone shows androgen dependence, not a therapy-specific rate.",
      },
      {
        kind: "heading",
        text: "The honest bottom line",
      },
      {
        kind: "p",
        text:
          "So the answer is neither “yes, TRT causes hair loss” nor “no, it doesn't.” Hair loss on testosterone therapy depends on individual genetic susceptibility to androgenetic alopecia through the DHT pathway; the mechanism is well-documented, but the cited literature does not quantify a TRT-specific outcome. Testosterone therapy is a prescription treatment, and questions about a specific person's risk are clinical ones for a licensed physician. This page describes what the sources establish and where they are silent — it is not medical advice.",
      },
      {
        kind: "list",
        items: [
          "DHT (from testosterone via 5-alpha-reductase) drives androgenetic alopecia; DHT binds follicle receptors ~5× more avidly than testosterone (Endotext, Asfour 2023).",
          "Heredity accounts for ~80% of the predisposition — genetics gate who is susceptible.",
          "TRT raises androgens, but the cited literature establishes no TRT-specific hair-loss rate — mechanism known, outcome not quantified.",
        ],
      },
    ],
    handoff: {
      href: "/app",
      label: "Prof. Peptide app",
      text:
        "To track a testosterone protocol and its bloodwork over time, see the",
    },
    related: [
      "how-long-does-trt-take-to-work",
      "what-is-a-normal-testosterone-level",
      "how-often-is-bloodwork-done-on-trt",
    ],
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
    // Tables flatten to "caption: header row; each data row" so the FAQPage schema answer carries
    // the SAME figures the reader sees — never a second, hand-written copy that could drift.
    // Sources are NOT folded into the schema answer: a citation list is not part of the answer to
    // the question, and padding the FAQPage answer with reference text would misrepresent it.
    else if (b.kind === "sources") { /* intentionally omitted from the schema answer */ }
    else if (b.kind === "table") {
      parts.push(`${b.caption} ${b.headers.join(", ")}. ${b.rows.map((r) => r.join(", ")).join("; ")}.`);
      if (b.note) parts.push(b.note);
    }
  }
  parts.push(`${q.handoff.text} ${q.handoff.label}.`);
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

export const faqQuestionBySlug = (slug: string): FaqQuestion | undefined =>
  faqQuestions.find((q) => q.slug === slug);
