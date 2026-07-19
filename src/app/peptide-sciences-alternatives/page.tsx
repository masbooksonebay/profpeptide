import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptide-sciences-alternatives",
  title: "Peptide Sciences Has Shut Down — Vetted Alternatives (2026) | Prof. Peptide",
  description:
    "Peptide Sciences has voluntarily closed and discontinued sales. Here's what happened and established research-peptide vendors to consider instead, with current discount codes.",
});

export default function PeptideSciencesAlternativesPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Peptide Sciences Has Closed — Vetted Research-Peptide Alternatives","description":"Peptide Sciences has voluntarily closed and discontinued sales. Here's what happened and established research-peptide vendors to consider instead, with current discount codes.","url":"https://profpeptide.com/peptide-sciences-alternatives","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptide Sciences Has Closed — Vetted Research-Peptide Alternatives"}]}} />
    <div className="section max-w-4xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Vendor Coupons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Peptide Sciences Has Closed &mdash; Vetted Research-Peptide Alternatives</h1>
      <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
        Peptide Sciences (peptidesciences.com), one of the longest-running research-peptide suppliers, has announced it is voluntarily shutting down and discontinuing the sale of its research products. Its website no longer processes orders. If you previously sourced research peptides there, here are established vendors to consider instead.
      </p>

      <div className="bg-[#eab308]/10 border border-[#eab308]/40 rounded-xl p-5 mb-8">
        <p className="text-sm text-[#1e2d3d] dark:text-slate-200 leading-relaxed">
          Prof. Peptide is an independent research-peptide information and comparison site. We are not affiliated with, endorsed by, or a successor to Peptide Sciences, and we do not sell or represent its products. &ldquo;Peptide Sciences&rdquo; is referenced here solely to report its publicly announced closure and to help researchers find other suppliers.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">What happened</h2>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          In its own public notice, Peptide Sciences stated it has discontinued operations and will continue to protect its brand and trademarks. In practical terms, the site no longer fills orders &mdash; and, per the company&apos;s own statement, any third party claiming to be a successor or to sell &ldquo;Peptide Sciences&rdquo; products is not affiliated with the original company.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Where to look instead</h2>
        <VendorHighlightBlock
          highlights={[
            { slug: "ascension-peptides" },
            { slug: "peptide-partners" },
            { slug: "vital-core-research" },
            { slug: "glacier-aminos" },
            { slug: "ez-peptides" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mt-4">
          See all vetted suppliers and current codes on the <Link href="/coupons" className="text-[#3A759F] hover:underline">vendor coupons</Link> page.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">How we choose alternatives</h2>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          We prioritize vendors with third-party lab testing and published COAs, an established track record, and current verified discount codes.
        </p>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice. Not for human use.</p>
    <ContactLink pageName="Peptide Sciences Has Closed — Vetted Research-Peptide Alternatives" pagePath="/peptide-sciences-alternatives" />
    </div>
    </>
  );
}
