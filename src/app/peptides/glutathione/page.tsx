import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/glutathione",
  title: "Glutathione (GSH) — Master Antioxidant, Oral Bioavailability & Evidence | Prof. Peptide",
  description:
    "Glutathione (GSH) research profile: the body's master intracellular antioxidant. Genuine antioxidant/detox science vs. poor oral bioavailability and unproven skin-whitening claims — mechanism, dosing, safety, status.",
});

const faqs = [
  {
    q: "Does oral glutathione actually work?",
    a: "It's mixed — and this is the single most important thing to understand. Glutathione is a tripeptide that is largely broken down by peptidases in the digestive tract, so much of an oral dose never reaches cells intact. Human trials disagree: one placebo-controlled study found oral glutathione did not change systemic oxidative-stress biomarkers, while a separate 6-month trial found high-dose oral glutathione (250–1,000 mg/day) did raise body stores over time. The honest read: oral glutathione is far less reliable than the marketing implies, which is exactly why researchers often use IV, liposomal, intranasal, or precursor routes (NAC) instead.",
  },
  {
    q: "Is glutathione effective for skin whitening?",
    a: "That claim is largely unproven and not FDA-evaluated. Glutathione is marketed heavily (especially via IV) for skin lightening on the theory that it shifts melanin production, but the supporting human evidence is weak — small, short-duration studies with inconsistent results — and no regulator has approved it for this use. Some health authorities have specifically warned about the safety of high-dose intravenous glutathione for cosmetic skin lightening. Treat skin-whitening as a marketing claim, not established science.",
  },
  {
    q: "What's the difference between glutathione and NAC?",
    a: "NAC (N-acetylcysteine) is a precursor — it supplies cysteine, the rate-limiting building block your cells use to make glutathione. Because NAC is well absorbed orally and reliably raises intracellular glutathione, much of the strongest 'glutathione' evidence (including the acetaminophen-overdose antidote) is actually about boosting synthesis with NAC rather than swallowing glutathione directly. Some research also uses GlyNAC (glycine + NAC) to supply both limiting amino acids.",
  },
  {
    q: "Is glutathione FDA-approved?",
    a: "No. Glutathione is not FDA-approved as a treatment for any condition. It is sold as a dietary supplement, and regulators note its benefits are not well defined; it has not been evaluated by the FDA for safety and effectiveness in that role, and its cosmetic skin-lightening use is not FDA-evaluated. Research-grade material is sold research-use-only.",
  },
  {
    q: "How is glutathione dosed?",
    a: "There is no single validated protocol. Oral supplement doses commonly range 250–1,000 mg/day (often as liposomal or reduced-GSH forms to improve absorption); clinical/research settings sometimes use intravenous or intranasal glutathione to bypass the gut; and many protocols instead supply the precursor NAC (typically 600–1,800 mg/day). Given the bioavailability caveats and lack of an approved indication, dosing should be discussed with a knowledgeable clinician.",
  },
  {
    q: "Where can I buy glutathione?",
    a: (
      <>
        Research-grade glutathione is sold by specialty research-peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "Glutathione: overview of its protective roles, measurement, and biosynthesis",
    authors: "Forman HJ, Zhang H, Rinna A.",
    journal: "Molecular Aspects of Medicine",
    year: "2009",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/18796312/",
    summary: "The foundational reference on glutathione biology. It details GSH as the most abundant intracellular thiol antioxidant, synthesized inside cells from glutamate, cysteine, and glycine, and central to redox balance, detoxification, and the regeneration of other antioxidants. This is the well-established, non-controversial science that anchors the profile — the antioxidant/detox role of glutathione is real and thoroughly characterized, whatever the debates about how best to raise it.",
  },
  {
    title: "Deficient synthesis of glutathione underlies oxidative stress in aging and can be corrected by dietary cysteine and glycine supplementation",
    authors: "Sekhar RV, et al.",
    journal: "American Journal of Clinical Nutrition",
    year: "2011",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/21795440/",
    summary: "A human study showing older adults had markedly lower glutathione and higher oxidative stress than younger controls, and that supplying the precursor amino acids cysteine and glycine restored glutathione synthesis and lowered oxidative-stress markers within two weeks. It's a key piece of the honest framing: the most reliable way to raise glutathione in people is often supplying its building blocks (precursor supplementation), not ingesting glutathione itself.",
  },
  {
    title: "Randomized controlled trial of oral glutathione supplementation on body stores of glutathione",
    authors: "Richie JP Jr, et al.",
    journal: "European Journal of Nutrition",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/24791752/",
    summary: "One side of the oral-bioavailability debate: this 6-month RCT reported that oral glutathione at 250–1,000 mg/day did increase body stores of glutathione in blood and cells over time. It is the more favorable oral result — but note it required high doses over months, and should be read alongside trials that found no benefit on oxidative-stress biomarkers. Together they show oral glutathione is inconsistent, not the reliable antioxidant boost it's often sold as.",
  },
  {
    title: "Effects of oral glutathione supplementation on systemic oxidative stress biomarkers in human volunteers",
    authors: "Allen J, Bradley RD.",
    journal: "J Altern Complement Med",
    year: "2011",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/21875351/",
    summary: "The other side of the debate: this placebo-controlled trial of oral glutathione found no significant change in systemic oxidative-stress biomarkers. Paired with the Richie RCT, it captures why the honest verdict on oral glutathione is 'mixed' — some measures move under some protocols, others don't, and the gut degrades much of the dose. This is the evidence behind the profile's central caveat.",
  },
  {
    title: "Glutathione as a skin whitening agent: Facts, myths, evidence and controversies",
    authors: "Sonthalia S, Daulatabad D, Sarkar R.",
    journal: "Indian J Dermatol Venereol Leprol",
    year: "2016",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/27088927/",
    summary: "A dermatology review directly examining the popular skin-whitening claim. It concludes the evidence for glutathione as a depigmenting agent is weak and inconclusive — small, short studies with methodological limits — and highlights safety concerns with intravenous cosmetic use. This is the reference behind the profile's honest treatment of skin whitening as an unproven marketing claim rather than established science.",
  },
  {
    title: "Phase IIb Study of Intranasal Glutathione in Parkinson's Disease",
    authors: "Mischley LK, et al.",
    journal: "Journal of Parkinson's Disease",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28436395/",
    summary: "A randomized, placebo-controlled trial of intranasal glutathione (chosen to bypass poor oral absorption) in Parkinson's disease. It found improvement in symptom scores but no significant difference from placebo — the placebo group improved too. It's an honest example of a well-designed glutathione trial in a neurodegenerative condition that did not demonstrate benefit over placebo, tempering enthusiasm for direct glutathione supplementation in that setting.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does glutathione work?",
    intro:
      "Glutathione (GSH) is a tripeptide of glutamate, cysteine, and glycine, and the most abundant antioxidant made inside human cells. Its mechanisms are well characterized: it neutralizes reactive oxygen species directly, serves as the substrate for antioxidant enzymes, regenerates other antioxidants, and drives phase-II detoxification. The cysteine thiol (-SH) group is the chemically active part.",
    body: [
      "Redox cycling [1]. Glutathione shuttles between its reduced (GSH) and oxidized (GSSG) forms via glutathione peroxidase (which uses GSH to neutralize peroxides) and glutathione reductase (which regenerates GSH). The GSH:GSSG ratio is a core readout of a cell's redox state.",
      "Direct antioxidant + regeneration [1]. GSH scavenges reactive oxygen and nitrogen species directly, and regenerates other antioxidants such as vitamins C and E back to their active forms — making it a hub of the cellular antioxidant network rather than a single-purpose scavenger.",
      "Phase-II detoxification [1]. Via glutathione-S-transferases, GSH conjugates to toxins, drugs, and reactive metabolites (including the toxic metabolite of acetaminophen) so they can be excreted — the basis of its role in hepatic detoxification.",
      "Precursor-limited synthesis [2]. Cells build GSH from glutamate, cysteine, and glycine, with cysteine usually rate-limiting. This is why supplying precursors (e.g. NAC, or glycine + NAC) can raise intracellular glutathione more reliably than ingesting glutathione itself.",
      "Immune function [1]. Adequate glutathione supports lymphocyte proliferation and function; depletion is associated with impaired immune responses in research settings.",
    ],
  },
  {
    id: "research",
    title: "What is glutathione researched for?",
    intro:
      "Glutathione's research base is genuinely broad and, for the underlying biology, strong. The important distinction to keep in mind: the evidence is strongest for glutathione's endogenous role and for precursor supplementation (NAC/GlyNAC), and weaker for direct glutathione supplements producing clinical benefit.",
    body: [
      "Oxidative stress and aging [2]. Glutathione declines with age and in many chronic diseases; restoring synthesis via cysteine and glycine precursors lowered oxidative-stress markers in older adults, a well-cited human result.",
      "Metabolic syndrome and insulin resistance. Low glutathione status is associated with oxidative stress in metabolic disease; precursor supplementation is studied for improving redox balance, though direct clinical outcomes are still being established.",
      "Hepatic and detoxification [1]. The strongest translational example is N-acetylcysteine (a glutathione precursor) as the standard antidote for acetaminophen overdose — it works by replenishing hepatic glutathione. This is precursor pharmacology, not oral glutathione.",
      "Neurodegenerative disease [6]. Glutathione depletion is seen in Parkinson's and Alzheimer's tissue, prompting trials — but a Phase IIb intranasal glutathione trial in Parkinson's did not beat placebo, illustrating the gap between mechanism and proven benefit.",
      "Immune and respiratory. Studied in conditions involving oxidative stress and in the airway (inhaled/nebulized forms), with mixed and preliminary results.",
    ],
  },
  {
    id: "bioavailability",
    title: "The oral bioavailability problem",
    intro:
      "This is the caveat that matters most and is most often glossed over in marketing. Glutathione is a peptide, and much of an oral dose is broken down in the gut before it can reach cells intact — so simply swallowing glutathione is an unreliable way to raise tissue levels.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The human trials genuinely disagree. One placebo-controlled study found oral glutathione produced no significant change in systemic oxidative-stress biomarkers, while a separate 6-month randomized trial found high-dose oral glutathione (250&ndash;1,000 mg/day) did raise body stores over time. The fair conclusion is &ldquo;mixed&rdquo;: results depend heavily on dose, duration, and which marker is measured, and the effect is far less dependable than product marketing suggests.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          This is exactly why researchers frequently bypass the oral route. Intravenous and intranasal glutathione deliver it directly; liposomal formulations aim to protect it through digestion; and precursor strategies &mdash; NAC, or glycine + NAC (GlyNAC) &mdash; supply the building blocks so cells synthesize their own glutathione. For raising intracellular glutathione in people, the precursor approach has some of the most consistent human data.
        </p>
      </div>
    ),
  },
  {
    id: "skin-whitening",
    title: "The skin-whitening claim",
    intro:
      "In several markets glutathione is sold aggressively &mdash; often as IV drips &mdash; for skin lightening. A serious profile has to label this accurately: it is largely an unproven marketing claim, not established science.",
    body: [
      "The theory. Glutathione is proposed to shift melanin synthesis toward lighter pigment, which is the marketing rationale for oral and IV 'skin whitening' products.",
      "The evidence [5]. Dermatology reviews find the supporting human studies are small, short, and methodologically weak, with inconsistent results — not sufficient to establish glutathione as an effective depigmenting agent.",
      "The regulatory reality. No regulator has approved glutathione for skin lightening, and some health authorities have warned specifically about the safety of high-dose intravenous glutathione used cosmetically. It is not FDA-evaluated for this use.",
      "Bottom line. Treat skin-whitening claims as marketing, distinct from glutathione's genuine antioxidant biology.",
    ],
  },
  {
    id: "dosing",
    title: "How is glutathione dosed?",
    intro:
      "There is no single validated protocol, and route matters more than for most compounds because of the oral-absorption issue. The figures below are common research/supplement ranges, not an approved regimen, and are complicated by the bioavailability caveats above.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral.</span> Commonly 250&ndash;1,000 mg/day, frequently as liposomal or reduced-GSH forms intended to improve absorption &mdash; but oral efficacy is inconsistent (see the bioavailability section).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Intravenous / intranasal.</span> Used in clinical and research settings to bypass the gut; the intranasal route was chosen in the Parkinson&apos;s trials for this reason.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Precursor route.</span> Many protocols instead use NAC (typically 600&ndash;1,800 mg/day), or glycine + NAC (GlyNAC), to raise the body&apos;s own glutathione synthesis &mdash; often the more reliable strategy.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Because glutathione has no approved indication and its benefits are not well defined by regulators, dosing decisions should involve a knowledgeable clinician. For reconstitution mechanics of research materials, see the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link> guide and the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of glutathione?",
    intro:
      "Glutathione is generally well tolerated (it is an endogenous molecule and is broadly regarded as safe as a supplement), but tolerability varies by route, and the cosmetic IV use carries specific safety concerns.",
    body: [
      "Oral. Usually well tolerated; occasional mild GI complaints (bloating, cramping) at higher doses.",
      "Inhaled/nebulized. Can trigger bronchospasm in some people with asthma or reactive airways.",
      "Intravenous (especially cosmetic high-dose). The main safety concern — health authorities have warned about adverse events with high-dose IV glutathione used for skin lightening, including reports of serious reactions.",
      "No characterized long-term supplement safety at high doses. Because the FDA has not evaluated glutathione for safety and effectiveness as a supplement, long-term high-dose use is not formally characterized.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of glutathione research?",
    intro:
      "The gap here is specific: excellent mechanistic and endogenous-biology science, weaker direct-supplement and cosmetic evidence.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Glutathione&apos;s antioxidant, detoxification, and redox roles are thoroughly established. But translating that into benefit from a glutathione supplement is where the evidence weakens: oral bioavailability is poor and human results are mixed, and much of the strongest &ldquo;glutathione&rdquo; clinical data is really about precursors like NAC rather than glutathione itself.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The widely marketed skin-whitening use is not supported by strong evidence and is not approved by any regulator, with specific safety warnings around high-dose IV cosmetic use. It should be read as a marketing claim.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Glutathione is not FDA-approved as a treatment; it is sold as a dietary supplement whose benefits regulators describe as not well defined, and research-grade material is sold research-use-only. It is best understood as a genuinely important molecule whose direct-supplement value is still unsettled.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source glutathione",
    intro:
      "Glutathione is sold both as a consumer supplement and as a research-use-only material by specialty peptide vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "aero-peptides", note: "Third-party ISO-lab tested · COA on request" },
            { slug: "ameano-peptides", note: "Published per-product COAs · third-party verified" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">
            See all {activeVendorCount} verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Glutathione FAQ",
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
          Forman HJ, Zhang H, Rinna A. Glutathione: overview of its protective roles, measurement, and biosynthesis. Mol Aspects Med. 2009;30(1-2):1-12.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18796312/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18796312/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sekhar RV, Patel SG, Guthikonda AP, et al. Deficient synthesis of glutathione underlies oxidative stress in aging and can be corrected by dietary cysteine and glycine supplementation. Am J Clin Nutr. 2011;94(3):847-853.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21795440/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21795440/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Richie JP Jr, Nichenametla S, Neidig W, et al. Randomized controlled trial of oral glutathione supplementation on body stores of glutathione. Eur J Nutr. 2015;54(2):251-263.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24791752/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24791752/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Allen J, Bradley RD. Effects of oral glutathione supplementation on systemic oxidative stress biomarkers in human volunteers. J Altern Complement Med. 2011;17(9):827-833.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21875351/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21875351/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sonthalia S, Daulatabad D, Sarkar R. Glutathione as a skin whitening agent: Facts, myths, evidence and controversies. Indian J Dermatol Venereol Leprol. 2016;82(3):262-272.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27088927/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27088927/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mischley LK, Lau RC, Shankland EG, et al. Phase IIb Study of Intranasal Glutathione in Parkinson&apos;s Disease. J Parkinsons Dis. 2017;7(2):289-299.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28436395/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/28436395/
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
          Plain-English summaries of the peer-reviewed studies behind the claims above &mdash; spanning glutathione&apos;s established biology, the mixed oral-supplement evidence, the skin-whitening controversy, and a neurodegenerative trial. Click any title to read the source paper.
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

const tocSections = [
  { id: "overview", title: "What is Glutathione?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function GlutathionePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Glutathione (GSH)","description":"Glutathione (GSH) research profile: the body's master intracellular antioxidant — mechanism, the oral bioavailability problem, precursor (NAC) science, unproven skin-whitening claims, dosing, safety, and regulatory status.","url":"https://profpeptide.com/peptides/glutathione","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Glutathione (GSH)"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">Glutathione (GSH)</h1>
        <span className="tag">Longevity</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: July 13, 2026
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">The body&apos;s master intracellular antioxidant &mdash; a tripeptide (&gamma;-glutamyl-cysteinyl-glycine, GSH). A small-molecule cofactor made inside every cell, not a classic peptide drug; studied for redox balance and detoxification.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">IV infusion, intranasal, or oral (also inhaled/nebulized) &mdash; IV is the common clinical/research route</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not well characterized &mdash; rapidly metabolized, varies by route</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">No validated protocol &mdash; oral commonly 250&ndash;1,000 mg/day; precursor (NAC) route ~600&ndash;1,800 mg/day</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not FDA-approved &mdash; sold as a dietary supplement and research-use-only; skin-whitening use not FDA-evaluated.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">

      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is Glutathione?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Glutathione (GSH) &mdash; also called L-glutathione, reduced glutathione, or &gamma;-glutamylcysteinylglycine &mdash; is a tripeptide made of glutamate, cysteine, and glycine, and the body&apos;s primary intracellular antioxidant. Synthesized inside virtually every cell, it maintains redox balance, drives phase-II detoxification, and regenerates other antioxidants like vitamins C and E. Its antioxidant and detoxification biology is genuine and thoroughly studied &mdash; but the way it&apos;s commonly sold outruns that evidence.
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <span className="font-semibold">Evidence honesty:</span> The antioxidant/detox science is real. Two caveats define this profile: (1) <span className="font-semibold">oral bioavailability is poor</span> &mdash; glutathione is largely broken down in digestion, and human trials of oral supplementation are mixed, which is why researchers use IV, liposomal, intranasal, or precursor (NAC) routes; and (2) the popular <span className="font-semibold">skin-whitening marketing is largely unproven and not FDA-evaluated</span>. The FDA has not evaluated glutathione for safety and effectiveness as a supplement (benefits &ldquo;not well defined&rdquo;).
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Research areas:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Master intracellular antioxidant &mdash; redox balance and reactive-oxygen-species defense</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Phase-II detoxification (including the acetaminophen metabolite, via the NAC precursor)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Oxidative stress &amp; aging, metabolic syndrome / insulin resistance</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Neurodegenerative research (Parkinson&apos;s, Alzheimer&apos;s) &mdash; promising mechanism, unproven clinically</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Contrast with strong precursor science (NAC / GlyNAC) vs. weaker direct-oral-supplement evidence</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">A note on the longevity context:</span> glutathione sits alongside compounds like{" "}
            <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>{" "}
            and{" "}
            <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>{" "}
            in cellular-health research &mdash; each targets a different arm of oxidative and mitochondrial resilience.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
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
        {["Antioxidant", "Detoxification", "Tripeptide", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/nad-plus" className="text-sm font-medium text-[#3A759F] hover:underline">NAD+</Link>
        <Link href="/peptides/ss-31" className="text-sm font-medium text-[#3A759F] hover:underline">SS-31</Link>
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#3A759F] hover:underline">Epitalon</Link>
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
    <ContactLink pageName="Glutathione (GSH)" pagePath="/peptides/glutathione" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
