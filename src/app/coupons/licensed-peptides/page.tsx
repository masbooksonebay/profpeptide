"use client";

import { useState } from "react";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";

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

export default function LicensedPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="licensed-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Licensed Peptides Discount Code &mdash; Save 5%</h1>
      </div>
      <CouponFacts slug="licensed-peptides" />
      <CouponCodeCard slug="licensed-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Licensed Peptides is a US research-peptide supplier based in Boca Raton, Florida, whose catalog spans single-compound peptides, peptide blends, and peptide capsules, organized by research area. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Healing &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">GH Secretagogues</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Pigmentation &amp; Skin</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Licensed Peptides states a 99%+ purity standard verified by HPLC and mass spectrometry, with Certificates of Analysis published in a public reports library. It also states that sterility and endotoxin (LAL) verification is performed by an ISO/IEC 17025:2017-accredited laboratory. Its public site does not name the third-party lab that runs its HPLC purity testing, so researchers who need to know the testing facility should request that detail before purchase.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Licensed Peptides describes its compounds as synthesized in GMP-certified US facilities, prices in US dollars, and offers free FedEx shipping on orders over $200 with same-day US fulfillment. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="What peptides does Licensed Peptides carry?" a="Licensed Peptides carries single-compound peptides, peptide blends, and peptide capsules across metabolic, healing, growth-hormone, longevity, and pigmentation research areas. Its catalog includes MOTS-C, BPC-157, TB-500, Tesamorelin, Ipamorelin, Sermorelin, IGF-1 LR3, Epitalon, NAD+, and GHK-Cu, alongside its own branded blends." />
            <FAQItem q="Does Licensed Peptides have a discount code?" a="Yes. Use code PROFPEPTIDE at checkout to save 5% on your Licensed Peptides order. This code is verified and maintained by Prof. Peptide." />
            <FAQItem q="How do I use the Licensed Peptides discount code?" a="Add your items to cart at licensedpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 5% discount will be applied to your order total." />
            <FAQItem q="How does Licensed Peptides test its peptides?" a="Licensed Peptides states a 99%+ purity standard verified by HPLC and mass spectrometry, and publishes Certificates of Analysis in a public reports library. It states that sterility and endotoxin (LAL) testing is performed by an ISO/IEC 17025:2017-accredited laboratory. The public site does not name the lab that runs its HPLC purity testing; researchers who need the testing facility named should request it before purchase." />
            <FAQItem q="Does Licensed Peptides offer free shipping?" a="Yes. Licensed Peptides offers free FedEx shipping on orders over $200, with same-day US fulfillment. All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
