import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhereToBuy from "@/components/WhereToBuy";

export const metadata = {
  alternates: { canonical: "/research/kpv" },
  title: "KPV Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "Key peer-reviewed studies on KPV (Lysine-Proline-Valine), the C-terminal tripeptide fragment of alpha-MSH. Research is primarily preclinical, with strong evidence in rodent IBD models.",
};

const studies = [
  {
    title:
      "Alpha-MSH and related tripeptides: biochemistry, anti-inflammatory effects, and future perspectives",
    authors: "Brzoska T, Luger TA, Maaser C, Schiller M, B\u00F6hm M.",
    journal: "Endocrine Reviews",
    year: "2008",
    access: "Open Access",
    url: "https://academic.oup.com/edrv/article/29/5/581/2355153",
    summary:
      "The foundational comprehensive review of alpha-MSH-derived peptides including KPV. The paper establishes the anti-inflammatory pharmacology of the C-terminal tripeptide and explains why KPV retains the anti-inflammatory activity of the parent hormone without the pigmentation effects.",
  },
  {
    title:
      "Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of IBD",
    authors: "Kannengiesser K, Maaser C, Heidemann J, et al.",
    journal: "Inflammatory Bowel Diseases",
    year: "2008",
    access: "Abstract available",
    url: "https://academic.oup.com/ibdjournal/article/14/3/324/4652783",
    summary:
      "This study established KPV's therapeutic potential in inflammatory bowel disease. Using DSS-induced colitis in mice, researchers showed that KPV significantly reduced colonic inflammation, improved histological healing scores, and decreased pro-inflammatory cytokine production.",
  },
  {
    title: "PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation",
    authors: "Dalmasso G, Charrier-Hisamuddin L, Nguyen HT, et al.",
    journal: "Gastroenterology",
    year: "2008",
    access: "Open Access",
    url: "https://www.gastrojournal.org/article/S0016-5085(07)01807-1/fulltext",
    summary:
      "A mechanistic study examining how KPV enters intestinal epithelial cells. The researchers identified PepT1 as the primary uptake mechanism and demonstrated that this transport is upregulated during inflammation \u2014 effectively concentrating KPV at sites where it\u2019s needed.",
  },
  {
    title: "Antimicrobial effects of alpha-MSH peptides",
    authors: "Cutuli M, Cristiani S, Lipton JM, Catania A.",
    journal: "Journal of Leukocyte Biology",
    year: "2000",
    access: "Abstract available",
    url: "https://academic.oup.com/jleukbio/article/67/2/233/4606432",
    summary:
      "The first characterization of direct antimicrobial activity in KPV and related alpha-MSH fragments. Researchers found activity against both gram-positive and gram-negative bacteria as well as Candida albicans.",
  },
];

export default function KPVResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"KPV Research","description":"Key peer-reviewed studies on KPV (Lysine-Proline-Valine), the C-terminal tripeptide fragment of alpha-MSH. Research is primarily preclinical, with strong evidence in rodent IBD models.","url":"https://profpeptide.com/research/kpv","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"KPV Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">KPV Research</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on KPV (Lysine-Proline-Valine), the C-terminal tripeptide fragment of alpha-MSH. Research is primarily preclinical, with strong evidence in rodent IBD models. Each summary is written in plain English.
      </p>

      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>
                {s.access}
              </span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">
              {s.title} &rarr;
            </a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full KPV profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, IBD research, antimicrobial properties, and stacking.</p>
        <Link href="/peptides/kpv" className="btn-primary text-sm">KPV Profile</Link>
      </div>

      <WhereToBuy peptide="kpv" />
    </div>
    </>
  );
}
