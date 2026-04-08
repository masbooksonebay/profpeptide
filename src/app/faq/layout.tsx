export const metadata = {
  title: "Peptide FAQ — Common Questions About Research Peptides Answered | Prof. Peptide",
  description:
    "Answers to the most common questions about research peptides — what they are, how they work, storage, reconstitution, sourcing, and safety considerations.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are research peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research peptides are short chains of amino acids synthesized for scientific study. They are sold strictly for laboratory and research use — not for human consumption. Many peptides being researched today are synthetic analogues of peptides naturally produced in the human body, designed to study specific biological pathways including tissue repair, hormone regulation, cognitive function, and metabolic health."
      }
    },
    {
      "@type": "Question",
      "name": "Are research peptides legal in the United States?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The legal status of research peptides in the US is complex and evolving. Peptides sold strictly for laboratory research purposes — labeled \"for research use only, not for human consumption\" — occupy a regulatory gray area. They are not scheduled controlled substances in most cases, but they are also not FDA approved for human use. The FDA has placed a growing number of peptides on its Category 1 and Category 2 bulk drug substance lists, restricting their use in commercial compounding pharmacies. Regulations tightened significantly in 2025, with the FDA issuing a Final Guidance on research-grade compounds that introduced new labeling and institutional verification requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What does \"for research use only\" mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "\"For research use only\" (RUO) is a designation that means a compound has not been evaluated or approved by the FDA for human use. Vendors use this label to sell compounds legally for legitimate laboratory and scientific research purposes. It does not mean a compound is inherently dangerous — it means it has not completed the clinical trial process required for FDA approval."
      }
    },
    {
      "@type": "Question",
      "name": "Are peptides safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safety varies significantly by peptide, source, dose, and individual health status. FDA-approved peptides used under medical supervision have established safety profiles from clinical trials. Research peptides that are not FDA approved have varying amounts of safety data. A key safety concern with research peptides is product quality — studies have found that a significant percentage of peptides sold online contain incorrect doses or undeclared ingredients. Working with vendors who use third-party laboratory testing significantly reduces this risk."
      }
    },
    {
      "@type": "Question",
      "name": "How are peptides different from steroids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptides and steroids are fundamentally different in structure and mechanism. Steroids are fat-soluble molecules derived from cholesterol that enter cells and directly alter gene expression. Peptides are water-soluble chains of amino acids that work by binding to specific surface receptors and triggering targeted signaling cascades. They are generally more targeted, work through the body's natural signaling pathways, and have fewer systemic side effects. Peptides do not suppress the HPTA the way anabolic steroids do."
      }
    },
    {
      "@type": "Question",
      "name": "Which peptides are FDA approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Several peptides have received full FDA approval for specific medical indications. Notable examples include Semaglutide (Ozempic, Wegovy) for type 2 diabetes and weight loss, Tirzepatide (Mounjaro, Zepbound) for type 2 diabetes and obesity, Tesamorelin (Egrifta) for HIV-related lipodystrophy, Bremelanotide (Vyleesi) for hypoactive sexual desire disorder in premenopausal women, and Afamelanotide (Scenesse) for erythropoietic protoporphyria."
      }
    },
    {
      "@type": "Question",
      "name": "Which peptides are banned by WADA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The World Anti-Doping Agency (WADA) prohibits several peptide classes in competitive sports. Growth hormone releasing peptides including Ipamorelin and GHRP-6 are banned. Growth hormone releasing hormone analogues including CJC-1295 and Sermorelin are prohibited. IGF-1 and its analogues including IGF-1 LR3 are banned. Follistatin is prohibited. Thymosin Beta-4 (TB-500) is on the prohibited list. Melanotan II is prohibited. BPC-157 was added to the WADA monitoring program."
      }
    },
    {
      "@type": "Question",
      "name": "Why do most peptides need to be injected — can they be taken orally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most research peptides are administered via subcutaneous injection because they are degraded by digestive enzymes in the stomach and intestines before they can be absorbed intact into the bloodstream. Injection bypasses this degradation. Some peptides have been developed in nasal spray or oral formulations — Semaglutide (Rybelsus) is a notable example of an oral peptide. Intranasal delivery is also used for some smaller peptides like Semax and Selank."
      }
    },
    {
      "@type": "Question",
      "name": "How are supplements different from research peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Supplements and research peptides are governed by entirely different regulatory frameworks. Dietary supplements are regulated under DSHEA — they do not require FDA approval before going to market, but they must be safe and cannot make drug claims. Research peptides are not dietary supplements — they are sold for laboratory research use only. In practical terms, supplements like protein powder, creatine, and magnesium are legal for human consumption, while research peptides exist in a more complex regulatory environment."
      }
    },
    {
      "@type": "Question",
      "name": "Are the supplements on this site FDA approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dietary supplements are not FDA approved in the same way drugs are. The FDA does not evaluate supplements for safety or efficacy before they go to market. Look for products with third-party certifications such as NSF Certified for Sport, Informed Sport, or USP Verified — these indicate independent testing for label accuracy, contaminants, and banned substances."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if a supplement is high quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most reliable indicator of supplement quality is third-party testing and certification. Look for NSF Certified for Sport, Informed Sport, or USP Verified seals. For supplements in the Prof. Peptide library, we note the forms with the best evidence base — for example, creatine monohydrate over proprietary blends, magnesium glycinate over magnesium oxide, and high-bioavailability curcumin formulations over standard turmeric powder."
      }
    },
    {
      "@type": "Question",
      "name": "Can supplements replace research peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — they work through different mechanisms and serve different purposes. Supplements like creatine, magnesium, ashwagandha, and collagen peptides support health through nutritional and botanical mechanisms. Research peptides work through more targeted receptor-based signaling. Some supplements do overlap with peptide functions — for example, L-citrulline supports nitric oxide production similarly to some peptides."
      }
    },
    {
      "@type": "Question",
      "name": "How do I reconstitute a lyophilized peptide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lyophilized (freeze-dried) peptides are reconstituted by adding bacteriostatic water to the vial. The volume of water added determines the final concentration. Use a sterile syringe to inject the water slowly down the side of the vial — do not shake. Swirl gently until fully dissolved. Use aseptic technique throughout. The Prof. Peptide Dosage Calculator can help you calculate the exact volume to add."
      }
    },
    {
      "@type": "Question",
      "name": "What is bacteriostatic water and why is it used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bacteriostatic water is sterile water containing 0.9% benzyl alcohol, which inhibits bacterial growth. It is preferred over plain sterile water for peptide reconstitution because the benzyl alcohol prevents bacterial contamination and extends the usable shelf life of the reconstituted solution — typically 28–30 days when refrigerated."
      }
    },
    {
      "@type": "Question",
      "name": "How should reconstituted peptides be stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reconstituted peptides should be refrigerated at 2–8°C and kept away from light. Most are stable for 4–6 weeks when properly refrigerated in bacteriostatic water. Do not freeze a reconstituted solution. Lyophilized (unreconstituted) peptides should be stored in the freezer at -20°C and are stable for 1–2 years or more when kept dry and frozen."
      }
    },
    {
      "@type": "Question",
      "name": "What can degrade a peptide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptides can be degraded by heat, light (particularly UV), repeated freeze-thaw cycles, oxidation, bacterial contamination, and incorrect pH. Proper storage, aseptic technique, and using high-quality bacteriostatic water are all important for maintaining peptide integrity."
      }
    },
    {
      "@type": "Question",
      "name": "Is the information on this site medical advice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All content on Prof. Peptide is strictly for educational and informational purposes. Nothing here constitutes medical advice, and nothing should be interpreted as a recommendation for human use of any research compound. Always consult a licensed medical professional before making any health or treatment decisions."
      }
    },
    {
      "@type": "Question",
      "name": "Are the discount codes on this site affiliated with Prof. Peptide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Prof. Peptide maintains affiliate relationships with the vendors listed on the Discount Codes page. We earn a commission when purchases are made using our codes at no additional cost to you. All vendors are independently evaluated and we only list suppliers whose products are verified by third-party laboratory testing. Our editorial content and peptide profiles are not influenced by vendor relationships."
      }
    },
    {
      "@type": "Question",
      "name": "How often is the Peptide Library updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We review and update peptide and supplement profiles as significant new research is published, and conduct a full site review monthly. New profiles are added on an ongoing basis."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a Prof. Peptide app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Prof. Peptide iOS app is currently in development. It will include the full peptide and supplement library, dosage calculator, protocol logging, and research notes — all offline-capable. Visit the Get the App page to join the waitlist and be notified at launch."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Dosage Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Dosage Calculator helps you calculate injection volumes based on your peptide concentration and desired dose. Enter the total amount of peptide in your vial (in mg), the volume of bacteriostatic water you added (in mL), and your desired dose (in mcg or mg). The calculator returns the volume to draw in mL and the equivalent in insulin syringe units. It is a research tool only — it does not constitute dosing advice."
      }
    }
  ]
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
