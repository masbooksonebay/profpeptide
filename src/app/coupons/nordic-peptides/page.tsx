"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function NordicPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Nordic Peptides Discount Code &mdash; Save with PROFPEPTIDE</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-medium">&ge;98% Purity</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{"\uD83C\uDDEE\uD83C\uDDF8"} Iceland</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Nordic Peptides was founded by three biochemists &mdash; Lars, Thomas, and Anna &mdash; in Norway and Iceland with a focus on purity, quality, and Nordic craftsmanship. They are notable for being the first brand to offer pre-mixed, stabilized peptide pens, a unique delivery format that sets them apart from most US vendors. Products are lab-tested to &ge;98% purity. They offer secure and discreet worldwide delivery with customer loyalty rewards for returning customers.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Their catalog spans Weight Loss, Bodybuilding, Muscle Mass, Athletes, Injuries, Joints, Libido, Anti-Aging, Sleep, Mood, Peptide Blends, Bioregulators, and Immune Boosters. The pre-mixed pen format eliminates the need for reconstitution &mdash; a significant convenience advantage for researchers accustomed to handling lyophilized powders and bacteriostatic water.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Discount Code</p>
          <div className="block w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-400 italic text-center">
            Code coming soon
          </div>
          <p className="text-center text-xs text-gray-400 mt-2 mb-4">Prof. Peptide is working on securing an exclusive code. Check back soon.</p>
          <a
            href="https://nordicpeptides.is?tracking=YPIYKOnVzjUxFUBzUjMguT01DrDOfTcsJhXEfi15i6MMovBJRFEwZguHeWt7mRkR"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Nordic Peptides &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Nordic Peptides have a discount code?"
              a="Not yet, but Prof. Peptide is working on securing an exclusive code. Check back soon."
            />
            <FAQItem
              q="Where is Nordic Peptides based?"
              a="Founded in Norway and Iceland by three biochemists dedicated to purity and quality."
            />
            <FAQItem
              q="Does Nordic Peptides ship worldwide?"
              a="Yes, they offer secure and discreet worldwide delivery."
            />
            <FAQItem
              q="What makes Nordic Peptides unique?"
              a="They were the first brand to offer pre-mixed, stabilized peptide pens — no reconstitution needed. This eliminates the need for bacteriostatic water, syringes, and the reconstitution process entirely."
            />
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-3">
            Can&apos;t find what you need? Search for related supplements on Amazon.
          </p>
          <a
            href="https://www.amazon.com/s?k=research+peptide+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#0D7377] hover:underline"
          >
            Search on Amazon &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
