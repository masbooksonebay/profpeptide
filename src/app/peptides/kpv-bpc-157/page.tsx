import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/kpv-bpc-157",
  title: "KPV + BPC-157 — Gut-Healing & Anti-Inflammatory Peptide Stack | Prof. Peptide",
  description:
    "KPV + BPC-157 research profile: 2-component gut-healing stack combining NF-κB-blocking KPV with cytoprotective BPC-157 for IBD, mucosal repair, and systemic inflammation. Mechanism, dosing (oral & SC), side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the KPV + BPC-157 blend?",
    a: (
      <>
        KPV + BPC-157 is a research-grade 2-component peptide pairing:{" "}
        <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>{" "}
        (lysine&ndash;proline&ndash;valine, the C-terminal tripeptide of &alpha;-MSH) +{" "}
        <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
        (Body Protection Compound, a gastric pentadecapeptide). The pairing targets gut healing and systemic inflammation through complementary mechanisms: KPV blocks NF-&kappa;B-mediated inflammatory signaling, while BPC-157 drives mucosal repair and angiogenesis. Both peptides can be dosed orally for gut-local action or subcutaneously for systemic exposure, which is a key practical advantage of this combination over purely injectable blends.
      </>
    ),
  },
  {
    q: "How does KPV + BPC-157 compare to KLOW?",
    a: (
      <>
        <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>{" "}
        is the broader 4-component blend that contains both KPV and BPC-157, plus TB-500 (cellular migration and actin remodeling) and GHK-Cu (collagen synthesis and gene modulation). KPV + BPC-157 is the focused 2-component gut and inflammation pairing &mdash; ideal when the research goal is enteric mucosal healing or systemic anti-inflammation without the skin-remodeling and tissue-repair coverage that TB-500 and GHK-Cu add. Researchers who want gut-healing coverage and also need wider tissue repair should consider stepping up to KLOW for a single injection that covers all four mechanisms.
      </>
    ),
  },
  {
    q: "Can KPV and BPC-157 both be dosed orally?",
    a: "Yes — both peptides demonstrate oral bioavailability that is relevant for gut-local effects. KPV is absorbed via the PepT1 nutrient transporter in intestinal epithelial cells, enabling gut-local NF-κB inhibition without needing to reach systemic circulation. BPC-157 has been studied extensively in oral form across GI ulcer, IBD, and fistula models with consistent cytoprotective effects. Oral dosing of both peptides is common in gut-focused research protocols; subcutaneous dosing is used when systemic anti-inflammatory or non-GI tissue repair effects are the goal. Both routes can be combined (oral KPV for gut-local action + SC BPC-157 for systemic coverage) but this is community-derived, not clinically validated.",
  },
  {
    q: "Is BPC-157 or KPV WADA-prohibited?",
    a: "They differ on this point. BPC-157 is listed on the World Anti-Doping Agency prohibited list under Section S0 (non-approved substances) and is banned in tested sport. KPV is NOT currently listed as a WADA-prohibited substance — it does not engage anabolic or hormone-modulating pathways covered by existing prohibited classes. Tested athletes should not use any protocol containing BPC-157, regardless of KPV's permitted status.",
  },
  {
    q: "Is the KPV + BPC-157 combination FDA-approved?",
    a: "No. Neither peptide is FDA-approved as an injectable or oral therapeutic. BPC-157 is on the FDA Category 2 bulk drug substance list (research-only); KPV has no FDA approval in any form. No controlled clinical trial has tested the two-peptide combination as a single product. Both are sold as research peptides for laboratory use only.",
  },
  {
    q: "What side effects are reported with KPV + BPC-157?",
    a: "The combination is generally well-tolerated in preclinical models. Most reported side effects in research-community use are mild: injection-site reactions (redness, mild irritation), transient fatigue, and transient GI changes (loose stool or appetite shifts, especially with oral BPC-157). Less common: mild headache, mild nausea during the first week. Serious effects are rare and theoretical — primarily the angiogenesis-stimulation concern with BPC-157 in oncology-adjacent contexts. KPV does not engage melanocortin receptors and does not produce the pigmentation or appetite side effects associated with full-length α-MSH.",
  },
  {
    q: "How long before KPV + BPC-157 shows effects for gut issues?",
    a: "BPC-157's cytoprotective effects in animal GI models begin within the first week of dosing — mucosal protection markers shift rapidly. KPV's NF-κB inhibition is similarly fast-onset. Subjective gut symptom improvement in research-community reports typically appears in weeks 2–4. Structural mucosal healing (ulcer resolution, barrier integrity improvements) in preclinical models accumulates over 4–8 weeks. Standard research cycles run 6–8 weeks, with an optional rest period before repeating.",
  },
];

const studies = [
  {
    title: "PepT1-Mediated Tripeptide KPV Uptake Reduces Intestinal Inflammation",
    authors: "Dalmasso G, Charrier-Hisamuddin L, Nguyen HT, et al.",
    journal: "Gastroenterology",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/18061177/",
    summary: "Foundational study establishing the mechanism by which KPV exerts its gut anti-inflammatory effect. Demonstrates that KPV is transported into intestinal epithelial cells via the PepT1 (SLC15A1) di/tripeptide transporter and then inhibits NF-κB nuclear translocation intracellularly, reducing production of TNF-α, IL-6, and IL-1β. Critically shows that oral KPV reaches epithelial cells efficiently without needing systemic absorption, providing the mechanistic basis for oral delivery in gut-local inflammation research. This intracellular NF-κB blockade is complementary to BPC-157&apos;s downstream mucosal repair signaling.",
  },
  {
    title: "α-MSH-Related Peptides: A New Class of Anti-Inflammatory and Immunomodulating Drugs",
    authors: "Luger TA, Brzoska T",
    journal: "Annals of the Rheumatic Diseases",
    year: "2007",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2095288/",
    summary: "Comprehensive review establishing that KPV (the C-terminal tripeptide of α-MSH, residues 11&ndash;13) recapitulates most of the anti-inflammatory activity of the full hormone without binding melanocortin receptors. Documents KPV&apos;s inhibition of pro-inflammatory cytokines, NF-κB signaling, and adhesion molecule expression across multiple tissue models including gut epithelium. The receptor-independence means KPV produces anti-inflammatory effects without the pigmentation, appetite, or immunosuppressive effects of α-MSH &mdash; a key practical advantage for combination protocols with BPC-157.",
  },
  {
    title: "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing",
    authors: "Sikiric P, Hahm KB, Blagaic AB, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2021",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full",
    summary: "Comprehensive review of BPC-157&apos;s wound healing and cytoprotective evidence across GI, vascular, and soft-tissue contexts. Documents BPC-157&apos;s activation of the nitric oxide / VEGFR2 / FAK-paxillin axis driving angiogenesis and endothelial protection, alongside its gastric mucosal stabilization properties. For the KPV + BPC-157 pairing, this review establishes the regenerative and vascular half of the mechanism: while KPV suppresses the inflammatory cascade, BPC-157 simultaneously drives mucosal repair, vascular reconstruction, and growth factor upregulation &mdash; targeting the rebuild phase once inflammation is controlled.",
  },
  {
    title: "Novel Cytoprotective Mediator, Stable Gastric Pentadecapeptide BPC 157: Vascular Recruitment and Gastrointestinal Tract Healing",
    authors: "Sikiric P, Seiwerth S, Rucman R, et al.",
    journal: "Current Pharmaceutical Design",
    year: "2018",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/29879879/",
    summary: "Review covering BPC-157&apos;s preclinical GI evidence across models of peptic ulcer, Crohn&apos;s-like fistula, anastomotic healing, and inflammatory bowel disease. Documents consistent cytoprotection and mucosal regeneration across oral and parenteral administration routes, with effects on goblet cell recovery, tight junction protein expression, and submucosal vasculature. The breadth of GI healing evidence across different pathological contexts establishes BPC-157 as the regenerative counterpart to KPV&apos;s anti-inflammatory action in gut-focused combination research.",
  },
  {
    title: "Melanocortin-Derived Tripeptide KPV Has Anti-Inflammatory Potential in Murine Models of Inflammatory Bowel Disease",
    authors: "Kannengiesser K, Maaser C, Heidemann J, et al.",
    journal: "Inflammatory Bowel Diseases",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18092346/",
    summary: "IBD-focused study examining KPV and α-MSH-derived tripeptides in colitis models. Demonstrates that KPV reduces colonic inflammation scores, pro-inflammatory cytokine levels, and mucosal damage in murine colitis, with effects comparable to some pharmacological anti-inflammatory agents in the same model. Supports KPV as an active gut anti-inflammatory agent in its own right, independent of systemic melanocortin signaling &mdash; and provides the IBD-adjacent evidence base most commonly cited alongside BPC-157&apos;s GI healing data when discussing the two-peptide combination.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does the KPV + BPC-157 blend work?",
    intro:
      "KPV + BPC-157 targets gut healing and systemic inflammation through two complementary mechanisms that attack the problem from opposite ends. KPV suppresses the inflammatory cascade at the transcription level, blocking NF-κB before pro-inflammatory cytokines are produced. BPC-157 then acts on the resulting calmer tissue environment to drive mucosal repair, angiogenesis, and growth factor signaling. The combination is mechanistically analogous to combining an anti-inflammatory agent with a tissue regenerative agent &mdash; but using peptides that both have independent gut-relevant evidence and can both be delivered orally.",
    body: [
      "KPV — NF-κB Inhibition and Intracellular Anti-Inflammatory Action [1][2]. KPV (lysine–proline–valine) is the C-terminal tripeptide of α-MSH (residues 11–13). It enters intestinal epithelial cells via the PepT1 nutrient transporter and directly inhibits NF-κB nuclear translocation intracellularly, suppressing transcription of TNF-α, IL-6, IL-1β, and adhesion molecules. Crucially, KPV does not bind melanocortin receptors — its anti-inflammatory effect is entirely receptor-independent, which means no pigmentation changes, appetite dysregulation, or immunosuppression. Oral delivery is effective for gut-local action because PepT1 is expressed throughout intestinal epithelium.",
      "BPC-157 — Mucosal Repair, Angiogenesis, and Cytoprotection [3][4]. BPC-157 (Body Protection Compound) is a stable gastric pentadecapeptide originally isolated from human gastric juice. It activates the nitric oxide / VEGFR2 / FAK-paxillin signaling axis to drive angiogenesis and endothelial protection, restoring vascular integrity to damaged mucosal tissue. BPC-157 also upregulates growth factors (VEGF, EGR-1) that promote collagen deposition and mucosal cell proliferation, and stabilizes the tight-junction proteins that maintain gut barrier integrity. Its cytoprotective action across GI ulcer, IBD, and fistula models is among the most extensively documented effects of any research peptide.",
      "Complementary Coverage. KPV blocks the production of pro-inflammatory mediators upstream (NF-κB inhibition); BPC-157 supports the downstream repair cascade in tissue where inflammation is already present or has been suppressed. Together they address both the cause of mucosal damage (inflammatory signaling cascade) and the consequence (damaged mucosa requiring active repair and vascular reconstruction). This is the mechanistic argument for the combination over monotherapy with either peptide.",
      "Dual Oral Route Advantage. Unlike most research peptide combinations that require subcutaneous or intramuscular injection, both KPV and BPC-157 show meaningful bioavailability via oral administration for gut-local effects. KPV is PepT1-transported directly into epithelial cells from the intestinal lumen; BPC-157 has been studied in oral form across IBD and ulcer models. This opens a practical route that some researchers prefer for intestinal-mucosal work, though subcutaneous dosing is used when systemic anti-inflammatory coverage beyond the GI tract is the goal.",
      "Gut-Brain Axis Modulation. BPC-157 has been studied for effects on the gut-brain axis, including modulation of dopaminergic and serotonergic pathways downstream of its GI effects. KPV’s NF-κB inhibition in gut-associated lymphoid tissue may additionally reduce neuroinflammatory signaling via the vagus nerve. The gut-brain axis implications of the combination are mechanistically plausible but have not been studied directly.",
    ],
  },
  {
    id: "research",
    title: "What is the KPV + BPC-157 blend used for?",
    intro:
      "The KPV + BPC-157 combination is primarily researched for gut-healing and systemic anti-inflammatory applications. Its strongest application is intestinal mucosal disease research: IBD models (colitis, Crohn’s-like), ulcer healing, and gut barrier restoration. Secondary applications include systemic inflammatory conditions where gut-originating immune activation is a driver. No controlled trial of the blend exists — all applications are extrapolated from each component’s independent literature and mechanistic complementarity.",
    body: [
      "Inflammatory Bowel Disease Research [1][4][5]. The dominant application. KPV has independent colitis evidence in murine models; BPC-157 has been studied across IBD, anastomotic healing, and fistula models. The two-peptide combination targets both NF-κB-driven cytokine production (KPV) and mucosal repair and vascularization (BPC-157) — the mechanistic rationale for combining them in IBD-type research over either alone.",
      "Gut Mucosal Barrier Restoration. Both peptides independently support tight-junction protein expression and epithelial barrier integrity. BPC-157 restores damaged submucosal vasculature; KPV reduces the cytokine environment that drives epithelial apoptosis. The combination addresses the two primary drivers of leaky gut in inflammatory models.",
      "Peptic Ulcer and Gastric Mucosal Healing. BPC-157 has the strongest preclinical evidence of any research peptide for ulcer healing, covering both NSAID-induced and stress-induced ulcer models. KPV adds anti-inflammatory modulation to the same mucosal environment. Community-derived protocols for ulcer-type research typically use oral administration of both peptides.",
      "Systemic Inflammatory Conditions. Subcutaneous dosing of both peptides provides systemic anti-inflammatory coverage beyond the GI tract. BPC-157’s angiogenic and tissue-repair effects extend to muscle, tendon, and vascular tissue; KPV’s NF-κB inhibition reduces systemic cytokine load. This broader application is the rationale for SC dosing vs oral-only protocols.",
      "Gut-Brain Axis Research. BPC-157’s documented effects on gut-brain signaling pathways and KPV’s NF-κB inhibition in gut-associated lymphoid tissue place this combination in the emerging area of gut-brain axis peptide research. Effects are mechanistically plausible but have not been tested as a combination protocol.",
      "Post-Surgical GI Recovery. BPC-157’s anastomotic healing data (across GI, esophageal, and colorectal anastomosis models) plus KPV’s post-procedural anti-inflammatory effect make this combination mechanistically relevant for GI surgical recovery research. Community protocols for post-procedure use typically combine oral BPC-157 with subcutaneous KPV.",
    ],
  },
  {
    id: "timeline",
    title: "How long does KPV + BPC-157 take to work?",
    intro:
      "KPV and BPC-157 both act quickly on the molecular level. KPV’s NF-κB inhibition begins after the first dose; BPC-157’s cytoprotective signaling activates within days in animal models. Subjective improvements in gut symptoms typically appear in weeks 2–4 in research-community reports, with structural mucosal healing markers accumulating through weeks 4–8.",
    content:
      "In preclinical IBD and ulcer models, BPC-157 produces measurable mucosal protection within the first week of daily dosing. KPV’s cytokine-suppressing effect is similarly fast, with colonic inflammation scores improving across the first 1–2 weeks. For structural healing outcomes — ulcer resolution, tight-junction protein recovery, submucosal vasculature normalization — animal models show most improvement at 4–8 weeks. Standard research cycles run 6–8 weeks. An off period of 4 weeks is common before re-cycling. Some researchers run BPC-157 continuously for chronic GI applications and pulse KPV during active flare periods, though this is community-derived rather than protocol-validated.",
  },
  {
    id: "dosing",
    title: "How is the KPV + BPC-157 blend dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          KPV + BPC-157 can be administered via two routes: oral (gut-local action) or subcutaneous injection (systemic action). The route choice depends on research goals. Oral administration for gut-local IBD and mucosal repair work; subcutaneous for systemic anti-inflammatory coverage. Both routes can be combined but this adds complexity with no validated guidance. There is no approved dosing protocol for the blend &mdash; all parameters below are community-derived from each component&apos;s individual research literature.
        </p>
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          Oral protocol (gut-local):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">KPV.</span> 200&ndash;500 mcg orally once daily, on an empty stomach (30&ndash;60 minutes before food). Capsule or solution form. Empty stomach maximizes PepT1-mediated uptake in the small intestine.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">BPC-157.</span> 250&ndash;500 mcg orally once daily, on an empty stomach. Oral BPC-157 is available as capsules or as a lyophilized powder dissolved in water. Both forms have been used in oral rodent studies.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 6&ndash;8 weeks active, 4 weeks off.</li>
        </ol>
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          Subcutaneous protocol (systemic):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">KPV.</span> 200&ndash;500 mcg subcutaneously once daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">BPC-157.</span> 250&ndash;500 mcg subcutaneously once daily. Some protocols split into 2&times; daily (8&ndash;12 hours apart).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Abdomen, thigh, upper arm. For GI-focused work, abdominal injection sites are preferred. BPC-157 can be injected near the anatomical area of interest.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 6&ndash;8 weeks active, 4 weeks off.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Reconstitution (subcutaneous use)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Bacteriostatic water (BAC water).</span> Lyophilized KPV and BPC-157 vials are reconstituted with bacteriostatic water for injection. Swirl gently &mdash; do not shake &mdash; to avoid degrading the peptides.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Example math for KPV (5 mg vial).</span> Add 2.5 mL BAC water &rarr; 2 mg/mL (2,000 mcg/mL). Drawing 0.125 mL (12.5 units on a U-100 syringe) delivers 250 mcg. Drawing 0.25 mL delivers 500 mcg.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Example math for BPC-157 (5 mg vial).</span> Add 2.5 mL BAC water &rarr; 2 mg/mL (2,000 mcg/mL). Drawing 0.125 mL delivers 250 mcg; 0.25 mL delivers 500 mcg.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Pre-blended vials.</span> Some vendors sell KPV + BPC-157 as a pre-blended lyophilized vial. Check the per-component breakdown on the Certificate of Analysis before scaling doses &mdash; ratio varies by vendor.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Stepping up to KLOW.</span> Researchers wanting to add GHK-Cu (collagen and gene modulation) and TB-500 (cellular migration and tissue repair) to their protocol step up to{" "}
            <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>{" "}
            &mdash; the 4-component blend containing all four peptides in a single injection.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Neither peptide is FDA-approved. Dosing is community-derived from individual component research literature &mdash; there are no approved retail dosing standards for this blend.
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
    title: "How is the KPV + BPC-157 blend administered?",
    intro:
      "KPV + BPC-157 is unique among research peptide combinations because both components can be dosed either orally or subcutaneously. Oral administration is preferred when the target is gut-local mucosal effects; subcutaneous injection is used for systemic anti-inflammatory and tissue-repair effects. Some researchers combine oral KPV (gut-local) with subcutaneous BPC-157 (systemic), though this is not validated.",
    body: [
      "Oral route. Both peptides are taken orally on an empty stomach, 30–60 minutes before food. This maximizes PepT1-mediated KPV uptake in intestinal epithelial cells and BPC-157 mucosal contact time. Oral capsules are the most practical form; lyophilized powder dissolved in water is an alternative.",
      "Subcutaneous route. Standard insulin syringe (U-100, 29–31 gauge). Common sites: abdomen (avoiding 2-inch radius around navel), upper outer thighs, back of upper arms. Rotate sites each injection to minimize reaction.",
      "Time of day. Either morning (fasted, before breakfast) or bedtime (at least 2 hours after last meal) for oral; any consistent time for SC. Bedtime SC is a common choice to align with overnight repair.",
      "Reconstitution (SC only). Use bacteriostatic water for injection. Swirl gently — do not shake. Reconstituted solution: store at 2–8°C and use within 30 days. Do not freeze reconstituted vials.",
      "Missed dose. Resume at the next scheduled dose. Do not double-dose. For oral dosing, consistency with empty-stomach timing matters more than precise time-of-day.",
      "Injection technique (SC). Insert needle at 45–90° into a pinched fold of skin. Inject slowly. Remove and apply gentle pressure. No need to aspirate for SC injection.",
      "Peri-injury use (SC BPC-157). For any non-GI tissue component, BPC-157 can be injected within 0.5–1 inch of the affected anatomical area for localized repair signaling.",
    ],
  },
  {
    id: "stacks",
    title: "What does the KPV + BPC-157 blend stack well with?",
    intro:
      "KPV + BPC-157 is a focused gut/anti-inflammatory pairing. The most logical additions are either expanding into broader tissue coverage (stepping up to KLOW) or adding non-peptide gut-support elements. Avoid stacking with standalone BPC-157 or KPV protocols — the blend already contains both at meaningful doses.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Step up: KLOW (+ GHK-Cu + TB-500).</span> The most logical upgrade for researchers who also need skin remodeling, collagen synthesis, or broader tissue repair alongside gut healing. KLOW already contains both KPV and BPC-157 at the core. See{" "}
          <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Thymosin Alpha-1 (TA1).</span> An immune-modulating peptide with independent gut-associated lymphoid tissue effects. Mechanistically complementary for IBD-adjacent research where immune dysregulation is a driver alongside inflammation. See{" "}
          <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1 &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Dietary and gut support (non-peptide).</span> Low-FODMAP or anti-inflammatory diet, glutamine supplementation, and probiotics are commonly used alongside KPV + BPC-157 in gut-repair protocols. These are complementary, not competing, with the peptide combination.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Wolverine Stack for tissue repair alongside gut work.</span> If the research goal includes both gut healing and soft-tissue musculoskeletal repair, researchers sometimes run{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>{" "}
          (BPC-157 + TB-500) separately from KPV. However, this overlaps BPC-157 &mdash; the cleaner path is stepping up to KLOW.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: standalone BPC-157 or KPV concurrent protocols.</span> The KPV + BPC-157 blend already contains both at research doses. Adding full-dose standalone{" "}
          <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
          or{" "}
          <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>{" "}
          risks double-dosing without independent benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of KPV + BPC-157?",
    intro:
      "The KPV + BPC-157 combination is one of the better-tolerated research peptide pairings in terms of observed side effects. Both components have favorable preclinical safety profiles individually, and KPV’s receptor-independent mechanism avoids the melanocortin-related effects seen with full-length α-MSH. There is no controlled safety trial of the combination. All severity estimates are extrapolated from each component’s literature and research-community user reports.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection-site reactions (SC route).</span> Redness, mild irritation, or transient pinkness at the injection site. Most commonly reported side effect with subcutaneous administration. Typically resolves within hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient GI changes.</span> Mild loose stool or appetite shifts, particularly in the first week of oral dosing. Reflects BPC-157 activity on gut motility and secretion signaling. Usually self-resolving by week 2.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue.</span> Transient post-dose tiredness, more commonly reported with SC administration than oral. Typically resolves within hours.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild nausea.</span> More common with oral dosing, especially if taken with food. Empty-stomach administration reduces this.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Typically in the first 1–2 weeks of a cycle. Usually transient and resolves without intervention.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lightheadedness.</span> Occasionally reported with subcutaneous administration in the first week. Often resolved by reducing initial dose and titrating up.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical angiogenesis concern (BPC-157).</span> BPC-157&apos;s pro-angiogenic activity (VEGF upregulation) raises a theoretical concern in oncology-adjacent contexts. No tumor-stimulating signal has appeared in the extensive animal literature or research-community human use, but the theoretical concern is noted.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping prohibitions.</span> BPC-157 is on the WADA prohibited list (Section S0). KPV is NOT currently WADA-prohibited. Tested athletes should not use this blend due to BPC-157&apos;s prohibited status.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Immune modulation (theoretical).</span> KPV&apos;s NF-κB inhibition at high doses or prolonged duration could theoretically attenuate normal immune surveillance. No clinical events have been documented in research-community use at standard doses.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          KPV does NOT produce the pigmentation changes, appetite stimulation, or immunosuppression associated with full-length α-MSH &mdash; this is a significant practical advantage over older melanocortin-targeting peptides. The combination&apos;s safety profile remains poorly characterized in formal clinical research; most evidence comes from individual peptide studies and community reports.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does the KPV + BPC-157 blend interact with other drugs?",
    intro:
      "No well-documented systemic drug interactions exist for either peptide. Theoretical concerns center on BPC-157’s angiogenic activity (anticoagulant interaction) and KPV’s NF-κB suppression (immunosuppressant interaction). Neither has produced documented clinical events in the research literature.",
    body: [
      "Anticoagulants (warfarin, DOACs). Theoretical concern from BPC-157’s pro-angiogenic VEGF signaling, which could theoretically interact with anticoagulant effects. No documented clinical events in the research literature.",
      "Immunosuppressants. KPV’s NF-κB inhibition is additive in mechanism with pharmacological immunosuppressants (corticosteroids, calcineurin inhibitors). Theoretical concern for excess immunosuppression in combination; not documented in practice at research doses.",
      "NSAIDs. Theoretical concern that chronic NSAID use could attenuate the inflammatory signaling required for mucosal healing phases. BPC-157 independently counteracts NSAID-induced gastric damage in preclinical models, which may offset this theoretical concern in GI-focused protocols.",
      "Oral medications (co-administration timing). When using oral KPV or BPC-157, consider spacing 30–60 minutes from other oral medications to avoid PepT1 competition and maximize peptide absorption.",
      "Alcohol. No specific interaction documented. Alcohol independently impairs gut mucosal integrity, which works against the repair goals of this blend.",
      "Component-level interaction profiles. Cross-reference the individual BPC-157 and KPV peptide pages for full per-component interaction details.",
    ],
  },
  {
    id: "storage",
    title: "How should KPV + BPC-157 be stored?",
    body: [
      "Lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated). Most peptide vendors ship on dry ice.",
      "Reconstituted solution (SC use): 2–8°C, use within 30 days.",
      "Reconstitution: bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze the reconstituted solution. Freezing degrades peptide structure.",
      "Protect from light — store in the original amber vial or a light-blocking container.",
      "Oral KPV capsules: store at room temperature (15–25°C) away from moisture and light, per manufacturer’s label.",
      "Discard reconstituted solution if cloudy, discolored, or containing visible particles.",
    ],
  },
  {
    id: "where-to-buy",
    title: "Where to source KPV + BPC-157",
    intro:
      "KPV + BPC-157 is not FDA-approved. Both peptides are sold as research compounds by specialty peptide vendors, either as individual vials or in some cases as a pre-blended formulation. Vendors below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "ez-peptides", note: "Stocks KPV and BPC-157 (oral and injectable forms)" },
            { slug: "glacier-aminos" },
            { slug: "peptide-partners" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">
            See all verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What are the limitations of KPV + BPC-157 research?",
    intro:
      "The KPV + BPC-157 combination is community-derived &mdash; no controlled trial has tested the two-peptide combination as a single product. All efficacy claims rest on each component’s independent literature and mechanistic complementarity arguments. Neither peptide is FDA-approved, and one (BPC-157) is WADA-prohibited.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The KPV + BPC-157 blend is NOT FDA-approved. BPC-157 sits on the FDA Category 2 bulk drug substance list (research-only). KPV has no FDA approval in any form. The two-peptide combination has no clinical trial evidence as a combined product &mdash; synergy claims are based on mechanistic complementarity across separate bodies of preclinical literature, not on a head-to-head comparison of the stack versus either component alone.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most evidence is from animal models. BPC-157 has extensive preclinical GI literature across multiple research groups. KPV has a smaller but consistent body of colitis and anti-inflammatory evidence. Controlled human trials of either compound are limited; human trials of the combination do not exist.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Oral dosing complexity. Both peptides are claimed to be orally active for gut-local effects, but oral bioavailability data in humans for either compound is limited. PepT1-mediated KPV transport is well-characterized in vitro and in animal models; oral BPC-157 evidence comes primarily from rodent GI models. Human oral absorption rates are unknown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded peptide quality varies dramatically by source. Third-party HPLC testing is strongly recommended for both components &mdash; both for purity and to verify the labeled per-component dose before running a quantitative protocol.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: BPC-157 is on the WADA prohibited list (Section S0, non-approved substances). KPV is NOT currently WADA-prohibited. Tested athletes should not use any product containing BPC-157. For researchers who need a gut-healing protocol without BPC-157, KPV monotherapy is the appropriate alternative to investigate.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "KPV + BPC-157 FAQ",
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
          Dalmasso G, Charrier-Hisamuddin L, Nguyen HT, et al. PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation. Gastroenterology. 2008;134(1):166&ndash;178.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18061177/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18061177/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Luger TA, Brzoska T. &alpha;-MSH related peptides: a new class of anti-inflammatory and immunomodulating drugs. Ann Rheum Dis. 2007;66 Suppl 3:iii52&ndash;5.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2095288/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2095288/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Hahm KB, Blagaic AB, et al. Stable Gastric Pentadecapeptide BPC 157 and Wound Healing. Front Pharmacol. 2021;12:627533.{" "}
          <a href="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Rucman R, Turkovic B, et al. Novel cytoprotective mediator, stable gastric pentadecapeptide BPC 157: vascular recruitment and gastrointestinal tract healing. Curr Pharm Des. 2018;24(18):1990&ndash;2001.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29879879/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29879879/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kannengiesser K, Maaser C, Heidemann J, et al. Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of inflammatory bowel disease. Inflamm Bowel Dis. 2008;14(3):324&ndash;331.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18092346/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18092346/
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
          The KPV + BPC-157 blend has no controlled trial as a combination. The studies below are the key peer-reviewed sources for each component&apos;s mechanism in gut-healing and anti-inflammatory contexts &mdash; the empirical basis for the blend&apos;s mechanistic rationale.
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

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function KpvBpc157Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"KPV + BPC-157","description":"KPV + BPC-157 research profile: 2-component gut-healing stack combining NF-κB-blocking KPV with cytoprotective BPC-157 for IBD, mucosal repair, and systemic inflammation. Mechanism, dosing (oral & SC), side effects, FAQ.","url":"https://profpeptide.com/peptides/kpv-bpc-157","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"KPV + BPC-157"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">KPV + BPC-157</h1>
        <span className="tag">Gut Healing &amp; IBD</span>
        <span className="tag">Anti-Inflammatory</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 28, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> KPV/BPC-157 Blend, Gut Stack, KPV + Body Protection Compound
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> Gut-Healing &amp; Anti-Inflammatory Blend (2-component)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Research-grade only &mdash; BPC-157 FDA Category 2 bulk substance; KPV no FDA approval
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is the KPV + BPC-157 blend?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            KPV + BPC-157 is a research-grade 2-component peptide combination pairing{" "}
            <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>{" "}
            (lysine&ndash;proline&ndash;valine, the C-terminal tripeptide of &alpha;-MSH) with{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
            (Body Protection Compound, a stable gastric pentadecapeptide) for gut-healing and systemic anti-inflammatory research. KPV controls the inflammatory cascade by blocking NF-&kappa;B nuclear translocation intracellularly &mdash; suppressing TNF-&alpha;, IL-6, and IL-1&beta; production without engaging melanocortin receptors. BPC-157 simultaneously drives mucosal repair and angiogenesis through the nitric oxide / VEGFR2 / FAK-paxillin axis, restoring vascular integrity and tight-junction protein expression in damaged gut tissue. A key practical advantage of this pairing: both peptides can be dosed orally for gut-local effects, making it the most accessible combination for intestinal-mucosal research. Researchers wanting to add GHK-Cu and TB-500 for broader tissue repair and skin remodeling step up to{" "}
            <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>{" "}
            &mdash; the 4-component blend that contains both KPV and BPC-157 at its core.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">NF-&kappa;B-mediated inflammation suppression via intracellular KPV action (no melanocortin receptor involvement)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mucosal repair, ulcer healing, and gut barrier restoration via BPC-157 cytoprotection</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pro-inflammatory cytokine suppression (TNF-&alpha;, IL-6, IL-1&beta;) alongside angiogenesis and VEGF upregulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Tight-junction protein restoration and submucosal vascular reconstruction</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Dual oral-route option: both peptides active via oral delivery for gut-local effects</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">IBD and colitis model efficacy from both components independently</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Well-tolerated profile; KPV does not produce pigmentation or appetite changes</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> KPV 200&ndash;500 mcg/day (oral or SC) + BPC-157 250&ndash;500 mcg/day (oral or SC). Both on empty stomach for oral administration. Cycle 6&ndash;8 weeks active, 4 weeks off.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> Sold as separate research-grade vials (KPV and BPC-157) by specialty peptide vendors; some vendors carry oral KPV capsules. Neither is FDA-approved. See{" "}
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
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
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
        {["Gut Healing", "IBD", "Anti-Inflammatory", "NF-κB", "Mucosal Repair", "Combination Blend", "Preclinical"].map((tag) => (
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
          <Link href="/peptides/kpv" className="text-sm font-medium text-[#3A759F] hover:underline">KPV</Link>
          <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">BPC-157</Link>
          <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#3A759F] hover:underline">GHK-Cu</Link>
          <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/peptides/klow" className="text-sm font-medium text-[#3A759F] hover:underline">KLOW</Link>
          <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#3A759F] hover:underline">Wolverine Stack</Link>
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
      <ContactLink pageName="KPV + BPC-157" pagePath="/peptides/kpv-bpc-157" />
    </div>
    </>
  );
}
