"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";


export default function AthenaPeptidesCouponPage() {
  const discountPct = vendorDiscountPct("athena-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="athena-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Athena Peptides Discount Code: profpeptide &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="athena-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Athena Peptides (athenapeptides.com) is a US research-peptide supplier on a WooCommerce storefront whose domain footprint runs back to 2020, with a full catalog across metabolic, recovery, growth-hormone, cognitive, and sleep research areas. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; GLP</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link> (GLP-1 S), <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link> (GLP-2 T), <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (GLP-3 R) &mdash; a 10/20/30/40&nbsp;mg line &mdash; plus <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, and <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Sleep</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Athena lists its GLP metabolic peptides under coded names &mdash; GLP-1&nbsp;S, GLP-2&nbsp;T, GLP-3&nbsp;R &mdash; and the compound behind each is identified on that product&apos;s Certificate of Analysis: Prof.&nbsp;Peptide opened the GLP-2&nbsp;T certificate and it tests Tirzepatide. By the same convention GLP-1&nbsp;S is Semaglutide and GLP-3&nbsp;R is Retatrutide.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Athena posts a Certificate of Analysis on each product&apos;s own page rather than a central library. Testing is split across two independent US laboratories: earlier (2025) certificates come from <span className="font-semibold text-[#16181B] dark:text-slate-100">Freedom Diagnostics</span> (searchable at FreedomDiagnosticsTesting.com), and current (2026) certificates come from <span className="font-semibold text-[#16181B] dark:text-slate-100">Bioviridian&nbsp;Inc</span> of Bryan/College&nbsp;Station,&nbsp;TX. The panel is purity by RP-HPLC (214&nbsp;nm), identity by mass spectrometry (LC-MS/MS or MALDI-MS), and content by HPLC quantitation. The differentiator is lab-side verification: each certificate carries a web-verification or search code that resolves on the testing lab&apos;s own portal &mdash; Bioviridian reports verify at{" "}
            <a href="https://bioviridians.com/coa-search.html" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline">bioviridians.com/coa-search.html</a>{" "}
            &mdash; so a certificate is authenticated on the lab&apos;s records rather than trusting a downloaded PDF. Athena reports ISO/IEC&nbsp;17025 accreditation as in progress. Prof.&nbsp;Peptide opened four certificates across BPC-157 and Semax (Freedom Diagnostics) and AOD-9604 and Tirzepatide (Bioviridian); reported purities ran 98.55&ndash;99.8% with measured content meeting or exceeding label weight.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">One thing to know reading the certificates:</span> they list &ldquo;Lot Number: NA&rdquo; rather than a formal lot number. Traceability instead runs through a per-certificate QC/search code that ties the vial label to the chromatogram header and to the lab&apos;s verification portal &mdash; so a specific vial can be matched to its certificate by that code, though not by a conventional lot number. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="Does Athena Peptides have a coupon code?" a={`Yes. Use code profpeptide at checkout to save ${discountPct}% on your Athena Peptides order. The code is lowercase, exactly as issued, and is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How do I use the Athena Peptides discount code?" a={`Add your items to cart at athenapeptides.com, proceed to checkout, and enter profpeptide (lowercase) in the coupon field. The ${discountPct}% discount is applied to your order total.`} />
            <FAQItem q="How does Athena Peptides test its peptides?" a="Athena posts a Certificate of Analysis on each product's own page, tested at two independent US labs — Freedom Diagnostics on its 2025 certificates and Bioviridian Inc (Bryan/College Station, TX) on its current 2026 certificates. The panel is purity by RP-HPLC (214nm), identity by mass spectrometry (LC-MS/MS or MALDI-MS), and content by HPLC quantitation, and each certificate verifies on the testing lab's own portal (Bioviridian at bioviridians.com/coa-search.html). Prof. Peptide opened four certificates across both labs; purities ran 98.55–99.8%." />
            <FAQItem q="What are GLP-1 S, GLP-2 T, and GLP-3 R?" a="Athena lists its GLP metabolic peptides under coded names. The compound behind each is identified on that product's Certificate of Analysis: GLP-2 T tests as Tirzepatide (Prof. Peptide confirmed this on a Bioviridian certificate), and by the same convention GLP-1 S is Semaglutide and GLP-3 R is Retatrutide. The line runs 10/20/30/40 mg." />
            <FAQItem q="Why do Athena's certificates say 'Lot Number: NA'?" a="Athena's certificates list 'Lot Number: NA' rather than a formal lot number. Traceability instead runs through a per-certificate QC/search code that ties the vial label to the chromatogram header and to the lab's verification portal — so a vial can be matched to its certificate by that code, though not by a conventional lot number." />
          </div>
        </div>

      </div>
    </div>
  );
}
