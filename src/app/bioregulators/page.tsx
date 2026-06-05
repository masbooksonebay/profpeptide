import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/bioregulators",
  title: "Bioregulator Peptides (Khavinson Peptides) — Research Guide | Prof. Peptide",
  description:
    "A research guide to short-peptide bioregulators (Khavinson peptides): the proposed gene-regulation mechanism, synthetic analogs vs. organ extracts, and the individual compounds (Epitalon, Pinealon, Cortagen, Thymogen, Cardiogen). Research use only.",
});

const lineup = [
  {
    name: "Epitalon",
    slug: "epitalon",
    sequence: "Ala-Glu-Asp-Gly (AEDG)",
    tissue: "Pineal gland",
    studied: "telomerase activity, melatonin/circadian regulation, longevity (preclinical; limited human pilots)",
  },
  {
    name: "Pinealon",
    slug: "pinealon",
    sequence: "Glu-Asp-Arg (EDR)",
    tissue: "Central nervous system",
    studied: "neuroprotection, antioxidant/anti-apoptotic effects, cognition",
  },
  {
    name: "Cortagen",
    slug: "cortagen",
    sequence: "Ala-Glu-Asp-Pro (AEDP)",
    tissue: "Brain cortex / CNS",
    studied: "neural gene-expression, nerve-tissue repair, inflammatory/oxidative balance",
  },
  {
    name: "Thymogen",
    slug: "thymogen",
    sequence: "Glu-Trp (EW)",
    tissue: "Thymus / immune system",
    studied: "immunomodulation (T-cell differentiation); also studied as IM-862/Oglufanide",
  },
  {
    name: "Cardiogen",
    slug: "cardiogen",
    sequence: "Ala-Glu-Asp-Arg (AEDR)",
    tissue: "Heart / cardiovascular",
    studied: "cardiomyocyte proliferation, anti-fibrotic effects, cardioprotection (preclinical)",
  },
];

const faqs = [
  {
    q: "What are Khavinson peptides?",
    a: "Khavinson peptides are very short peptides — typically 2 to 4 amino acids — developed primarily by Vladimir Khavinson and the St. Petersburg Institute of Bioregulation and Gerontology. They are hypothesized to act as tissue-specific bioregulators that influence gene expression. The term covers both the original organ extracts and the later synthetic, defined-sequence analogs such as Epitalon, Pinealon, Cortagen, Thymogen, and Cardiogen.",
  },
  {
    q: "Are bioregulators FDA-approved?",
    a: "No. None of the short-peptide bioregulators discussed here are approved by the FDA or EMA for human use, and they are not dietary supplements or drugs. They are sold strictly for research use only (RUO).",
  },
  {
    q: "How do they differ from organ extracts?",
    a: "The original preparations — Epithalamin (pineal), Cortexin (brain cortex), and Thymalin (thymus) — are natural multi-peptide mixtures isolated from animal organs. The synthetics (Epitalon, Pinealon, Cortagen, Thymogen, Cardiogen) are single, chemically defined short-peptide sequences synthesized to reproduce a specific activity of the parent extract. Extracts are mixtures; the synthetics are one defined sequence each.",
  },
  {
    q: "Is there human evidence?",
    a: "It is limited. The great majority of the data is preclinical (rodent and in-vitro). A small number of human pilot studies exist for some compounds — most notably Epitalon — but the body of work is concentrated in a single research lineage with limited independent Western replication, and much of it is published in Russian-language or specialist gerontology journals. There are no large, independent randomized controlled trials.",
  },
  {
    q: "Are bioregulators peptide hormones?",
    a: "No. They are not hormones and do not act as hormone-receptor agonists. The proposed mechanism is regulation of gene expression via direct, site-specific interaction with DNA and chromatin — a different model from hormone signaling. This remains a hypothesis supported mainly by preclinical work.",
  },
  {
    q: "How are they studied?",
    a: "Research uses cell and tissue cultures, rodent models, and molecular assays of peptide–DNA binding and gene expression. The umbrella mechanism (peptide regulation of gene expression) is reviewed in the references cited in the mechanism section above. For compound-specific findings, see each peptide's individual profile.",
  },
];

const tocSections = [
  { id: "mechanism", title: "The bioregulation hypothesis" },
  { id: "synthetic-vs-extracts", title: "Synthetic peptides vs. organ extracts" },
  { id: "lineup", title: "The bioregulator line-up" },
  { id: "evidence", title: "What the evidence shows (and its limits)" },
  { id: "where-to-research", title: "Where to research these" },
  { id: "faq", title: "Frequently asked questions" },
];

export default function BioregulatorsPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Bioregulator Peptides (Khavinson Peptides): A Research Guide","description":"A research guide to short-peptide bioregulators (Khavinson peptides): the proposed gene-regulation mechanism, synthetic analogs vs. organ extracts, and the individual compounds. Research use only.","url":"https://profpeptide.com/bioregulators","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Bioregulator Peptides"}]}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map((f) => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <span className="tag mb-3 inline-block">Research Guide</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-2">
        Bioregulator Peptides (Khavinson Peptides): A Research Guide
      </h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-6">
        Last reviewed: June 4, 2026
      </p>

      <div id="intro" className="scroll-mt-20">
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Bioregulators are very short peptides &mdash; typically 2 to 4 amino acids &mdash; developed primarily by Vladimir Khavinson and the St. Petersburg Institute of Bioregulation and Gerontology. They are hypothesized to act as tissue-specific regulators of gene expression: small enough to enter cells and interact directly with DNA, nudging a given tissue&apos;s own genes rather than acting as a hormone or receptor agonist.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            It is important to be plain about the state of the science. This is a research hypothesis, not an established mechanism. The evidence is largely preclinical (rodent and in-vitro) and concentrated in a single research lineage, with limited independent Western replication. None of these compounds is approved by the FDA or EMA for human use &mdash; they are sold strictly for research use only (RUO). Nothing in this guide is human-use guidance. For the individual compounds, see{" "}
            <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>,{" "}
            <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>,{" "}
            <Link href="/peptides/cortagen" className="text-[#0891b2] hover:underline">Cortagen</Link>,{" "}
            <Link href="/peptides/thymogen" className="text-[#0891b2] hover:underline">Thymogen</Link>, and{" "}
            <Link href="/peptides/cardiogen" className="text-[#0891b2] hover:underline">Cardiogen</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        <div id="mechanism" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            The bioregulation hypothesis
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              The central idea is &ldquo;peptide regulation of gene expression.&rdquo; Because these peptides are so short, the hypothesis holds that they can penetrate the cell and the nucleus and bind DNA and chromatin in a site-specific way, modulating which tissue-specific genes are transcribed. In this model the peptide is not a signaling hormone but a direct regulator of gene activity. This should be read as a hypothesis with preclinical support, not a confirmed mechanism.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              The umbrella model is reviewed in a 2021 open-access systematic review &mdash; Khavinson VK et al., &ldquo;Peptide Regulation of Gene Expression: A Systematic Review,&rdquo; Molecules. 2021;26(22):7053. PMID 34834147.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/34834147/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
                https://pubmed.ncbi.nlm.nih.gov/34834147/
              </a>
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              The proposed molecular basis &mdash; site-specific binding of short peptides to DNA, modulating endonuclease activity &mdash; was reported by Khavinson VKh, Fedoreyeva LI, Vanyushin BF. Bull Exp Biol Med. 2011;151(1):66-70. PMID 22442805.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/22442805/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
                https://pubmed.ncbi.nlm.nih.gov/22442805/
              </a>
            </p>
          </div>
        </div>

        <div id="synthetic-vs-extracts" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Synthetic peptides vs. organ extracts
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              The field has two distinct generations. The original preparations were natural multi-peptide complexes isolated directly from animal organs: Epithalamin from the pineal gland, Cortexin from the brain cortex, and Thymalin from the thymus. These are mixtures &mdash; collections of many peptides whose exact composition reflects the source tissue.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              The later compounds are synthesized, defined-sequence short-peptide analogs &mdash; Epitalon, Pinealon, Cortagen, Thymogen, and Cardiogen. Each is a single, chemically defined sequence developed to reproduce a specific activity associated with the parent extract. The practical distinction matters for research: an extract is a variable mixture, while a synthetic bioregulator is one reproducible sequence.
            </p>
          </div>
        </div>

        <div id="lineup" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            The bioregulator line-up
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0 mb-4">
            <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide</th>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Sequence</th>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Tissue / system</th>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Studied for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                {lineup.map((p) => (
                  <tr key={p.slug} className="even:bg-gray-50 dark:even:bg-[#1e293b]/50 align-top">
                    <td className="px-4 py-3 font-medium whitespace-nowrap">
                      <Link href={`/peptides/${p.slug}`} className="text-[#0891b2] hover:underline">{p.name}</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">{p.sequence}</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-slate-300">{p.tissue}</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-slate-300">{p.studied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The Khavinson family includes additional organ-specific bioregulators beyond the five above that are not yet individually profiled here.
          </p>
        </div>

        <div id="evidence" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            What the evidence shows (and its limits)
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Most of the data is preclinical &mdash; rodent studies and in-vitro tissue culture. A small number of human pilot studies exist for some compounds, most notably Epitalon, but they are not large, independent randomized controlled trials.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Two caveats are worth keeping front of mind. First, the body of work is concentrated in a single research lineage, with limited independent Western replication, and much of it is published in Russian-language or specialist gerontology journals. Second, none of these compounds has FDA or EMA approval; they are sold strictly for research use only. Treat the mechanisms and effects described across these profiles as research-stage hypotheses, not settled clinical facts.
            </p>
          </div>
        </div>

        <div id="where-to-research" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Where to research these
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              The bioregulator line is more specialized than the mainstream peptide catalog, so not every vendor carries it. Among the vetted vendors, peptides.gg carries the deep Khavinson bioregulator line &mdash; Epitalon, Pinealon, Cortagen, Thymogen, Cardiogen, and more. See the{" "}
              <Link href="/coupons/peptides-gg" className="text-[#0891b2] hover:underline">peptides.gg discount code (PROF15) &rarr;</Link>{" "}
              for current options, and verify a Certificate of Analysis before purchase. New to peptide research?{" "}
              <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
            </p>
          </div>
        </div>

        <div id="faq" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
                  {f.q}
                </h3>
                <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bioregulator Profiles</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
          <Link href="/peptides/pinealon" className="text-sm font-medium text-[#0891b2] hover:underline">Pinealon</Link>
          <Link href="/peptides/cortagen" className="text-sm font-medium text-[#0891b2] hover:underline">Cortagen</Link>
          <Link href="/peptides/thymogen" className="text-sm font-medium text-[#0891b2] hover:underline">Thymogen</Link>
          <Link href="/peptides/cardiogen" className="text-sm font-medium text-[#0891b2] hover:underline">Cardiogen</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Bioregulator Peptides" pagePath="/bioregulators" />
    </div>
    </>
  );
}
