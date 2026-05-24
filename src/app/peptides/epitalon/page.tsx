import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/epitalon",
  title: "Epitalon — Telomerase Activator, Pineal Peptide, Dosage, Side Effects | Prof. Peptide",
  description:
    "Epitalon (AEDG tetrapeptide) research profile: telomerase activation, pineal/melatonin restoration, Khavinson research, dosing protocol, side effects, FAQ.",
});

const faqs = [
  {
    q: "Is Epitalon FDA-approved?",
    a: "No. Epitalon is not FDA-approved for any indication and has not been through Western clinical trials. The bulk of clinical evidence comes from Russian gerontology research (Khavinson and colleagues, St. Petersburg Institute of Bioregulation and Gerontology). It is sold as a research-grade peptide.",
  },
  {
    q: "Does Epitalon really lengthen telomeres?",
    a: "Khavinson's lab reported telomerase activation and telomere lengthening in human somatic cells in culture. Animal lifespan extension was also reported. A 2025 independent replication by Al-Dulaimi et al. (Biogerontology) confirmed telomere lengthening in normal human cells via hTERT upregulation — significantly strengthening the evidence beyond a single research group. Skepticism is still warranted about the magnitude of effect in vivo, but the mechanism is no longer single-source.",
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
    a: (
      <>
        Yes &mdash; Epitalon +{" "}
        <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>{" "}
        is a common longevity stack pairing (cellular metabolism + cellular aging). Compatible with standard longevity protocols including resveratrol, NMN, omega-3, vitamin D. Often combined with{" "}
        <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
        for cellular regeneration + telomere protection. No documented major drug interactions at standard doses.
      </>
    ),
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
        Epitalon is sold by specialty research peptide vendors in the US. Quality varies dramatically &mdash; verify Certificate of Analysis. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    summary: "The foundational study establishing Epitalon’s telomerase-activating properties. Using human fetal lung fibroblast cell cultures and the TRAP (Telomeric Repeat Amplification Protocol) assay, the researchers demonstrated that Epitalon activated expression of the hTERT telomerase catalytic subunit, significantly increased telomerase enzyme activity, and extended the proliferative lifespan of cells beyond the Hayflick limit — from termination at the 34th passage to continued division past the 44th passage, an extension of more than 10 additional cell doublings. This was the first study establishing that a simple tetrapeptide could reactivate telomerase in normal human somatic cells, a finding with profound theoretical implications for aging biology.",
  },
  {
    title: "Epitalon Increases Telomere Length in Human Cell Lines Through Telomerase Upregulation or ALT Activity",
    authors: "Al-Dulaimi S, Thomas R, Matta S, Roberts T",
    journal: "Biogerontology / PubMed",
    year: "2025",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/40908429/",
    summary: "The most significant independent replication of Epitalon’s telomere effects — published in 2025 by a UK-based research group unaffiliated with the Khavinson lab. Using breast cancer cell lines and normal epithelial and fibroblast cells, the study confirmed dose-dependent telomere length extension in normal cells through hTERT upregulation and telomerase activation. It also found that cancer cells extended telomeres through an alternative pathway (ALT — Alternative Lengthening of Telomeres), with only minor ALT activity in normal cells. This independent confirmation significantly strengthens the telomerase-activation evidence base for Epitalon, as it moves the key finding beyond a single research group.",
  },
  {
    title: "Overview of Epitalon — Highly Bioactive Pineal Tetrapeptide with Promising Properties",
    authors: "Kossoy G, et al.",
    journal: "International Journal of Molecular Sciences / PMC",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11943447/",
    summary: "A comprehensive 2025 review synthesizing the full body of Epitalon research across telomere biology, antioxidant activity, lifespan extension, cancer research, and circadian regulation. Key findings documented: Epitalon increased lifespan of Drosophila by up to 16%; increased antioxidant enzyme activities (SOD, glutathione peroxidase) in aging rats; reduced spontaneous tumor incidence and metastases in mice; increased telomere lengths in blood cells of elderly humans aged 60–65 and 75–80; and restored melatonin secretion in aged monkeys and humans. The review also covers Epitalon’s DNA-binding mechanism — specifically its interaction with ATTTC sequences in the promoter region of the telomerase gene — providing a molecular explanation for its telomerase-activating effect.",
  },
  {
    title: "Epitalon: What Can This Peptide Do for Telomere Protection, Aging, and Longevity?",
    authors: "de Wit H, PhD — Healthspan Research Review",
    journal: "Healthspan / Gethealthspan.com",
    year: "2025",
    access: "Open Access",
    url: "https://www.gethealthspan.com/research/article/epitalon",
    summary: "A balanced independent evidence review from a PhD-led research team not affiliated with the Khavinson group. The review identifies Epitalon as a multi-pathway geroprotector that acts on five hallmarks of aging simultaneously: telomere maintenance, epigenetic regulation, oxidative stress resilience, immune recalibration, and circadian rhythm restoration — making it one of the broadest-reaching peptides studied in longevity science. The review is appropriately candid about limitations: most evidence comes from a single research group, large-scale independent clinical trials are absent, and the extraordinary claims (especially lifespan extension) require independent validation before strong conclusions can be drawn. An essential balanced read alongside the primary Khavinson literature.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Epitalon work?",
    intro:
      "Epitalon's most-cited mechanism is telomerase activation — it binds to ATTTC sequences in the promoter region of the telomerase gene and upregulates expression of hTERT (the catalytic subunit of telomerase). Activating telomerase extends the protective telomere caps on chromosomes, a process linked to cellular aging. Epitalon also restores pineal melatonin production in aging populations, modulates circadian gene expression, and enhances endogenous antioxidant enzyme activity. The five hallmarks-of-aging it touches are the basis for its longevity-research framing.",
    body: [
      "Telomerase Activation [1][2]. Cell culture studies show Epitalon activates telomerase, the enzyme that maintains chromosomal telomeres. Telomere shortening is a hallmark of cellular aging; telomerase activation potentially extends cellular replicative lifespan. Originally a Khavinson-lab finding (2003); independently replicated in 2025 by Al-Dulaimi et al. via hTERT upregulation in normal human cells.",
      "Pineal Gland Modulation [3]. Originally derived from epithalamin (pineal extract). Restores age-related decline in melatonin production. Melatonin rhythm restoration is a key claim in Russian gerontology research and a consistent finding in aged monkeys and humans.",
      "Gene Expression. Modulates expression of genes related to circadian rhythm, antioxidant defense, and apoptosis regulation. Smaller scope than GHK-Cu's 4,000+ genes but specifically targeted to aging pathways.",
      "Antioxidant Activity. Increases activity of endogenous antioxidant enzymes (superoxide dismutase, catalase, glutathione peroxidase) in animal models.",
      "Circadian Rhythm Restoration. Pineal-mediated melatonin rhythm restoration improves sleep architecture and overall circadian function in aging populations.",
    ],
  },
  {
    id: "research",
    title: "What is Epitalon used for?",
    intro:
      "Epitalon's research evidence base sits in telomere biology, multi-decade Russian gerontology cohort studies, sleep and circadian restoration, animal lifespan extension, and limited cancer-prevention research. The Khavinson group at St. Petersburg generated most of the original data; a 2025 UK replication (Al-Dulaimi et al.) significantly strengthens the telomerase-activation evidence. Western RCT-quality data remains absent.",
    body: [
      "Telomerase & Telomere Lengthening [1][2]. Khavinson's lab demonstrated telomerase activation in human somatic cells in culture; Al-Dulaimi et al. (2025) independently confirmed dose-dependent telomere length extension in normal cells via hTERT upregulation. Together these establish the mechanism beyond a single research group.",
      "Russian Long-Term Cohort Studies [4]. Multi-year human studies (1990s–2010s) reporting reduced mortality and improved age-related markers in elderly subjects taking Epitalon. Methodology differs from Western RCT standards but the duration is unmatched in peptide research.",
      "Sleep & Circadian [3]. Restoration of melatonin rhythm in aging populations. Improved sleep quality reported in shorter-duration human studies. Pineal-mediated mechanism gives this claim mechanistic plausibility.",
      "Animal Lifespan [3]. Drosophila lifespan extended by up to 16%; chick, mouse, and rat lifespan extension reported in Russian research. Effect sizes vary; methodology not always Western-standard.",
      "Cancer Research [3]. Reduced spontaneous tumor incidence and metastases reported in mouse models. The 2025 Al-Dulaimi study found cancer cells extend telomeres via ALT pathway rather than hTERT — relevant context for the theoretical telomerase-in-cancer concern.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Epitalon take to work?",
    intro:
      "Epitalon effects develop on multiple timescales. Acute effects (sleep quality, circadian rhythm) are measurable in 1–2 weeks of cycling. Telomerase activation effects accumulate over months. Multi-cycle protocols typically run 2–4 cycles over a year. Long-term effects (the framing used in Russian cohort research) are measured over years rather than weeks.",
    content:
      "Acute effects (sleep quality, circadian rhythm) are typically measurable in the first 1–2 weeks of cycling. Most users report better sleep architecture and more consistent sleep onset within the first week. Telomerase activation effects accumulate gradually over months; the cell-culture evidence shows multiple cell-doubling extensions, but in-vivo measurement of telomere length in blood cells over a single cycle is at the edge of detection. Multi-cycle protocols (2–4 cycles per year) are the standard framing in Russian gerontology research, with long-term effects measured over years.",
  },
  {
    id: "dosing",
    title: "How is Epitalon dosed?",
    intro:
      "Epitalon is administered as a subcutaneous injection in 10–20 day intensive cycles followed by extended breaks of 2–6 months. The standard Russian protocol uses 5–10 mg total per cycle, divided as 0.5–1 mg daily. Bedtime injection is preferred to align with the natural pineal/melatonin pathway timing. Lifelong cycling (2–4 cycles per year) is common in Russian gerontology contexts.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard cycle.</span> 5–10 mg total dose per cycle, divided as 0.5–1 mg subcutaneously daily for 10–20 days.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle frequency.</span> 2–4 cycles per year, with 2–6 months between cycles.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime preferred &mdash; aligns with pineal/melatonin pathway timing.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> 10 mg vial + 2 mL bacteriostatic water = 5 mg/mL. See How is Epitalon administered? for the full reconstitution table.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lifelong cycling.</span> Common in Russian gerontology contexts &mdash; the framing is multi-decade, not single-cycle.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral / sublingual.</span> Some users use sublingual protocols, though evidence for oral bioavailability is limited.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          The single 10–20 day intensive cycle followed by 2–6 month break is the standard pattern. Cycling rather than continuous use is the conventional approach &mdash; consistent with the gene-expression-driven mechanism, where effects outlast plasma presence by orders of magnitude.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is Epitalon administered?",
    intro: (
      <>
        Epitalon is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; once daily during the cycle, using a small insulin syringe. Bedtime is the preferred injection time to align with the natural pineal/melatonin pathway. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once daily during the cycle. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime preferred &mdash; aligns with pineal/melatonin pathway timing.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine; no fasting requirement.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each day to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume the next day. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution handling.</span> Add bacteriostatic water slowly down the inside wall of the vial. Swirl gently &mdash; do not shake.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> Single 10–20 day intensive cycle, then 2–6 month break. Lifelong cycling (2–4 cycles per year) is the conventional framing.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Epitalon is administered once daily via subcutaneous injection during the cycle. Plasma half-life is short (~30 minutes), but the biological effects are driven by gene-expression changes that persist far longer than the peptide&apos;s presence in circulation. The two timing variables that matter most are cycle consistency (daily during the 10–20 day intensive cycle) and time of day (bedtime preferred to align with pineal/melatonin pathway).
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily during the 10–20 day cycle; 2–4 cycles per year</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Bedtime &mdash; aligns with pineal/melatonin pathway timing</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm &mdash; avoid same site on consecutive days</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~30 minutes (plasma) &mdash; biological effects persist via gene-expression changes</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not pharmacologically meaningful &mdash; effects accumulate via gene-expression rather than plasma steady-state</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. Epitalon research vials are typically 10 mg. Because Epitalon daily doses are small (0.5–2 mg), 2 mL reconstitution is the common research convention &mdash; it gives clean whole-number units across the typical dose range. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 10 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">0.5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1.5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">45 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 10 mg vial, each unit drawn delivers 100 mcg (0.1 mg) of Epitalon at 1 mL reconstitution, 50 mcg at 2 mL, and 33 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Epitalon stack well with?",
    intro:
      "Epitalon pairs naturally with other longevity peptides because its mechanism (telomerase activation + pineal/circadian restoration) is non-overlapping with most other anti-aging interventions. The cleanest additions are NAD+ (cellular metabolism), GHK-Cu (regenerative gene expression), and standard longevity protocols (resveratrol, NMN, omega-3, vitamin D). Epitalon is not paired with the muscle-building or recovery blend stacks — its lane is longevity-cellular-health, not performance.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">NAD+.</span>{" "}
          <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>{" "}
          is the most common longevity stack pairing. Cellular metabolism + cellular aging mechanisms are non-overlapping and addressed simultaneously. See the{" "}
          <Link href="/compare/epitalon-vs-nad-plus" className="text-[#0891b2] hover:underline">Epitalon vs NAD+ comparison</Link>{" "}
          for protocol differences.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GHK-Cu.</span>{" "}
          <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
          for combined cellular regeneration + telomere protection. GHK-Cu modulates ~4,000 genes via copper-bound transcription effects; Epitalon adds telomerase activation on top.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard longevity protocols.</span> Resveratrol, NMN, omega-3, vitamin D &mdash; all compatible. Mechanisms are non-overlapping with Epitalon.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exogenous melatonin.</span> Supportive for pineal function during cycles &mdash; but Epitalon is intended to restore endogenous melatonin production, not replace it, so exogenous melatonin is often tapered as Epitalon takes effect.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: high-dose direct telomerase inhibitors.</span> Mostly experimental research compounds &mdash; theoretical antagonism of Epitalon&apos;s primary mechanism.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Epitalon?",
    intro:
      "Epitalon has one of the cleanest safety profiles of any peptide on Prof. Peptide, supported by decades of Russian human use under research conditions. Russian cohort data spanning 20+ years documents no major adverse events. Reported effects are mild — injection site reactions, occasional vivid dreams during cycles (consistent with the pineal/melatonin pathway), mild headache. The single theoretical concern is telomerase activation in cancer contexts, which is why cancer patients should consult their oncologist before use.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation, typically resolves within hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vivid dreams or mild sleep changes.</span> Consistent with the pineal/melatonin pathway; reported during cycles, typically resolves after cycle ends.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Uncommon, typically mild and self-limited.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue.</span> Inconsistent across users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No major adverse events.</span> Russian cohort research over 20+ years documents no serious adverse events at standard cycling doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical cancer concern.</span> Telomerase activation in cancer contexts is theoretically concerning &mdash; though the 2025 Al-Dulaimi study found cancer cells extend telomeres via ALT pathway rather than hTERT. Cancer patients should still consult their oncologist before use.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Epitalon has one of the cleanest safety profiles of any peptide on Prof. Peptide, supported by decades of Russian human use under research conditions. NOT FDA-approved. Cancer patients should consult their oncologist before use given the theoretical concern about telomerase activation in cancer cells.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Epitalon interact with other drugs?",
    intro:
      "Epitalon has no documented major drug-drug pharmacokinetic interactions at standard cycling doses. The main considerations are sleep medications (Epitalon may shift natural melatonin rhythm; monitor sleep onset), SSRIs (limited data), and cancer therapies (theoretical concern with telomerase activation — consult oncologist).",
    body: [
      "Sleep medications. Epitalon may shift natural melatonin rhythm; monitor for changes in sleep onset, particularly during the first cycle.",
      "SSRIs. Limited data; no documented interactions in published research.",
      "Cancer therapies. Theoretical concern with telomerase activation in cancer contexts. Cancer patients should consult oncologist before use.",
      "No documented major drug-drug pharmacokinetic interactions at standard cycling doses.",
    ],
  },
  {
    id: "storage",
    title: "How should Epitalon be stored?",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; 2–8°C acceptable for short-term.",
      "Reconstituted solution: Refrigerate at 2–8°C; use within 30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze reconstituted solution.",
      "Protect from light. Store in original packaging.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Epitalon research?",
    intro:
      "Epitalon is not FDA-approved. The bulk of clinical evidence comes from Russian gerontology research (Khavinson and colleagues) with multi-decade duration but methodology that differs from Western RCT standards. The telomerase activation mechanism is the most scientifically interesting claim — and was strengthened by a 2025 independent UK replication (Al-Dulaimi et al.) — but large-scale Western RCT data remains absent. Epitalon is NOT currently on the WADA prohibited list.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Epitalon is NOT FDA-approved. The bulk of clinical evidence comes from Russian gerontology research (Khavinson and colleagues, St. Petersburg Institute of Bioregulation and Gerontology). The long duration of this research is unmatched, but methodology differs from Western RCT standards and most of it has not been independently replicated.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The telomerase activation mechanism is the most scientifically interesting claim. It was originally a single-source finding from the Khavinson lab (2003), but a 2025 UK-based independent replication (Al-Dulaimi et al., Biogerontology) confirmed dose-dependent telomere length extension in normal cells via hTERT upregulation &mdash; significantly strengthening the mechanistic evidence base. The magnitude of effect in vivo over a single human cycle is still at the edge of detection.
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
    id: "where-to-buy",
    title: "Where to source Epitalon",
    intro:
      "Epitalon is not FDA-approved and is sold by specialty research peptide vendors. Quality varies dramatically across vendors — verify Certificate of Analysis before purchase. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners" },
            { slug: "ascension-peptides" },
            { slug: "vital-core-research" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all 17 verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Epitalon FAQ",
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
          Khavinson VK, Bondarev IE, Butyugov AA. Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells. Bull Exp Biol Med. 2003;135(6):590-2.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12937682/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12937682/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Al-Dulaimi S, Thomas R, Matta S, Roberts T. Epitalon increases telomere length in human cell lines through telomerase upregulation or ALT activity. Biogerontology. 2025.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/40908429/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/40908429/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kossoy G, et al. Overview of Epitalon — Highly Bioactive Pineal Tetrapeptide with Promising Properties. Int J Mol Sci. 2025.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11943447/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC11943447/
          </a>
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

export default function EpitalonPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Epitalon","description":"Epitalon (AEDG tetrapeptide) research profile: telomerase activation, pineal/melatonin restoration, Khavinson research, dosing protocol, side effects, FAQ.","url":"https://profpeptide.com/peptides/epitalon","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Epithalon, Epithalamin, AEDG Tetrapeptide, Ala-Glu-Asp-Gly
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Synthetic Tetrapeptide &mdash; Telomerase Activator / Pineal Bioregulator
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. Not on WADA prohibited list.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Epitalon?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Epitalon is a synthetic tetrapeptide (alanine-glutamate-aspartate-glycine, AEDG) developed in the 1980s by Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology. It was synthesized as a short-peptide analog of epithalamin, a natural pineal gland extract that Khavinson and colleagues studied for decades in Soviet-era gerontology research. Epitalon&apos;s most-cited mechanism is telomerase activation, which extends the protective telomere caps on chromosomes &mdash; a process linked to cellular aging. Russian gerontology research (multi-decade cohort studies) reported reduced mortality and improved age-related markers in elderly subjects taking Epitalon. A 2025 UK independent replication (Al-Dulaimi et al., Biogerontology) confirmed dose-dependent telomere lengthening in normal human cells via hTERT upregulation &mdash; significantly strengthening the mechanism beyond a single research group. Often paired with{" "}
            <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>{" "}
            or{" "}
            <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
            for layered longevity protocols. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Telomerase activation and telomere lengthening (cell culture and animal evidence; independently replicated 2025)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Restoration of melatonin rhythm in aging</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved circadian function and sleep architecture</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced age-related cellular dysfunction (Russian cohort data)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-aging gene expression modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pineal gland support and endogenous antioxidant enzyme upregulation</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Subcutaneous injection: 5–10 mg per cycle, divided over 10–20 days (typically 0.5–1 mg/day). Cycle: 10–20 day intensive course, 2–6 months between cycles. Some users do 2–4 cycles per year. Bedtime injection is preferred to align with the pineal/melatonin pathway.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
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
        <Link href="/peptides/dsip" className="text-sm font-medium text-[#0891b2] hover:underline">DSIP</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/epitalon-vs-nad-plus" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon vs NAD+ &rarr;</Link>
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
