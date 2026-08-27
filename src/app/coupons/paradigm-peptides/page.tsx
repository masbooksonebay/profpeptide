"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";


export default function ParadigmPeptidesCouponPage() {
  const discountPct = vendorDiscountPct("paradigm-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="paradigm-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Paradigm Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="paradigm-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Paradigm Peptides (paradigm-peptide.com) is a US research-peptide supplier with a catalog of single-compound peptides and blends organized by research area. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; GLP</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, plus Lipo-C, L-Carnitine
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ll-37" className="text-[#3A759F] hover:underline">LL-37</Link>, <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">ARA-290</Link>, <Link href="/peptides/mgf" className="text-[#3A759F] hover:underline">PEG-MGF</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>, a CJC-1295 (no DAC) + <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link> blend
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual, Skin &amp; Other</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, SNAP-8
              </dd>
            </div>
          </dl>

          {/* Testing block — Finnrick-anchored (the vendor publishes no self-COAs; the basis is
              Finnrick's independent blind-testing program). Scoped to the two tested compounds. */}
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Paradigm Peptides&apos; quality signal is independent third-party testing.{" "}
            <a href="https://www.finnrick.com/vendors/paradigm-peptide" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline">Finnrick</a>{" "}
            &mdash; a service that runs blind testing on customer-submitted peptide samples &mdash; ranks Paradigm Peptides <span className="font-semibold text-[#16181B] dark:text-slate-100">#7 of 307 vendors overall</span> on its leaderboard, at a PREMIUM grade, with 17 of 17 classifiable tests passed (as of August 2026). Finnrick has blind-tested two of Paradigm&apos;s compounds specifically &mdash; Retatrutide (84% across 8 tests) and Tirzepatide (87% across 10 tests) &mdash; so that standing reflects those tested products, not a catalog-wide guarantee. Finnrick also lists paradigm-peptide.com as a verified vendor website (verified November 2025).
          </p>

          {/* Disambiguation — identity, not accusation. Required. */}
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">A note on the name:</span> this vendor (paradigm-peptide.com) states it has no affiliation with the former paradigmpeptides.com &mdash; a separate business that has since closed. Finnrick&apos;s website verification and its test history for this vendor, all dated 2025 onward, are specific to paradigm-peptide.com. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="Does Paradigm Peptides have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your Paradigm Peptides order. This code is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How do I use the Paradigm Peptides discount code?" a={`Add your items to cart at paradigm-peptide.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="How is Paradigm Peptides tested?" a="Paradigm Peptides' quality signal is independent third-party testing. Finnrick — a service that runs blind testing on customer-submitted peptide samples — ranks Paradigm #7 of 307 vendors overall (PREMIUM grade, 17 of 17 classifiable tests passed, as of August 2026). Finnrick has blind-tested two of Paradigm's compounds specifically: Retatrutide (84%, 8 tests) and Tirzepatide (87%, 10 tests). That standing reflects the tested products, not a catalog-wide guarantee." />
            <FAQItem q="Is this the same as the old Paradigm Peptides (paradigmpeptides.com)?" a="No. This vendor, paradigm-peptide.com, states it has no affiliation with paradigmpeptides.com or paradigmpeptidesllc.com — a separate business that has since closed. The independent testing record cited here is verified by Finnrick specifically to paradigm-peptide.com, with all tests dated 2025 onward." />
            <FAQItem q="What does Paradigm Peptides carry?" a="Paradigm Peptides carries single-compound peptides and blends across metabolic/GLP (Retatrutide, Tirzepatide, Lipo-C, L-Carnitine), recovery and repair (LL-37, ARA-290, PEG-MGF, a Wolverine stack), growth hormone (Tesamorelin, Sermorelin, IGF-1 LR3, a CJC-1295 no-DAC + Ipamorelin blend), and sexual/skin research (PT-141, Kisspeptin, Melanotan I and II, SNAP-8). All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
