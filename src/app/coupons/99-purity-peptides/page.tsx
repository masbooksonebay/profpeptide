"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";


export default function NinetyNinePurityPeptidesCouponPage() {
  const discountPct = vendorDiscountPct("99-purity-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="99-purity-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">99 Purity Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="99-purity-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            99 Purity Peptides (99puritypeptides.com) is a USA-manufactured, third-party-verified research-peptide supplier whose catalog spans metabolic and GLP-class compounds, recovery and repair peptides, growth-hormone secretagogues, skin research peptides, longevity compounds, and cognitive peptides. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/semax-selank" className="text-[#3A759F] hover:underline">Semax + Selank</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            99 Purity Peptides is USA-manufactured and publishes a batch-matched Certificate of Analysis for each product, issued by the third-party lab Eagle Analytical Services (Houston, TX). Every certificate is tied to a specific lot number and reports sterility (ScanRDI) and bacterial endotoxin (USP &lt;85&gt;), with a potency/content assay (USP &lt;621&gt;) on applicable products. 99 Purity states a minimum ≥99% purity standard for its peptides, and the per-lot certificates are published on the product pages so researchers can review the results for the batch they receive.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            99 Purity Peptides is USA-manufactured. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="What peptides does 99 Purity Peptides carry?" a="99 Purity carries research compounds across several categories: metabolic and GLP-class compounds including Retatrutide, Tirzepatide, Semaglutide, and MOTS-C; recovery peptides such as BPC-157, TB-500, and a BPC-157/TB-500 blend; growth-hormone secretagogues including Tesamorelin and IGF-1 LR3; skin compounds such as GHK-Cu and the GLOW and KLOW blends; NAD+; and the cognitive peptides Semax and Selank, plus KPV." />
            <FAQItem q="Does 99 Purity Peptides have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your entire 99 Purity Peptides order. This code is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How do I use the 99 Purity Peptides discount code?" a={`Add your items to cart at 99puritypeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="How does 99 Purity Peptides test its peptides?" a="99 Purity publishes a batch-matched Certificate of Analysis for each product, issued by the third-party lab Eagle Analytical Services (Houston, TX). The reports cover sterility (ScanRDI) and bacterial endotoxin (USP <85>), with a potency/content assay (USP <621>) on applicable products. 99 Purity states a minimum ≥99% purity standard for its peptides." />
            <FAQItem q="Are Certificates of Analysis available for 99 Purity products?" a="Yes. 99 Purity publishes a batch-matched Certificate of Analysis on each product page, issued by Eagle Analytical Services and tied to a specific lot number, documenting the sterility, endotoxin, and (where applicable) potency results for that batch." />
            <FAQItem q="Is 99 Purity Peptides US-based?" a="Yes — 99 Purity Peptides is USA-manufactured. All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
