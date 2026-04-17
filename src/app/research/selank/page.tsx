import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Selank Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key Selank studies summarized in plain English. Covers anxiolytic clinical trials, GABAergic mechanism, diazepam synergy, and neuroprotection.",
};

const studies = [
  {
    title: "Efficacy and Possible Mechanisms of Action of a New Peptide Anxiolytic Selank in the Therapy of Generalized Anxiety Disorders and Neurasthenia",
    authors: "Zozulia AA, Neznamov GG, Syunyakov TS, et al.",
    journal: "Zhurnal Nevrologii i Psikhiatrii / PubMed",
    year: "2008",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
    summary: "The primary human clinical trial of Selank \u2014 a comparative study of 62 patients with generalized anxiety disorder (GAD) and neurasthenia, treated with either Selank (30 patients) or medazepam, a benzodiazepine (32 patients). Assessed using Hamilton, Zung, and CGI psychometric scales, Selank produced anxiolytic effects comparable to medazepam \u2014 but with additional antiasthenic (anti-fatigue) and psychostimulant effects not seen with the benzodiazepine. Critically, Selank produced these effects without the typical benzodiazepine side effects of sedation, muscle relaxation, dependence, or withdrawal syndrome. This study is the primary evidence base for Selank\u2019s clinical use in Russia and the foundation of its reputation as a \u201Ccleaner\u201D alternative to benzodiazepines.",
  },
  {
    title: "Selank Administration Affects the Expression of Some Genes Involved in GABAergic Neurotransmission",
    authors: "Volkova A, Shadrina M, Kolomin T, et al.",
    journal: "Frontiers in Pharmacology / PMC",
    year: "2016",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4757669/",
    summary: "A molecular study investigating how Selank produces its anxiolytic effects \u2014 specifically whether it acts through the GABA system like benzodiazepines. The study examined mRNA levels of 84 genes involved in GABAergic neurotransmission in rat frontal cortex. The findings confirmed that Selank affects the GABA system \u2014 but indirectly, through allosteric modulation of GABAA receptors rather than direct binding. This distinction is important: direct GABA receptor agonism (as with benzodiazepines) produces tolerance and dependence, while allosteric modulation is associated with a much lower dependence risk. The study also found that Selank\u2019s gene expression profile closely paralleled that of GABA itself \u2014 explaining the mechanistic similarity without the side effect profile.",
  },
  {
    title: "Peptide Selank Enhances the Effect of Diazepam in Reducing Anxiety in Unpredictable Chronic Mild Stress Conditions in Rats",
    authors: "Semenova TP, Kozlovskiy II, Zakharova NM, et al.",
    journal: "PMC / Behavioural Neurology",
    year: "2017",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5322660/",
    summary: "A preclinical study examining how Selank interacts with diazepam (Valium) under chronic stress conditions \u2014 with significant implications for potential clinical use in anxiolytic therapy. The study found that Selank alone was most effective at reducing anxiety induced by repeated substance administration, while the combination of Selank and diazepam was most effective under unpredictable chronic mild stress \u2014 with anxiety levels returning to pre-stress baseline. The synergistic effect suggests Selank may enhance and hasten the onset of benzodiazepine therapy while potentially reducing the dose required and mitigating some side effects \u2014 a clinically meaningful finding for anxiety disorder treatment.",
  },
  {
    title: "Selank Protects Against Ethanol-Induced Memory Impairment by Regulating BDNF Content in the Hippocampus and Prefrontal Cortex",
    authors: "Kolik LG, Nadorova AV, Antipova TA, et al.",
    journal: "Bulletin of Experimental Biology and Medicine / Springer",
    year: "2019",
    access: "Paywalled",
    url: "https://link.springer.com/article/10.1007/s10517-019-04588-9",
    summary: "A study examining Selank\u2019s neuroprotective effects in a model of chronic alcohol-related cognitive decline. Rats exposed to 10% ethanol for 30 weeks developed memory and attention impairments \u2014 but Selank treatment (0.3 mg/kg daily for 7 days) prevented these deficits and also produced a cognitive-stimulating effect in non-alcohol-exposed control animals. Selank prevented ethanol-induced dysregulation of BDNF in both the hippocampus and prefrontal cortex \u2014 the two brain regions most critical for memory and executive function. This study extends Selank\u2019s research profile beyond anxiety into neuroprotection and cognitive preservation, linking its effects to the same BDNF mechanism identified in Semax research.",
  },
  {
    title: "GABA, Selank, and Olanzapine Affect the Expression of Genes Involved in GABAergic Neurotransmission in IMR-32 Cells",
    authors: "Dadayan AK, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2017",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2017.00089/full",
    summary: "A cell-based study examining Selank\u2019s interaction with both GABA and the antipsychotic olanzapine \u2014 exploring its potential as an adjunct in psychiatric treatment. The study found that combining Selank with GABA nearly completely suppressed the gene expression changes that GABA alone produced \u2014 suggesting Selank allosterically modulates GABA receptor affinity rather than acting as a direct agonist. More intriguingly, combining Selank with olanzapine amplified gene expression changes compared to olanzapine alone \u2014 suggesting Selank may enhance the effectiveness of antipsychotic medication through BDNF-mediated pathways. These findings open a potential research direction for Selank as an adjunct in schizophrenia and other psychiatric conditions.",
  },
];

export default function SelankResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Selank Research","description":"5 key Selank studies summarized in plain English. Covers anxiolytic clinical trials, GABAergic mechanism, diazepam synergy, and neuroprotection.","url":"https://profpeptide.com/research/selank","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"Selank Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Selank Research</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on Selank, a synthetic heptapeptide derived from the immunoregulatory peptide tuftsin. Selank is approved and used clinically in Russia as an anxiolytic. It is not FDA approved. Research includes both animal and human clinical studies. Each summary is written in plain English. Click any title to read the full article.</p>
      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Selank profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, GABAergic modulation, pharmacokinetics, and Russian clinical use.</p>
        <Link href="/peptides/selank" className="btn-primary text-sm">Selank Profile</Link>
      </div>

      <div className="mt-6 p-5 border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Where to buy Selank</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Every vendor on our vetted list is third-party tested with published Certificates of Analysis. See which research suppliers carry Selank.</p>
        <Link href="/best-peptide-vendors" className="text-sm font-medium text-[#0891b2] hover:underline">See vendors that carry Selank in our full list &rarr;</Link>
      </div>
    </div>
    </>
  );
}
