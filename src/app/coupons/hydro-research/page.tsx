"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";
import BackLink from "@/components/BackLink";


export default function HydroResearchCouponPage() {
  const discountPct = vendorDiscountPct("hydro-research");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="hydro-research" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Hydro Research Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="hydro-research" className="mb-8" />

      <div className="space-y-8">
        {/* Current sale — the sale codes are the affiliate-branded codes; framed as the current sale
            with no expiry claim (the banner has read the same since spring — effectively evergreen). */}
        <div className="rounded-xl border border-gray-100 dark:border-slate-700 p-5">
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Current sale codes</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Alongside the standing <span className="font-semibold">PROFPEPTIDE</span> code ({discountPct}% off everything, permanent), Hydro Research is currently running a larger sale. Two sale codes apply:
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
            <li>
              <span className="font-mono font-semibold text-[#16181B] dark:text-slate-100">PROFPEPTIDE50</span> &mdash; 50% off GLP compounds (Tirzepatide, Retatrutide, Semaglutide, Cagrilintide).
            </li>
            <li>
              <span className="font-mono font-semibold text-[#16181B] dark:text-slate-100">PROFPEPTIDE25</span> &mdash; 25% off everything else.
            </li>
          </ul>
          <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed mt-3">
            One code per order &mdash; the sale codes do not stack with PROFPEPTIDE, but each sale code already beats the standing {discountPct}% within its scope. Sale terms are set by the vendor and can change.
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Hydro Research (hydroresearchpeptides.com) is a US research-peptide supplier with a catalog of roughly 70+ products spanning single-compound peptides, combination blends, packs, capsules, and dropper formats, organized by research area. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; GLP</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (H-(R)), <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link> (H-(T)), <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link> (H-(S)), <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link> (H-(C)), plus GLP blends: a <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link> + <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link> vial (H-(C-T)) and a <Link href="/peptides/cagrisema" className="text-[#3A759F] hover:underline">CagriSema</Link> (Cagrilintide + Semaglutide) vial (H-(C/S))
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, and a BPC-157/TB-500 blend
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin &amp; Other</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, SNAP-8, and additional research compounds
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Hydro Research lists its GLP metabolic peptides under coded names &mdash; H-(R), H-(S), H-(T), H-(C) and combination vials &mdash; so a buyer recognizes the store listing. The compound behind each code is identified on that product&apos;s Certificate of Analysis: the H-(R) Janoshik report tests Retatrutide, H-(S) tests Semaglutide, H-(T) tests Tirzepatide, and H-(C) tests Cagrilintide.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Hydro Research publishes a public Certificate of Analysis library &mdash; roughly 270 documents across its catalog &mdash; with testing split across three laboratories: Janoshik (purity), Chromate Labs (identity), and ILS-Lab, alongside endotoxin, heavy-metal, and sterility screening. Its differentiator is independent portal verification: each purity report links to the testing lab&apos;s own records &mdash; Janoshik reports verify at janoshik.com with a unique key, and Chromate Labs reports verify at chromate.org &mdash; so a certificate can be authenticated on the lab&apos;s site rather than trusting a downloaded PDF. See the{" "}
            <a href="https://hydroresearchpeptides.com/lab-results/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline">Hydro Research lab-results library</a>.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Note on the store:</span> Hydro Research&apos;s product pages require a free account &mdash; you&apos;ll need to register (no purchase) to view individual products and pricing. The lab-results library is viewable without an account. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="Does Hydro Research have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your Hydro Research order — a permanent standing discount. This code is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How much do I save at Hydro Research?" a={`The standing PROFPEPTIDE code takes ${discountPct}% off any order, permanently. During the current sale, two larger sale codes apply: PROFPEPTIDE50 for 50% off GLP compounds (Tirzepatide, Retatrutide, Semaglutide, Cagrilintide), and PROFPEPTIDE25 for 25% off everything else.`} />
            <FAQItem q="Do the Hydro Research codes stack?" a={`No — one discount code per order. The sale codes (PROFPEPTIDE50, PROFPEPTIDE25) do not stack with the standing PROFPEPTIDE code, but each sale code already beats the standing ${discountPct}% within its scope, so use the sale code that applies to what you're buying. Sale terms are set by the vendor and can change.`} />
            <FAQItem q="What are H-(R), H-(S), H-(T), and H-(C)?" a="Hydro Research lists its GLP metabolic peptides under coded names. The compound behind each is identified on that product's Certificate of Analysis: H-(R) is Retatrutide (Janoshik report names Retatrutide), H-(S) is Semaglutide, H-(T) is Tirzepatide, and H-(C) is Cagrilintide. The combination vials are H-(C-T), a Cagrilintide + Tirzepatide blend, and H-(C/S), a Cagrilintide + Semaglutide (CagriSema) blend — both named on their Janoshik certificates. Each certificate is independently verifiable on the testing lab's own portal." />
            <FAQItem q="How does Hydro Research test its peptides?" a="Hydro Research publishes a public Certificate of Analysis library — roughly 270 documents across its catalog — with testing split across three laboratories: Janoshik (purity), Chromate Labs (identity), and ILS-Lab, plus endotoxin, heavy-metal, and sterility screening. Its differentiator is portal verification: Janoshik purity reports verify at janoshik.com with a unique key, and Chromate Labs reports verify at chromate.org — the certificate can be authenticated on the lab's own site rather than trusting a downloaded PDF." />
            <FAQItem q="Do I need an account to shop at Hydro Research?" a="Yes — Hydro Research's product pages require a free account to view individual products and pricing. Registration takes a moment and does not require a purchase. The lab-results / COA library is viewable without an account. All products are sold for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
