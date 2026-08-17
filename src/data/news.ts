export interface NewsArticle {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  // Profile slugs this article is ABOUT (not merely mentions) — drives <ProfileNews>
  // on the peptide pages. HAND-SET: tag an article to a compound only when the
  // compound is a genuine subject. The 503B piece links retatrutide only to say it
  // was never eligible, so it is NOT tagged retatrutide. `scripts/check-news-tags.mjs`
  // warns (never blocks) if a tag isn't also linked inline in the article body.
  peptides?: string[];
}

// Canonical, ordered list of news articles (newest first).
// The /news index and the homepage "Latest News" block both read from this array,
// so prepending a new entry here updates both automatically — no other edits needed.
//
// When adding an article, also create src/app/news/<slug>/page.tsx and build its
// metadata with buildPageMetadata({ path: "/news/<slug>", ... }) from "@/lib/seo".
// That helper requires `path` and always emits alternates.canonical, so a new
// article can never ship without its self-canonical <link rel="canonical">.
export const articles: NewsArticle[] = [
  {
    title: "The 503B Exclusion of Semaglutide, Tirzepatide, and Liraglutide — and the Three Lanes of Peptide Access",
    slug: "glp1-compounding-503a-503b-three-lanes-2026",
    peptides: ["semaglutide", "tirzepatide"],
    date: "August 17, 2026",
    excerpt:
      "The FDA has proposed to bar outsourcing facilities from bulk-compounding semaglutide, tirzepatide, and liraglutide — the concrete current news. But “the rules changed” is too coarse: compounding runs through two separate federal channels, 503A (a pharmacy compounding for one patient) and 503B (bulk outsourcing), and they moved differently. Sort it into three lanes — FDA-approved drugs, compoundable peptides (503A/Category 1), and research-use-only peptides — and it’s clear which channel each rule touches. The count to keep straight: zero peptides are confirmed in Category 1; twelve were removed from Category 2, six were recommended, and removal isn’t authorization. Prof. Peptide’s lane — research peptides — is separate and unaffected by these specific actions.",
  },
  {
    title: "Peptides Loosen, GLP-1 Compounding Tightens — The FDA’s Two Opposite Tracks",
    slug: "fda-peptides-loosen-glp1-compounding-tightens-2026",
    peptides: ["bpc-157", "tb-500", "mots-c", "semaglutide", "tirzepatide"],
    date: "August 8, 2026",
    excerpt:
      "Hearing that the FDA is loosening peptide rules and banning compounded GLP-1s in the same week isn’t a contradiction — they’re two separate regulatory tracks moving in opposite directions. Track 1: twelve peptides came off Category 2 and a panel recommended six for the 503A list (recommendations, not approvals). Track 2: the FDA proposed — not finalized — to exclude semaglutide, tirzepatide, and liraglutide from the 503B bulks list. Plus a third layer, the states, which have moved on GLP-1s specifically. The unmissable point: removal from Category 2 is not authorization to compound, and nothing is legal to compound today that wasn’t yesterday.",
  },
  {
    title: "FDA Advisory Panel Recommends Six Peptides for Compounding — What the Vote Does and Doesn’t Do",
    slug: "fda-pcac-peptide-vote-july-2026",
    peptides: ["bpc-157", "kpv", "tb-500", "mots-c", "epitalon", "semax", "dsip"],
    date: "August 5, 2026",
    excerpt:
      "The FDA’s Pharmacy Compounding Advisory Committee voted July 23–24 to recommend BPC-157, KPV, TB-500, MOTS-c, Epitalon, and Semax for the 503A Bulks List (8–6 and 7–5 splits) and rejected DSIP. But these are non-binding recommendations, not approvals — the FDA must still act through rulemaking, into 2027, with HHS sign-off. Nothing is legal to compound that wasn’t yesterday. Inside: the tallies, why the panel overruled its own scientists, the conflict-of-interest questions, and how Category 2, a PCAC vote, and the 503A list differ.",
  },
  {
    title: "ENDO 2026 Recap — GLP-1 and Peptide Readouts from the Endocrine Society Meeting",
    slug: "endo-2026-glp1-recap-june-2026",
    peptides: ["cagrisema", "cagrilintide"],
    date: "June 16, 2026",
    excerpt:
      "Recap of ENDO 2026 (Chicago, June 13–16): a GLP-1 physical-activity decline and the muscle-preservation angle, reassuring male-fertility data, a CagriSema meta-analysis (SUN-726), real-world adherence patterns, and Entera Bio’s preclinical oral peptides EB618 and EB612. Each finding is labeled by evidence stage with primary-source links.",
  },
  {
    title: "Semaglutide Slowed Epigenetic Aging Markers in a Randomized Trial — In a Specific Population",
    slug: "semaglutide-biological-aging-rct-june-2026",
    peptides: ["semaglutide"],
    date: "June 16, 2026",
    excerpt:
      "A UC San Diego analysis in Nature Communications found semaglutide slowed multiple epigenetic-aging clocks (DunedinPACE ~9% slower; PCGrimAge −3.08 years) in a 32-week randomized, double-blind, placebo-controlled trial. The catch: it’s a secondary biomarker analysis in adults with HIV-associated lipohypertrophy — early, population-specific evidence, not proof of a longevity drug.",
  },
  {
    title: "What Is MariTide? Amgen’s Once-Monthly GLP-1/GIP Drug Heads Into a Six-Study Phase 3 Program",
    slug: "amgen-maritide-glp1-gip-explainer-2026",
    date: "June 5, 2026",
    excerpt:
      "A peptide-antibody conjugate that activates GLP-1 while blocking GIP — the mirror image of tirzepatide — MariTide is now in an expanding Phase 3 program, including a trial switching patients off weekly GLP-1s.",
  },
  {
    title: "FDA Moves to Bar Outsourcing Facilities From Bulk-Compounding Semaglutide, Tirzepatide, and Liraglutide",
    slug: "fda-503b-glp1-bulk-compounding-2026",
    peptides: ["semaglutide", "tirzepatide"],
    date: "June 5, 2026",
    excerpt:
      "The FDA found no clinical need to keep the three leading GLP-1 drugs on the 503B bulks list. A public comment window runs through June 29 — here’s what the proposal does, and doesn’t, cover.",
  },
  {
    title: "Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial",
    slug: "retatrutide-triumph-1-phase-3-results",
    peptides: ["retatrutide"],
    date: "May 21, 2026",
    excerpt:
      "Eli Lilly’s investigational triple agonist retatrutide produced 30.3% average weight loss at 104 weeks in the pivotal TRIUMPH-1 Phase 3 trial — comparable to bariatric surgery outcomes. Here’s the full breakdown of the topline data and what comes next.",
  },
  {
    title: "ECO2026 Recap — Oral GLP-1 Data from Novo, Lilly, and Viking",
    slug: "eco2026-oral-glp1-recap-may-2026",
    peptides: ["semaglutide", "tirzepatide"],
    date: "May 17, 2026",
    excerpt:
      "The European Congress on Obesity (ECO2026) ran May 12-15 in Istanbul. Novo Nordisk, Eli Lilly, and Viking Therapeutics each presented new oral GLP-1 data — including a Wegovy pill sub-analysis showing 21.6% weight loss in early responders, Lilly’s maintenance trial results, and Viking’s Phase 2 VK2735 readout. Here’s what the data showed and why it matters.",
  },
  {
    title: "Retatrutide Phase 3 Update — Diabetes and Osteoarthritis Trials Hit Primary Endpoints",
    slug: "retatrutide-phase-3-update-may-2026",
    peptides: ["retatrutide"],
    date: "May 11, 2026",
    excerpt:
      "The first Phase 3 readouts from retatrutide’s TRIUMPH and TRANSCEND-T2D programs are in. Here’s what TRANSCEND-T2D-1 and TRIUMPH-4 showed and what comes next.",
  },
  {
    title: "FDA Releases Official Agenda for July Peptide Compounding Meeting — Here’s What’s on It",
    slug: "fda-pcac-meeting-agenda-july-2026",
    peptides: ["bpc-157", "kpv", "tb-500", "mots-c", "dsip", "semax", "epitalon"],
    date: "April 28, 2026",
    excerpt:
      "The FDA published the official Federal Register notice for its July 23-24 Pharmacy Compounding Advisory Committee meeting, naming the seven peptides under review and the conditions each is being considered for.",
  },
  {
    title: "FDA Moves to Restore Peptide Access — What Researchers Need to Know",
    slug: "fda-peptide-compounding-update-april-2026",
    date: "April 16, 2026",
    excerpt:
      "The FDA posted a Federal Register notice considering lifting restrictions on seven Category 2 peptides, with an advisory panel scheduled for late July 2026. Here’s what it means for the research community.",
  },
  {
    title: "RFK’s Peptide Ruling: Where Things Stand in April 2026",
    slug: "rfk-peptide-update-april-2026",
    date: "April 12, 2026",
    excerpt:
      "RFK Jr. announced 14 peptides would return to legal compounding status — but the FDA hasn’t published the official list yet. Here’s what we know, what’s still pending, and what it means for researchers.",
  },
  {
    title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
    slug: "rfk-peptide-ban-2026",
    peptides: ["bpc-157", "tb-500", "cjc-1295", "semax"],
    date: "April 10, 2026",
    excerpt:
      "HHS Secretary Robert F. Kennedy Jr. announced that 14 of 19 previously restricted peptides will be moved off the FDA’s “do not compound” list — the largest regulatory reversal in U.S. peptide history.",
  },
];

// Articles a given peptide profile should surface, newest first (the array is
// already ordered newest-first). Backs <ProfileNews>. An article appears on a
// profile only when the compound is a hand-set subject in `peptides`, never for a
// passing mention. Returns [] when nothing matches, so the profile shows no section.
export function articlesForPeptide(slug: string): NewsArticle[] {
  return articles.filter((a) => a.peptides?.includes(slug));
}
