import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/news/fda-pcac-meeting-agenda-july-2026" },
  title: "FDA Releases Official Agenda for July Peptide Compounding Meeting — What’s On It | Prof. Peptide",
  description:
    "The FDA published the official Federal Register notice for its July 23-24 Pharmacy Compounding Advisory Committee meeting on peptide compounding. Here are the seven peptides under review and the conditions each is being considered for.",
  openGraph: {
    title: "FDA Releases Official Agenda for July Peptide Compounding Meeting — What’s On It",
    description:
      "The FDA published the official Federal Register notice for its July 23-24 Pharmacy Compounding Advisory Committee meeting on peptide compounding.",
    url: "https://profpeptide.com/news/fda-pcac-meeting-agenda-july-2026",
    images: [{ url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "FDA Releases Official Agenda for July Peptide Compounding Meeting — What’s On It",
    description:
      "The FDA published the official Federal Register notice for its July 23-24 Pharmacy Compounding Advisory Committee meeting on peptide compounding.",
    images: ["https://profpeptide.com/og-image.png"],
  },
};

export default function FDAPcacMeetingAgendaJuly2026Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "FDA Releases Official Agenda for July Peptide Compounding Meeting — Here’s What’s on It",
        "description": "The FDA published the official Federal Register notice for its July 23-24 PCAC meeting, naming the seven peptides under review and the conditions each is being considered for.",
        "datePublished": "2026-04-28T00:00:00Z",
        "dateModified": "2026-04-28T00:00:00Z",
        "url": "https://profpeptide.com/news/fda-pcac-meeting-agenda-july-2026",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "FDA Releases Official Agenda for July Peptide Compounding Meeting" },
        ],
      }} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">April 28, 2026 &middot; Last updated: April 28, 2026</p>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">
          FDA Releases Official Agenda for July Peptide Compounding Meeting &mdash; Here&rsquo;s What&rsquo;s on It
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            Two weeks ago, the FDA announced it would hold an advisory panel meeting in late July to consider lifting compounding restrictions on certain peptides. As of mid-April, the headline was clear but the specifics were vague. That&rsquo;s now changed &mdash; the FDA has published the official Federal Register notice (Docket No. FDA-2025-N-6895) naming the exact seven peptides on the agenda, the conditions each is being considered for, and the public comment timeline. For the research community, this is the first concrete look at what the July meeting will actually cover.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What the Federal Register Notice Says</h2>
          <p>
            The Pharmacy Compounding Advisory Committee (PCAC) will meet on <strong>July 23 and 24, 2026</strong> at the FDA&rsquo;s White Oak Campus in Silver Spring, Maryland. The committee will discuss whether seven peptides should be added to the <strong>503A Bulks List</strong> &mdash; the list of substances that licensed compounding pharmacies can legally produce under Section 503A of the Federal Food, Drug, and Cosmetic Act.
          </p>
          <p>
            The FDA has split the seven peptides across the two meeting days, with each peptide tied to a specific therapeutic indication the FDA reviewed.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Day 1 &mdash; July 23, 2026</h2>
          <p>
            <strong>BPC-157</strong> &mdash; being considered for ulcerative colitis. BPC-157 is a 15-amino-acid peptide derived from a protective protein in human gastric juice. Research has examined its role in tissue repair, particularly in the gut and connective tissue. See our{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157 profile</Link>{" "}
            for the full background.
          </p>
          <p>
            <strong>KPV</strong> &mdash; being considered for wound healing and inflammatory conditions. KPV is a tripeptide derived from alpha-melanocyte-stimulating hormone (&alpha;-MSH) with documented anti-inflammatory properties. See our{" "}
            <Link href="/peptides/kpv" className="text-[#0891b2] hover:underline">KPV profile</Link>.
          </p>
          <p>
            <strong>TB-500</strong> &mdash; being considered for wound healing. TB-500 is the synthetic version of thymosin beta-4, a peptide involved in cell migration and tissue regeneration. See our{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500 profile</Link>{" "}
            and our{" "}
            <Link href="/compare/bpc-157-vs-tb-500" className="text-[#0891b2] hover:underline">BPC-157 vs TB-500 comparison</Link>.
          </p>
          <p>
            <strong>MOTS-c</strong> &mdash; being considered for obesity and osteoporosis. MOTS-c is a mitochondrial-derived peptide that regulates metabolic homeostasis and insulin sensitivity in research models. See our{" "}
            <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c profile</Link>.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Day 2 &mdash; July 24, 2026</h2>
          <p>
            <strong>Emideltide (DSIP)</strong> &mdash; also referred to as delta sleep-inducing peptide. DSIP has been studied for sleep regulation and stress response. See our{" "}
            <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">DSIP profile</Link>.
          </p>
          <p>
            <strong>Semax</strong> &mdash; a synthetic heptapeptide derived from a fragment of ACTH (adrenocorticotropic hormone), studied extensively in Russia for cognitive function, neuroprotection, and stroke recovery. See our{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax profile</Link>.
          </p>
          <p>
            <strong>Epitalon</strong> &mdash; also known as epithalon, a synthetic tetrapeptide derived from research on the pineal gland peptide bioregulator program. Epitalon has been studied for sleep architecture and aging-related outcomes. See our{" "}
            <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon profile</Link>.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What About the Other Restricted Peptides?</h2>
          <p>
            The original 2023 Category 2 list contained 19 peptides. The seven on the July agenda are only one piece of the picture. Here&rsquo;s what&rsquo;s happening with the rest:
          </p>
          <p>
            <strong>Five additional peptides</strong> &mdash; CJC-1295, Ipamorelin, Thymosin Alpha-1, AOD-9604, and Selank &mdash; were referred to PCAC back in September 2024 and are scheduled for review at a separate meeting before the end of February 2027. These are some of the most-discussed peptides in the research community, and PP covers each in its peptide library.
          </p>
          <p>
            <strong>GHK-Cu</strong> &mdash; the FDA has indicated intent to consult PCAC on GHK-Cu before February 2027. Notably, the topical (non-injectable) form of GHK-Cu remained in Category 1 throughout this period &mdash; only injectable GHK-Cu fell under Category 2 review.
          </p>
          <p>
            <strong>Several peptides previously withdrawn from nominations</strong> &mdash; including BPC-157 itself, which was technically removed from Category 2 because the original nominators withdrew, then renominated through a new pathway that triggered the July review. This is procedural, not a substantive change.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">How the Public Comment Process Works</h2>
          <p>
            The FDA has opened a public docket &mdash; <strong>FDA-2025-N-6895</strong> &mdash; for public comments on the seven peptides under review. Anyone can submit written comments through regulations.gov or by mail.
          </p>
          <p>
            <strong>Comments received by July 9, 2026</strong> will be provided to the committee in advance of the meeting.
          </p>
          <p>
            <strong>The full docket remains open until July 22, 2026</strong> &mdash; the day before the meeting begins.
          </p>
          <p>
            This is meaningful because the public docket is one of the few structured pathways for researchers, clinicians, patient advocates, and compounding pharmacies to formally weigh in before the committee makes its recommendation.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What Happens After the Meeting</h2>
          <p>
            PCAC&rsquo;s role is advisory, not decisive. The committee reviews the scientific evidence and makes a recommendation to the FDA. The FDA then decides whether to add a substance to the 503A Bulks List.
          </p>
          <p>
            <strong>Recommendations are non-binding</strong> &mdash; but historically, the FDA has tended to align with PCAC recommendations. A positive recommendation typically moves the process forward; a negative one usually means the substance stays off the list.
          </p>
          <p>
            Even if PCAC recommends inclusion and the FDA agrees, the final step is <strong>formal notice-and-comment rulemaking</strong> &mdash; a process that can take a year or more on its own. So while the July meeting is a meaningful gate, it&rsquo;s not the final answer. Researchers waiting on legal compounding access for these peptides should expect a multi-step timeline that extends well into 2027 at the earliest.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Why This Matters for the Research Community</h2>
          <p>
            The seven peptides on the July agenda represent a significant share of the most-researched compounds in the broader peptide community. BPC-157 and TB-500 alone have well over a decade of published research between them. Semax has been used clinically in Russia for decades. KPV and MOTS-c are smaller research communities but with growing momentum.
          </p>
          <p>
            If PCAC issues a positive recommendation and the FDA proceeds to rulemaking, this would represent the largest expansion of legal peptide compounding access in years. If the recommendation is negative, the research community will need to continue working through the gray-market and research-use-only channels that have characterized the past few years.
          </p>
          <p>
            Either way, the July meeting will be one of the most consequential events in the regulatory peptide space since the 2023 Category 2 designation.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Our Take</h2>
          <p>
            The level of specificity in the Federal Register notice is encouraging. Each peptide has a defined therapeutic indication the FDA reviewed, which signals that the agency is engaging substantively with the research rather than treating these as undifferentiated categories. The two-day structure with distinct peptide cohorts also suggests the committee will be giving each compound real attention rather than processing them in a single lump.
          </p>
          <p>
            For our readers who follow this space closely, the public comment docket is worth knowing about. Substantive comments &mdash; citing peer-reviewed research, documenting historical use, or addressing safety considerations &mdash; can shape what the committee discusses. Comments are most useful when they&rsquo;re submitted by July 9.
          </p>
          <p>
            We&rsquo;ll continue tracking the regulatory developments leading up to the July meeting. For up-to-date information on which compounds are available through which channels, see our{" "}
            <Link href="/best-peptide-vendors" className="text-[#0891b2] hover:underline">vendor guide</Link>{" "}
            and{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">discount codes</Link>.
          </p>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for informational purposes only and does not constitute medical or legal advice. All compounds referenced are research chemicals intended for laboratory use only.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides/bpc-157" className="btn-primary text-sm">BPC-157 Profile</Link>
            <Link href="/peptides/semax" className="btn-outline text-sm">Semax Profile</Link>
            <Link href="/news" className="btn-outline text-sm">More News</Link>
          </div>
        </div>
      </div>
    </>
  );
}
