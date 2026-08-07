"use client";

import { useState } from "react";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { vendors } from "@/data/vendors";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";

const v = vendors["ameano-peptides"];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:bg-[#1e293b] transition-colors"
      >
        <span className="text-sm font-medium text-[#16181B] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#3A759F] flex-shrink-0 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function AmeanoPeptidesCouponPage() {
  const rows = vendorProductRows("ameano-peptides");
  const discountPct = vendorDiscountPct("ameano-peptides");
  const autoApply = codeAutoApplies("ameano-peptides");
  const shopUrl = makeShopUrlFor("ameano-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="ameano-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Ameano Peptides Discount Code &mdash; Save 10%</h1>
      </div>
      <CouponFacts slug="ameano-peptides" />
      <CouponCodeCard slug="ameano-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Ameano Peptides (AMP) is a US-based research-peptide vendor in Little Rock, Arkansas, with a catalog of 60+ research compounds spanning metabolic, growth-hormone, recovery, skin, longevity, cognitive, immunity, and sexual-health research. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (listed as AMP-3P), <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link> (listed as AMP-2P), <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link> (listed as AMP-1P), <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/pda" className="text-[#3A759F] hover:underline">PDA</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>, <Link href="/peptides/ll-37" className="text-[#3A759F] hover:underline">LL-37</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/oxytocin" className="text-[#3A759F] hover:underline">Oxytocin</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin</Link>
              </dd>
            </div>
          </dl>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-4 bg-gray-50 dark:bg-[#1e293b] mb-4">
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-[#16181B] dark:text-slate-100">Finding the GLP compounds on Ameano&apos;s site:</span> Ameano lists its metabolic/GLP peptides under proprietary code names. Retatrutide is listed as AMP-3P, Tirzepatide as AMP-2P, and Semaglutide as AMP-1P &mdash; search those codes in the Ameano catalog to reach the corresponding product page.
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Every Ameano Peptides product links its own Certificate of Analysis &mdash; a batch-numbered Test Report from Janoshik, an independent analytical lab (janoshik.com). Each report quantifies peptide content across multiple vials and reports purity by HPLC, and every report is independently checkable at janoshik.com/verify/ using a unique key printed on it (alongside a QR code). Ameano states a &ge;99% purity standard for its catalog, and because each COA is a lot-numbered Janoshik report carrying its own verification key, researchers can confirm it directly with the lab rather than relying on a single representative certificate.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Ameano Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Ameano Peptides&apos; list price; the bold figure is{" "}
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
              q="What peptides does Ameano Peptides carry?"
              a="Ameano carries 60+ research compounds across metabolic, growth-hormone, recovery, skin, longevity, cognitive, immunity, and sexual-health categories. Its metabolic/GLP line is sold under proprietary code names: Retatrutide (listed as AMP-3P), Tirzepatide (listed as AMP-2P), and Semaglutide (listed as AMP-1P), alongside Cagrilintide, BPC-157, TB-500, GHK-Cu, CJC-1295, Ipamorelin, and NAD+."
            />
            <FAQItem
              q="Does Ameano Peptides have a discount code?"
              a="Yes. Use code PROF10 at checkout to save 10% on any Ameano Peptides order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Ameano Peptides discount code?"
              a="Add your items to cart at ameanopeptides.com, proceed to checkout, and enter PROF10 in the discount code field. The discount will be applied to your order total."
            />
            <FAQItem
              q="Where do I find Semaglutide (AMP-1P), Tirzepatide (AMP-2P), and Retatrutide (AMP-3P) on Ameano's site?"
              a="Ameano lists its GLP/metabolic peptides under proprietary code names. Semaglutide is listed as AMP-1P, Tirzepatide as AMP-2P, and Retatrutide as AMP-3P. Search those AMP codes in the Ameano catalog to reach the matching product page and its published Certificate of Analysis."
            />
            <FAQItem
              q="What testing does Ameano Peptides do?"
              a="Ameano's products are tested by Janoshik, an independent analytical lab. Each product links a batch-numbered Janoshik Test Report that quantifies peptide content across multiple vials and reports purity by HPLC, verifiable at janoshik.com/verify/ with a unique key printed on the report. Ameano states a ≥99% purity standard for its catalog."
            />
            <FAQItem
              q="Does Ameano Peptides provide Certificates of Analysis?"
              a="Yes. Every product links its own Certificate of Analysis — a batch-numbered Test Report from Janoshik — as a 'View COA' document. Each report carries a unique key and QR code and is independently verifiable at janoshik.com/verify/."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
