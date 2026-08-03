"use client";

import { useState } from "react";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import JsonLd from "@/components/JsonLd";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="text-sm font-medium text-[#16181B] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#3A759F] flex-shrink-0 text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function PureRawzCouponPage() {
  const v = vendors["purerawz"];
  const rows = vendorProductRows("purerawz");
  const discountPct = vendorDiscountPct("purerawz");
  const autoApply = codeAutoApplies("purerawz");
  const shopUrl = makeShopUrlFor("purerawz");
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": "PureRawz Discount Code - Save 10%",
        "description": "Use code PROF10 for 10% off at PureRawz",
        "url": "https://profpeptide.com/coupons/purerawz",
        "validFrom": "2026-05-01",
        "priceValidUntil": "2026-05-31",
        "seller": { "@type": "Organization", "name": "PureRawz" },
      }} />
      <div className="section max-w-3xl">
        <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
          &larr; Back to Discount Codes
        </Link>
      <CouponBreadcrumb slug="purerawz" />

        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">PureRawz Discount Code &mdash; Save 10%</h1>
        </div>
        <CouponFacts slug="purerawz" />
        <CouponCodeCard slug="purerawz" className="mb-8" />

        <div className="space-y-8">
          <div>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
              PureRawz is a US-based research compound supplier founded to serve the scientific research community with a broad catalog of third-party tested peptides, SARMs, nootropics, and related compounds. Operating out of the United States, PureRawz ships domestically with free shipping on orders over $100 and offers international shipping at competitive rates. Popular compounds by research area:
            </p>
            <dl className="space-y-2 mb-4">
              <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
                <dd className="text-gray-600 dark:text-slate-300">
                  <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
                <dd className="text-gray-600 dark:text-slate-300">
                  <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Performance &amp; Energy</dt>
                <dd className="text-gray-600 dark:text-slate-300">
                  <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>, <Link href="/peptides/follistatin" className="text-[#3A759F] hover:underline">Follistatin</Link>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
                <dd className="text-gray-600 dark:text-slate-300">
                  <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/sermorelin-ipamorelin" className="text-[#3A759F] hover:underline">Sermorelin + Ipamorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
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
                  <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
                <dd className="text-gray-600 dark:text-slate-300">
                  <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>
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
                  <Link href="/peptides/cortagen" className="text-[#3A759F] hover:underline">Cortagen</Link>, <Link href="/peptides/cardiogen" className="text-[#3A759F] hover:underline">Cardiogen</Link>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
                <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
                <dd className="text-gray-600 dark:text-slate-300">
                  <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/pt-141-oxytocin" className="text-[#3A759F] hover:underline">PT-141 + Oxytocin</Link>
                </dd>
              </div>
            </dl>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
              PureRawz conducts both first-party and third-party testing on all products. Every batch is accompanied by a Certificate of Analysis (COA) from independent third-party analytical laboratories, confirming purity, molecular identity, batch number, and testing methodology &mdash; typically HPLC or Mass Spectrometry. PureRawz maintains a minimum purity standard of 99% across its peptide catalog, with COAs published directly on product pages so researchers can verify results before purchase.
            </p>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              PureRawz offers research compounds in multiple forms &mdash; lyophilized powder, liquid solution, nasal spray, tablets, and capsules &mdash; allowing researchers to select the format best suited to their experimental protocols. Their catalog spans peptides, SARMs, nootropics, and post-cycle therapy compounds.
            </p>
          </div>

          {/* Catalog — code card, then the product grid (one row per compound+size). */}
          <div>
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">PureRawz catalog &amp; prices</h2>

            <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

            <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
              Struck-through prices are PureRawz&apos;s list price; the bold figure is{" "}
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
              <FAQItem q="What products does PureRawz carry?" a="PureRawz carries a broad catalog including peptides (BPC-157, TB-500, IGF-1 LR3, Ipamorelin, CJC-1295, GHK-Cu, NAD+, Epitalon, PT-141, Selank, Semax), SARMs (RAD-140, MK-677, LGD-4033, Ostarine, Cardarine), nootropics, and PCT compounds. Available in liquid, powder, nasal spray, tablet, and capsule forms with third-party COAs published on each product page." />
              <FAQItem q="Does PureRawz have a discount code?" a="Yes. Use code PROF10 at checkout for 10% off your entire order at PureRawz. This code is verified by Prof. Peptide and updated regularly." />
              <FAQItem q="How do I use the PureRawz discount code?" a="Add compounds to your cart at purerawz.co, proceed to checkout, and enter PROF10 in the discount code field. The 10% discount applies to your order total before payment." />
              <FAQItem q="What types of third-party testing does PureRawz provide?" a="PureRawz conducts first-party and independent third-party testing using HPLC and Mass Spectrometry. COAs are published on each product page confirming purity, batch number, testing date, and methodology." />
              <FAQItem q="Is PureRawz pricing competitive?" a="PureRawz offers competitive pricing with free US shipping over $100. Use code PROF10 for an additional 10% off." />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
