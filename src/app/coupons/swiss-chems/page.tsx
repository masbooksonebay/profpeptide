"use client";

import { useState } from "react";
import Link from "next/link";
import { RegionPill } from "@/components/RegionPill";

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
      className="block w-full bg-gray-50 dark:bg-[#1e293b] border border-[#D9DEE4] dark:border-slate-600 px-4 py-3 rounded-lg text-lg font-mono font-bold text-[#16181B] dark:text-slate-100 tracking-widest text-center cursor-pointer hover:bg-gray-100 dark:bg-slate-700 transition-colors"
    >
      {copied ? (
        <span className="text-[#3A759F] font-sans font-medium tracking-normal">Copied!</span>
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

export default function SwissChemsCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Swiss Chems Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <RegionPill slug="swiss-chems" />
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Swiss Chems is a U.S.-based research supplier with a peptide-forward catalog &mdash; a notably deep growth-hormone and peptide bench alongside recovery, longevity, cognitive, and reproductive-health compounds. What sets it apart on transparency is a public Independent Test Results page paired with a per-product verification system: rather than citing a bare purity number, Swiss Chems publishes full third-party Certificates of Analysis (not summaries) and lets researchers verify a product against its batch record. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/adipotide" className="text-[#3A759F] hover:underline">FTPP (Adipotide)</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link> (with &amp; without DAC), <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>, <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>, <Link href="/peptides/hexarelin" className="text-[#3A759F] hover:underline">Hexarelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>, <Link href="/peptides/igf-1-des" className="text-[#3A759F] hover:underline">IGF-1 DES</Link>, <Link href="/peptides/mgf" className="text-[#3A759F] hover:underline">MGF</Link>, <Link href="/peptides/mgf" className="text-[#3A759F] hover:underline">PEG-MGF</Link>, <Link href="/peptides/follistatin" className="text-[#3A759F] hover:underline">Follistatin-344</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin, Anti-Aging &amp; Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Recovery</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual &amp; Reproductive Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/oxytocin" className="text-[#3A759F] hover:underline">Oxytocin</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin-10</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Repair &amp; Signaling</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">Cibinetide (ARA-290)</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Swiss Chems states that every product is independently third-party tested at external laboratories by HPLC (to confirm identity and concentration) and mass spectrometry (to confirm molecular structure), against a 99%+ purity standard &mdash; batches that fall short are rejected. The distinguishing feature is verifiability: full batch Certificates of Analysis are published on a public Independent Test Results page and linked from product pages, and a product-verification system lets a researcher confirm the specific item they received.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Because the analysis is performed by outside laboratories and the COAs are published in full rather than summarized, researchers can check identity and purity at the batch level before use. One transparency caveat worth noting: Swiss Chems does not always name the specific testing laboratories, so the published COAs &mdash; rather than a named lab accreditation &mdash; are the primary verification artifact.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROF10" />
          <p className="text-center text-sm text-[#3A759F] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://swisschems.is/?ref=PROF10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Swiss Chems &rarr;
          </a>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Swiss Chems carry?"
              a="Swiss Chems is peptide-forward, with a particularly deep growth-hormone bench (CJC-1295 with and without DAC, Ipamorelin, Sermorelin, Tesamorelin, GHRP-2/6, Hexarelin, IGF-1 LR3 and DES, MGF/PEG-MGF, Follistatin-344). It also carries recovery compounds (BPC-157, TB-500), metabolic peptides (MOTS-C, 5-Amino-1MQ, FTPP), longevity and skin compounds (GHK-Cu, Epitalon, Glutathione), cognitive peptides (Semax, Selank), DSIP for sleep, and reproductive-health compounds (PT-141, Melanotan II, Oxytocin, Kisspeptin-10, and more)."
            />
            <FAQItem
              q="Does Swiss Chems have a discount code?"
              a="Yes. Use code PROF10 at checkout to save 10% on your Swiss Chems order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Swiss Chems discount code?"
              a="Add your items to cart at swisschems.is, proceed to checkout, and enter PROF10 in the coupon field. The discount is applied to your order total."
            />
            <FAQItem
              q="Is Swiss Chems third-party tested?"
              a="Yes. Swiss Chems states that products are independently third-party tested at external laboratories by HPLC and mass spectrometry against a 99%+ purity standard, with batches below that standard rejected. Full batch Certificates of Analysis are published on a public Independent Test Results page rather than summarized."
            />
            <FAQItem
              q="How can I verify a Swiss Chems product?"
              a="Swiss Chems publishes full Certificates of Analysis on its public Independent Test Results page and provides a per-product verification system, so researchers can match the specific item they received to its batch documentation before use."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
