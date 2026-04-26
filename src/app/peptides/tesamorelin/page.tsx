import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/tesamorelin" },
  title: "Tesamorelin — Egrifta, FDA-Approved GHRH Analog, Mechanism, Dosage | Prof. Peptide",
  description:
    "Tesamorelin (Egrifta) research profile: FDA-approved for HIV lipodystrophy, GHRH receptor mechanism, Phase 3 visceral fat data, dosing protocol.",
};

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
    a: "Tesamorelin has the strongest evidence base — completed Phase 3 trials and FDA approval. CJC-1295 and sermorelin lack equivalent controlled efficacy data. Mechanistically all three activate the GHRH receptor; tesamorelin has higher receptor binding affinity and resistance to DPP-IV degradation than sermorelin, but shorter half-life than CJC-1295 with DAC. The choice depends on whether you want FDA-approved evidence (tesamorelin), longer dosing intervals (CJC-1295 with DAC), or the most natural sequence (sermorelin).",
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
        Egrifta WR and Egrifta SV are prescription medications distributed through specialty pharmacy channels in the US. Research-grade tesamorelin is sold by specialty peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GHRH Receptor Activation [1] — Tesamorelin binds and activates the GHRH receptor (GHRH-R) on pituitary somatotroph cells with similar potency to endogenous GHRH. This stimulates pulsatile GH synthesis and release through cAMP/PKA signaling.",
      "DPP-IV Resistance [2] — The N-terminal trans-3-hexenoic acid modification on Tyr1 protects tesamorelin from rapid breakdown by dipeptidyl peptidase IV (DPP-IV), the enzyme that quickly degrades native GHRH. This extends functional half-life to 26–38 minutes.",
      "Pulsatile GH Pattern [3] — Tesamorelin amplifies natural pulsatile GH secretion rather than producing continuous elevation. The hypothalamic-pituitary feedback loops remain intact, including somatostatin regulation.",
      "Visceral Fat Selectivity [4] — A key clinical advantage: tesamorelin-induced GH release preferentially reduces visceral adipose tissue (deep abdominal fat) over subcutaneous fat. The mechanism appears related to GH's enhanced lipolytic activity in VAT depots, which have higher GH receptor density.",
      "Hepatic IGF-1 Production — Sustained tesamorelin therapy increases hepatic IGF-1 production through downstream GH signaling. IGF-1 mediates many anabolic and lipolytic effects.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "HIV-Associated Lipodystrophy [4][5] — FDA-approved indication. Two large Phase 3 trials (LIPO-010, n=412; CTR-1011, n=404) showed roughly 15–20% reduction in visceral adipose tissue (CT-measured) at 26 weeks. Results extended to 52 weeks with sustained benefit. Published in NEJM and follow-up studies.",
      "Non-Alcoholic Fatty Liver Disease (NAFLD) [6] — A landmark 2019 Lancet HIV study (Stanley et al.) showed tesamorelin reduced liver fat fraction and slowed fibrosis progression in HIV-associated NAFLD. Off-label use for NAFLD in non-HIV populations is under investigation.",
      "Cognitive Function Research [7] — Baker et al. studied tesamorelin-related GHRH therapy in older adults with mild cognitive impairment, with improvements in cognitive function reported.",
      "Cardiovascular Risk Markers — Tesamorelin therapy improves multiple cardiovascular risk markers including triglycerides, total/HDL cholesterol ratio, and adiponectin. Long-term cardiovascular outcomes trials have not been completed.",
      "Pulsatile GH Preservation [3] — Multiple studies confirm tesamorelin preserves pulsatile GH dynamics rather than producing continuous GH elevation, which is mechanistically safer than direct GH administration.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Tesamorelin effects develop progressively. IGF-1 elevation appears within 1–2 weeks. Visceral fat reduction is measurable on CT scan by week 13 (per Phase 3 protocols). Maximum effect typically appears around week 26, with continued benefit through week 52. Most users notice subjective body composition changes (waist circumference, abdominal fullness) over 8–16 weeks of consistent dosing.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin is administered as a subcutaneous injection in the abdomen. The current FDA-approved formulations differ in dose and reconstitution requirements.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Egrifta WR (current FDA-approved formulation): 1.28 mg subcutaneously once daily, abdominal injection. 11.6 mg vials, weekly reconstitution.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Egrifta SV (prior FDA-approved formulation, still available): 1.4 mg subcutaneously once daily, abdominal injection. 2 mg vials, daily reconstitution.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Original Egrifta (discontinued): 2 mg subcutaneously once daily.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Research-grade dosing: typically 1–2 mg subcutaneously per day</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: FDA labeling supports continuous use; assess risk/benefit at 26 weeks if no VAT reduction observed</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Tesamorelin is dosed once daily and not titrated up — the dose is fixed across patients. Injection should always be in the abdomen (not thigh or upper arm), with site rotation across different abdominal areas. Avoid scar tissue, bruises, and the navel.
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
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injection site reactions</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Arthralgia (joint pain) — common with sustained GH elevation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Pain in extremities, peripheral edema, myalgia</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild glucose intolerance / elevated fasting glucose</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Carpal tunnel-like symptoms (numbness, tingling)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hypersensitivity reactions</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anti-tesamorelin IgG antibodies developed in 56–85% of patients in Phase 3 — did not eliminate efficacy but caused hypersensitivity reactions in some patients</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hyperglycemia / new-onset diabetes — monitor glucose during therapy</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of accelerated growth in pre-existing or active malignancy — discontinue if recurrent malignancy detected</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin has the strongest documented safety profile of any GHRH analog because of completed Phase 3 trials and ongoing FDA post-marketing surveillance. Long-term cardiovascular safety has not been established. Tesamorelin is contraindicated in pregnancy (causes fetal harm in animal models), in patients with disrupted hypothalamic-pituitary axis, in active malignancy, and in those with hypersensitivity to tesamorelin.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection in the ABDOMEN (not thigh or arm). FDA labeling specifies abdominal injection only.",
      "Time of day: No specific timing required; consistency matters more than timing",
      "With or without food: Either is fine for tesamorelin (unlike sermorelin/CJC-1295, food sensitivity is less critical because tesamorelin produces a longer GH pulse)",
      "Site rotation: Rotate to different abdominal areas. Avoid scar tissue, bruises, the navel.",
      "Reconstitution (Egrifta WR): Single 11.6 mg vial reconstituted with provided diluent (Bacteriostatic Water for Injection); supplies 7 daily doses",
      "Reconstitution (Egrifta SV): 2 mg vial + 2.1 mL provided diluent (Sterile Water for Injection); single dose",
      "Missed dose: Skip and resume next day. Do not double-dose.",
      "Cycle: Continuous use is FDA-supported; assess risk/benefit at 26 weeks if VAT not reduced",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Standalone use is the FDA-approved approach. Stacking is off-label.",
      "Ipamorelin — sometimes combined off-label for amplified GH release (dual-pathway: GHRH receptor + ghrelin receptor). No controlled human data on this combination.",
      "BPC-157 / TB-500 — paired off-label for recovery support.",
      "Resistance training — natural pairing for body composition research.",
      "Avoid stacking with CJC-1295 or sermorelin — redundant GHRH receptor mechanism, no benefit.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Corticosteroids — blunt GH release; may reduce tesamorelin efficacy",
      "Insulin and oral diabetes medications — tesamorelin can cause hyperglycemia; dose adjustment may be needed",
      "Simvastatin — coadministration showed no significant pharmacokinetic interaction",
      "Other GHRH analogs (CJC-1295, sermorelin) — redundant mechanism, do not combine",
      "Direct HGH — generally unnecessary; tesamorelin stimulates endogenous GH",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Egrifta WR (powder vials): Store at 2–8°C in original carton until use",
      "Egrifta SV (powder vials): Store at 2–8°C in original carton until use",
      "Reconstituted Egrifta WR: Store at 2–8°C; use within 7 days",
      "Reconstituted Egrifta SV: Use within 1 hour of reconstitution",
      "Research-grade tesamorelin: Lyophilized powder at -20°C long-term, 2–8°C short-term; reconstituted at 2–8°C, use within 14–28 days",
      "Never freeze reconstituted solution. Protect from light. Discard if cloudy.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin (brand names Egrifta, Egrifta SV, Egrifta WR) is FDA-approved for reduction of excess abdominal fat in HIV-infected patients with lipodystrophy. ALL OTHER USES ARE OFF-LABEL. The drug is not indicated for general weight loss management — it has weight-neutral effect (visceral fat reduction without total weight loss).
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term cardiovascular safety has not been established. The FDA labeling specifically notes that long-term cardiovascular outcomes data is absent and patients should have risk/benefit reassessed if visceral fat is not reduced by 26 weeks.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin is contraindicated in pregnancy (causes fetal harm — hydrocephaly in rat offspring at 2–4x clinical dose). It is also contraindicated in patients with disrupted hypothalamic-pituitary axis and active malignancy.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The European Medicines Agency initially authorized tesamorelin in 2014 but the marketing authorization was subsequently withdrawn by the sponsor.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits tesamorelin in sport under Section S2 (peptide hormones).
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
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin (Egrifta WR) FDA Prescribing Information. 2025.{" "}
          <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Theratechnologies. EGRIFTA WR (tesamorelin) F8 formulation FDA approval announcement. March 25, 2025.{" "}
          <a href="https://www.theratech.com/news-releases/news-release-details/theratechnologies-receives-fda-approval-egrifta-wrtm-tesamorelin/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.theratech.com/news-releases/news-release-details/theratechnologies-receives-fda-approval-egrifta-wrtm-tesamorelin/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Falutz J, Allas S, Blot K, et al. Metabolic effects of a growth hormone-releasing factor in patients with HIV. N Engl J Med. 2007;357(23):2359-70.{" "}
          <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa072375" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nejm.org/doi/full/10.1056/NEJMoa072375
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Falutz J, Mamputu JC, Potvin D, et al. Effects of tesamorelin (TH9507), a growth hormone-releasing factor analog, in HIV-infected patients with excess abdominal fat: a pooled analysis of two multicenter, double-blind placebo-controlled phase 3 trials with safety extension data. J Clin Endocrinol Metab. 2010;95(9):4291-304.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20554713/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20554713/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Stanley TL, Fourman LT, Feldpausch MN, et al. Effects of tesamorelin on non-alcoholic fatty liver disease in HIV: a randomised, double-blind, multicentre trial. Lancet HIV. 2019;6(12):e821-e830.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31611038/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31611038/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Baker LD, Barsness SM, Borson S, et al. Effects of growth hormone-releasing hormone on cognitive function in adults with mild cognitive impairment and healthy older adults. Arch Neurol. 2012;69(11):1420-9.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22869065/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22869065/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function TesamorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Tesamorelin","description":"Tesamorelin (Egrifta) research profile: FDA-approved for HIV lipodystrophy, GHRH receptor mechanism, Phase 3 visceral fat data, dosing protocol.","url":"https://profpeptide.com/peptides/tesamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Tesamorelin"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tesamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">FDA-Approved</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Egrifta, Egrifta SV, Egrifta WR, TH9507
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Tesamorelin (brand names Egrifta, Egrifta SV, Egrifta WR) is a synthetic 44-amino-acid analog of human growth hormone-releasing hormone (GHRH) developed by Theratechnologies. It is the only GHRH analog with current FDA approval — approved in November 2010 for reduction of excess abdominal fat (visceral adipose tissue) in HIV-infected adults with lipodystrophy. Unlike CJC-1295 or sermorelin, tesamorelin has full Phase 3 clinical efficacy data: roughly 15–20% visceral fat reduction at 26 weeks. The N-terminal trans-3-hexenoic acid modification protects against DPP-IV degradation while preserving full GHRH activity.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">FDA-approved for reduction of visceral abdominal fat in HIV-associated lipodystrophy</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">~15–20% visceral fat reduction at 26 weeks (Phase 3 clinical data)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Preferentially targets visceral fat over subcutaneous fat</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates pulsatile GH release via GHRH receptor (preserves physiology)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in lipid profile and adiponectin</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Studied off-label for NAFLD with liver-fat reduction</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> FDA-approved dose: Egrifta SV 1.4 mg subcutaneously once daily, OR Egrifta WR 1.28 mg subcutaneously once daily (newer weekly-reconstitution formulation). The older Egrifta original dose was 2 mg/day. Research-grade tesamorelin is typically dosed at 1–2 mg/day subcutaneously. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Tesamorelin is the only FDA-approved GHRH analog. The branded product (Egrifta WR / Egrifta SV) is available through specialty pharmacies with prescription. Research-grade tesamorelin is also sold by specialty peptide vendors. See{" "}
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
            {s.node && s.node}
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
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
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=growth+hormone+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm text-center"
          >
            Search Related Supplements on Amazon &rarr;
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
    </>
  );
}
