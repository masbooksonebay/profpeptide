import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "TB-500 — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "TB-500 research profile covering Thymosin Beta-4 mechanism, wound healing data, muscle repair evidence, dosage protocols, and safety information.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "TB-500 is a synthetic analog of Thymosin Beta-4 (Tβ4), a naturally occurring 43-amino acid peptide originally isolated from thymic tissue and subsequently found in virtually all mammalian cells. The functional core of TB-500 is the actin-binding domain — the amino acid sequence LKKTETQ — which is responsible for the majority of its observed biological activity in laboratory models. TB-500 is found in elevated concentrations in blood platelets, macrophages, and wound fluid, suggesting a fundamental role in the body\u2019s natural repair response. Research has evaluated TB-500 across a wide range of tissue injury models including musculoskeletal, cardiac, neurological, and dermal systems.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "G-Actin Sequestration [1][2] — The primary molecular mechanism of TB-500 involves high-affinity binding to monomeric G-actin. By sequestering G-actin monomers and preventing premature polymerization, TB-500 maintains a ready pool of actin available for rapid cytoskeletal remodeling. This regulation is critical for cellular migration — particularly the directed movement of progenitor cells and endothelial cells toward sites of tissue damage.",
      "Enhanced Cellular Migration [2][3] — TB-500 significantly accelerates the rate at which cells migrate into wounded areas. This applies to keratinocytes, fibroblasts, and endothelial cells. TB-500 also upregulates matrix metalloproteinase (MMP) production, facilitating basement membrane degradation necessary for cellular movement.",
      "Angiogenesis [4] — TB-500 demonstrates potent angiogenic properties through stimulation of endothelial cell migration, proliferation, and tube formation. New blood vessel formation is essential for delivering oxygen and nutrients to healing tissue.",
      "Anti-Inflammatory Modulation [3] — Following injury, Thymosin Beta-4 is released by platelets and macrophages to protect cells and tissues from further damage. It reduces apoptosis, modulates inflammatory cascades, and decreases the number of myofibroblasts in wounds — resulting in reduced scar formation and fibrosis.",
      "Stem Cell Mobilization [3] — TB-500 promotes the mobilization, migration, and differentiation of stem and progenitor cells, contributing to new blood vessel formation and tissue regeneration at injury sites.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Wound Healing [5] — A landmark study published in The FASEB Journal demonstrated that topical or intraperitoneal administration increased reepithelialization by 42% at day 4 and by 61% at day 7 compared to saline controls. Collagen fiber bundles were thicker and longer, with less scarring observed.",
      "Diabetic and Aged Wound Healing [5] — Research in diabetic and aged mouse models found that Thymosin Beta-4 significantly accelerated wound healing. Keratinocyte migration improved, wound contracture increased, and collagen formation was notably enhanced.",
      "Cardiac Repair [5] — Studies have examined the effects of TB-500 on ventricular function following cardiac injury, with research suggesting potential cardioprotective and regenerative effects in preclinical models.",
      "Corneal Repair [3] — Multiple studies have investigated TB-500\u2019s effects on corneal tissue damage, demonstrating protection against apoptosis and promotion of corneal healing in animal models.",
      "Musculoskeletal Repair [4] — TB-500 has been studied in tendon, ligament, and muscle injury models, often in combination with BPC-157, with preclinical data suggesting synergistic tissue repair effects.",
      "Hair Growth [6] — A study published in PLOS ONE found that Thymosin Beta-4 induced hair growth in mouse models, suggesting potential dermatological applications.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "42–61% improvement in wound healing rates vs. controls in preclinical models",
      "Enhanced migration of keratinocytes, fibroblasts, and endothelial cells",
      "Reduced scar formation and fibrosis",
      "Promotes new blood vessel formation via angiogenesis",
      "Anti-inflammatory and anti-apoptotic effects",
      "Stem cell mobilization and differentiation",
      "Potential cardiac and neurological protective effects",
      "Hair follicle activation in animal models",
    ],
  },
  {
    id: "halflife",
    title: "Half-Life & Stability",
    body: [
      "Molecular weight: 4,963 g/mol (full Thymosin Beta-4); 889 g/mol (TB-500 fragment)",
      "Metabolized and cleared renally",
      "Found naturally in high concentrations in platelets and wound fluid",
      "Administration routes studied: Subcutaneous injection, intramuscular, topical, intraperitoneal",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    content:
      "The majority of TB-500 research has been conducted in preclinical animal models. Limited human clinical trial data exists — one pilot study examined autologous Thymosin Beta-4 pre-treated endothelial progenitor cell transplantation in patients with acute myocardial infarction, and clinical trials for venous stasis ulcers and corneal injuries have been registered. TB-500 is not approved by the FDA for any medical use in humans. The World Anti-Doping Agency (WADA) prohibits TB-500 use in competitive sports. Results from animal studies cannot be freely extrapolated to humans, and further clinical research is needed.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    body: [
      "BPC-157 — frequently combined for synergistic tissue repair and anti-inflammatory effects; the most common research stack in recovery protocols",
      "CJC-1295 / Ipamorelin — sometimes included in broader recovery-focused research protocols",
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "Peptide Sciences. Thymosin Beta-4 vs TB-500: Actin-Associated Peptide Signaling. 2026. https://www.peptidesciences.com/peptide-research/thymosin-beta-4-vs-tb-500",
      "Spartan Peptides. TB-500 Thymosin Beta-4: Complete Research Guide. 2025. https://spartanpeptides.com/blog/tb-500-thymosin-beta-4-complete-research-guide-2/",
      "Goldstein AL, Kleinman HK. Thymosin β4: a multi-functional regenerative peptide. PubMed. 2011. https://pubmed.ncbi.nlm.nih.gov/22074294/",
      "GlobalRPH. BPC-157 and TB-500: Background, Indications, Efficacy, and Safety. 2025. https://globalrph.com/2025/11/bpc-157-and-tb-500-background-indications-efficacy-and-safety/",
      "Maple K, Monis A. TB-500 Medical Evidence. Medical Anti-Aging. 2024. https://medicalantiaging.com/wp-content/uploads/2024/10/MAA-TB-500-Medical-Evidence.pdf",
      "Gao X, et al. Thymosin Beta-4 Induces Mouse Hair Growth. PLOS ONE. 2015.",
    ],
  },
];

export default function TB500Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"TB-500","description":"TB-500 research profile covering Thymosin Beta-4 mechanism, wound healing data, muscle repair evidence, dosage protocols, and safety information.","url":"https://profpeptide.com/peptides/tb-500","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"TB-500"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">TB-500</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Thymosin Beta-4, Tβ4, Timbetasin
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                {s.content}
              </p>
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
        {["Recovery", "Tissue Repair", "Angiogenesis", "Preclinical"].map(
          (tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          )
        )}
      </div>

      
      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/bpc-157-vs-tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157 vs TB-500 &rarr;</Link>
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
            href="https://www.amazon.com/s?k=recovery+tissue+repair+supplements&tag=profpeptide-20"
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
