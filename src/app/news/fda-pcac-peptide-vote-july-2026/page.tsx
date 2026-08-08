import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/news/fda-pcac-peptide-vote-july-2026",
  title:
    "FDA Panel Recommends Six Peptides for Compounding — What the Vote Means | Prof. Peptide",
  description:
    "An FDA advisory committee voted July 23–24 to recommend six peptides for the 503A compounding list and rejected DSIP. The votes are non-binding — nothing legal has changed.",
  ogTitle:
    "FDA Panel Recommends Six Peptides for Compounding — What the Vote Actually Means",
  ogDescription:
    "An FDA advisory committee recommended six peptides for the 503A compounding list and rejected DSIP — but the votes are non-binding recommendations, not approvals.",
  useDefaultOgImage: false,
});

export default function FDAPcacPeptideVoteJuly2026Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "FDA Advisory Panel Recommends Six Peptides for Compounding — What the Vote Does and Doesn’t Do",
        "description": "The FDA’s Pharmacy Compounding Advisory Committee voted July 23–24, 2026 to recommend six of seven peptides for the 503A Bulks List and rejected one. The votes are non-binding recommendations, not approvals.",
        "datePublished": "2026-08-05T00:00:00Z",
        "dateModified": "2026-08-05T00:00:00Z",
        "url": "https://profpeptide.com/news/fda-pcac-peptide-vote-july-2026",
        "publisher": { "@type": "Organization", "@id": "https://profpeptide.com/#organization", "name": "Prof. Peptide", "url": "https://profpeptide.com", "logo": "https://profpeptide.com/icon.png" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "News", path: "/news" }, { name: "FDA Advisory Panel Recommends Six Peptides for Compounding" }])} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">August 5, 2026 &middot; Last updated: August 5, 2026</p>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-6">
          FDA Advisory Panel Recommends Six Peptides for Compounding &mdash; What the Vote Does and Doesn&rsquo;t Do
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            On July 23 and 24, 2026, the FDA&rsquo;s Pharmacy Compounding Advisory Committee (PCAC) met at the agency&rsquo;s White Oak campus and voted to <strong>recommend</strong> that six of seven peptides be added to the 503A Bulks List &mdash; the roster of bulk substances that licensed compounding pharmacies may use under Section 503A of the Federal Food, Drug, and Cosmetic Act. One peptide was rejected. We{" "}
            <Link href="/news/fda-pcac-meeting-agenda-july-2026" className="text-[#3A759F] hover:underline">previewed the agenda in April</Link>; this is the outcome.
          </p>
          <p>
            The single most important thing to understand about this meeting is what it <em>did not</em> do. A PCAC vote is a <strong>non-binding recommendation to the FDA</strong>, not an agency action and not an approval. <strong>Nothing is legal to compound today that wasn&rsquo;t legal yesterday.</strong> Expect vendors and aggregators to headline this as &ldquo;BPC-157 is now legal.&rdquo; That is not what happened, and the distinction is the whole story.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">What the committee actually voted</h2>
          <p>
            The FDA split the seven peptides across two days, each tied to a specific indication the agency&rsquo;s reviewers had assessed. The recorded tallies (yes&ndash;no, with abstentions) were:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link> (reviewed for ulcerative colitis) &mdash; <strong>recommended, 8&ndash;6, 1 abstention</strong>.
            </li>
            <li>
              <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link> (inflammation / wound healing) &mdash; <strong>recommended, 8&ndash;6, 1 abstention</strong>.
            </li>
            <li>
              <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link> (wound healing) &mdash; <strong>recommended, 8&ndash;6, 1 abstention</strong>.
            </li>
            <li>
              <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link> (obesity / osteoporosis) &mdash; <strong>recommended, 7&ndash;5, 2 abstentions</strong>.
            </li>
            <li>
              <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link> &mdash; <strong>recommended, 7&ndash;5, 1 abstention</strong>.
            </li>
            <li>
              <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link> &mdash; <strong>recommended, 8&ndash;5</strong>.
            </li>
            <li>
              Emideltide &mdash; also known as{" "}
              <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link> (delta sleep-inducing peptide) &mdash; <strong>rejected, 6&ndash;7, 1 abstention</strong>. It was the only nomination the panel declined.
            </li>
          </ul>
          <p>
            Vote counts here are drawn from meeting coverage and the FDA&rsquo;s published materials (Docket No. FDA-2025-N-6895; committee{" "}
            <a href="https://www.fda.gov/media/193711/download" className="text-[#3A759F] hover:underline" target="_blank" rel="noopener noreferrer">briefing materials</a>). Reporting was consistent on the Day&nbsp;1 tallies; where a source omitted an abstention count we have noted only the yes&ndash;no split.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">A recommendation is not a listing &mdash; three legal events keep getting conflated</h2>
          <p>
            Peptide compounding has produced three separate regulatory milestones this year, and coverage routinely blurs them. Only the second has now happened:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Removal from Category 2.</strong> In April 2026 the FDA removed twelve peptide bulk substances from Category 2 (&ldquo;substances that raise significant safety concerns&rdquo;). Regulators were explicit that removal from Category 2 does <em>not</em>, by itself, place a substance on the 503A Bulks List or authorize compounding &mdash; it leaves them in a gray area pending PCAC review and final action.
            </li>
            <li>
              <strong>A PCAC recommendation.</strong> The July 23&ndash;24 votes. Advisory only.
            </li>
            <li>
              <strong>Placement on the 503A compoundable list.</strong> This <em>has not happened</em> for any of the six. It requires the FDA to act &mdash; realistically through notice-and-comment rulemaking &mdash; and HHS Secretary Robert F. Kennedy Jr. to sign off. Observers expect that process to run into 2027. A second PCAC meeting on five additional peptides is expected around February 2027.
            </li>
          </ul>
          <p>
            Until that final step is complete, a pharmacy compounding any of these six is in the same position it was in before the vote.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">The committee overruled its own scientists</h2>
          <p>
            The panel&rsquo;s recommendations ran against the FDA&rsquo;s own review staff, who had <strong>recommended against including all seven</strong> peptides, citing a lack of clinical data or sufficient characterization. A recurring staff objection was, in effect, chemical: the FDA&rsquo;s briefing materials noted that there are <strong>multiple forms of each substance and, in some cases, multiple published amino-acid sequences</strong> &mdash; meaning it is not always clear what, precisely, is being nominated. That the committee voted to recommend anyway is part of why the meeting drew scrutiny.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">Questions about the panel itself</h2>
          <p>
            The committee that produced these votes was largely new. Eight of its twelve members were appointed on June 29, 2026, weeks before the meeting, and most of the new appointees have financial or clinical ties to businesses that sell or administer peptides &mdash; including telehealth and men&rsquo;s-health practices and a family compounding pharmacy. Critics noted that the eight new members supplied the yes votes that carried the first three recommendations. Paul Knoepfler, a cell-biology professor at UC Davis, publicly questioned a panel whose members appear to sell unproven offerings, including peptides.
          </p>
          <p>
            HHS pushed back. It said every member underwent the same ethics review and vetting required of all FDA advisory-committee members, and that candidates who could not meet those requirements were removed from consideration. Where conflicts existed, the department granted waivers on the basis that the members&rsquo; interests spanned an entire sector rather than a single company &mdash; a &ldquo;broad sector interest&rdquo; classification. Both characterizations are on the record; readers can weigh them.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">The wider regulatory picture</h2>
          <p>
            Two pieces of context matter. First, the April Category-2 action was accompanied by a change to{" "}
            <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>: contrary to some summaries, GHK-Cu was <strong>removed from Category 1</strong> (not added to it) after its nomination was withdrawn, with PCAC consultation expected before the end of February 2027. Category 1 is the set of substances FDA is evaluating under enforcement discretion; Category 2 is the &ldquo;significant safety concern&rdquo; list; the 503A Bulks List is the affirmative, compoundable roster. They are three different things.
          </p>
          <p>
            Second, the states are moving on their own timeline. Louisiana&rsquo;s <strong>SB 253 took effect August 1, 2026</strong>, barring state licensing boards from prohibiting providers with prescriptive authority from supplying patients with peptides shipped from FDA-registered 503A/503B facilities, subject to conditions tied to the FDA&rsquo;s own lists. State law and federal compounding status are separate questions, and this is an area where they are diverging.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">What this means for the research community</h2>
          <p>
            For anyone tracking these compounds, the practical takeaway is narrow: an advisory panel signaled where the FDA <em>could</em> go, and the agency has not gone there yet. Treat &ldquo;now legal&rdquo; claims as marketing until the FDA completes rulemaking and the substances actually appear on the 503A list.
          </p>
          <p>
            Prof. Peptide&rsquo;s position is unchanged. We report on these peptides as research compounds; a compounding recommendation is a regulatory-process event, not a safety, efficacy, or approval determination. Nothing here should be read as a statement that any of these substances is safe, effective, or approved for human use. We&rsquo;ll update this article as the FDA acts.
          </p>
        </div>

        <RelatedLinks items={[
          { href: "/peptides/bpc-157", label: "BPC-157" },
          { href: "/peptides/tb-500", label: "TB-500" },
          { href: "/peptides/mots-c", label: "MOTS-C" },
          { href: "/news/fda-peptides-loosen-glp1-compounding-tightens-2026", label: "The two regulatory tracks, explained" },
        ]} />
      </div>
    </>
  );
}
