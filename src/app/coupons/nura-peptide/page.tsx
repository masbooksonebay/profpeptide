"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendors } from "@/data/vendors";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";

const v = vendors["nura-peptide"];


export default function NuraPeptideCouponPage() {
  const rows = vendorProductRows("nura-peptide");
  const discountPct = vendorDiscountPct("nura-peptide");
  const autoApply = codeAutoApplies("nura-peptide");
  const shopUrl = makeShopUrlFor("nura-peptide");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="nura-peptide" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Nura Peptide Discount Code: PROFPEPTIDE &mdash; Save 25%</h1>
      </div>
      <CouponCodeCard slug="nura-peptide" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Nura Peptide is a US-based research-peptide supplier that ships domestically and publishes a Certificate of Analysis for every batch through a public COA library. Its catalog spans metabolic and GLP-class compounds, recovery and repair peptides, growth-hormone secretagogues, longevity and bioregulator compounds, skin research peptides, and cognitive compounds. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (listed as GLP-3R), <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link> (listed as GLP-2T), <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link> (listed as GLP-1SG), <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link> (in the GLP-3R/CAG blend), <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Blend</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity &amp; Bioregulators</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Sleep</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual &amp; Gut Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>
              </dd>
            </div>
          </dl>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-4 bg-gray-50 dark:bg-[#1e293b] mb-4">
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-[#16181B] dark:text-slate-100">Finding the GLP compounds on Nura&apos;s site:</span> Nura lists its metabolic/GLP peptides under proprietary code names. Retatrutide is listed as GLP-3R, Tirzepatide as GLP-2T, and Semaglutide as GLP-1SG; the GLP-3R/CAG blend is Retatrutide + Cagrilintide &mdash; search those codes in the Nura catalog to reach the corresponding product page.
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every Nura Peptide batch is third-party tested by Freedom Diagnostics, whose per-batch certificates confirm identity by LC-MS, purity by HPLC-UV, and net peptide content; recent reports also add endotoxin (LAL, USP &lt;85&gt;) and microbial (PCR) screening. Each COA is individually verifiable by its search code at FreedomDiagnosticsTesting.com, and the certificates are published in a public COA library so researchers can review a given batch before purchase. Nura does not publish a single headline purity percentage; it points instead to the per-batch COA as the record of each lot's results.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Nura Peptide is US-based and ships domestically. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Nura Peptide catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Nura Peptide&apos;s list price; the bold figure is{" "}
            {autoApply ? (
              <>your price after the {discountPct}% code</>
            ) : (
              <>your price once you apply code {v.code} at checkout</>
            )}. Prices current as of {PRICES_UPDATED_DATE}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="What peptides does Nura Peptide carry?" a="Nura carries research compounds across several categories. Its metabolic/GLP line is sold under proprietary code names — Retatrutide (listed as GLP-3R), Tirzepatide (listed as GLP-2T), Semaglutide (listed as GLP-1SG), and a Retatrutide/Cagrilintide blend (listed as GLP-3R/CAG) — alongside MOTS-C, AOD-9604, and 5-Amino-1MQ; recovery peptides such as BPC-157, TB-500, and a BPC-157/TB-500 blend; growth-hormone secretagogues including CJC-1295, Ipamorelin, Tesamorelin, Sermorelin, and IGF-1 LR3; longevity and bioregulator compounds including Epitalon, NAD+, SS-31, and Glutathione; plus GHK-Cu, the GLOW and KLOW blends, Semax, Selank, DSIP, PT-141, and KPV." />
            <FAQItem q="Where do I find Retatrutide (GLP-3R), Tirzepatide (GLP-2T), and Semaglutide (GLP-1SG) on Nura's site?" a="Nura lists its GLP/metabolic peptides under proprietary code names. Retatrutide is listed as GLP-3R, Tirzepatide as GLP-2T, and Semaglutide as GLP-1SG; the GLP-3R/CAG blend is Retatrutide + Cagrilintide. Search those codes in the Nura catalog to reach the matching product page and its published Certificate of Analysis." />
            <FAQItem q="Does Nura Peptide have a coupon code?" a="Yes. Use code PROFPEPTIDE at checkout to save 25% on your entire Nura Peptide order. This code is verified and maintained by Prof. Peptide." />
            <FAQItem q="How do I use the Nura Peptide discount code?" a="Add your items to cart at nurapeptide.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 25% discount will be applied to your order total." />
            <FAQItem q="How does Nura Peptide test its peptides?" a="Every Nura batch is third-party tested by Freedom Diagnostics, whose certificates confirm identity by LC-MS, purity by HPLC-UV, and net content, with recent reports adding endotoxin (USP <85>) and microbial (PCR) screening; each COA is verifiable by its search code at FreedomDiagnosticsTesting.com. Nura does not publish a single headline purity figure; the per-batch COA is the record of each lot's results." />
            <FAQItem q="Are Certificates of Analysis available for Nura products?" a="Yes. Nura publishes a public COA library where each batch's Freedom Diagnostics Certificate of Analysis can be viewed and verified by its search code at FreedomDiagnosticsTesting.com." />
            <FAQItem q="Is Nura Peptide US-based?" a="Yes — Nura Peptide is US-based and ships domestically. All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
