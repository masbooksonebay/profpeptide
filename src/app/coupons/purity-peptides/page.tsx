"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function PurityPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Purity Peptides Discount Code &mdash; Save 15%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-medium">&ge;99% Purity Verified</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"🇨🇦"} CA</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Purity Peptides is a Canadian research-peptide vendor &mdash; North American sourced, manufactured, and tested &mdash; with a broad catalog spanning metabolic, recovery, performance, growth-hormone, cognitive, skin, gut-health, sleep, longevity, bioregulator, and sexual-health research. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/5-amino-1mq" className="text-[#0891b2] hover:underline">5-Amino-1MQ</Link>, <Link href="/peptides/aod-9604" className="text-[#0891b2] hover:underline">AOD-9604</Link>, <Link href="/peptides/nad-mots-c-5-amino-1mq" className="text-[#0891b2] hover:underline">Metabolic Blend</Link>, <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>, <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Performance &amp; Energy</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/igf-1-lr3" className="text-[#0891b2] hover:underline">IGF-1 LR3</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>, <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>, <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#0891b2] hover:underline">Tesamorelin + Ipamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>, <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>, <Link href="/peptides/semax-selank" className="text-[#0891b2] hover:underline">Semax + Selank</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>, <Link href="/peptides/melanotan-i" className="text-[#0891b2] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#0891b2] hover:underline">Melanotan II</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/kpv" className="text-[#0891b2] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Recovery</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>, <Link href="/peptides/ss-31" className="text-[#0891b2] hover:underline">SS-31</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Bioregulators</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>, <Link href="/peptides/cortagen" className="text-[#0891b2] hover:underline">Cortagen</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every batch is tested by accredited third-party laboratories in North America. Purity is verified to a 99%+ standard by HPLC and mass spectrometry, with identity confirmation, and Purity Peptides states its raw materials are North American-sourced (not China) and manufactured in GMP-aligned facilities with full chain-of-custody documentation.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Each product links a Certificate of Analysis with traceable lab results, and the company describes itself as a CPRA-certified vendor (Canadian Peptide Research Alliance, an independent certification body for research-grade peptide vendors). That per-product, verifiable documentation &mdash; paired with the 99%+ purity threshold &mdash; gives researchers a traceable quality record for every order.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROF15" />
          <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">15% off your entire order</p>
          <a
            href="https://puritypeptides.is/?sld=PROF15"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Purity Peptides &rarr;
          </a>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Purity Peptides carry?"
              a="Purity Peptides carries research compounds across metabolic, recovery, growth-hormone, cognitive, skin, gut-health, longevity, bioregulator, and sexual-health categories. Flagship compounds include Retatrutide, Tirzepatide, BPC-157, TB-500, GHK-Cu, CJC-1295/Ipamorelin, and NAD+, along with the GLOW and KLOW blends."
            />
            <FAQItem
              q="Does Purity Peptides have a discount code?"
              a="Yes. Use code PROF15 at checkout to save 15% on any Purity Peptides order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Purity Peptides discount code?"
              a="Add your items to cart at puritypeptides.is, proceed to checkout, and enter PROF15 in the discount code field. The 15% discount will be applied to your order total."
            />
            <FAQItem
              q="What testing does Purity Peptides do?"
              a="Every batch is tested by accredited third-party laboratories in North America. Testing covers HPLC purity (99%+) and mass-spectrometry identity confirmation, with a Certificate of Analysis on every product."
            />
            <FAQItem
              q="What is the minimum purity standard at Purity Peptides?"
              a="Purity Peptides verifies a minimum of 99%+ purity, confirmed through HPLC and mass spectrometry analysis by accredited third-party laboratories before a batch is offered for sale."
            />
            <FAQItem
              q="Does Purity Peptides provide Certificates of Analysis?"
              a="Yes. Purity Peptides provides a Certificate of Analysis with traceable lab results on every product, and describes itself as a CPRA-certified vendor (Canadian Peptide Research Alliance)."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
