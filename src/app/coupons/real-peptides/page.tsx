"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";


function Cat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
      <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">{label}</dt>
      <dd className="text-gray-600 dark:text-slate-300">{children}</dd>
    </div>
  );
}
function P({ slug, children }: { slug: string; children: React.ReactNode }) {
  return <Link href={`/peptides/${slug}`} className="text-[#3A759F] hover:underline">{children}</Link>;
}

export default function RealPeptidesCouponPage() {
  const rows = vendorProductRows("real-peptides");
  const discountPct = vendorDiscountPct("real-peptides");
  const autoApply = codeAutoApplies("real-peptides");
  const shopUrl = makeShopUrlFor("real-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="real-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Real Peptides Discount Code &mdash; Save {discountPct}%</h1>
      </div>
      <CouponFacts slug="real-peptides" />
      <CouponCodeCard slug="real-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Real Peptides is a US-based research-peptide supplier headquartered in Saint Petersburg, Florida, with a catalog of 75 research compounds shipped domestically from physical inventory (no drop-shipping). Every order is backed by a Package Protection guarantee &mdash; shipments lost, stolen, or damaged in transit are replaced or refunded within a 45-day window; this covers shipping, not product purity. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="retatrutide">Retatrutide</P> (listed as Trinity-X), <P slug="tirzepatide">Tirzepatide</P> (listed as GLYCON-X), <P slug="cagrilintide">Cagrilintide</P>, <P slug="mots-c">MOTS-c</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P></Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P></Cat>
            <Cat label="Growth Hormone"><P slug="hexarelin">Hexarelin</P>, <P slug="igf-1-lr3">IGF-1 LR3</P></Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="glutathione">Glutathione</P>, <P slug="fox04-dri">FOXO4-DRI</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Every Real Peptides product links its own Certificate of Analysis from Freedom Diagnostics, an independent US lab (FreedomDiagnosticsTesting.com). Each report confirms identity by LC-MS, purity by HPLC-UV (99.5&ndash;99.9% across the certificates reviewed), and net peptide content, and pairs with an endotoxin report run in duplicate under USP &lt;85&gt;; every certificate is signed by the lab&apos;s principal chemist (Alex Johnson) and carries a per-record search code (formatted Real&#123;accession&#125;) verifiable at FreedomDiagnosticsTesting.com. Those certificates are per-product rather than batch-matched &mdash; the lot field reads N/A. Real Peptides also states that its batches undergo heavy-metals and sterility testing and that it works with a second lab, Kovera.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Real Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Real Peptides&apos; list price; the bold figure is{" "}
            {autoApply ? (
              <>your price after the {discountPct}% code</>
            ) : (
              <>your price once you apply your discount code at checkout</>
            )}. Prices current as of {PRICES_UPDATED_DATE}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What compounds does Real Peptides carry?"
              a="Real Peptides carries 75 research compounds spanning metabolic/GLP-class peptides, recovery and repair peptides, growth-hormone secretagogues, skin, and longevity research. Its GLP line uses coded names — Trinity-X is Retatrutide (confirmed on its Certificate of Analysis, identity 'GLP RT'), and GLYCON-X is Tirzepatide, whose vial is labelled 'GLP-2 T' (the GLP-2 tier) and whose product page describes the dual GLP-1/GIP agonist mechanism unique to Tirzepatide, in 15mg, 30mg, and 60mg vials."
            />
            <FAQItem
              q="Does Real Peptides have a discount code?"
              a={`Yes. Prof. Peptide maintains a verified discount code for Real Peptides — click "Reveal discount code" above to see it and copy it. It saves ${discountPct}% on any Real Peptides order.`}
            />
            <FAQItem
              q="How do I use the Real Peptides discount code?"
              a={`Reveal the code above and copy it, then add your items to cart at realpeptides.co, proceed to checkout, and paste it into the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="How does Real Peptides test its peptides?"
              a="Every product links its own Certificate of Analysis from Freedom Diagnostics, an independent US lab. Each report confirms identity by LC-MS, purity by HPLC-UV, and net peptide content, with a companion endotoxin report run in duplicate under USP <85>, signed by the lab's principal chemist and carrying a per-record search code verifiable at FreedomDiagnosticsTesting.com. The certificates are per-product, with the lot field marked N/A. Real Peptides also states that it tests for heavy metals and sterility and works with a second lab, Kovera."
            />
            <FAQItem
              q="What is Trinity-X (and GLYCON-X)?"
              a="Trinity-X is Real Peptides' coded name for Retatrutide — confirmed on its Freedom Diagnostics certificate (identity 'GLP RT') and in its own product title. GLYCON-X is Tirzepatide: the vial is labelled 'GLP-2 T' — the GLP-2 tier that decodes to Tirzepatide — and Real's own product page describes it as a dual GLP-1/GIP agonist, the mechanism unique to Tirzepatide. We list it as Tirzepatide (listed as GLYCON-X) so that searching Real's store for the coded name still leads there."
            />
            <FAQItem
              q="What does Real Peptides' Package Protection cover?"
              a="Package Protection covers shipments lost in transit, stolen after delivery, or arrived damaged — resolved with a replacement or refund at your choice, for orders placed within the last 45 days. It is shipping protection, not a product purity or potency guarantee."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
