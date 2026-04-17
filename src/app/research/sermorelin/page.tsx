import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Sermorelin Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "4 key Sermorelin studies summarized in plain English. Covers pituitary preservation, elderly GH restoration, cognitive function, and testosterone effects.",
};

const studies = [
  {
    title: "Sermorelin: A Better Approach to Management of Adult-Onset Growth Hormone Insufficiency?",
    authors: "Walker RF",
    journal: "Clinical Interventions in Aging / PMC",
    year: "2006",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2699646/",
    summary: "The most widely cited review arguing for sermorelin as a safer alternative to direct growth hormone replacement therapy (GHRT). The paper explains a key advantage of sermorelin over exogenous GH: because sermorelin stimulates the pituitary to produce its own GH rather than administering GH directly, the natural negative feedback mechanisms (somatostatin regulation) remain intact \u2014 making overdose essentially impossible. Walker argues this represents a more physiologically appropriate approach than rhGH, which bypasses these regulatory systems entirely. The paper also covers sermorelin\u2019s legal status \u2014 noting that unlike rhGH, off-label prescribing of sermorelin is not prohibited by federal law.",
  },
  {
    title: "Effects of Sermorelin on GH and IGF-1 in Elderly Men \u2014 Dose-Response Study",
    authors: "Corpas E, Harman SM, Pineyro MA, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "1992",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/1347601/",
    summary: "One of the foundational human studies of sermorelin in elderly men ages 60\u201378. High-dose sermorelin elevated mean 24-hour GH levels, peak GH amplitude, and GH area under the curve. Strikingly, elderly men who had lower baseline IGF-1 levels than young controls saw IGF-1 rise toward youthful levels with sermorelin treatment \u2014 and these elevations persisted above baseline for two weeks after stopping treatment, suggesting lasting pituitary sensitization. This study established the scientific basis for sermorelin\u2019s use in age-related GH decline.",
  },
  {
    title: "Growth Hormone-Releasing Hormone Effects on Brain GABA Levels in Mild Cognitive Impairment and Healthy Aging",
    authors: "Friedman SD, Baker LD, Borson S, et al.",
    journal: "PMC / JAMA Neurology",
    year: "2013",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764915/",
    summary: "A randomized clinical trial examining GHRH\u2019s effects on brain neurochemistry and cognitive function in healthy older adults and adults with mild cognitive impairment (MCI). Participants self-administered daily tesamorelin (a GHRH analog equivalent to sermorelin for this purpose) for 20 weeks. The study found changes in brain GABA levels and cognitive performance improvements \u2014 building on the researchers\u2019 prior sermorelin trial which documented improved performance on tests of working memory, planning, selective attention, and processing speed. This is one of the most compelling papers linking GH secretagogues to cognitive function \u2014 an often-overlooked application of this peptide class.",
  },
  {
    title: "Beyond the Androgen Receptor \u2014 Growth Hormone Secretagogues in the Management of Hypogonadal Males",
    authors: "Sigalos JT, Pastuszak AW",
    journal: "PMC / Sexual Medicine Reviews",
    year: "2018",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7108996/",
    summary: "A clinical review covering sermorelin\u2019s role in treating hypogonadal males with metabolic syndrome. The paper documents a unique finding from sermorelin research: unlike other GH secretagogues which work via the ghrelin pathway, sermorelin uniquely stimulates FSH and LH release \u2014 implying a potential role in supporting endogenous testosterone production alongside GH stimulation. Animal studies showed sermorelin therapy resulted in increased testosterone secretion in GH-deficient rats. This cross-hormonal effect distinguishes sermorelin from CJC-1295 and ipamorelin and may be relevant for males with concurrent GH and testosterone deficiency.",
  },
];

export default function SermorelinResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Sermorelin Research","description":"4 key Sermorelin studies summarized in plain English. Covers pituitary preservation, elderly GH restoration, cognitive function, and testosterone effects.","url":"https://www.profpeptide.com/research/sermorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://www.profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"Sermorelin Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Sermorelin Research</h1>
        <span className="tag">Growth Hormone</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on Sermorelin, a synthetic analog of the first 29 amino acids of GHRH. Sermorelin was formerly FDA-approved as a diagnostic tool for GH deficiency but was discontinued by the manufacturer in 2008 due to manufacturing difficulties \u2014 not safety concerns. It remains available as a compounded peptide. Each summary is written in plain English. Click any title to read the full article.</p>
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Sermorelin profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, FDA history, pituitary preservation, and off-label use.</p>
        <Link href="/peptides/sermorelin" className="btn-primary text-sm">Sermorelin Profile</Link>
      </div>

      <div className="mt-6 p-5 border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Where to buy Sermorelin</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Every vendor on our vetted list is third-party tested with published Certificates of Analysis. See which research suppliers carry Sermorelin.</p>
        <Link href="/best-peptide-vendors" className="text-sm font-medium text-[#0891b2] hover:underline">See vendors that carry Sermorelin in our full list &rarr;</Link>
      </div>
    </div>
    </>
  );
}
