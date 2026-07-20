import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/vip",
  title: "VIP (Vasoactive Intestinal Peptide) — Aviptadil, VPAC1/VPAC2, Immunomodulation | Prof. Peptide",
  description:
    "VIP / vasoactive intestinal peptide research profile: VPAC1/VPAC2 mechanism, vasodilation and immunomodulation, the investigational synthetic form aviptadil (not FDA-approved), research-use-only framing, references.",
});

const faqs = [
  {
    q: "Is VIP FDA-approved?",
    a: "No. VIP is an endogenous human neuropeptide, and there is no broadly US-approved VIP product. Its synthetic form, aviptadil, has been investigational — for example in ARDS and COVID-19 (the ACTIV-3b/TESICO program) — but is not FDA-approved. An aviptadil-plus-phentolamine erectile-dysfunction product (Invicorp) is approved in some European countries, but that is not a broadly US-approved VIP product. Research-grade VIP sold by vendors is unapproved, Research Use Only material, not for human use.",
  },
  {
    q: "What is the difference between VIP and aviptadil?",
    a: "VIP (vasoactive intestinal peptide) is the natural 28-amino-acid human neuropeptide. Aviptadil is the synthetic pharmaceutical form of the same peptide, used in investigational clinical programs. Research-grade 'VIP' sold by peptide vendors is unapproved laboratory material and is not an approved medicine.",
  },
  {
    q: "How does VIP work?",
    a: "VIP binds the class-II G-protein-coupled receptors VPAC1 and VPAC2, generally raising intracellular cyclic AMP (cAMP). Functionally it is a potent vasodilator, relaxes gastrointestinal and airway smooth muscle, acts as a broad immunomodulator and anti-inflammatory mediator, serves as a master circadian regulator in the suprachiasmatic nucleus, and is a neuroprotective neuropeptide. Its immune and therapeutic effects are characterized largely in preclinical models.",
  },
  {
    q: "What does the research show?",
    a: "Most of the therapeutic evidence is preclinical immunology — VIP inhibits activation of macrophages, dendritic cells, and microglia while promoting Th2 and regulatory T-cell responses, and has been studied across inflammatory, autoimmune, and allergic disease models. Clinically, the synthetic form aviptadil was investigational for ARDS/COVID-19 but did not yield FDA approval. There is no confirmed approved therapeutic for the natural peptide.",
  },
  {
    q: "Is there a standard research dose for VIP?",
    a: "No. There is no validated research-use dose. Aviptadil's clinical dosing in investigational programs is route-specific (for example intravenous or inhaled in trials) and is not an approved standard. VIP also has a very short half-life (about 30 minutes). Prof. Peptide does not publish an injectable mg or mg/kg schedule for research-grade VIP because none has been validated, and the material is unapproved.",
  },
  {
    q: "Where can I buy VIP?",
    a: "There is no broadly US-approved VIP product, and aviptadil is investigational. Research-grade 'VIP' sold by specialty research peptide vendors is unapproved material for laboratory use only. Quality varies; verify a Certificate of Analysis before purchase.",
  },
];

// Published Studies cards use only the four verified PubMed citations. The foundational
// 1970 isolation (Said & Mutt) and the aviptadil investigational programs are cited in
// prose / References by name — no fabricated PMIDs or URLs.
const studies = [
  {
    title: "The Significance of Vasoactive Intestinal Peptide in Immunomodulation",
    authors: "Delgado M, Ganea D, et al.",
    journal: "Pharmacological Reviews / PubMed",
    year: "Review",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/15169929/",
    summary: "A foundational review characterizing VIP's role as an immunomodulator — collecting its effects on innate and adaptive immunity and establishing the anti-inflammatory profile that underlies most of the peptide's therapeutic research interest. Mechanistic/preclinical.",
  },
  {
    title: "The Neuropeptide VIP: Direct Effects on Immune Cells and Involvement in Inflammatory and Autoimmune Diseases",
    authors: "Ganea D, Hooper KM, Kong W",
    journal: "Acta Physiologica (Oxford) / PubMed",
    year: "2015",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/25422088/",
    summary: "A review of VIP's direct actions on immune cells and its involvement in inflammatory and autoimmune disease models — detailing how VIP shifts immune responses toward Th2 and regulatory T-cell phenotypes while dampening pro-inflammatory activation.",
  },
  {
    title: "Immunomodulation of Innate Immune Responses by VIP: Therapeutic Potential in Inflammatory Disease",
    authors: "Smalley SG, Barrow PA, Foster N, et al.",
    journal: "Clinical & Experimental Immunology",
    year: "2009",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/19604262/",
    summary: "A review of how VIP modulates innate immune responses and its proposed therapeutic potential in inflammatory disease. As with the rest of the immunology literature here, the therapeutic implications are largely preclinical.",
  },
  {
    title: "Neuroendocrine-Cell-Derived VIP in Allergic Diseases",
    authors: "Verma AK, et al.",
    journal: "Cytokine & Growth Factor Reviews / PubMed",
    year: "2017",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/28964637/",
    summary: "A review of neuroendocrine-cell-derived VIP in allergic diseases, extending the immunomodulatory framing into allergy and airway biology — consistent with VIP's smooth-muscle and immune actions. Preclinical/mechanistic.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does VIP work?",
    intro:
      "VIP signals through the class-II G-protein-coupled receptors VPAC1 and VPAC2, generally raising intracellular cyclic AMP. From that single signaling axis flow several distinct physiological roles — vasodilation, smooth-muscle relaxation, immunomodulation, circadian regulation, and neuroprotection. The vasodilatory and smooth-muscle actions are well-established physiology; the immune and therapeutic effects are characterized largely in preclinical models.",
    body: [
      "VPAC1 / VPAC2 Receptor Agonism. VIP binds the class-II G-protein-coupled receptors VPAC1 and VPAC2, generally raising intracellular cyclic AMP (cAMP).",
      "Vasodilation & Smooth-Muscle Relaxation. VIP is a potent vasodilator and relaxes gastrointestinal and airway smooth muscle.",
      "Immunomodulation / Anti-Inflammatory [1][2][3]. VIP functions as a broad immunomodulator: it inhibits activation of macrophages, dendritic cells, and microglia while promoting Th2 and regulatory T-cell (Treg) responses. These immune effects are characterized largely in preclinical models.",
      "Circadian Regulation. In the suprachiasmatic nucleus, VIP acts as a master regulator of circadian rhythm.",
      "Neuroprotection. VIP is a neuroprotective neuropeptide.",
    ],
  },
  {
    id: "research",
    title: "What is VIP researched for?",
    intro:
      "VIP's research base is dominated by preclinical immunology, with the clinical work concentrated on the investigational synthetic form aviptadil. The peptide was first isolated from porcine small intestine by Said and Mutt in 1970. Read the findings below as largely preclinical and mechanistic, except where an investigational clinical program is named.",
    body: [
      "Immunomodulation (Foundational Review) [1]. Delgado, Ganea, and colleagues characterized VIP's significance in immunomodulation (Pharmacol Rev), establishing its broad anti-inflammatory profile. Mechanistic/preclinical.",
      "Immune-Cell Effects & Autoimmune Disease [2]. VIP exerts direct effects on immune cells and is implicated in inflammatory and autoimmune disease models (Ganea et al. 2015).",
      "Innate Immunity & Inflammatory Disease [3]. Reviews describe VIP's immunomodulation of innate immune responses and its proposed therapeutic potential in inflammatory disease (PMID 19604262). Largely preclinical.",
      "Allergic Disease [4]. Neuroendocrine-cell-derived VIP has been studied in allergic diseases (Verma et al. 2017).",
      "Aviptadil (Investigational). The synthetic form aviptadil has been studied in investigational clinical programs — including ARDS and COVID-19 (the ACTIV-3b/TESICO program) — but did not yield FDA approval. Cited by name; no PMID is attached to that program here.",
    ],
  },
  {
    id: "dosing",
    title: "How is VIP dosed?",
    intro:
      "There is no validated research-use dose for VIP. Its synthetic form aviptadil has been dosed in investigational clinical trials, but those regimens are route-specific and remain investigational — not an approved standard.",
    content:
      "Aviptadil has been administered in investigational programs (for example, intravenous and inhaled routes in ARDS/COVID-19 trials), but those regimens are investigational and route-specific and are not reproduced here. For research-grade VIP, there is no established dose; it is unapproved material handled in the laboratory, and its very short biological half-life (about 30 minutes) further complicates any extrapolation. Researchers reconstitute lyophilized powder with bacteriostatic or sterile water (see storage below); any volume chosen is a generic handling convenience, not a dosing recommendation. Prof. Peptide deliberately does not publish an injectable mg or mg/kg schedule for research-grade VIP — none has been validated.",
  },
  {
    id: "side-effects",
    title: "What are the side effects of VIP?",
    intro:
      "The human safety of research-grade VIP is not established; it is unapproved, Research Use Only material and is not intended for human consumption, so nothing here should be read as human-use guidance. Pharmacologically, VIP's defining actions — potent vasodilation and relaxation of gastrointestinal and airway smooth muscle — predict effects such as flushing, lowered blood pressure, and loose stools; these are anticipated from the mechanism rather than quantified controlled-safety data for research material. For the investigational drug aviptadil, documented safety information resides in its clinical-trial records, not on this page.",
  },
  {
    id: "storage",
    title: "How should VIP be stored?",
    body: [
      "Research-grade VIP (lyophilized powder): store cold and desiccated, protected from light. Freeze at -20°C for long-term storage; 2–8°C is acceptable short-term.",
      "Reconstitute with bacteriostatic or sterile water for injection. Add the water slowly down the inside wall of the vial and swirl gently — do not shake.",
      "Reconstituted solution: refrigerate at 2–8°C and keep protected from light. VIP has a very short biological half-life (~30 minutes), so handle reconstituted material promptly and keep it cold.",
      "Protect from light at all times; store in original packaging.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of VIP research?",
    intro:
      "This is the most important section to read carefully. VIP is an endogenous human neuropeptide, not an approved drug, and the therapeutic case for it is earlier-stage than the marketing around it suggests.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The therapeutic evidence is largely preclinical (cell and animal models) or from unconfirmed investigational programs. The immune and anti-inflammatory effects that drive most research interest have not been established in confirmatory human trials for the natural peptide.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The synthetic form aviptadil has been investigational &mdash; including in ARDS and COVID-19 (the ACTIV-3b/TESICO program) &mdash; but did not yield FDA approval. An aviptadil-plus-phentolamine erectile-dysfunction product (Invicorp) is approved in some European countries, but there is no broadly US-approved VIP product.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          VIP also has a very short half-life (about 30 minutes), which limits straightforward therapeutic use and complicates dosing. Research-grade VIP sold by vendors is unapproved, Research Use Only material, not for human consumption; quality varies across vendors, so verify a Certificate of Analysis before purchase.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source VIP",
    intro:
      "There is no broadly US-approved VIP product, and the synthetic form aviptadil is investigational. The 'VIP' sold by specialty peptide vendors is unapproved, research-grade material for laboratory use only. Quality varies across vendors; verify a Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-4">
        {/* TODO: add a VendorHighlightBlock here once VIP vendors are wired into the vendor data. Do NOT add a fabricated carrier/note or invent a code in the meantime — use the inline /coupons link below until vendors are added. */}
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Prof. Peptide maintains a vetted list of peptide vendors with verified discount codes. See{" "}
          <Link href="/coupons" className="text-[#3A759F] hover:underline">
            Verified Discount Codes &rarr;
          </Link>{" "}
          for current options.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "VIP FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">
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
          Delgado M, Ganea D, et al. The significance of vasoactive intestinal peptide in immunomodulation. Pharmacol Rev. PMID 15169929.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15169929/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/15169929/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ganea D, Hooper KM, Kong W. The neuropeptide VIP: direct effects on immune cells and involvement in inflammatory and autoimmune diseases. Acta Physiol (Oxf). 2015;213(2):442-52. PMID 25422088.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25422088/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25422088/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Smalley SG, Barrow PA, Foster N, et al. Immunomodulation of innate immune responses by vasoactive intestinal peptide: its therapeutic potential in inflammatory disease. Clin Exp Immunol. 2009;157(2):225-34. PMID 19604262.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19604262/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19604262/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Verma AK, et al. Neuroendocrine-cell-derived VIP in allergic diseases. Cytokine Growth Factor Rev. 2017;38:37-48. PMID 28964637.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28964637/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/28964637/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Said SI, Mutt V. Isolation of vasoactive intestinal peptide from porcine small intestine. 1970. (Foundational discovery; cited by name, no PubMed link added.)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chemical identifiers: CAS 40077-57-4 (VIP peptide; human, porcine, and rat sequences are identical). (Cited by name/ID, no URL added.)
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
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper. The therapeutic implications are largely preclinical; the investigational aviptadil programs are cited by name in References.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function VIPPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"VIP (Vasoactive Intestinal Peptide)","description":"VIP / vasoactive intestinal peptide research profile: VPAC1/VPAC2 mechanism, vasodilation and immunomodulation, the investigational synthetic form aviptadil (not FDA-approved), research-use-only framing, references.","url":"https://profpeptide.com/peptides/vip","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"VIP (Vasoactive Intestinal Peptide)"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">VIP (Vasoactive Intestinal Peptide)</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
        <span className="tag">Research Use Only</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: June 5, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Vasoactive intestinal polypeptide; synthetic form Aviptadil
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> 28-amino-acid neuropeptide hormone of the secretin/glucagon superfamily; agonist of the VPAC1 and VPAC2 G-protein-coupled receptors
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Molecular Profile:</span> His-Ser-Asp-Ala-Val-Phe-Thr-Asp-Asn-Tyr-Thr-Arg-Leu-Arg-Lys-Gln-Met-Ala-Val-Lys-Lys-Tyr-Leu-Asn-Ser-Ile-Leu-Asn-NH2 &middot; C147H238N44O42S &middot; ~3325 g/mol &middot; CAS 40077-57-4 (peptide; human, porcine, and rat sequences are identical)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Origin:</span> First isolated from porcine small intestine by Said and Mutt, 1970
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Research Use Only &mdash; endogenous human neuropeptide; the synthetic form aviptadil is investigational (e.g., ARDS/COVID-19) and not FDA-approved; research-grade VIP is unapproved and not for human use
        </p>
      </div>

      <div className="mb-8 p-4 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Important &mdash; endogenous peptide vs. investigational drug vs. research material:</span> VIP is a natural human neuropeptide. Its synthetic form, aviptadil, has been investigational (for example, ARDS/COVID-19 in the ACTIV-3b/TESICO program) and is NOT FDA-approved; an aviptadil-plus-phentolamine erectile-dysfunction product (Invicorp) is approved in some European countries but is not a broadly US-approved VIP product. The &ldquo;VIP&rdquo; sold by research vendors is unapproved, research-grade material for Research Use Only, not for human use.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is VIP (Vasoactive Intestinal Peptide)?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            VIP (vasoactive intestinal peptide) is a 28-amino-acid neuropeptide hormone of the secretin/glucagon superfamily and an agonist of the VPAC1 and VPAC2 G-protein-coupled receptors. First isolated from porcine small intestine by Said and Mutt in 1970, it is an endogenous human peptide &mdash; the human, porcine, and rat sequences are identical. Through VPAC1/VPAC2 it generally raises intracellular cAMP, acting as a potent vasodilator, relaxing gastrointestinal and airway smooth muscle, and functioning as a broad immunomodulator and anti-inflammatory mediator; it is also a master circadian regulator in the suprachiasmatic nucleus and a neuroprotective neuropeptide. Its immune and therapeutic effects are characterized largely in preclinical models. The synthetic form, aviptadil, has been investigational (for example, in ARDS/COVID-19) but is not FDA-approved, and research-grade VIP sold by vendors is unapproved, Research Use Only material &mdash; not for human use. It is studied alongside gut and immune peptides such as{" "}
            <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>,{" "}
            <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, and{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">VPAC1/VPAC2 agonism that generally raises intracellular cAMP</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Potent vasodilation; relaxation of gastrointestinal and airway smooth muscle</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Broad immunomodulatory / anti-inflammatory activity (preclinical) &mdash; inhibits macrophages, dendritic cells, and microglia; promotes Th2 and regulatory T-cell responses</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Circadian regulation in the suprachiasmatic nucleus and neuroprotection</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> There is no validated research-use dose. The synthetic form aviptadil has been dosed in investigational trials by route-specific regimens (for example intravenous or inhaled), but those are investigational, not an approved standard. VIP has a very short half-life (about 30 minutes). Prof. Peptide does not publish an injectable dosing schedule for research-grade VIP because none has been validated, and the material is unapproved.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> There is no broadly US-approved VIP product, and aviptadil is investigational. Research-grade VIP is sold by specialty peptide vendors for laboratory use only. PP maintains a vetted list of vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
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
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
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
        {["Gut Health", "Immunomodulator", "VPAC1/VPAC2", "Research Use Only"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>


      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#3A759F] hover:underline">KPV</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">BPC-157</Link>
        </div>
      </div>

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
    <ContactLink pageName="VIP (Vasoactive Intestinal Peptide)" pagePath="/peptides/vip" />
    </div>
    </>
  );
}
