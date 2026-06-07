import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/thymogen",
  title: "Thymogen — Oglufanide / IM-862, Thymic Dipeptide Immunomodulator | Prof. Peptide",
  description:
    "Thymogen (L-Glu-L-Trp, Oglufanide / IM-862) research profile: thymic-dipeptide immunomodulation, NK-cell–dependent antitumor data, AIDS-KS and renal-cell-carcinoma trials including a negative Phase III, and candid limitations. Research use only.",
});

const faqs = [
  {
    q: "Is Thymogen FDA-approved?",
    a: (
      <>
        No. Thymogen is not approved by the FDA or EMA for any indication, and in the US it is sold as a research-use-only (RUO) compound. It is registered as a medicine only in the Russian Federation (an intramuscular solution, a nasal spray, and a 0.05% topical cream). The clinical evidence is mixed &mdash; the most rigorous controlled trial, a randomized Phase III in AIDS-related Kaposi&apos;s sarcoma, was negative.
      </>
    ),
  },
  {
    q: "What is Thymogen (the EW dipeptide)?",
    a: (
      <>
        Thymogen is a synthetic thymic dipeptide with the sequence L-Glu-L-Trp (the &ldquo;EW&rdquo; dipeptide). It belongs to the family of Khavinson short-peptide bioregulators and was identified as the principal active component of Thymalin &mdash; a thymic extract &mdash; isolated via reversed-phase HPLC. It is also known as Oglufanide and IM-862. It is studied in the same short-peptide tradition as{" "}
        <Link href="/peptides/thymosin-alpha-1" className="text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>{" "}
        and{" "}
        <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>.
      </>
    ),
  },
  {
    q: "How is Thymogen related to Thymalin and Thymodepressin?",
    a: "Thymalin is the thymic extract from which L-Glu-L-Trp was isolated as the principal active component. Thymodepressin is the mirror-image enantiomer, D-Glu-D-Trp — and, strikingly, it is immunosuppressive rather than immunostimulating. The same atoms in the opposite chirality produce the opposite immune activity.",
  },
  {
    q: "What does the research actually show?",
    a: "It is mixed and, in controlled testing, largely negative. Preclinically, L-Glu-L-Trp inhibited tumor growth in mice through an NK-cell– and perforin-dependent mechanism with no direct cytotoxicity. Open-label oncology studies (as IM862) reported major responses in AIDS-related Kaposi's sarcoma, but a subsequent randomized, double-blind, placebo-controlled Phase III found no benefit over placebo and a possible acceleration of disease progression. A renal-cell-carcinoma Phase II was well tolerated. There are no positive controlled efficacy trials.",
  },
  {
    q: "Is there a standard Thymogen dose?",
    a: "There is no FDA-approved dose. The only regulator-defined forms are the Russian registrations: an intramuscular solution (100 µg/mL), a metered nasal spray (25 µg/dose), and a 0.05% topical cream. Published trials used intranasal regimens — 5 mg every other day in the negative AIDS-KS Phase III, and 20 mg three times daily in a renal-cell-carcinoma Phase II. Prof. Peptide does not publish an injectable dosing schedule because none has been validated in controlled research.",
  },
  {
    q: "Where can I buy Thymogen?",
    a: (
      <>
        Thymogen is sold by specialty research peptide vendors for laboratory use only. Quality varies &mdash; verify a Certificate of Analysis before purchase. Among the vetted vendors, Peptides.gg carries the Khavinson bioregulator line &mdash; see the{" "}
        <Link href="/coupons/peptides-gg" className="text-[#0891b2] hover:underline">
          Peptides.gg discount code (PROF15) &rarr;
        </Link>
        .
      </>
    ),
  },
];

// Published Studies cards use only the four verified citations, each with a real PubMed URL.
const studies = [
  {
    title: "L-Glu-L-Trp Inhibits Tumor Growth in Mice via NK Cells and Perforin (no direct cytotoxicity)",
    authors: "Smith DL, et al.",
    journal: "International Journal of Cancer / PubMed",
    year: "2003",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/12845648/",
    summary: "Preclinical mouse study showing that the dipeptide inhibited tumor growth without any direct cytotoxic effect on tumor cells. The antitumor activity required NK cells and perforin, was partly IL-12-dependent, and was IFN-γ-independent — establishing the effect as immune-mediated rather than directly tumoricidal.",
  },
  {
    title: "IM862 Intranasal Solution in AIDS-Related Kaposi's Sarcoma — Open-Label Phase I/II",
    authors: "Tulpule A, et al.",
    journal: "Journal of Clinical Oncology / PubMed",
    year: "2000",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/10673512/",
    summary: "Open-label Phase I/II trial of IM862 nasal solution in AIDS-related Kaposi's sarcoma. Major responses were reported in roughly 36% of patients, and the agent was well tolerated, with adverse events limited to mild headache, fatigue, tingling, and nausea. The uncontrolled design — and concurrent antiretroviral therapy — later proved important when interpreting these response estimates.",
  },
  {
    title: "IM862 vs Placebo in AIDS-Related Kaposi's Sarcoma — Randomized Phase III (Negative)",
    authors: "Noy A, et al.",
    journal: "Journal of Clinical Oncology / PubMed",
    year: "2005",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/15598977/",
    summary: "Randomized, double-blind, placebo-controlled Phase III trial (n=202). IM862 5 mg intranasally every other day was not superior to placebo and may have accelerated time to progression. The authors noted that concurrent HAART likely confounded the favorable response rates seen in the earlier open-label studies. This is the most rigorous controlled test of the compound, and the result was negative.",
  },
  {
    title: "IM862 Intranasal in Metastatic Renal Cell Carcinoma — Phase II",
    authors: "Deplanque G, et al.",
    journal: "British Journal of Cancer / PubMed",
    year: "2004",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/15354209/",
    summary: "Phase II study of intranasal IM862 in metastatic renal cell carcinoma (n=25), pursued on an antiangiogenic and immunomodulatory rationale. The agent was well tolerated; the trial adds to the safety record but, like the other oncology work, does not establish controlled efficacy.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Thymogen work?",
    intro:
      "Thymogen is described as an immunomodulator that normalizes immune function bidirectionally rather than simply stimulating it. Its reported actions center on T-cell maturation and innate-immune function, with a separate antiangiogenic line of research under the IM-862/Oglufanide name. A defining structural curiosity: the mirror-image enantiomer D-Glu-D-Trp (Thymodepressin) is immunosuppressive — opposite activity from the same atoms. The immune-differentiation mechanisms below come from older, largely preclinical immunology; the antitumor and antiangiogenic claims are tied to the cited oncology studies.",
    body: [
      "Bidirectional Immunomodulation. Thymogen is characterized as normalizing immune activity toward baseline rather than purely up-regulating it — restoring function in either direction depending on the starting state.",
      "T-Cell Maturation and CD4/CD8 Balance. It stimulates the differentiation and maturation of pre-T cells into mature T-lymphocytes and is reported to normalize the T-helper/T-suppressor (CD4/CD8) ratio.",
      "Cyclic-Nucleotide Signaling. It raises intracellular cyclic AMP (cAMP) in T-lymphocytes, consistent with a cyclic-nucleotide-modulating mechanism.",
      "Innate-Immune Effects. It enhances neutrophil chemotaxis and phagocytosis.",
      "Immune-Mediated Antitumor Activity [1]. In mice, L-Glu-L-Trp inhibited tumor growth with no direct cytotoxicity; the effect required NK cells and perforin, was partly IL-12-dependent, and was IFN-γ-independent (Smith et al. 2003).",
      "Antiangiogenic Rationale [2][4]. As IM-862/Oglufanide, the same dipeptide has been studied as a VEGF-inhibiting antiangiogenic agent — the rationale behind its Kaposi's-sarcoma and renal-cell-carcinoma trials.",
    ],
  },
  {
    id: "research",
    title: "What is Thymogen researched for?",
    intro:
      "Thymogen's research base spans preclinical tumor immunology and a series of oncology trials run under the IM862 name. The signal to keep in view: the positive efficacy reports came from uncontrolled, open-label studies, while the one randomized, double-blind, placebo-controlled Phase III was negative. The findings below should be read with that hierarchy of evidence in mind.",
    body: [
      "Preclinical Antitumor (NK / Perforin) [1]. L-Glu-L-Trp inhibited tumor growth in mice with no direct cytotoxicity; activity required NK cells and perforin, was partly IL-12-dependent, and was IFN-γ-independent (Smith et al. 2003).",
      "AIDS-Related Kaposi's Sarcoma, Open-Label [2]. An open-label Phase I/II study of IM862 nasal solution reported major responses in roughly 36% of patients and good tolerability — mild headache, fatigue, tingling, and nausea (Tulpule et al. 2000). Uncontrolled design.",
      "AIDS-Related Kaposi's Sarcoma, Phase III [3]. A randomized, double-blind, placebo-controlled Phase III (n=202) found IM862 5 mg intranasally every other day was NOT superior to placebo and may have accelerated time to progression; concurrent HAART likely confounded the earlier open-label estimates (Noy et al. 2005). Negative result.",
      "Metastatic Renal Cell Carcinoma, Phase II [4]. A Phase II intranasal study in metastatic renal cell carcinoma (n=25) was well tolerated and pursued an antiangiogenic / immunomodulatory rationale (Deplanque et al. 2004).",
    ],
  },
  {
    id: "dosing",
    title: "How is Thymogen dosed?",
    intro:
      "There is no FDA-approved dose for Thymogen. In the US it is a research-use-only compound. The only regulator-defined doses come from its registration as a medicine in the Russian Federation, and specific doses also appear in the published clinical trials.",
    content:
      "The registered Russian forms are an intramuscular solution (100 µg/mL), a metered nasal spray (25 µg/dose), and a 0.05% topical cream — these are the only regulator-defined presentations, and they exist only in the Russian Federation, not under the FDA or EMA. Published trials used their own intranasal regimens: 5 mg every other day in the negative AIDS-KS Phase III [3], and 20 mg three times daily in the metastatic renal-cell-carcinoma Phase II [4]. Researchers handling lyophilized material reconstitute it with bacteriostatic or sterile water (see storage below); any volume chosen is a generic handling convenience, not a dosing recommendation. Prof. Peptide deliberately does not publish an injectable mg or mg/kg schedule — none has been validated, and the most rigorous controlled trial of this compound was negative.",
  },
  {
    id: "side-effects",
    title: "What are the side effects of Thymogen?",
    intro:
      "Across the cited clinical trials the dipeptide was generally well tolerated, and the adverse events reported in the AIDS-related Kaposi's sarcoma studies were mild — headache, fatigue, tingling, and nausea (Tulpule et al. 2000). That said, comprehensive long-term safety characterization is limited: the data come from small or uncontrolled oncology studies in specific patient populations. This is a Research Use Only compound in the US and is not intended for human consumption; nothing here should be read as human-use guidance. The honest summary is that general human tolerability, interactions, and long-term safety are not well established.",
  },
  {
    id: "storage",
    title: "How should Thymogen be stored?",
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
    title: "What are the limitations of Thymogen research?",
    intro:
      "This is the most important section to read carefully. The most rigorous controlled human trial of this compound — the randomized, double-blind, placebo-controlled Phase III in AIDS-related Kaposi's sarcoma — was negative.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The positive efficacy signals came from uncontrolled, open-label studies. When the compound was tested in a randomized, double-blind, placebo-controlled Phase III (n=202), IM862 was not superior to placebo and may have accelerated time to progression; the authors noted that concurrent HAART likely confounded the favorable response rates seen in the earlier open-label work (Noy et al. 2005).
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The immune-differentiation data (T-cell maturation, CD4/CD8 normalization, cAMP signaling, neutrophil function) are largely preclinical and older, and were not the endpoints of the controlled oncology trials. Effect sizes and any translation to general human use are not established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Thymogen is Research Use Only in the US. It is not approved by the FDA or EMA; it is registered as a medicine only in the Russian Federation (intramuscular solution, nasal spray, and 0.05% topical cream). Research-grade material is sold by specialty peptide vendors; quality varies, so verify a Certificate of Analysis before purchase.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Thymogen",
    intro:
      "Thymogen is not approved for human use in the US and is sold by specialty research peptide vendors for laboratory use only. Quality varies across vendors — verify a Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The bioregulator line is more specialized than the mainstream peptide catalog, so not every vendor carries it. Among the vetted vendors, Peptides.gg carries the Khavinson bioregulator line. See the{" "}
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
    title: "Thymogen FAQ",
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
          Smith DL, et al. L-Glu-L-Trp inhibits tumor growth in mice in an NK-cell– and perforin-dependent manner. Int J Cancer. 2003;106(4):528-533. PMID 12845648.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12845648/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12845648/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tulpule A, et al. Intranasal IM862 (oglufanide) in AIDS-related Kaposi&apos;s sarcoma — open-label Phase I/II. J Clin Oncol. 2000. PMID 10673512.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10673512/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10673512/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Noy A, et al. Randomized, double-blind, placebo-controlled Phase III of IM862 in AIDS-related Kaposi&apos;s sarcoma. J Clin Oncol. 2005;23(5):990-998. PMID 15598977.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15598977/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/15598977/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Deplanque G, et al. Phase II of intranasal IM862 in metastatic renal cell carcinoma. Br J Cancer. 2004. PMID 15354209.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15354209/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/15354209/
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
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper. Note that the strongest controlled trial (Noy et al. 2005) was negative.
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

export default function ThymogenPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Thymogen","description":"Thymogen (L-Glu-L-Trp, Oglufanide / IM-862) research profile: thymic-dipeptide immunomodulation, NK-cell–dependent antitumor data, AIDS-KS and renal-cell-carcinoma trials including a negative Phase III, and candid limitations. Research use only.","url":"https://profpeptide.com/peptides/thymogen","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Thymogen"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Thymogen</h1>
        <span className="tag">Bioregulators</span>
        <span className="tag">Research Use Only</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: June 4, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Oglufanide (INN Oglufanidum), IM-862, Thymagen, EW dipeptide, L-Glu-L-Trp
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Khavinson short-peptide bioregulator (synthetic thymic dipeptide immunomodulator)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Molecular Profile:</span> L-Glu-L-Trp &middot; C16H19N3O5 &middot; 333.34 g/mol (free acid) &middot; CAS 38101-59-6 (free acid; the registered drug uses the monosodium salt, CAS 122933-59-9)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Form &amp; Origin:</span> Lyophilized; synthetic; identified as the principal active component of Thymalin (thymic extract), isolated via reversed-phase HPLC
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research Use Only in the US; not FDA- or EMA-approved; registered as a medicine in the Russian Federation in three forms (intramuscular solution 100 µg/mL, metered nasal spray 25 µg/dose, 0.05% topical cream)
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Thymogen?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Thymogen is a synthetic thymic dipeptide (L-Glu-L-Trp, the &ldquo;EW&rdquo; dipeptide) developed within the Khavinson short-peptide bioregulator program. It was identified as the principal active component of Thymalin &mdash; a thymic extract &mdash; and isolated via reversed-phase HPLC. Functionally it is an immunomodulator that normalizes immune activity rather than purely stimulating it: it drives maturation of pre-T cells into mature T-lymphocytes, is reported to normalize the CD4/CD8 ratio, raises intracellular cAMP in T-lymphocytes, and enhances neutrophil chemotaxis and phagocytosis. Under the names IM-862 and Oglufanide it was also studied as a VEGF-inhibiting antiangiogenic agent in cancer. A structural curiosity defines its identity: its mirror-image enantiomer, D-Glu-D-Trp (Thymodepressin), is immunosuppressive &mdash; opposite activity from the same atoms. The evidence base is mixed &mdash; preclinical immunology plus oncology trials whose most rigorous controlled test was negative &mdash; and in the US it is research-use-only. It sits in the same short-peptide family as{" "}
            <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>{" "}
            and{" "}
            <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bidirectional immunomodulation (normalizes immune activity rather than purely stimulating it)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Maturation of pre-T cells into mature T-lymphocytes; reported normalization of the CD4/CD8 ratio</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Raised intracellular cAMP in T-lymphocytes; enhanced neutrophil chemotaxis and phagocytosis</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Studied as a VEGF-inhibiting antiangiogenic agent (as IM-862 / Oglufanide) in cancer trials</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> No FDA-approved dose exists. Thymogen is registered as a medicine only in the Russian Federation, in three forms: an intramuscular solution (100 µg/mL), a metered nasal spray (25 µg/dose), and a 0.05% topical cream. Published trials used intranasal regimens (e.g., 5 mg every other day in the negative AIDS-KS Phase III; 20 mg three times daily in a renal-cell-carcinoma Phase II). Prof. Peptide does not publish an injectable dosing schedule because none has been validated in controlled research.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Thymogen is sold by specialty peptide vendors for laboratory use only. Among the vetted vendors, Peptides.gg carries the Khavinson bioregulator line. See the{" "}
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
        {["Bioregulators", "Immunomodulator", "Khavinson Peptide", "Research Use Only"].map((tag) => (
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
        {/* TODO: add sibling Khavinson bioregulator links (Cardiogen, Cortagen) as those profiles go live. */}
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
        <Link href="/peptides/pinealon" className="text-sm font-medium text-[#0891b2] hover:underline">Pinealon</Link>
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
        <Link href="/peptides/semax" className="text-sm font-medium text-[#0891b2] hover:underline">Semax</Link>
        <Link href="/peptides/selank" className="text-sm font-medium text-[#0891b2] hover:underline">Selank</Link>
        <Link href="/peptides/dsip" className="text-sm font-medium text-[#0891b2] hover:underline">DSIP</Link>
        </div>
        <Link href="/bioregulators" className="text-sm font-medium text-[#0891b2] hover:underline mt-3 inline-block">Read the bioregulator guide &rarr;</Link>
      </div>

      {/* TODO: add a Comparisons block (e.g. Thymogen vs Thymosin Alpha-1, or sibling-bioregulator comparisons) once those comparison pages are built. */}

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
    <ContactLink pageName="Thymogen" pagePath="/peptides/thymogen" />
    </div>
    </>
  );
}
