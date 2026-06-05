import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/cortagen",
  title: "Cortagen — AEDP Neuro-Cortex Tetrapeptide, Khavinson Bioregulator | Prof. Peptide",
  description:
    "Cortagen (AEDP, Ala-Glu-Asp-Pro) research profile: proposed tissue-specific gene-expression and heterochromatin modulation, peptide–DNA binding, preclinical cardiac and neural findings, and candid limitations. Research use only.",
});

const faqs = [
  {
    q: "Is Cortagen FDA-approved?",
    a: "No. Cortagen is not approved by the FDA or EMA for any indication, and it is sold as a research-use-only (RUO) compound. The available evidence is entirely preclinical — rodent and in-vitro studies — and comes largely from a single research lineage (the Khavinson group). There are no human clinical trials.",
  },
  {
    q: "What is Cortagen (AEDP)?",
    a: (
      <>
        Cortagen is a synthetic neuro-cortex tetrapeptide with the sequence Ala-Glu-Asp-Pro (AEDP). It belongs to the family of Khavinson short-peptide bioregulators and was obtained by directed synthesis based on the amino-acid analysis of Cortexin, a brain-cortex peptide preparation. Note that its sequence, AEDP, is distinct from AEDG &mdash; the sequence of{" "}
        <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>. It is studied in the same short-peptide tradition as{" "}
        <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>.
      </>
    ),
  },
  {
    q: "How is Cortagen different from Epitalon and Cortexin?",
    a: "Cortexin is the brain-cortex peptide preparation that Cortagen was derived from, by directed synthesis based on its amino-acid analysis. Epitalon is AEDG (alanine-glutamate-aspartate-glycine), a different tetrapeptide associated with the pineal gland and telomerase research. Cortagen is AEDP (alanine-glutamate-aspartate-proline), with a research focus on CNS, cardiac, and immune gene expression. The one-letter difference between AEDP and AEDG matters — they are different compounds.",
  },
  {
    q: "What does the research actually show?",
    a: "It is preclinical. A cDNA-microarray study found that five days of Cortagen injections in mice altered the expression of roughly 110 known cardiac genes. The proposed molecular basis is site-specific binding of short Khavinson peptides to DNA, which modulates endonuclease activity. Cortagen has also been associated with epigenetic remodeling of 'aged' heterochromatin in aging cells, and it is included in a 2021 systematic review of peptide regulation of gene expression. None of this is human clinical evidence, and independent Western replication is limited.",
  },
  {
    q: "Is there a standard Cortagen dose?",
    a: "No. There is no validated or FDA-approved dose. Cortagen is handled as a research-use-only lyophilized powder, and the published work is preclinical animal and in-vitro research rather than human dosing studies. Prof. Peptide does not publish an injectable dosing schedule because none has been validated in controlled research.",
  },
  {
    q: "Where can I buy Cortagen?",
    a: (
      <>
        Cortagen is sold by specialty research peptide vendors for laboratory use only. Quality varies &mdash; verify a Certificate of Analysis before purchase. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

// Published Studies cards use only the four verified citations. Three carry a PubMed URL;
// the Lezhava 2015 paper is cited by its DOI resolver (no PubMed link).
const studies = [
  {
    title: "Cardiac Gene-Expression Profiling After Cortagen Injection in Mice (cDNA Microarray)",
    authors: "Anisimov SV, Boheler KR, Khavinson VKh, Anisimov VN",
    journal: "Neuro Endocrinology Letters / PubMed",
    year: "2004",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/15159690/",
    summary: "cDNA-microarray study in which five days of Cortagen injections in CBA mice changed the expression of roughly 110 known cardiac genes. The analysis compared Cortagen's common and specific effects against Vilon, Epitalon, and melatonin — situating it within the broader family of gene-expression-modulating short peptides. Preclinical.",
  },
  {
    title: "Site-Specific Binding of Short Khavinson Peptides with DNA Modulating Endonuclease Activity",
    authors: "Khavinson VKh, Fedoreyeva LI, Vanyushin BF",
    journal: "Bulletin of Experimental Biology and Medicine / PubMed",
    year: "2011",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22442805/",
    summary: "Mechanistic work showing site-specific binding of short Khavinson peptides to DNA, modulating endonuclease activity. This provides a proposed molecular basis for how tetrapeptides such as Cortagen could influence gene expression — binding DNA directly rather than acting through a conventional cell-surface receptor.",
  },
  {
    title: "Peptide Regulation of Gene Expression: A Systematic Review",
    authors: "Khavinson VK, et al.",
    journal: "Molecules / PubMed",
    year: "2021",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/34834147/",
    summary: "An open-access 2021 systematic review of peptide regulation of gene expression that surveys the Khavinson short-peptide program, including Cortagen. It collects the gene-expression and epigenetic findings across this peptide family and is a useful entry point to the primary literature.",
  },
  {
    title: "Epigenetic Regulation of 'Aged' Heterochromatin by Peptide Bioregulator Cortagen",
    authors: "Lezhava T, et al.",
    journal: "International Journal of Peptide Research and Therapeutics",
    year: "2015",
    access: "Paywalled",
    url: "https://doi.org/10.1007/s10989-014-9443-7",
    summary: "Study reporting that Cortagen is associated with epigenetic remodeling of 'aged' heterochromatin in aging cells — extending the gene-expression findings into chromatin-structure changes relevant to cellular aging. Cited here by its DOI.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Cortagen work?",
    intro:
      "Cortagen is a Khavinson short peptide proposed to act primarily in the central nervous system — with secondary effects reported in cardiac and immune tissue — by modulating tissue-specific gene expression and chromatin/heterochromatin structure. The molecular basis put forward is direct, site-specific binding of short peptides to DNA. The points below are hypotheses drawn from preclinical animal and in-vitro models, not established human mechanisms.",
    body: [
      "Tissue-Specific Gene Expression [1][3]. Cortagen is proposed to modulate tissue-specific gene expression. A cDNA-microarray study found that five days of Cortagen injections in mice altered the expression of roughly 110 known cardiac genes, with effects partly shared with and partly distinct from Vilon, Epitalon, and melatonin (Anisimov et al. 2004); a 2021 systematic review situates Cortagen within this peptide–gene-regulation framework (Khavinson et al. 2021).",
      "Direct DNA Binding [2]. The molecular basis proposed for these effects is site-specific binding of short Khavinson peptides to DNA, modulating endonuclease activity (Khavinson et al. 2011).",
      "Heterochromatin Remodeling [4]. In aging cells, Cortagen has been associated with epigenetic remodeling of 'aged' heterochromatin (Lezhava et al. 2015).",
      "Neural Inflammatory Balance (hypothesized). In preclinical neural-tissue models, Cortagen is associated with balancing pro- versus anti-inflammatory signaling, oxidative-stress regulation, and nerve-tissue repair signaling. These remain hypotheses from animal and in-vitro work, not confirmed human mechanisms.",
    ],
  },
  {
    id: "research",
    title: "What is Cortagen researched for?",
    intro:
      "Cortagen's research base is entirely preclinical — rodent and in-vitro — and comes largely from the Khavinson research lineage. There are no human randomized controlled trials. The findings below should be read as early-stage, largely single-lineage preclinical signals, not clinical evidence.",
    body: [
      "Cardiac Gene-Expression Profiling [1]. cDNA-microarray analysis after five days of Cortagen injections in CBA mice showed changes in roughly 110 known cardiac genes, compared against Vilon, Epitalon, and melatonin to map common and specific effects (Anisimov et al. 2004). Preclinical.",
      "Molecular Mechanism — Peptide–DNA Binding [2]. Site-specific binding of short Khavinson peptides to DNA, modulating endonuclease activity, provides a proposed molecular basis for the gene-expression effects (Khavinson et al. 2011).",
      "Heterochromatin and Aging [4]. Epigenetic remodeling of 'aged' heterochromatin in aging cells has been associated with Cortagen (Lezhava et al. 2015).",
      "Systematic-Review Context [3]. A 2021 open-access systematic review of peptide regulation of gene expression includes Cortagen among the short peptides surveyed (Khavinson et al. 2021).",
    ],
  },
  {
    id: "dosing",
    title: "How is Cortagen dosed?",
    intro:
      "There is no validated or FDA-approved dose for Cortagen. It is handled as a research-use-only lyophilized powder, and the published work is preclinical animal and in-vitro research rather than human dosing studies.",
    content:
      "Because no controlled human dosing studies exist, there is no established human dose, and any figure circulated for injectable Cortagen is extrapolated rather than validated. Researchers handling the lyophilized powder reconstitute it with bacteriostatic or sterile water (see storage below); any volume chosen is a generic handling convenience, not a dosing recommendation. Prof. Peptide deliberately does not publish an injectable mg or mg/kg schedule — none has been validated in controlled research.",
  },
  {
    id: "side-effects",
    title: "What are the side effects of Cortagen?",
    intro:
      "Cortagen's human safety profile is not characterized. The available evidence is entirely preclinical (rodent and in-vitro), so there is no controlled human adverse-event data to summarize. This is a Research Use Only compound and is not intended for human consumption; nothing here should be read as human-use guidance. The honest summary is that human tolerability, interactions, and long-term safety are simply unknown.",
  },
  {
    id: "storage",
    title: "How should Cortagen be stored?",
    body: [
      "Lyophilized (powder) form: store cold and desiccated, protected from light. Freeze at -20°C for long-term storage; 2–8°C is acceptable short-term.",
      "Reconstitute with bacteriostatic or sterile water for injection. Add the water slowly down the inside wall of the vial and swirl gently — do not shake.",
      "Reconstituted solution: refrigerate at 2–8°C and keep protected from light.",
      "Protect from light at all times; store in original packaging.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Cortagen research?",
    intro:
      "This is the most important section to read carefully. The Cortagen evidence base is entirely preclinical — rodent and in-vitro — and there are no human clinical trials.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Several of the key studies are older and come from a single research lineage (the Khavinson group), with some published in Russian-language journals. Independent Western replication is limited.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The mechanisms &mdash; tissue-specific gene-expression modulation, peptide&ndash;DNA binding, and heterochromatin remodeling &mdash; remain only partially characterized, and the reported cardiac, neural, and immune effects come from animal and cell models rather than controlled human research. Effect sizes and any translation to humans are unknown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cortagen is Research Use Only and is not approved by the FDA or EMA. Research-grade material is sold by specialty peptide vendors; quality varies, so verify a Certificate of Analysis before purchase. Vendor product data can also be inconsistent &mdash; one incorrect molecular formula, &ldquo;C17H27N5O8,&rdquo; circulates on some product pages; the established formula is C17H26N4O9.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Cortagen",
    intro:
      "Cortagen is not approved for human use and is sold by specialty research peptide vendors for laboratory use only. Quality varies across vendors — verify a Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-4">
        {/* TODO: wire in a peptides.gg VendorHighlightBlock here once peptides.gg is added to the vendor data. Do NOT add a fabricated carrier/note or invent a code in the meantime — use the inline /coupons link below until the vendor exists. */}
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Prof. Peptide maintains a vetted list of peptide vendors with verified discount codes. See{" "}
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            Verified Discount Codes &rarr;
          </Link>{" "}
          for current options.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Cortagen FAQ",
    node: (
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
    ),
  },
  {
    id: "references",
    title: "References",
    node: (
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anisimov SV, Boheler KR, Khavinson VKh, Anisimov VN. Modulatory effect of the tetrapeptide Cortagen on cardiac gene expression in mice (cDNA microarray). Neuro Endocrinol Lett. 2004;25(1-2):87-93. PMID 15159690.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15159690/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/15159690/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson VKh, Fedoreyeva LI, Vanyushin BF. Site-specific binding of short peptides with DNA modulates endonuclease activity. Bull Exp Biol Med. 2011;151(1):66-70. PMID 22442805.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22442805/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22442805/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson VK, et al. Peptide Regulation of Gene Expression: A Systematic Review. Molecules. 2021;26(22):7053. PMID 34834147. (Open Access){" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/34834147/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/34834147/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Lezhava T, et al. Epigenetic Regulation of &ldquo;Aged&rdquo; Heterochromatin by Peptide Bioregulator Cortagen. Int J Pept Res Ther. 2015;21:157-163. DOI 10.1007/s10989-014-9443-7.{" "}
          <a href="https://doi.org/10.1007/s10989-014-9443-7" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://doi.org/10.1007/s10989-014-9443-7
          </a>
        </li>
      </ol>
    ),
  },
  {
    id: "studies",
    title: "Published Studies",
    node: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper. The evidence is preclinical and largely from a single research lineage.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function CortagenPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Cortagen","description":"Cortagen (AEDP, Ala-Glu-Asp-Pro) research profile: proposed tissue-specific gene-expression and heterochromatin modulation, peptide–DNA binding, preclinical cardiac and neural findings, and candid limitations. Research use only.","url":"https://profpeptide.com/peptides/cortagen","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Cortagen"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Cortagen</h1>
        <span className="tag">Bioregulators</span>
        <span className="tag">Research Use Only</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: June 4, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> AEDP, H-Ala-Glu-Asp-Pro-OH, Ala-Glu-Asp-Pro
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Khavinson short-peptide bioregulator (synthetic neuro-cortex tetrapeptide)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Molecular Profile:</span> H-Ala-Glu-Asp-Pro-OH (AEDP) &middot; C17H26N4O9 &middot; ~430.41 g/mol &middot; PubChem CID 18439621
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Form &amp; Origin:</span> Lyophilized synthetic tetrapeptide; obtained by directed synthesis based on amino-acid analysis of the brain-cortex peptide preparation Cortexin
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research Use Only; not FDA- or EMA-approved
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Cortagen?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Cortagen is a synthetic neuro-cortex tetrapeptide (Ala-Glu-Asp-Pro, AEDP) developed within the Khavinson short-peptide bioregulator program. It was obtained by directed synthesis based on the amino-acid analysis of Cortexin, a brain-cortex peptide preparation. It is proposed to act primarily in the central nervous system &mdash; with secondary effects reported in cardiac and immune tissue &mdash; by modulating tissue-specific gene expression and chromatin/heterochromatin structure. In preclinical work it has been associated with balancing pro- versus anti-inflammatory signaling in neural tissue, oxidative-stress regulation, and nerve-tissue repair signaling; the proposed molecular basis is site-specific binding of short peptides to DNA. The evidence base is entirely preclinical (rodent and in-vitro) and comes largely from the Khavinson research lineage; there are no human randomized controlled trials. Note that its sequence, AEDP, is distinct from AEDG (the sequence of{" "}
            <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>). It sits in the same short-peptide family as{" "}
            <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>{" "}
            and{" "}
            <Link href="/peptides/thymogen" className="text-[#0891b2] hover:underline">Thymogen</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modulation of tissue-specific gene expression (cardiac gene profiling in mice; ~110 genes)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Proposed site-specific peptide–DNA binding as the molecular basis for gene-expression effects</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Epigenetic remodeling of &lsquo;aged&rsquo; heterochromatin in aging cells (preclinical)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Associated in preclinical neural models with inflammatory balance, oxidative-stress regulation, and nerve-tissue repair signaling (hypothesized)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> No validated or FDA-approved dose exists. Cortagen is handled as a research-use-only lyophilized powder, and the published evidence is preclinical animal and in-vitro research, not human dosing. Prof. Peptide does not publish an injectable dosing schedule because none has been validated in controlled research.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Cortagen is sold by specialty peptide vendors for laboratory use only. PP maintains a vetted list of vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.intro && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {s.intro}
              </p>
            )}
            {s.node && s.node}
            {s.content && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Bioregulators", "Neuro-Cortex Peptide", "Khavinson Peptide", "Research Use Only"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>


      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        {/* TODO: add the Cardiogen Related link once that profile goes live (it completes the four-spoke bioregulator set). */}
        <Link href="/peptides/pinealon" className="text-sm font-medium text-[#0891b2] hover:underline">Pinealon</Link>
        <Link href="/peptides/thymogen" className="text-sm font-medium text-[#0891b2] hover:underline">Thymogen</Link>
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
        <Link href="/peptides/semax" className="text-sm font-medium text-[#0891b2] hover:underline">Semax</Link>
        <Link href="/peptides/selank" className="text-sm font-medium text-[#0891b2] hover:underline">Selank</Link>
        </div>
        <Link href="/bioregulators" className="text-sm font-medium text-[#0891b2] hover:underline mt-3 inline-block">Read the bioregulator guide &rarr;</Link>
      </div>

      {/* TODO: add a Bioregulator Comparisons block (e.g. Cortagen vs Cardiogen / Pinealon) once those comparison pages are built and the four-spoke set (incl. Cardiogen) is live. */}

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          Need to calculate a dose?
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution
          and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Cortagen" pagePath="/peptides/cortagen" />
    </div>
    </>
  );
}
