"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";
import BackLink from "@/components/BackLink";


export default function PeptidesGgCouponPage() {
  const v = vendors["peptides-gg"];
  const rows = vendorProductRows("peptides-gg");
  const discountPct = vendorDiscountPct("peptides-gg");
  const autoApply = codeAutoApplies("peptides-gg");
  const shopUrl = makeShopUrlFor("peptides-gg");
  return (
 <div className="section max-w-3xl">
 <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="peptides-gg" />

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Peptides.gg Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
 </div>
 <CouponCodeCard slug="peptides-gg" className="mb-8" />

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Peptides.gg is a US-made research peptide supplier with a deep catalog of 90+ products available as vials, ready-to-use liquids, and capsules &mdash; covering GLP/metabolic, growth hormone, recovery, longevity and bioregulator, and nootropic research categories. Orders ship the same day, shipping is free on orders over $200, and every order earns 5% back in store credit. Researchers running ongoing protocols can save an additional 15% through the Subscription Saver. Returns are accepted within 30 days, and support is available by chat, phone, and email. Popular compounds by research area:
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/cagrisema" className="text-[#3A759F] hover:underline">CagriSema</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Performance &amp; Energy</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#3A759F] hover:underline">Tesamorelin + Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
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
 <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>
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
 <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Bioregulators</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>, <Link href="/peptides/thymogen" className="text-[#3A759F] hover:underline">Thymogen</Link>, <Link href="/peptides/cortagen" className="text-[#3A759F] hover:underline">Cortagen</Link>, <Link href="/peptides/cardiogen" className="text-[#3A759F] hover:underline">Cardiogen</Link>
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
 Every batch is third-party tested by Freedom Diagnostics, with published COAs where each sample ID links directly to its full lab report &mdash; so you can verify the exact lot you receive rather than a generic reference document. The certificates confirm identity by mass spectrometry and purity by HPLC-UV, and each is individually verifiable by its search code at FreedomDiagnosticsTesting.com. Purity runs 98&ndash;99%+ depending on the product. The catalog spans GLP/metabolic compounds (Retatrutide, Semaglutide, Tirzepatide, Cagrilintide, Mazdutide, Survodutide, Orforglipron), growth-hormone secretagogues (CJC-1295, Ipamorelin, Sermorelin, Tesamorelin, IGF-1 LR3), recovery peptides (BPC-157, TB-500, GHK-Cu, KPV, plus KLOW and GLOW blends), longevity and bioregulators (Epitalon and a deep Khavinson bioregulator line), and nootropics (Semax, Selank, Noopept).
 </p>
 </div>

 {/* Catalog — code card, then the product grid (one row per compound+size). */}
 <div>
 <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Peptides.gg catalog &amp; prices</h2>

 <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

 <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
 Struck-through prices are Peptides.gg&apos;s list price; the bold figure is{" "}
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
 q="What peptides does Peptides.gg carry?"
 a="Peptides.gg carries 90+ research-grade products across GLP/metabolic, growth hormone, recovery, longevity and bioregulator, and nootropic categories — available as vials, liquids, and capsules. Highlights include Retatrutide, Semaglutide, Tirzepatide, Cagrilintide, CJC-1295, Ipamorelin, Tesamorelin, IGF-1 LR3, BPC-157, TB-500, GHK-Cu, KPV, KLOW and GLOW blends, Epitalon and a deep Khavinson bioregulator line, plus Semax, Selank, and Noopept."
 />
 <FAQItem
 q="Does Peptides.gg have a coupon code?"
 a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Peptides.gg order. This code is verified and maintained by Prof. Peptide.`}
 />
 <FAQItem
 q="How do I use the Peptides.gg discount code?"
 a={`Add your items to cart at peptides.gg, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
 />
 <FAQItem
 q="What testing does Peptides.gg conduct?"
 a="Peptides.gg third-party tests every batch through Freedom Diagnostics and publishes COAs where each sample ID links to the full lab report; the certificates confirm identity by mass spectrometry and purity by HPLC-UV, each verifiable by its search code at FreedomDiagnosticsTesting.com. Purity runs 98–99%+ depending on the product."
 />
 <FAQItem
 q="How does Peptides.gg ship, and what does it cost?"
 a="Peptides.gg is US-made and ships orders the same day. Shipping is free on orders over $200, and returns are accepted within 30 days. Every order also earns 5% back in store credit."
 />
 <FAQItem
 q="Does Peptides.gg offer a subscription discount?"
 a="Yes — the Subscription Saver takes an additional 15% off recurring orders, on top of any one-time code, for researchers running ongoing protocols."
 />
 </div>
 </div>

 </div>
 </div>
 );
}
