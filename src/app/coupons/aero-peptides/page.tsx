"use client";

import { useState } from "react";
import Link from "next/link";
import { vendors } from "@/data/vendors";

const v = vendors["aero-peptides"];

function CodeBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="block w-full bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-slate-600 px-4 py-3 rounded-lg text-lg font-mono font-bold text-[#1e2d3d] dark:text-slate-100 tracking-widest text-center cursor-pointer hover:bg-gray-100 dark:bg-slate-700 transition-colors"
    >
      {copied ? (
        <span className="text-[#0891b2] font-sans font-medium tracking-normal">Copied!</span>
      ) : (
        code
      )}
    </button>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:bg-[#1e293b] transition-colors"
      >
        <span className="text-sm font-medium text-[#1e2d3d] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#0891b2] flex-shrink-0 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function AeroPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Aero Peptides Discount Code &mdash; Save 15%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-medium">&ge;98% Purity Verified</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"🇺🇸"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Aero Peptides is a US-based, domestically sourced research-peptide vendor with a catalog of 25 research compounds spanning cellular health &amp; longevity, growth-hormone support, immune, metabolic, skin, recovery, and multi-peptide blends. All material is research-use-only (not for human consumption). Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cellular Health &amp; Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ss-31" className="text-[#0891b2] hover:underline">SS-31</Link>, <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-C</Link>, <Link href="/peptides/glutathione" className="text-[#0891b2] hover:underline">Glutathione</Link>, <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone Support</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/igf-1-lr3" className="text-[#0891b2] hover:underline">IGF-1 LR3</Link>, <Link href="/peptides/kisspeptin" className="text-[#0891b2] hover:underline">Kisspeptin-10</Link>, <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin</Link>, <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link> No DAC (10mg), CJC-1295 No DAC + <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Immune &amp; Inflammatory</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                Adamax, <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>, <Link href="/peptides/kpv" className="text-[#0891b2] hover:underline">KPV</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolics &amp; Appetite</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>, <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link> (listed as GLP3 – Reta), <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link> (listed as GLP1 – Tirz), <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link> (listed as GLP1 – Semaglutide)
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin, Hair &amp; Cosmetic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/melanotan-i" className="text-[#0891b2] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#0891b2] hover:underline">Melanotan II</Link>, <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Repair &amp; Recovery</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link> (5–10mg), <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Blend</Link> (BPC-157 5mg + TB-500 5mg)
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Multi-Peptide Blends</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link> (BPC-157 + GHK-Cu + TB-500 + KPV), <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">GLOW</Link> (BPC-157 + GHK-Cu + TB-500)
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Reconstitution</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                Bacteriostatic Water
              </dd>
            </div>
          </dl>
          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-4 bg-gray-50 dark:bg-[#1e293b] mb-4">
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Finding the GLP compounds on Aero&apos;s site:</span> Aero lists its metabolic/GLP peptides under code names. Retatrutide is listed as GLP3 – Reta, Tirzepatide as GLP1 – Tirz, and Semaglutide as GLP1 – Semaglutide &mdash; search those codes in the Aero catalog to reach the corresponding product page.
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Aero Peptides tests through a third-party, ISO-accredited external lab (not owned by Aero). Each batch is verified by HPLC-MS for identity (within 1 mass unit), reverse-phase HPLC for purity (≥98%, area-percent), an LAL assay for endotoxin (&lt;0.1 EU/mg), and GC for residual solvents (&lt;0.5%); the Certificate of Analysis carries the external lab&apos;s stamp and signatory, with raw HPLC traces and mass-spec spectra available on request. Every order ships with an independent COA, and Aero states a searchable public COA library is in preparation &mdash; until it goes live, a COA for any specific compound or lot is available on request (emailed as a PDF).
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code={v.code} />
          <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-1">15% off your entire order</p>
          <p className="text-center text-xs text-gray-500 dark:text-slate-400 mb-4">Free domestic shipping over $150 &middot; 15-day cookie</p>
          <a
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Aero Peptides &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Aero Peptides carry?"
              a="Aero carries 25 research compounds across cellular health & longevity, growth-hormone support, immune, metabolic, skin, recovery, and multi-peptide blends. Its GLP/metabolic line is sold under code names: Retatrutide (listed as GLP3 – Reta), Tirzepatide (listed as GLP1 – Tirz), and Semaglutide (listed as GLP1 – Semaglutide), alongside SS-31, MOTS-C, NAD+, BPC-157, TB-500, GHK-Cu, CJC-1295, Tesamorelin, and the KLOW and GLOW blends."
            />
            <FAQItem
              q="Does Aero Peptides have a discount code?"
              a="Yes. Use code PROFPEPTIDE15 at checkout to save 15% on any Aero Peptides order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Aero Peptides discount code?"
              a="Add your items to cart at aeropeptides.com, proceed to checkout, and enter PROFPEPTIDE15 in the discount code field. The discount will be applied to your order total. Domestic shipping is free over $150."
            />
            <FAQItem
              q="Where do I find Semaglutide (GLP1 – Semaglutide), Tirzepatide (GLP1 – Tirz), and Retatrutide (GLP3 – Reta) on Aero's site?"
              a="Aero lists its GLP/metabolic peptides under code names. Semaglutide is listed as GLP1 – Semaglutide, Tirzepatide as GLP1 – Tirz, and Retatrutide as GLP3 – Reta. Search those codes in the Aero catalog to reach the matching product page."
            />
            <FAQItem
              q="What testing does Aero Peptides do?"
              a="Aero tests through a third-party, ISO-accredited external lab: HPLC-MS identity verification (within 1 mass unit), reverse-phase HPLC purity (≥98%, area-percent), endotoxin below 0.1 EU/mg (LAL assay), and residual solvents below 0.5% (GC). The COA carries the external lab's stamp and signatory, and raw HPLC/mass-spec data is available on request."
            />
            <FAQItem
              q="Does Aero Peptides provide Certificates of Analysis?"
              a="Yes — every order ships with an independent, third-party COA, and a COA for any specific compound or lot is available on request (Aero emails the PDF). A searchable public COA library is in preparation but is not yet live, so per-product COAs are provided on request rather than published on the site at this time."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
