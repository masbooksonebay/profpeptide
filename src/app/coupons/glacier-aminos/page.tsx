"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CODES_VERIFIED_DATE } from "@/data/codes-verified";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";


export default function GlacierAminosCouponPage() {
  const v = vendors["glacier-aminos"];
  const rows = vendorProductRows("glacier-aminos");
  const discountPct = vendorDiscountPct("glacier-aminos");
  const autoApply = codeAutoApplies("glacier-aminos");
  const shopUrl = makeShopUrlFor("glacier-aminos");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="glacier-aminos" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Glacier Aminos Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="glacier-aminos" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Glacier Aminos (glacieraminos.shop) is a US-based research peptide supplier with domestic fulfillment and USD pricing. The company operates a fully public catalog &mdash; all products, including its three GLP-1 class compounds, are listed and accessible without account gating. Their catalog spans the metabolic GLP category, recovery and repair peptides, longevity compounds, and cosmetic peptides, alongside a small number of proprietary research blends not carried by other Prof. Peptide-tracked vendors. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#3A759F] hover:underline">Tesamorelin + Ipamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/semax-selank" className="text-[#3A759F] hover:underline">Semax + Selank</Link>
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
                <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/kpv-bpc-157" className="text-[#3A759F] hover:underline">KPV + BPC-157</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>
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
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Glacier Aminos publishes a public, batch-searchable Certificate of Analysis library &mdash; enter a batch number at glacieraminos.shop to pull the matching COA. Its certificates come from three independent US labs: Forever Young Pharmacy (Carlsbad, CA) on September-2025 lots, Freedom Diagnostics across late-2025 to early-2026 lots (most of the published library), and Kovera Labs on the most recent 2026 lots. Every report gives purity by HPLC (a ≥98% specification) and net peptide content; the Forever Young reports add pH and single/total impurity limits, the Freedom Diagnostics reports test three vials per batch and add an endotoxin screen and mass-spectrometry identity, and the Kovera reports go furthest &mdash; three-vial batch conformity plus LC-MS identity, an endotoxin screen, a microbial sterility screen, and heavy-metal screening (lead, cadmium, arsenic, mercury), with a per-record access code verifiable at koveralabs.com/verify. Glacier describes its process as a seven-step testing protocol, and its batch-level traceability lets researchers match the specific batch received to its report rather than a generic product-page certificate.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Cold-chain shipping is included on Glacier Aminos orders, helping preserve compound integrity in transit. Pricing is competitive across the catalog &mdash; Glacier lists Retatrutide at roughly $62.99 per 10mg vial as of May 2026. The catalog also includes KLOW 80, a Glacier-exclusive research blend combining KPV, LL-37, Oxytocin, and the company&apos;s Wolverine blend.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Glacier Aminos catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Glacier Aminos&apos; list price; the bold figure is{" "}
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
            <FAQItem q="What peptides does Glacier Aminos carry?" a="Glacier Aminos carries research compounds across several categories. Its metabolic GLP catalog includes Semaglutide, Tirzepatide, Retatrutide, and Cagrilintide, along with combination compounds such as a GLP-3/Cagrilintide blend and a GLP-2.5 tirzepatide/retatrutide hybrid. Recovery and repair peptides include BPC-157, TB-500, GHK-Cu, and a CJC-1295/Ipamorelin blend. Longevity and additional research compounds include Epithalon, FOXO4-DRI, 5-Amino-1MQ, AOD-9604, DSIP, Glutathione, and Cartalax. Glacier also carries KLOW 80, a proprietary blend of KPV, LL-37, Oxytocin, and its Wolverine blend." />
            <FAQItem q="Does Glacier Aminos have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your entire Glacier Aminos order. This code is verified and maintained by Prof. Peptide and valid as of ${CODES_VERIFIED_DATE}.`} />
            <FAQItem q="How do I use the Glacier Aminos discount code?" a={`Add your items to cart at glacieraminos.shop, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="How does Glacier Aminos test its peptides?" a="Glacier Aminos publishes a public, batch-searchable COA library. Its certificates come from three independent US labs over time — Forever Young Pharmacy (September 2025), Freedom Diagnostics (late 2025 to early 2026, the bulk of the library), and Kovera Labs (the most recent 2026 lots) — reporting purity by HPLC and net peptide content. The Freedom and Kovera reports test three vials per batch and add an endotoxin screen; the Kovera reports go furthest, also covering LC-MS identity, microbial sterility, and heavy metals. Glacier describes its process as a seven-step testing protocol." />
            <FAQItem q="How do I verify a Glacier Aminos Certificate of Analysis?" a="Every Glacier Aminos batch is traceable. Each Certificate of Analysis is tied to a batch number searchable at glacieraminos.shop. The Kovera Labs reports carry a per-record access code verifiable at koveralabs.com/verify, and the Freedom Diagnostics reports a search code at FreedomDiagnosticsTesting.com, so documentation can be matched to the specific batch received rather than a generic product-page certificate." />
            <FAQItem q="Is Glacier Aminos pricing competitive?" a="Yes. Glacier Aminos prices competitively across its catalog, and it lists Retatrutide at roughly $62.99 per 10mg vial as of May 2026. Cold-chain shipping is included on orders to help preserve compound integrity in transit." />
          </div>
        </div>

      </div>
    </div>
  );
}
