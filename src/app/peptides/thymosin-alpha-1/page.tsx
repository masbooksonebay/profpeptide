import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/thymosin-alpha-1",
  title: "Thymosin Alpha-1 — Immune Modulator, Zadaxin, Dosage | Prof. Peptide",
  description:
    "Thymosin Alpha-1 (Zadaxin) research profile: T-cell maturation mechanism, hepatitis approval, dosing protocol, side effects, FAQ, and immune modulation.",
});

const faqs = [
  {
    q: "Is Thymosin Alpha-1 FDA-approved?",
    a: "Not in the United States. Thymosin Alpha-1 (thymalfasin) IS approved as a prescription drug under the brand name Zadaxin in over 35 countries — including Italy, China, Mexico, and others — primarily for chronic hepatitis B and C. The decades of approved international clinical use give Thymosin Alpha-1 one of the strongest evidence bases of any peptide on Prof. Peptide. In the US, it's sold as a research-grade peptide.",
  },
  {
    q: "How is Thymosin Alpha-1 different from TB-500 / Thymosin Beta-4?",
    a: (
      <>
        Different molecules with different mechanisms despite the related name. Thymosin Alpha-1 is a 28-amino-acid peptide that promotes T-cell maturation and activates innate immunity through TLR2/TLR9.{" "}
        <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">Thymosin Beta-4 (TB-500)</Link>{" "}
        is a 43-amino-acid actin-binding peptide that drives cellular migration and tissue repair. They share a name but address completely different biological problems &mdash; Thymosin Alpha-1 for immune support, TB-500 for tissue repair.
      </>
    ),
  },
  {
    q: "What is Zadaxin?",
    a: "Zadaxin is the international brand name for synthetic Thymosin Alpha-1 (thymalfasin). It is approved in 35+ countries primarily for chronic hepatitis B and hepatitis C, often as adjunct therapy with interferon. Zadaxin is also used as immune support during cancer chemotherapy. Standard dosing is 1.6 mg subcutaneously twice weekly.",
  },
  {
    q: "Can Thymosin Alpha-1 help with autoimmune conditions?",
    a: "Theoretically, yes — through immune modulation rather than immunosuppression. Thymosin Alpha-1 promotes Th1/Th2 balance and can shift autoimmune Th2-dominant patterns. However, this mechanism is double-edged in some autoimmune contexts. Patients on active immunosuppressant therapy should consult their physician — combining with cyclosporine, tacrolimus, or methotrexate has theoretical antagonism (the immunosuppressant suppresses while Thymosin Alpha-1 promotes immune function).",
  },
  {
    q: "Is it safe to use during chemotherapy?",
    a: "Yes — this is one of the most established uses of Thymosin Alpha-1 internationally. Standard adjunct protocols use 1.6 mg subcutaneously daily 5-on/2-off during chemotherapy cycles to maintain immune function. Multiple studies in melanoma, hepatocellular carcinoma, and lung cancer settings show reduced chemotherapy-related immunosuppression without compromising chemo efficacy.",
  },
  {
    q: "Does Thymosin Alpha-1 help with chronic viral infections?",
    a: "The strongest evidence base is for hepatitis B and C, where it improves sustained virological response when combined with interferon. Multiple Phase 3 trials support this use. Other chronic viral applications (cytomegalovirus, herpes zoster, chronic EBV, post-COVID immune dysfunction) are less formally validated but reported in research and clinical practice.",
  },
  {
    q: "How long until I see immune benefits?",
    a: "T-cell function changes are measurable in 2–4 weeks. Hepatitis B/C antiviral response is assessed over a 6–12 month protocol. Cancer adjunct effects are protocol-dependent. General immune support typically shows benefit after 4–8 week cycles.",
  },
  {
    q: "Where can I buy Thymosin Alpha-1?",
    a: (
      <>
        Outside the US, Zadaxin is available by prescription in 35+ countries. In the US, Thymosin Alpha-1 is sold as a research-grade peptide by specialty vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Thymosin Alpha 1: A Comprehensive Review of the Literature",
    authors: "Dominari A, Hathaway III D, et al.",
    journal: "World Journal of Virology / PMC",
    year: "2020",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7747025/",
    summary: "The most comprehensive English-language review of Thymosin Alpha-1, covering its biology, mechanisms, and clinical applications across multiple disease states. The review documents FDA orphan drug approval for thymalfasin for malignant melanoma, chronic active hepatitis B, DiGeorge anomaly with immune defects, and hepatocellular carcinoma.",
  },
  {
    title: "Thymosin Alpha-1 and Its Role in Viral Infectious Diseases — Mechanism and Clinical Application",
    authors: "Tao N, Xu X, Ying Y, et al.",
    journal: "Molecules (MDPI)",
    year: "2023",
    access: "Open Access",
    url: "https://www.mdpi.com/1420-3049/28/8/3539",
    summary: "A mechanistic deep-dive into how Thymosin Alpha-1 enhances immune responses against viral infections. The paper documents Tα1's interaction with Toll-like receptors (TLR3, TLR4, TLR7, TLR9) — activating downstream IRF3 and NF-κB pathways, promoting proliferation and activation of T cells, B cells, macrophages, and natural killer cells.",
  },
  {
    title: "Thymosin Alpha-1 in Cancer Therapy — Immunoregulation and Potential Applications",
    authors: "Wei Y, Zhang Y, Li P, et al.",
    journal: "International Immunopharmacology / ScienceDirect",
    year: "2023",
    access: "Paywalled",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S156757692300067X",
    summary: "A 2023 review documenting Tα1's emerging role in cancer immunotherapy — particularly its potential synergy with immune checkpoint inhibitors (ICIs). Preclinical evidence that Tα1 can convert 'cold tumors' into 'hot tumors' by reversing macrophage polarization, which could meaningfully enhance the efficacy of checkpoint inhibitors.",
  },
  {
    title: "Thymosin Alpha-1 — Reimagine Its Broader Applications in the Immuno-Oncology Era",
    authors: "Mao L",
    journal: "International Immunopharmacology / PubMed",
    year: "2023",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/36871535/",
    summary: "A clinical review documenting Tα1's emerging role in modern oncology. The paper documents that Tα1 significantly improved overall survival in surgically resectable non-small cell lung cancer and liver cancer patients. For locally advanced unresectable NSCLC, it significantly reduced chemoradiation-induced lymphopenia and pneumonia.",
  },
  {
    title: "Aging and Thymosin Alpha-1 — Immunosenescence and Therapeutic Potential",
    authors: "Simonova MA, Ivanov I, et al.",
    journal: "International Journal of Molecular Sciences (MDPI)",
    year: "2025",
    access: "Open Access",
    url: "https://www.mdpi.com/1422-0067/26/23/11470",
    summary: "A 2025 review examining Tα1's potential role in combating age-related immune decline (immunosenescence). Clinical studies show Tα1 can improve vaccine responses in elderly populations and mitigate immunosenescence markers. The review also covers a promising fusion protein (Refnot) combining Tα1 with TNFα that shows enhanced antitumor activity with reduced toxicity.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Thymosin Alpha-1 work?",
    intro:
      "Thymosin Alpha-1 promotes T-cell maturation in the thymus and activates innate immunity through Toll-like receptor binding (TLR2, TLR9). It modulates Th1/Th2 balance (favoring cellular anti-viral immunity), enhances natural killer cell cytotoxicity, and does all this WITHOUT generalized immunosuppression — it modulates rather than suppresses, which is what makes it useful in immunocompromised states without infection risk.",
    body: [
      "T-Cell Maturation [1]. Thymosin Alpha-1 promotes maturation of pre-T cells in the thymus into functional CD4+ and CD8+ T-cells. Critical for adaptive immune response, particularly in immunocompromised states.",
      "Toll-Like Receptor Activation [2]. Activates TLR2 and TLR9 on dendritic cells, enhancing innate immune response and bridging to adaptive immunity. This is part of the mechanism behind antifungal Th1 resistance.",
      "Th1/Th2 Balance Modulation [3]. Promotes Th1 responses (cellular immunity, anti-viral) while modulating Th2 (humoral immunity, allergic). Useful for chronic viral infections where Th1 response is impaired.",
      "Natural Killer Cell Function. Enhances NK cell cytotoxic activity. Important for early viral control and cancer surveillance.",
      "Without Generalized Immunosuppression [4]. Unlike traditional immunosuppressants, Thymosin Alpha-1 modulates rather than suppresses immune function. This balanced effect allows use in autoimmune contexts without infection risk.",
    ],
  },
  {
    id: "research",
    title: "What is Thymosin Alpha-1 used for?",
    intro:
      "Thymosin Alpha-1's research evidence base is the strongest of any peptide on Prof. Peptide — 35+ countries' worth of clinical approval and post-marketing surveillance. Established applications include chronic hepatitis B/C (Phase 3 evidence), cancer adjunctive therapy (multiple cancer types), sepsis (mortality reduction), and chronic viral infections. Post-COVID immune dysfunction is a recent growing research interest.",
    body: [
      "Hepatitis B & C [5]. Multiple Phase 3 trials show improved sustained virological response when combined with interferon. Zadaxin approved in many countries specifically for chronic hepatitis B and C.",
      "Cancer Adjunctive Therapy. Used in melanoma, hepatocellular carcinoma, and lung cancer settings to support immune function during chemotherapy. Reduced chemotherapy-related immunosuppression without compromising chemo efficacy.",
      "Sepsis [6]. Multicenter trials in severe sepsis showed reduced 28-day mortality. Mechanism: enhanced T-cell function in immunocompromised septic patients.",
      "Chronic Viral Infections. Cytomegalovirus, herpes zoster, chronic EBV. Benefits in immunocompromised populations. Less formally studied than hepatitis applications.",
      "Post-COVID Immune Dysfunction. Recent research interest in long COVID and persistent post-infection immune dysregulation. Limited but growing evidence base.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Thymosin Alpha-1 take to work?",
    intro:
      "Thymosin Alpha-1 effects develop progressively. T-cell function changes are measurable in 2–4 weeks. Hepatitis B/C antiviral response is assessed over a 6–12 month protocol. Cancer adjunct effects are protocol-dependent. General immune support typically shows benefit after 4–8 week cycles. The gradual immune modulation profile (rather than acute effect) is consistent with the peptide's role in T-cell development.",
    content:
      "T-cell function changes are measurable in 2–4 weeks of consistent dosing. Hepatitis B/C antiviral response is assessed over the 6–12 month protocol that drives approved international use. Cancer adjunct effects are protocol-dependent — most benefit appears during chemotherapy cycles to maintain immune function rather than as direct anti-tumor effect. General immune support typically shows benefit after 4–8 week cycles. The gradual immune-modulation profile (rather than acute effect) is consistent with the peptide's role in T-cell development — restoration of immune cell populations takes weeks rather than hours.",
  },
  {
    id: "dosing",
    title: "How is Thymosin Alpha-1 dosed?",
    intro:
      "Thymosin Alpha-1 is administered as a subcutaneous injection. Approved Zadaxin protocols in international clinical use give a clear dosing reference: 1.6 mg twice weekly for hepatitis B/C (6-month protocol), or 1.6 mg daily 5-on/2-off for cancer adjunct. Research peptide protocols sometimes use lower doses (250–750 mcg daily) for general immune support.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hepatitis B/C (Zadaxin standard).</span> 1.6 mg subcutaneously twice weekly for 6 months.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cancer adjunctive.</span> 1.6 mg subcutaneously daily 5-on/2-off for 4–8 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Research peptide (general immune support).</span> 250–750 mcg daily, 4–8 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Immunocompromised support.</span> 1.6 mg twice weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Typically 1.6 mg vials supplied as Zadaxin, or 5–10 mg vials for research-grade material.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          For research-grade material, reconstitution with bacteriostatic water is standard. The 1.6 mg twice-weekly Zadaxin protocol is the most clinically validated dosing regimen.
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
    title: "How is Thymosin Alpha-1 administered?",
    intro: (
      <>
        Thymosin Alpha-1 is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; using a small insulin syringe. The Zadaxin standard protocol is 1.6 mg twice weekly; cancer adjunct uses 1.6 mg daily 5-on/2-off. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any consistent time. Daily consistency matters more than time of day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine; no fasting requirement.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Alternate abdomen, thigh, upper arm to reduce localized irritation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume next scheduled dose. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution handling.</span> Bacteriostatic water (or sterile water for clinical Zadaxin use), swirl gently &mdash; do not shake.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> Hepatitis: 6 months. Cancer adjunct: 4–8 weeks. General immune: 4–12 weeks.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Thymosin Alpha-1&apos;s effects on T-cell maturation accumulate over weeks rather than via acute pharmacology. The Zadaxin 1.6 mg twice-weekly schedule was clinically optimized for hepatitis B/C &mdash; it represents the most-validated dosing regimen in this peptide class. Cancer adjunct protocols use daily 5-on/2-off scheduling to align with chemotherapy cycles. Research-grade lower-dose protocols (250–750 mcg daily) are extrapolated from preclinical work, not from Phase 3 evidence.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Twice weekly (Zadaxin hepatitis); daily 5-on/2-off (cancer adjunct); daily (research immune support)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any consistent time</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~2 hours plasma; biological effects on T-cell maturation persist far longer</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Immune effects accumulate over weeks; T-cell population changes measurable in 2–4 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. Zadaxin clinical vials are 1.6 mg; research-grade vials are typically 10 mg. Because dose range spans 250 mcg (research) up to 1.6 mg (Zadaxin), 2 mL reconstitution gives clean unit math. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 10 mg research-grade vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">750 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1.6 mg (Zadaxin)</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">3 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">16 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">32 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">23 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">48 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">90 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 10 mg vial, each unit drawn delivers 100 mcg of Thymosin Alpha-1 at 1 mL reconstitution, 50 mcg at 2 mL, and 33 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Thymosin Alpha-1 stack well with?",
    intro:
      "Thymosin Alpha-1's most-validated pairing is with interferon for hepatitis B/C — the synergy is evidence-based and clinically approved. It pairs with BPC-157 for combined immune + tissue repair, and with KPV for combined immune modulation + anti-inflammatory effects. The most important non-pairing is active immunosuppressant therapy (cyclosporine, tacrolimus, mycophenolate) — theoretical antagonism since Thymosin Alpha-1 promotes immune function.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Interferon (clinical hepatitis protocols).</span> Synergistic, evidence-based combination &mdash; the basis of the Zadaxin hepatitis B/C approved indication.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157.</span>{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          for combined immune + tissue repair applications.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">KPV.</span>{" "}
          <Link href="/peptides/kpv" className="text-[#0891b2] hover:underline">KPV</Link>{" "}
          for combined immune modulation + anti-inflammatory effects (gut-immune axis protocols).
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">NAD+.</span>{" "}
          <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>{" "}
          sometimes paired in immune optimization protocols (limited evidence).
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: combination with active immunosuppressant therapy.</span> Theoretical antagonism &mdash; Thymosin Alpha-1 promotes immune function while immunosuppressants suppress it.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Thymosin Alpha-1?",
    intro:
      "Thymosin Alpha-1 has the cleanest safety profile of any peptide on Prof. Peptide due to decades of clinical use under regulated conditions in 35+ countries. The international post-marketing surveillance is more substantial than for almost any other research peptide. The most-reported user effects are mild injection-site reactions and transient mild fever after first few doses. No major adverse events documented in 35+ years of clinical use.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection site reactions.</span> Most common, typically mild and self-limiting.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient injection site soreness.</span> Resolves within hours.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fever after first few doses.</span> Self-limiting; reflects immune activation.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No major adverse events documented in 35+ years of clinical use.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Excellent safety profile in cancer chemotherapy adjunct settings.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical antagonism with active immunosuppressant therapy.</span></li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Thymosin Alpha-1 has the cleanest safety profile of any peptide on Prof. Peptide due to decades of clinical use under regulated conditions in 35+ countries. The international post-marketing surveillance is more substantial than for almost any other research peptide.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Thymosin Alpha-1 interact with other drugs?",
    intro:
      "Thymosin Alpha-1's relevant interactions: synergistic with interferon (evidence-based, basis of approved hepatitis indication), generally compatible with chemotherapy agents (used adjunctively in approved international protocols), theoretical antagonism with immunosuppressants (cyclosporine, tacrolimus, mycophenolate). No major drug-drug interactions documented in clinical use across 35+ years.",
    body: [
      "Interferon. Synergistic, evidence-based for hepatitis B/C.",
      "Chemotherapy agents. Generally compatible (used adjunctively in approved international protocols).",
      "Immunosuppressants (cyclosporine, tacrolimus, mycophenolate). Theoretical antagonism. Monitor closely.",
      "Vaccines. Limited data on combination timing; may enhance vaccine response (research interest in elderly populations).",
      "No major drug-drug interactions documented in clinical use.",
    ],
  },
  {
    id: "storage",
    title: "How should Thymosin Alpha-1 be stored?",
    body: [
      "Lyophilized: 2–8°C long-term.",
      "Reconstituted: 2–8°C, use within 14 days.",
      "Do NOT freeze reconstituted solution.",
      "Light-sensitive; store in original packaging.",
      "Reconstitute with bacteriostatic water for injection. Swirl gently — do not shake.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Thymosin Alpha-1 research?",
    intro:
      "Thymosin Alpha-1 (thymalfasin) is approved as a prescription drug under the brand name Zadaxin in over 35 countries but is NOT FDA-approved in the United States. The decades of approved international clinical use give Thymosin Alpha-1 one of the strongest evidence bases of any peptide on Prof. Peptide. In the US, research-grade material is sold by specialty peptide vendors. NOT on the WADA prohibited list. Commonly confused with Thymosin Beta-4 (TB-500) — different molecules.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Thymosin Alpha-1 (thymalfasin) is approved as a prescription drug under the brand name Zadaxin in over 35 countries including Italy, China, Mexico, and others &mdash; but is NOT FDA-approved in the United States. The decades of approved international clinical use give Thymosin Alpha-1 one of the strongest evidence bases of any peptide on Prof. Peptide.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold by specialty peptide vendors in the US. Quality varies; verify Certificate of Analysis.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Thymosin Alpha-1 is NOT currently on the WADA prohibited list.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The peptide is also distinct from{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">Thymosin Beta-4 (TB-500)</Link>
          , which has different mechanisms and applications despite the related name. Patients commonly confuse the two.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Thymosin Alpha-1",
    intro:
      "Outside the US, Zadaxin is available by prescription in 35+ countries. In the US, Thymosin Alpha-1 is sold as a research-grade peptide by specialty vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes — including an oral-format option for users who prefer to avoid injection.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "integrative-peptides", note: "Oral format — no injection needed" },
            { slug: "ascension-peptides" },
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
    title: "Thymosin Alpha-1 FAQ",
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
          Goldstein AL. From lab to bedside: emerging clinical applications of thymosin alpha 1. Expert Opin Biol Ther. 2009;9(5):593-608.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Romani L, Bistoni F, Gaziano R, et al. Thymosin alpha 1 activates dendritic cells for antifungal Th1 resistance through toll-like receptor signaling. Blood. 2004;103(11):4232-9.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Garaci E, Pica F, Sinibaldi-Vallebona P, et al. Thymosin alpha 1 in combination with cytokines and chemotherapy for the treatment of cancer. Int Immunopharmacol. 2003;3(8):1145-50.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          King R, Tuthill C. Immune modulation with thymosin alpha 1 treatment. Vitam Horm. 2016;102:151-78.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Rasi G, Mutchnick MG, Di Virgilio D, et al. Combination low-dose lymphoblastoid interferon and thymosin alpha 1 therapy in chronic hepatitis C. J Viral Hepat. 1996;3(4):191-6.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wu J, Zhou L, Liu J, et al. The efficacy of thymosin alpha 1 for severe sepsis (ETASS): a multicentre, single-blind, randomized and controlled trial. Crit Care. 2013;17(1):R8.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23327199/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23327199/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Thymalfasin.{" "}
          <a href="https://en.wikipedia.org/wiki/Thymalfasin" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Thymalfasin
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

export default function ThymosinAlpha1Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Thymosin Alpha-1","description":"Thymosin Alpha-1 (Zadaxin) research profile: T-cell maturation mechanism, hepatitis approval, dosing protocol, side effects, FAQ, and immune modulation.","url":"https://profpeptide.com/peptides/thymosin-alpha-1","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Thymosin Alpha-1"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Thymosin Alpha-1</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
        <span className="tag">Approved Internationally</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 24, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> TA-1, Tα1, Thymalfasin, Zadaxin (brand name)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> 28-Amino-Acid Synthetic Peptide &mdash; Thymic Immune Modulator / T-Cell Maturation Factor
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Approved in 35+ countries as Zadaxin (hepatitis B/C). NOT FDA-approved in US (sold as research-grade). Not on WADA prohibited list.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Thymosin Alpha-1?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Thymosin Alpha-1 is a 28-amino-acid peptide naturally produced by the thymus gland, where it plays a critical role in T-cell maturation and immune system development. Synthetic Thymosin Alpha-1 (thymalfasin, brand name Zadaxin) is approved as a prescription drug in over 35 countries for treating chronic hepatitis B and hepatitis C, often as an adjunct to interferon therapy. It is also used as an immune-supportive treatment in cancer patients undergoing chemotherapy. While NOT FDA-approved in the United States, Thymosin Alpha-1 has decades of clinical use abroad and one of the strongest evidence bases of any peptide on Prof. Peptide. Distinct from{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">Thymosin Beta-4 (TB-500)</Link>{" "}
            despite the shared name. Often paired with{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
            or{" "}
            <Link href="/peptides/kpv" className="text-[#0891b2] hover:underline">KPV</Link>{" "}
            for combined immune + tissue / anti-inflammatory protocols. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced T-cell maturation and function</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved immune response to chronic viral infections (Hepatitis B/C, CMV)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Adjunctive support during cancer chemotherapy</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modulation of autoimmune conditions (without immunosuppression)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Restoration of immune function in immunocompromised states</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Approved internationally for clinical use (35+ countries)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Subcutaneous injection: 1.6 mg twice weekly (standard Zadaxin protocol for hepatitis), or 1.6 mg daily for 5 days followed by 2 days off (cancer adjunct protocol). Research peptide protocols often use 250–750 mcg daily. Cycle length: 4–12 weeks.
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
        {["Gut Health & Immunity", "Immune Modulator", "Approved Internationally", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#0891b2] hover:underline">KPV</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">TB-500</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/nad-plus" className="text-sm font-medium text-[#0891b2] hover:underline">NAD+</Link>
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
    <ContactLink pageName="Thymosin Alpha-1" pagePath="/peptides/thymosin-alpha-1" />
    </div>
    </>
  );
}
