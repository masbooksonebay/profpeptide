import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import { buildPageMetadata } from "@/lib/seo";

const HEADLINE =
  "The 503B Exclusion of Semaglutide, Tirzepatide, and Liraglutide — and the Three Lanes of Peptide Access";
const DESCRIPTION =
  "The FDA has proposed to bar outsourcing facilities from bulk-compounding the three leading GLP-1 drugs. It is one lane of a bigger map: 503A pharmacy compounding, 503B bulk outsourcing, and the research-chemical market are separate channels, and “the rules changed” blurs which one each action touches.";

export const metadata = buildPageMetadata({
  path: "/news/glp1-compounding-503a-503b-three-lanes-2026",
  title: `${HEADLINE} | Prof. Peptide`,
  description: DESCRIPTION,
  ogTitle: HEADLINE,
  ogDescription: DESCRIPTION,
  useDefaultOgImage: false,
});

export default function GLP1Compounding503A503BThreeLanesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": HEADLINE,
        "description": DESCRIPTION,
        "datePublished": "2026-08-17T00:00:00Z",
        "dateModified": "2026-08-17T00:00:00Z",
        "url": "https://profpeptide.com/news/glp1-compounding-503a-503b-three-lanes-2026",
        "publisher": { "@type": "Organization", "@id": "https://profpeptide.com/#organization", "name": "Prof. Peptide", "url": "https://profpeptide.com", "logo": "https://profpeptide.com/icon.png" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "News", path: "/news" }, { name: "The 503B Exclusion and the Three Lanes of Peptide Access" }])} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">August 17, 2026</p>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-4">
          The 503B Exclusion of Semaglutide, Tirzepatide, and Liraglutide &mdash; and the Three Lanes of Peptide Access
        </h1>
        <p className="text-base font-medium text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
          The FDA has proposed to bar federally registered outsourcing facilities from bulk-compounding the three leading GLP-1 drugs. That is the concrete, current news &mdash; and it is only one lane of a wider map. Here is which compounding channel the action actually touches, and which ones it leaves alone.
        </p>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            On April 30, 2026, the FDA proposed to exclude{" "}
            <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>, and liraglutide from the <strong>503B Bulks List</strong> &mdash; the roster of active ingredients that FDA-registered <em>outsourcing facilities</em> may use to compound in bulk on a finding of &ldquo;clinical need.&rdquo; After reviewing the nominations, the agency said it found no such need. The notice published in the Federal Register on May 1, 2026, opened a public comment window that was later{" "}
            <a href="https://www.federalregister.gov/documents/2026/06/26/2026-12937/list-of-bulk-drug-substances-for-which-there-is-a-clinical-need-under-section-503b-of-the-federal" className="text-[#3A759F] hover:underline break-words" target="_blank" rel="noopener noreferrer">extended to July 30, 2026</a>. That window has closed; the FDA is weighing comments, and <strong>no final rule has issued.</strong> &ldquo;Proposed&rdquo; and &ldquo;banned&rdquo; remain different words.
          </p>

          <p className="border-l-4 border-[#3A759F] pl-4 py-1 text-[#16181B] dark:text-slate-100">
            <strong>The distinction to carry first:</strong> &ldquo;the rules changed&rdquo; is too coarse. Compounding runs through two separate federal channels &mdash; <strong>503A</strong> (a licensed pharmacy compounding for one identified patient) and <strong>503B</strong> (an outsourcing facility compounding in bulk). They sit under different statutory tests, touch different substances, and have moved on different timelines. This action touches the 503B lane only.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">503A and 503B are not the same rulebook</h2>
          <p>
            A <strong>503A</strong> pharmacy compounds a drug for a specific patient against a prescription; a <strong>503B</strong> outsourcing facility registers with the FDA to make compounded drugs in larger batches, often without a patient-specific prescription. A 503B facility can generally only compound from a bulk substance if that substance is on the 503B Bulks List, or if the finished drug is on the FDA&rsquo;s shortage list. The proposed exclusion removes these three GLP-1s from the first route. It does not, by its terms, rewrite what a 503A pharmacy may do, and it is not a statement about the broader research-chemical market at all.
          </p>
          <p>
            The shortage route is the fine print. The tirzepatide shortage resolved in October 2024 and the semaglutide shortage on February 21, 2025, so for those two the bulks-list exclusion would close the last standing bulk-compounding pathway. Liraglutide injection remains on the shortage list, so it can still be compounded by 503B facilities for now despite its absence from the bulks list &mdash; a conditional door, not a sealed one, since a return to shortage would reopen the pathway for any of the three while the shortage lasted. The action has no bearing on{" "}
            <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">retatrutide</Link>, which was never eligible for compounding: there is no approved version, so no shortage pathway ever applied.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">The 503A peptide lane moved differently &mdash; and less than headlines suggest</h2>
          <p>
            While the GLP-1 news is about foreclosing a bulk route, the 503A peptide lane moved the other way this year &mdash; which is exactly why one word for &ldquo;the rules&rdquo; fails. In April 2026 the FDA removed <strong>twelve peptides from Category 2</strong>, the &ldquo;significant safety concern&rdquo; list, after their nominations were withdrawn (docket{" "}
            <a href="https://www.federalregister.gov/documents/2026/04/16/2026-07361/pharmacy-compounding-advisory-committee-notice-of-meeting-establishment-of-a-public-docket-request" className="text-[#3A759F] hover:underline break-words" target="_blank" rel="noopener noreferrer">FDA-2025-N-6895</a>). The step was one HHS Secretary Robert F. Kennedy Jr. had publicly pushed for; he has spoken of wanting to make{" "}
            <a href="https://www.fiercepharma.com/pharma/fda-advisory-committee-set-weigh-taking-action-certain-unapproved-peptides" className="text-[#3A759F] hover:underline break-words" target="_blank" rel="noopener noreferrer">&ldquo;about 14&rdquo; peptides more accessible</a>.
          </p>
          <p>
            The count matters, so be precise about it: the number of peptides now confirmed sitting in <strong>Category 1</strong> as a result of these actions is <strong>none</strong>. Removal from Category 2 does not, on its own, authorize compounding or move a substance into Category 1 &mdash; per the FDA&rsquo;s own category framework and independent legal analysis, the twelve are left in{" "}
            <a href="https://natlawreview.com/article/tiny-chains-big-changes-what-fdas-latest-actions-mean-peptide-compounding" className="text-[#3A759F] hover:underline break-words" target="_blank" rel="noopener noreferrer">continued regulatory uncertainty</a>, not a new pathway. Seven of the twelve went to the FDA&rsquo;s Pharmacy Compounding Advisory Committee on July 23&ndash;24, 2026, which recommended six &mdash;{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>,{" "}
            <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>,{" "}
            <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>,{" "}
            <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, and{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link> &mdash; for the 503A Bulks List and rejected{" "}
            <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>; the remaining five are slated for a later meeting. We covered the tallies in our{" "}
            <Link href="/news/fda-pcac-peptide-vote-july-2026" className="text-[#3A759F] hover:underline">vote recap</Link>. A PCAC recommendation is non-binding: the FDA must still act through rulemaking, a process observers expect to run into 2027.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">The three lanes &mdash; which channel each rule touches</h2>
          <p>
            Sort the whole picture into three lanes and the confusion clears. Each rule this year lands in exactly one of them:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Lane 1 &mdash; FDA-approved drugs.</strong> Semaglutide, tirzepatide, and liraglutide are approved medicines sold under brand names. The 503B proposal, the shortage-list status, and 503A patient-specific rules all govern <em>compounded copies</em> of these approved drugs. This is the lane the current GLP-1 news sits in.
            </li>
            <li>
              <strong>Lane 2 &mdash; compoundable peptides (503A / Category 1).</strong> The licensed compounding channel: substances a pharmacy may compound for a patient. The twelve peptides pulled from Category 2 are <em>candidates</em> for this lane, not residents of it &mdash; six are recommended, none is confirmed, and the FDA has not finalized anything.
            </li>
            <li>
              <strong>Lane 3 &mdash; research-use-only peptides.</strong> The &ldquo;for laboratory research only&rdquo; market of compounds sold by vendors. This lane is <em>not</em> part of either FDA action above. Neither the 503B GLP-1 exclusion nor the Category 2 peptide removals authorize, ban, or reclassify anything sold as a research chemical.
            </li>
          </ul>

          <p>
            That last point is the one most easily blurred, so we state it plainly. Prof. Peptide indexes <strong>research-use peptides &mdash; Lane 3</strong>. The 503A and 503B actions described here govern the <strong>licensed and approved</strong> channels &mdash; compounded and FDA-approved drugs. They do not govern the research-chemical market, and nothing in these specific actions changes the status of the compounds this site catalogs. A vendor that folds a 503B proposal or a Category 2 removal into a &ldquo;peptides are being legalized&rdquo; pitch is crossing lanes that the FDA has kept separate.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">What this is, and isn&rsquo;t</h2>
          <p>
            This is policy reporting. A bulk-list proposal, a Category 2 removal, or an advisory-committee vote is a regulatory-process event &mdash; not a safety, efficacy, or approval determination, and not a dosing or usage recommendation. Nothing here should be read as a statement that any compound named is safe, effective, or approved for human use. We will update this article as the FDA acts on either lane.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">Sources</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>
              <a href="https://www.fda.gov/news-events/press-announcements/fda-proposes-exclude-semaglutide-tirzepatide-and-liraglutide-503b-bulks-list" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                FDA Proposes to Exclude Semaglutide, Tirzepatide, and Liraglutide on 503B Bulks List (FDA press announcement, Apr 30, 2026)
              </a>{" "}
              &mdash; primary, for the proposed 503B exclusion and the &ldquo;no clinical need&rdquo; finding.
            </li>
            <li>
              <a href="https://www.federalregister.gov/documents/2026/05/01/2026-08552/list-of-bulk-drug-substances-for-which-there-is-a-clinical-need-under-section-503b-of-the-federal" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                List of Bulk Drug Substances for Which There Is a Clinical Need Under Section 503B&hellip;, 91 Fed. Reg. 23431 (May 1, 2026)
              </a>{" "}
              &mdash; primary docket, for the Federal Register notice.
            </li>
            <li>
              <a href="https://www.federalregister.gov/documents/2026/06/26/2026-12937/list-of-bulk-drug-substances-for-which-there-is-a-clinical-need-under-section-503b-of-the-federal" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                &hellip;Extension of Comment Period, FR 2026-12937 (Jun 26, 2026)
              </a>{" "}
              &mdash; primary docket, for the July 30, 2026 comment deadline.
            </li>
            <li>
              <a href="https://www.federalregister.gov/documents/2026/04/16/2026-07361/pharmacy-compounding-advisory-committee-notice-of-meeting-establishment-of-a-public-docket-request" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                Pharmacy Compounding Advisory Committee; Notice of Meeting, Docket FDA-2025-N-6895 (Apr 16, 2026)
              </a>{" "}
              &mdash; primary docket, for the Category 2 removals and PCAC schedule.
            </li>
            <li>
              <a href="https://natlawreview.com/article/tiny-chains-big-changes-what-fdas-latest-actions-mean-peptide-compounding" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                Tiny Chains, Big Changes? What FDA&rsquo;s Latest Actions Mean for Peptide Compounding (National Law Review)
              </a>{" "}
              &mdash; secondary legal analysis, for &ldquo;removal from Category 2 does not authorize compounding&rdquo; and the Category 1 status.
            </li>
            <li>
              <a href="https://www.fiercepharma.com/pharma/fda-advisory-committee-set-weigh-taking-action-certain-unapproved-peptides" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                Heeding RFK Jr.&rsquo;s call, FDA reclassifies 12 unapproved peptides (Fierce Pharma)
              </a>{" "}
              &mdash; secondary, attributed, for HHS Secretary Kennedy&rsquo;s &ldquo;about 14&rdquo; framing and the twelve-peptide removal.
            </li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for informational and educational purposes only and does not constitute medical or legal advice. It summarizes a proposed FDA action that is not a final rule, and related regulatory-process events. It makes no safety, efficacy, dosing, or approval claim about any compound. All research compounds referenced are for laboratory use only and are not for human consumption.
          </p>
        </div>

        <RelatedLinks items={[
          { href: "/peptides/semaglutide", label: "Semaglutide" },
          { href: "/peptides/tirzepatide", label: "Tirzepatide" },
          { href: "/news/fda-503b-glp1-bulk-compounding-2026", label: "The 503B bulk-compounding proposal, in detail" },
          { href: "/news/fda-pcac-peptide-vote-july-2026", label: "The FDA panel’s July peptide vote" },
        ]} />
      </div>
    </>
  );
}
