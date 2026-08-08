"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";


export default function MidwestPeptideCouponPage() {
  const v = vendors["midwest-peptide"];
  const rows = vendorProductRows("midwest-peptide");
  const discountPct = vendorDiscountPct("midwest-peptide");
  const autoApply = codeAutoApplies("midwest-peptide");
  const shopUrl = makeShopUrlFor("midwest-peptide");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="midwest-peptide" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Midwest Peptide Discount Code &mdash; Save 10%</h1>
      </div>
      <CouponFacts slug="midwest-peptide" />
      <CouponCodeCard slug="midwest-peptide" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Midwest Peptide is a US-based research-peptide vendor operated by Midwest BioResearch LLC and based in Mission, Kansas. It supplies research-use-only peptides across metabolic, recovery, growth-hormone, skin, cognitive, sleep, longevity, and sexual-health research. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295 (No DAC)</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">CJC-1295 (No DAC) + Ipamorelin</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#3A759F] hover:underline">Tesamorelin + Ipamorelin</Link>
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
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
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
                <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Also carried</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31 (Elamipretide)</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>, plus capsule formats of <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link> and <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every product ships research-use-only with a batch-specific Certificate of Analysis published on its product page. Current batches are tested by ILS Laboratories (San Diego, CA; ISO/IEC 17025-accredited) under a full QC panel &mdash; identity by mass spectrometry, purity by RP-HPLC with UV detection (99%+), quantity, sterility (PCR), endotoxins (LAL), heavy metals (ICP-MS, USP &lt;233&gt;), and a fentanyl screen &mdash; and each COA carries a QR code and access code that verify it at portal.ils-lab.com. Some earlier batches were tested by Freedom Diagnostics (identity by LC-MS, purity by HPLC-UV), verifiable by search code at FreedomDiagnosticsTesting.com.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Midwest Peptide ships free on every order, with same-day UPS shipping from a US facility &mdash; most domestic deliveries arrive within 2&ndash;3 business days. Flexible payment options include Zelle and Apple Cash (an extra 5% off when you pay with either), and bulk pricing discounts run up to 18% off. Questions can be directed to info@midwestpeptide.com.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Midwest Peptide catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Midwest Peptide&apos;s list price; the bold figure is{" "}
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
              q="What peptides does Midwest Peptide carry?"
              a="Midwest Peptide carries research compounds across metabolic, recovery, growth-hormone, skin, cognitive, sleep, longevity, and sexual-health research. Carried compounds include Retatrutide, Tirzepatide, Semaglutide, Cagrilintide, MOTS-C, BPC-157, TB-500, CJC-1295 (No DAC), Tesamorelin, GHK-Cu, Melanotan I and II, the GLOW and KLOW blends, Semax, Selank, DSIP, NAD+, Glutathione, and PT-141, among others."
            />
            <FAQItem
              q="Does Midwest Peptide have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Midwest Peptide order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Midwest Peptide discount code?"
              a="Add your items to cart at midwestpeptide.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="Is Midwest Peptide third-party tested?"
              a="Yes. Each product ships with a batch-specific Certificate of Analysis published on its product page. Current batches are tested by ILS Laboratories (San Diego, CA; ISO/IEC 17025-accredited) under a full QC panel — identity by mass spectrometry, purity by RP-HPLC/UV (99%+), quantity, sterility (PCR), endotoxins (LAL), heavy metals (ICP-MS, USP <233>), and a fentanyl screen — with each COA QR-verifiable at portal.ils-lab.com. Some earlier batches were tested by Freedom Diagnostics (HPLC-UV purity, LC-MS identity), verifiable by search code at FreedomDiagnosticsTesting.com."
            />
            <FAQItem
              q="How does Midwest Peptide ship?"
              a="Midwest Peptide offers free shipping on every order, with same-day UPS shipping from a US facility. Most domestic deliveries arrive within 2–3 business days."
            />
            <FAQItem
              q="What payment options does Midwest Peptide accept?"
              a="Flexible payment options include Zelle and Apple Cash, which earn an extra 5% off, and bulk pricing discounts run up to 18% off. Midwest Peptide is operated by Midwest BioResearch LLC in Mission, Kansas; questions can be directed to info@midwestpeptide.com."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
