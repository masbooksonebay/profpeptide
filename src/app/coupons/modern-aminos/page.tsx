"use client";

import { useState } from "react";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { vendors } from "@/data/vendors";
import { CODES_VERIFIED_DATE } from "@/data/codes-verified";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";

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

export default function ModernAminosCouponPage() {
  // woo vendor (login-gated pull) with path-form vendorSlug; makeShopUrlFor composes the
  // deep link via the universal composer. ref-only affiliate URL → code entered at checkout.
  const v = vendors["modern-aminos"];
  const rows = vendorProductRows("modern-aminos");
  const discountPct = vendorDiscountPct("modern-aminos");
  const autoApply = codeAutoApplies("modern-aminos");
  const shopUrl = makeShopUrlFor("modern-aminos");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="modern-aminos" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Modern Aminos Discount Code &mdash; Save 10%</h1>
      </div>
      <CouponFacts slug="modern-aminos" />
      <CouponCodeCard slug="modern-aminos" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Modern Aminos is a US-based research-peptide supplier based in Garden City, Idaho (9169 W State St #1451, Garden City, ID 83714). Its catalog spans GLP-1 and metabolic compounds, growth-hormone secretagogues, recovery and repair peptides, skin, cognitive, longevity, and Khavinson short-peptide bioregulators. The full store sits behind a free research-account login, and orders over $200 ship free within the US. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/cagrisema" className="text-[#3A759F] hover:underline">Cagrisema</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, MA-3RT (<Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>), Mazdutide, Petrelintide (MA-1P), plus coded GLP-1 SKUs MA-2TZ, MA-1S
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#3A759F] hover:underline">Tesamorelin + Ipamorelin</Link>, <Link href="/peptides/hexarelin" className="text-[#3A759F] hover:underline">Hexarelin</Link>, <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>, <Link href="/peptides/mgf" className="text-[#3A759F] hover:underline">MGF</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>, <Link href="/peptides/mgf" className="text-[#3A759F] hover:underline">PEG-MGF</Link>, HGH Fragment 176-191
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>, <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/ll-37" className="text-[#3A759F] hover:underline">LL-37</Link>, <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">ARA-290 (Cibinetide)</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/semax-selank" className="text-[#3A759F] hover:underline">Semax + Selank</Link>, P-21, PE-22-28
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity &amp; Bioregulators</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>, <Link href="/peptides/cardiogen" className="text-[#3A759F] hover:underline">Cardiogen</Link>, <Link href="/peptides/thymogen" className="text-[#3A759F] hover:underline">Thymogen</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Cartalax</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Prostamax</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Testagen</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Livagen</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Vesugen</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Bronchogen</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Vilon</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Ovagen</Link>, <Link href="/bioregulators" className="text-[#3A759F] hover:underline">Chonluten</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Sexual Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>, <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin</Link>, <Link href="/peptides/oxytocin" className="text-[#3A759F] hover:underline">Oxytocin</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            MA-2TZ and MA-1S are Modern Aminos&apos; own coded GLP-1 SKUs; their product pages state no CAS number, formula, molecular weight, or compound name, so they are listed under their codes and not decoded. MA-3RT is decoded as Retatrutide &mdash; the vendor&apos;s own /product/retatrutide/ URL resolves to the MA-3RT page, and the product image reads &ldquo;GLP/GIP/GLUCAGON 10MG,&rdquo; the retatrutide triple-agonist profile. MA-1P is documented on-site as Petrelintide (ZP8396; CAS 2766385-23-1).
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Modern Aminos publishes a public Certificate of Analysis library at modernaminos.com/all-coas/ &mdash; roughly 170 per-batch COAs across six pages, each a downloadable PDF hosted on the company&apos;s own server with the batch code embedded in the filename. Testing is performed by Vanguard Laboratory, and the certificates carry an ISO/IEC 17025:2017 accreditation mark (A2LA certificate #6377.01.01) with a named Lab Director and Operations Manager signature and a test date. The reported panel varies by product &mdash; some certificates include endotoxin or sterility results while others report a single HPLC quantity measurement &mdash; so confirm the fields on the certificate for the specific compound and batch you are evaluating. Note that the library&apos;s search filters by product name, not by batch number.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Beyond testing, the company emphasizes customer service and fast fulfillment, with support and shipping teams positioned as a core part of the experience. The full catalog is viewable after a free account registration on modernaminos.com; this Prof. Peptide code applies to the US store.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Modern Aminos catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Modern Aminos&apos; list price; the bold figure is{" "}
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
            <FAQItem q="What peptides does Modern Aminos carry?" a="Modern Aminos carries research compounds across metabolic (Retatrutide, Cagrilintide, Cagrisema, MOTS-c, 5-Amino-1MQ, AOD-9604, Mazdutide, Petrelintide), growth-hormone (Tesamorelin, Sermorelin, Ipamorelin, CJC-1295, Hexarelin, GHRP-2, MGF, IGF-1 LR3), recovery (BPC-157, TB-500, KPV, LL-37, ARA-290), skin (GHK-Cu, GLOW, KLOW, Melanotan-2), cognitive (Semax, Selank, P-21, PE-22-28), longevity and Khavinson bioregulator (Epitalon, Glutathione, Thymosin Alpha-1, Pinealon, Cardiogen, Thymogen) and sleep/sexual-health (DSIP, PT-141, Kisspeptin, Oxytocin) categories. MA-3RT is decoded as Retatrutide; MA-2TZ and MA-1S remain coded GLP-1 SKUs. SARMs and non-peptide products are excluded from the list above." />
            <FAQItem q="Does Modern Aminos have a discount code?" a={`Yes. Use code PROFPEPTIDE at checkout to save 10% on your entire Modern Aminos order. This code is verified and maintained by Prof. Peptide and valid as of ${CODES_VERIFIED_DATE}.`} />
            <FAQItem q="How do I use the Modern Aminos discount code?" a="Log in to your Modern Aminos account at modernaminos.com, add your items to cart, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total." />
            <FAQItem q="How does Modern Aminos test its peptides?" a="Modern Aminos publishes a public per-batch COA library at modernaminos.com/all-coas/, with certificates from Vanguard Laboratory carrying an ISO/IEC 17025:2017 accreditation mark (A2LA #6377.01.01), signed and dated. The reported panel varies by product — some certificates include endotoxin or sterility results, others report a single HPLC quantity measurement — so check the specific COA for the compound and batch you are evaluating." />
            <FAQItem q="How do I verify a Modern Aminos batch?" a="Use the public COA library at modernaminos.com/all-coas/, where each certificate is a per-batch PDF with the batch code in its filename. The library search filters by product name (not batch number), so locate the certificates for your product and match the batch code on your vial to the corresponding COA." />
            <FAQItem q="Why does Modern Aminos require an account to view products?" a="Modern Aminos gates its full catalog behind a free research-account login as part of a compliance-oriented, research-only purchasing model. Registering an account on modernaminos.com is free and lets you view the current product selection and pricing." />
            <FAQItem q="Is Modern Aminos US-based?" a="Yes. Modern Aminos is based in Garden City, Idaho (9169 W State St #1451, Garden City, ID 83714) and ships within the United States, with free shipping on orders over $200. This Prof. Peptide discount code applies to the US store at modernaminos.com." />
          </div>
        </div>

      </div>
    </div>
  );
}
