import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";

export const metadata = {
  alternates: { canonical: "/peptides/epitalon" },
  title: "Epitalon — Telomerase Activator, Pineal Peptide | Prof. Peptide",
  description:
    "Epitalon (AEDG tetrapeptide) research profile: telomerase activation, pineal/melatonin restoration, Khavinson research, dosing protocol, side effects.",
};

const faqs = [
  {
    q: "Is Epitalon FDA-approved?",
    a: "No. Epitalon is not FDA-approved for any indication and has not been through Western clinical trials. The bulk of clinical evidence comes from Russian gerontology research (Khavinson and colleagues, St. Petersburg Institute of Bioregulation and Gerontology). It is sold as a research-grade peptide.",
  },
  {
    q: "Does Epitalon really lengthen telomeres?",
    a: "Khavinson's lab reported telomerase activation and telomere lengthening in human somatic cells in culture. Animal lifespan extension was also reported. However, these findings have not been independently replicated in Western labs at the same level, and skepticism is warranted regarding the strength of telomere-lengthening claims. The mechanism is the most scientifically interesting claim but also the least replicated outside Khavinson's group.",
  },
  {
    q: "What's the difference between Epitalon and Epithalamin?",
    a: "Epithalamin is a natural pineal gland extract studied by Khavinson and colleagues for decades in Soviet-era gerontology research. Epitalon is a synthetic tetrapeptide (AEDG: alanine-glutamate-aspartate-glycine) developed in the 1980s as a short-peptide analog of epithalamin. Epitalon retains the key biological effects of the parent extract in a defined, reproducible synthetic form.",
  },
  {
    q: "How long until I see results?",
    a: "Acute effects (sleep quality, circadian rhythm) are measurable in 1–2 weeks of cycling. Telomerase activation effects accumulate over months. Multi-cycle protocols typically run 2–4 cycles over a year. Long-term effects (the framing in Russian cohort research) are measured over years, not weeks.",
  },
  {
    q: "Can I take Epitalon with NAD+ or other longevity peptides?",
    a: "Yes — Epitalon + NAD+ is a common longevity stack pairing (cellular metabolism + cellular aging). Compatible with standard longevity protocols including resveratrol, NMN, omega-3, vitamin D. Often combined with GHK-Cu for cellular regeneration + telomere protection. No documented major drug interactions at standard doses.",
  },
  {
    q: "Is Epitalon safe long-term?",
    a: "Russian cohort data spanning 20+ years suggests excellent long-term safety. Methodology differs from Western RCT standards, but the duration of human observation is unmatched in peptide research. Cycling rather than continuous use is standard practice. Cancer patients should consult their oncologist before use given theoretical telomerase activation concerns in cancer contexts.",
  },
  {
    q: "What is the optimal dosing schedule?",
    a: "Standard cycle: 5–10 mg total dose per cycle, divided as 0.5–1 mg subcutaneously daily for 10–20 days. Cycles are typically run 2–4 times per year, with 2–6 months between cycles. Bedtime injection is preferred to align with natural pineal/melatonin pathway timing. Lifelong cycling protocols are common in Russian gerontology contexts.",
  },
  {
    q: "Where can I buy Epitalon?",
    a: (
      <>
        Epitalon is sold by specialty research peptide vendors in the US. Quality varies dramatically — verify Certificate of Analysis. PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "Epithalon Peptide Induces Telomerase Activity and Telomere Elongation in Human Somatic Cells",
    authors: "Khavinson VK, Bondarev IE, Butyugov AA",
    journal: "Bulletin of Experimental Biology and Medicine / PubMed",
    year: "2003",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/12937682/",
    summary: "The foundational study establishing Epitalon\u2019s telomerase-activating properties. Using human fetal lung fibroblast cell cultures and the TRAP (Telomeric Repeat Amplification Protocol) assay, the researchers demonstrated that Epitalon activated expression of the hTERT telomerase catalytic subunit, significantly increased telomerase enzyme activity, and extended the proliferative lifespan of cells beyond the Hayflick limit \u2014 from termination at the 34th passage to continued division past the 44th passage, an extension of more than 10 additional cell doublings. This was the first study establishing that a simple tetrapeptide could reactivate telomerase in normal human somatic cells, a finding with profound theoretical implications for aging biology.",
  },
  {
    title: "Epitalon Increases Telomere Length in Human Cell Lines Through Telomerase Upregulation or ALT Activity",
    authors: "Al-Dulaimi S, Thomas R, Matta S, Roberts T",
    journal: "Biogerontology / PubMed",
    year: "2025",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/40908429/",
    summary: "The most significant independent replication of Epitalon\u2019s telomere effects \u2014 published in 2025 by a UK-based research group unaffiliated with the Khavinson lab. Using breast cancer cell lines and normal epithelial and fibroblast cells, the study confirmed dose-dependent telomere length extension in normal cells through hTERT upregulation and telomerase activation. It also found that cancer cells extended telomeres through an alternative pathway (ALT \u2014 Alternative Lengthening of Telomeres), with only minor ALT activity in normal cells. This independent confirmation significantly strengthens the telomerase-activation evidence base for Epitalon, as it moves the key finding beyond a single research group.",
  },
  {
    title: "Overview of Epitalon \u2014 Highly Bioactive Pineal Tetrapeptide with Promising Properties",
    authors: "Kossoy G, et al.",
    journal: "International Journal of Molecular Sciences / PMC",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11943447/",
    summary: "A comprehensive 2025 review synthesizing the full body of Epitalon research across telomere biology, antioxidant activity, lifespan extension, cancer research, and circadian regulation. Key findings documented: Epitalon increased lifespan of Drosophila by up to 16%; increased antioxidant enzyme activities (SOD, glutathione peroxidase) in aging rats; reduced spontaneous tumor incidence and metastases in mice; increased telomere lengths in blood cells of elderly humans aged 60\u201365 and 75\u201380; and restored melatonin secretion in aged monkeys and humans. The review also covers Epitalon\u2019s DNA-binding mechanism \u2014 specifically its interaction with ATTTC sequences in the promoter region of the telomerase gene \u2014 providing a molecular explanation for its telomerase-activating effect.",
  },
  {
    title: "Epitalon: What Can This Peptide Do for Telomere Protection, Aging, and Longevity?",
    authors: "de Wit H, PhD \u2014 Healthspan Research Review",
    journal: "Healthspan / Gethealthspan.com",
    year: "2025",
    access: "Open Access",
    url: "https://www.gethealthspan.com/research/article/epitalon",
    summary: "A balanced independent evidence review from a PhD-led research team not affiliated with the Khavinson group. The review identifies Epitalon as a multi-pathway geroprotector that acts on five hallmarks of aging simultaneously: telomere maintenance, epigenetic regulation, oxidative stress resilience, immune recalibration, and circadian rhythm restoration \u2014 making it one of the broadest-reaching peptides studied in longevity science. The review is appropriately candid about limitations: most evidence comes from a single research group, large-scale independent clinical trials are absent, and the extraordinary claims (especially lifespan extension) require independent validation before strong conclusions can be drawn. An essential balanced read alongside the primary Khavinson literature.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Telomerase Activation [1] — Cell culture studies show Epitalon activates telomerase, the enzyme that maintains chromosomal telomeres. Telomere shortening is a hallmark of cellular aging; telomerase activation potentially extends cellular replicative lifespan. This is the most scientifically interesting but least replicated claim.",
      "Pineal Gland Modulation [2] — Originally derived from epithalamin (pineal extract). Restores age-related decline in melatonin production. Melatonin rhythm restoration is a key claim in Russian gerontology research.",
      "Gene Expression — Modulates expression of genes related to circadian rhythm, antioxidant defense, and apoptosis regulation. Smaller scope than GHK-Cu's 4,000+ genes but specifically targeted to aging pathways.",
      "Antioxidant Activity — Increases activity of endogenous antioxidant enzymes (superoxide dismutase, catalase, glutathione peroxidase) in animal models.",
      "Circadian Rhythm Restoration — Pineal-mediated melatonin rhythm restoration improves sleep architecture and overall circadian function in aging populations.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Telomerase & Telomere Lengthening [1] — Khavinson's lab demonstrated telomerase activation in human somatic cells in culture. Telomere lengthening observed over multiple cell divisions. Has not been replicated in Western labs at the same level.",
      "Russian Long-Term Cohort Studies [3] — Multi-year human studies (1990s–2010s) reporting reduced mortality and improved age-related markers in elderly subjects taking Epitalon. Methodology differs from Western RCT standards but the duration is unmatched in peptide research.",
      "Sleep & Circadian — Restoration of melatonin rhythm in aging populations. Improved sleep quality reported in shorter-duration human studies.",
      "Animal Lifespan — Chick, mouse, and rat lifespan extension reported in Russian research. Effect sizes vary; methodology not always Western-standard.",
      "Cancer Research — Limited data; some studies suggest reduced spontaneous tumor incidence in animal models. Mechanism unclear.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Epitalon effects develop on multiple timescales. Acute effects (sleep quality, circadian rhythm) measurable in 1–2 weeks of cycling. Telomerase activation effects accumulate over months. Multi-cycle protocols typically run 2–4 cycles over a year. Long-term effects (the framing used in Russian cohort research) are measured over years rather than weeks. Most acute subjective benefits relate to sleep quality and energy.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Epitalon is administered as a subcutaneous injection in cycles. The standard Russian protocol uses 10–20 day intensive cycles followed by extended breaks.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Standard cycle: 5–10 mg total dose per cycle, divided as 0.5–1 mg subcutaneously daily for 10–20 days.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cycle frequency: 2–4 cycles per year, with 2–6 months between cycles.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Time of day: bedtime preferred (aligns with pineal/melatonin pathway).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reconstitution: 10 mg vial + 2 mL bacteriostatic water = 5 mg/mL.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lifelong cycling protocols are common in Russian gerontology contexts.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Some users do oral (sublingual) protocols, though evidence for oral bioavailability is limited.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          The single 10–20 day intensive cycle followed by 2–6 month break is the standard pattern. Cycling rather than continuous use is the conventional approach.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild injection site reactions</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Occasional vivid dreams or mild sleep changes during cycles</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No major adverse events documented in Russian cohort research over 20+ years</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical telomerase activation concern in cancer contexts</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Epitalon has one of the cleanest safety profiles of any peptide on Prof. Peptide, supported by decades of Russian human use under research conditions. NOT FDA-approved. Cancer patients should consult their oncologist before use given the theoretical concern about telomerase activation in cancer cells.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Subcutaneous injection at bedtime.",
      "Site rotation: abdomen, thigh, upper arm.",
      "Reconstitute with bacteriostatic water; swirl gently — do not shake.",
      "Store reconstituted solution refrigerated.",
      "Single 10–20 day intensive cycle, then break of 2–6 months.",
      "Storage of reconstituted: 2–8°C, use within 30 days.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "NAD+ — common longevity stack pairing. Cellular metabolism + cellular aging mechanisms.",
      "Melatonin — supportive for pineal function (but Epitalon is intended to restore endogenous melatonin, not replace it).",
      "Standard longevity protocols (resveratrol, NMN, omega-3, vitamin D) — compatible.",
      "GHK-Cu — for combined cellular regeneration + telomere protection.",
      "Avoid: high-dose direct telomerase inhibitors (theoretical antagonism, mostly experimental research compounds).",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Sleep medications — Epitalon may shift natural melatonin rhythm; monitor for changes in sleep onset.",
      "SSRIs — limited data; no documented interactions.",
      "Cancer therapies — theoretical concern with telomerase activation in cancer contexts. Cancer patients should consult oncologist before use.",
      "No documented major drug interactions at standard doses.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized: -20°C long-term, 2–8°C short-term.",
      "Reconstituted: 2–8°C, use within 30 days.",
      "Light-sensitive; store in original packaging.",
      "Do NOT freeze reconstituted solution.",
      "Reconstitute with bacteriostatic water for injection. Swirl gently — do not shake.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Epitalon is NOT FDA-approved. The bulk of clinical evidence comes from Russian gerontology research (Khavinson and colleagues, St. Petersburg Institute of Bioregulation and Gerontology). The long duration of this research is unmatched, but methodology differs from Western RCT standards and has not been independently replicated.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The telomerase activation mechanism is the most scientifically interesting claim but also the least replicated outside Khavinson&apos;s group. Skepticism regarding the strength of telomere-lengthening claims is warranted; supportive citations exist but cross-validation is limited.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold by specialty peptide vendors in the US. Quality varies dramatically; verify Certificate of Analysis.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Epitalon is NOT currently on the WADA prohibited list. The Russian human cohort data is the strongest evidence available for Epitalon&apos;s longevity claims; long-term safety appears excellent in this dataset.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
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
          Khavinson VK, Bondarev IE, Butyugov AA. Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells. Bull Exp Biol Med. 2003;135(6):590-2.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anisimov VN, Khavinson VK. Peptide bioregulation of aging: results and prospects. Biogerontology. 2010;11(2):139-49.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson VK, Morozov VG. Peptides of pineal gland and thymus prolong human life. Neuro Endocrinol Lett. 2003;24(3-4):233-40.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson VK. Peptides and Ageing. Neuro Endocrinol Lett. 2002;23(Suppl 3):11-144.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12624164/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12624164/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Epithalon.{" "}
          <a href="https://en.wikipedia.org/wiki/Epithalon" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Epithalon
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson VK. Tetrapeptide stimulating the functional activity of pinealocytes, geroprotective composition based thereon and a method of its application. (Khavinson lab patent reference)
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
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function EpitalonPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Epitalon","description":"Epitalon (AEDG tetrapeptide) research profile: telomerase activation, pineal/melatonin restoration, Khavinson research, dosing protocol, side effects.","url":"https://profpeptide.com/peptides/epitalon","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Epitalon"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Epitalon</h1>
        <span className="tag">Longevity</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Epithalon, Epithalamin, AEDG Tetrapeptide, Ala-Glu-Asp-Gly
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Epitalon is a synthetic tetrapeptide (alanine-glutamate-aspartate-glycine, AEDG) developed in the 1980s by Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology. It was synthesized as a short-peptide analog of epithalamin, a natural pineal gland extract that Khavinson and colleagues studied for decades in Soviet-era gerontology research. Epitalon&apos;s most-cited mechanism is telomerase activation, which extends the protective telomere caps on chromosomes — a process linked to cellular aging. Russian gerontology research (multi-decade cohort studies) reported reduced mortality and improved age-related markers in elderly subjects taking Epitalon. The Khavinson research has not been replicated in Western clinical trials, but the long-term Russian human data is among the most extensive available for any anti-aging peptide. Epitalon ranks #15 in Google Trends for most-searched peptides (Feb 2026).
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Telomerase activation and telomere lengthening (cell culture and animal evidence)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Restoration of melatonin rhythm in aging</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved circadian function</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced age-related cellular dysfunction (Russian cohort data)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-aging gene expression modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pineal gland support</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Subcutaneous injection: 5–10 mg per cycle, divided over 10–20 days (typically 0.5–1 mg/day). Cycle: 10–20 day intensive course, 2–6 months between cycles. Some users do 2–4 cycles per year. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Epitalon is not FDA-approved and is sold by specialty research peptide vendors. See{" "}
            <Link href="/best-peptide-vendors" className="text-[#0891b2] hover:underline">
              Verified Peptide Vendors &rarr;
            </Link>{" "}
            for current options.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Related supplements:</span>{" "}
            <a href="https://www.amazon.com/s?k=longevity+supplements&tag=profpeptide-20" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
              Find related supplements on Amazon.
            </a>
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
        {["Longevity", "Telomerase Activator", "Pineal Peptide", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
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
    <ContactLink pageName="Epitalon" pagePath="/peptides/epitalon" />
    </div>
    </>
  );
}
