import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "NAD+ Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key NAD+ studies summarized in plain English. Covers NMN and NR human trials, cognitive function, metabolic health, and honest efficacy assessment.",
};

const studies = [
  {
    title: "Chronic Nicotinamide Riboside Supplementation Is Well-Tolerated and Elevates NAD+ in Healthy Middle-Aged and Older Adults",
    authors: "Martens CR, Denman BA, Mazzo MR, et al.",
    journal: "Nature Communications / PubMed",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29599478/",
    summary: "The landmark human trial establishing that oral NR supplementation safely and effectively raises NAD+ levels in middle-aged and older adults. In this 2\u00D76-week randomized, double-blind, placebo-controlled crossover trial, NR supplementation significantly increased whole blood NAD+ metabolism without adverse effects. The study also found initial signals of benefit for blood pressure and arterial stiffness \u2014 two key markers of cardiovascular aging \u2014 suggesting that NAD+ restoration may have downstream vascular benefits beyond metabolic function. This was the first rigorous human pharmacokinetic study confirming that oral NR meaningfully translates to elevated tissue NAD+ levels in humans.",
  },
  {
    title: "Chronic Nicotinamide Mononucleotide Supplementation Elevates Blood NAD+ Levels and Alters Muscle Function in Healthy Older Men",
    authors: "Igarashi M, Miura M, Williams E, et al.",
    journal: "NPJ Aging / PMC",
    year: "2022",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9158788/",
    summary: "A randomized, double-blind, placebo-controlled trial of 250mg daily NMN supplementation in healthy older men over 6\u201312 weeks. NMN significantly elevated whole blood NAD+ and NAD+ metabolite concentrations. There were nominally significant improvements in gait speed and left grip strength \u2014 physical performance measures relevant to age-related muscle decline (sarcopenia) \u2014 though these require validation in larger trials. The study confirmed NMN\u2019s safety and tolerability while establishing that oral NMN effectively raises NAD+ in humans, mirroring findings seen in animal models that showed broad anti-aging benefits.",
  },
  {
    title: "A Randomized Placebo-Controlled Trial of Nicotinamide Riboside in Older Adults with Mild Cognitive Impairment",
    authors: "Orr ME, Garber G, Ramsay MT, et al.",
    journal: "GeroScience / PMC",
    year: "2023",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10828186/",
    summary: "A pilot randomized controlled trial examining NR\u2019s effects on cognition in 20 older adults with mild cognitive impairment (MCI). NR at 1g/day significantly raised blood NAD+ levels and was well tolerated. While cognitive test scores did not significantly improve over 10 weeks \u2014 likely due to the small sample size and short duration \u2014 the study documented a reduction in epigenetic age as measured by PhenoAge and GrimAge clocks, a finding with implications for biological aging beyond cognition. The authors called for larger, longer-duration trials to properly assess NR\u2019s cognitive potential. This study represents the state of the human clinical evidence: NAD+ elevation is consistently demonstrated; downstream functional benefits require larger trials to confirm.",
  },
  {
    title: "The Safety and Anti-Aging Effects of Nicotinamide Mononucleotide in Human Clinical Trials \u2014 An Update",
    authors: "PubMed Research Group",
    journal: "Journal of Nutritional Biochemistry / PubMed",
    year: "2023",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/37619764/",
    summary: "A review summarizing the growing human clinical trial pipeline for NMN, covering approximately a dozen trials underway as of 2023. The paper documents how NAD+ levels decline with aging and explains why restoration is theoretically significant \u2014 NAD+ is an essential substrate for sirtuins (longevity-associated enzymes), PARPs (DNA repair enzymes), and hundreds of redox reactions governing mitochondrial function. Animal studies show NMN mitigates oxidative stress, DNA damage, neurodegeneration, and inflammatory responses. The review is candid that while preclinical data is compelling, human trials remain early-stage and benefits beyond NAD+ elevation itself need further validation in larger controlled studies.",
  },
  {
    title: "Efficacy of Oral NMN Supplementation on Glucose and Lipid Metabolism \u2014 A Systematic Review with Meta-Analysis",
    authors: "PubMed Research Group",
    journal: "Diabetes & Metabolic Syndrome / PubMed",
    year: "2024",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/39116016/",
    summary: "A 2024 meta-analysis of 12 randomized controlled trials (513 participants) examining NMN\u2019s effects on metabolic health markers. The analysis confirmed that NMN consistently and significantly elevates blood NAD+ levels \u2014 but found that most clinically relevant outcomes (fasting glucose, triglycerides, cholesterol) were not significantly different from placebo. The authors noted high risk of bias in several studies and suggested an exaggeration of NMN\u2019s metabolic benefits may exist in the field. This is an important counterbalance to enthusiastic popular coverage \u2014 NAD+ elevation is real and consistent, but the clinical translation into measurable metabolic improvements in humans remains to be firmly established.",
  },
];

export default function NADPlusResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"NAD+ Research","description":"5 key NAD+ studies summarized in plain English. Covers NMN and NR human trials, cognitive function, metabolic health, and honest efficacy assessment.","url":"https://www.profpeptide.com/research/nad-plus","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://www.profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"NAD+ Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">NAD+ Research</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 leading-relaxed max-w-xl">Key peer-reviewed studies on NAD+ (Nicotinamide Adenine Dinucleotide) and its precursors NMN (Nicotinamide Mononucleotide) and NR (Nicotinamide Riboside). NAD+ is a naturally occurring coenzyme essential to cellular energy production. NAD+ levels decline significantly with age. NMN and NR are dietary supplements \u2014 not peptides \u2014 used to raise NAD+ levels. Each summary is written in plain English. Click any title to read the full article.</p>
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg px-4 py-3 mb-8 text-xs text-amber-800 dark:text-amber-300">NAD+ is not a peptide \u2014 it is a coenzyme. NMN and NR are its precursors and are sold as dietary supplements, not research peptides. They are included here because of their significant role in longevity research and their frequent use alongside peptide protocols.</div>
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full NAD+ profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Sirtuin activation, PARP support, mitochondrial function, and NMN vs NR comparison.</p>
        <Link href="/peptides/nad-plus" className="btn-primary text-sm">NAD+ Profile</Link>
      </div>

      <div className="mt-6 p-5 border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Where to buy NAD+</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Every vendor on our vetted list is third-party tested with published Certificates of Analysis. See which research suppliers carry NAD+.</p>
        <Link href="/best-peptide-vendors" className="text-sm font-medium text-[#0891b2] hover:underline">See vendors that carry NAD+ in our full list &rarr;</Link>
      </div>
    </div>
    </>
  );
}
