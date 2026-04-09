"use client";
import { useState } from "react";
import { Icon } from "@/components/CategoryIcon";

interface FAQ {
  q: string;
  a: string;
}

interface Section {
  title: string;
  icon: string;
  faqs: FAQ[];
}

const sections: Section[] = [
  {
    title: "About Peptides",
    icon: "dna",
    faqs: [
      {
        q: "What are research peptides?",
        a: "Research peptides are short chains of amino acids synthesized for scientific study. They are sold strictly for laboratory and research use — not for human consumption. Many peptides being researched today are synthetic analogues of peptides naturally produced in the human body, designed to study specific biological pathways including tissue repair, hormone regulation, cognitive function, and metabolic health.",
      },
      {
        q: "Are research peptides legal in the United States?",
        a: "The legal status of research peptides in the US is complex and evolving. Peptides sold strictly for laboratory research purposes — labeled \"for research use only, not for human consumption\" — occupy a regulatory gray area. They are not scheduled controlled substances in most cases, but they are also not FDA approved for human use. The FDA has placed a growing number of peptides on its Category 1 and Category 2 bulk drug substance lists, restricting their use in commercial compounding pharmacies. Regulations tightened significantly in 2025, with the FDA issuing a Final Guidance on research-grade compounds that introduced new labeling and institutional verification requirements. The regulatory landscape continues to evolve — always verify current status before sourcing any peptide.",
      },
      {
        q: "What does \"for research use only\" mean?",
        a: "\"For research use only\" (RUO) is a designation that means a compound has not been evaluated or approved by the FDA for human use. Vendors use this label to sell compounds legally for legitimate laboratory and scientific research purposes. It does not mean a compound is inherently dangerous — it means it has not completed the clinical trial process required for FDA approval. Many research peptides have extensive preclinical and some clinical data, while others have very limited human research.",
      },
      {
        q: "Are peptides safe?",
        a: "Safety varies significantly by peptide, source, dose, and individual health status. FDA-approved peptides used under medical supervision have established safety profiles from clinical trials. Research peptides that are not FDA approved have varying amounts of safety data — some have decades of clinical use in other countries, while others have limited human data. A key safety concern with research peptides is product quality — studies have found that a significant percentage of peptides sold online contain incorrect doses or undeclared ingredients. Working with vendors who use third-party laboratory testing significantly reduces this risk. Anyone considering peptide use should consult a qualified healthcare provider.",
      },
      {
        q: "How are peptides different from steroids?",
        a: "Peptides and steroids are fundamentally different in structure and mechanism. Steroids are fat-soluble molecules derived from cholesterol that enter cells and directly alter gene expression — often producing dramatic hormonal changes with significant side effects including suppression of natural hormone production. Peptides are water-soluble chains of amino acids that work by binding to specific surface receptors and triggering targeted signaling cascades. They are generally more targeted, work through the body's natural signaling pathways, and have fewer systemic side effects — though they are not without risks. Peptides do not suppress the HPTA (hypothalamic-pituitary-testicular axis) the way anabolic steroids do.",
      },
      {
        q: "Which peptides are FDA approved?",
        a: "Several peptides have received full FDA approval for specific medical indications. Notable examples include Semaglutide (Ozempic, Wegovy) for type 2 diabetes and weight loss, Tirzepatide (Mounjaro, Zepbound) for type 2 diabetes and obesity, Tesamorelin (Egrifta) for HIV-related lipodystrophy, Bremelanotide (Vyleesi) for hypoactive sexual desire disorder in premenopausal women, and Afamelanotide (Scenesse) for erythropoietic protoporphyria. Many other peptides are used in clinical settings under compounding pharmacy regulations or remain in research stages without FDA approval.",
      },
      {
        q: "Which peptides are banned by WADA?",
        a: "The World Anti-Doping Agency (WADA) prohibits several peptide classes in competitive sports. Growth hormone releasing peptides (GHRPs) including Ipamorelin and GHRP-6 are banned. Growth hormone releasing hormone analogues including CJC-1295 and Sermorelin are prohibited. IGF-1 and its analogues including IGF-1 LR3 are banned. Follistatin is prohibited. Thymosin Beta-4 (TB-500) is on the prohibited list. Melanotan II is prohibited. BPC-157 was added to the WADA monitoring program. Athletes competing in WADA-governed sports should review the current prohibited list before using any peptide or peptide-adjacent compound, as the list is updated annually.",
      },
      {
        q: "Why do most peptides need to be injected — can they be taken orally?",
        a: "Most research peptides are administered via subcutaneous injection because they are degraded by digestive enzymes in the stomach and intestines before they can be absorbed intact into the bloodstream. Peptide bonds are broken down by proteases during digestion — the same process that digests food proteins. Injection bypasses this degradation and delivers the peptide directly into systemic circulation. Some peptides have been developed in nasal spray or oral formulations — Semaglutide (Rybelsus) is a notable example of an oral peptide that uses special absorption enhancers to survive digestion. Intranasal delivery is also used for some smaller peptides like Semax and Selank. Research into oral peptide delivery is an active area of pharmaceutical development.",
      },
    ],
  },
  {
    title: "About Supplements",
    icon: "pill",
    faqs: [
      {
        q: "How are supplements different from research peptides?",
        a: "Supplements and research peptides are governed by entirely different regulatory frameworks. Dietary supplements are regulated under DSHEA (Dietary Supplement Health and Education Act of 1994) — they do not require FDA approval before going to market, but they must be safe and cannot make drug claims. Research peptides are not dietary supplements — they are sold for laboratory research use only and are not intended for human consumption under their current regulatory classification. In practical terms, supplements like protein powder, creatine, and magnesium are legal for human consumption and widely available, while research peptides exist in a more complex regulatory environment.",
      },
      {
        q: "Are the supplements on this site FDA approved?",
        a: "Dietary supplements are not FDA approved in the same way drugs are. The FDA does not evaluate supplements for safety or efficacy before they go to market — it can take action after the fact if a product is found to be unsafe or makes illegal drug claims. This means supplement quality varies significantly between manufacturers. Look for products with third-party certifications such as NSF Certified for Sport, Informed Sport, or USP Verified — these indicate independent testing for label accuracy, contaminants, and banned substances.",
      },
      {
        q: "How do I know if a supplement is high quality?",
        a: "The most reliable indicator of supplement quality is third-party testing and certification. Look for NSF Certified for Sport, Informed Sport, or USP Verified seals — these programs independently test products for label accuracy, heavy metals, and banned substances. For supplements in the Prof. Peptide library, we note the forms with the best evidence base — for example, creatine monohydrate over proprietary blends, magnesium glycinate over magnesium oxide, and high-bioavailability curcumin formulations over standard turmeric powder.",
      },
      {
        q: "Can supplements replace research peptides?",
        a: "No — they work through different mechanisms and serve different purposes. Supplements like creatine, magnesium, ashwagandha, and collagen peptides are well-established, legal, and widely available. They support health through nutritional and botanical mechanisms. Research peptides work through more targeted receptor-based signaling and tend to produce more specific physiological effects. Some supplements do overlap with peptide functions — for example, L-citrulline supports nitric oxide production similarly to some peptides, and collagen peptides support tissue repair. In many cases the best approach combines foundational supplement support with targeted research where appropriate.",
      },
    ],
  },
  {
    title: "Reconstitution & Storage",
    icon: "flask",
    faqs: [
      {
        q: "How do I reconstitute a lyophilized peptide?",
        a: "Lyophilized (freeze-dried) peptides are reconstituted by adding bacteriostatic water to the vial. The volume of water added determines the final concentration of the solution. Use a sterile syringe to inject the water slowly down the side of the vial — do not shake, as this can degrade the peptide. Swirl gently until fully dissolved. Use aseptic technique throughout. The Prof. Peptide Dosage Calculator can help you calculate the exact volume to add based on your desired concentration and dose.",
      },
      {
        q: "What is bacteriostatic water and why is it used?",
        a: "Bacteriostatic water is sterile water containing 0.9% benzyl alcohol, which inhibits bacterial growth in the solution. It is preferred over plain sterile water for peptide reconstitution because the benzyl alcohol prevents bacterial contamination and extends the usable shelf life of the reconstituted solution — typically 28\u201330 days when refrigerated. Plain sterile water can be used but the reconstituted solution should be used within a few days as it has no preservative protection against bacterial growth.",
      },
      {
        q: "How should reconstituted peptides be stored?",
        a: "Reconstituted peptides should be refrigerated at 2\u20138\u00B0C and kept away from light. Most reconstituted peptides are stable for 4\u20136 weeks when properly refrigerated in bacteriostatic water. Do not freeze a reconstituted solution — freezing and thawing can degrade the peptide. Lyophilized (unreconstituted) peptides should be stored in the freezer at -20\u00B0C and are stable for significantly longer periods — often 1\u20132 years or more when kept dry and frozen. Always minimize exposure to heat, light, and repeated temperature changes.",
      },
      {
        q: "What can degrade a peptide?",
        a: "Peptides are sensitive compounds that can be degraded by several factors. Heat accelerates breakdown — avoid leaving peptides at room temperature for extended periods. Light — particularly UV light — can damage peptide bonds. Repeated freeze-thaw cycles degrade reconstituted solutions. Oxidation can alter amino acid residues — some peptides are particularly sensitive to oxidative conditions. Contamination with bacteria or foreign substances will degrade the solution. Incorrect pH can destabilize some peptides. For this reason, proper storage, aseptic technique, and using high-quality bacteriostatic water are all important for maintaining peptide integrity.",
      },
    ],
  },
  {
    title: "About This Site",
    icon: "microscope",
    faqs: [
      {
        q: "Is the information on this site medical advice?",
        a: "No. All content on Prof. Peptide is strictly for educational and informational purposes. Nothing here constitutes medical advice, and nothing should be interpreted as a recommendation for human use of any research compound. Always consult a licensed medical professional before making any health or treatment decisions.",
      },
      {
        q: "Are the discount codes on this site affiliated with Prof. Peptide?",
        a: "Yes — Prof. Peptide maintains affiliate relationships with the vendors listed on the Discount Codes page. We earn a commission when purchases are made using our codes at no additional cost to you. All vendors are independently evaluated and we only list suppliers whose products are verified by third-party laboratory testing. Our editorial content and peptide profiles are not influenced by vendor relationships.",
      },
      {
        q: "How often is the Peptide Library updated?",
        a: "We review and update peptide and supplement profiles as significant new research is published, and conduct a full site review monthly. New profiles are added on an ongoing basis. If you notice outdated information or have a suggestion for a new profile, use the contact form to let us know.",
      },
      {
        q: "Is there a Prof. Peptide app?",
        a: "The Prof. Peptide iOS app is currently in development. It will include the full peptide and supplement library, dosage calculator, protocol logging, and research notes — all offline-capable. Visit the Get the App page to join the waitlist and be notified at launch.",
      },
      {
        q: "How do I use the Dosage Calculator?",
        a: "The Dosage Calculator helps you calculate injection volumes based on your peptide concentration and desired dose. Enter the total amount of peptide in your vial (in mg), the volume of bacteriostatic water you added (in mL), and your desired dose (in mcg or mg). The calculator returns the volume to draw in mL and the equivalent in insulin syringe units. It is a research tool only — it does not constitute dosing advice.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Common Questions</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Frequently Asked Questions</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
        Answers to the most common questions about peptide research, supplements, reconstitution, and this platform.
      </p>

      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-bold text-[#1e2d3d] dark:text-slate-100 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
              <span className="text-[#0891b2]"><Icon name={section.icon} /></span>
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.faqs.map((faq) => {
                const key = `${section.title}-${faq.q}`;
                return (
                  <div key={key} className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpen(open === key ? null : key)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <span className="text-sm font-medium text-[#1e2d3d] dark:text-slate-200 pr-4">{faq.q}</span>
                      <span className="text-[#0891b2] flex-shrink-0 text-lg">{open === key ? "\u2212" : "+"}</span>
                    </button>
                    {open === key && (
                      <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-700 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Still have questions?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400">Browse the Peptide Library for detailed compound-specific information, check the Supplement Library for evidence-based supplement profiles, or explore the Research Hub for in-depth guides.</p>
      </div>
    </div>
  );
}
