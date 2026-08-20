"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";


export default function NovaLabsCouponPage() {
  const discountPct = vendorDiscountPct("nova-labs");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="nova-labs" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">NOVA Labs Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="nova-labs" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            NOVA Labs (nova-biolabs.com) is a UAE-based research-peptide supplier serving the UAE and the wider GCC, with express cold-chain delivery across Dubai, Abu Dhabi, and the region. Its catalog is organized by research area &mdash; recovery and repair, metabolic and weight, longevity and immune, skin and beauty, growth and body, and cognitive and neuro. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity &amp; Immune</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin &amp; Beauty</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth &amp; Body</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Neuro</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every NOVA Labs batch is independently tested by Janoshik, whose per-batch reports state purity (typically &ge;99%) and measured peptide content and are individually verifiable at janoshik.com/verify using a unique key and QR code; each report also carries a Janoshik task number and the NOVA batch code. NOVA describes its program as third-party HPLC and mass-spec testing to &ge;99% purity by accredited laboratories &mdash; the Janoshik reports reviewed confirm purity and content but do not print the analytical method or an accreditation mark. NOVA publishes a Batch Testing Results table linking each peptide&apos;s per-batch COA so researchers can confirm a specific lot before purchase.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            NOVA Labs is UAE-based and ships express, cold-chain across the UAE and the wider GCC. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="What peptides does NOVA Labs carry?" a="NOVA Labs organizes its catalog by research area: recovery and repair (including BPC-157, TB-500, and KPV); metabolic and weight (including Retatrutide and MOTS-C); longevity and immune (including Epitalon); skin and beauty (including GHK-Cu); growth and body (including CJC-1295, Ipamorelin, and Tesamorelin); and cognitive and neuro (including Semax, Selank, and DSIP)." />
            <FAQItem q="Does NOVA Labs have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your entire NOVA Labs order. This code is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How do I use the NOVA Labs discount code?" a={`Add your items to cart at nova-biolabs.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="How does NOVA Labs test its peptides?" a="Every NOVA Labs batch is independently tested by Janoshik, whose per-batch reports state purity (typically ≥99%) and peptide content and are verifiable at janoshik.com/verify with a unique key and QR code. NOVA describes its testing as third-party HPLC and mass-spec to ≥99% purity by accredited labs; the Janoshik reports reviewed confirm purity and content but do not print the analytical method or an accreditation mark." />
            <FAQItem q="Are Certificates of Analysis available for NOVA Labs products?" a="Yes. NOVA Labs publishes a Batch Testing Results table where each peptide's per-batch Certificate of Analysis and third-party lab verification (for example, Janoshik) can be reviewed before purchase." />
            <FAQItem q="Where is NOVA Labs based and where does it ship?" a="NOVA Labs is UAE-based and ships express, cold-chain across the UAE and the wider GCC, including Dubai and Abu Dhabi. All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
