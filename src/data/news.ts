export interface NewsArticle {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
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
    title: "ENDO 2026 Recap — GLP-1 and Peptide Readouts from the Endocrine Society Meeting",
    slug: "endo-2026-glp1-recap-june-2026",
    date: "June 16, 2026",
    excerpt:
      "Recap of ENDO 2026 (Chicago, June 13–16): a GLP-1 physical-activity decline and the muscle-preservation angle, reassuring male-fertility data, a CagriSema meta-analysis (SUN-726), real-world adherence patterns, and Entera Bio’s preclinical oral peptides EB618 and EB612. Each finding is labeled by evidence stage with primary-source links.",
  },
  {
    title: "Semaglutide Slowed Epigenetic Aging Markers in a Randomized Trial — In a Specific Population",
    slug: "semaglutide-biological-aging-rct-june-2026",
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
    date: "June 5, 2026",
    excerpt:
      "The FDA found no clinical need to keep the three leading GLP-1 drugs on the 503B bulks list. A public comment window runs through June 29 — here’s what the proposal does, and doesn’t, cover.",
  },
  {
    title: "Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial",
    slug: "retatrutide-triumph-1-phase-3-results",
    date: "May 21, 2026",
    excerpt:
      "Eli Lilly’s investigational triple agonist retatrutide produced 30.3% average weight loss at 104 weeks in the pivotal TRIUMPH-1 Phase 3 trial — comparable to bariatric surgery outcomes. Here’s the full breakdown of the topline data and what comes next.",
  },
  {
    title: "ECO2026 Recap — Oral GLP-1 Data from Novo, Lilly, and Viking",
    slug: "eco2026-oral-glp1-recap-may-2026",
    date: "May 17, 2026",
    excerpt:
      "The European Congress on Obesity (ECO2026) ran May 12-15 in Istanbul. Novo Nordisk, Eli Lilly, and Viking Therapeutics each presented new oral GLP-1 data — including a Wegovy pill sub-analysis showing 21.6% weight loss in early responders, Lilly’s maintenance trial results, and Viking’s Phase 2 VK2735 readout. Here’s what the data showed and why it matters.",
  },
  {
    title: "Retatrutide Phase 3 Update — Diabetes and Osteoarthritis Trials Hit Primary Endpoints",
    slug: "retatrutide-phase-3-update-may-2026",
    date: "May 11, 2026",
    excerpt:
      "The first Phase 3 readouts from retatrutide’s TRIUMPH and TRANSCEND-T2D programs are in. Here’s what TRANSCEND-T2D-1 and TRIUMPH-4 showed and what comes next.",
  },
  {
    title: "FDA Releases Official Agenda for July Peptide Compounding Meeting — Here’s What’s on It",
    slug: "fda-pcac-meeting-agenda-july-2026",
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
    date: "April 10, 2026",
    excerpt:
      "HHS Secretary Robert F. Kennedy Jr. announced that 14 of 19 previously restricted peptides will be moved off the FDA’s “do not compound” list — the largest regulatory reversal in U.S. peptide history.",
  },
];
