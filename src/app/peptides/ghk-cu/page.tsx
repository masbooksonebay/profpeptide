import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/ghk-cu" },
  title: "GHK-Cu — Copper Peptide, Skin, Hair, Wound Healing | Prof. Peptide",
  description:
    "GHK-Cu (copper tripeptide) research profile: collagen synthesis, gene expression modulation, hair growth, dosing, side effects, and FDA status.",
};

const faqs = [
  {
    q: "Is GHK-Cu FDA-approved?",
    a: "Topical GHK-Cu is widely available in cosmetic formulations without prescription. Injectable GHK-Cu is NOT FDA-approved — and the FDA prohibited compounded injectable GHK-Cu commercial preparation as of 2023. Most clinical evidence supports topical use; systemic effects from injection are derived from animal studies and limited human research.",
  },
  {
    q: "How is GHK-Cu different from BPC-157?",
    a: "Different mechanisms. GHK-Cu is a copper-binding tripeptide that modulates 4,000+ human genes related to collagen synthesis, tissue remodeling, and anti-inflammatory signaling — primarily through copper-shuttling and Wnt activation. BPC-157 is a 15-amino-acid peptide that drives angiogenesis (VEGF/eNOS) and tissue repair through nitric oxide and FAK-paxillin pathways. They are commonly stacked together (often in the GLOW blend) because their mechanisms are complementary, not redundant.",
  },
  {
    q: "Topical vs injectable — which is better?",
    a: "Topical has the strongest evidence base, the longest history of safe use, and is FDA-permitted in cosmetic formulations. Injectable produces systemic effects (gene expression modulation across tissues) but is not FDA-approved and has stricter regulatory restrictions. For skin-focused applications, topical is the more defensible choice. For broader regenerative effects (hair + skin + tissue), injectable is what's used in functional medicine settings — at the user's risk regarding regulatory and quality issues.",
  },
  {
    q: "Does GHK-Cu work for hair loss?",
    a: "Some studies suggest performance comparable to Minoxidil 5% via different mechanisms — GHK-Cu activates Wnt signaling in dermal papilla cells (anagen growth phase) and stimulates angiogenesis around follicles, while Minoxidil works via vasodilation. Hair changes typically take 60–90 days to become visible (often the second injectable cycle). Topical GHK-Cu products marketed for hair are widely available.",
  },
  {
    q: "What are \"copper uglies\"?",
    a: "Slang for transient skin purging — increased breakouts or skin reactivity in the first 1–2 weeks of GHK-Cu use as the peptide accelerates skin cell turnover. Uncommon and self-resolving. If skin irritation persists beyond 2 weeks, discontinue and assess for copper sensitivity.",
  },
  {
    q: "Can I combine GHK-Cu with retinoids or vitamin C?",
    a: "Retinoids — yes, generally well-tolerated. The combination of GHK-Cu (collagen synthesis) + retinoid (cell turnover) is a common synergistic skincare protocol. Vitamin C — apply at separate times (AM vitamin C, PM GHK-Cu). High-concentration topical vitamin C destabilizes the copper complex; both ingredients lose efficacy when applied simultaneously.",
  },
  {
    q: "How long until I see results?",
    a: "Topical: visible skin texture changes typically 4–8 weeks. Injectable: skin improvements within first 30-day cycle. Hair changes typically 60–90 days (second cycle). Systemic gene expression effects are measurable within hours of dosing but cumulative over cycles.",
  },
  {
    q: "Where can I buy GHK-Cu?",
    a: (
      <>
        Topical GHK-Cu is widely available in cosmetic skincare products at 1–3% concentrations. Injectable research-grade GHK-Cu is sold by specialty peptide vendors (note FDA restriction on compounded injectable as of 2023). PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Copper Shuttle [1] — GHK-Cu carries copper into cells where it powers enzymes including lysyl oxidase (collagen crosslinking), superoxide dismutase (antioxidant defense), and cytochrome c oxidase (cellular energy). The copper-binding capability is what gives GHK-Cu its name and broad mechanistic reach.",
      "Gene Expression Modulation [2] — Modulates expression of 4,000+ human genes. Upregulates Type I and III collagen, decorin (302% increase), and glycosaminoglycans. Downregulates inflammatory and senescence pathways. This breadth of gene effect is unusual for any peptide.",
      "Collagen Synthesis [3] — Stimulates collagen synthesis at picomolar to nanomolar concentrations in skin fibroblasts. Notably stimulates BOTH collagen production AND breakdown of damaged collagen via matrix metalloproteinases — true tissue remodeling, not just deposition.",
      "Hair Follicle Stimulation [4] — Activates Wnt signaling in dermal papilla cells (anagen growth phase). Stimulates fibroblasts and angiogenesis around follicles. Inhibits TGF-beta-induced follicle miniaturization. This mechanism is distinct from Minoxidil's vasodilation pathway.",
      "Anti-Inflammatory & Antioxidant [5] — Reduces TNF-alpha and IL-6 in dermal fibroblasts. Stimulates antioxidant enzymes including superoxide dismutase. Reduces oxidative stress markers in cellular and animal studies.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Wound Healing [6] — Animal studies show 40–50% faster wound closure. In rat ischemic skin flap models, GHK-Cu reduced wound size 64.5% vs 28.2% control over 13 days. Effects observed in dermal, corneal, and surgical wound models.",
      "Skin Rejuvenation [7] — Pilot studies on aged skin show increased thickness, elasticity, hydration, and collagen density. Comparable to tretinoin in some endpoints, with cleaner tolerability profile.",
      "Hair Growth — Studies suggest performance comparable to Minoxidil 5% via different mechanism (Wnt activation vs vasodilation). Topical formulations widely marketed for hair regrowth applications.",
      "Anti-Aging Gene Expression [2] — Pickart and Margolina's gene expression work demonstrates \"resetting DNA to a healthier state\" via 4,000+ gene modulation. The breadth of effect is what distinguishes GHK-Cu from single-pathway compounds.",
      "Systemic Healing — Animal studies show systemic effect: GHK-Cu injected in one tissue area improves healing at distant sites (rats, mice, pigs). This systemic activity is part of the rationale for injectable use over topical-only application.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "GHK-Cu effects develop on multiple timescales. Topical: visible skin texture changes typically 4–8 weeks of consistent use. Injectable: skin improvements within the first 30-day cycle; hair changes typically 60–90 days (second cycle). Systemic effects (gene expression modulation) are measurable within hours of dosing but cumulative over cycles. Most users complete 3 injectable cycles before assessing full results.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          GHK-Cu is used both topically (cosmetic skincare) and as an injectable research peptide. Topical use has the strongest evidence base and is widely permitted; injectable use has FDA restrictions as of 2023.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Topical (cosmetic): 1–3% concentration in serums or creams. Apply 1–2× daily after cleansing.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injectable research protocol — Phase 1 (Days 1–15): 1 mg/day subcutaneously before bed (4 units on insulin syringe with 0.5 mg/mL reconstitution).</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injectable research protocol — Phase 2 (Days 16–30): 2 mg/day subcutaneously (8 units).</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle: 30 days on, 30 days off. Most users complete 3 cycles before assessing results.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reconstitution: 50 mg vial + 100 mL bacteriostatic water = 0.5 mg/mL (4 units = 1 mg).</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          For most users, topical is the safer and more defensible starting point. Injectable adds systemic effects but carries the FDA Category 2 restriction and quality-control concerns for compounded preparations.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Possible scalp or skin irritation (topical)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">&ldquo;Copper uglies&rdquo; — transient skin purging in first 1–2 weeks (rare)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Allergic reactions in copper-sensitive individuals</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Copper allergy reactions (hives, swelling, breathing issues — discontinue immediately)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical copper toxicity (negligible at standard doses but possible with chronic high-dose use)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term injectable safety not formally established</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          GHK-Cu is NOT FDA-approved for injectable use. The FDA prohibits injectable GHK-Cu in commercial compounding as of 2023. Topical GHK-Cu is widely available in cosmetic formulations and has decades of safe-use history. The most common practical issue is topical irritation — typically resolves with reduced concentration or frequency.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Topical: Apply to clean dry skin, twice daily. Avoid combining with raw vitamin C in the same product (copper-vitamin C interactions destabilize both).",
      "Injectable: Subcutaneous injection at bedtime, at least 2 hours after last meal.",
      "Site rotation: alternate abdomen, thigh, upper arm.",
      "Reconstitution: bacteriostatic water, swirl gently, never shake.",
      "Storage of reconstituted: 2–8°C, use within 30 days.",
      "Avoid direct sunlight on injection sites for 24–48 hours post-injection.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 + TB-500 — the classic GLOW stack for skin/recovery synergy. See{" "}
          <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">
            GLOW
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Topical retinoids — combination of GHK-Cu (collagen synthesis) + retinoid (cell turnover) is well-tolerated.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vitamin C serum — apply at separate times (AM vitamin C, PM GHK-Cu) to avoid copper-vitamin C neutralization.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Topical niacinamide — compatible, both support barrier function.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Avoid: high-dose oral copper supplements during injectable cycles.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Vitamin C (high concentration topical) — destabilizes copper complex; apply at different times.",
      "Topical hydroquinone — limited data on combination.",
      "No significant systemic drug interactions documented at standard cosmetic doses.",
      "Injectable: theoretical interaction with chelation therapy or D-penicillamine (copper-binding drugs).",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized: -20°C long-term, 2–8°C short-term.",
      "Topical formulations: room temperature in opaque packaging (light-sensitive).",
      "Reconstituted injectable: 2–8°C, 30 days max.",
      "Avoid contact with pure vitamin C in formulations.",
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
          GHK-Cu has one of the strongest evidence bases of any peptide on Prof. Peptide — decades of cell, animal, and human studies, with consistent results across research groups.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Topical GHK-Cu is established in cosmetic formulations and widely available without prescription. Injectable GHK-Cu is NOT FDA-approved. The FDA prohibits compounded injectable GHK-Cu commercial preparation as of 2023.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most clinical evidence is for topical applications; systemic effects from injection are derived from animal studies and limited human research. Long-term injectable safety data is not established.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: GHK-Cu is NOT currently on the WADA prohibited list. Research-grade material is sold for laboratory use only.
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
          Pickart L, Margolina A. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. Int J Mol Sci. 2018;19(7):1987.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Pickart L, Vasquez-Soltero JM, Margolina A. GHK and DNA: Resetting the Human Genome to Health. Biomed Res Int. 2014;2014:151479.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Pickart L, Margolina A. GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. Biomed Res Int. 2015;2015:648108.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Maquart FX, Pickart L, et al. Stimulation of collagen synthesis in fibroblast cultures by the tripeptide-copper complex glycyl-L-histidyl-L-lysine-Cu2+. FEBS Letters. 1988.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Copper peptide GHK-Cu.{" "}
          <a href="https://en.wikipedia.org/wiki/Copper_peptide_GHK-Cu" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Copper_peptide_GHK-Cu
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Innerbody Research. GHK-Cu Peptide.{" "}
          <a href="https://www.innerbody.com/ghk-cu-peptide" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.innerbody.com/ghk-cu-peptide
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Pickart L. The Human Tripeptide GHK-Cu in Prevention of Oxidative Stress and Degenerative Conditions of Aging. Oxid Med Cell Longev. 2012.
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function GHKCuPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GHK-Cu","description":"GHK-Cu (copper tripeptide) research profile: collagen synthesis, gene expression modulation, hair growth, dosing, side effects, and FDA status.","url":"https://profpeptide.com/peptides/ghk-cu","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"GHK-Cu"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">GHK-Cu</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Copper Tripeptide-1, Glycyl-L-Histidyl-L-Lysine Copper, GHK Copper Peptide
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            GHK-Cu is a naturally occurring copper-binding tripeptide (glycyl-L-histidyl-L-lysine) first isolated by Loren Pickart in 1973 from human plasma albumin. It exists naturally in plasma, saliva, and urine — at age 20 plasma levels average ~200 ng/mL, declining to ~80 ng/mL by age 60. This decline coincides with reduced regenerative capacity. GHK-Cu has one of the broadest mechanistic profiles of any peptide on Prof. Peptide — gene expression studies show it modulates over 4,000 human genes related to collagen synthesis, wound healing, anti-inflammatory signaling, and tissue remodeling. It&apos;s the #11 most-searched peptide globally with +1,016% YoY search growth, primarily driven by viral skincare content and growing interest in copper peptides for hair regrowth and skin rejuvenation.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates collagen and glycosaminoglycan synthesis in skin fibroblasts</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Modulates expression of 4,000+ human genes related to tissue repair</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Accelerates wound healing (40–50% faster wound closure in animal models)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Supports hair follicle stimulation comparable to Minoxidil 5% in some studies</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory and antioxidant activity</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Available topically (cosmetic skincare) and as injectable research peptide</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Topical: 1–3% concentration in serums/creams, applied 1–2× daily. Injectable research protocol: 1–2 mg subcutaneously, 30-day cycle (typically 1 mg days 1–15, escalating to 2 mg days 16–30), then 30-day break. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Topical GHK-Cu is widely available in cosmetic skincare. Injectable GHK-Cu is sold by specialty research peptide vendors (note FDA restrictions on compounded injectable as of 2023). See{" "}
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
        {["Skin Health & Anti-Aging", "Copper Peptide", "Wound Healing", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/glow" className="text-sm font-medium text-[#0891b2] hover:underline">GLOW</Link>
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
            href="https://www.amazon.com/s?k=skin+anti+aging+supplements&tag=profpeptide-20"
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
