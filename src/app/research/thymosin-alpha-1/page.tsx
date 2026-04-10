import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Thymosin Alpha-1 Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key Thymosin Alpha-1 studies summarized in plain English. Covers immune modulation, viral infections, cancer immunotherapy, and immunosenescence.",
};

const studies = [
  {
    title: "Thymosin Alpha 1: A Comprehensive Review of the Literature",
    authors: "Seidel JA, et al.",
    journal: "World Journal of Gastroenterology / PMC",
    year: "2020",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7747025/",
    summary: "The most comprehensive English-language review of Thymosin Alpha-1, covering its biology, mechanisms, and clinical applications across multiple disease states. The review documents FDA orphan drug approval for thymalfasin for malignant melanoma, chronic active hepatitis B, DiGeorge anomaly with immune defects, and hepatocellular carcinoma. It covers clinical trials across DiGeorge syndrome, non-small cell lung cancer, hepatocellular carcinoma, hepatitis B and C, HIV, and melanoma \u2014 all yielding promising results. The paper also discusses T\u03B11\u2019s potential role in COVID-19, noting that its ability to repair immunological damage from T-cell overactivation could be beneficial in severe cases. Safety profile is described as excellent, with only mild injection-site reactions as common adverse effects.",
  },
  {
    title: "Thymosin Alpha-1 and Its Role in Viral Infectious Diseases \u2014 Mechanism and Clinical Application",
    authors: "MDPI Molecules Research Group",
    journal: "Molecules (MDPI)",
    year: "2023",
    access: "Open Access",
    url: "https://www.mdpi.com/1420-3049/28/8/3539",
    summary: "A mechanistic deep-dive into how Thymosin Alpha-1 enhances immune responses against viral infections. The paper documents T\u03B11\u2019s interaction with Toll-like receptors (TLR3, TLR4, TLR7, TLR9) \u2014 pattern recognition receptors that detect viral and bacterial signatures. Through TLR binding, T\u03B11 activates downstream IRF3 and NF-\u03BAB pathways, promoting proliferation and activation of T cells, B cells, macrophages, and natural killer cells. This dual innate and adaptive immune activation explains T\u03B11\u2019s effectiveness across multiple viral infections \u2014 it doesn\u2019t target one virus, it enhances the immune system\u2019s own detection and response machinery, making it broadly applicable across hepatitis B, hepatitis C, HIV, and respiratory viral infections.",
  },
  {
    title: "Thymosin Alpha-1 in Cancer Therapy \u2014 Immunoregulation and Potential Applications",
    authors: "ScienceDirect Research Group",
    journal: "International Immunopharmacology / ScienceDirect",
    year: "2023",
    access: "Paywalled",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S156757692300067X",
    summary: "A 2023 review documenting T\u03B11\u2019s emerging role in cancer immunotherapy \u2014 particularly its potential synergy with immune checkpoint inhibitors (ICIs). The paper reviews T\u03B11\u2019s pleiotropic effects on immune cells through TLR activation and covers clinical data in melanoma, non-small cell lung cancer, and hepatocellular carcinoma. Most notably it documents preclinical evidence that T\u03B11 can convert \u201Ccold tumors\u201D (those that don\u2019t respond to immunotherapy) into \u201Chot tumors\u201D by reversing macrophage polarization \u2014 a mechanism that could meaningfully enhance the efficacy of checkpoint inhibitors like pembrolizumab. Given ICI\u2019s relatively low response rates and the safety limitations of escalating doses, T\u03B11\u2019s exceptional safety profile makes it a compelling adjunct candidate.",
  },
  {
    title: "Thymosin Alpha-1 \u2014 Reimagine Its Broader Applications in the Immuno-Oncology Era",
    authors: "PubMed Research Group",
    journal: "Cancer Medicine / PubMed",
    year: "2023",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/36871535/",
    summary: "A forward-looking clinical review examining T\u03B11\u2019s emerging role in modern oncology. The paper documents that T\u03B11 significantly improved overall survival in surgically resectable non-small cell lung cancer and liver cancer patients in the adjuvant setting. For locally advanced unresectable NSCLC, it significantly reduced chemoradiation-induced lymphopenia and pneumonia \u2014 two of the most common and serious complications of radiation-based cancer treatment. The review makes a compelling case for T\u03B11 as an adjunct to standard cancer therapies, particularly in immunocompromised patients where immune support during aggressive treatment could be the difference between completing a full treatment course and suffering dose-limiting toxicity.",
  },
  {
    title: "Aging and Thymosin Alpha-1 \u2014 Immunosenescence and Therapeutic Potential",
    authors: "MDPI International Journal of Molecular Sciences",
    journal: "International Journal of Molecular Sciences (MDPI)",
    year: "2025",
    access: "Open Access",
    url: "https://www.mdpi.com/1422-0067/26/23/11470",
    summary: "A 2025 review examining T\u03B11\u2019s potential role in combating age-related immune decline (immunosenescence). As the thymus involutes with age \u2014 shrinking and losing function \u2014 T-cell production declines, chronic inflammation increases, and susceptibility to infections and cancer rises. T\u03B11 directly addresses this by stimulating T-cell differentiation, enhancing thymic output, and modulating dendritic cell and macrophage activity. Clinical studies show T\u03B11 can improve vaccine responses in elderly populations and mitigate immunosenescence markers. The review also covers a promising fusion protein (Refnot) combining T\u03B11 with TNF\u03B1 that shows enhanced antitumor activity with dramatically reduced toxicity \u2014 representing a next-generation development of the T\u03B11 platform.",
  },
];

export default function ThymosinAlpha1ResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Thymosin Alpha-1 Research","description":"5 key Thymosin Alpha-1 studies summarized in plain English. Covers immune modulation, viral infections, cancer immunotherapy, and immunosenescence.","url":"https://www.profpeptide.com/research/thymosin-alpha-1","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://www.profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"Thymosin Alpha-1 Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Thymosin Alpha-1 Research</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on Thymosin Alpha-1 (T\u03B11), a 28-amino-acid peptide naturally produced in the thymus gland. Its synthetic form, thymalfasin (Zadaxin), is FDA-approved as an orphan drug and is approved in over 35 countries for hepatitis B, hepatocellular carcinoma, and immune deficiency. It is one of the most clinically validated immunomodulatory peptides. Each summary is written in plain English. Click any title to read the full article.</p>
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Thymosin Alpha-1 profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, TLR activation, FDA status, and clinical applications.</p>
        <Link href="/peptides/thymosin-alpha-1" className="btn-primary text-sm">Thymosin Alpha-1 Profile</Link>
      </div>
    </div>
    </>
  );
}
