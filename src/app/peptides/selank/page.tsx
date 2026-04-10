import Link from "next/link";

export const metadata = {
  title: "Selank — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Selank research profile covering anxiolytic mechanism, GABAergic modulation, benzodiazepine comparison, and cognitive support research.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Selank is a synthetic heptapeptide anxiolytic and nootropic peptide developed at the Institute of Molecular Genetics of the Russian Academy of Sciences \u2014 the same institution that produced Semax. It is a synthetic analog of tuftsin, a naturally occurring tetrapeptide (Thr-Lys-Pro-Arg) that is part of the IgG immunoglobulin molecule and plays a role in immune regulation. Selank was extended with the addition of the sequence Pro-Gly-Pro to the C-terminus of tuftsin, dramatically increasing its stability and duration of action compared to native tuftsin. Unlike Semax, which is primarily classified as a nootropic and cognitive enhancer, Selank's primary classification is as an anxiolytic \u2014 it reduces anxiety and stress without the sedation, cognitive impairment, tolerance, or withdrawal risk associated with benzodiazepines. It has been approved as a prescription drug in Russia since the 1990s for the treatment of anxiety disorders and neurasthenia. Outside Russia, Selank is unregulated as a research compound. Notably, Selank was removed from the FDA's Category 2 list in September 2024 when nominators withdrew the substance, and it is now scheduled for review \u2014 suggesting a more favorable regulatory trajectory than Semax.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GABAergic Modulation [1] \u2014 Selank modulates GABA receptor activity, the primary inhibitory neurotransmitter system in the brain. This mechanism underlies its anxiolytic properties and distinguishes it from benzodiazepines by producing anxiolysis without sedation or cognitive impairment.",
      "Serotonergic and Dopaminergic Effects [2] \u2014 Selank influences serotonin and dopamine neurotransmission, contributing to mood stabilization, reduced anxiety responses, and the mild cognitive-supportive effects reported in research. These neurotransmitter effects differ from Semax's more pronounced dopaminergic drive.",
      "Enkephalinase Inhibition [3] \u2014 Like Semax, Selank inhibits enzymes that degrade enkephalins and other endogenous regulatory peptides, prolonging the activity of natural neuromodulatory peptides in the brain.",
      "BDNF and Neurotrophic Support [1] \u2014 Selank modulates brain-derived neurotrophic factor expression, though to a lesser extent than Semax, contributing to neuroplasticity support alongside its primary anxiolytic action.",
      "Immune Modulation via Tuftsin Analogy [2] \u2014 As a tuftsin analog, Selank retains some of tuftsin's immunomodulatory properties, potentially influencing immune cell activation and stress-immune system interactions.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Anxiolytic Effects \u2014 Comparison to Benzodiazepines [1] \u2014 Clinical trials conducted in Russia compared Selank to benzodiazepines in generalized anxiety disorder models. Selank produced comparable anxiolytic effects without sedation, cognitive impairment, tolerance development, or withdrawal symptoms \u2014 the primary limitations of benzodiazepine therapy.",
      "Cognitive Enhancement Under Stress [2] \u2014 Selank's dual profile of anxiety reduction combined with cognitive support makes it particularly relevant for research on performance under psychological stress \u2014 where anxiety itself impairs cognitive function. Reducing anxiety indirectly improves focus and working memory.",
      "Functional Connectivity \u2014 fMRI Study [4] \u2014 The same 52-participant resting-state fMRI study examining Semax also assessed Selank, revealing distinct effects on functional connectivity between the amygdala and temporal cortex. Post-hoc analysis defined both general and specific effects of each peptide on brain connectivity.",
      "Stress Resilience and Neurasthenia [1] \u2014 Russian clinical use includes treatment of neurasthenia (a condition of mental fatigue and anxiety) and general stress-related disorders. Selank is prescribed for anxiety management where the benzodiazepine side effect profile is undesirable.",
      "Immune and Inflammatory Research [2] \u2014 As a tuftsin analog, Selank's effects on immune modulation represent an additional research area distinct from its nootropic and anxiolytic applications.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Anxiolytic effects comparable to benzodiazepines without sedation or cognitive impairment",
      "No tolerance development or withdrawal symptoms reported in clinical use",
      "Dual anxiolytic and mild nootropic profile",
      "Reduced anxiety-mediated cognitive impairment",
      "Modulation of functional brain connectivity in amygdala and prefrontal regions",
      "Immune modulation via tuftsin analog mechanism",
      "Approved and prescribed clinically in Russia for anxiety and neurasthenia",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: Heptapeptide \u2014 tuftsin (Thr-Lys-Pro-Arg) + Pro-Gly-Pro extension",
      "Administration: Intranasal spray (most common) or subcutaneous injection",
      "Duration of action: Extended compared to native tuftsin due to Pro-Gly-Pro modification",
      "Nasal administration preferred for direct CNS delivery",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) Most robust clinical data comes from Russian research \u2014 limited large-scale English-language RCT data exists. (2) Small human study populations; no large Phase 2 or 3 trials under Western regulatory frameworks. (3) Not FDA approved \u2014 was previously on FDA Category 2 list but was removed in September 2024 pending Pharmacy Compounding Advisory Committee review. (4) Long-term safety data in large populations is limited. (5) Selank's anxiolytic mechanism is not as clearly defined as benzodiazepines' GABA-A receptor mechanism. (6) Side effects appear minimal (mild nasal irritation most common) but comprehensive safety data is lacking.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "Selank is most commonly studied alongside Semax \u2014 Selank for anxiety reduction and Semax for cognitive enhancement \u2014 providing complementary nootropic and anxiolytic effects. The combination is used in Russian clinical practice and widely discussed in biohacking communities as a balanced cognitive support stack.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "Swolverine. Selank vs Semax: Benefits, Side Effects, And Dosing. 2025. https://swolverine.com/blogs/blog/semax-vs-selank-nootropic-peptides-compared",
      "Spartan Peptides. Cognitive Peptides Guide: Semax, Selank and Dihexa Research. 2026. https://spartanpeptides.com/blog/cognitive-peptide-guide-semax-selax-and-dihexa-research/",
      "Wikipedia. Semax. https://en.wikipedia.org/wiki/Semax",
      "PubMed. Functional Connectomic Approach to Studying Selank and Semax Effects. 2020. https://pubmed.ncbi.nlm.nih.gov/32342318/",
    ],
  },
];

export default function SelankPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Selank</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
        <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Approved in Russia
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: TP-7, Tuftsin analog
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Anxiolytic", "Nootropic", "GABAergic", "Russian Approved"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/semax" className="text-sm font-medium text-[#0891b2] hover:underline">Semax</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/semax-vs-selank" className="text-sm font-medium text-[#0891b2] hover:underline">Semax vs Selank &rarr;</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=nootropic+cognitive+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm text-center"
          >
            Search Related Supplements on Amazon &rarr;
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
