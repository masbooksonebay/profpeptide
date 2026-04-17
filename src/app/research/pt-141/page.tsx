import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "PT-141 Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key PT-141 studies summarized in plain English. Covers FDA-approved RECONNECT trials, long-term safety, male ED evidence, and mechanism review.",
};

const studies = [
  {
    title: "PT-141: A Melanocortin Agonist for the Treatment of Sexual Dysfunction",
    authors: "Molinoff PB, Shadiack AM, Earle D, Diamond LE, Quon CY",
    journal: "Annals of the New York Academy of Sciences / PubMed",
    year: "2003",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/12851303/",
    summary: "The foundational review establishing PT-141\u2019s mechanism and clinical rationale. PT-141 was developed as a next-generation analog of Melanotan II with higher selectivity for MC4R \u2014 the melanocortin receptor subtype most involved in sexual behavior \u2014 and a better safety profile. The paper documents PT-141\u2019s central nervous system mechanism: unlike PDE5 inhibitors (Viagra, Cialis) which increase blood flow to the genitals, PT-141 acts in the hypothalamus to modulate the neural pathways governing desire and arousal itself. This distinction is clinically important \u2014 it means PT-141 can work in patients where vascular mechanisms are intact but desire is absent, or where PDE5 inhibitors have failed. This paper set the stage for the full clinical development program that led to FDA approval.",
  },
  {
    title: "Bremelanotide for the Treatment of Hypoactive Sexual Desire Disorder \u2014 Two Randomized Phase 3 Trials (RECONNECT)",
    authors: "Kingsberg SA, Clayton AH, Portman D, et al.",
    journal: "Obstetrics & Gynecology / PMC",
    year: "2019",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6819021/",
    summary: "The pivotal Phase 3 trials that led to FDA approval of bremelanotide (Vyleesi) in 2019 \u2014 making PT-141 only the second drug ever approved for female sexual desire disorder, and the first with a non-hormonal, CNS mechanism. Two identical randomized, double-blind, placebo-controlled trials (RECONNECT 301 and 302) enrolled premenopausal women with HSDD. Bremelanotide 1.75mg subcutaneous significantly improved both the Female Sexual Function Index desire domain score and the Female Sexual Distress Scale compared to placebo at 24 weeks. Nausea was the most common adverse event (40% bremelanotide vs 1.3% placebo), but was generally mild and transient. The safety profile was otherwise favorable with small, transient blood pressure increases that resolved within 8\u201310 hours.",
  },
  {
    title: "Long-Term Safety and Efficacy of Bremelanotide for Hypoactive Sexual Desire Disorder",
    authors: "Kingsberg SA, et al. \u2014 RECONNECT Study Group",
    journal: "Obstetrics & Gynecology / PMC",
    year: "2019",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6819023/",
    summary: "The 52-week open-label extension of the RECONNECT trials, examining bremelanotide\u2019s long-term safety and sustained efficacy. No new safety signals emerged over 52 weeks of continued use, and improvements in HSDD symptoms were maintained throughout the extension period. This long-term data was critical for the FDA approval package \u2014 demonstrating that the benefits observed in the 24-week trials are sustained with continued treatment and that no unexpected safety concerns emerge over time. For women using bremelanotide on an as-needed basis (up to 8 doses per month), the compound maintained its efficacy without tolerance development or new adverse effects.",
  },
  {
    title: "Bremelanotide for Female Sexual Dysfunction \u2014 Mechanism, Clinical Trials, and FDA Approval",
    authors: "PMC Research Group",
    journal: "PMC / Frontiers in Pharmacology",
    year: "2022",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8788464/",
    summary: "A comprehensive review covering bremelanotide\u2019s full development history, mechanism of action, and clinical evidence across both female and male sexual dysfunction. The paper documents the earliest clinical study in women with HSDD (2006), the Phase 2b dose-finding trials that identified 1.75mg as the optimal dose, and the RECONNECT Phase 3 results. It also covers PT-141\u2019s off-label use in men \u2014 including studies showing efficacy in sildenafil non-responders and a synergistic effect when combined with PDE5 inhibitors. The review explains the different mechanisms in men vs women: in men, MC3R/MC4R stimulation causes nitric oxide release and direct vasodilation in penile tissue; in women, the pathway is neurochemical \u2014 modulating the neurotransmitter imbalance that underlies reduced desire in HSDD.",
  },
  {
    title: "Novel Emerging Therapies for Erectile Dysfunction \u2014 Bremelanotide Section",
    authors: "World Journal of Men\u2019s Health Research Group",
    journal: "World Journal of Men\u2019s Health",
    year: "2021",
    access: "Open Access",
    url: "https://wjmh.org/DOIx.php?id=10.5534/wjmh.200007",
    summary: "A review of PT-141\u2019s evidence for male erectile dysfunction \u2014 the off-label application that drives most research peptide use of this compound. The paper documents Phase 1 and 2 clinical data: at 20mg intranasal dosing, PT-141 produced significantly greater duration of base rigidity \u226580% vs placebo. In men with ED who were non-responsive to sildenafil, 34% of the PT-141 group reported significantly better results vs 9% placebo \u2014 a clinically meaningful response rate in a notoriously treatment-resistant population. A combination study showed PT-141 plus sildenafil produced a significantly greater erectile response than sildenafil alone. The paper also covers the pivot from intranasal to subcutaneous delivery after blood pressure concerns with the nasal route, and notes ongoing Phase 2 trials investigating a co-formulation of bremelanotide plus a PDE5 inhibitor for male ED.",
  },
];

export default function PT141ResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"PT-141 Research","description":"5 key PT-141 studies summarized in plain English. Covers FDA-approved RECONNECT trials, long-term safety, male ED evidence, and mechanism review.","url":"https://profpeptide.com/research/pt-141","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"PT-141 Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">PT-141 Research</h1>
        <span className="tag">Sexual Health</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on PT-141 (Bremelanotide), a cyclic heptapeptide melanocortin receptor agonist. PT-141 is FDA-approved as Vyleesi for hypoactive sexual desire disorder (HSDD) in premenopausal women \u2014 making it one of the few research peptides with full FDA approval. It is also used off-label for male sexual dysfunction. Each summary is written in plain English. Click any title to read the full article.</p>
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full PT-141 profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, FDA approval, pharmacokinetics, and relationship to Melanotan II.</p>
        <Link href="/peptides/pt-141" className="btn-primary text-sm">PT-141 Profile</Link>
      </div>

      <div className="mt-6 p-5 border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Where to buy PT-141</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Every vendor on our vetted list is third-party tested with published Certificates of Analysis. See which research suppliers carry PT-141.</p>
        <Link href="/best-peptide-vendors" className="text-sm font-medium text-[#0891b2] hover:underline">See vendors that carry PT-141 in our full list &rarr;</Link>
      </div>
    </div>
    </>
  );
}
