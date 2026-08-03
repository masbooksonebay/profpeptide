"use client";

import { useState } from "react";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { vendors } from "@/data/vendors";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";

const v = vendors["purerx-peptides"];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
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

export default function PureRxPeptidesCouponPage() {
  const rows = vendorProductRows("purerx-peptides");
  const discountPct = vendorDiscountPct("purerx-peptides");
  const autoApply = codeAutoApplies("purerx-peptides");
  const shopUrl = makeShopUrlFor("purerx-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="purerx-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">PureRx Peptides Discount Code &mdash; Save 15%</h1>
      </div>
      <CouponFacts slug="purerx-peptides" />
      <CouponCodeCard slug="purerx-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            PureRx Peptides is a US-based research-peptide supplier whose catalog spans metabolic and GLP-class compounds, recovery and repair peptides, growth-hormone secretagogues, Khavinson-style short-peptide bioregulators, and cognitive and skin research compounds. Every batch is independently tested before release, and orders placed by 2:30pm CST ship the same day. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link> (DAC), <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Bioregulators</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cardiogen" className="text-[#3A759F] hover:underline">Cardiogen</Link>, <Link href="/peptides/cortagen" className="text-[#3A759F] hover:underline">Cortagen</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Sleep</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Repair &amp; Recovery</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">ARA-290 (Cibinetide)</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            PureRx describes a multi-step quality-control process: samples are sent to an ISO-certified laboratory and analyzed by HPLC, mass spectrometry, and other methods, and every batch is independently tested for identity and purity before it is approved for release. Each approved batch is issued a Certificate of Analysis documenting its results. PureRx states that COAs are available for applicable products and include third-party testing information to help researchers verify product identity.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            PureRx Peptides is US-based and ships domestically, with same-day dispatch on orders placed before 2:30pm CST and 2-day shipping. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">PureRx Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are PureRx Peptides&apos; list price; the bold figure is{" "}
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
            <FAQItem q="What peptides does PureRx Peptides carry?" a="PureRx carries research compounds across several categories: metabolic and GLP-class compounds including Retatrutide, Tirzepatide, Cagrilintide, and AOD-9604; recovery peptides such as BPC-157; growth-hormone secretagogues including CJC-1295 (DAC) and Ipamorelin; short-peptide bioregulators including Cardiogen, Cortagen, and Epitalon; plus GHK-Cu, DSIP, and ARA-290 (Cibinetide)." />
            <FAQItem q="Does PureRx Peptides have a discount code?" a="Yes. Use code PROFPEPTIDE at checkout to save 15% on your entire PureRx Peptides order. This code is verified and maintained by Prof. Peptide." />
            <FAQItem q="How do I use the PureRx Peptides discount code?" a="Add your items to cart at purerxpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 15% discount will be applied to your order total." />
            <FAQItem q="How does PureRx Peptides test its peptides?" a="PureRx describes a multi-step process: samples are sent to an ISO-certified lab and analyzed by HPLC, mass spectrometry, and other methods, and every batch is independently tested for identity and purity before release. Each approved batch is then issued a Certificate of Analysis documenting its results." />
            <FAQItem q="Are Certificates of Analysis available for PureRx products?" a="PureRx states that COAs are available for applicable products. Each COA documents the batch's results and includes third-party testing information to help verify product identity." />
            <FAQItem q="Is PureRx Peptides US-based, and how fast does it ship?" a="Yes — PureRx Peptides is US-based and ships domestically. Orders placed before 2:30pm CST ship the same day, with 2-day shipping. All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
