"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";
import BackLink from "@/components/BackLink";


export default function IgnitePeptidesCouponPage() {
  const v = vendors["ignite-peptides"];
  const rows = vendorProductRows("ignite-peptides");
  const discountPct = vendorDiscountPct("ignite-peptides");
  const autoApply = codeAutoApplies("ignite-peptides");
  const shopUrl = makeShopUrlFor("ignite-peptides");
 return (
 <div className="section max-w-3xl">
 <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="ignite-peptides" />

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Ignite Peptides Discount Code: {v.code} &mdash; Save {discountPct}%</h1>
 </div>
 <CouponCodeCard slug="ignite-peptides" className="mb-8" />

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Ignite Peptides (ignitepeptides.com) is a US-based research peptide supplier founded in 2022 and headquartered in Owatonna, Minnesota. The company serves academic researchers, independent scientists, and professional laboratories across the United States, with a catalog of over 40 research-grade peptides spanning metabolic, recovery, growth hormone, cognitive, and longevity research categories. All orders ship domestically from within the United States with discreet packaging and encrypted payment systems. Popular compounds by research area:
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>
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
 <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Recovery</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>
 </dd>
 </div>
 </dl>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Ignite Peptides conducts two-stage independent third-party testing on every batch &mdash; before and after a product is added to their catalog. The published Certificates of Analysis are issued by two independent labs: Janoshik, whose Test Reports quantify peptide content and report purity by HPLC with a per-record key verifiable at janoshik.com/verify/, and Freedom Diagnostics, whose reports add mass-spectrometry identity confirmation and net peptide content with a per-record search code at FreedomDiagnosticsTesting.com. Ignite states its labs meet ISO and GMP standards, tests to a 99%+ purity standard, and publishes a COA for every product on its site.
 </p>
 </div>

 {/* Catalog — code card, then the product grid (one row per compound+size). */}
 <div>
   <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Ignite Peptides catalog &amp; prices</h2>

   <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

   <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
     Struck-through prices are Ignite Peptides&apos; list price; the bold figure is{" "}
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
 <FAQItem
 q="What peptides does Ignite Peptides carry?"
 a="Ignite Peptides carries 40+ research-grade compounds across metabolic, recovery, growth hormone, and longevity categories. Their catalog includes compounds such as BPC-157, TB-500, CJC-1295, Semaglutide, and Retatrutide, alongside a broad range of additional peptides for diverse research applications."
 />
 <FAQItem
 q="Does Ignite Peptides have a coupon code?"
 a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your Ignite Peptides order. This code is verified and maintained by Prof. Peptide.`}
 />
 <FAQItem
 q="How do I use the Ignite Peptides coupon code?"
 a={`Add your items to cart at ignitepeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
 />
 <FAQItem
 q="Is Ignite Peptides third-party tested?"
 a="Yes — by Janoshik and Freedom Diagnostics, two independent third-party labs. Every batch undergoes two-stage testing (before and after being listed for sale); each COA reports purity by HPLC (Janoshik) or purity plus mass-spectrometry identity (Freedom Diagnostics) and carries a per-record verify key or search code. Ignite states its labs meet ISO and GMP standards and tests to a 99%+ purity standard."
 />
 <FAQItem
 q="What is Ignite Peptides' purity standard?"
 a="Ignite Peptides tests to a 99%+ purity standard, verified by independent third-party labs — Janoshik and Freedom Diagnostics. COAs for all products are publicly available on their website."
 />
 <FAQItem
 q="How many peptides does Ignite Peptides carry?"
 a="Ignite Peptides carries a catalog of 40+ research-grade peptides spanning metabolic, recovery, growth hormone, and other research categories."
 />
 </div>
 </div>

 </div>
 </div>
 );
}
