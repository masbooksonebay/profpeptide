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
  path: "/peptides/tesamorelin",
  title: "Tesamorelin — Egrifta, FDA-Approved GHRH Analog, Mechanism, Dosage | Prof. Peptide",
  description:
    "Tesamorelin (Egrifta WR / Egrifta SV) research profile: FDA-approved for HIV lipodystrophy, GHRH receptor mechanism, Phase 3 visceral fat data, dosing, FAQ.",
});

const faqs = [
  {
    q: "Is tesamorelin FDA-approved?",
    a: "Yes — tesamorelin (brand names Egrifta, Egrifta SV, Egrifta WR) is FDA-approved for reduction of excess abdominal fat in HIV-infected adults with lipodystrophy. It is the ONLY GHRH analog currently with FDA approval. All other uses (anti-aging, NAFLD, general weight loss) are off-label.",
  },
  {
    q: "Will tesamorelin help me lose weight?",
    a: "Not in the way most weight loss drugs do. Tesamorelin has a weight-neutral effect — it reduces visceral abdominal fat (deep belly fat around organs) without proportional total weight loss. Patients typically see waist circumference reduction without scale changes. The FDA labeling specifically states it is NOT indicated for weight loss management.",
  },
  {
    q: "How does tesamorelin compare to CJC-1295 or sermorelin?",
    a: (
      <>
        Tesamorelin has the strongest evidence base — completed Phase 3 trials and FDA approval.{" "}
        <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
        and{" "}
        <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">sermorelin</Link>{" "}
        lack equivalent controlled efficacy data. Mechanistically all three activate the GHRH receptor; tesamorelin has higher receptor binding affinity and resistance to DPP-IV degradation than sermorelin, but shorter half-life than CJC-1295 with DAC. The choice depends on whether you want FDA-approved evidence (tesamorelin), longer dosing intervals (CJC-1295 with DAC), or the most natural sequence (sermorelin).
      </>
    ),
  },
  {
    q: "Why is tesamorelin only approved for HIV lipodystrophy?",
    a: "The Phase 3 program was specifically designed for HIV-associated lipodystrophy because that population has a unique form of visceral fat accumulation caused by antiretroviral therapy. The drug was not tested for general weight loss or non-HIV visceral fat. Off-label use in other populations is common but not formally validated through controlled trials.",
  },
  {
    q: "How long until I see results?",
    a: "IGF-1 elevation within 1–2 weeks. Measurable visceral fat reduction (on CT scan) by week 13. Maximum effect at ~week 26. The full Phase 3 protocol ran 26 weeks with extension to 52 weeks. Subjective changes (waist circumference, abdominal fullness) typically appear over 8–16 weeks.",
  },
  {
    q: "Are the antibodies a problem?",
    a: "Most patients (56–85%) develop anti-tesamorelin IgG antibodies during therapy. The Phase 3 data showed antibodies did NOT reduce efficacy — patients with and without antibodies had similar visceral fat reduction. However, antibody-positive patients had higher rates of hypersensitivity reactions. Antibodies generally clear after stopping therapy.",
  },
  {
    q: "Can I use tesamorelin off-label?",
    a: "Off-label prescribing of FDA-approved drugs is legal in the US under physician judgment. However, the drug's safety and efficacy have only been established for HIV-associated lipodystrophy. Using tesamorelin for general weight loss, anti-aging, or NAFLD lacks the controlled trial evidence that supports the approved indication.",
  },
  {
    q: "Where can I buy tesamorelin?",
    a: (
      <>
        Egrifta WR and Egrifta SV are prescription medications distributed through specialty pharmacy channels in the US. Research-grade tesamorelin is sold by specialty peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Effects of Tesamorelin in HIV-Infected Patients with Excess Abdominal Fat — Pooled Analysis of Two Phase 3 Trials",
    authors: "Falutz J, Mamputu JC, Potvin D, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism / PubMed",
    year: "2010",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/20554713/",
    summary: "The pivotal Phase 3 trial data that led to tesamorelin's FDA approval. The pooled analysis of 806 HIV-infected patients with lipodystrophy showed that daily tesamorelin 2mg reduced visceral adipose tissue (VAT) by 17.5% at 26 weeks — and maintained that reduction at 52 weeks with continued treatment. Waist circumference decreased 3.4 cm, triglycerides dropped significantly, and body image improved. IGF-1 increased by a mean of 108 ng/ml. Critically, glucose parameters remained stable.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications / Wiley",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review covering tesamorelin's development and approval in the context of the broader GH secretagogue class. The paper explains how tesamorelin's N-terminal modification (trans-3-hexenoyl group) protects it from DPP-4 enzyme degradation — giving it a longer half-life than native GHRH or sermorelin.",
  },
  {
    title: "GHRH Effects on Brain GABA Levels in Mild Cognitive Impairment and Healthy Aging",
    authors: "Friedman SD, Baker LD, Borson S, et al.",
    journal: "PMC / JAMA Neurology",
    year: "2013",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764915/",
    summary: "A 20-week randomized trial in which healthy older adults and adults with mild cognitive impairment self-administered daily tesamorelin. The study found that tesamorelin altered brain neurochemical levels — specifically GABA — and documented cognitive improvements. MRI brain spectroscopy measured actual neurochemical changes, providing a plausible biological mechanism for GH secretagogues' cognitive effects.",
  },
  {
    title: "Tesamorelin Reduces Liver Fat Content in HIV Patients with NAFLD",
    authors: "Stanley TL, Fourman LT, Feldpausch MN, et al.",
    journal: "Lancet HIV",
    year: "2019",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/31611038/",
    summary: "Clinical trial evidence showing that tesamorelin reduced liver fat content and prevented liver inflammation and fibrosis progression in HIV patients with non-alcoholic fatty liver disease (NAFLD). This extended tesamorelin's clinical relevance beyond visceral fat reduction and into liver disease. A prospective Phase II trial in non-HIV NAFLD patients subsequently began (NCT03375788).",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Tesamorelin work?",
    intro:
      "Tesamorelin activates the GHRH receptor on pituitary somatotrophs with similar potency to endogenous GHRH, stimulating pulsatile GH release. Its key structural feature is an N-terminal trans-3-hexenoic acid modification on Tyr1 that protects against DPP-IV degradation, extending functional half-life to 26–38 minutes vs ~30 minutes for native GHRH. Clinically distinctive: the GH it releases preferentially reduces visceral adipose tissue over subcutaneous fat — the basis for its FDA-approved HIV-lipodystrophy indication.",
    body: [
      "GHRH Receptor Activation [1]. Tesamorelin binds and activates the GHRH receptor (GHRH-R) on pituitary somatotroph cells with similar potency to endogenous GHRH. This stimulates pulsatile GH synthesis and release through cAMP/PKA signaling.",
      "DPP-IV Resistance [2]. The N-terminal trans-3-hexenoic acid modification on Tyr1 protects tesamorelin from rapid breakdown by dipeptidyl peptidase IV (DPP-IV), the enzyme that quickly degrades native GHRH. This extends functional half-life to 26–38 minutes.",
      "Pulsatile GH Pattern [3]. Tesamorelin amplifies natural pulsatile GH secretion rather than producing continuous elevation. The hypothalamic-pituitary feedback loops remain intact, including somatostatin regulation.",
      "Visceral Fat Selectivity [4]. A key clinical advantage: tesamorelin-induced GH release preferentially reduces visceral adipose tissue (deep abdominal fat) over subcutaneous fat. The mechanism appears related to GH's enhanced lipolytic activity in VAT depots, which have higher GH receptor density.",
      "Hepatic IGF-1 Production. Sustained tesamorelin therapy increases hepatic IGF-1 production through downstream GH signaling. IGF-1 mediates many anabolic and lipolytic effects.",
    ],
  },
  {
    id: "research",
    title: "What is Tesamorelin used for?",
    intro:
      "Tesamorelin's evidence base is the strongest of any GHRH analog — FDA-approved for HIV-associated lipodystrophy (2010) with two large Phase 3 trials showing ~15–20% visceral fat reduction at 26 weeks. Beyond the approved indication, it has been studied for NAFLD (2019 Lancet HIV showing liver-fat reduction), cognitive function in older adults, and cardiovascular risk markers. Long-term cardiovascular outcomes trials have not been completed.",
    body: [
      "HIV-Associated Lipodystrophy [4][5]. FDA-approved indication. Two large Phase 3 trials (LIPO-010, n=412; CTR-1011, n=404) showed roughly 15–20% reduction in visceral adipose tissue (CT-measured) at 26 weeks. Results extended to 52 weeks with sustained benefit.",
      "Non-Alcoholic Fatty Liver Disease (NAFLD) [6]. A landmark 2019 Lancet HIV study (Stanley et al.) showed tesamorelin reduced liver fat fraction and slowed fibrosis progression in HIV-associated NAFLD. Off-label use for NAFLD in non-HIV populations is under investigation.",
      "Cognitive Function Research [7]. Baker et al. studied tesamorelin-related GHRH therapy in older adults with mild cognitive impairment, with improvements in cognitive function reported.",
      "Cardiovascular Risk Markers. Tesamorelin therapy improves multiple cardiovascular risk markers including triglycerides, total/HDL cholesterol ratio, and adiponectin. Long-term cardiovascular outcomes trials have not been completed.",
      "Pulsatile GH Preservation [3]. Multiple studies confirm tesamorelin preserves pulsatile GH dynamics rather than producing continuous GH elevation, which is mechanistically safer than direct GH administration.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Tesamorelin take to work?",
    intro:
      "Tesamorelin effects develop progressively. IGF-1 elevation appears within 1–2 weeks. Visceral fat reduction is measurable on CT scan by week 13 (per Phase 3 protocols). Maximum effect typically appears around week 26, with continued benefit through week 52. Most users notice subjective body composition changes (waist circumference, abdominal fullness) over 8–16 weeks of consistent dosing.",
    content:
      "IGF-1 elevation appears within 1–2 weeks of consistent dosing. Visceral fat reduction is measurable on CT scan by week 13 in Phase 3 protocols. Maximum effect typically appears around week 26, with continued benefit through week 52. Subjective body composition changes (waist circumference, abdominal fullness) typically appear over 8–16 weeks. The FDA labeling recommends reassessing risk/benefit at 26 weeks if visceral fat has not been reduced.",
  },
  {
    id: "dosing",
    title: "How is Tesamorelin dosed?",
    intro:
      "Tesamorelin is administered as a subcutaneous injection in the abdomen. The current FDA-approved formulations are Egrifta WR (1.28 mg once daily, weekly reconstitution, 11.6 mg vials — approved March 2025) and Egrifta SV (1.4 mg once daily, daily reconstitution, 2 mg vials). The original 2 mg Egrifta formulation is discontinued. Research-grade dosing typically 1–2 mg/day. Dose is fixed across patients — not titrated up.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Egrifta WR (current FDA-approved formulation).</span> 1.28 mg subcutaneously once daily, abdominal injection. 11.6 mg vials, weekly reconstitution.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Egrifta SV (prior FDA-approved formulation, still available).</span> 1.4 mg subcutaneously once daily, abdominal injection. 2 mg vials, daily reconstitution.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Original Egrifta (discontinued).</span> 2 mg subcutaneously once daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Research-grade dosing.</span> Typically 1–2 mg subcutaneously per day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> FDA labeling supports continuous use; assess risk/benefit at 26 weeks if no VAT reduction observed.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Tesamorelin is dosed once daily and not titrated up &mdash; the dose is fixed across patients. Injection should always be in the abdomen (not thigh or upper arm), with site rotation across different abdominal areas. Avoid scar tissue, bruises, and the navel.
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
    title: "How is Tesamorelin administered?",
    intro: (
      <>
        Tesamorelin is given as a subcutaneous injection in the abdomen &mdash; not thigh or upper arm. FDA labeling specifies abdominal injection only. The abdominal-only restriction is unique among research peptides and tied to the visceral-fat-targeting mechanism. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection in the ABDOMEN (not thigh or arm). FDA labeling specifies abdominal injection only.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> No specific timing required; daily consistency matters more than time of day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine for tesamorelin &mdash; unlike sermorelin/CJC-1295, food sensitivity is less critical because the longer GH pulse is less dependent on the precise window.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Rotate to different abdominal areas. Avoid scar tissue, bruises, the navel.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution (Egrifta WR).</span> Single 11.6 mg vial reconstituted with provided diluent; supplies 7 daily doses.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution (Egrifta SV).</span> 2 mg vial + 2.1 mL provided diluent; single dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume next day. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> Continuous use is FDA-supported; assess risk/benefit at 26 weeks if VAT not reduced.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Tesamorelin is administered once daily via abdominal subcutaneous injection. The longer half-life (26–38 min) and visceral-fat-selective mechanism mean that timing relative to food is less critical than for other GHRH analogs &mdash; the GH pulse it produces is long enough to drive the lipolytic effect on VAT depots regardless of meal timing. The abdominal-only restriction is tied to the visceral-fat-targeting mechanism and FDA labeling.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily during the cycle (continuous use FDA-supported)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any consistent time &mdash; daily consistency matters more than precise timing</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Abdomen only (FDA labeling); rotate across abdominal areas, avoid navel/scars/bruises</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~26–38 minutes</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per-pulse effect rather than traditional plasma steady-state &mdash; IGF-1 effects accumulate over weeks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> The branded Egrifta WR and Egrifta SV ship with their own diluents and reconstitution protocols (see Egrifta-specific protocol above). For research-grade tesamorelin, choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. Research-grade vials are typically 5 mg. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1.28 mg (WR)</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1.4 mg (SV)</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">26 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">28 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">51 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">56 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">80 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">77 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">84 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume &mdash; would require split injections or a lower reconstitution volume.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of Tesamorelin at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Tesamorelin stack well with?",
    intro:
      "Tesamorelin's FDA-approved usage is standalone — stacking is off-label and not supported by controlled human data. Some off-label protocols combine with ipamorelin for amplified GH release through dual-pathway activation (GHRH + ghrelin receptors), or with BPC-157/TB-500 for recovery support. Tesamorelin should NOT be combined with CJC-1295 or sermorelin (redundant GHRH-receptor mechanism).",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> The FDA-approved approach. Stacking is off-label and unsupported by controlled data.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Ipamorelin (off-label).</span>{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>{" "}
          sometimes combined for amplified GH release via dual-pathway activation (GHRH receptor + ghrelin receptor). No controlled human data on this combination.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157 / TB-500.</span>{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>{" "}
          paired off-label for recovery support during anabolic protocols.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Natural pairing for body composition research &mdash; mechanical loading is necessary for proper lean-mass adaptation.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: CJC-1295 or sermorelin.</span> Redundant GHRH-receptor mechanism, no proportional benefit.{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          and{" "}
          <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">sermorelin</Link>{" "}
          target the same receptor as tesamorelin.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Tesamorelin?",
    intro:
      "Tesamorelin has the strongest documented safety profile of any GHRH analog because of completed Phase 3 trials and ongoing FDA post-marketing surveillance. The most-reported user effects are injection-site reactions, arthralgia (joint pain consistent with sustained GH elevation), and peripheral edema. Anti-tesamorelin IgG antibodies develop in 56–85% of patients but did not eliminate efficacy in trials. Glucose tolerance should be monitored during therapy.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation; common at the abdominal injection site.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Arthralgia (joint pain).</span> Common with sustained GH elevation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pain in extremities, peripheral edema, myalgia.</span> Reflects fluid-retention effects of GH/IGF-1 elevation.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild glucose intolerance.</span> Elevated fasting glucose during therapy; monitor in patients with diabetes risk.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Carpal tunnel-like symptoms.</span> Numbness, tingling related to fluid retention.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypersensitivity reactions.</span> More common in antibody-positive patients.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-tesamorelin IgG antibodies.</span> Developed in 56–85% of patients in Phase 3 &mdash; did not eliminate efficacy but caused hypersensitivity reactions in some patients. Antibodies generally clear after stopping therapy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hyperglycemia / new-onset diabetes.</span> Monitor glucose during therapy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Tumor growth risk.</span> Theoretical concern in pre-existing or active malignancy &mdash; discontinue if recurrent malignancy detected.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin has the strongest documented safety profile of any GHRH analog because of completed Phase 3 trials and ongoing FDA post-marketing surveillance. Long-term cardiovascular safety has not been established. Tesamorelin is contraindicated in pregnancy (causes fetal harm in animal models), in patients with disrupted hypothalamic-pituitary axis, in active malignancy, and in those with hypersensitivity to tesamorelin.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Tesamorelin interact with other drugs?",
    intro:
      "Tesamorelin's most relevant interactions are with corticosteroids (blunt GH release), insulin and oral diabetes medications (tesamorelin can cause hyperglycemia — dose adjustment may be needed), and other GHRH analogs (redundant mechanism). Simvastatin coadministration showed no significant pharmacokinetic interaction in clinical study.",
    body: [
      "Corticosteroids. Blunt GH release; may reduce tesamorelin efficacy.",
      "Insulin and oral diabetes medications. Tesamorelin can cause hyperglycemia; dose adjustment may be needed for concurrent diabetes therapy.",
      "Simvastatin. Coadministration showed no significant pharmacokinetic interaction in clinical study.",
      "Other GHRH analogs (CJC-1295, sermorelin). Redundant mechanism, do not combine.",
      "Direct HGH. Generally unnecessary; tesamorelin stimulates endogenous GH.",
    ],
  },
  {
    id: "storage",
    title: "How should Tesamorelin be stored?",
    body: [
      "Egrifta WR (powder vials): Store at 2–8°C in original carton until use.",
      "Egrifta SV (powder vials): Store at 2–8°C in original carton until use.",
      "Reconstituted Egrifta WR: Store at 2–8°C; use within 7 days.",
      "Reconstituted Egrifta SV: Use within 1 hour of reconstitution.",
      "Research-grade tesamorelin: Lyophilized powder at -20°C long-term, 2–8°C short-term; reconstituted at 2–8°C, use within 14–28 days.",
      "Never freeze reconstituted solution. Protect from light. Discard if cloudy.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Tesamorelin research?",
    intro:
      "Tesamorelin is FDA-approved for HIV-associated lipodystrophy only — all other uses are off-label and not supported by controlled trial evidence. The drug is not indicated for general weight loss (weight-neutral effect, only visceral fat reduction). Long-term cardiovascular safety has not been established. Contraindicated in pregnancy, disrupted hypothalamic-pituitary axis, and active malignancy. WADA-prohibited (Section S2).",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin (brand names Egrifta, Egrifta SV, Egrifta WR) is FDA-approved for reduction of excess abdominal fat in HIV-infected patients with lipodystrophy. ALL OTHER USES ARE OFF-LABEL. The drug is not indicated for general weight loss management &mdash; it has weight-neutral effect (visceral fat reduction without total weight loss).
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term cardiovascular safety has not been established. The FDA labeling specifically notes that long-term cardiovascular outcomes data is absent and patients should have risk/benefit reassessed if visceral fat is not reduced by 26 weeks.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin is contraindicated in pregnancy (causes fetal harm &mdash; hydrocephaly in rat offspring at 2–4x clinical dose). It is also contraindicated in patients with disrupted hypothalamic-pituitary axis and active malignancy.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The European Medicines Agency initially authorized tesamorelin in 2014 but the marketing authorization was subsequently withdrawn by the sponsor.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits tesamorelin in sport under Section S2 (peptide hormones).
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Tesamorelin",
    intro:
      "Egrifta WR and Egrifta SV are prescription medications distributed through specialty pharmacy channels in the US. Research-grade tesamorelin is sold by specialty peptide vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "spartan-peptides", note: "Included in Spartan Strong blend" },
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
    title: "Tesamorelin FAQ",
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
          Tesamorelin (Egrifta WR) FDA Prescribing Information. 2025.{" "}
          <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Theratechnologies. EGRIFTA WR (tesamorelin) F8 formulation FDA approval announcement. March 25, 2025.{" "}
          <a href="https://www.theratech.com/news-releases/news-release-details/theratechnologies-receives-fda-approval-egrifta-wrtm-tesamorelin/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://www.theratech.com/news-releases/news-release-details/theratechnologies-receives-fda-approval-egrifta-wrtm-tesamorelin/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Falutz J, Allas S, Blot K, et al. Metabolic effects of a growth hormone-releasing factor in patients with HIV. N Engl J Med. 2007;357(23):2359-70.{" "}
          <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa072375" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://www.nejm.org/doi/full/10.1056/NEJMoa072375
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Falutz J, Mamputu JC, Potvin D, et al. Effects of tesamorelin (TH9507), a growth hormone-releasing factor analog, in HIV-infected patients with excess abdominal fat: a pooled analysis of two multicenter, double-blind placebo-controlled phase 3 trials with safety extension data. J Clin Endocrinol Metab. 2010;95(9):4291-304.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20554713/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20554713/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Stanley TL, Fourman LT, Feldpausch MN, et al. Effects of tesamorelin on non-alcoholic fatty liver disease in HIV: a randomised, double-blind, multicentre trial. Lancet HIV. 2019;6(12):e821-e830.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31611038/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31611038/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Baker LD, Barsness SM, Borson S, et al. Effects of growth hormone-releasing hormone on cognitive function in adults with mild cognitive impairment and healthy older adults. Arch Neurol. 2012;69(11):1420-9.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22869065/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22869065/
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

export default function TesamorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Tesamorelin","description":"Tesamorelin (Egrifta WR / Egrifta SV) research profile: FDA-approved for HIV lipodystrophy, GHRH receptor mechanism, Phase 3 visceral fat data, dosing, FAQ.","url":"https://profpeptide.com/peptides/tesamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Tesamorelin"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tesamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">FDA-Approved</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Egrifta, Egrifta SV, Egrifta WR, TH9507
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Synthetic GHRH Analog &mdash; GHRH Receptor Agonist with DPP-IV Resistance
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> FDA-approved (Egrifta 2010; Egrifta SV 2019; Egrifta WR Mar 2025) for HIV-lipodystrophy. WADA-prohibited (Section S2).
        </p>
      </div>

      <div className="mb-8 p-4 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Latest research:</span> Egrifta WR (F8 formulation, 1.28 mg/day, weekly reconstitution) received FDA approval March 25, 2025 &mdash; replacing the older Egrifta SV for many patients. The new formulation reduces injection-site adverse events and improves stability of reconstituted solution.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Tesamorelin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Tesamorelin (brand names Egrifta, Egrifta SV, Egrifta WR) is a synthetic 44-amino-acid analog of human growth hormone-releasing hormone (GHRH) developed by Theratechnologies. It is the only GHRH analog with current FDA approval &mdash; approved in November 2010 for reduction of excess abdominal fat (visceral adipose tissue) in HIV-infected adults with lipodystrophy. Unlike{" "}
            <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
            or{" "}
            <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">sermorelin</Link>
            , tesamorelin has full Phase 3 clinical efficacy data: roughly 15–20% visceral fat reduction at 26 weeks. The N-terminal trans-3-hexenoic acid modification protects against DPP-IV degradation while preserving full GHRH activity. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">FDA-approved for reduction of visceral abdominal fat in HIV-associated lipodystrophy</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">~15–20% visceral fat reduction at 26 weeks (Phase 3 clinical data)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Preferentially targets visceral fat over subcutaneous fat</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates pulsatile GH release via GHRH receptor (preserves physiology)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in lipid profile and adiponectin</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Studied off-label for NAFLD with liver-fat reduction</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> FDA-approved dose: Egrifta SV 1.4 mg subcutaneously once daily, OR Egrifta WR 1.28 mg subcutaneously once daily (newer weekly-reconstitution formulation). The older Egrifta original dose was 2 mg/day. Research-grade tesamorelin is typically dosed at 1–2 mg/day subcutaneously.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Tesamorelin is the only FDA-approved GHRH analog. PP maintains a vetted list of peptide vendors with verified discount codes for research-grade material. See{" "}
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
        {["Growth Hormone", "GHRH Analog", "FDA-Approved", "Visceral Fat"].map((tag) => (
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
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#3A759F] hover:underline">CJC-1295</Link>
        <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Sermorelin</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#3A759F] hover:underline">MK-677</Link>
        <Link href="/peptides/igf-1-lr3" className="text-sm font-medium text-[#3A759F] hover:underline">IGF-1 LR3</Link>
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
    <ContactLink pageName="Tesamorelin" pagePath="/peptides/tesamorelin" />
    </div>
    </>
  );
}
