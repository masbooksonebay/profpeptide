import Link from "next/link";

export const metadata = {
  title: "Semax — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Semax research profile covering BDNF upregulation, neuroprotective mechanism, stroke treatment evidence, and cognitive enhancement research.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Semax is a synthetic heptapeptide (seven amino acid) analog of the N-terminal fragment of adrenocorticotropic hormone (ACTH 4-10), developed at the Institute of Molecular Genetics of the Russian Academy of Sciences in the 1980s. The key design principle was to retain ACTH's neuroprotective and cognitive-enhancing properties while eliminating its hormonal activity. The addition of a Pro-Gly-Pro sequence extended its duration of action from minutes to 20\u201324 hours in animal models. Semax has been approved as a prescription drug in Russia since the 1990s for the treatment of stroke, cognitive disorders, dyscirculatory encephalopathy, optic nerve atrophy, and neurological deficits in newborns. It is listed on Russia's List of Vital and Essential Drugs. Outside Russia and CIS countries, Semax has not been evaluated or approved by the FDA or other Western regulatory agencies and is classified as a research compound. It is one of the most studied nootropic peptides in Eastern European research literature, with a primary focus on BDNF modulation, neuroprotection, and cognitive enhancement.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "BDNF Upregulation [1] \u2014 Semax's most well-documented mechanism is rapid elevation of brain-derived neurotrophic factor (BDNF) and its signaling receptor TrkB in the hippocampus. Research shows Semax increases BDNF protein levels approximately 1.4-fold in rat hippocampus, promoting neuroplasticity through the same pathway activated by exercise and antidepressants. BDNF supports neuronal survival, synaptic plasticity, learning, and memory formation.",
      "Dopaminergic and Serotonergic Modulation [2] \u2014 Semax rapidly activates serotonergic and dopaminergic brain systems, enhancing neurotransmitter release and balance. These effects contribute to improved motivation, mood stability, focus, and mental drive, and may explain reported antidepressant-like and anxiolytic-like effects in animal models.",
      "Melanocortin Receptor Interaction [3] \u2014 Evidence suggests Semax may act as an antagonist or partial agonist at melanocortin receptors MC4 and MC5, though this mechanism is not fully characterized and its clinical significance is uncertain.",
      "Enkephalinase Inhibition [3] \u2014 Semax inhibits enzymes responsible for degrading enkephalins and other endogenous regulatory peptides, potentially prolonging the activity of these natural neuromodulators in the brain.",
      "Neuroprotective Gene Expression [4] \u2014 Genome-wide transcriptional analysis in ischemic rat brain tissue revealed that Semax modulates expression of over 1,500 genes, particularly those involved in immune system activation, vascular function, and neuroprotection \u2014 suggesting broad molecular effects beyond its known receptor interactions.",
      "Nitric Oxide Inhibition and Mitochondrial Stability [4] \u2014 Semax inhibits nitric oxide synthesis in ischemic conditions and protects neurons from calcium-mediated mitochondrial stress, contributing to its neuroprotective effects in stroke models.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Stroke and Neuroprotection [4] \u2014 Semax is used clinically in Russia for stroke treatment. In rat photothrombosis models, Semax reduced infarction size and improved cognitive performance on behavioral tasks after injury. It is the most established clinical application of Semax.",
      "Cognitive Enhancement in Healthy Subjects [2] \u2014 Human pilot studies demonstrated that intranasal Semax improved attention and short-term memory in healthy subjects and produced EEG changes consistent with other neuroprotective compounds. A study in healthy fatigued volunteers showed cognitive improvements after work shifts.",
      "Functional Connectivity \u2014 fMRI Study [5] \u2014 A study examining 52 healthy participants using resting-state fMRI demonstrated distinct effects of Semax on functional connectivity between the amygdala and temporal cortex, providing neuroimaging evidence of its brain activity modulation.",
      "Cognitive Disorders and Brain Injury [1] \u2014 Russian clinical applications include treatment of cognitive decline, dyscirculatory encephalopathy, Parkinson's disease models, and recovery from brain trauma. Evidence quality varies and most robust data comes from preclinical models.",
      "Anxiety and Depression Models [2] \u2014 Animal studies demonstrate antidepressant-like and anxiolytic-like effects, attenuation of chronic stress behavioral effects, and modulation of stress resilience \u2014 supporting potential applications in stress-related cognitive impairment.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Rapid BDNF elevation in hippocampus supporting neuroplasticity",
      "Improved attention and short-term memory in healthy human subjects",
      "Neuroprotection in stroke and ischemia animal models \u2014 reduced infarction size",
      "Dopaminergic and serotonergic system activation supporting focus and mood",
      "Antidepressant-like and anxiolytic-like effects in animal models",
      "Gene expression modulation across immune and vascular pathways",
      "Approved and used clinically for stroke in Russia for decades",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: Heptapeptide \u2014 Met-Glu-His-Phe-Pro-Gly-Pro (7 amino acids)",
      "Administration: Intranasal spray (most common) or subcutaneous injection",
      "Duration of action: 20\u201324 hours in animal models",
      "Half-life: Extended compared to native ACTH fragment due to Pro-Gly-Pro modification",
      "Nasal administration preferred for nootropic applications due to direct CNS delivery",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) The majority of robust research is from Russian laboratories \u2014 limited large-scale English-language RCT data exists. (2) Most human studies are small pilot studies; no large-scale Phase 2 or 3 trials under Western regulatory frameworks. (3) The FDA classified Semax as a Category 2 bulk drug substance, meaning it cannot be compounded by commercial pharmacies in the US \u2014 reflecting absence of FDA-standard evidence rather than documented harm. (4) Exact mechanism of action remains incompletely understood. (5) Side effects in large human populations are not well characterized \u2014 most reported effects are mild (nasal irritation, transient glucose elevation in diabetics). (6) Not FDA approved and not evaluated by Western regulatory agencies.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "Semax is frequently studied alongside Selank \u2014 Semax for cognitive enhancement and focus, Selank for anxiety reduction \u2014 with the combination offering complementary nootropic and anxiolytic effects. Also studied with neuroprotective protocols involving BPC-157 for broader CNS recovery applications.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "Alzheimer's Drug Discovery Foundation. Semax Cognitive Vitality For Researchers. https://www.alzdiscovery.org/uploads/cognitive_vitality_media/Semax-Cognitive-Vitality-For-Researchers.pdf",
      "Dr. Lewis. Semax for Focus and Mood: Evidence and What to Expect. 2026. https://drlewis.com/semax-for-focus-mood/",
      "Wikipedia. Semax. https://en.wikipedia.org/wiki/Semax",
      "PMC. The peptide semax affects the expression of genes related to the immune and vascular systems in rat brain focal ischemia. https://pmc.ncbi.nlm.nih.gov/articles/PMC3987924/",
      "PubMed. Functional Connectomic Approach to Studying Selank and Semax Effects. 2020. https://pubmed.ncbi.nlm.nih.gov/32342318/",
    ],
  },
];

export default function SemaxPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Semax</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
        <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Approved in Russia
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: ACTH 4-10 analog, Met-Glu-His-Phe-Pro-Gly-Pro
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
        {["Nootropic", "BDNF", "Neuroprotection", "Russian Approved"].map((tag) => (
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
        <Link href="/peptides/selank" className="text-sm font-medium text-[#0891b2] hover:underline">Selank</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
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
