import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Epitalon Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "4 key Epitalon studies summarized in plain English. Covers telomerase activation, independent replication, pineal regulation, and longevity research.",
};

const studies = [
  {
    title: "Epithalon Peptide Induces Telomerase Activity and Telomere Elongation in Human Somatic Cells",
    authors: "Khavinson VK, Bondarev IE, Butyugov AA",
    journal: "Bulletin of Experimental Biology and Medicine / PubMed",
    year: "2003",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/12937682/",
    summary: "The foundational study establishing Epitalon\u2019s telomerase-activating properties. Using human fetal lung fibroblast cell cultures and the TRAP (Telomeric Repeat Amplification Protocol) assay, the researchers demonstrated that Epitalon activated expression of the hTERT telomerase catalytic subunit, significantly increased telomerase enzyme activity, and extended the proliferative lifespan of cells beyond the Hayflick limit \u2014 from termination at the 34th passage to continued division past the 44th passage, an extension of more than 10 additional cell doublings. This was the first study establishing that a simple tetrapeptide could reactivate telomerase in normal human somatic cells, a finding with profound theoretical implications for aging biology.",
  },
  {
    title: "Epitalon Increases Telomere Length in Human Cell Lines Through Telomerase Upregulation or ALT Activity",
    authors: "Al-Dulaimi S, Thomas R, Matta S, Roberts T",
    journal: "Biogerontology / PubMed",
    year: "2025",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/40908429/",
    summary: "The most significant independent replication of Epitalon\u2019s telomere effects \u2014 published in 2025 by a UK-based research group unaffiliated with the Khavinson lab. Using breast cancer cell lines and normal epithelial and fibroblast cells, the study confirmed dose-dependent telomere length extension in normal cells through hTERT upregulation and telomerase activation. It also found that cancer cells extended telomeres through an alternative pathway (ALT \u2014 Alternative Lengthening of Telomeres), with only minor ALT activity in normal cells. This independent confirmation significantly strengthens the telomerase-activation evidence base for Epitalon, as it moves the key finding beyond a single research group.",
  },
  {
    title: "Overview of Epitalon \u2014 Highly Bioactive Pineal Tetrapeptide with Promising Properties",
    authors: "Kossoy G, et al.",
    journal: "International Journal of Molecular Sciences / PMC",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11943447/",
    summary: "A comprehensive 2025 review synthesizing the full body of Epitalon research across telomere biology, antioxidant activity, lifespan extension, cancer research, and circadian regulation. Key findings documented: Epitalon increased lifespan of Drosophila by up to 16%; increased antioxidant enzyme activities (SOD, glutathione peroxidase) in aging rats; reduced spontaneous tumor incidence and metastases in mice; increased telomere lengths in blood cells of elderly humans aged 60\u201365 and 75\u201380; and restored melatonin secretion in aged monkeys and humans. The review also covers Epitalon\u2019s DNA-binding mechanism \u2014 specifically its interaction with ATTTC sequences in the promoter region of the telomerase gene \u2014 providing a molecular explanation for its telomerase-activating effect.",
  },
  {
    title: "Epitalon: What Can This Peptide Do for Telomere Protection, Aging, and Longevity?",
    authors: "de Wit H, PhD \u2014 Healthspan Research Review",
    journal: "Healthspan / Gethealthspan.com",
    year: "2025",
    access: "Open Access",
    url: "https://www.gethealthspan.com/research/article/epitalon",
    summary: "A balanced independent evidence review from a PhD-led research team not affiliated with the Khavinson group. The review identifies Epitalon as a multi-pathway geroprotector that acts on five hallmarks of aging simultaneously: telomere maintenance, epigenetic regulation, oxidative stress resilience, immune recalibration, and circadian rhythm restoration \u2014 making it one of the broadest-reaching peptides studied in longevity science. The review is appropriately candid about limitations: most evidence comes from a single research group, large-scale independent clinical trials are absent, and the extraordinary claims (especially lifespan extension) require independent validation before strong conclusions can be drawn. An essential balanced read alongside the primary Khavinson literature.",
  },
];

export default function EpitalonResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Epitalon Research","description":"4 key Epitalon studies summarized in plain English. Covers telomerase activation, independent replication, pineal regulation, and longevity research.","url":"https://profpeptide.com/research/epitalon","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"Epitalon Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Epitalon Research</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 leading-relaxed max-w-xl">Key peer-reviewed studies on Epitalon (also spelled Epithalon), a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from the pineal gland peptide epithalamin. Developed by Russian gerontologist Vladimir Khavinson. Research spans telomere biology, circadian regulation, and longevity \u2014 primarily from a single Russian research group. Not FDA approved. Each summary is written in plain English. Click any title to read the full article.</p>
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg px-4 py-3 mb-8 text-xs text-amber-800 dark:text-amber-300">The majority of Epitalon research has been conducted by Professor Vladimir Khavinson and colleagues at the St. Petersburg Institute of Bioregulation and Gerontology. While the findings are compelling, independent replication by unaffiliated international laboratories remains limited \u2014 an important caveat when evaluating the evidence.</div>
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Epitalon profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, telomerase activation, pineal regulation, and the Epitalon Paradox.</p>
        <Link href="/peptides/epitalon" className="btn-primary text-sm">Epitalon Profile</Link>
      </div>

      <div className="mt-6 p-5 border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Where to buy Epitalon</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Every vendor on our vetted list is third-party tested with published Certificates of Analysis. See which research suppliers carry Epitalon.</p>
        <Link href="/best-peptide-vendors" className="text-sm font-medium text-[#0891b2] hover:underline">See vendors that carry Epitalon in our full list &rarr;</Link>
      </div>
    </div>
    </>
  );
}
