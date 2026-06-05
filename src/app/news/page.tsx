import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/news" },
  title: "News — Peptide Research & Regulatory Updates | Prof. Peptide",
  description:
    "Latest news on peptide research, FDA regulatory changes, and supplement industry developments. Independent reporting from Prof. Peptide.",
  openGraph: {
    title: "News — Peptide Research & Regulatory Updates",
    description: "Latest news on peptide research, FDA regulatory changes, and supplement industry developments.",
    images: [{ url: "https://profpeptide.com/og-image.png", width: 1024, height: 1024, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: ["https://profpeptide.com/og-image.png"],
  },
};

const articles = [
  {
    title: "What Is MariTide? Amgen’s Once-Monthly GLP-1/GIP Drug Heads Into a Six-Study Phase 3 Program",
    slug: "amgen-maritide-glp1-gip-explainer-2026",
    date: "June 5, 2026",
    excerpt:
      "A peptide-antibody conjugate that activates GLP-1 while blocking GIP — the mirror image of tirzepatide — MariTide is now in an expanding Phase 3 program, including a trial switching patients off weekly GLP-1s.",
  },
  {
    title: "Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial",
    slug: "retatrutide-triumph-1-phase-3-results",
    date: "May 21, 2026",
    excerpt:
      "Eli Lilly\u2019s investigational triple agonist retatrutide produced 30.3% average weight loss at 104 weeks in the pivotal TRIUMPH-1 Phase 3 trial \u2014 comparable to bariatric surgery outcomes. Here\u2019s the full breakdown of the topline data and what comes next.",
  },
  {
    title: "ECO2026 Recap \u2014 Oral GLP-1 Data from Novo, Lilly, and Viking",
    slug: "eco2026-oral-glp1-recap-may-2026",
    date: "May 17, 2026",
    excerpt:
      "The European Congress on Obesity (ECO2026) ran May 12-15 in Istanbul. Novo Nordisk, Eli Lilly, and Viking Therapeutics each presented new oral GLP-1 data \u2014 including a Wegovy pill sub-analysis showing 21.6% weight loss in early responders, Lilly\u2019s maintenance trial results, and Viking\u2019s Phase 2 VK2735 readout. Here\u2019s what the data showed and why it matters.",
  },
  {
    title: "Retatrutide Phase 3 Update \u2014 Diabetes and Osteoarthritis Trials Hit Primary Endpoints",
    slug: "retatrutide-phase-3-update-may-2026",
    date: "May 11, 2026",
    excerpt:
      "The first Phase 3 readouts from retatrutide\u2019s TRIUMPH and TRANSCEND-T2D programs are in. Here\u2019s what TRANSCEND-T2D-1 and TRIUMPH-4 showed and what comes next.",
  },
  {
    title: "FDA Releases Official Agenda for July Peptide Compounding Meeting \u2014 Here\u2019s What\u2019s on It",
    slug: "fda-pcac-meeting-agenda-july-2026",
    date: "April 28, 2026",
    excerpt:
      "The FDA published the official Federal Register notice for its July 23-24 Pharmacy Compounding Advisory Committee meeting, naming the seven peptides under review and the conditions each is being considered for.",
  },
  {
    title: "FDA Moves to Restore Peptide Access \u2014 What Researchers Need to Know",
    slug: "fda-peptide-compounding-update-april-2026",
    date: "April 16, 2026",
    excerpt:
      "The FDA posted a Federal Register notice considering lifting restrictions on seven Category 2 peptides, with an advisory panel scheduled for late July 2026. Here\u2019s what it means for the research community.",
  },
  {
    title: "RFK\u2019s Peptide Ruling: Where Things Stand in April 2026",
    slug: "rfk-peptide-update-april-2026",
    date: "April 12, 2026",
    excerpt:
      "RFK Jr. announced 14 peptides would return to legal compounding status \u2014 but the FDA hasn\u2019t published the official list yet. Here\u2019s what we know, what\u2019s still pending, and what it means for researchers.",
  },
  {
    title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
    slug: "rfk-peptide-ban-2026",
    date: "April 10, 2026",
    excerpt:
      "HHS Secretary Robert F. Kennedy Jr. announced that 14 of 19 previously restricted peptides will be moved off the FDA\u2019s \u201Cdo not compound\u201D list \u2014 the largest regulatory reversal in U.S. peptide history.",
  },
];

export default function NewsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News" },
        ],
      }} />
      <div className="section max-w-3xl">
        <span className="tag mb-3 inline-block">Latest Updates</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">News</h1>
        <p className="text-lg text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
          Peptide research updates, regulatory changes, and industry developments.
        </p>

        <div className="space-y-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/news/${a.slug}`}
              className="block border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] hover:shadow-md transition-all group"
            >
              <p className="text-xs text-gray-400 dark:text-slate-500 mb-1">{a.date}</p>
              <h2 className="text-base font-semibold text-[#1e2d3d] dark:text-slate-100 group-hover:text-[#0891b2] transition-colors mb-2">
                {a.title}
              </h2>
              <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed">{a.excerpt}</p>
              <span className="text-xs font-medium text-[#0891b2] mt-3 inline-block">Read more &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
