import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/5-amino-1mq",
  title: "5-Amino-1MQ: NNMT Inhibitor, NAD+ & Metabolic Research",
  description:
    "5-Amino-1MQ is a small-molecule NNMT inhibitor (not a peptide) studied to raise NAD+ and curb fat in preclinical obesity models. Mechanism & safety.",
});

const faqs = [
  {
    q: "Is 5-Amino-1MQ a peptide?",
    a: "No. 5-Amino-1MQ is a small molecule — a membrane-permeable, selective inhibitor of the enzyme nicotinamide N-methyltransferase (NNMT), built on a quinolinium scaffold. It has no amino-acid sequence. It is grouped with metabolic research compounds because of its NAD+/metabolic mechanism, but structurally it is a small molecule, not a peptide.",
  },
  {
    q: "Is 5-Amino-1MQ FDA-approved?",
    a: "No. It is an unapproved research chemical with no FDA approval. The evidence is entirely preclinical (rodent and cell models); there are no human clinical trials.",
  },
  {
    q: "How does 5-Amino-1MQ work?",
    a: "It inhibits nicotinamide N-methyltransferase (NNMT) (IC50 about 1 µM). NNMT methylates nicotinamide using S-adenosylmethionine (SAM) to produce 1-methylnicotinamide (1-MNA) and S-adenosylhomocysteine (SAH). By inhibiting NNMT, 5-Amino-1MQ relieves this SAM 'methyl sink' and preserves nicotinamide for NAD+ salvage — associated in preclinical models with increased NAD+, higher energy expenditure, reduced lipogenesis and adiposity, and preserved lean mass.",
  },
  {
    q: "What does the research show?",
    a: "Only preclinical evidence. In diet-induced-obese mice, once-daily 5-Amino-1MQ over 28 days improved body composition and glucose/insulin parameters, with weight and fat-mass reductions occurring without reduced food intake. Earlier work characterized the inhibitor series (structure-activity studies), showed that membrane-permeable NNMT inhibitors reverse high-fat-diet-induced obesity in mice, and established NNMT as a metabolic target through genetic knockdown. There is no human data.",
  },
  {
    q: "Is there a standard research dose for 5-Amino-1MQ?",
    a: "No. There is no validated or FDA-approved dose. Preclinical studies used rodent dosing schedules, but those do not translate into a human dose, and Prof. Peptide does not extrapolate one. There is no established human protocol and no validated mg or mg/kg schedule; it is supplied as a solid research chemical (commonly the iodide salt), so no reconstitution table applies.",
  },
  {
    q: "Where can I buy 5-Amino-1MQ?",
    a: "5-Amino-1MQ is an unapproved research chemical sold by specialty research vendors for laboratory use only. Quality varies; verify a Certificate of Analysis before purchase.",
  },
];

// Published Studies: only the independently-confirmed PMID (39161060) is linked. The other
// sources are cited by name without a link (no PMID was verified) — no fabricated URLs.
const studies = [
  {
    title: "Nicotinamide N-Methyltransferase Inhibition Mitigates Obesity-Related Metabolic Dysfunction (5A1MQ in DIO Mice)",
    authors: "Babula JJ, Bui D, Stevenson HL, Watowich SJ, Neelakantan H",
    journal: "PubMed",
    year: "2024",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/39161060/",
    summary: "The most directly relevant 5-Amino-1MQ study: once-daily dosing for 28 days in diet-induced-obese (DIO) mice, assessing body composition, glucose and insulin parameters, liver pathology, and pharmacokinetics. NNMT inhibition mitigated obesity-related metabolic dysfunction, with weight and fat-mass reductions occurring without reduced food intake. Preclinical.",
  },
  {
    title: "Structure-Activity Relationship for Small-Molecule Inhibitors of Nicotinamide N-Methyltransferase",
    authors: "Neelakantan H, et al.",
    journal: "Journal of Medicinal Chemistry",
    year: "2017",
    access: "Cited by name",
    summary: "The discovery and structure-activity-relationship work that characterized the small-molecule NNMT inhibitor series. Referenced by name; no PubMed link was independently verified, so none is added.",
  },
  {
    title: "Selective and Membrane-Permeable Small-Molecule Inhibitors of NNMT Reverse High-Fat-Diet-Induced Obesity in Mice",
    authors: "Neelakantan H, et al.",
    journal: "Biochemical Pharmacology",
    year: "2018",
    access: "Cited by name",
    summary: "A preclinical study showing that selective, membrane-permeable small-molecule NNMT inhibitors reversed high-fat-diet-induced obesity in mice — extending the target's metabolic rationale to pharmacological inhibition. Referenced by name; no link added.",
  },
  {
    title: "Nicotinamide N-Methyltransferase Knockdown Protects Against Diet-Induced Obesity",
    authors: "Kraus D, et al.",
    journal: "Nature",
    year: "2014",
    access: "Cited by name",
    summary: "The foundational genetic proof-of-concept: antisense-oligonucleotide knockdown of NNMT (not a small molecule) protected against diet-induced obesity, establishing NNMT as a metabolic target. Referenced by name; no link added.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does 5-Amino-1MQ work?",
    intro:
      "5-Amino-1MQ is a small-molecule, membrane-permeable, selective inhibitor of nicotinamide N-methyltransferase (NNMT) — a quinolinium compound, not a peptide. NNMT methylates nicotinamide using S-adenosylmethionine (SAM), producing 1-methylnicotinamide (1-MNA) and S-adenosylhomocysteine (SAH). By inhibiting NNMT (IC50 ~1 µM), 5-Amino-1MQ relieves that SAM 'methyl sink' and preserves nicotinamide for NAD+ salvage. The downstream metabolic effects below are all from preclinical (rodent and cell) models.",
    body: [
      "NNMT Inhibition. 5-Amino-1MQ is a selective small-molecule inhibitor of nicotinamide N-methyltransferase (NNMT), with an IC50 of about 1 µM. It is a quinolinium compound and has no amino-acid sequence.",
      "Relieving the SAM Methyl Sink. NNMT methylates nicotinamide using S-adenosylmethionine (SAM), producing 1-methylnicotinamide (1-MNA) and S-adenosylhomocysteine (SAH). Inhibiting NNMT relieves this 'methyl sink' on SAM.",
      "Preserving Nicotinamide for NAD+ Salvage [1]. By reducing nicotinamide methylation, NNMT inhibition preserves nicotinamide for the NAD+ salvage pathway — associated in preclinical models with increased NAD+.",
      "Metabolic Effects in Rodent Models [1]. NNMT inhibition is associated with higher energy expenditure, reduced lipogenesis and adiposity, and preserved lean mass. In diet-induced-obese (DIO) mice, weight and fat-mass reductions occurred without reduced food intake.",
    ],
  },
  {
    id: "research",
    title: "What is 5-Amino-1MQ researched for?",
    intro:
      "5-Amino-1MQ's research base is entirely preclinical, centered on metabolic disease in rodents. The most directly relevant study dosed it once-daily for 28 days in diet-induced-obese mice; supporting work spans the discovery/structure-activity of the inhibitor series, reversal of high-fat-diet obesity by NNMT inhibitors, and a foundational genetic proof-of-concept for NNMT as a metabolic target. There are no human clinical trials.",
    body: [
      "Diet-Induced Obesity in Mice [1]. Once-daily 5-Amino-1MQ for 28 days in diet-induced-obese mice improved body composition and glucose/insulin parameters, with liver-pathology and pharmacokinetic assessments; weight and fat-mass reductions occurred without reduced food intake (Babula et al. 2024). Preclinical.",
      "Discovery & Structure-Activity Relationship. The small-molecule NNMT inhibitor series was characterized in a structure-activity-relationship study (Neelakantan et al., J Med Chem 2017). Cited by name.",
      "High-Fat-Diet Obesity Reversal. Selective, membrane-permeable small-molecule NNMT inhibitors reversed high-fat-diet-induced obesity in mice (Neelakantan et al., Biochem Pharmacol 2018). Cited by name.",
      "Genetic Proof-of-Concept. NNMT knockdown using an antisense oligonucleotide (not a small molecule) protected against diet-induced obesity, establishing NNMT as a metabolic target (Kraus et al., Nature 2014). Cited by name.",
    ],
  },
  {
    id: "dosing",
    title: "How is 5-Amino-1MQ dosed?",
    intro:
      "There is no validated or FDA-approved dose for 5-Amino-1MQ. It is handled as a research chemical, and the only dosing in the literature comes from preclinical rodent studies.",
    content:
      "Preclinical studies administered 5-Amino-1MQ on rodent dosing schedules (for example, once-daily dosing over 28 days in diet-induced-obese mice), but rodent regimens do not translate into a human dose, and Prof. Peptide does not extrapolate one. There is no established human protocol, no validated mg or mg/kg schedule, and — because the compound is supplied as a solid research chemical (commonly the iodide salt) rather than a reconstituted injectable peptide — no reconstitution table is provided. The research material is unapproved and for laboratory use only.",
  },
  {
    id: "side-effects",
    title: "What are the side effects of 5-Amino-1MQ?",
    intro:
      "The human safety of 5-Amino-1MQ is not characterized. The available evidence is entirely preclinical (rodent and cell models), so there is no controlled human adverse-event data to summarize. This is an unapproved, Research Use Only research chemical and is not intended for human consumption; nothing here should be read as human-use guidance. Long-term safety is unknown.",
  },
  {
    id: "storage",
    title: "How should 5-Amino-1MQ be stored?",
    body: [
      "Solid (powder) form, commonly supplied as the iodide salt: store cold and desiccated, protected from light.",
      "Keep tightly sealed in the original container; protect from moisture and light.",
      "For long-term storage, store frozen (-20°C); short-term storage at 2–8°C is acceptable.",
      "If dissolved for laboratory use, keep the solution cold and protected from light, and handle promptly.",
      "Discard if the material is discolored or shows signs of degradation.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of 5-Amino-1MQ research?",
    intro:
      "This is the most important section to read carefully. Everything known about 5-Amino-1MQ comes from preclinical models, and it is a research chemical rather than an approved medicine.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The 5-Amino-1MQ evidence base is entirely preclinical &mdash; rodent and cell models. There are no human clinical trials, and long-term safety is unknown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          It is a small-molecule research chemical (an NNMT inhibitor on a quinolinium scaffold), not a peptide and not an approved drug. It is not FDA-approved, and the metabolic effects reported in mice have not been confirmed in humans.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is unapproved and for Research Use Only, not for human consumption. Quality varies across vendors, so verify a Certificate of Analysis before purchase.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source 5-Amino-1MQ",
    intro:
      "5-Amino-1MQ is an unapproved research chemical sold by specialty research vendors for laboratory use only. Quality varies across vendors; verify a Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-4">
        {/* TODO: add a VendorHighlightBlock here once 5-Amino-1MQ vendors are wired into the vendor data. Do NOT add a fabricated carrier/note or invent a code in the meantime — use the inline /coupons link below until vendors are added. */}
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Prof. Peptide maintains a vetted list of peptide and research-compound vendors with verified discount codes. See{" "}
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
    title: "5-Amino-1MQ FAQ",
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
          Babula JJ, Bui D, Stevenson HL, Watowich SJ, Neelakantan H. Nicotinamide N-methyltransferase inhibition mitigates obesity-related metabolic dysfunction. PMID 39161060.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/39161060/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/39161060/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Neelakantan H, et al. Structure-activity relationship for small molecule inhibitors of nicotinamide N-methyltransferase. J Med Chem. 2017;60(12):5015-5028. (Cited by name; no link added.)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Neelakantan H, et al. Selective and membrane-permeable small molecule inhibitors of NNMT reverse high-fat-diet-induced obesity in mice. Biochem Pharmacol. 2018;147:141-152. (Cited by name; no link added.)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kraus D, et al. Nicotinamide N-methyltransferase knockdown protects against diet-induced obesity. Nature. 2014;508(7495):258-262. (Foundational genetic proof-of-concept, antisense-oligonucleotide knockdown rather than small-molecule; cited by name, no link added.)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chemical identifiers: PubChem CID 950107; CAS 42464-96-0 (iodide salt); cation formula C10H11N2(+); cation molecular weight ~159.21 g/mol. (Cited by name/ID, no URL added.)
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
          Plain-English summaries of the studies behind the claims above. Only the independently-verified citation is linked; the others are cited by name (no external links are added because no public URLs were independently verified). All evidence is preclinical.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            ) : (
              <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 leading-snug mb-1">{s.title}</p>
            )}
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function FiveAmino1MQPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"5-Amino-1MQ","description":"5-Amino-1MQ (5-amino-1-methylquinolinium) research profile: a small-molecule NNMT inhibitor (not a peptide), its SAM/NAD+ mechanism, preclinical diet-induced-obesity studies, molecular identifiers, and research-use-only framing.","url":"https://profpeptide.com/peptides/5-amino-1mq","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"5-Amino-1MQ"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">5-Amino-1MQ</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Research Use Only</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: June 5, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> 5-amino-1-methylquinolinium, 5A1MQ
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Compound Class:</span> Small-molecule, membrane-permeable, selective inhibitor of nicotinamide N-methyltransferase (NNMT); quinolinium scaffold &mdash; <span className="font-semibold">not a peptide</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Molecular Profile:</span> Small molecule (not a peptide; no amino-acid sequence) &middot; cation formula C10H11N2(+) &middot; cation molecular weight ~159.21 g/mol &middot; commonly supplied as the iodide salt (higher salt mass, ~286 g/mol) &middot; PubChem CID 950107 &middot; CAS 42464-96-0 (iodide salt)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Origin:</span> Developed as a research-tool NNMT inhibitor (Watowich/Neelakantan, UT Medical Branch / Ridgeline Therapeutics)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research Use Only &mdash; unapproved research chemical; not FDA-approved; evidence is preclinical
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is 5-Amino-1MQ?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            5-Amino-1MQ (5-amino-1-methylquinolinium) is a small-molecule, membrane-permeable, selective inhibitor of nicotinamide N-methyltransferase (NNMT) &mdash; a quinolinium compound, not a peptide. It was developed as a research-tool NNMT inhibitor (Watowich/Neelakantan, UT Medical Branch / Ridgeline Therapeutics). NNMT methylates nicotinamide using S-adenosylmethionine (SAM) to make 1-methylnicotinamide and S-adenosylhomocysteine; by inhibiting NNMT (IC50 ~1 µM), 5-Amino-1MQ relieves this SAM &lsquo;methyl sink&rsquo; and preserves nicotinamide for NAD+ salvage. In preclinical (rodent and cell) models this is associated with increased NAD+, higher energy expenditure, reduced lipogenesis and adiposity, and preserved lean mass &mdash; with weight and fat-mass reductions in diet-induced-obese mice occurring without reduced food intake. It is structurally a small molecule and has no amino-acid sequence. It is grouped here with metabolic research compounds such as{" "}
            <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>{" "}
            and{" "}
            <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>, and it is one component of the{" "}
            <Link href="/peptides/nad-mots-c-5-amino-1mq" className="text-[#0891b2] hover:underline">Metabolic Blend (NAD+ / MOTS-c / 5-Amino-1MQ)</Link>. All evidence is preclinical, and research-grade 5-Amino-1MQ is unapproved, Research Use Only material &mdash; not for human use. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Selective NNMT inhibition (IC50 ~1 µM) that relieves the SAM methyl sink</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Preserves nicotinamide for NAD+ salvage &mdash; associated with increased NAD+ (preclinical)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Higher energy expenditure and reduced lipogenesis/adiposity in rodent models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Weight and fat-mass reduction in diet-induced-obese mice without reduced food intake; preserved lean mass</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> There is no validated or FDA-approved dose. Preclinical studies used rodent dosing schedules, but those do not translate into a human dose, and Prof. Peptide does not extrapolate one. It is supplied as a solid research chemical (commonly the iodide salt), so no reconstitution table applies, and no human mg or mg/kg schedule is published.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> 5-Amino-1MQ is an unapproved research chemical sold by specialty vendors for laboratory use only. PP maintains a vetted list of vendors with verified discount codes. See{" "}
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
        {["Metabolic", "NNMT Inhibitor", "Small Molecule", "Research Use Only"].map((tag) => (
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
        <Link href="/peptides/mots-c" className="text-sm font-medium text-[#0891b2] hover:underline">MOTS-c</Link>
        <Link href="/peptides/nad-mots-c-5-amino-1mq" className="text-sm font-medium text-[#0891b2] hover:underline">Metabolic Blend (NAD+ / MOTS-c / 5-Amino-1MQ)</Link>
        <Link href="/peptides/aod-9604" className="text-sm font-medium text-[#0891b2] hover:underline">AOD-9604</Link>
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
    <ContactLink pageName="5-Amino-1MQ" pagePath="/peptides/5-amino-1mq" />
    </div>
    </>
  );
}
