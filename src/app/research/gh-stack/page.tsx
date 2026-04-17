import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "GH Stack Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "4 key GH Stack studies summarized in plain English. Covers CJC-1295 + Ipamorelin dual-pathway synergy and GHRH+GHRP combination evidence.",
};

const studies = [
  {
    title: "Prolonged Stimulation of GH and IGF-I Secretion by CJC-1295 in Healthy Adults",
    authors: "Ionescu M, Frohman LA",
    journal: "Journal of Clinical Endocrinology & Metabolism / PubMed",
    year: "2006",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
    summary: "The primary human study of CJC-1295 \u2014 the GHRH component of the GH Stack. Demonstrated sustained, dose-dependent GH and IGF-1 elevation lasting 6\u20138 days from a single injection, with IGF-1 increasing 1.5\u20133 fold above baseline. CJC-1295\u2019s albumin-binding mechanism provides the prolonged \u201CGH amplitude amplification\u201D that forms one half of the stack\u2019s dual-pathway mechanism.",
  },
  {
    title: "Ipamorelin, the First Selective Growth Hormone Secretagogue",
    authors: "Raun K, Hansen BS, Johansen NL, et al.",
    journal: "European Journal of Endocrinology / PubMed",
    year: "1998",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    summary: "The landmark selectivity study for Ipamorelin \u2014 the GHRP component of the GH Stack. Established that Ipamorelin produces robust GH release with approximately 90% less cortisol elevation and no meaningful ACTH or prolactin response compared to older GHRPs. This clean hormonal profile is why Ipamorelin became the default GHRP for stacking \u2014 it adds GH pulse triggering through the ghrelin receptor without the cortisol and appetite side effects of GHRP-6 or GHRP-2.",
  },
  {
    title: "GHRH+GHRP Synergy \u2014 Co-Administration of GHRH Analogs with GHSR Agonists",
    authors: "J\u00F8rgensen JOL, et al.",
    journal: "Growth Hormone & IGF Research / PubMed",
    year: "2001",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/11420165/",
    summary: "A mechanistic study demonstrating supra-additive GH release when GHRH analogs and GHSR agonists are co-administered \u2014 the scientific foundation for the GH Stack\u2019s design. Co-administration produced 2\u20134x greater GH area under the curve compared to either compound given in isolation, with the effect being additive to synergistic depending on timing. The biological explanation: CJC-1295 activates GHRHR and raises intracellular cAMP (via PKA), while Ipamorelin activates GHS-R1a and raises intracellular calcium (via PKC). When both second messenger cascades fire simultaneously, the somatotroph cell response is amplified beyond what either signal produces alone.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications / Wiley",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review of the GH secretagogue class providing clinical context for the CJC-1295 + Ipamorelin combination. The paper covers the evolution from native GHRH and ghrelin to long-acting analogs and selective GHRPs \u2014 documenting how the dual-pathway approach became the preferred research and clinical protocol for GH axis optimization. It also addresses why the combination is considered safer than direct GH administration \u2014 stimulating endogenous production preserves natural feedback mechanisms and avoids supraphysiological IGF-1 spikes.",
  },
];

export default function GHStackResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GH Stack Research","description":"4 key GH Stack studies summarized in plain English. Covers CJC-1295 + Ipamorelin dual-pathway synergy and GHRH+GHRP combination evidence.","url":"https://profpeptide.com/research/gh-stack","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"GH Stack Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">GH Stack Research</h1>
        <span className="tag">Growth Hormone</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 leading-relaxed max-w-xl">The GH Stack combines CJC-1295 and Ipamorelin to stimulate growth hormone release through two complementary pathways simultaneously. This is the most widely researched growth hormone secretagogue combination. Research on the combination is supported by both individual compound evidence and GHRH+GHRP synergy studies. Each summary is written in plain English. Click any title to read the full article.</p>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg px-4 py-3 mb-8 text-xs text-amber-800 dark:text-amber-300">
        The GH Stack research base draws from individual studies on CJC-1295 and Ipamorelin, plus published research on GHRH+GHRP synergistic combinations. For individual compound research, see the{" "}
        <Link href="/research/cjc-1295" className="underline font-medium">CJC-1295 Research page</Link> and the{" "}
        <Link href="/research/ipamorelin" className="underline font-medium">Ipamorelin Research page</Link>.
      </div>

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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full GH Stack profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">How CJC-1295 and Ipamorelin work together, synergy mechanisms, and research limitations.</p>
        <Link href="/peptides/gh-stack" className="btn-primary text-sm">GH Stack Profile</Link>
      </div>

      <div className="mt-6 p-5 border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Where to buy GH Stack</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Every vendor on our vetted list is third-party tested with published Certificates of Analysis. See which research suppliers carry GH Stack.</p>
        <Link href="/best-peptide-vendors" className="text-sm font-medium text-[#0891b2] hover:underline">See vendors that carry GH Stack in our full list &rarr;</Link>
      </div>
    </div>
    </>
  );
}
