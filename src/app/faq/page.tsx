"use client";
import { useState } from "react";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are research peptides?",
      a: "Research peptides are short chains of amino acids synthesized for scientific study. They are sold for laboratory and research use only — not for human consumption. Many peptides being researched today are synthetic analogues of peptides naturally produced in the human body.",
    },
    {
      q: "Is the information on this site medical advice?",
      a: "No. All content on Prof. Peptide is strictly for educational and informational purposes. Nothing here constitutes medical advice, and nothing should be interpreted as a recommendation for human use. Always consult a licensed medical professional.",
    },
    {
      q: "How do I reconstitute a lyophilized peptide?",
      a: "Lyophilized (freeze-dried) peptides are reconstituted by adding bacteriostatic water to the vial. The volume added determines the concentration. Our Dosage Calculator can help you work out the exact math. Use aseptic technique throughout.",
    },
    {
      q: "What is bacteriostatic water and why is it used?",
      a: "Bacteriostatic water is sterile water containing 0.9% benzyl alcohol, which inhibits bacterial growth. It is preferred over plain sterile water for peptide reconstitution because it extends the usable shelf life of the reconstituted solution (typically 28-30 days when refrigerated).",
    },
    {
      q: "How should reconstituted peptides be stored?",
      a: "Reconstituted peptides should generally be refrigerated at 2–8°C and kept away from light. Most are stable for 4–6 weeks when refrigerated. Lyophilized (unreconstituted) peptides should be stored in the freezer and are stable for much longer periods.",
    },
    {
      q: "What is the difference between a GHRP and a GHRH analogue?",
      a: "GHRH analogues (like CJC-1295) mimic growth hormone releasing hormone and act directly on pituitary receptors to stimulate GH release. GHRPs (like Ipamorelin) are ghrelin receptor agonists that stimulate GH through a separate pathway. They work synergistically when combined.",
    },
    {
      q: "Are the coupon codes affiliated with Prof. Peptide?",
      a: "Prof. Peptide is an independent education platform. Coupon codes listed are sourced and verified independently. We are not affiliates or partners of the vendors listed, and we don't earn commissions from code use.",
    },
    {
      q: "When will the iPhone app be available?",
      a: "The Prof. Peptide iOS app is currently in development. It will include the full peptide library, dosage calculator, protocol logging, and research notes — all offline-capable. Join the waitlist on the Get the App page to be notified at launch.",
    },
    {
      q: "How often is the Peptide Library updated?",
      a: "We aim to review and update peptide profiles as significant new research is published. New profiles are added regularly. The date of last review is noted on each peptide profile page.",
    },
  ];

  return (
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Common Questions</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Frequently Asked Questions</h1>
      <p className="text-sm text-gray-500 mb-10 leading-relaxed max-w-lg">
        Answers to the most common questions about peptide research, this platform, and our tools.
      </p>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-[#1e2d3d] pr-4">{faq.q}</span>
              <span className="text-[#0D7377] flex-shrink-0 text-lg">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">Still have questions?</p>
        <p className="text-xs text-gray-500">Browse the Peptide Library for detailed compound-specific information, or check the Research Hub for in-depth guides.</p>
      </div>
    </div>
  );
}