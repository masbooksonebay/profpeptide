import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/thymosin-alpha-1" },
  title: "Thymosin Alpha-1 — Immune Modulator, Zadaxin | Prof. Peptide",
  description:
    "Thymosin Alpha-1 (Zadaxin) research profile: T-cell maturation mechanism, hepatitis approval, dosing protocol, side effects, and immune modulation.",
};

const faqs = [
  {
    q: "Is Thymosin Alpha-1 FDA-approved?",
    a: "Not in the United States. Thymosin Alpha-1 (thymalfasin) IS approved as a prescription drug under the brand name Zadaxin in over 35 countries — including Italy, China, Mexico, and others — primarily for chronic hepatitis B and C. The decades of approved international clinical use give Thymosin Alpha-1 one of the strongest evidence bases of any peptide on Prof. Peptide. In the US, it's sold as a research-grade peptide.",
  },
  {
    q: "How is Thymosin Alpha-1 different from TB-500 / Thymosin Beta-4?",
    a: "Different molecules with different mechanisms despite the related name. Thymosin Alpha-1 is a 28-amino-acid peptide that promotes T-cell maturation and activates innate immunity through TLR2/TLR9. Thymosin Beta-4 (TB-500) is a 43-amino-acid actin-binding peptide that drives cellular migration and tissue repair. They share a name but address completely different biological problems — Thymosin Alpha-1 for immune support, TB-500 for tissue repair.",
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
        Outside the US, Zadaxin is available by prescription in 35+ countries. In the US, Thymosin Alpha-1 is sold as a research-grade peptide by specialty vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "T-Cell Maturation [1] — Thymosin Alpha-1 promotes maturation of pre-T cells in the thymus into functional CD4+ and CD8+ T-cells. Critical for adaptive immune response, particularly in immunocompromised states.",
      "Toll-Like Receptor Activation [2] — Activates TLR2 and TLR9 on dendritic cells, enhancing innate immune response and bridging to adaptive immunity. This is part of the mechanism behind antifungal Th1 resistance.",
      "Th1/Th2 Balance Modulation [3] — Promotes Th1 responses (cellular immunity, anti-viral) while modulating Th2 (humoral immunity, allergic). Useful for chronic viral infections where Th1 response is impaired.",
      "Natural Killer Cell Function — Enhances NK cell cytotoxic activity. Important for early viral control and cancer surveillance.",
      "Without Generalized Immunosuppression [4] — Unlike traditional immunosuppressants, Thymosin Alpha-1 modulates rather than suppresses immune function. This balanced effect allows use in autoimmune contexts without infection risk.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Hepatitis B & C [5] — Multiple Phase 3 trials show improved sustained virological response when combined with interferon. Zadaxin approved in many countries specifically for chronic hepatitis B and C.",
      "Cancer Adjunctive Therapy — Used in melanoma, hepatocellular carcinoma, and lung cancer settings to support immune function during chemotherapy. Reduced chemotherapy-related immunosuppression without compromising chemo efficacy.",
      "Sepsis [6] — Multicenter trials in severe sepsis showed reduced 28-day mortality. Mechanism: enhanced T-cell function in immunocompromised septic patients.",
      "Chronic Viral Infections — Cytomegalovirus, herpes zoster, chronic EBV. Benefits in immunocompromised populations. Less formally studied than hepatitis applications.",
      "Post-COVID Immune Dysfunction — Recent research interest in long COVID and persistent post-infection immune dysregulation. Limited but growing evidence base.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Thymosin Alpha-1 effects develop progressively. T-cell function changes are measurable in 2–4 weeks. Hepatitis B/C antiviral response: 6–12 month protocol. Cancer adjunct: protocol-dependent. General immune support: 4–8 week cycles. The gradual immune modulation profile (rather than acute effect) is consistent with the peptide's role in T-cell development.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Thymosin Alpha-1 is administered as a subcutaneous injection. Approved Zadaxin protocols in international clinical use give a clear dosing reference; research peptide protocols sometimes use lower doses.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hepatitis B/C (Zadaxin standard): 1.6 mg subcutaneously twice weekly for 6 months.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cancer adjunctive: 1.6 mg subcutaneously daily 5-on/2-off for 4–8 weeks.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Research peptide protocol (general immune support): 250–750 mcg daily, 4–8 weeks.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Immunocompromised support: 1.6 mg twice weekly.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reconstitution: typically 1.6 mg vials supplied as Zadaxin or 5–10 mg vials for research-grade.</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          For research-grade material, reconstitution with bacteriostatic water is standard. The 1.6 mg twice-weekly Zadaxin protocol is the most clinically validated dosing regimen.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild injection site reactions</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Transient injection site soreness</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fever after first few doses</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No major adverse events documented in 35+ years of clinical use</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Excellent safety profile in cancer chemotherapy adjunct settings</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical antagonism with active immunosuppressant therapy</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Thymosin Alpha-1 has the cleanest safety profile of any peptide on Prof. Peptide due to decades of clinical use under regulated conditions in 35+ countries. The international post-marketing surveillance is more substantial than for almost any other research peptide.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Subcutaneous injection. Standard insulin syringe.",
      "Site rotation: alternate abdomen, thigh, upper arm.",
      "Time of day: any, but consistency recommended within a protocol.",
      "With or without food: no requirement.",
      "Reconstitution: bacteriostatic water (or sterile water for clinical use), swirl gently.",
      "Storage of reconstituted: 2–8°C, use within 14 days.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Interferon (clinical hepatitis protocols) — synergistic, evidence-based combination.",
      "BPC-157 — for combined immune + tissue repair applications.",
      "KPV — for combined immune modulation + anti-inflammatory effects.",
      "NAD+ — sometimes paired in immune optimization protocols (limited evidence).",
      "Avoid: combination with active immunosuppressant therapy (theoretical antagonism — Thymosin Alpha-1 promotes immune function).",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Interferon — synergistic, evidence-based for hepatitis B/C.",
      "Chemotherapy agents — generally compatible (used adjunctively in approved international protocols).",
      "Immunosuppressants (cyclosporine, tacrolimus, mycophenolate) — theoretical antagonism. Monitor closely.",
      "Vaccines — limited data on combination timing.",
      "No major drug-drug interactions documented in clinical use.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
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
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Thymosin Alpha-1 (thymalfasin) is approved as a prescription drug under the brand name Zadaxin in over 35 countries including Italy, China, Mexico, and others — but is NOT FDA-approved in the United States. The decades of approved international clinical use give Thymosin Alpha-1 one of the strongest evidence bases of any peptide on Prof. Peptide.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold by specialty peptide vendors in the US. Quality varies; verify Certificate of Analysis.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Thymosin Alpha-1 is NOT currently on the WADA prohibited list.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The peptide is also distinct from Thymosin Beta-4 (TB-500), which has different mechanisms and applications despite the related name. Patients commonly confuse the two.
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
          Goldstein AL. From lab to bedside: emerging clinical applications of thymosin alpha 1. Expert Opin Biol Ther. 2009;9(5):593-608.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Romani L, Bistoni F, Gaziano R, et al. Thymosin alpha 1 activates dendritic cells for antifungal Th1 resistance through toll-like receptor signaling. Blood. 2004;103(11):4232-9.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Garaci E, Pica F, Sinibaldi-Vallebona P, et al. Thymosin alpha 1 in combination with cytokines and chemotherapy for the treatment of cancer. Int Immunopharmacol. 2003;3(8):1145-50.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          King R, Tuthill C. Immune modulation with thymosin alpha 1 treatment. Vitam Horm. 2016;102:151-78.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Rasi G, Mutchnick MG, Di Virgilio D, et al. Combination low-dose lymphoblastoid interferon and thymosin alpha 1 therapy in chronic hepatitis C. J Viral Hepat. 1996;3(4):191-6.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wu J, Zhou L, Liu J, et al. The efficacy of thymosin alpha 1 for severe sepsis (ETASS): a multicentre, single-blind, randomized and controlled trial. Crit Care. 2013;17(1):R8.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4029277/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4029277/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Thymalfasin.{" "}
          <a href="https://en.wikipedia.org/wiki/Thymalfasin" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Thymalfasin
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function ThymosinAlpha1Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Thymosin Alpha-1","description":"Thymosin Alpha-1 (Zadaxin) research profile: T-cell maturation mechanism, hepatitis approval, dosing protocol, side effects, and immune modulation.","url":"https://profpeptide.com/peptides/thymosin-alpha-1","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: TA-1, Tα1, Thymalfasin, Zadaxin (brand name)
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Thymosin Alpha-1 is a 28-amino-acid peptide naturally produced by the thymus gland, where it plays a critical role in T-cell maturation and immune system development. Synthetic Thymosin Alpha-1 (thymalfasin, brand name Zadaxin) is approved as a prescription drug in over 35 countries for treating chronic hepatitis B and hepatitis C, often as an adjunct to interferon therapy. It is also used as an immune-supportive treatment in cancer patients undergoing chemotherapy. While NOT FDA-approved in the United States, Thymosin Alpha-1 has decades of clinical use abroad and one of the strongest evidence bases of any peptide on Prof. Peptide. Research applications include immune modulation, chronic infections, autoimmune conditions, and post-COVID immune recovery.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced T-cell maturation and function</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improved immune response to chronic viral infections (Hepatitis B/C, CMV)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Adjunctive support during cancer chemotherapy</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Modulation of autoimmune conditions (without immunosuppression)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Restoration of immune function in immunocompromised states</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Approved internationally for clinical use (35+ countries)</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Subcutaneous injection: 1.6 mg twice weekly (standard Zadaxin protocol for hepatitis), or 1.6 mg daily for 5 days followed by 2 days off (cancer adjunct protocol). Research peptide protocols often use 250–750 mcg daily. Cycle length: 4–12 weeks. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Outside the US, Zadaxin is available by prescription. In the US, Thymosin Alpha-1 is sold by specialty research peptide vendors. See{" "}
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
            href="https://www.amazon.com/s?k=gut+health+immunity+supplements&tag=profpeptide-20"
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
