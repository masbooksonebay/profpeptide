import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhereToBuy from "@/components/WhereToBuy";

export const metadata = {
  alternates: { canonical: "/peptides/kpv" },
  title: "KPV — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Evidence-based profile of KPV (Lysine-Proline-Valine), a tripeptide fragment of alpha-MSH studied for anti-inflammatory and gut-healing properties.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "KPV is a synthetic tripeptide consisting of three amino acids \u2014 lysine, proline, and valine \u2014 that represents the C-terminal fragment of alpha-melanocyte-stimulating hormone (alpha-MSH). Despite its small size, KPV retains the anti-inflammatory activity of the parent hormone without the pigmentation effects associated with full-length alpha-MSH. It has become a peptide of growing interest in gastrointestinal and dermatological research due to its oral stability, broad anti-inflammatory action, and encouraging preclinical data in inflammatory bowel disease models.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    content:
      "KPV exerts anti-inflammatory effects through several pathways. It inhibits NF-kB signaling in immune cells, reducing the transcription of pro-inflammatory cytokines including TNF-alpha, IL-1-beta, and IL-6. It also modulates mast cell activity, reduces neutrophil migration to inflamed tissue, and attenuates nitric oxide synthase activity at sites of inflammation. Unlike alpha-MSH, KPV does not meaningfully activate melanocortin receptors responsible for pigmentation. It also exhibits antimicrobial activity against several gram-positive and gram-negative bacteria, which may contribute to its therapeutic profile in gut research.",
  },
  {
    id: "research",
    title: "Key Research Areas",
    content:
      "Preclinical research focuses on: (1) Inflammatory bowel disease \u2014 strong evidence in rodent models of colitis for mucosal healing and reduction of inflammatory markers. (2) Dermatological inflammation \u2014 atopic dermatitis and psoriasis models show reduced lesion severity. (3) Gut barrier function \u2014 studies suggest KPV may improve tight junction integrity in compromised gut epithelium. (4) Antimicrobial applications \u2014 activity against Candida albicans, Staphylococcus aureus, and others. (5) Post-surgical recovery and wound healing. (6) Co-administration with other gut-healing peptides such as BPC-157 in research protocols.",
  },
  {
    id: "benefits",
    title: "Observed Benefits",
    content:
      "In animal and in vitro studies the most consistently observed benefits include: reduced colonic inflammation in DSS-induced colitis models; improved histological healing scores in IBD research; decreased pro-inflammatory cytokine production; reduced skin inflammation in atopic dermatitis models; broad-spectrum antimicrobial activity at concentrations achievable in vivo; and an absence of pigmentation effects that limit clinical use of parent alpha-MSH. Oral stability is notable \u2014 KPV survives gastric transit better than many peptides, supporting the oral-delivery formulations used by some suppliers.",
  },
  {
    id: "halflife",
    title: "Half-Life and Stability",
    content:
      "KPV has a relatively short systemic half-life estimated at under 2 hours, but its small size and oral stability allow multiple daily dosing in research protocols. The lyophilized tripeptide is stable at -20 degrees C for extended periods. Reconstituted solutions should be stored at 4 degrees C and used within 2-4 weeks. Oral formulations (spray and capsule) rely on KPV's resistance to gastric degradation \u2014 a property that distinguishes it from many other research peptides.",
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "Important caveats apply to the KPV literature: (1) Almost all evidence is from rodent or in vitro models; human clinical data is minimal. (2) No Phase 2 or Phase 3 clinical trials have been completed as of 2026. (3) Optimal human dosing and administration route are not established. (4) Long-term safety data in humans is absent. (5) KPV is not approved by the FDA or any major regulatory body for therapeutic use. (6) Most published research comes from a limited number of research groups, creating some concentration-of-source bias. (7) The relative efficacy of oral versus injectable administration in humans remains an open research question.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "In preclinical and research protocols, KPV is most commonly combined with: BPC-157 for gastrointestinal research \u2014 both peptides target gut healing through complementary mechanisms, and combination products are offered by several suppliers. TB-500 and GHK-Cu in skin and wound-healing research stacks (e.g., the KLOW blend \u2014 GHK-Cu + BPC-157 + TB-500 + KPV). LL-37 and other antimicrobial peptides in infection-model research. KPV has also been studied as a standalone anti-inflammatory in autoimmune research models.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "Brzoska T, Luger TA, Maaser C, et al. (2008). Alpha-melanocyte-stimulating hormone and related tripeptides: biochemistry, antiinflammatory and protective effects in vitro and in vivo, and future perspectives for the treatment of immune-mediated inflammatory diseases. Endocr Rev. 29(5):581-602.",
      "Kannengiesser K, Maaser C, Heidemann J, et al. (2008). Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of inflammatory bowel disease. Inflamm Bowel Dis. 14(3):324-331.",
      "Dalmasso G, et al. (2008). PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation. Gastroenterology. 134(1):166-178.",
      "Cutuli M, Cristiani S, Lipton JM, Catania A. (2000). Antimicrobial effects of alpha-MSH peptides. J Leukoc Biol. 67(2):233-239.",
      "Luger TA, Brzoska T. (2007). alpha-MSH related peptides: a new class of anti-inflammatory and immunomodulating drugs. Ann Rheum Dis. 66 Suppl 3:iii52-55.",
    ],
  },
];

export default function KPVPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"KPV","description":"Evidence-based profile of KPV (Lysine-Proline-Valine), a tripeptide fragment of alpha-MSH studied for anti-inflammatory and gut-healing properties.","url":"https://profpeptide.com/peptides/kpv","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"KPV"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">KPV</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
        <span className="tag">Preclinical</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Lysine-Proline-Valine, alpha-MSH(11-13)
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((ref, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {ref}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Anti-Inflammatory", "Gut Health", "Tripeptide", "Preclinical"].map((tag) => (
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
          <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
          <Link href="/peptides/tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">TB-500</Link>
          <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/compare/kpv-vs-bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">KPV vs BPC-157 &rarr;</Link>
        </div>
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>

      <WhereToBuy peptide="kpv" />
    </div>
    </>
  );
}
