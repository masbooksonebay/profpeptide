import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/glow" },
  title: "GLOW Stack — GHK-Cu + BPC-157 + TB-500 Skin Blend | Prof. Peptide",
  description:
    "GLOW peptide stack research profile: GHK-Cu + BPC-157 + TB-500 synergy for skin, hair, and tissue repair. Mechanism, dosing, side effects.",
};

const faqs = [
  {
    q: "What is GLOW?",
    a: "GLOW is a synergistic peptide stack combining three regenerative peptides — GHK-Cu (copper tripeptide), BPC-157 (gastric pentadecapeptide), and TB-500 (Thymosin Beta-4 fragment) — in a single injection. Common formulations use a 5:1:1 ratio (GHK-Cu:TB-500:BPC-157), often supplied as a 70 mg blend per vial: 50 mg GHK-Cu / 10 mg TB-500 / 10 mg BPC-157.",
  },
  {
    q: "How does GLOW differ from individual peptides?",
    a: "GLOW combines three peptides with non-overlapping mechanisms in one injection. GHK-Cu drives gene expression and collagen synthesis; BPC-157 promotes angiogenesis via VEGF/eNOS; TB-500 enhances cellular migration via actin sequestration. Used individually, you'd need three separate injections; the blend reduces injection burden and may produce additive effects through complementary pathway activation.",
  },
  {
    q: "Is GLOW FDA-approved?",
    a: "No. None of the three component peptides are FDA-approved as injectables. GHK-Cu has been FDA-restricted for compounded injectable preparation since 2023; BPC-157 is on the FDA Category 2 bulk drug substance list; TB-500 has no FDA approval. GLOW blends are sold by specialty research peptide vendors and quality varies dramatically by source.",
  },
  {
    q: "What ratio do most clinics use?",
    a: "5:1:1 (GHK-Cu:TB-500:BPC-157) is the most common ratio. A typical 70 mg vial contains 50 mg GHK-Cu, 10 mg TB-500, and 10 mg BPC-157. The high GHK-Cu proportion reflects its primary role in skin/aesthetic applications and its broader gene expression effects.",
  },
  {
    q: "How does GLOW compare to topical-only GHK-Cu?",
    a: "Topical GHK-Cu produces local effects on skin where the product is applied. Injectable GLOW produces systemic effects — gene expression modulation across tissues, faster wound healing at distant sites, and contributions from BPC-157 and TB-500. Topical is safer and FDA-permitted; injectable adds depth but carries regulatory and quality concerns.",
  },
  {
    q: "Skin vs recovery applications?",
    a: "GLOW addresses both. The stack's strongest application is skin/aesthetic (driven by GHK-Cu's collagen + gene expression effects, with BPC-157 and TB-500 supporting tissue remodeling). Recovery applications leverage BPC-157 and TB-500's tissue repair properties — though for pure recovery, the Wolverine Stack (BPC-157 + TB-500 only, without GHK-Cu) is sometimes preferred to avoid the copper component.",
  },
  {
    q: "Can I combine GLOW with other peptides?",
    a: "Compatible additions include topical GHK-Cu serum (for layered skin effect) and topical retinoids. Avoid stacking GLOW with full-dose individual GHK-Cu, BPC-157, or TB-500 protocols — you'd be doubling the same peptides. Vitamin C topical should be applied at separate times from any GHK-Cu-containing product.",
  },
  {
    q: "Where can I buy GLOW?",
    a: (
      <>
        GLOW blends are sold by specialty research peptide vendors as compounded preparations. Quality varies dramatically — third-party HPLC testing is essential. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Three Complementary Pathways [1] — GHK-Cu drives copper-mediated gene expression. BPC-157 activates the nitric oxide / VEGFR2 / FAK-paxillin axis. TB-500 sequesters G-actin to enable cytoskeletal remodeling. Non-overlapping mechanisms produce additive rather than redundant effects.",
      "Collagen Architecture [2] — GHK-Cu stimulates collagen synthesis. BPC-157 promotes collagen deposition across multiple tissue types. TB-500 contributes anti-fibrotic effect and organized collagen patterning. Net result: more collagen produced AND organized correctly.",
      "Vascular Support [3] — Both GHK-Cu and BPC-157 promote angiogenesis through different pathways. TB-500 mobilizes endothelial progenitor cells for vascular remodeling. Combined: enhanced blood supply to healing tissue.",
      "Cellular Migration [4] — TB-500's actin-binding accelerates cell migration to injury sites. BPC-157 promotes proliferation. GHK-Cu stimulates VEGF/FGF for trophic support. Healing tissue gets repair cells faster.",
      "Multi-System Anti-Inflammatory [5] — All three modulate inflammation through different pathways: GHK-Cu (TNF-alpha reduction), BPC-157 (NF-kB modulation), TB-500 (cytokine balance).",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Skin Quality & Anti-Aging — Combined collagen synthesis + extracellular matrix remodeling + reduced inflammation. The most popular use case for GLOW blends.",
      "Wound Healing — All three peptides individually accelerate healing in animal models. Combined effects in research show additive improvement, particularly for surgical and post-procedure recovery.",
      "Hair Follicle Stimulation — GHK-Cu's primary contribution; supported by BPC-157's angiogenic effect on follicular blood supply. Effects typically emerge 60–90 days into protocol.",
      "Post-Procedure Recovery — Used adjunctively after microneedling, laser treatments, and surgery to accelerate tissue regeneration and reduce scarring.",
      "Tendon/Joint Support — Less common but documented use case leveraging BPC-157 and TB-500's tissue repair properties.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "GLOW effects develop progressively. Skin texture/glow improvements typically appear in 4–6 weeks of consistent use. Wound healing acceleration is measurable in days. Hair changes typically take 8–12 weeks (second cycle) to become visible. Multi-cycle protocols are common (5 days on / 2 days off, 8–12 weeks total active duration with cycling).",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          GLOW is administered as a subcutaneous injection. Standard preparations supply roughly 40 doses per 70 mg vial at the typical research protocol.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard reconstitution: 70 mg vial + 2 mL bacteriostatic water = 35 mg/mL blend.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard dose: 0.25–0.5 mL subcutaneously, 5 days/week (5 on, 2 off).</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Each ~40-dose vial typically lasts ~8 weeks at standard protocol.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 8–12 weeks active, 4-week break recommended.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Time of day: bedtime injection, at least 2 hours post-meal.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Site rotation: alternate abdomen, thigh, upper arm.</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Quality of compounded GLOW preparations varies dramatically. The standard 5:1:1 ratio (GHK-Cu:TB-500:BPC-157) at 70 mg total is the most common, but vendor formulations differ. Verify Certificate of Analysis before use.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Transient fatigue</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI changes</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Lightheadedness</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Appetite changes</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Copper allergy reactions from GHK-Cu component (hives, swelling — discontinue immediately)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical concerns from individual peptides apply</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">None of the three components are FDA-approved as injectables</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          GLOW combines three peptides not individually FDA-approved as injectables. Compounded preparations vary widely in quality. Third-party testing is essential. The combined safety profile of the blend has not been formally studied — most evidence comes from individual peptide research.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Reconstitute with bacteriostatic water (typically 2 mL for 70 mg vial).",
      "Subcutaneous injection at bedtime, at least 2 hours post-meal.",
      "Site rotation: different injection site each session (abdomen, thigh, upper arm).",
      "Storage: refrigerate reconstituted blend, use within 30 days.",
      "Don't shake — swirl gently to mix.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Topical GHK-Cu serum — combine injectable GLOW with topical GHK-Cu cosmetic for layered effect.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standalone GHK-Cu — for users wanting just copper peptide effects without BPC-157/TB-500.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wolverine Stack (BPC-157 + TB-500) — alternative for users prioritizing recovery/joint applications over skin. See{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">
            Wolverine Stack
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Avoid stacking with: full-dose individual GHK-Cu, BPC-157, or TB-500 protocols (you&apos;d be doubling the same peptide).</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Resistance training + adequate protein — natural pairing for tissue regeneration applications.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Same as individual peptide profiles for each component (cross-reference{" "}
          <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>
          ,{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>
          , and{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>
          ).
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vitamin C topical (high concentration) — apply at separate time if combining with topical GHK-Cu products.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No significant systemic drug interactions documented at standard doses.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anticoagulants — theoretical concern from BPC-157 and TB-500 angiogenic activity. Limited clinical data.</li>
      </ol>
    ),
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized blend: -20°C long-term, 2–8°C short-term.",
      "Reconstituted: 2–8°C, 30 days max.",
      "Bacteriostatic water for reconstitution.",
      "Protect from light. Don't freeze reconstituted solution.",
      "Discard if cloudy, discolored, or contains particles.",
      "Store in original container or amber vial.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          GLOW is NOT FDA-approved. Each individual peptide has its own regulatory status — GHK-Cu (FDA-restricted as injectable since 2023), BPC-157 (Category 2 bulk drug substance, research-only), TB-500 (research-only).
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded blends are sold as &ldquo;research peptides.&rdquo; Quality varies dramatically by source. Third-party HPLC testing is strongly recommended for any GLOW product.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Combined safety/efficacy research on the blend is limited. Most evidence comes from individual peptide studies plus clinical observation in functional medicine settings rather than controlled trials of the combination product.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: BPC-157 and TB-500 are on the WADA prohibited list (Section S0); GHK-Cu is not currently listed. Tested athletes should not use any GLOW formulation that includes BPC-157 or TB-500.
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
          Pickart L, Margolina A. GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. Biomed Res Int. 2015;2015:648108.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Hahm KB, Blagaic AB, et al. Stable Gastric Pentadecapeptide BPC 157, Robust Vascular Therapy in Ischemia/Reperfusion Injury. Front Pharmacol. 2018;9:1383.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Goldstein AL, Hannappel E, Sosne G, Kleinman HK. Thymosin β4: a multi-functional regenerative peptide. Expert Opin Biol Ther. 2012;12(1):37-51.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22074294/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22074294/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kleinman HK, Sosne G. Thymosin β4 Promotes Dermal Healing. Vitam Horm. 2016;102:53-70.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27450031/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27450031/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Chang CH, Tsai WC, Lin MS, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing. J Appl Physiol. 2011;110(3):774-80.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21030672/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21030672/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function GLOWPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GLOW","description":"GLOW peptide stack research profile: GHK-Cu + BPC-157 + TB-500 synergy for skin, hair, and tissue repair. Mechanism, dosing, side effects.","url":"https://profpeptide.com/peptides/glow","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"GLOW"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">GLOW</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="tag">Stack</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: GLOW Peptide Blend, GHK-Cu + BPC-157 + TB-500 Stack, Pure Glow Fusion
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            GLOW is a synergistic peptide stack combining three well-studied regenerative peptides — GHK-Cu (copper tripeptide), BPC-157 (gastric pentadecapeptide), and TB-500 (Thymosin Beta-4 fragment). The blend is designed to deliver complementary mechanisms in a single injection: GHK-Cu drives collagen synthesis and gene expression modulation, BPC-157 promotes angiogenesis and tissue stabilization, and TB-500 enhances cellular migration and remodeling. Together they target skin quality, wound healing, anti-inflammatory signaling, and tissue regeneration through non-overlapping pathways. Common formulations use a 5:1:1 ratio (GHK-Cu:TB-500:BPC-157), often supplied as a 70 mg blend per vial: 50 mg GHK-Cu / 10 mg BPC-157 / 10 mg TB-500.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Comprehensive skin rejuvenation (collagen + elastin + tissue remodeling in one stack)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Faster wound healing and reduced scarring</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory and antioxidant effects from three complementary mechanisms</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hair follicle support</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Convenient single-injection format vs three separate peptide injections</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Synergistic effects from non-overlapping mechanisms</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Standard protocol: 0.25–0.5 mL of reconstituted blend, 5 days/week (5-on, 2-off), at bedtime. Approximately 40 doses per 70 mg vial. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> GLOW is sold by specialty research peptide vendors as a compounded blend. None of the three component peptides are FDA-approved as injectables. See{" "}
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
        {["Skin Health & Anti-Aging", "Stack", "Wound Healing", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
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
