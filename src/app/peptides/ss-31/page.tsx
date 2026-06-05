import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/ss-31",
  title: "SS-31 (Elamipretide) — Forzinity, Mitochondrial Cardiolipin Peptide | Prof. Peptide",
  description:
    "SS-31 / elamipretide research profile: cardiolipin-targeting mitochondrial mechanism, the FDA-approved drug Forzinity for Barth syndrome vs. research-use-only SS-31, preclinical bioenergetic and aging studies, dosing, references.",
});

const faqs = [
  {
    q: "Is SS-31 FDA-approved?",
    a: "The drug elamipretide is — under the brand Forzinity (elamipretide HCl), it received FDA accelerated approval on September 19, 2025 for Barth syndrome in adult and pediatric patients weighing at least 30 kg, as a once-daily subcutaneous, prescription-only therapy. It is the first FDA-approved mitochondria-targeted therapeutic, and continued approval may be contingent on confirmatory trials. Critically, the 'SS-31' sold by research vendors is NOT Forzinity — it is unapproved, research-grade material for research use only, not for human use.",
  },
  {
    q: "What is the difference between SS-31, elamipretide, and Forzinity?",
    a: "They refer to the same molecule at different stages. SS-31 (and names like MTP-131 and Bendavia) is the research designation; elamipretide is the international nonproprietary drug name; Forzinity is the FDA-approved branded medicine (elamipretide hydrochloride). Research-grade 'SS-31' sold by peptide vendors is unapproved material and is not the branded drug Forzinity.",
  },
  {
    q: "How does SS-31 work?",
    a: "SS-31 is a cell-penetrating aromatic-cationic tetrapeptide that accumulates selectively in the inner mitochondrial membrane through its affinity for the phospholipid cardiolipin. By binding and stabilizing cardiolipin, it helps stabilize cristae structure and respiratory-chain supercomplexes, reduces mitochondrial reactive oxygen species, preserves the mitochondrial membrane potential, and improves ATP production.",
  },
  {
    q: "What does the research show?",
    a: "Clinically, the FDA accelerated approval for Barth syndrome rests on the TAZPOWER trial program. Beyond that single approved indication, the bioenergetic and anti-aging findings are preclinical: improved ADP sensitivity in aged mitochondria, preserved exercise tolerance in aged mice, and improved learning and memory after chronic sleep deprivation in mice. There are no large independent human trials for general anti-aging or performance use.",
  },
  {
    q: "Is there a standard research dose for SS-31?",
    a: "There is no validated research-use dose. The approved drug Forzinity has an FDA-approved, weight-based once-daily subcutaneous regimen for Barth syndrome that comes from its prescribing information and a treating clinician — not from this page. For research-grade SS-31, Prof. Peptide does not publish an injectable mg or mg/kg schedule because none has been validated, and the research material is unapproved and not the branded drug.",
  },
  {
    q: "Where can I buy SS-31?",
    a: "Forzinity is a prescription medication distributed through specialty pharmacy channels. The 'SS-31' sold by specialty research peptide vendors is unapproved, research-grade material for laboratory use only — not the approved drug. Quality varies; verify a Certificate of Analysis before purchase.",
  },
];

// Published Studies cards use only the four verified PubMed citations. The FDA approval
// and TAZPOWER trial are cited in prose (References) without a fabricated PubMed link.
const studies = [
  {
    title: "Elamipretide Improves ADP Sensitivity in Aged Mitochondria via the Adenine Nucleotide Translocator",
    authors: "Pharaoh G, et al.",
    journal: "GeroScience / PubMed",
    year: "2023",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/37462785/",
    summary: "Preclinical study showing that elamipretide improved ADP sensitivity in aged mitochondria through effects on the adenine nucleotide translocator (ANT) — linking the cardiolipin-targeting mechanism to a measurable improvement in mitochondrial bioenergetics in aging.",
  },
  {
    title: "Intermittent Elamipretide Preserves Exercise Tolerance in Aged Female Mice",
    authors: "Campbell MD, et al.",
    journal: "GeroScience / PubMed",
    year: "2023",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/36840897/",
    summary: "In aged female mice, an intermittent elamipretide regimen preserved exercise tolerance — a functional, whole-animal readout consistent with the peptide's proposed mitochondrial-support mechanism. Preclinical.",
  },
  {
    title: "SS-31 in Mitigating Mitochondrial Dysfunction (Review)",
    authors: "Du X, et al.",
    journal: "Mitochondrion / PubMed",
    year: "2024",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/38237649/",
    summary: "A 2024 review summarizing the role of SS-31 in mitigating mitochondrial dysfunction across experimental models, collecting the cardiolipin-binding mechanism and the downstream effects on cristae, supercomplexes, ROS, membrane potential, and ATP production.",
  },
  {
    title: "Elamipretide Improves Learning and Memory Impairment from Chronic Sleep Deprivation in Mice",
    authors: "Zhang YM, et al.",
    journal: "Brain and Behavior / PubMed",
    year: "2024",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/38688894/",
    summary: "In a mouse model of chronic sleep deprivation, elamipretide improved learning and memory impairment — extending the preclinical evidence into a neurocognitive context. Preclinical; not a human trial.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does SS-31 work?",
    intro:
      "SS-31 (elamipretide) is a cell-penetrating aromatic-cationic tetrapeptide that targets the mitochondrion directly. Its defining property is selective accumulation in the inner mitochondrial membrane through affinity for the phospholipid cardiolipin, where it stabilizes the machinery of energy production. The cardiolipin-binding mechanism is well-characterized in preclinical work; the downstream effects below are drawn from that literature.",
    body: [
      "Cardiolipin Binding & Mitochondrial Targeting [3]. SS-31 accumulates selectively in the inner mitochondrial membrane through its affinity for the phospholipid cardiolipin — concentrating the peptide exactly where the respiratory chain operates.",
      "Cristae & Supercomplex Stabilization [3]. By binding and stabilizing cardiolipin, SS-31 helps preserve cristae structure and the assembly of respiratory-chain supercomplexes.",
      "Reduced Mitochondrial ROS and Preserved Membrane Potential [3]. It reduces mitochondrial reactive oxygen species production and helps preserve the mitochondrial membrane potential.",
      "Improved ATP Production [3]. Stabilizing the respiratory chain improves ATP production in dysfunctional or aged mitochondria.",
      "ADP Sensitivity via the Adenine Nucleotide Translocator [1]. In aged mitochondria, elamipretide improved ADP sensitivity through effects on the adenine nucleotide translocator (Pharaoh et al. 2023).",
    ],
  },
  {
    id: "research",
    title: "What is SS-31 researched for?",
    intro:
      "SS-31's evidence base splits sharply by context. Clinically, the FDA accelerated approval (as Forzinity) is for one ultra-rare disease — Barth syndrome — and rests on the TAZPOWER trial program. Everything broader — anti-aging, cardiac, metabolic, cognitive, and athletic-performance applications — is preclinical (rodent and in-vitro) or in unconfirmed development. Read the findings below with that distinction in mind.",
    body: [
      "Barth Syndrome — FDA Approval (TAZPOWER). The FDA accelerated approval of elamipretide (Forzinity) for Barth syndrome rests on the TAZPOWER trial program. Additional indications, including dry age-related macular degeneration and primary mitochondrial myopathy, have been in development. (Approval basis cited in prose; no PubMed link is attached to the TAZPOWER paper here.)",
      "Aged Mitochondria — ADP Sensitivity [1]. Elamipretide improved ADP sensitivity in aged mitochondria via the adenine nucleotide translocator (Pharaoh et al. 2023). Preclinical.",
      "Exercise Tolerance in Aging [2]. Intermittent elamipretide preserved exercise tolerance in aged female mice (Campbell et al. 2023). Preclinical.",
      "Cognition & Sleep Deprivation [4]. Elamipretide improved learning and memory impairment caused by chronic sleep deprivation in mice (Zhang et al. 2024). Preclinical.",
      "Mitochondrial Dysfunction (Review) [3]. A 2024 review summarizes SS-31's role in mitigating mitochondrial dysfunction across experimental models (Du et al. 2024).",
    ],
  },
  {
    id: "dosing",
    title: "How is SS-31 dosed?",
    intro:
      "There are two very different answers depending on which material is meant. The approved drug Forzinity has an FDA-approved clinical regimen for Barth syndrome. Research-grade SS-31 has no validated research-use dose.",
    content:
      "For the approved drug Forzinity, an FDA-approved dosing regimen exists for Barth syndrome — a weight-based, once-daily subcutaneous injection given under prescription to patients weighing at least 30 kg. The specific weight-based figures belong to the prescribing information and a treating clinician, not to this page, so none are reproduced here. For research-grade SS-31, there is no validated research-use dose; it is unapproved material handled in the laboratory. Researchers reconstitute lyophilized powder with bacteriostatic or sterile water (see storage below); any volume chosen is a generic handling convenience, not a dosing recommendation. Prof. Peptide deliberately does not publish an injectable mg or mg/kg schedule for research-grade SS-31 — none has been validated, and the research material is not the approved drug.",
  },
  {
    id: "side-effects",
    title: "What are the side effects of SS-31?",
    intro:
      "The two materials must again be kept separate. For the approved drug Forzinity, the documented adverse-effect profile is established in its Barth-syndrome program and is detailed in the FDA prescribing information — that document, not this page, is the authoritative source for the drug's safety. For research-grade SS-31 used outside the approved indication, human safety is not established. This is unapproved, Research Use Only material and is not intended for human consumption; nothing here should be read as human-use guidance.",
  },
  {
    id: "storage",
    title: "How should SS-31 be stored?",
    body: [
      "Research-grade SS-31 (lyophilized powder): store cold and desiccated, protected from light. Freeze at -20°C for long-term storage; 2–8°C is acceptable short-term.",
      "Reconstitute with bacteriostatic or sterile water for injection. Add the water slowly down the inside wall of the vial and swirl gently — do not shake.",
      "Reconstituted solution: refrigerate at 2–8°C and keep protected from light.",
      "Protect from light at all times; store in original packaging.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
      "The approved drug Forzinity should be stored according to its FDA prescribing information, not these research-handling notes.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of SS-31 research?",
    intro:
      "This is the most important section to read carefully. The FDA approval is narrow, and almost everything else about SS-31 is earlier-stage than the marketing around it suggests.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The FDA approval (Forzinity, September 19, 2025) is an accelerated approval for a single ultra-rare disease &mdash; Barth syndrome &mdash; in patients weighing at least 30 kg. Accelerated approval was based on an intermediate clinical endpoint (knee-extensor muscle strength), and continued approval may be contingent on confirmatory trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Broader claims &mdash; anti-aging, cardiac, metabolic, cognitive, and athletic-performance benefits &mdash; remain preclinical (rodent and in-vitro) or in unconfirmed clinical development (for example, dry age-related macular degeneration and primary mitochondrial myopathy). Some earlier elamipretide programs reported mixed clinical results. Effect sizes and any translation of the preclinical findings to general human use are not established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Critically, the &lsquo;SS-31&rsquo; sold by research vendors is unapproved, research-grade material &mdash; not the approved drug Forzinity &mdash; and is for research use only, not for human consumption. Quality varies across vendors, so verify a Certificate of Analysis before purchase.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source SS-31",
    intro:
      "Forzinity (elamipretide) is a prescription medication for Barth syndrome, distributed through specialty pharmacy channels. The 'SS-31' sold by specialty peptide vendors is unapproved, research-grade material for laboratory use only — not the approved drug. Quality varies across vendors; verify a Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-4">
        {/* TODO: add a VendorHighlightBlock here once SS-31 vendors are wired into the vendor data. Do NOT add a fabricated carrier/note or invent a code in the meantime — use the inline /coupons link below until vendors are added. */}
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
    title: "SS-31 FAQ",
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
          Pharaoh G, et al. Elamipretide improves ADP sensitivity in aged mitochondria via the adenine nucleotide translocator. GeroScience. 2023;45:3529-3548. PMID 37462785.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/37462785/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/37462785/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Campbell MD, et al. Intermittent elamipretide preserves exercise tolerance in aged female mice. GeroScience. 2023;45:2245-2255. PMID 36840897.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/36840897/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/36840897/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Du X, et al. SS-31 in mitigating mitochondrial dysfunction (review). Mitochondrion. 2024;75:101846. PMID 38237649.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/38237649/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/38237649/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Zhang YM, et al. Elamipretide improves learning and memory impairment induced by chronic sleep deprivation in mice. Brain Behav. 2024;14:e3508. PMID 38688894.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/38688894/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/38688894/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          FDA. Forzinity (elamipretide) accelerated approval for Barth syndrome; approval basis: TAZPOWER trial. September 19, 2025. (FDA drug approval; no PubMed/DOI.)
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
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper. These are preclinical; the FDA approval for Barth syndrome rests on the TAZPOWER trial program, cited in References.
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

export default function SS31Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"SS-31 (Elamipretide)","description":"SS-31 / elamipretide research profile: cardiolipin-targeting mitochondrial mechanism, the FDA-approved drug Forzinity for Barth syndrome vs. research-use-only SS-31, preclinical bioenergetic and aging studies, dosing, references.","url":"https://profpeptide.com/peptides/ss-31","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"SS-31 (Elamipretide)"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">SS-31 (Elamipretide)</h1>
        <span className="tag">Longevity</span>
        <span className="tag">FDA-Approved Drug</span>
        <span className="tag">Research-Grade RUO</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: June 5, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Elamipretide, MTP-131, Bendavia, RX-31; brand name Forzinity
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Synthetic aromatic-cationic mitochondria-targeting tetrapeptide (Szeto&ndash;Schiller peptide)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Molecular Profile:</span> D-Arg-Dmt-Lys-Phe-NH2 (D-Arg-2&prime;,6&prime;-dimethyl-Tyr-Lys-Phe-NH2) &middot; C32H49N9O5 &middot; ~639.8 g/mol &middot; PubChem CID 11764719 &middot; CAS 736992-21-5 (free base; the hydrochloride salt has a separate CAS) &middot; DrugBank DB11981
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Origin:</span> Discovered by Hazel Szeto and Peter Schiller (Weill Cornell); developed by Stealth BioTherapeutics
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Dual status &mdash; FDA-approved drug Forzinity (elamipretide HCl) for Barth syndrome (accelerated approval, Sept 19, 2025; prescription-only); research-grade &ldquo;SS-31&rdquo; is unapproved and Research Use Only
        </p>
      </div>

      <div className="mb-8 p-4 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Important &mdash; approved drug vs. research material:</span> The drug elamipretide (brand Forzinity, elamipretide HCl) received FDA accelerated approval on September 19, 2025 for Barth syndrome (adult and pediatric patients weighing at least 30 kg), administered once-daily subcutaneous, prescription-only &mdash; the first FDA-approved mitochondria-targeted therapeutic; continued approval may be contingent on confirmatory trials. The &ldquo;SS-31&rdquo; sold by research vendors is unapproved, research-grade material &mdash; NOT the approved drug Forzinity &mdash; and is for Research Use Only, not for human use.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is SS-31 (Elamipretide)?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            SS-31 (elamipretide) is a synthetic aromatic-cationic mitochondria-targeting tetrapeptide &mdash; a Szeto&ndash;Schiller peptide &mdash; discovered by Hazel Szeto and Peter Schiller at Weill Cornell and developed by Stealth BioTherapeutics. Its defining feature is selective accumulation in the inner mitochondrial membrane through affinity for the phospholipid cardiolipin; by binding and stabilizing cardiolipin it supports cristae structure and respiratory-chain supercomplexes, lowers mitochondrial reactive oxygen species, preserves membrane potential, and improves ATP production. As the drug elamipretide (brand Forzinity), it received FDA accelerated approval on September 19, 2025 for Barth syndrome &mdash; the first FDA-approved mitochondria-targeted therapeutic. Importantly, the &ldquo;SS-31&rdquo; sold by research vendors is unapproved, research-grade material &mdash; not the approved drug Forzinity &mdash; and is for research use only. It is studied alongside other bioenergetic and longevity compounds such as{" "}
            <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>{" "}
            and{" "}
            <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">FDA-approved (as the drug Forzinity) for Barth syndrome &mdash; the first mitochondria-targeted therapeutic</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Selective inner-mitochondrial-membrane targeting via cardiolipin binding</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stabilizes cristae and respiratory-chain supercomplexes; reduces mitochondrial ROS; preserves membrane potential; improves ATP production</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Preclinical improvements in aged-mitochondria ADP sensitivity, exercise tolerance (aged mice), and learning/memory after sleep deprivation (mice)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> For the approved drug Forzinity, FDA-approved dosing for Barth syndrome is a weight-based once-daily subcutaneous injection (prescription-only, patients weighing at least 30 kg); the specific weight-based figures come from the prescribing information and a treating clinician. For research-grade SS-31 there is no validated research-use dose, and Prof. Peptide does not publish one &mdash; the research material is unapproved and is not the branded drug.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Forzinity is a prescription medication. Research-grade SS-31 is sold by specialty peptide vendors for laboratory use only and is not the approved drug. PP maintains a vetted list of vendors with verified discount codes. See{" "}
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
        {["Longevity", "Mitochondrial", "Cardiolipin", "FDA-Approved Drug"].map((tag) => (
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
        <Link href="/peptides/nad-plus" className="text-sm font-medium text-[#0891b2] hover:underline">NAD+</Link>
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
        <Link href="/peptides/mots-c" className="text-sm font-medium text-[#0891b2] hover:underline">MOTS-c</Link>
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
    <ContactLink pageName="SS-31 (Elamipretide)" pagePath="/peptides/ss-31" />
    </div>
    </>
  );
}
