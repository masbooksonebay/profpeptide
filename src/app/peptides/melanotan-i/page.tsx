import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/melanotan-i",
  title: "Melanotan I (Afamelanotide) — Scenesse, MC1R Agonist, EPP | Prof. Peptide",
  description:
    "Melanotan I / afamelanotide research profile: MC1R agonism and eumelanin photoprotection, the FDA/EMA-approved drug Scenesse for erythropoietic protoporphyria (EPP) vs. research-use-only MT-1, dosing, references.",
});

const faqs = [
  {
    q: "Is Melanotan I FDA-approved?",
    a: "The drug afamelanotide is — as the brand Scenesse (Clinuvel), it is FDA-approved (October 2019) and EMA-approved (2014) as a 16 mg subcutaneous implant given every 2 months to increase pain-free light exposure in adults with erythropoietic protoporphyria (EPP); prescription-only. Critically, the 'Melanotan I' / MT-1 sold by research vendors is NOT Scenesse — it is unapproved, research-grade material for research use only, not for human use, and it is prohibited in sport by WADA.",
  },
  {
    q: "What is the difference between Melanotan I, afamelanotide, and Scenesse?",
    a: "They refer to the same molecule at different stages. Melanotan I (also MT-1, NDP-MSH, CUV1647) is the research designation; afamelanotide is the international nonproprietary drug name; Scenesse is the FDA/EMA-approved branded medicine, a controlled-release subcutaneous implant. Research-grade 'Melanotan I' sold by peptide vendors is unapproved material and is not the branded drug Scenesse.",
  },
  {
    q: "Is Melanotan I the same as Melanotan II?",
    a: "No. They are different peptides. Melanotan I (afamelanotide) is a 13-amino-acid α-MSH analogue and selective MC1R agonist approved as Scenesse for EPP. Melanotan II is a different, smaller, unapproved peptide with broader melanocortin-receptor activity. They should not be conflated.",
  },
  {
    q: "How does Melanotan I work?",
    a: "Afamelanotide is a synthetic analogue of α-melanocyte-stimulating hormone (α-MSH) that agonizes the melanocortin-1 receptor (MC1R) on epidermal melanocytes, stimulating synthesis of eumelanin — the dark, photoprotective form of melanin. In EPP, the increased epidermal eumelanin absorbs light and reduces the phototoxic reaction driven by accumulated protoporphyrin IX, increasing pain-free light exposure.",
  },
  {
    q: "Is there a standard research dose for Melanotan I?",
    a: "There is no validated research-use dose. The approved drug Scenesse has an FDA/EMA-approved clinical regimen for EPP — a 16 mg subcutaneous implant administered by a healthcare professional every 2 months under prescription. For research-grade MT-1, Prof. Peptide does not publish an injectable mg schedule because none has been validated, and the research material is unapproved and not the branded drug.",
  },
  {
    q: "Where can I buy Melanotan I?",
    a: "Scenesse is a prescription implant administered by a healthcare professional. The 'Melanotan I' / MT-1 sold by specialty research peptide vendors is unapproved, research-grade material for laboratory use only — not the approved drug. Quality varies; verify a Certificate of Analysis before purchase.",
  },
];

// Published Studies: the EPP clinical program and regulatory/reference sources are cited
// by name only. No PubMed/DOI links are added because none were independently verified —
// no fabricated URLs.
const studies = [
  {
    title: "EPP Clinical Program — CUV029, CUV030, CUV039 (Clinuvel)",
    source: "Clinuvel Pharmaceuticals — randomized, double-blind trials",
    year: "Phase 3 program",
    label: "Clinical program (cited by name)",
    summary: "The randomized, double-blind clinical trials (CUV029, CUV030, CUV039) that evaluated increases in pain-free light exposure in patients with erythropoietic protoporphyria (EPP). This program is the clinical basis for the FDA and EMA approvals of Scenesse (afamelanotide).",
  },
  {
    title: "Scenesse (afamelanotide) — FDA NDA 210797 Review",
    source: "U.S. Food and Drug Administration",
    year: "2019",
    label: "Regulatory (cited by name)",
    summary: "The FDA new-drug-application review (NDA 210797) supporting the October 2019 approval of Scenesse to increase pain-free light exposure in adults with a history of phototoxic reactions from EPP. Referenced by name; no URL added.",
  },
  {
    title: "Afamelanotide — NIH LiverTox Monograph (NBK602608)",
    source: "NIH LiverTox: Clinical and Research Information on Drug-Induced Liver Injury",
    year: "Monograph",
    label: "Reference (cited by name)",
    summary: "The NIH LiverTox monograph on afamelanotide (Bookshelf ID NBK602608), summarizing the drug's pharmacology, approved use, and safety information. Referenced by name; no URL added.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Melanotan I work?",
    intro:
      "Melanotan I (afamelanotide) is a synthetic analogue of α-melanocyte-stimulating hormone (α-MSH) that agonizes the melanocortin-1 receptor (MC1R). MC1R activation drives synthesis of eumelanin — the dark, photoprotective form of melanin — in the epidermis. In erythropoietic protoporphyria (EPP), that increased eumelanin is what reduces the disease's phototoxic reaction.",
    body: [
      "MC1R Agonism. Afamelanotide is a synthetic α-MSH analogue that binds and activates the melanocortin-1 receptor (MC1R) on epidermal melanocytes.",
      "Eumelanin Synthesis (Melanogenesis). MC1R activation stimulates synthesis of eumelanin, the dark and photoprotective form of melanin, in the epidermis.",
      "Photoprotection in EPP. In EPP, accumulated protoporphyrin IX drives a phototoxic reaction on light exposure. Increased epidermal eumelanin absorbs light and reduces that reaction — the mechanistic basis for the approved indication, increasing pain-free light exposure.",
      "Analogue Design. The [Nle4, D-Phe7] substitutions define the analogue (also called NDP-α-MSH), distinguishing it from native α-MSH while preserving melanocortin activity.",
    ],
  },
  {
    id: "research",
    title: "What is Melanotan I researched for?",
    intro:
      "Melanotan I's strongest evidence is the clinical program behind its approved indication: erythropoietic protoporphyria (EPP). The FDA (NDA 210797, 2019) and EMA (2014) approvals rest on Clinuvel's randomized, double-blind trials CUV029, CUV030, and CUV039. Beyond EPP, the molecule's MC1R-driven eumelanin synthesis underlies research into photoprotection and polymorphic light eruption.",
    body: [
      "Erythropoietic Protoporphyria (EPP) — Approved Indication. The FDA (NDA 210797, October 2019) and EMA (2014) approvals for EPP rest on Clinuvel's randomized, double-blind clinical program (CUV029, CUV030, CUV039), which evaluated increases in pain-free light exposure.",
      "Photoprotection / Eumelanin Synthesis. Afamelanotide's MC1R-driven eumelanin synthesis is the basis for its photoprotective research applications.",
      "Polymorphic Light Eruption. Afamelanotide has been studied as a photoprotective agent in polymorphic light eruption.",
    ],
  },
  {
    id: "dosing",
    title: "How is Melanotan I dosed?",
    intro:
      "There are two very different answers depending on which material is meant. The approved drug Scenesse has an FDA/EMA-approved clinical regimen for EPP. Research-grade MT-1 has no validated research-use dose.",
    content:
      "For the approved drug Scenesse, an FDA- and EMA-approved regimen exists for EPP: a 16 mg controlled-release subcutaneous implant administered by a healthcare professional every 2 months under prescription. No other dosing figures are reproduced here — the implant is administered clinically, not self-injected. For research-grade 'Melanotan I' / MT-1, there is no validated research-use dose; it is unapproved material handled in the laboratory. Researchers reconstitute lyophilized powder with bacteriostatic or sterile water (see storage below); any volume chosen is a generic handling convenience, not a dosing recommendation. Prof. Peptide deliberately does not publish an injectable mg schedule for research-grade MT-1 — none has been validated, and the research material is not the approved drug.",
  },
  {
    id: "side-effects",
    title: "What are the side effects of Melanotan I?",
    intro:
      "The two materials must be kept separate. For the approved drug Scenesse, the documented adverse-effect profile is established in the FDA/EMA labeling and the NIH LiverTox monograph — those sources, not this page, are authoritative for the drug's safety. A predictable pharmacodynamic effect of MC1R agonism is increased skin pigmentation (darkening), consistent with the eumelanin-synthesis mechanism. For research-grade MT-1 used outside the approved indication, human safety is not established. This is unapproved, Research Use Only material and is not intended for human consumption; nothing here should be read as human-use guidance.",
  },
  {
    id: "storage",
    title: "How should Melanotan I be stored?",
    body: [
      "Research-grade Melanotan I / MT-1 (lyophilized powder): store cold and desiccated, protected from light. Freeze at -20°C for long-term storage; 2–8°C is acceptable short-term.",
      "Reconstitute with bacteriostatic or sterile water for injection. Add the water slowly down the inside wall of the vial and swirl gently — do not shake.",
      "Reconstituted solution: refrigerate at 2–8°C and keep protected from light.",
      "Protect from light at all times; store in original packaging.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
      "The approved drug Scenesse is a controlled-release subcutaneous implant administered and stored by healthcare professionals per its FDA/EMA labeling, not these research-handling notes.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Melanotan I research?",
    intro:
      "This is the most important section to read carefully. The approval is narrow, cosmetic use is unapproved and discouraged, and the research-grade material is a different thing entirely from the approved drug.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The FDA (2019) and EMA (2014) approvals are limited to one ultra-rare disease &mdash; erythropoietic protoporphyria (EPP) &mdash; in adults, as a prescription-administered 16 mg subcutaneous implant every 2 months. No broader indication is approved.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cosmetic and tanning use is unapproved and has been specifically discouraged by health agencies. The &lsquo;Melanotan I&rsquo; / MT-1 sold by research vendors is unapproved, research-grade material &mdash; not the approved drug Scenesse &mdash; and is for research use only, not for human consumption; quality varies across vendors, so verify a Certificate of Analysis.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Afamelanotide is prohibited in sport by the World Anti-Doping Agency (melanocortin agonists). It must not be confused with{" "}
          <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, a different, smaller, unapproved peptide.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Melanotan I",
    intro:
      "Scenesse (afamelanotide) is a prescription implant administered by a healthcare professional for EPP. The 'Melanotan I' / MT-1 sold by specialty peptide vendors is unapproved, research-grade material for laboratory use only — not the approved drug. Quality varies across vendors; verify a Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-4">
        {/* TODO: add a VendorHighlightBlock here once Melanotan I vendors are wired into the vendor data. Do NOT add a fabricated carrier/note or invent a code in the meantime — use the inline /coupons link below until vendors are added. */}
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
    title: "Melanotan I FAQ",
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
          U.S. Food and Drug Administration. Scenesse (afamelanotide) &mdash; NDA 210797; approval October 2019; indicated to increase pain-free light exposure in adults with a history of phototoxic reactions from erythropoietic protoporphyria (EPP). (FDA approval; cited by name, no URL added.)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          European Medicines Agency. Scenesse (afamelanotide) &mdash; EU marketing authorization for EPP, 2014. (EMA approval; cited by name, no URL added.)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Clinuvel Pharmaceuticals. Erythropoietic protoporphyria clinical program: randomized, double-blind trials CUV029, CUV030, and CUV039. (Clinical program; cited by name, no URL added.)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          NIH LiverTox: Clinical and Research Information on Drug-Induced Liver Injury. Afamelanotide monograph, Bookshelf ID NBK602608. (NIH LiverTox; cited by name, no URL added.)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chemical identifiers: PubChem CID 16154396 (Afamelanotide); CAS 75921-69-6; DrugBank DB04931; UNII QW68W3J66U. (Cited by name/ID, no URL added.)
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
          Plain-English summaries of the clinical program and regulatory sources behind the claims above. These are cited by name only &mdash; no external links are added because no public URLs were independently verified. Full citations are in the References section.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.source} &middot; {s.year}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400">{s.label}</span>
            </div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 leading-snug mb-1">{s.title}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = [
  { id: "overview", title: "What is Melanotan I?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function MelanotanIPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Melanotan I (Afamelanotide)","description":"Melanotan I / afamelanotide research profile: MC1R agonism and eumelanin photoprotection, the FDA/EMA-approved drug Scenesse for erythropoietic protoporphyria (EPP) vs. research-use-only MT-1, dosing, references.","url":"https://profpeptide.com/peptides/melanotan-i","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Melanotan I (Afamelanotide)"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">Melanotan I (Afamelanotide)</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="tag">FDA-Approved Drug</span>
        <span className="tag">Research-Grade RUO</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: June 5, 2026
      </p>
      {/* Quick Facts — key facts already present on this page, in a scannable grid */}
      <section aria-label="Quick Facts" className="panel-card mb-10 overflow-hidden">
        <div className="px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[#16181B] dark:text-slate-100 mb-3">
            Quick Facts
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">What it is</dt>
              <dd className="text-base text-[#16181B] dark:text-slate-100">A lab-made analogue of the body&apos;s α-MSH hormone and a selective melanocortin-1 receptor (MC1R) agonist &mdash; the linear analogue that drives eumelanin (the skin&apos;s photoprotective pigment), studied for pigmentation and photoprotection.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Subcutaneous &mdash; the approved drug Scenesse is a subcutaneous implant; research-grade MT-1 is handled as a subcutaneous injection</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Short in plasma; the Scenesse implant is controlled-release over ~2 months</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">16 mg controlled-release SC implant every 2 months (Scenesse, prescription); no validated dose for research-grade MT-1</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Dual status &mdash; the drug afamelanotide (Scenesse) is FDA-approved (2019) and EMA-approved (2014) for EPP; research-grade &ldquo;Melanotan I&rdquo; / MT-1 is unapproved, research use only. WADA-prohibited.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">

      <div className="mb-8 p-4 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Important &mdash; approved drug vs. research material:</span> The drug afamelanotide (brand Scenesse, Clinuvel) is FDA-approved (October 2019) as a 16 mg subcutaneous implant given every 2 months to increase pain-free light exposure in adults with erythropoietic protoporphyria (EPP), and EMA-approved for the same EPP indication (2014); prescription-only. The &ldquo;Melanotan I&rdquo; / MT-1 sold by research vendors is unapproved, research-grade material &mdash; NOT the approved drug Scenesse &mdash; for Research Use Only, not for human use; it is also prohibited in sport by WADA. It is a different peptide from{" "}
          <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>.
        </p>
      </div>

      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is Melanotan I?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Melanotan I (afamelanotide; also designated MT-1, Melanotan 1, NDP-MSH / NDP-α-MSH, [Nle4,D-Phe7]-α-MSH, and the developmental code CUV1647) is a synthetic 13-amino-acid analogue of α-melanocyte-stimulating hormone (α-MSH) and a melanocortin-1 receptor (MC1R) agonist, developed from α-MSH research at the University of Arizona and commercialized as the drug afamelanotide by Clinuvel Pharmaceuticals. By agonizing MC1R it stimulates eumelanin synthesis in the epidermis; in erythropoietic protoporphyria (EPP) the increased eumelanin absorbs light and reduces the phototoxic reaction driven by protoporphyrin IX, increasing pain-free light exposure. As the drug Scenesse, it is FDA-approved (October 2019) and EMA-approved (2014) for EPP &mdash; a 16 mg subcutaneous implant given every 2 months under prescription. Importantly, the &ldquo;Melanotan I&rdquo; / MT-1 sold by research vendors is unapproved, research-grade material &mdash; not the approved drug Scenesse &mdash; for research use only, and it is prohibited in sport by WADA. It must not be confused with{" "}
            <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, a different, smaller, unapproved peptide. It is studied alongside skin and pigmentation compounds such as{" "}
            <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>{" "}
            and{" "}
            <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">FDA/EMA-approved (as the drug Scenesse) to increase pain-free light exposure in adults with EPP</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">MC1R agonism stimulating epidermal eumelanin synthesis (photoprotective melanin)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduces the phototoxic reaction in EPP &mdash; the basis for the approved indication</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Studied for photoprotection and polymorphic light eruption</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> For the approved drug Scenesse, the FDA/EMA-approved regimen for EPP is a 16 mg controlled-release subcutaneous implant administered by a healthcare professional every 2 months (prescription-only). For research-grade Melanotan I / MT-1 there is no validated research-use dose, and Prof. Peptide does not publish one &mdash; the research material is unapproved and is not the branded drug.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> Scenesse is a prescription implant administered by a healthcare professional. Research-grade Melanotan I / MT-1 is sold by specialty peptide vendors for laboratory use only and is not the approved drug. PP maintains a vetted list of vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-24 mt-12 border-t-2 border-brand/30 pt-12">
            <h2 className="section-heading mb-3">
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

      <div className="flex flex-wrap gap-2 mt-8">
        {["Skin Health", "Photoprotection", "MC1R Agonist", "FDA-Approved Drug"].map((tag) => (
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
        <Link href="/peptides/melanotan-ii" className="text-sm font-medium text-[#3A759F] hover:underline">Melanotan II</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#3A759F] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/pt-141" className="text-sm font-medium text-[#3A759F] hover:underline">PT-141</Link>
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
    <ContactLink pageName="Melanotan I (Afamelanotide)" pagePath="/peptides/melanotan-i" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
