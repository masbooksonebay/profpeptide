import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/selank",
  title: "Selank — Russian Anxiolytic Peptide, GABA, Mechanism, Dosage | Prof. Peptide",
  description:
    "Selank research profile: GABAergic anxiolysis without sedation, intranasal dosing protocol, Semax stack, Russian clinical history, side effects, FAQ.",
});

const faqs = [
  {
    q: "Is Selank FDA-approved?",
    a: "No. Selank is approved as a prescription medication in Russia for generalized anxiety disorder and neurasthenia. It is not FDA-approved in the United States or EMA-approved in Europe. Outside Russia, Selank is sold as a research-grade peptide.",
  },
  {
    q: "How does Selank compare to benzodiazepines?",
    a: "In Russian clinical trials (Zozulya et al. 2008), Selank produced anxiolytic effects comparable to medazepam in 62 GAD patients. Critical differences: NO sedation, NO cognitive impairment, NO tolerance development, NO physical dependence, NO withdrawal syndrome. Selank also has additional anti-asthenic (anti-fatigue) and mild psychostimulant properties that benzodiazepines lack.",
  },
  {
    q: "How is Selank different from Semax?",
    a: (
      <>
        Both are Russian heptapeptides with Pro-Gly-Pro stabilization. Selank is derived from tuftsin and primarily acts on GABA and serotonergic systems &mdash; best for anxiety without sedation.{" "}
        <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
        is derived from ACTH(4-7) and primarily targets BDNF and dopaminergic systems &mdash; best for cognitive enhancement and stroke recovery. They are commonly stacked as the{" "}
        <Link href="/peptides/semax-selank" className="text-[#3A759F] hover:underline">Semax-Selank blend</Link>{" "}
        or dosed separately: Semax morning for focus, Selank later for calm. See the{" "}
        <Link href="/compare/semax-vs-selank" className="text-[#3A759F] hover:underline">Semax vs Selank comparison</Link>{" "}
        for a side-by-side breakdown.
      </>
    ),
  },
  {
    q: "Will Selank make me drowsy?",
    a: "No — this is its key advantage over benzodiazepines and most prescription anxiolytics. Selank reduces anxiety while preserving alertness and cognitive function. Some users report mild stimulating effect, which is why morning/afternoon dosing is preferred over late evening.",
  },
  {
    q: "How quickly does it work?",
    a: "Anxiolytic effects are typically reported within 10–30 minutes of intranasal dosing. Many users notice calm from the first dose. Cumulative cognitive and stress-resilience benefits build over the standard 14-day course.",
  },
  {
    q: "Does Selank cause dependence?",
    a: "No. Russian clinical studies spanning decades have documented no tolerance development, no physical dependence, and no withdrawal syndrome. This is a defining advantage over benzodiazepines and other GABAergic anxiolytics.",
  },
  {
    q: "Should I cycle Selank?",
    a: "Russian clinical protocols use fixed 14-day courses with breaks. Outside Russia, the 2-week-on/2-week-off pattern is common. Continuous long-term use beyond several months has limited published data — cycling is the conservative approach.",
  },
  {
    q: "Where can I buy Selank?",
    a: (
      <>
        Outside Russia, Selank is sold by specialty research peptide vendors as research-grade material. Choose vendors that provide third-party testing (HPLC purity, mass spectrometric identity confirmation). PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Efficacy and Possible Mechanisms of Action of a New Peptide Anxiolytic Selank in the Therapy of Generalized Anxiety Disorders and Neurasthenia",
    authors: "Zozulia AA, Neznamov GG, Syunyakov TS, et al.",
    journal: "Zhurnal Nevrologii i Psikhiatrii / PubMed",
    year: "2008",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
    summary: "The primary human clinical trial of Selank — a comparative study of 62 patients with GAD and neurasthenia, treated with either Selank (30 patients) or medazepam, a benzodiazepine (32 patients). Selank produced anxiolytic effects comparable to medazepam — but with additional antiasthenic and psychostimulant effects not seen with the benzodiazepine. Selank produced these effects without typical benzodiazepine side effects of sedation, dependence, or withdrawal.",
  },
  {
    title: "Selank Administration Affects the Expression of Some Genes Involved in GABAergic Neurotransmission",
    authors: "Volkova A, Shadrina M, Kolomin T, et al.",
    journal: "Frontiers in Pharmacology / PMC",
    year: "2016",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4757669/",
    summary: "A molecular study investigating how Selank produces its anxiolytic effects. The findings confirmed that Selank affects the GABA system — but indirectly, through allosteric modulation of GABAA receptors rather than direct binding. Direct GABA receptor agonism (as with benzodiazepines) produces tolerance and dependence, while allosteric modulation is associated with a much lower dependence risk.",
  },
  {
    title: "Peptide Selank Enhances the Effect of Diazepam in Reducing Anxiety in Unpredictable Chronic Mild Stress Conditions in Rats",
    authors: "Semenova TP, Kozlovskiy II, Zakharova NM, et al.",
    journal: "PMC / Behavioural Neurology",
    year: "2017",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5322660/",
    summary: "A preclinical study examining how Selank interacts with diazepam under chronic stress conditions. The combination of Selank and diazepam was most effective under unpredictable chronic mild stress — with anxiety levels returning to pre-stress baseline. The synergistic effect suggests Selank may enhance and hasten the onset of benzodiazepine therapy.",
  },
  {
    title: "Selank Protects Against Ethanol-Induced Memory Impairment by Regulating BDNF Content in the Hippocampus and Prefrontal Cortex",
    authors: "Kolik LG, Nadorova AV, Antipova TA, et al.",
    journal: "Bulletin of Experimental Biology and Medicine / Springer",
    year: "2019",
    access: "Paywalled",
    url: "https://link.springer.com/article/10.1007/s10517-019-04588-9",
    summary: "Selank prevented ethanol-induced cognitive impairments and produced a cognitive-stimulating effect in non-alcohol-exposed control animals. Selank prevented ethanol-induced dysregulation of BDNF in both the hippocampus and prefrontal cortex — extending Selank's research profile beyond anxiety into neuroprotection and cognitive preservation.",
  },
  {
    title: "GABA, Selank, and Olanzapine Affect the Expression of Genes Involved in GABAergic Neurotransmission in IMR-32 Cells",
    authors: "Dadayan AK, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2017",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2017.00089/full",
    summary: "Combining Selank with olanzapine amplified gene expression changes compared to olanzapine alone — suggesting Selank may enhance the effectiveness of antipsychotic medication through BDNF-mediated pathways. Opens a potential research direction for Selank as an adjunct in schizophrenia and other psychiatric conditions.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Selank work?",
    intro:
      "Selank acts as a positive allosteric modulator of GABA-A receptor signaling WITHOUT binding the benzodiazepine site — this is the structural reason it produces anxiolytic effects without sedation, cognitive impairment, or dependence. It also modulates serotonin and dopamine metabolism, upregulates BDNF, inhibits enkephalinase, and retains immunomodulatory activity from its tuftsin parent peptide.",
    body: [
      "GABAergic Modulation [1]. Selank acts as a positive allosteric modulator of GABA-A receptor signaling without binding the benzodiazepine site. This produces anxiolytic effects without the sedation, cognitive impairment, and dependence associated with benzodiazepines.",
      "Serotonin Metabolism [2]. Russian studies report increased 5-HIAA to serotonin ratios in the hypothalamus and striatum, indicating accelerated serotonin turnover. Dopamine metabolism shifts in the same direction.",
      "BDNF Upregulation [3]. Single intranasal Selank doses produce measurable upregulation of BDNF and NGF mRNA in the hippocampus within hours. This contributes to the cognitive-supportive effects observed clinically.",
      "Enkephalinase Inhibition [4]. Like Semax, Selank inhibits enzymes that degrade endogenous enkephalins, prolonging their activity. This contributes to anti-stress effects through endogenous opioid system modulation.",
      "Immunomodulation [5]. As a tuftsin analog, Selank retains immunomodulatory properties. It enhances phagocytic activity of monocytes and neutrophils, modulates IL-6 expression, and influences T-helper cell cytokine balance.",
    ],
  },
  {
    id: "research",
    title: "What is Selank used for?",
    intro:
      "Selank's research evidence base centers on the Russian non-inferiority trial vs medazepam in GAD patients (Zozulya et al. 2008), animal cognitive performance under stress, neurasthenia (approved Russian indication), BDNF/plasticity studies, and cytokine modulation from tuftsin parent activity. Russian regulatory approval is built on the Zozulya trial.",
    body: [
      "Generalized Anxiety Disorder [6]. Russian non-inferiority clinical trial in 62 GAD patients (Zozulya et al. 2008) showed Selank produced anxiolytic effects comparable to medazepam, with additional antiasthenic and psychostimulant properties. Russian regulatory approval is based on this evidence.",
      "Cognitive Performance Under Stress [2]. Animal and human studies show Selank preserves or improves cognitive performance in elevated plus maze, light-dark box, open field, and human stress paradigms. Unlike benzodiazepines, no cognitive impairment occurs.",
      "Neurasthenia and Asthenic Syndrome. Approved Russian indication. Standard dosing for 14 days has shown efficacy in neurasthenia without sedating effects.",
      "BDNF and Plasticity [3]. Selank's BDNF effects parallel Semax with stronger anxiolytic phenotype. Combined Semax+Selank protocols leverage complementary mechanisms.",
      "Cytokine Modulation. Tuftsin-derived immunomodulatory activity documented in research. Explored as adjunctive treatment during viral infections, though clinical evidence remains limited.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Selank take to work?",
    intro:
      "Selank effects develop quickly. Anxiolytic effects are typically reported within 10–30 minutes of intranasal dosing. Subjective calm and reduced anxiety often appear within the first dose. Cumulative benefits build over the standard 14-day course. Russian clinical protocols use fixed 14-day courses with no tolerance development reported.",
    content:
      "Anxiolytic effects typically appear within 10–30 minutes of intranasal dosing — the fastest-acting peptide in this category. Subjective calm and reduced anxiety often appear within the first dose. Cumulative benefits (cognitive support, stress resilience) build over the standard 14-day course. Russian clinical protocols use fixed 14-day courses with no tolerance development reported across decades of clinical use.",
  },
  {
    id: "dosing",
    title: "How is Selank dosed?",
    intro:
      "Selank is administered intranasally as a 0.15% solution (1.5 mg/mL). The intranasal route allows partial nose-to-brain transport via olfactory and trigeminal pathways. Subcutaneous administration is also used in research contexts. Oral bioavailability is effectively zero. Standard Russian protocol: 250–300 mcg per nostril, 2–3 times daily, for 14-day courses.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard intranasal (Russian approved).</span> 250–300 mcg per nostril, 2–3 times daily, for 14-day courses. ~1,500–2,250 mcg/day total.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lower-end starting dose.</span> 200 mcg per nostril, 2× daily &mdash; for first-time users to assess tolerance.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Subcutaneous research dosing.</span> 250–500 mcg per injection, once daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Course length.</span> 14 days standard. Cycling 2–4 weeks on, 2–4 weeks off mirrors Russian clinical protocols. No tolerance reported.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No fasting requirement.</span> Selank effects are independent of food timing.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Russian clinical practice typically uses fixed 14-day courses for GAD or neurasthenia. Outside Russia, biohacker protocols often run continuous low-dose for several weeks then take a break. The 2-week-on/2-week-off cycle is conservative given limited long-term Western data, even though no tolerance has been documented.
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
    title: "How is Selank administered?",
    intro: (
      <>
        Selank is administered intranasally (preferred route &mdash; fastest CNS access via nose-to-brain transport) or by subcutaneous injection. Standard intranasal protocol is 1–2 drops per nostril, 2–3 times daily. Avoid late evening dosing &mdash; Selank can have mild stimulating effect that may affect sleep. For SC technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Intranasal (preferred) or subcutaneous injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Morning and afternoon. Avoid late evening dosing &mdash; mild stimulating effect can affect sleep.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Intranasal technique.</span> Tilt head slightly back. Apply 1–2 drops per nostril. Do not blow nose for 30+ minutes after dosing.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> For 0.15% solution: 5 mg vial + 3.3 mL bacteriostatic water = 1.5 mg/mL (~75 mcg per drop in standard nasal dropper).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation (SC).</span> Use a different site each injection (abdomen, thigh, upper arm).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume next scheduled dose. Effects are cumulative across the 14-day course.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 14 days standard, with 2–4 week breaks between courses.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Intranasal dosing gives faster CNS access than subcutaneous injection. The mild stimulating effect (counterintuitively present despite the anxiolytic action) means evening dosing can disrupt sleep &mdash; morning and afternoon are preferred. The 14-day course is a published protocol, not arbitrary &mdash; cumulative BDNF and serotonergic effects build across this window.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">2–3× daily during the 14-day course</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning and afternoon &mdash; avoid late evening (mild stimulating effect)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; effects independent of food timing</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route choice</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Intranasal preferred for fastest CNS access; SC alternative for research contexts</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Short plasma half-life; biological effects build over days via gene expression</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Anxiolytic effect immediate per dose; cumulative cognitive effects build over 14-day course</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math (subcutaneous use).</span> Choose your bacteriostatic water volume based on dose precision. Selank research vials are typically 5 mg. The standard 0.15% intranasal solution uses 3.3 mL recon to give 1.5 mg/mL. For SC dosing, the table below shows alternative recon volumes. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">500 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of Selank at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Selank stack well with?",
    intro:
      "Selank's canonical pairing is Semax — the gold-standard cognitive-anxiolytic combination targeting complementary BDNF/dopamine + GABA/serotonin pathways. Available as a pre-blended Semax-Selank product or dosed separately (Semax morning, Selank later). L-Theanine adds further calm; BPC-157 and adaptogenic herbs are compatible. Caffeine pairs well — Selank counterbalances the jitter.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Semax (Semax-Selank Stack).</span>{" "}
          <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
          for cognitive enhancement (morning) + Selank for calm (afternoon/evening). Complementary mechanisms (BDNF/dopamine vs GABA/serotonin) without redundancy. Available as a pre-blended{" "}
          <Link href="/peptides/semax-selank" className="text-[#3A759F] hover:underline">Semax-Selank</Link>{" "}
          product.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157.</span>{" "}
          <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
          generally compatible; no direct interaction. Common in general health/recovery stacks.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">L-Theanine.</span> Additive calming effect; safe combination.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adaptogenic herbs (rhodiola, ashwagandha).</span> Generally compatible. Some users report potentiated stress resilience.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Caffeine.</span> Selank counterbalances jitter from caffeine while preserving cognitive benefit.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Selank?",
    intro:
      "Selank has one of the cleanest safety profiles of any anxiolytic compound. Russian clinical use spanning decades has documented no addictive potential, no tolerance development, no withdrawal syndrome, and no significant cognitive or motor impairment. Most-reported effects are mild nasal irritation (intranasal route), mild stimulating effect (avoid late evening dosing), and slight headache (first doses). Western-standard long-term safety data remains limited.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild nasal irritation.</span> Intranasal route only.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild stimulating effect.</span> Avoid late evening dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Slight headache.</span> Especially first doses; resolves with continued use.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue after end of dosing course.</span> Resolves quickly.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient mild dizziness.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild gastrointestinal discomfort.</span></li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No serious adverse events documented in Russian clinical trials.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No physical dependence or withdrawal symptoms reported.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term safety beyond 14-day courses in healthy individuals not formally established.</span></li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Selank has one of the cleanest safety profiles of any anxiolytic compound. Russian clinical use spanning decades has documented no addictive potential, no tolerance development, no withdrawal syndrome, and no significant cognitive or motor impairment. This combination of efficacy and safety profile is unusual among anxiety treatments &mdash; most options carry sedation, dependence risk, or both. Western-standard long-term safety data remains limited.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Selank interact with other drugs?",
    intro:
      "Selank's relevant interactions are with benzodiazepines (both modulate GABA at different sites — combination theoretically additive), SSRIs and serotonergic medications (Selank modulates serotonin metabolism — combine cautiously), and alcohol (limited data, theoretical additive sedation at high doses). No major drug-drug interactions reported in published research.",
    body: [
      "Benzodiazepines. Both modulate GABA but at different sites. Combination is theoretically additive but not redundant. Limited safety data on combination.",
      "SSRIs and serotonergic medications. Selank modulates serotonin metabolism; combine cautiously.",
      "Alcohol. Limited data; theoretical additive sedation possible at high doses.",
      "No major drug-drug interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "How should Selank be stored?",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted nasal solution: Store at 2–8°C; use within 14–28 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton or amber dropper bottle.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Selank research?",
    intro:
      "Selank is approved in Russia as a prescription anxiolytic for GAD and neurasthenia. NOT FDA-approved in the US. Most clinical evidence comes from Russian-language studies — the key Zozulya non-inferiority trial vs medazepam (n=62, 2008) has not been independently replicated in large Western trials. The mechanism of GABA modulation is incompletely characterized. NOT WADA-prohibited.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Selank is approved in Russia as a prescription anxiolytic for generalized anxiety disorder and neurasthenia. It is NOT FDA-approved in the United States. Most clinical evidence comes from Russian-language studies &mdash; including the key non-inferiority trial vs medazepam (Zozulya et al. 2008, n=62) &mdash; that have not been independently replicated in large Western trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The mechanism of GABA modulation is incompletely characterized. Selank&apos;s exact binding site on GABA-A is unclear &mdash; it does NOT bind the benzodiazepine site, which would explain the lack of sedation and dependence, but the alternative site has not been definitively identified.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material sold outside Russian pharmaceutical channels is intended for laboratory use only. Purity and potency vary by vendor &mdash; third-party testing is recommended.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency does not currently include Selank on the prohibited list.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Selank",
    intro:
      "Outside Russia, Selank is sold by specialty research peptide vendors as research-grade material. Choose vendors that provide third-party testing (HPLC purity, mass spectrometric identity confirmation). The vendors highlighted below have been vetted — including N-Acetyl Selank variants and nasal format options.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "behemoth-labz", note: "Nasal format" },
            { slug: "purerawz", note: "N-Acetyl Selank" },
            { slug: "vital-core-research" },
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
    title: "Selank FAQ",
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
          Wikipedia. Selank.{" "}
          <a href="https://en.wikipedia.org/wiki/Selank" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://en.wikipedia.org/wiki/Selank
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kozlovskaya MM, Kozlovskii II, Val&apos;dman EA, Seredenin SB. Selank and short peptides of the tuftsin family in the regulation of adaptive behavior in stress. Neurosci Behav Physiol. 2003;33(9):853-60.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/14969422/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/14969422/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Inozemtseva LS, Karpenko EA, Dolotov OV, et al. Intranasal administration of the peptide Selank regulates BDNF expression in the rat hippocampus in vivo. Dokl Biol Sci. 2008;421:241-3.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18841804/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18841804/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kost NV, Sokolov OY, Gabaeva MV, et al. Semax and selank inhibit the enkephalin-degrading enzymes from human serum. Russ J Bioorg Chem. 2001;27(3):180-3.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11443939/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11443939/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Uchakina ON, Uchakin PN, Myasoedov NF, et al. Immunomodulatory effects of selank in patients with anxiety-asthenic disorders. Zh Nevrol Psikhiatr Im S S Korsakova. 2008;108(5):71-5.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18577961/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18577961/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Zozulya AA, Neznamov GG, Siuniakov TS, et al. Efficacy and possible mechanisms of action of a new peptide anxiolytic selank in the therapy of generalized anxiety disorders and neurasthenia. Zh Nevrol Psikhiatr Im S S Korsakova. 2008;108(4):38-48.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18454096/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18454096/
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
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function SelankPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Selank","description":"Selank research profile: GABAergic anxiolysis without sedation, intranasal dosing protocol, Semax stack, Russian clinical history, side effects, FAQ.","url":"https://profpeptide.com/peptides/selank","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Selank"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Selank</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 24, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> TP-7, Tuftsin Analog, Russian Anxiolytic Peptide
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Synthetic Heptapeptide &mdash; GABA-A Allosteric Modulator / Tuftsin Analog
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Russian-approved prescription anxiolytic (GAD, neurasthenia). Not FDA/EMA approved. Not on WADA prohibited list.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Selank?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Selank is a synthetic heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro) developed in the 1990s at the Institute of Molecular Genetics of the Russian Academy of Sciences. It combines tuftsin (an endogenous immunomodulatory tetrapeptide derived from immunoglobulin G) with the same Pro-Gly-Pro stabilizing tail used in{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>
            . Selank produces anxiolytic effects comparable to benzodiazepines like medazepam in Russian clinical trials &mdash; but without sedation, cognitive impairment, tolerance, or withdrawal. It is approved in Russia for generalized anxiety disorder (GAD) and neurasthenia. The peptide also retains immunomodulatory activity from its tuftsin parent. Often paired with Semax as the{" "}
            <Link href="/peptides/semax-selank" className="text-[#3A759F] hover:underline">Semax-Selank blend</Link>
            . New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anxiolytic effect comparable to medazepam in clinical studies</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No sedation, cognitive impairment, or motor effects</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No tolerance, dependence, or withdrawal</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">BDNF upregulation in hippocampus</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modulates GABA-A receptor signaling, serotonin, and dopamine</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Immunomodulation (IL-6 modulation, T-helper balance) from tuftsin parent</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Standard intranasal protocol: 200–500 mcg per nostril, 2–3 times daily, administered as 0.15% solution. Standard course: 14 days.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
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
        {["Cognitive & Nootropic", "Anxiolytic", "Russian-Approved", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/semax" className="text-sm font-medium text-[#3A759F] hover:underline">Semax</Link>
        <Link href="/peptides/dsip" className="text-sm font-medium text-[#3A759F] hover:underline">DSIP</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">BPC-157</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/semax-selank" className="text-sm font-medium text-[#3A759F] hover:underline">Semax-Selank</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/semax-vs-selank" className="text-sm font-medium text-[#3A759F] hover:underline">Semax vs Selank &rarr;</Link>
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
    <ContactLink pageName="Selank" pagePath="/peptides/selank" />
    </div>
    </>
  );
}
