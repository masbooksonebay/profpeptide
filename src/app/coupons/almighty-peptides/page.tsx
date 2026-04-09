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
      className="block w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-lg font-mono font-bold text-[#1e2d3d] tracking-widest text-center cursor-pointer hover:bg-gray-100 transition-colors"
    >
      {copied ? (
        <span className="text-[#0D7377] font-sans font-medium tracking-normal">Copied!</span>
      ) : (
        code
      )}
    </button>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-[#1e2d3d] pr-4">{q}</span>
        <span className="text-[#0D7377] flex-shrink-0 text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function AlmightyPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Almighty Peptides Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Almighty Peptides is a US-based research compound supplier headquartered in Lantana, Florida. The company&apos;s team brings over a decade of experience in the research supply industry and has been shipping products internationally since the early 2000s &mdash; one of the longest-established operations on our vendor list. Almighty Peptides offers a 100% money-back guarantee and free shipping on orders over $200. A standout feature of their pricing model is the Buy 1 Get 1 Free offer available on the majority of their product catalog, effectively doubling the value of most orders.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            All Almighty Peptides products are independently tested via third-party laboratories using both HPLC (High-Performance Liquid Chromatography) for purity verification and Mass Spectrometry for molecular identity confirmation. This dual-method approach verifies both the purity and the exact identity of each compound. Certificates of Analysis are available for products.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Almighty Peptides distinguishes itself from most research peptide suppliers by offering compounds across three distinct delivery formats: lyophilized injectable peptides, capsules, and research liquids. Their capsule catalog includes BPC-157, GHK-Cu, Methylene Blue, MK-677, LGD-4033, and SLU-PP-332. Their liquids catalog spans SARMs in liquid form, hormone modulators including aromatase inhibitors and SERMs, sexual health compounds, and metabolic research chemicals &mdash; making Almighty Peptides one of the most format-diverse research compound suppliers available.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="profpep" />
          <p className="text-center text-sm text-[#0D7377] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://www.almightypeptides.com/?sld=profpeptide"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Almighty Peptides &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Almighty Peptides have a discount code?"
              a="Yes. Use code profpep at checkout to save 10% on any Almighty Peptides order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Almighty Peptides discount code?"
              a="Add your items to cart at almightypeptides.com, proceed to checkout, and enter profpep in the discount code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="What is the Almighty Peptides Buy 1 Get 1 Free offer?"
              a="Most products in the Almighty Peptides catalog include a Buy 1 Get 1 Free offer, effectively doubling the quantity per order at no additional cost. This applies across their peptide, capsule, and liquid categories and represents one of the strongest value propositions available in the research peptide space."
            />
            <FAQItem
              q="Is Almighty Peptides third-party tested?"
              a="Yes. All Almighty Peptides products are independently tested using both HPLC for purity verification and Mass Spectrometry for molecular identity confirmation. COA reports are available for products."
            />
            <FAQItem
              q="What delivery formats does Almighty Peptides offer?"
              a="Almighty Peptides carries compounds in three formats: lyophilized injectable peptides, capsules (including BPC-157, GHK-Cu, Methylene Blue, MK-677, and others), and research liquids (including SARMs, hormone modulators, and metabolic compounds in liquid form)."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">What Does Almighty Peptides Carry?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Almighty Peptides carries 60+ research compounds across three delivery formats. Their lyophilized peptide catalog includes metabolic compounds such as{" "}
            <Link href="/peptides/semaglutide" className="text-[#0D7377] hover:underline">Semaglutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0D7377] hover:underline">Tirzepatide</Link>, and{" "}
            <Link href="/peptides/retatrutide" className="text-[#0D7377] hover:underline">Retatrutide</Link>, recovery peptides including{" "}
            <Link href="/peptides/bpc-157" className="text-[#0D7377] hover:underline">BPC-157</Link> and{" "}
            <Link href="/peptides/tb-500" className="text-[#0D7377] hover:underline">TB-500</Link>, growth hormone secretagogues including{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0D7377] hover:underline">CJC-1295</Link>,{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0D7377] hover:underline">Ipamorelin</Link>,{" "}
            <Link href="/peptides/sermorelin" className="text-[#0D7377] hover:underline">Sermorelin</Link>, and{" "}
            <Link href="/peptides/tesamorelin" className="text-[#0D7377] hover:underline">Tesamorelin</Link>, longevity compounds including{" "}
            <Link href="/supplements/nad-plus" className="text-[#0D7377] hover:underline">NAD+</Link>,{" "}
            <Link href="/peptides/epitalon" className="text-[#0D7377] hover:underline">Epitalon</Link>, and{" "}
            <Link href="/peptides/mots-c" className="text-[#0D7377] hover:underline">MOTS-c</Link>, skin health compounds including{" "}
            <Link href="/peptides/ghk-cu" className="text-[#0D7377] hover:underline">GHK-Cu</Link>, and sexual health compounds including{" "}
            <Link href="/peptides/pt-141" className="text-[#0D7377] hover:underline">PT-141</Link> and{" "}
            <Link href="/peptides/melanotan-ii" className="text-[#0D7377] hover:underline">Melanotan II</Link>. Their capsule catalog includes BPC-157, GHK-Cu, Methylene Blue, MK-677, LGD-4033, and SLU-PP-332. Their liquids catalog covers SARMs, aromatase inhibitors, and other research chemicals.
          </p>
        </div>
    </div>
  );
}
