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
  path: "/peptides/pt-141",
  title: "PT-141 (Bremelanotide / Vyleesi) — FDA-Approved Sexual Health Peptide | Prof. Peptide",
  description:
    "PT-141 (Bremelanotide, Vyleesi) research profile: FDA-approved for HSDD, MC4R mechanism, on-demand dosing, off-label male ED use, side effects, FAQ.",
});

const faqs = [
  {
    q: "Is PT-141 FDA-approved?",
    a: "Yes — PT-141 (brand name Vyleesi, made by Palatin Technologies) is FDA-approved as of June 2019 for acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women. It is the first FDA-approved peptide acting on sexual desire through brain pathways. Use in men, postmenopausal women, or for sexual performance enhancement is OFF-LABEL.",
  },
  {
    q: "How does PT-141 differ from Viagra?",
    a: "Completely different mechanisms. Viagra (sildenafil) is a PDE5 inhibitor that works peripherally on vascular nitric oxide signaling — it improves blood flow but doesn't affect desire. PT-141 acts centrally on melanocortin receptors (MC4R) in the brain to enhance sexual desire and arousal. PT-141 works in cases where Viagra fails (PDE5-resistant ED). Some clinicians combine the two off-label.",
  },
  {
    q: "Will PT-141 work for men?",
    a: "Vyleesi is not FDA-approved for men. However, off-label use in men with erectile dysfunction is documented. Earlier intranasal PT-141 trials showed 34% of men with ED achieved erection sufficient for intercourse vs 9% on placebo. Off-label combination with sildenafil produces stronger erectile response than either alone in PDE5-resistant cases.",
  },
  {
    q: "What about the nausea?",
    a: "Nausea is the most common side effect (~40% in Phase 3). It's usually mild to moderate and most pronounced with the first dose. Many users find it tolerable after 1–2 doses, or manageable with eating a light snack before injection or taking oral ondansetron 30 minutes prior. Starting with a lower dose (1 mg or 500 mcg) helps assess tolerance.",
  },
  {
    q: "Why is there a monthly dose limit?",
    a: "The 8-doses-per-month limit exists to minimize hyperpigmentation risk. Frequent PT-141 use can cause focal skin darkening on the face, gums, or breasts that may NOT resolve after stopping the drug. Using more than 8 doses per month substantially increases this risk.",
  },
  {
    q: "How long do effects last?",
    a: "Onset is ~45–60 minutes after subcutaneous injection. Peak effects on sexual desire and arousal occur around 1–2 hours. Total effect duration is 4–6 hours per dose. PT-141 is on-demand, not daily — take it before, not after, the activity window.",
  },
  {
    q: "Can PT-141 cause blood pressure problems?",
    a: "Yes — PT-141 causes transient blood pressure elevation averaging 6 mmHg systolic and 3 mmHg diastolic. It is contraindicated in uncontrolled hypertension and cardiovascular disease. Patients on antihypertensive medications should be monitored. The effect is transient and not expected to cause severe BP elevation when used at the standard 1.75 mg dose.",
  },
  {
    q: "How is PT-141 different from Melanotan II?",
    a: (
      <>
        <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>{" "}
        is the predecessor compound &mdash; PT-141 was derived from Melanotan II by removing the C-terminal amide group, which eliminates the strong tanning effect while preserving the sexual desire and arousal effects. Melanotan II is primarily used for skin pigmentation (off-label tanning); PT-141 is specifically optimized for sexual response without the pigmentation. Do NOT stack the two &mdash; additive melanocortin receptor effects increase nausea, blood pressure changes, and hyperpigmentation risk.
      </>
    ),
  },
  {
    q: "Where can I buy PT-141?",
    a: (
      <>
        The FDA-approved version (Vyleesi) is a prescription drug from specialty pharmacies &mdash; premenopausal women with HSDD only. Off-label and research-grade PT-141 is sold by specialty peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "PT-141: A Melanocortin Agonist for the Treatment of Sexual Dysfunction",
    authors: "Molinoff PB, Shadiack AM, Earle D, Diamond LE, Quon CY",
    journal: "Annals of the New York Academy of Sciences / PubMed",
    year: "2003",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/12851303/",
    summary: "The foundational review establishing PT-141's mechanism and clinical rationale. PT-141 was developed as a next-generation analog of Melanotan II with higher selectivity for MC4R — the melanocortin receptor subtype most involved in sexual behavior — and a better safety profile. The paper documents PT-141's central nervous system mechanism: unlike PDE5 inhibitors which increase blood flow to the genitals, PT-141 acts in the hypothalamus to modulate the neural pathways governing desire and arousal itself.",
  },
  {
    title: "Bremelanotide for the Treatment of Hypoactive Sexual Desire Disorder — Two Randomized Phase 3 Trials (RECONNECT)",
    authors: "Kingsberg SA, Clayton AH, Portman D, et al.",
    journal: "Obstetrics & Gynecology / PMC",
    year: "2019",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6819021/",
    summary: "The pivotal Phase 3 trials that led to FDA approval of bremelanotide (Vyleesi) in 2019. Two identical RCTs (RECONNECT 301 and 302) enrolled premenopausal women with HSDD. Bremelanotide 1.75mg subcutaneous significantly improved both the Female Sexual Function Index desire domain score and the Female Sexual Distress Scale compared to placebo at 24 weeks. Nausea was the most common adverse event (40% bremelanotide vs 1.3% placebo).",
  },
  {
    title: "Long-Term Safety and Efficacy of Bremelanotide for Hypoactive Sexual Desire Disorder",
    authors: "Kingsberg SA, et al. — RECONNECT Study Group",
    journal: "Obstetrics & Gynecology / PMC",
    year: "2019",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6819023/",
    summary: "The 52-week open-label extension of the RECONNECT trials, examining bremelanotide's long-term safety and sustained efficacy. No new safety signals emerged over 52 weeks of continued use, and improvements in HSDD symptoms were maintained throughout the extension period. Critical for the FDA approval package.",
  },
  {
    title: "Bremelanotide for Female Sexual Dysfunction — Mechanism, Clinical Trials, and FDA Approval",
    authors: "Edinoff AN, Sanders NM, Lewis KB, et al.",
    journal: "PMC / Neurology International",
    year: "2022",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8788464/",
    summary: "A comprehensive review covering bremelanotide's full development history, mechanism of action, and clinical evidence across both female and male sexual dysfunction. Covers PT-141's off-label use in men — including studies showing efficacy in sildenafil non-responders and a synergistic effect when combined with PDE5 inhibitors.",
  },
  {
    title: "Novel Emerging Therapies for Erectile Dysfunction — Bremelanotide Section",
    authors: "World Journal of Men's Health Research Group",
    journal: "World Journal of Men's Health",
    year: "2021",
    access: "Open Access",
    url: "https://wjmh.org/DOIx.php?id=10.5534/wjmh.200007",
    summary: "A review of PT-141's evidence for male erectile dysfunction. At 20mg intranasal dosing, PT-141 produced significantly greater duration of base rigidity ≥80% vs placebo. In men with ED non-responsive to sildenafil, 34% of the PT-141 group reported significantly better results vs 9% placebo.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does PT-141 work?",
    intro:
      "PT-141 is a non-selective melanocortin receptor agonist (MC1R–MC5R). At therapeutic doses, MC4R activation in the central nervous system is the clinically relevant mechanism — neurons expressing MC4R in hypothalamic and limbic regions modulate sexual desire and arousal. Unlike PDE5 inhibitors (Viagra) which work peripherally on vascular nitric oxide signaling, PT-141 acts centrally. This is the clinical rationale for use in cases where vascular drugs fail or are contraindicated.",
    body: [
      "Melanocortin Receptor Agonism [1]. PT-141 is a non-selective agonist of melanocortin receptors (MC1R through MC5R, except MC2R which binds full ACTH). At therapeutic doses, MC4R activation is most clinically relevant — neurons expressing MC4R are present throughout the central nervous system, particularly in hypothalamic and limbic regions involved in sexual arousal.",
      "Central vs Peripheral Mechanism [2]. Unlike PDE5 inhibitors (sildenafil, tadalafil) which work peripherally on vascular nitric oxide signaling, PT-141 acts centrally to enhance sexual desire and arousal. This is the clinical rationale for use in cases where vascular drugs fail or are contraindicated.",
      "Dopamine Pathway Activation. Mechanistic studies suggest MC4R activation in hypothalamic circuits enhances dopamine signaling linked to sexual desire. The exact downstream pathway by which Vyleesi improves HSDD is not fully characterized in the FDA labeling.",
      "Cyclic Heptapeptide Structure. PT-141 is a cyclic 7-amino-acid peptide derived from melanotan II. The cyclization confers metabolic stability. Removal of the C-terminal amide compared to melanotan II eliminates the strong melanocyte-stimulating effect (tanning), while preserving sexual response.",
      "Pharmacokinetics. Subcutaneous bioavailability ~100%. Peak plasma levels ~1 hour post-injection. Plasma half-life 2.7 hours (range 1.9–4.0). Effects on sexual desire last 4–6 hours.",
    ],
  },
  {
    id: "research",
    title: "What is PT-141 used for?",
    intro:
      "PT-141's FDA-approved indication is hypoactive sexual desire disorder (HSDD) in premenopausal women — the Vyleesi label, June 2019. Off-label uses include male erectile dysfunction (particularly PDE5-resistant cases), postmenopausal HSDD, and SSRI-induced sexual dysfunction. A weight-loss side effect has also been observed (MC4R agonism modulates appetite — setmelanotide, another MC4R agonist, is FDA-approved for rare types of obesity).",
    body: [
      "Premenopausal HSDD [3]. FDA approval indication. Two identical Phase 3 clinical trials (n=1,202 total premenopausal women with HSDD) showed Vyleesi improved sexual desire and reduced sexual distress vs placebo. Approval granted June 2019.",
      "Male Erectile Dysfunction (Off-Label) [4]. Earlier intranasal PT-141 trials in men with ED showed 34% achieving erection sufficient for intercourse vs 9% on placebo. Combination studies with sildenafil showed stronger erectile response than either drug alone — basis for off-label 'Viagra reboot' protocols in PDE5-resistant patients.",
      "Postmenopausal HSDD (Off-Label). Vyleesi is FDA-approved only for premenopausal women, but clinical practice has extended use to postmenopausal patients. Small case series report favorable outcomes; formal trials in this population are limited.",
      "SSRI-Induced Sexual Dysfunction (Off-Label). Off-label use for restoring sexual function in patients with SSRI-related sexual side effects. Limited published evidence but reported clinically.",
      "Calorie Reduction Side Effect. A trial analysis found obese women on PT-141 reduced calorie intake and lost weight. Setmelanotide, another MC4R agonist, is FDA-approved for rare types of obesity — suggesting MC4R agonism has appetite-modulating effects.",
    ],
  },
  {
    id: "timeline",
    title: "How long does PT-141 take to work?",
    intro:
      "PT-141 is on-demand, not daily — effects develop on a per-dose basis. Subjective effects on sexual desire and arousal typically peak around 45–60 minutes after subcutaneous injection. Effects last 4–6 hours per dose. The FDA-approved Vyleesi label requires assessment of efficacy at 8 weeks; if no improvement in sexual desire and distress, treatment should be discontinued.",
    content:
      "PT-141 is on-demand, not daily. Subjective effects on sexual desire and arousal typically peak around 45–60 minutes after subcutaneous injection. Effects last 4–6 hours per dose. The FDA-approved Vyleesi label requires assessment of efficacy at 8 weeks of intermittent use; if no improvement in sexual desire and distress, treatment should be discontinued. Unlike flibanserin (which requires continuous daily dosing), PT-141 is purely on-demand and does not require cumulative dosing for effect.",
  },
  {
    id: "dosing",
    title: "How is PT-141 dosed?",
    intro:
      "PT-141 is administered as a subcutaneous injection on-demand. The FDA-approved Vyleesi product comes pre-dosed in an autoinjector (1.75 mg). Research-grade PT-141 is sold as lyophilized powder for reconstitution. Standard dose is 1.75 mg ~45 minutes before anticipated activity. Maximum 1 dose per 24 hours; maximum 8 doses per month (hyperpigmentation risk limit).",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">FDA-approved (Vyleesi).</span> 1.75 mg subcutaneously, ~45 minutes before anticipated sexual activity. Maximum 1 dose per 24 hours, maximum 8 doses per month.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Research-grade typical range.</span> 1–2 mg subcutaneously per dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lower starting dose.</span> 1 mg (or even 250–500 mcg) for first-time use to test tolerance — particularly to assess nausea response.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Off-label male ED protocol.</span> 1.75–2 mg SC, 30–60 minutes before activity. Some clinicians combine with low-dose sildenafil (25 mg) for PDE5-resistant cases.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Discontinuation.</span> Per FDA label, discontinue if no improvement in sexual desire and distress after 8 weeks of use.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          PT-141 is strictly on-demand, NOT a daily medication. Repeated dosing greater than 8 times per month increases hyperpigmentation risk. Always allow at least 24 hours between doses.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is PT-141 administered?",
    intro: (
      <>
        PT-141 is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; on-demand ~45 minutes before anticipated sexual activity. The Vyleesi autoinjector is pre-dosed at 1.75 mg. Research-grade material requires reconstitution. For the practical mechanics of insulin syringes for research-grade material, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Vyleesi autoinjector targets the abdomen or thigh.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> ~45 minutes before anticipated sexual activity. On-demand only &mdash; not daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine. Eating a light snack before may help reduce nausea.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Maximum frequency.</span> 1 dose per 24 hours; maximum 8 doses per month (hyperpigmentation risk limit).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vyleesi autoinjector.</span> Pre-dosed at 1.75 mg, no reconstitution required.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-nausea prep (optional).</span> Some users take oral ondansetron 30 minutes before injection. Light snack with light protein also helps.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Storage of reconstituted solution.</span> Refrigerate at 2–8°C, use within 30 days, never freeze.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> PT-141 is fundamentally different from daily peptides &mdash; it&apos;s on-demand, taken before anticipated activity. The 45-minute pre-dose timing aligns with peak plasma levels and central nervous system effect onset. Effects last 4–6 hours, then resolve. There&apos;s no cumulative dosing or steady-state &mdash; each dose is independent. The 8-dose-per-month limit is the practical constraint, driven by hyperpigmentation risk rather than tolerance.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">On-demand only &mdash; max 1/24hr, max 8/month</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~45 minutes before anticipated activity (peak plasma timing)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting requirement; light snack may help reduce nausea</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Vyleesi: abdomen or thigh (per autoinjector instructions)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~2.7 hours; effects on sexual desire last 4–6 hours</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not applicable &mdash; each dose is independent (on-demand pharmacology)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. PT-141 research vials are typically 10 mg. The 1.75 mg FDA-approved dose maps cleanly to standard reconstitution volumes. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 10 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">0.5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">1.75 mg (FDA)</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">2 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">18 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">35 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">53 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 10 mg vial, each unit drawn delivers 100 mcg of PT-141 at 1 mL reconstitution, 50 mcg at 2 mL, and 33 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does PT-141 stack well with?",
    intro:
      "PT-141's most-studied off-label combination is with sildenafil in PDE5-resistant ED — research data shows stronger erectile response than either alone. Cardiovascular monitoring required. Oxytocin is anecdotally combined for the emotional-bonding aspect of intimacy. The most important non-stacking is Melanotan II — both act on melanocortin receptors, additive nausea/BP/hyperpigmentation risk.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sildenafil (off-label, men).</span> Combination shows stronger erectile response than either alone in research data. Used in PDE5-resistant ED. Cardiovascular risk additive &mdash; requires medical screening.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oxytocin.</span> Anecdotally combined for emotional bonding aspect of intimacy. Limited research on combination but generally considered safe.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157.</span>{" "}
          <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
          &mdash; different mechanism (healing/gut). No direct interaction.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: Melanotan II.</span>{" "}
          <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>{" "}
          &mdash; both act on melanocortin receptors. Stacking increases nausea, blood pressure changes, and hyperpigmentation risk.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-nausea protocol.</span> Some users take oral ondansetron 30 minutes before injection. Ginger tablets are a non-prescription alternative.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of PT-141?",
    intro:
      "Nausea is the most common side effect (~40% in Phase 3 — major tolerability issue). Flushing (~20%) and injection site reactions (~13%) are also common. Less common moderate effects include headache, dizziness, vomiting. The most concerning serious risks are hyperpigmentation (focal skin darkening that may not resolve after stopping — driver of the 8-doses/month limit) and transient blood pressure elevation (6 mmHg systolic, 3 mmHg diastolic — contraindicated in uncontrolled hypertension).",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> Most common side effect, occurs in ~40% of users in Phase 3 trials. Often most pronounced with first dose; many users find it tolerable after 1–2 doses or manageable with anti-nausea medication.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Flushing.</span> Facial warmth and redness in ~20% of users, usually mild and transient.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Redness, pain, swelling in ~13% of users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache (~11%) and dizziness.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vomiting (~5%), cough (~3%), fatigue (~3%).</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hot flashes, paresthesia, mild nasal congestion.</span></li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hyperpigmentation.</span> Focal skin darkening on face, gums, or breasts. Risk increases with frequent use (&gt;8 doses per month). May not resolve after discontinuation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient blood pressure elevation.</span> Average 6 mmHg systolic, 3 mmHg diastolic. Contraindicated in uncontrolled hypertension and cardiovascular disease.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Rare acute liver injury.</span> Single case of acute hepatitis after 10 doses over a year reported (LiverTox classification: D &mdash; possible rare cause).</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141 is contraindicated in patients with uncontrolled hypertension or cardiovascular disease due to transient blood pressure rises. The 8-doses-per-month limit exists to minimize hyperpigmentation risk &mdash; exceeding it raises the chance of skin darkening that may persist after stopping the drug. PT-141 reduces oral absorption (bioavailability) of certain medications (e.g., naltrexone, indomethacin) by slowing gastric motility. Pregnancy contraindicated based on animal teratogenicity data.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does PT-141 interact with other drugs?",
    intro:
      "PT-141's most important interactions are with oral medications affected by slowed gastric motility (naltrexone, indomethacin — schedule away from PT-141 doses), antihypertensives (PT-141 raises BP transiently), other melanocortin agonists (additive side effects — avoid Melanotan II and setmelanotide), and PDE5 inhibitors (off-label combination shows stronger erectile response — cardiovascular monitoring required). Alcohol has minimal interaction.",
    body: [
      "Naltrexone, indomethacin, and other oral medications. PT-141 slows gastric motility, reducing oral bioavailability of these drugs. Schedule oral meds away from PT-141 doses.",
      "Antihypertensives. PT-141 raises blood pressure transiently. Effects on patients on BP medications are unpredictable; medical supervision recommended.",
      "Other melanocortin agonists (Melanotan II, setmelanotide). Additive side effects. Avoid combination.",
      "Alcohol. Minimal interaction (unlike flibanserin). Safe in moderate amounts.",
      "PDE5 inhibitors (sildenafil, tadalafil). Off-label combination shows stronger erectile response in men. Cardiovascular monitoring required.",
    ],
  },
  {
    id: "storage",
    title: "How should PT-141 be stored?",
    body: [
      "Vyleesi autoinjector: refrigerate at 2–8°C in original carton until use. Do not freeze.",
      "Lyophilized research-grade powder: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution. Protect from light.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of PT-141 research?",
    intro:
      "PT-141 (Vyleesi) is FDA-approved ONLY for acquired, generalized HSDD in premenopausal women. ALL OFF-LABEL USES (male ED, postmenopausal HSDD, SSRI-induced dysfunction) are not FDA-approved. Researchers have questioned the relevance and effect sizes of the Phase 3 rating scales. Contraindicated in pregnancy (animal teratogenicity), uncontrolled hypertension, and cardiovascular disease. Hyperpigmentation risk increases beyond 8 doses/month and may not resolve after stopping. NOT WADA-prohibited.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141 (brand name Vyleesi) is FDA-approved ONLY for acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women. The FDA labeling specifically excludes men, postmenopausal women, and use to enhance sexual performance.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          ALL OFF-LABEL USES &mdash; including male ED, postmenopausal HSDD, and SSRI-induced dysfunction &mdash; are not FDA-approved. Off-label prescribing is legal under physician judgment but lacks the controlled trial evidence supporting the approved indication.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Researchers have questioned the relevance and effect sizes of the rating scales used in Phase 3 trials. The drug&apos;s clinical benefit was statistically significant but considered modest by some reviewers. Treatment should be discontinued after 8 weeks if no improvement in sexual desire and distress.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141 is contraindicated in pregnancy (animal teratogenicity), uncontrolled hypertension, and cardiovascular disease. Hyperpigmentation risk increases with use beyond 8 doses per month and may not resolve after stopping the drug.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency does not currently include PT-141 on the prohibited list.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source PT-141",
    intro:
      "PT-141 is FDA-approved as Vyleesi — prescription, premenopausal women with HSDD only — distributed through specialty pharmacies. Off-label and research-grade PT-141 is sold by specialty peptide vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes — including a nasal-format option (the original PT-141 delivery route in early clinical trials).",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "behemoth-labz", note: "Nasal + vial formats" },
            { slug: "ascension-peptides" },
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
    title: "PT-141 FAQ",
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
          Vyleesi (bremelanotide injection) FDA Prescribing Information. 2019.{" "}
          <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Bremelanotide.{" "}
          <a href="https://en.wikipedia.org/wiki/Bremelanotide" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://en.wikipedia.org/wiki/Bremelanotide
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kingsberg SA, Clayton AH, Portman D, et al. Bremelanotide for the treatment of hypoactive sexual desire disorder: two randomized phase 3 trials. Obstet Gynecol. 2019;134(5):899-908.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31599840/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31599840/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Diamond LE, Earle DC, Rosen RC, et al. Double-blind, placebo-controlled evaluation of the safety, pharmacokinetic properties and pharmacodynamic effects of intranasal PT-141. Int J Impot Res. 2004;16(1):51-9.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/14963471/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/14963471/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dhillon S, Keam SJ. Bremelanotide: First Approval. Drugs. 2019;79(14):1599-1606.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31429064/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31429064/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          LiverTox: Clinical and Research Information on Drug-Induced Liver Injury. Bremelanotide. NCBI Bookshelf.{" "}
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK573221/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://www.ncbi.nlm.nih.gov/books/NBK573221/
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
  { id: "overview", title: "What is PT-141?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function PT141Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"PT-141 (Bremelanotide / Vyleesi)","description":"PT-141 (Bremelanotide, Vyleesi) research profile: FDA-approved for HSDD, MC4R mechanism, on-demand dosing, off-label male ED use, side effects, FAQ.","url":"https://profpeptide.com/peptides/pt-141","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"PT-141"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">PT-141</h1>
        <span className="tag">Sexual Health</span>
        <span className="tag">FDA-Approved</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: May 24, 2026
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">A lab-made peptide that acts on melanocortin (MC4R) receptors in the brain to raise sexual desire and arousal &mdash; the first FDA-approved peptide to work on desire through brain pathways rather than blood flow.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Subcutaneous injection, on-demand ~45 minutes before activity (intranasal in early research)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">~2.7 hours; effects last 4&ndash;6 hours</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">1.75 mg subcutaneously per dose; max 1 per 24 hours, 8 per month</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">FDA-approved as Vyleesi for premenopausal HSDD &mdash; all other uses off-label.</dd>
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
        <h2 className="section-heading mb-3">What is PT-141?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            PT-141 (bremelanotide, brand name Vyleesi) is a synthetic cyclic heptapeptide melanocortin receptor agonist developed by Palatin Technologies. It was derived from{" "}
            <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>{" "}
            by removing the C-terminal amide group, eliminating the strong tanning effect while preserving sexual desire and arousal effects. The FDA approved PT-141 as Vyleesi in June 2019 for treatment of acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women &mdash; making it the first FDA-approved peptide that targets sexual desire through brain pathways rather than peripheral vascular mechanisms. Off-label use in men with erectile dysfunction is also documented. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">FDA-approved for HSDD in premenopausal women (Vyleesi, June 2019)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Acts on central nervous system (MC3R/MC4R) rather than vascular system</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">~45-minute onset, on-demand dosing</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Erection support in men (off-label) including PDE5-resistant cases</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No interaction with alcohol (unlike flibanserin)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Effects last 4–6 hours from a single dose</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> FDA-approved dose: 1.75 mg subcutaneously via Vyleesi autoinjector, ~45 minutes before anticipated sexual activity. Maximum 1 dose per 24 hours, maximum 8 doses per month.
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
        {["Sexual Health", "Melanocortin Agonist", "FDA-Approved", "On-Demand"].map((tag) => (
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
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#3A759F] hover:underline">KPV</Link>
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
    <ContactLink pageName="PT-141" pagePath="/peptides/pt-141" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
