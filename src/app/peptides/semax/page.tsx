import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/semax" },
  title: "Semax — Russian Nootropic Peptide, BDNF, Mechanism, Dosage | Prof. Peptide",
  description:
    "Semax research profile: BDNF upregulation, intranasal dosing protocol, Selank stack, Russian clinical history, side effects.",
};

const faqs = [
  {
    q: "Is Semax FDA-approved?",
    a: "No. Semax is approved as a prescription medication in Russia and Ukraine for stroke recovery, cognitive impairment, and optic nerve disorders. It is not FDA-approved in the United States or EMA-approved in Europe. Outside Russia, Semax is sold as a research-grade peptide.",
  },
  {
    q: "How is Semax different from Selank?",
    a: "Both are Russian heptapeptides developed at the same institute with similar Pro-Gly-Pro stabilization. Semax is derived from ACTH(4-7) and primarily targets BDNF and dopaminergic systems — best for cognitive enhancement, focus, and stroke recovery. Selank is derived from tuftsin and primarily acts on GABA and serotonergic systems — best for anxiolysis without sedation. They are commonly stacked together (Semax morning, Selank later) for balanced cognitive enhancement plus calm.",
  },
  {
    q: "Why does the half-life seem so short?",
    a: "The peptide itself clears from plasma in 2–3 minutes. But the downstream BDNF and NGF gene expression effects unfold over hours and persist 24+ hours. Dose frequency is governed by these signaling windows, not plasma kinetics. This is why once or twice daily dosing works despite the rapid clearance.",
  },
  {
    q: "Will Semax raise my cortisol?",
    a: "No — this is one of its key advantages over ACTH and other stress-related peptides. Despite being structurally derived from ACTH, Semax does NOT activate the HPA axis or stimulate cortisol production. The truncated structure removes the steroidogenic activity while preserving cognitive effects.",
  },
  {
    q: "Should I use intranasal or subcutaneous?",
    a: "Intranasal is preferred for cognitive applications because partial nose-to-brain transport via olfactory pathways gives faster and more efficient CNS access. Subcutaneous works systemically but loses some of the direct CNS targeting advantage. Most published Russian protocols use intranasal.",
  },
  {
    q: "What about N-Acetyl Semax variants?",
    a: "N-Acetyl Semax has 2–3x potency and longer duration than standard Semax. N-Acetyl Semax Amidate (NA-Semax-A) is dramatically more potent (estimated 100–1,000× per microgram) — requires 50–100 mcg doses vs the 200–600 mcg standard range. Less clinical data on these variants. Recommended only for users who have established response to standard Semax first.",
  },
  {
    q: "How long until I see results?",
    a: "Subjective effects (focus, motivation, alertness) onset within 20–40 minutes of the first dose. Cumulative cognitive benefits typically build over 3–7 days of consistent dosing. Stroke recovery effects in clinical protocols are measured over 10–14 days of treatment.",
  },
  {
    q: "Where can I buy Semax?",
    a: (
      <>
        Outside Russia/Ukraine, Semax is sold by specialty research peptide vendors as research-grade material. Quality varies — choose vendors that provide third-party testing certificates (HPLC purity, mass spectrometric identity confirmation). PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

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

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "BDNF Upregulation [1] — Single intranasal Semax doses produce a 1.4-fold increase in BDNF protein and a 3-fold increase in BDNF mRNA in the rat hippocampus within hours, with effects persisting 24+ hours. BDNF supports neuronal survival, synaptic plasticity, and memory formation.",
      "NGF and TrkB Modulation [1] — Concurrent with BDNF effects, Semax increases nerve growth factor (NGF) levels in frontal cortex and hippocampus, plus 1.6-fold increase in TrkB receptor phosphorylation. This neurotrophic cascade drives the long-lasting cognitive effects despite the peptide's short half-life.",
      "Monoamine System Modulation [2] — Intranasal Semax increases serotonin in the hippocampus and cortical regions and modulates dopamine signaling within 30 minutes. These effects underlie the mood, motivation, and attention benefits reported clinically.",
      "Enkephalinase Inhibition [3] — Semax (like Selank) inhibits enzymes that degrade endogenous enkephalins (IC50 ~10 μM), prolonging the activity of the body's natural opioid peptides. This contributes to mild anxiolytic and stress-buffering effects.",
      "No HPA Activation [4] — Despite structural derivation from ACTH, Semax does NOT activate the hypothalamic-pituitary-adrenal axis or stimulate cortisol production. The Pro-Gly-Pro tail and ACTH(4-7) fragment retain cognitive activity without endocrine effects — a key differentiator from the parent ACTH molecule.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Ischemic Stroke Recovery [5] — Russian Phase 3 multi-center clinical trials showed reduced neurological deficit and improved functional recovery when intranasal Semax 1% was added to standard acute-stroke care within 24 hours of symptom onset. Russian approval for this indication is based on this evidence.",
      "BDNF and Cognitive Function [1] — Foundational mechanism studies (Dolotov et al. 2006, Ashmarin et al. 1995) established the BDNF-mediated nootropic mechanism in animal models, including improved learning and memory in passive avoidance and Morris water maze paradigms.",
      "Cognitive Performance Under Stress — Russian studies in students under exam load, pilots in simulated flight stress, and operators on sustained-attention tasks consistently report preserved or improved performance on vigilance and working memory.",
      "Optic Nerve Disorders — Approved indication in Russia. Semax 1% is used for optic nerve atrophy and ischemic optic neuropathy with demonstrated improvement in visual function.",
      "Stroke Plasma BDNF [6] — In a 2017 study of 110 stroke patients (Gusev et al.), Semax treatment (6,000 mcg/day for 10 days, 2 courses with 20-day interval) increased plasma BDNF levels. Patients with elevated BDNF showed improved rehabilitation outcomes.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Semax effects develop on two timescales. Subjective cognitive effects (focus, alertness, motivation) typically onset 20–40 minutes after intranasal dosing, peak around 1–2 hours, and last 4–6 hours. Neurochemical effects (BDNF mRNA upregulation, TrkB phosphorylation) are measurable within hours and continue building over days of consistent dosing. Most users report cumulative benefits over the first 3–7 days of a typical 10–14 day cycle. Stroke recovery effects in clinical trials are measured over weeks of treatment.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Semax is administered intranasally as a 0.1% (1 mg/mL) or 1% (10 mg/mL) solution. The intranasal route allows partial nose-to-brain transport via the olfactory and trigeminal nerve pathways. Subcutaneous administration is also used in research contexts. Oral bioavailability is effectively zero — gastric peptidases destroy the molecule.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cognitive enhancement (standard): 600–1,200 mcg/day intranasally via 0.1% solution. Typically split as 1–2 drops per nostril, 2–3 times daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stroke recovery (Russian protocol): 9,000–18,000 mcg/day intranasally via 1% solution, administered within 6–12 hours of ischemic onset, continued for 10–14 days.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Optic nerve disorders: 2–3 drops per nostril, 3–4× daily, for 5–10 days.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Subcutaneous research dosing: 250–1,000 mcg/kg per dose; typical fixed dose 200–600 mcg per injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 10–14 days standard. Some users repeat cycles every 1–3 months. Continuous daily long-term use is uncommon in published protocols.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Semax has three available variants. Standard Semax (0.1%/1% solution) has the most clinical data. N-Acetyl Semax has 2–3x potency and longer duration. N-Acetyl Semax Amidate (NA-Semax-A) is dramatically more potent (estimated 100–1,000× per microgram) and requires much smaller doses (50–100 mcg). The N-Acetyl variants are less studied and recommended only for users who have established their response to standard Semax.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild nasal dryness or irritation (intranasal route)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Slight overstimulation or mild irritability at higher doses</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sleep disturbance if dosed late in the day</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Transient mild dizziness or nausea</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue after end of dosing window</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No serious adverse events reported in published Russian clinical literature spanning 30+ years</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No addictive potential or withdrawal syndrome documented</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Long-term safety beyond 14-day cycles in healthy individuals not formally established</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Semax has one of the cleanest safety profiles of any nootropic peptide. Decades of Russian pharmaceutical use plus extensive preclinical toxicological studies show no serious adverse events, no addiction, no withdrawal, and no HPA-axis activation. The most common issues are local (nasal irritation) or due to overstimulation (resolves with dose reduction). Long-term continuous daily use beyond standard 10–14 day cycles has limited published data.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Intranasal (preferred — fastest CNS access via nose-to-brain transport) or subcutaneous injection.",
      "Time of day: Morning and early afternoon. Avoid evening dosing (potential overstimulation, sleep disturbance).",
      "Intranasal technique: Tilt head slightly back. Apply 1–2 drops per nostril. Do not blow nose for 30+ minutes after dosing.",
      "Reconstitution (lyophilized powder): For 0.1% solution: 5 mg vial + 5 mL bacteriostatic water = 1 mg/mL (~50 mcg per drop in standard nasal dropper).",
      "Higher concentrations: For 1% solution (used for stroke protocols): 10 mg vial + 1 mL = 10 mg/mL.",
      "Missed dose: Skip and resume next scheduled dose. Effects are cumulative across days, missing one dose has minimal impact.",
      "Cycle: Standard 10–14 days, then break of 1–3 months before next cycle.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Selank — the gold standard pairing. Semax for cognitive enhancement (BDNF, dopamine) + Selank for anxiolysis (GABA, serotonin) creates balanced nootropic effect. Most experienced users dose Semax in morning, Selank in afternoon/evening. See{" "}
          <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">
            Selank
          </Link>
          .
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caffeine — anecdotally combined for amplified focus, though no controlled studies on the combination.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">BPC-157 — combined for general health/recovery support; no direct interaction.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">L-Theanine — added to take edge off any potential overstimulation.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Adequate sleep — essential. Semax effects are weakened by sleep deprivation. Bedtime hygiene matters more than dose timing.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "MAOIs and SSRIs — Semax modulates serotonergic systems; combine cautiously. No documented serious interactions but theoretical serotonin elevation risk.",
      "Other nootropic stacks — generally compatible with caffeine, choline donors, racetams, but additive overstimulation possible.",
      "Direct ACTH or cortisol-modulating drugs — no interaction expected (Semax does NOT affect HPA axis).",
      "No major drug-drug interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted nasal solution: Store at 2–8°C; use within 14–28 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton or amber dropper bottle.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Semax is approved in Russia and Ukraine as a prescription medication for ischemic stroke recovery, cognitive impairment, and optic nerve disorders. It is NOT FDA-approved in the United States or EMA-approved in Europe. Most clinical evidence comes from Russian-language journals that have not been replicated in large randomized Western trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The mechanism of action remains incompletely characterized. The most consistent finding (BDNF upregulation) is well-replicated in animal models but lacks equivalent human mechanistic studies. Effects on cognitive performance in healthy individuals are documented in Russian literature but are largely absent from Western peer-reviewed research.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material sold outside Russian pharmaceutical channels is intended for laboratory use only. Purity and potency vary by vendor — third-party testing is recommended before use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency does not currently include Semax on the prohibited list, but this status may change as the peptide attracts more attention in performance contexts.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "references",
    title: "References",
    node: (
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dolotov OV, Karpenko EA, Inozemtseva LS, et al. Semax, an analog of adrenocorticotropin (4-10), binds specifically and increases levels of brain-derived neurotrophic factor protein in rat basal forebrain. J Neurochem. 2006;97(suppl 1):82-86.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16635258/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16635258/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Eremin KO, Kudrin VS, Saransaari P, et al. Semax, an ACTH(4-10) analogue with nootropic properties, activates dopaminergic and serotoninergic brain systems in rodents. Neurochem Res. 2005;30(12):1493-500.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16362770/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16362770/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Semax.{" "}
          <a href="https://en.wikipedia.org/wiki/Semax" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Semax
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ashmarin IP, Nezavibatko VN, Levitskaya NG, et al. Design and investigation of an ACTH(4-10) analog lacking D-amino acids and hydrophobic radicals. Neurosci Res Commun. 1995;16:105-12.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Gusev EI, Skvortsova VI, Miasoedov NF, et al. Effectiveness of Semax in the acute period of hemispheric ischemic stroke (a clinical and electrophysiological study). Zh Nevrol Psikhiatr Im S S Korsakova. 1997;97(6):26-34.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9244639/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9244639/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Romanova GA, Shakova FM, Barskov IV, et al. Disturbance of learning and memory in rats with photothrombotic infarcts in the prefrontal cortex; protective effect of Semax. Bull Exp Biol Med. 2006;142(6):746-9.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17603663/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17603663/
          </a>
        </li>
      </ol>
    ),
  },
  {
    id: "studies",
    title: "Published Studies",
    node: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function SemaxPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Semax","description":"Semax research profile: BDNF upregulation, intranasal dosing protocol, Selank stack, Russian clinical history, side effects.","url":"https://profpeptide.com/peptides/semax","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Semax"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Semax</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: ACTH (4-7) PGP, MEHFPGP, Russian Nootropic Peptide
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Semax is a synthetic heptapeptide (Met-Glu-His-Phe-Pro-Gly-Pro) developed in the 1980s at the Institute of Molecular Genetics of the Russian Academy of Sciences. It combines the ACTH(4-7) fragment of adrenocorticotropic hormone with a Pro-Gly-Pro stabilizing tail that protects against rapid enzymatic degradation. Despite its short plasma half-life (~2-3 minutes), Semax produces long-lasting nootropic and neuroprotective effects through upregulation of brain-derived neurotrophic factor (BDNF) and nerve growth factor (NGF) in the hippocampus and cortex. It is approved in Russia for ischemic stroke recovery and cognitive impairment but has no FDA or EMA approval. Semax does NOT activate the HPA axis or stimulate cortisol, distinguishing it pharmacologically from full-length ACTH.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cognitive enhancement: improved focus, memory, and mental clarity</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">BDNF and NGF upregulation in hippocampus and cortex</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Neuroprotection: reduces ischemic damage in animal stroke models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modulates serotonergic and dopaminergic systems</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No HPA axis activation, no cortisol elevation, no addiction or withdrawal</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Russian-approved for stroke recovery and cognitive impairment</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Standard cognitive-enhancement dose: 600–1,200 mcg/day intranasally via 0.1% solution, typically split across the day. Stroke recovery protocols: 9,000–18,000 mcg/day intranasally via 1% solution. Cycles are typically 10–14 days. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Semax is approved as a prescription medication in Russia and Ukraine but is not FDA-approved in the US. It is sold by specialty research peptide vendors as research-grade material. See{" "}
            <Link href="/best-peptide-vendors" className="text-[#0891b2] hover:underline">
              Verified Peptide Vendors &rarr;
            </Link>{" "}
            for current options.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Related supplements:</span>{" "}
            <a href="https://www.amazon.com/s?k=cognitive+nootropic+supplements&tag=profpeptide-20" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
              Find related supplements on Amazon.
            </a>
          </p>
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.node && s.node}
            {s.content && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Cognitive & Nootropic", "BDNF", "Russian-Approved", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          Need to calculate a dose?
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution
          and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>

      <PageDisclaimer />
    </div>
    </>
  );
}
