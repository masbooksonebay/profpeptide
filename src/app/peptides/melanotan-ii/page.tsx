import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/melanotan-ii",
  title: "Melanotan II — Melanocortin Agonist, Tanning Peptide, Risks | Prof. Peptide",
  description:
    "Melanotan II research profile: melanocortin receptor mechanism, tanning effect, documented serious risks (rhabdomyolysis, mole darkening), dosing, FAQ, regulatory warnings.",
});

const faqs = [
  {
    q: "Is Melanotan II FDA-approved?",
    a: "No — and health agencies in the US, UK, Australia, and EU have issued explicit warnings against its use. Multiple case reports document serious adverse events including rhabdomyolysis, renal injury, and severe sympathomimetic toxicity. PT-141 (bremelanotide / Vyleesi) is the only FDA-approved derivative, and it was specifically engineered to remove MT-II's strong tanning effect.",
  },
  {
    q: "How is MT-II different from PT-141?",
    a: (
      <>
        <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141</Link>{" "}
        was derived from MT-II by removing the C-terminal amide group. This single structural change eliminates the strong melanocyte-stimulating effect (tanning) while preserving the sexual arousal effects. PT-141 is FDA-approved (Vyleesi, June 2019) for HSDD in premenopausal women; MT-II is not FDA-approved for any indication and carries multiple regulatory warnings. PT-141 represents the cleaner pharmacology that MT-II&apos;s non-selective melanocortin profile lacks.
      </>
    ),
  },
  {
    q: "Is sunless tanning from MT-II safe?",
    a: "There is no documented safety basis for MT-II as a tanning agent. Reversible darkening of moles, formation of new moles, and reported melanoma cases (causation unclear) are documented in the literature. The original developers at the University of Arizona did not pursue MT-II for sunless tanning specifically because of these concerns. Health authorities worldwide have warned against this use case.",
  },
  {
    q: "Will MT-II protect against UV damage?",
    a: "No. The skin darkening from MT-II is from increased melanin production, but this does NOT replace the protective effects of avoiding UV exposure. Users should NOT assume MT-II-induced tan provides equivalent UV protection — it doesn't. UV damage to skin and DNA still accumulates regardless of MT-II-induced pigmentation.",
  },
  {
    q: "What is the most dangerous MT-II side effect?",
    a: "Rhabdomyolysis with renal failure is the most dangerous documented side effect. Multiple published case reports describe MT-II users requiring ICU admission for severe muscle breakdown and acute kidney injury. One published case described a 39-year-old male injecting 6 mg (six times the typical research dose) who developed severe rhabdomyolysis. Renal infarction has also been reported.",
  },
  {
    q: "Can MT-II cause melanoma?",
    a: "Reported melanoma cases exist in the MT-II literature. Causation is debated — some researchers attribute these cases to UV behavior in users (people who use MT-II often spend more time in the sun) rather than to direct MT-II carcinogenicity. The drug certainly causes mole darkening and new mole formation, which makes melanoma surveillance more difficult. The combined risk profile is a strong argument for avoiding MT-II.",
  },
  {
    q: "How does MT-II affect appetite?",
    a: "MT-II reduces appetite via MC4R activation in the arcuate nucleus of the hypothalamus. This is part of the basis for setmelanotide's FDA approval for rare forms of obesity (POMC, LEPR mutations). The combination of tanning + appetite suppression earned MT-II its informal nickname \"Barbie drug.\" Note that decreased appetite + nausea is a common compound side effect.",
  },
  {
    q: "Where can I buy Melanotan II?",
    a: (
      <>
        MT-II is sold by specialty research peptide vendors as research-grade material despite regulatory warnings from multiple health agencies. We strongly recommend reading the full Side Effects &amp; Safety section before considering use. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Evaluation of Melanotan-II — A Superpotent Cyclic Melanotropic Peptide — in a Pilot Phase I Clinical Study",
    authors: "Dorr RT, Lines R, Levine N, et al.",
    journal: "Life Sciences / PubMed",
    year: "1996",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/8637402/",
    summary: "The first human Phase I clinical trial of Melanotan II at the University of Arizona. The trial confirmed visible tanning within 5 doses without UV exposure, and documented the now well-known side effects: nausea, facial flushing, fatigue, yawning, and spontaneous penile erections — the last of which redirected subsequent research toward MT-II's effects on sexual function.",
  },
  {
    title: "Discovery That a Melanocortin Regulates Sexual Functions in Male and Female Humans",
    authors: "Hadley ME",
    journal: "Peptides / PubMed",
    year: "2005",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/15996790/",
    summary: "The paper documenting the accidental discovery that Melanotan II enhances sexual function in both males and females — first noted during tanning trials. This led directly to the development of bremelanotide (PT-141), a more selective MC4R agonist now FDA-approved for female sexual dysfunction.",
  },
  {
    title: "Melanocortin Peptide Therapeutics — Historical Milestones, Clinical Studies and Commercialization",
    authors: "Hadley ME, Dorr RT",
    journal: "Peptides / PubMed",
    year: "2006",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/16412534/",
    summary: "A comprehensive review of the full Melanotan program — from initial discovery through clinical development and the pivot toward commercialization. Traces MT-I (afamelanotide) and MT-II development, and describes the development of PT-141 (bremelanotide) as a more selective derivative.",
  },
  {
    title: "An Overview of Benefits and Risks of Chronic Melanocortin-1 Receptor Activation",
    authors: "Böhm M, Robert C, Malhotra S, et al.",
    journal: "PMC / Journal of the European Academy of Dermatology and Venereology",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11664455/",
    summary: "The most current and balanced risk assessment of Melanotan II, documenting five reported cases of melanoma occurring during or after MT-II use. The review explains the biological mechanism of concern: MT-II stimulates melanocyte activity through MC1R, which can accelerate melanocytic activity in pre-existing nevi. The authors recommend against the use of unlicensed melanocortin agents.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Melanotan II work?",
    intro:
      "MT-II is a non-selective melanocortin receptor agonist (MC1R, MC3R, MC4R, MC5R). Each receptor produces distinct effects: MC1R drives skin pigmentation (the tanning effect), MC3R/MC4R drive appetite suppression and sexual arousal, MC5R affects exocrine glands. The non-selective profile is responsible for both the desired effects and the broad side-effect burden — sympathomimetic activation can increase blood pressure and heart rate, contributing to documented rhabdomyolysis and renal injury cases at higher doses.",
    body: [
      "Non-Selective Melanocortin Agonism [1]. Activates MC1R, MC3R, MC4R, and MC5R. Each receptor has distinct effects: MC1R (skin pigmentation), MC3R/MC4R (appetite + sexual arousal + cardiovascular), MC5R (exocrine glands). The non-selective profile is responsible for both the desired effects and the broad side-effect profile.",
      "Melanin Production [2]. MC1R activation in melanocytes triggers eumelanin synthesis. This produces UV-independent skin darkening — sometimes called 'sunless tanning' — but does NOT confer the protective effects of avoiding UV exposure.",
      "Sexual Arousal [3]. MC4R activation in hypothalamus produces sexual desire and erection effects (male) and arousal (female). This is the basis for PT-141 / Vyleesi development — PT-141 retains this effect while removing the tanning effect through structural modification.",
      "Appetite Suppression [4]. MC4R in the arcuate nucleus reduces food intake. Effect contributes to MT-II's 'Barbie drug' profile (tanning + thinness). Setmelanotide, an FDA-approved selective MC4R agonist, uses this same pathway for rare obesity.",
      "Cardiovascular Effects. Sympathomimetic activation can increase blood pressure and heart rate. This is a major safety concern at higher doses and contributes to the documented rhabdomyolysis and renal injury cases in case reports.",
    ],
  },
  {
    id: "research",
    title: "What is Melanotan II used for?",
    intro:
      "MT-II's research history includes the University of Arizona Phase 1 tanning trials (1990s), erectile dysfunction research (spawned PT-141 development), multiple published case reports of serious adverse events (rhabdomyolysis, renal injury), mole darkening documentation, and the parallel setmelanotide FDA approval (selective MC4R agonist for rare obesity — the cleaner alternative). The non-selective pharmacology that produces MT-II's tanning effect also produces its side-effect burden.",
    body: [
      "Sunless Tanning [5]. University of Arizona Phase 1 trials in the 1990s established the tanning effect. Tan develops over 5+ doses. Originally pursued as a cosmetic by Clinuvel; abandoned due to regulatory restrictions.",
      "Erectile Dysfunction Research [6]. Wessells et al. early trials in men with ED showed initiation of erections. This research line spawned PT-141 / bremelanotide development. PT-141 is now FDA-approved; MT-II is not.",
      "Adverse Event Case Reports. Multiple published case reports of rhabdomyolysis, renal infarction, and renal failure following MT-II use. Two notable cases: a 39-year-old male injecting 6 mg (severe rhabdomyolysis, ICU admission), and a 27 mg cumulative dose case with renal infarction.",
      "Mole Darkening. Reversible darkening of pigmented lesions and new mole formation are documented in case reports. This complicates melanoma surveillance and is a primary reason dermatology authorities warn against MT-II use.",
      "Setmelanotide Development. FDA-approved selective MC4R agonist for rare forms of obesity (POMC, LEPR mutations). Represents the cleaner pharmacology that MT-II's non-selective profile lacks. The selectivity of setmelanotide and PT-141 suggests pharma research has moved past MT-II's non-selective approach.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Melanotan II take to work?",
    intro:
      "MT-II effects develop on multiple timescales. Tan development: 5–10 doses over 2–3 weeks for visible darkening. Sexual effects: 30–60 minutes after a single dose. Side effects (nausea, flushing, mole changes): 30–90 minutes after injection. Mole darkening can persist after discontinuation. Reported melanoma cases generally emerge over months to years of use.",
    content:
      "Tan development: 5–10 doses over 2–3 weeks for visible darkening. Sexual effects: 30–60 minutes after a single dose. Side effects (nausea, flushing, mole changes): typically 30–90 minutes after injection. Mole darkening can persist after discontinuation. Reported melanoma cases in the literature generally emerge over months to years of cumulative use — and causation versus UV behavior in users remains contested.",
  },
  {
    id: "dosing",
    title: "How is Melanotan II dosed?",
    intro:
      "MT-II is administered as a subcutaneous injection. Given the documented serious adverse events at higher doses, conservative starting and maintenance doses are critical. ALWAYS START with a 0.1 mg test dose to assess tolerance. Loading phase uses 0.25–0.5 mg per dose, 3–5 days per week, 2–4 weeks. Maintenance: 0.5 mg, 1–2× per week. NEVER exceed 1 mg per dose — the 6 mg case report describes near-fatal toxicity.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">STARTING DOSE.</span> 0.1 mg subcutaneously to assess tolerance. ALWAYS START LOW.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Loading phase.</span> 0.25–0.5 mg per dose, 3–5 days per week, 2–4 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Maintenance.</span> 0.5 mg, 1–2× per week to maintain tan.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hard ceiling.</span> NEVER exceed 1 mg per dose. The 6 mg case report describes near-fatal toxicity.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">UV timing.</span> Avoid combining with concurrent UV exposure timing. MT-II effects are independent of UV.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          MT-II is NOT FDA-approved. The risk profile is meaningfully worse than typical research peptides. Reading the full Side Effects &amp; Safety section before any use is strongly recommended.
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
    title: "How is Melanotan II administered?",
    intro: (
      <>
        MT-II is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; using a small insulin syringe. ALWAYS start with a 0.1 mg test dose to assess tolerance. NEVER exceed 1 mg per dose. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Standard insulin syringe.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Test dose first.</span> Start with 0.1 mg to assess tolerance before increasing.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any, but avoid evening if nausea-sensitive (nausea peaks 30–90 minutes post-injection).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-nausea prep (optional).</span> Some users take oral ondansetron 30 minutes before injection. Light snack also helps.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Never share needles.</span> Single-use insulin syringes.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hard ceiling.</span> NEVER exceed 1 mg per dose &mdash; documented near-fatal toxicity at 6 mg.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> MT-II&apos;s tanning effect develops cumulatively over 5–10 doses; sexual effects appear within 30–60 minutes per dose. The dose-dependent risk profile is unusually steep &mdash; mild side effects at 0.25–0.5 mg become serious sympathomimetic and rhabdomyolysis risks above 1 mg. The narrow therapeutic-to-toxic window is the primary safety constraint, more than timing.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">3–5×/week (loading); 1–2×/week (maintenance)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any, but avoid evening if nausea-sensitive</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Light snack before injection may reduce nausea</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Abdomen, thigh, upper arm</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~hours plasma; pigmentation effects accumulate over weeks</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Hard dose ceiling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1 mg per dose &mdash; never exceed; documented near-fatal toxicity above this</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. MT-II research vials are typically 10 mg. Because doses are very small (0.1–1 mg), 1–2 mL reconstitution is the common research convention &mdash; it keeps the syringe draw within insulin syringe capacity at all dose levels. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 10 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">0.1 mg (test)</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">0.25 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">0.5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg (ceiling)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 unit</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 10 mg vial, each unit drawn delivers 100 mcg of MT-II at 1 mL reconstitution, 50 mcg at 2 mL, and 33 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Melanotan II stack well with?",
    intro:
      "Given MT-II's risk profile, stacking is generally NOT recommended. The most important non-stacking is PT-141 — same melanocortin receptor system, additive cardiovascular and side-effect risk. PDE5 inhibitors (sildenafil) have theoretical additive cardiovascular effect — monitor closely. Other peptides (BPC-157, TB-500) are not documented to interact but use in separate protocols rather than combined.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> Generally NOT recommended to stack &mdash; MT-II&apos;s risk profile favors caution as standalone.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: PT-141.</span> DO NOT stack with{" "}
          <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141</Link>
          . Both are melanocortin agonists; combination produces additive cardiovascular and side-effect risk.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">PDE5 inhibitors (sildenafil).</span> Theoretical additive cardiovascular effect; monitor closely.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Other peptides.</span> BPC-157, TB-500 &mdash; no documented interaction; generally safe to use in separate protocols.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-nausea protocol.</span> Some users take oral ondansetron 30 minutes before injection. Ginger tablets are a non-prescription alternative.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Melanotan II?",
    intro:
      "MT-II is NOT FDA-approved. Health authorities in the US, UK, Australia, and EU have issued warnings. The combined risk profile — documented rhabdomyolysis, renal injury, mole darkening, theoretical melanoma risk — makes MT-II one of the higher-risk research peptides commonly available. Multiple published case reports describe ICU admissions for severe muscle breakdown and acute kidney injury at higher doses. Common effects include nausea, flushing, mole darkening, appetite suppression, and spontaneous erections in males.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> 40–65% at doses &gt;0.5 mg.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Flushing.</span> Facial warmth, transient.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mole darkening.</span> Reversible during use; can persist after stopping.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Decreased appetite.</span> MC4R-mediated.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Spontaneous erections in males.</span> MC4R-mediated.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hyperpigmentation.</span> Face, gums, breasts.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Persistent mole changes.</span> May not resolve after discontinuation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache, dizziness.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild blood pressure elevation.</span></li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (documented in case reports)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Rhabdomyolysis with renal failure.</span> ICU admission documented in published case reports.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Renal infarction.</span> Documented in published case reports.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sympathomimetic toxicity.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Priapism.</span> Prolonged erection requiring medical intervention.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reported melanoma cases.</span> Causation unclear, may relate to UV behavior in users.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          MT-II is NOT FDA-approved. Health authorities in the US, UK, Australia, and EU have issued warnings. PT-141 (Vyleesi) is the only FDA-approved derivative for sexual arousal indications. The combined risk profile &mdash; documented rhabdomyolysis, renal injury, mole darkening, theoretical melanoma risk &mdash; makes MT-II one of the higher-risk research peptides commonly available.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Melanotan II interact with other drugs?",
    intro:
      "MT-II's important interactions are with sympathomimetic medications (decongestants, ADHD stimulants — additive cardiovascular risk, AVOID), antihypertensives (BP effects unpredictable), other melanocortin agonists (PT-141, setmelanotide — DO NOT combine), and alcohol (additive nausea, dehydration, cardiovascular effects). The sympathomimetic risk is genuine and contributes to documented rhabdomyolysis cases.",
    body: [
      "Sympathomimetic medications (decongestants, ADHD stimulants). Additive cardiovascular effects. AVOID combination.",
      "Antihypertensives. MT-II raises BP transiently; effects on patients on BP meds are unpredictable.",
      "PT-141 (bremelanotide). DO NOT combine. Same receptor system, additive risk.",
      "Setmelanotide. DO NOT combine. Same receptor system.",
      "Alcohol. Additive nausea, dehydration, and cardiovascular effects.",
    ],
  },
  {
    id: "storage",
    title: "How should Melanotan II be stored?",
    body: [
      "Lyophilized: -20°C long-term, 2–8°C short-term.",
      "Reconstituted: 2–8°C, 14–30 days max.",
      "Light-sensitive — store in original carton.",
      "Discard if cloudy or discolored.",
      "Reconstitute with bacteriostatic water for injection. Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Melanotan II research?",
    intro:
      "Melanotan II is NOT FDA-approved for any human use. Health agencies in the US, UK, Australia, EU, and elsewhere have issued warnings against its use. Multiple published case reports document serious adverse events including rhabdomyolysis, renal injury, severe sympathomimetic toxicity, priapism, and reported melanoma cases. The 'research peptide' market for MT-II is largely unregulated. PT-141 (bremelanotide) is the FDA-approved derivative — the cleaner pharmacology MT-II's non-selectivity lacks. NOT WADA-prohibited.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Melanotan II is NOT FDA-approved for any human use. Health agencies in the US, UK, Australia, EU, and elsewhere have issued warnings against its use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Multiple published case reports document serious adverse events including rhabdomyolysis, renal injury, severe sympathomimetic toxicity, priapism, and reported melanoma cases. The &ldquo;research peptide&rdquo; market for MT-II is largely unregulated &mdash; purity and potency vary widely.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data are limited and concerning for melanoma risk (though causation vs UV behavior remains debated).{" "}
          <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141 (bremelanotide)</Link>{" "}
          is the FDA-approved derivative for sexual arousal applications and represents the cleaner pharmacology that MT-II&apos;s non-selectivity lacks.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: not currently on the WADA prohibited list. We strongly recommend reading the full Side Effects &amp; Safety section before considering use.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Melanotan II",
    intro:
      "MT-II is sold by specialty research peptide vendors as research-grade material despite regulatory warnings from multiple health agencies. We strongly recommend reading the full Side Effects & Safety section before considering use. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "ascension-peptides" },
            { slug: "behemoth-labz" },
            { slug: "spartan-peptides" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all {activeVendorCount} verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Melanotan II FAQ",
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
          Wikipedia. Melanotan II.{" "}
          <a href="https://en.wikipedia.org/wiki/Melanotan_II" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Melanotan_II
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hadley ME, Dorr RT. Melanocortin peptide therapeutics: historical milestones, clinical studies and commercialization. Peptides. 2006;27(4):921-30.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wessells H, Levine N, Hadley ME, et al. Melanocortin receptor agonists, penile erection, and sexual motivation. Int J Impot Res. 2000;12 Suppl 4:S74-9.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Nelson ME, Bryant SM, Aks SE. Melanotan II injection resulting in systemic toxicity and rhabdomyolysis. Clin Toxicol. 2012;50(10):1169-73.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23121206/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23121206/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          DermNet NZ. Melanotan II.{" "}
          <a href="https://dermnetnz.org/topics/melanotan-ii" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://dermnetnz.org/topics/melanotan-ii
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Peters B, Hadimeri H, Wahlberg R, et al. Melanotan II: a possible cause of renal infarction: review of the literature. CEN Case Rep. 2020;9(4):361-365.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7148395/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC7148395/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dorr RT, Lines R, Levine N, et al. Evaluation of melanotan-II, a superpotent cyclic melanotropic peptide. Life Sci. 1996;58(20):1777-84.
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

export default function MelanotanIIPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Melanotan II","description":"Melanotan II research profile: melanocortin receptor mechanism, tanning effect, documented serious risks (rhabdomyolysis, mole darkening), dosing, FAQ, regulatory warnings.","url":"https://profpeptide.com/peptides/melanotan-ii","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Melanotan II"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Melanotan II</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 24, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> MT-II, MT2, Barbie Drug, Melanocyte-Stimulating Hormone Analog
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Cyclic Heptapeptide &mdash; Non-Selective Melanocortin Receptor Agonist (MC1R/MC3R/MC4R/MC5R)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> NOT FDA-approved. Health agency warnings in US, UK, Australia, EU. Documented serious adverse events. Not on WADA prohibited list.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Melanotan II?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Melanotan II is a synthetic cyclic heptapeptide and non-selective agonist of the melanocortin receptors (MC1R, MC3R, MC4R, MC5R). It was developed in the 1980s at the University of Arizona as a successor to Melanotan I (afamelanotide, FDA-approved as Scenesse for erythropoietic protoporphyria). Originally developed as a sunless tanning agent, MT-II also produces strong sexual arousal effects (via MC4R) and appetite suppression. It is NOT FDA-approved for any indication, and health agencies in multiple countries have warned against its use.{" "}
            <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141 (bremelanotide / Vyleesi)</Link>{" "}
            was specifically derived from MT-II by removing the C-terminal amide group &mdash; eliminating the strong tanning effect while preserving sexual arousal effects. MT-II is associated with documented serious adverse events including rhabdomyolysis, renal injury, and reversible darkening of moles. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sunless tanning (skin darkening via MC1R-mediated melanin production)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Appetite suppression (MC4R activation)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sexual arousal / erection support in males (MC3R/MC4R)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced UV exposure required for tan development</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Reported risks (genuinely worth flagging upfront):</span> Mole darkening, new moles, reported melanoma cases (causation unclear), rhabdomyolysis, renal infarction, sympathomimetic toxicity, severe nausea, priapism. See the full Side Effects &amp; Safety section.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Starting dose: 0.1 mg subcutaneously to assess tolerance. Typical research range: 0.25–1 mg per dose, 2–3 times per week during loading phase, then weekly maintenance. NEVER exceed 1 mg per dose in research contexts.
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
        {["Skin Health & Anti-Aging", "Melanocortin Agonist", "Tanning", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/pt-141" className="text-sm font-medium text-[#0891b2] hover:underline">PT-141</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#0891b2] hover:underline">KPV</Link>
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
    <ContactLink pageName="Melanotan II" pagePath="/peptides/melanotan-ii" />
    </div>
    </>
  );
}
