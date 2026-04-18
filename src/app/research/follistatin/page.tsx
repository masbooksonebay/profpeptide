import Link from "next/link";
import JsonLd from "@/components/JsonLd";

import WhereToBuy from "@/components/WhereToBuy";
export const metadata = {
  title: "Follistatin Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key Follistatin studies summarized in plain English. Covers myostatin inhibition, gene therapy trials, satellite cell proliferation, and Becker MD.",
};

const studies = [
  {
    title: "Follistatin Complexes Myostatin and Antagonises Myostatin-Mediated Inhibition of Myogenesis",
    authors: "Amthor H, et al.",
    journal: "Developmental Biology / PubMed",
    year: "2004",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/15136138/",
    summary: "The foundational study establishing the direct molecular interaction between follistatin and myostatin \u2014 the key biological relationship that makes follistatin relevant to muscle growth research. The researchers demonstrated that follistatin binds myostatin with extremely high affinity and physically blocks it from executing its muscle-suppressing function. When chick limb buds were treated with myostatin alone, expression of the myogenic genes Pax-3 and MyoD was severely reduced \u2014 but when follistatin was added alongside myostatin, this inhibition was completely blocked. This established follistatin as myostatin\u2019s natural antagonist and the scientific foundation for all subsequent FS344 research.",
  },
  {
    title: "Long-Term Enhancement of Skeletal Muscle Mass and Strength by Single Gene Administration of Myostatin Inhibitors",
    authors: "Haidet AM, Rizo L, Handy C, et al.",
    journal: "Proceedings of the National Academy of Sciences (PNAS) / PMC",
    year: "2008",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2393740/",
    summary: "A landmark study showing that a single intramuscular injection of AAV1-FS344 produced sustained increases in muscle mass and strength for over two years in both normal and dystrophic mice \u2014 including when treatment was started in aged animals. FS344 outperformed other myostatin inhibitors (GASP-1, FLRG) in terms of both muscle size and functional strength improvement. Crucially the study found no adverse effects on cardiac pathology or reproductive capacity in male or female treated animals \u2014 directly addressing the primary safety concern (FSH suppression) that had limited earlier follistatin research. This paper was the foundation for the first human clinical trial.",
  },
  {
    title: "Inhibition of Myostatin with Emphasis on Follistatin as a Therapy for Muscle Disease",
    authors: "Rodino-Klapac LR, Haidet AM, Kota J, et al.",
    journal: "Muscle & Nerve / PMC",
    year: "2009",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/",
    summary: "A comprehensive review establishing the scientific rationale for FS344 as a muscle disease therapeutic. The paper explains why the FS344 isoform specifically was selected for clinical development \u2014 its 10-fold lower affinity for activin compared to FS288 means it is far less likely to suppress FSH and interfere with reproductive function, the primary safety concern with follistatin. The review documents that AAV1-FS344 produced grip strength improvements in treated mice for over two years, and that muscle mass was increased across all treated animals. This paper set the stage for the first human clinical trial.",
  },
  {
    title: "Follistatin Induces Muscle Hypertrophy Through Satellite Cell Proliferation and Inhibition of Both Myostatin and Activin",
    authors: "Gilson H, Schakman O, Kalista S, et al.",
    journal: "American Journal of Physiology \u2014 Endocrinology and Metabolism",
    year: "2009",
    access: "Open Access",
    url: "https://journals.physiology.org/doi/full/10.1152/ajpendo.00193.2009",
    summary: "This study revealed that follistatin\u2019s muscle-building effects operate through two distinct mechanisms \u2014 myostatin inhibition AND activin inhibition \u2014 and that satellite cells (muscle stem cells) play a critical role. FS overexpression increased muscle weight by 37% in normal animals but only 20% in irradiated animals (which lacked functional satellite cells), confirming that satellite cell proliferation drives a significant portion of the hypertrophic effect. Strikingly, FS produced equal muscle hypertrophy in both normal mice AND myostatin knockout mice \u2014 proving that follistatin\u2019s muscle growth effects extend well beyond simply blocking myostatin, implicating activin and other TGF-\u03B2 family members as additional targets.",
  },
  {
    title: "Follistatin Gene Therapy Improves Ambulation in Becker Muscular Dystrophy",
    authors: "Mendell JR, Sahenk Z, Malik V, et al.",
    journal: "PMC / Science Translational Medicine",
    year: "2017",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5240576/",
    summary: "The first human clinical trial of follistatin gene therapy \u2014 a landmark study delivering FS344 via intramuscular injection to patients with Becker muscular dystrophy. Six patients received bilateral quadriceps injections and were followed for safety and efficacy. The trial demonstrated that FS344 gene delivery was safe and well tolerated in humans, with no adverse reproductive effects or organ toxicity. Functional improvements in ambulation (walking ability) were observed in treated patients. This study represents the bridge between decades of animal research and human clinical application of follistatin \u2014 establishing its safety profile in humans for the first time.",
  },
];

export default function FollistatinResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Follistatin Research","description":"5 key Follistatin studies summarized in plain English. Covers myostatin inhibition, gene therapy trials, satellite cell proliferation, and Becker MD.","url":"https://profpeptide.com/research/follistatin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"Follistatin Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Follistatin Research</h1>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on Follistatin-344 (FS344), a myostatin inhibitor and potent muscle growth regulator. Research includes both preclinical animal studies and a human clinical gene therapy trial. Each summary is written in plain English. Click any title to read the full article.
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Follistatin profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, gene therapy trials, research limitations, and WADA status.</p>
        <Link href="/peptides/follistatin" className="btn-primary text-sm">Follistatin Profile</Link>
      </div>

      <WhereToBuy peptide="follistatin" />
    </div>
    </>
  );
}
