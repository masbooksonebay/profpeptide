"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";


export default function IntegrativePeptidesCouponPage() {
 const discountPct = vendorDiscountPct("integrative-peptides");
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>
      <CouponBreadcrumb slug="integrative-peptides" />

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Integrative Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
 </div>
 <CouponCodeCard slug="integrative-peptides" className="mb-8" />

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Integrative Peptides (integrativepeptides.com) was founded in 2018 with a mission to make advanced peptide therapies accessible without needles or high costs. They specialize in oral peptide formulations designed for physician use and patient access &mdash; a key differentiator from most research peptide vendors who sell injectable lyophilized powders. Integrative states that it uses FDA-compliant manufacturing and independent third-party lab testing to a &ge;99% purity standard on every batch, screening for heavy metals, microbials, and other contaminants. Popular compounds by research area:
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Bioregulators</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/thymogen" className="text-[#3A759F] hover:underline">Thymogen</Link>, <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>
 </dd>
 </div>
 </dl>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Their product catalog includes <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, TB4-Frag, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, KPV, Thymogen Alpha-1, CerebroPrep, CogniPep, PinealPep, and other peptide complexes &mdash; all in oral and convenient formats. Integrative states that every batch undergoes independent third-party laboratory testing and is screened for heavy metals, residual solvents, and endotoxins. This oral-first approach makes Integrative Peptides particularly relevant for practitioners and patients who prefer non-injectable administration routes.
 </p>
 </div>


 <div>
 <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <FAQItem
 q="What peptides does Integrative Peptides carry?"
 a="Integrative Peptides specializes in oral and topical peptide formulations designed for researchers who prefer non-injectable delivery formats. Their catalog includes oral BPC-157 (capsules and tablets), topical preparations, and combination peptide formulations."
 />
 <FAQItem
 q="Does Integrative Peptides have a coupon code?"
 a={`Yes, use code PROFPEPTIDE for ${discountPct}% off your order. This code is verified and maintained by Prof. Peptide.`}
 />
 <FAQItem
 q="What makes Integrative Peptides different?"
 a="They specialize in oral peptide formulations that don't require needles or reconstitution, making them accessible for both physicians and patients. Most research peptide vendors sell injectable lyophilized powders — Integrative Peptides focuses exclusively on convenient oral formats."
 />
 <FAQItem
 q="Are Integrative Peptides products third-party tested?"
 a="Integrative states that every batch is independently third-party tested to ≥99% purity and screened for heavy metals, residual solvents, and endotoxins, and that its manufacturing is FDA-compliant."
 />
 <FAQItem
 q="Where does Integrative Peptides ship?"
 a="They are a US-based company shipping domestically."
 />
 </div>
 </div>
 </div>
 </div>
 );
}
