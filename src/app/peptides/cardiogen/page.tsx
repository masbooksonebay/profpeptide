import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/cardiogen",
  title: "Cardiogen (AEDR): Cardiac Bioregulator Peptide Guide",
  description:
    "Cardiogen (AEDR) is a cardiac Khavinson bioregulator peptide. Research profile: mechanism, preclinical cardioprotection studies, dosing, and limits. RUO.",
});

const faqs = [
  {
    q: "Is Cardiogen FDA-approved?",
    a: "No. Cardiogen is not approved by the FDA or EMA for any indication, and it has no approved human therapeutic use. It is sold as a research-use-only (RUO) compound. The available evidence is entirely preclinical — rodent and in-vitro tissue-culture studies — and comes largely from a single research lineage (the Khavinson group). There are no human clinical trials.",
  },
  {
    q: "What is Cardiogen (AEDR)?",
    a: (
      <>
        Cardiogen is a synthetic cardiovascular tetrapeptide with the sequence Ala-Glu-Asp-Arg (AEDR). It belongs to the family of Khavinson short-peptide bioregulators and is studied as an organ-targeted bioregulator in cardiac systems. Its sequence, AEDR, is distinct from AEDP (the sequence of{" "}
        <Link href="/peptides/cortagen" className="text-[#0891b2] hover:underline">Cortagen</Link>) and AEDG (the sequence of{" "}
        <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>). It is studied in the same short-peptide tradition as{" "}
        <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>{" "}
        and{" "}
        <Link href="/peptides/thymogen" className="text-[#0891b2] hover:underline">Thymogen</Link>.
      </>
    ),
  },
  {
    q: "How is Cardiogen related to the other Khavinson bioregulators?",
    a: (
      <>
        Cardiogen is one of the organ-targeted short peptides in the Khavinson program, differentiated by sequence and target tissue: Cardiogen (AEDR) is cardiac-focused,{" "}
        <Link href="/peptides/cortagen" className="text-[#0891b2] hover:underline">Cortagen</Link>{" "}
        (AEDP) is neuro-cortex-focused,{" "}
        <Link href="/peptides/thymogen" className="text-[#0891b2] hover:underline">Thymogen</Link>{" "}
        (Glu-Trp) is thymic/immune,{" "}
        <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>{" "}
        (Glu-Asp-Arg) is CNS-focused, and{" "}
        <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>{" "}
        (AEDG) is associated with the pineal gland. They share the short-peptide bioregulator framing but differ in sequence and the tissue each was studied in.
      </>
    ),
  },
  {
    q: "What does the research actually show?",
    a: "It is preclinical. In myocardial tissue culture from young and old rats, Cardiogen stimulated cell proliferation, and immunohistochemistry showed decreased p53 — suggesting suppression of apoptosis. A US patent describes cardioprotective activity across rodent models (coronary-artery-ligation infarction, ischemia-reperfusion, adrenaline dystrophy, and arrhythmia), and a separate study reported a tumor-modifying effect on M-1 sarcoma in senescent rats. The proposed molecular basis is site-specific binding of short peptides to DNA. None of this is human clinical evidence, much of it is in Russian-language journals, and independent Western replication is limited.",
  },
  {
    q: "Is there a standard Cardiogen dose?",
    a: "No. There is no validated or FDA-approved dose. Cardiogen is handled as a research-use-only lyophilized powder, and the published work is preclinical animal and in-vitro tissue-culture research rather than human dosing studies. Prof. Peptide does not publish an injectable dosing schedule because none has been validated in controlled research.",
  },
  {
    q: "Where can I buy Cardiogen?",
    a: (
      <>
        Cardiogen is sold by specialty research peptide vendors for laboratory use only. Quality varies &mdash; verify a Certificate of Analysis before purchase. Peptides.gg carries the Khavinson bioregulator line &mdash; see the{" "}
        <Link href="/coupons/peptides-gg" className="text-[#0891b2] hover:underline">
          Peptides.gg discount code (PROF15) &rarr;
        </Link>
        .
      </>
    ),
  },
];

// Published Studies cards use only the four verified peer-reviewed citations, each with a real
// PubMed URL. The US patent (7,662,789) is cited in prose only — no PMID/URL — not as a study card.
const studies = [
  {
    title: "Cardiogen Stimulates Proliferation in Myocardial Tissue Culture (Young and Old Rats); Decreased p53",
    authors: "Chalisova NI, et al.",
    journal: "Advances in Gerontology / PubMed",
    year: "2009",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/20210190/",
    summary: "In myocardial tissue culture taken from both young and old rats, Cardiogen stimulated cell proliferation. Immunohistochemistry showed decreased p53 expression, which the authors interpreted as inhibition of apoptosis. A Russian-language preclinical study and one of the core sources for the cardiomyocyte-proliferation and anti-apoptotic framing.",
  },
  {
    title: "Tumor-Modifying Effect of Cardiogen on M-1 Sarcoma in Senescent Rats",
    authors: "Levdik NV, Knyazkin IV",
    journal: "Bulletin of Experimental Biology and Medicine / PubMed",
    year: "2009",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/20396706/",
    summary: "A study reporting a tumor-modifying effect of Cardiogen on M-1 sarcoma in senescent rats. Preclinical, and outside the cardiac focus of the compound's main research line, but part of the published Cardiogen literature.",
  },
  {
    title: "Site-Specific Binding of Short Peptides (incl. AEDR) with DNA Modulating Endonuclease Activity",
    authors: "Khavinson VKh, Fedoreyeva LI, Vanyushin BF",
    journal: "Bulletin of Experimental Biology and Medicine / PubMed",
    year: "2011",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22442805/",
    summary: "Mechanistic work showing site-specific binding of short Khavinson peptides — including AEDR — to DNA, modulating eukaryotic endonuclease activity. This provides a proposed molecular basis for how tetrapeptides such as Cardiogen could influence gene expression by binding DNA directly rather than acting through a conventional cell-surface receptor.",
  },
  {
    title: "Peptide Regulation of Gene Expression: A Systematic Review",
    authors: "Khavinson VK, et al.",
    journal: "Molecules / PubMed",
    year: "2021",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/34834147/",
    summary: "An open-access 2021 systematic review of peptide regulation of gene expression that surveys the Khavinson short-peptide program, covering Cardiogen among the bioregulators. A useful entry point that collects the gene-expression and epigenetic findings across this peptide family.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Cardiogen work?",
    intro:
      "Cardiogen is a Khavinson short peptide studied as an organ-targeted bioregulator in cardiac tissue. Its proposed actions center on cardiomyocyte proliferation, reduced myocardial apoptosis, and a shift of cardiac fibroblasts away from a fibrotic phenotype, with gene-expression modulation as the underlying mechanism. The points below are hypotheses drawn from preclinical tissue-culture and rodent models, not established human mechanisms.",
    body: [
      "Cardiomyocyte Proliferation [1]. In myocardial tissue culture from both young and old rats, Cardiogen stimulated cell proliferation (Chalisova et al. 2009).",
      "Reduced Myocardial Apoptosis [1]. In the same cultured cardiac tissue, immunohistochemistry showed decreased p53 expression, suggesting suppression of apoptosis (Chalisova et al. 2009).",
      "Anti-Fibrotic Fibroblast Shift (hypothesized). Cardiogen is proposed to shift cardiac fibroblasts toward a less-fibrotic phenotype — less scar formation and collagen overdeposition. This remains a hypothesis from preclinical work.",
      "Direct DNA / Gene-Expression Modulation [3]. As a Khavinson short peptide, AEDR is hypothesized to penetrate cells and modulate gene expression through site-specific binding to DNA and modulation of endonuclease activity (Khavinson et al. 2011).",
    ],
  },
  {
    id: "research",
    title: "What is Cardiogen researched for?",
    intro:
      "Cardiogen's research base is entirely preclinical — rodent and in-vitro tissue culture — and comes largely from the Khavinson research lineage, with much of it in Russian-language journals. There are no human randomized controlled trials. The cardioprotection claims rest substantially on patent material rather than peer-reviewed clinical data; read the findings below with that in mind.",
    body: [
      "Myocardial Tissue-Culture Proliferation [1]. Cardiogen stimulated proliferation in myocardial tissue culture from young and old rats; immunohistochemistry showed decreased p53, suggesting apoptosis inhibition (Chalisova et al. 2009). Russian-language; preclinical.",
      "Cardioprotection in Rodent Models (US patent). US Patent 7,662,789 — Peptide substance restoring myocardium function (Ala-Glu-Asp-Arg) — describes cardioprotective activity across rodent models, including coronary-artery-ligation infarction, ischemia-reperfusion, adrenaline dystrophy, and arrhythmia. As patent material, this is not peer-reviewed clinical evidence.",
      "Tumor-Modifying Effect [2]. A study reported a tumor-modifying effect of Cardiogen on M-1 sarcoma in senescent rats (Levdik & Knyazkin 2009).",
      "Molecular Mechanism — Peptide–DNA Binding [3]. Site-specific binding of short peptides (including AEDR) with DNA, modulating eukaryotic endonuclease activity, provides a proposed molecular basis for the gene-expression effects (Khavinson et al. 2011).",
      "Systematic-Review Context [4]. A 2021 open-access systematic review of peptide regulation of gene expression covers Cardiogen among the bioregulators surveyed (Khavinson et al. 2021).",
    ],
  },
  {
    id: "dosing",
    title: "How is Cardiogen dosed?",
    intro:
      "There is no validated or FDA-approved dose for Cardiogen. It is handled as a research-use-only lyophilized powder, and the published work is preclinical animal and in-vitro tissue-culture research rather than human dosing studies.",
    content:
      "Because no controlled human dosing studies exist, there is no established human dose, and any figure circulated for injectable Cardiogen is extrapolated rather than validated. Researchers handling the lyophilized powder reconstitute it with bacteriostatic or sterile water (see storage below); any volume chosen is a generic handling convenience, not a dosing recommendation. Prof. Peptide deliberately does not publish an injectable mg or mg/kg schedule — none has been validated in controlled research.",
  },
  {
    id: "side-effects",
    title: "What are the side effects of Cardiogen?",
    intro:
      "Cardiogen's human safety profile is not characterized. The available evidence is entirely preclinical (rodent and in-vitro tissue culture), so there is no controlled human adverse-event data to summarize. This is a Research Use Only compound and is not intended for human consumption; nothing here should be read as human-use guidance. The honest summary is that human tolerability, interactions, and long-term safety are simply unknown.",
  },
  {
    id: "storage",
    title: "How should Cardiogen be stored?",
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
    title: "What are the limitations of Cardiogen research?",
    intro:
      "This is the most important section to read carefully. The Cardiogen evidence base is entirely preclinical — rodent and in-vitro tissue culture — and there are no human clinical trials.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Much of the literature is in Russian-language journals and comes from a single research lineage (the Khavinson group), with limited independent Western replication.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The cardioprotection claims rest substantially on a patent and a small number of preclinical models rather than peer-reviewed controlled trials; the proliferation, p53, and anti-fibrotic findings come from tissue culture and rodent work. Effect sizes and any translation to humans are unknown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cardiogen is Research Use Only and is not approved by the FDA or EMA; it has no approved human therapeutic use. Research-grade material is sold by specialty peptide vendors; quality varies, so verify a Certificate of Analysis before purchase.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Cardiogen",
    intro:
      "Cardiogen is not approved for human use and is sold by specialty research peptide vendors for laboratory use only. Quality varies across vendors — verify a Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The bioregulator line is more specialized than the mainstream peptide catalog, so not every vendor carries it. Peptides.gg carries the Khavinson bioregulator line. See the{" "}
          <Link href="/coupons/peptides-gg" className="text-[#0891b2] hover:underline">
            Peptides.gg discount code (PROF15) &rarr;
          </Link>{" "}
          for current options.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Cardiogen FAQ",
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
          Chalisova NI, et al. Effect of the Cardiogen peptide on proliferation in myocardial tissue culture from young and old rats. Adv Gerontol. 2009;22(3):409-13. PMID 20210190.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20210190/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20210190/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Levdik NV, Knyazkin IV. Tumor-modifying effect of the Cardiogen peptide on M-1 sarcoma in senescent rats. Bull Exp Biol Med. 2009;148(3):433-6. PMID 20396706.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20396706/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20396706/
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
          US Patent 7,662,789. Peptide substance restoring myocardium function (Ala-Glu-Asp-Arg). Cardioprotective activity in rodent models (coronary-artery-ligation infarction, ischemia-reperfusion, adrenaline dystrophy, arrhythmia). Patent document; no PubMed/DOI.
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
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper. The evidence is preclinical and largely from a single research lineage; the cardioprotection rodent-model data come from a US patent (cited in References), not a peer-reviewed trial.
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

export default function CardiogenPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Cardiogen","description":"Cardiogen (AEDR, Ala-Glu-Asp-Arg) research profile: proposed cardiomyocyte proliferation, anti-fibrotic and anti-apoptotic (p53) signaling, peptide–DNA gene-expression modulation, preclinical cardioprotection, and candid limitations. Research use only.","url":"https://profpeptide.com/peptides/cardiogen","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Cardiogen"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Cardiogen</h1>
        <span className="tag">Bioregulators</span>
        <span className="tag">Research Use Only</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: June 4, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> AEDR, H-Ala-Glu-Asp-Arg-OH, Ala-Glu-Asp-Arg
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Khavinson short-peptide bioregulator (synthetic cardiovascular tetrapeptide)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Molecular Profile:</span> H-Ala-Glu-Asp-Arg-OH (AEDR) &middot; C18H31N7O9 &middot; ~489.5 g/mol &middot; PubChem CID 11583989
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Form &amp; Origin:</span> Lyophilized synthetic tetrapeptide; a Khavinson organ-targeted bioregulator studied in cardiac systems
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research Use Only; not FDA- or EMA-approved; no approved human therapeutic use
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Cardiogen?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Cardiogen is a synthetic cardiovascular tetrapeptide (Ala-Glu-Asp-Arg, AEDR) developed within the Khavinson short-peptide bioregulator program as an organ-targeted bioregulator studied in cardiac systems. It is proposed to stimulate cardiomyocyte proliferation and to shift cardiac fibroblasts toward a less-fibrotic phenotype (less scar and collagen overdeposition), and in cultured cardiac tissue it was associated with reduced p53 expression &mdash; suggesting suppression of myocardial apoptosis. As a Khavinson short peptide, it is hypothesized to penetrate cells and modulate gene expression through site-specific DNA/chromatin interaction. The evidence base is entirely preclinical (rodent and in-vitro tissue culture), much of it in Russian-language journals and from a single research lineage; cardioprotective activity in rodent models is described in a US patent. There are no human clinical trials. Note that its sequence, AEDR, is distinct from AEDP (the sequence of{" "}
            <Link href="/peptides/cortagen" className="text-[#0891b2] hover:underline">Cortagen</Link>) and AEDG (the sequence of{" "}
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
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulation of cardiomyocyte proliferation in myocardial tissue culture (young and old rats)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced p53 expression in cultured cardiac tissue (suggested suppression of apoptosis)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Proposed shift of cardiac fibroblasts toward a less-fibrotic phenotype (hypothesized)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cardioprotective activity across rodent models described in a US patent (infarction, ischemia-reperfusion, adrenaline dystrophy, arrhythmia)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> No validated or FDA-approved dose exists. Cardiogen is handled as a research-use-only lyophilized powder, and the published evidence is preclinical animal and in-vitro tissue-culture research, not human dosing. Prof. Peptide does not publish an injectable dosing schedule because none has been validated in controlled research.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Cardiogen is sold by specialty peptide vendors for laboratory use only. Peptides.gg carries the Khavinson bioregulator line. See the{" "}
            <Link href="/coupons/peptides-gg" className="text-[#0891b2] hover:underline">
              Peptides.gg discount code (PROF15) &rarr;
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
        {["Bioregulators", "Cardiovascular Peptide", "Khavinson Peptide", "Research Use Only"].map((tag) => (
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
        <Link href="/peptides/pinealon" className="text-sm font-medium text-[#0891b2] hover:underline">Pinealon</Link>
        <Link href="/peptides/thymogen" className="text-sm font-medium text-[#0891b2] hover:underline">Thymogen</Link>
        <Link href="/peptides/cortagen" className="text-sm font-medium text-[#0891b2] hover:underline">Cortagen</Link>
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
        </div>
        <Link href="/bioregulators" className="text-sm font-medium text-[#0891b2] hover:underline mt-3 inline-block">Read the bioregulator guide &rarr;</Link>
      </div>

      {/* TODO: add a Bioregulator Comparisons block (e.g. Cardiogen vs Cortagen / Pinealon / Thymogen) once those comparison pages are built. The four-spoke set (Pinealon, Thymogen, Cortagen, Cardiogen) is now live. */}

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
    <ContactLink pageName="Cardiogen" pagePath="/peptides/cardiogen" />
    </div>
    </>
  );
}
