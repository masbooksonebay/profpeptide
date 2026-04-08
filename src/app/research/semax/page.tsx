import Link from "next/link";

export const metadata = {
  title: "Semax Research | Prof. Peptide",
  description: "Key peer-reviewed studies on Semax with plain-English summaries.",
};

const studies = [
  {
    title: "Semax, an Analog of ACTH(4-10) with Cognitive Effects, Regulates BDNF and trkB Expression in the Rat Hippocampus",
    authors: "Dolotov OV, Karpenko EA, Inozemtseva LS, et al.",
    journal: "Brain Research / ScienceDirect",
    year: "2006",
    access: "Paywalled",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0006899306022955",
    summary: "A foundational mechanistic study establishing how Semax enhances cognitive function at the molecular level. A single intranasal application of Semax (50 \u00B5g/kg) produced a 1.4-fold increase in BDNF protein levels, a 1.6-fold increase in trkB receptor phosphorylation, and a 3-fold increase in BDNF mRNA in the rat hippocampus \u2014 with treated animals showing a significant increase in conditioned learning responses. BDNF (brain-derived neurotrophic factor) is the brain\u2019s primary growth factor for neurons and synaptic plasticity, and its upregulation is linked to improved memory, learning, and neuroprotection. This study established the BDNF/trkB pathway as the key mechanism behind Semax\u2019s cognitive effects.",
  },
  {
    title: "Semax Peptide Affects Expression of Genes Related to the Immune and Vascular Systems in Rat Brain Focal Ischemia \u2014 Genome-Wide Transcriptional Analysis",
    authors: "Medvedeva EV, Dmitrieva VG, Povarova OV, et al.",
    journal: "PMC / BMC Genomics",
    year: "2014",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3987924/",
    summary: "A genome-wide study examining how Semax protects the brain during stroke \u2014 one of its primary clinical applications in Russia. Using a rat model of focal cerebral ischemia, researchers found that Semax significantly modulated over 1,500 genes, primarily in the immune and vascular systems. Rather than acting purely on neurons, Semax enhanced the activity of immune cells (mobilizing microglia and leukocytes) and promoted vascular gene expression to support blood flow restoration. This uncovered a previously unknown mechanism for Semax\u2019s neuroprotective effects \u2014 immunomodulation and vascular support during ischemia \u2014 explaining why it has been effective in stroke therapy beyond its cognitive-enhancing properties.",
  },
  {
    title: "Novel Insights into the Protective Properties of Semax Peptide at the Transcriptome Level Following Cerebral Ischaemia-Reperfusion in Rats",
    authors: "Dmitrieva VG, et al.",
    journal: "Genes (MDPI) / PMC",
    year: "2020",
    access: "Open Access",
    url: "https://www.mdpi.com/2073-4425/11/6/681",
    summary: "A follow-up transcriptome study using the more clinically relevant ischemia-reperfusion model \u2014 which better mimics what happens during and after a stroke in humans. RNA sequencing identified 394 differentially expressed genes in Semax-treated vs. saline-treated animals at 24 hours post-stroke. Semax suppressed inflammation-related gene expression while simultaneously activating neurotransmission-related genes \u2014 the precise opposite of what ischemia alone produces. This complementary action \u2014 damping harmful inflammation while restoring neural signaling \u2014 provides a compelling mechanistic explanation for Semax\u2019s clinical effectiveness in stroke rehabilitation.",
  },
  {
    title: "The Potential of the Peptide Drug Semax and Its Derivative for Correcting Pathological Impairments in an Animal Model of Alzheimer\u2019s Disease",
    authors: "PMC Research Group",
    journal: "PMC / PubMed",
    year: "2025",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/41479572/",
    summary: "One of the most recent Semax studies, examining its potential in Alzheimer\u2019s disease using transgenic mice that develop amyloid plaques similar to human AD pathology. Both Semax and a derivative improved cognitive function across multiple behavioral tests \u2014 including open field, novel object recognition, and Barnes maze tests. Histological analysis showed reduced amyloid plaque burden in the cortex and hippocampus of treated animals. This is significant because Semax not only improved cognition but appeared to directly reduce the pathological protein aggregation that defines Alzheimer\u2019s disease \u2014 a meaningful advance beyond the symptomatic improvements documented in earlier studies.",
  },
  {
    title: "Semax Cognitive Vitality Report for Researchers",
    authors: "Alzheimer\u2019s Drug Discovery Foundation (ADDF) \u2014 Cognitive Vitality Program",
    journal: "Alzheimer\u2019s Drug Discovery Foundation",
    year: "2018",
    access: "Open Access",
    url: "https://www.alzdiscovery.org/uploads/cognitive_vitality_media/Semax-Cognitive-Vitality-For-Researchers.pdf",
    summary: "A balanced, independent evidence review of Semax from the Alzheimer\u2019s Drug Discovery Foundation \u2014 one of the most credible non-Russian assessments of the compound. The report acknowledges Semax\u2019s use in Russia for stroke, encephalopathy, Parkinson\u2019s disease, and newborns with neurological deficits. It documents a human pilot study showing improved attention and short-term memory in healthy subjects, and a clinical study in stroke patients showing increased plasma BDNF levels and improved rehabilitation timing. The report is appropriately cautious \u2014 noting that most high-quality human data remains published in Russian and that English-language clinical evidence is limited \u2014 while acknowledging the compound\u2019s promising mechanism and safety profile.",
  },
];

export default function SemaxResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Semax Research</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on Semax (ACTH 4-7 PGP), a synthetic neuropeptide derived from adrenocorticotropic hormone. Semax is approved and used clinically in Russia for stroke and neurological conditions. It is not FDA approved. Research includes both animal studies and human clinical data. Each summary is written in plain English. Click any title to read the full article.</p>
      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-5 hover:border-[#0D7377] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 text-gray-500"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] hover:text-[#0D7377] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">View the full Semax profile</p>
        <p className="text-xs text-gray-500 mb-3">Mechanism of action, BDNF upregulation, pharmacokinetics, and Russian clinical use.</p>
        <Link href="/peptides/semax" className="btn-primary text-sm">Semax Profile</Link>
      </div>
    </div>
  );
}
