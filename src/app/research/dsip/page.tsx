import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhereToBuy from "@/components/WhereToBuy";

export const metadata = {
  alternates: { canonical: "/research/dsip" },
  title: "DSIP Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "Key peer-reviewed studies on DSIP (Delta Sleep-Inducing Peptide), a nonapeptide with over 50 years of research history spanning sleep, stress, and hormone modulation.",
};

const studies = [
  {
    title: "Characterization of a delta-electroencephalogram (-sleep)-inducing peptide",
    authors: "Schoenenberger GA, Monnier M.",
    journal: "PNAS",
    year: "1977",
    access: "Open Access",
    url: "https://www.pnas.org/doi/10.1073/pnas.74.3.1282",
    summary:
      "The foundational paper that isolated and characterized DSIP from rabbit cerebral venous blood. Researchers demonstrated that the nonapeptide induced increases in delta-wave EEG activity when administered to rabbits, establishing both the compound and its name.",
  },
  {
    title: "Delta-sleep-inducing peptide (DSIP): a review",
    authors: "Graf MV, Kastin AJ.",
    journal: "Neuroscience and Biobehavioral Reviews",
    year: "1984",
    access: "Abstract available",
    url: "https://www.sciencedirect.com/science/article/abs/pii/0149763484900239",
    summary:
      "A comprehensive review synthesizing the first decade of DSIP research. The paper covers DSIP\u2019s effects on sleep, hormone release, stress response, and thermoregulation across multiple species.",
  },
  {
    title: "Delta sleep-inducing peptide (DSIP): a still unresolved riddle",
    authors: "Kovalzon VM, Strekalova TV.",
    journal: "Journal of Neurochemistry",
    year: "2006",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1471-4159.2006.03693.x",
    summary:
      "A critical review examining why DSIP remains incompletely understood despite decades of research. The authors discuss the lack of a definitively identified receptor, the inconsistency of sleep findings, and the broad range of reported effects.",
  },
  {
    title: "The effects of DSIP on wakefulness and sleep patterns in the cat",
    authors: "Susi\u0107 V, Masirevic G, Totic S.",
    journal: "Brain Research",
    year: "1987",
    access: "Abstract available",
    url: "https://www.sciencedirect.com/science/article/abs/pii/0006899387906973",
    summary:
      "A classic experimental study examining DSIP\u2019s effects on sleep architecture in cats using EEG recording. The researchers documented significant increases in slow-wave sleep and reduced sleep latency after DSIP administration.",
  },
  {
    title: "Delta-sleep-inducing peptide: an update",
    authors: "Graf MV, Kastin AJ.",
    journal: "Peptides",
    year: "1986",
    access: "Abstract available",
    url: "https://www.sciencedirect.com/science/article/abs/pii/0196978186901494",
    summary:
      "A follow-up review to the 1984 paper, summarizing the second wave of DSIP research and proposing refinements to the understanding of its mechanism.",
  },
];

export default function DSIPResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"DSIP Research","description":"Key peer-reviewed studies on DSIP (Delta Sleep-Inducing Peptide), a nonapeptide with over 50 years of research history spanning sleep, stress, and hormone modulation.","url":"https://profpeptide.com/research/dsip","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"DSIP Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">DSIP Research</h1>
        <span className="tag">Sleep &amp; Recovery</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on DSIP (Delta Sleep-Inducing Peptide), a nonapeptide with over 50 years of research history. The literature spans sleep, stress, and hormone modulation, though findings have been inconsistent across studies. Each summary is written in plain English.
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full DSIP profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, sleep architecture research, stress modulation, and stacking.</p>
        <Link href="/peptides/dsip" className="btn-primary text-sm">DSIP Profile</Link>
      </div>

      <WhereToBuy peptide="dsip" />
    </div>
    </>
  );
}
