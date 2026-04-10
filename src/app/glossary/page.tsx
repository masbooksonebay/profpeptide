import Link from "next/link";

export const metadata = {
  title: "Peptide & Supplement Research Glossary | Prof. Peptide",
  description:
    "Key terms and definitions for researchers exploring peptides and natural supplements. Alphabetical glossary covering reconstitution, dosing, peptide science, and more.",
};

const sections: { letter: string; terms: [string, string][] }[] = [
  {
    letter: "A",
    terms: [
      ["Amino Acid", "The basic building blocks of peptides and proteins. Peptides are short chains of amino acids linked together by peptide bonds."],
      ["Anabolic", "Relating to the process of building complex molecules in the body, such as muscle tissue. Opposite of catabolic."],
      ["Angiogenesis", "The formation of new blood vessels. Several peptides like BPC-157 are studied for their ability to promote angiogenesis to support tissue repair."],
      ["Autophagy", "A cellular recycling process where damaged components are broken down and reused. Some compounds are studied for their ability to upregulate autophagy."],
    ],
  },
  {
    letter: "B",
    terms: [
      ["BAC Water (Bacteriostatic Water)", "Sterile water containing 0.9% benzyl alcohol. The standard solvent used to reconstitute lyophilized peptides. Allows multi-use over approximately 28 days when refrigerated."],
      ["Bioavailability", "The proportion of a compound that enters systemic circulation. Varies by administration route."],
      ["BID", "Twice daily. A dosing frequency term used in research protocols."],
    ],
  },
  {
    letter: "C",
    terms: [
      ["Catabolic", "Relating to the breakdown of complex molecules in the body. Opposite of anabolic."],
      ["Certificate of Analysis (COA)", "A document from a third-party laboratory verifying the purity, concentration, and identity of a peptide batch."],
      ["CNS (Central Nervous System)", "The brain and spinal cord. Some peptides such as Semax and Selank are studied for their effects on CNS function."],
      ["Collagen", "The most abundant structural protein in the body. Many peptides and supplements are studied for their ability to stimulate collagen synthesis."],
    ],
  },
  {
    letter: "D",
    terms: [
      ["DAC (Drug Affinity Complex)", "A modification that extends a peptide\u2019s half-life by enabling albumin binding. CJC-1295 with DAC is a common example."],
      ["DPP-4", "An enzyme that breaks down GLP-1 and other peptides. GLP-1 receptor agonists like Semaglutide are designed to resist DPP-4 degradation."],
    ],
  },
  {
    letter: "F",
    terms: [
      ["Fibroblast", "A cell that produces collagen and structural proteins. GHK-Cu and other peptides are studied for their ability to stimulate fibroblast activity."],
    ],
  },
  {
    letter: "G",
    terms: [
      ["GH (Growth Hormone)", "A hormone produced by the pituitary gland that stimulates growth and regeneration."],
      ["GHRH (Growth Hormone-Releasing Hormone)", "A hormone that stimulates GH release. CJC-1295 and Sermorelin are synthetic GHRH analogues."],
      ["GHRP (Growth Hormone-Releasing Peptide)", "A class of peptides that stimulate GH release. Ipamorelin is a commonly researched GHRP."],
      ["GIP (Glucose-Dependent Insulinotropic Polypeptide)", "A gut hormone involved in insulin release. Tirzepatide and Retatrutide target GIP receptors alongside GLP-1."],
      ["GLP-1 (Glucagon-Like Peptide-1)", "A naturally occurring gut hormone that stimulates insulin secretion and suppresses appetite. Semaglutide and Tirzepatide are GLP-1 receptor agonists."],
    ],
  },
  {
    letter: "H",
    terms: [
      ["Half-Life", "The time for a compound\u2019s concentration to decrease by half. A key factor in dosing frequency."],
      ["HPLC (High-Performance Liquid Chromatography)", "A lab technique used to measure peptide purity. HPLC/MS is the gold standard for verifying research peptide quality."],
    ],
  },
  {
    letter: "I",
    terms: [
      ["IGF-1 (Insulin-Like Growth Factor 1)", "A hormone produced in response to growth hormone. IGF-1 LR3 is a long-acting synthetic analogue studied for anabolic and tissue repair properties."],
      ["IM (Intramuscular)", "An injection delivered directly into muscle tissue."],
      ["Insulin Syringe", "A syringe calibrated in units (100 units = 1 mL) for precise small-volume injections."],
    ],
  },
  {
    letter: "L",
    terms: [
      ["Lyophilized", "Freeze-dried. Most research peptides are sold lyophilized for stability. Stable for 2\u20135 years at -20\u00B0C. Must be reconstituted with BAC water before use."],
    ],
  },
  {
    letter: "M",
    terms: [
      ["mcg (Microgram)", "One thousandth of a milligram (1 mg = 1,000 mcg). Peptide doses are often measured in mcg."],
      ["mg (Milligram)", "A unit of mass. Peptide vials are typically sold by mg. The mg amount does not change when reconstituted."],
      ["mL (Milliliter)", "A unit of liquid volume used when measuring reconstituted peptide solutions. 1 mL = 1 cc."],
    ],
  },
  {
    letter: "N",
    terms: [
      ["Neuroprotection", "The preservation of neuronal structure and function. Semax and Selank are studied for neuroprotective effects."],
      ["Nootropic", "A compound studied for potential cognitive enhancement, memory, or focus benefits."],
    ],
  },
  {
    letter: "P",
    terms: [
      ["Peptide", "A short chain of amino acids (typically 2\u201350) linked by peptide bonds. Smaller than proteins, peptides act as signaling molecules."],
      ["Purity", "The percentage of the desired compound in a peptide preparation. Research-grade peptides typically have purity of 98%+, verified by HPLC/MS."],
    ],
  },
  {
    letter: "Q",
    terms: [
      ["QD", "Once daily. A dosing frequency term."],
      ["QOD", "Every other day. Used in alternate-day dosing protocols."],
    ],
  },
  {
    letter: "R",
    terms: [
      ["Receptor", "A protein on or in a cell that binds to a specific compound and triggers a biological response."],
      ["Reconstitution", "The process of dissolving a lyophilized peptide in a solvent (typically BAC water) to create a solution ready for research use."],
    ],
  },
  {
    letter: "S",
    terms: [
      ["Secretagogue", "A substance that stimulates secretion of another compound. Growth hormone secretagogues like Ipamorelin stimulate GH release."],
      ["SQ / Subcutaneous", "An injection into the fatty tissue beneath the skin. The most common administration route for research peptides."],
      ["Stacking", "Using two or more compounds simultaneously in a research protocol for complementary or synergistic effects."],
    ],
  },
  {
    letter: "T",
    terms: [
      ["Telomere", "The protective cap at the end of chromosomes that shortens with age. Epitalon is studied for potential telomerase activation effects."],
      ["Thymosin", "A family of peptides produced by the thymus involved in immune regulation and tissue repair. Thymosin Alpha-1 and TB-500 are commonly researched examples."],
    ],
  },
  {
    letter: "U",
    terms: [
      ["Units", "In the context of insulin syringes, 100 units = 1 mL."],
    ],
  },
  {
    letter: "V",
    terms: [
      ["Vial", "A small glass or plastic container holding lyophilized peptide powder. Research peptides are typically sold in sealed vials of 2\u201310 mg."],
    ],
  },
];

export default function GlossaryPage() {
  return (
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Reference</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">
        Peptide &amp; Supplement Research Glossary
      </h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
        Key terms and definitions for researchers exploring peptides and natural supplements.
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.letter}>
            <h2 className="text-lg font-bold text-[#0891b2] mb-3 pb-2 border-b border-gray-100 dark:border-slate-800">
              {s.letter}
            </h2>
            <dl className="space-y-3">
              {s.terms.map(([term, def]) => (
                <div key={term}>
                  <dt className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100">
                    {term}
                  </dt>
                  <dd className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mt-0.5">
                    {def}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">See Also</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/peptides" className="text-sm text-[#0891b2] hover:underline">Peptide Library</Link>
          <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline">Supplement Library</Link>
          <Link href="/calculator" className="text-sm text-[#0891b2] hover:underline">Dosage Calculator</Link>
          <Link href="/faq" className="text-sm text-[#0891b2] hover:underline">FAQ</Link>
          <Link href="/compare" className="text-sm text-[#0891b2] hover:underline">Comparisons</Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 mt-8">
        This glossary is for educational and research purposes only. Nothing on this page constitutes medical advice. Not for human use.
      </p>
    </div>
  );
}
