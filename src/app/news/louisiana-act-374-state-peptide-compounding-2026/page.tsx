import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import { buildPageMetadata } from "@/lib/seo";
import BackLink from "@/components/BackLink";

const HEADLINE =
  "Louisiana Wrote Peptides Into Statute — and What the Legislature Cut Is the Story";
const DESCRIPTION =
  "Louisiana Act 374, effective August 1, 2026, is the first state statute to name peptides directly. But the enacted text is far narrower than the bill that was introduced: the Category 2 conditions and the API-sourcing requirement were amended out before passage. What survived binds state licensing boards, not the FDA — and that distinction is the whole point.";

export const metadata = buildPageMetadata({
  path: "/news/louisiana-act-374-state-peptide-compounding-2026",
  title: `${HEADLINE} | Prof. Peptide`,
  description: DESCRIPTION,
  ogTitle: HEADLINE,
  ogDescription: DESCRIPTION,
  useDefaultOgImage: false,
});

export default function LouisianaAct374Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": HEADLINE,
        "description": DESCRIPTION,
        "datePublished": "2026-08-29T00:00:00Z",
        "dateModified": "2026-08-29T00:00:00Z",
        "url": "https://profpeptide.com/news/louisiana-act-374-state-peptide-compounding-2026",
        "publisher": { "@type": "Organization", "@id": "https://profpeptide.com/#organization", "name": "Prof. Peptide", "url": "https://profpeptide.com", "logo": "https://profpeptide.com/icon.png" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "News", path: "/news" }, { name: "Louisiana Act 374 and the State Lane" }])} />

      <div className="section max-w-3xl">
        <BackLink href="/news">Back to News</BackLink>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">August 29, 2026</p>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-4">
          Louisiana Wrote Peptides Into Statute &mdash; and What the Legislature Cut Is the Story
        </h1>
        <p className="text-base font-medium text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
          Act 374 took effect on August 1, 2026, making Louisiana the first state we can identify to legislate on peptides by name. The enacted text runs about twenty lines. It is also substantially narrower than the bill that was introduced &mdash; and the provisions that were removed on the way through are the most informative thing about it.
        </p>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">What the law actually says</h2>
          <p>
            Senate Bill 253 of the 2026 Regular Session, by Senator Patrick McMath, became <strong>Act No. 374</strong> and enacted a new section, <strong>R.S. 37:23.5</strong>, titled &ldquo;Peptides; prohibited regulations.&rdquo; Here is the operative text in full, from the enrolled act:
          </p>
          <blockquote className="border-l-4 border-[#3A759F] pl-4 py-1 text-[#16181B] dark:text-slate-100 space-y-2">
            <p>
              <strong>A.</strong> No professional or occupational licensing board shall prohibit a healthcare provider with prescriptive authority from providing patients with peptides shipped from either of the following:
            </p>
            <p>
              <strong>(1)</strong> A FDA-registered 503B outsourcing facility that is in compliance with 21 U.S.C. 353b.
            </p>
            <p>
              <strong>(2)</strong> A 503A compounding pharmacy that is in compliance with 21 U.S.C. 353a and applicable United States Pharmacopeia - National Formulary chapters.
            </p>
            <p>
              <strong>B.</strong> No professional or occupational licensing board shall prohibit a Louisiana licensed pharmacist in a state permitted pharmacy from compounding and dispensing peptides as long as the Louisiana licensed pharmacist in the state permitted pharmacy is in compliance with 21 U.S.C. 353a and applicable United States Pharmacopeia - National Formulary chapters.
            </p>
          </blockquote>
          <p>
            Read the grammar carefully, because it is doing all the work. Every sentence begins <em>&ldquo;No&hellip; licensing board shall prohibit.&rdquo;</em> The statute is not a grant of permission to compound anything. It is a <strong>restraint on state licensing boards</strong> &mdash; a rule about what Louisiana&rsquo;s own regulators may not do to their own licensees. And what it protects is not peptide compounding in general, but peptide compounding <em>that already complies with federal law</em>: 21 U.S.C. 353a is the 503A compounding provision, 353b is the 503B outsourcing provision, and USP-NF chapters are the compounding standards. Compliance with those is the condition on every clause.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">The bill that was introduced said something different</h2>
          <p>
            The engrossed version of SB 253 &mdash; the text after Senate committee amendments, before the House got it &mdash; contained conditions that <strong>are not in the law</strong>. That earlier draft would have barred boards from prohibiting compounding <em>&ldquo;provided that the peptide is not included in the FDA&rsquo;s list of substances prohibited for compounding or the FDA Category 2 list of bulk drug substances,&rdquo;</em> and added: <em>&ldquo;Once a peptide is removed from the FDA Category 2 list, a state-licensed compounding pharmacy may compound such peptide provided the active pharmaceutical ingredient is obtained from an FDA-registered manufacturer and the pharmacy otherwise complies with all applicable federal and state compounding laws and regulations.&rdquo;</em> The same draft required the prescribing provider to ensure the peptide was not on the FDA&rsquo;s prohibited compounding list.
          </p>
          <p>
            <strong>None of that survived.</strong> By the reengrossed version the Category 2 language, the prohibited-list condition, and the API-sourcing requirement had all been replaced by the plain federal-compliance standard that appears in the act. So the frequently repeated description of this law &mdash; that Louisiana authorized compounding of peptides once they come off Category 2, so long as the API comes from an FDA-registered manufacturer &mdash; describes <strong>a draft that did not become law</strong>. It is an accurate account of the engrossed bill and an inaccurate account of R.S. 37:23.5.
          </p>
          <p>
            We are not going to speculate about why the legislature made that change; the record we reviewed does not say. But the effect is clear enough: the enacted statute stopped trying to write federal list-management into state law, and instead pointed at the federal standard and deferred to it.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">What a state pathway can and cannot do</h2>
          <p>
            This is where the tension lives, and the amended text handles it more cleanly than the original would have.
          </p>
          <p>
            A state controls <strong>licensure</strong>. It decides who may practice pharmacy or medicine within its borders, what its boards may discipline someone for, and on what terms a permit is held. That is real power, and it is the power Act 374 exercises: it tells Louisiana boards they may not treat &ldquo;it was a peptide&rdquo; as, by itself, a reason to sanction a provider or pharmacist who is otherwise operating within the federal compounding provisions.
          </p>
          <p>
            A state does <strong>not</strong> control what federal law permits to be compounded. If a substance may not lawfully be compounded under federal law, a state statute saying its boards may not punish the compounder does not make the compounding lawful &mdash; it removes one enforcer, not the prohibition. Federal enforcement authority is unaffected by a state licensing statute.
          </p>
          <p>
            This is exactly why the &ldquo;in compliance with 21 U.S.C. 353a / 353b&rdquo; clause is the most consequential phrase in the act, and why the engrossed draft&rsquo;s API-sourcing condition was doing similar work in the earlier version. The statute&rsquo;s protection <em>only ever attaches to conduct that is already federally compliant.</em> Read that way, Act 374 does not conflict with federal law at all &mdash; it declines to add a second, state-level layer of prohibition on top of it. A state law drafted the other way, purporting to authorize what federal law forbids, would have a preemption problem. This one is drafted to avoid having one.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">Is this a trend, or is Louisiana alone?</h2>
          <p>
            On the evidence we could find as of publication: <strong>Louisiana appears to be alone in legislating on peptides by name.</strong> We looked for comparable 2025&ndash;2026 state bills and did not find another enacted statute that names peptides as its subject.
          </p>
          <p>
            What we did find is a busy year in state <em>compounding</em> legislation that is not peptide-specific. Florida&rsquo;s SB 860 and HB 877, filed in December 2025 and pending in committee, would impose API sourcing and documentation conditions on distribution of certain compounded drugs &mdash; requiring an ingredient identical to that used in an FDA-approved drug, from an FDA-registered facility inspected within the preceding two years, with independent quality-control testing. Indiana&rsquo;s SB 282 tightens bulk-substance compounding and recordkeeping, with medical-spa registration under Board of Pharmacy oversight following in 2027. California&rsquo;s Board of Pharmacy rules, effective October 2025, sharpen when a compounded drug counts as &ldquo;essentially a copy&rdquo; of an approved one.
          </p>
          <p>
            The honest reading is that these are two different movements pointed in opposite directions. The non-peptide state activity is mostly <em>restrictive</em> &mdash; more documentation, more sourcing conditions, more oversight of med spas. Louisiana&rsquo;s statute is <em>protective</em> of licensees. One state moving on peptides by name, ahead of the federal rulemaking that would settle the question, is still the story even without a wave behind it. Whether others copy the template is not something we will predict.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">Where this sits on the map: a state variant, not a fourth lane</h2>
          <p>
            Our{" "}
            <Link href="/news/glp1-compounding-503a-503b-three-lanes-2026" className="text-[#3A759F] hover:underline">three-lanes explainer</Link>{" "}
            sorted access into FDA-approved drugs (Lane 1), compoundable peptides in the 503A channel (Lane 2), and research-use-only peptides (Lane 3). The tempting move is to call Act 374 a fourth lane. On the enacted text, that is the wrong description.
          </p>
          <p>
            A lane, in that framing, is a channel through which a compound may lawfully reach someone. Act 374 opens no such channel. It adds no substance to any list, authorizes no compounding that federal law does not already permit, and touches Lane 3 not at all &mdash; a statute about state-licensed pharmacists and prescribers has nothing to say about research-use-only material, which moves through neither. What it does is operate <em>on</em> Lane 2, from the side: it constrains a state&rsquo;s ability to narrow the 503A channel below the federal baseline for its own licensees. That is better described as a <strong>state-level overlay on Lane 2</strong> than as a lane of its own.
          </p>
          <p>
            The distinction matters because the engrossed draft <em>would</em> have looked more like a fourth lane &mdash; it contemplated state-authorized compounding keyed to Category 2 status and API provenance, which is a substantive access rule. The legislature removed precisely the part that would have made the fourth-lane framing apt. The relationship between Category 2 status and what may actually be compounded remains, as before, a federal question: removal from Category 2 is not authorization, and{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>,{" "}
            <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>,{" "}
            <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>,{" "}
            <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, and{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link> sit where they sat before Act 374 &mdash; recommended by an advisory committee, not placed on the 503A list by rule.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">What this is, and isn&rsquo;t</h2>
          <p>
            This is policy reporting on an enacted state statute. Act 374 is a licensing-board restriction; it is not an FDA action, not an approval, and not a determination that any peptide is safe, effective, or lawful to compound. It does not change what federal law permits, and it does not apply outside Louisiana. Nothing here is a dosing or usage recommendation, and nothing here is legal advice &mdash; a pharmacist or prescriber deciding what Act 374 means for their own practice should ask a lawyer, not a website. All research compounds referenced are for laboratory use only. We will update this article if Louisiana&rsquo;s boards issue guidance under the new section, or if other states enact comparable statutes.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">Sources</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>
              <a href="https://www.legis.la.gov/legis/ViewDocument.aspx?d=1478374" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                Act No. 374 (SB 253), 2026 Regular Session &mdash; enrolled act enacting R.S. 37:23.5 (Louisiana State Legislature)
              </a>{" "}
              &mdash; primary, the enacted text quoted above.
            </li>
            <li>
              <a href="https://www.legis.la.gov/legis/ViewDocument.aspx?d=1449222" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                SB 253, Engrossed (SLS 26RS-509), 2026 Regular Session (Louisiana State Legislature)
              </a>{" "}
              &mdash; primary, for the Category 2, prohibited-list, and API-sourcing language that was later removed.
            </li>
            <li>
              <a href="https://www.legis.la.gov/legis/ViewDocument.aspx?d=1452919" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                SB 253, Reengrossed (SLS 26RS-509), 2026 Regular Session (Louisiana State Legislature)
              </a>{" "}
              &mdash; primary, showing the federal-compliance standard replacing the earlier conditions.
            </li>
            <li>
              <a href="https://www.legis.la.gov/legis/BillInfo.aspx?s=26RS&b=SB253" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                SB 253 bill history, 2026 Regular Session (Louisiana State Legislature)
              </a>{" "}
              &mdash; primary, for authorship, Act number, effective date, and the sequence of versions.
            </li>
            <li>
              <a href="https://www.frierlevitt.com/articles/state-federal-legislative-developments-drug-compounding-2026/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                Recent State and Federal Legislative Developments Affecting Drug Compounding (Frier Levitt)
              </a>{" "}
              &mdash; secondary legal analysis, attributed, for the Florida, Indiana, and California compounding measures and their status.
            </li>
            <li>
              <a href="https://www.orrick.com/en/Insights/2026/04/FDA-Announces-Removal-of-12-Peptides-from-Category-2-and-Schedules-PCAC-Meetings" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                FDA Announces Removal of 12 Peptides from Category 2 and Schedules PCAC Meetings (Orrick)
              </a>{" "}
              &mdash; secondary legal analysis, attributed, for the federal Category 2 posture the engrossed draft referred to.
            </li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for informational and educational purposes only and does not constitute medical or legal advice. It summarizes an enacted Louisiana statute that restricts state licensing boards; it does not describe federal law, does not apply outside Louisiana, and makes no safety, efficacy, dosing, or approval claim about any compound. Removal of a substance from the FDA&rsquo;s Category 2 list is not authorization to compound it. All research compounds referenced are for laboratory use only and are not for human consumption.
          </p>
        </div>

        <RelatedLinks items={[
          { href: "/news/glp1-compounding-503a-503b-three-lanes-2026", label: "The three lanes of peptide access" },
          { href: "/news/fda-pcac-peptide-vote-july-2026", label: "The FDA panel’s July peptide vote" },
          { href: "/news/lilly-retatrutide-lawsuits-ruo-sellers-2026", label: "Lilly's retatrutide lawsuits" },
          { href: "/peptides/bpc-157", label: "BPC-157" },
        ]} />
      </div>
    </>
  );
}
