import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/glow",
  title: "GLOW Peptide — 50 mg GHK-Cu + 10 mg BPC-157 + 10 mg TB-500 (5:1:1) | Prof. Peptide",
  description:
    "GLOW peptide blend: a 5:1:1 stack of 50 mg GHK-Cu, 10 mg BPC-157, and 10 mg TB-500 for skin, hair, and tissue repair. Mechanism, dosing, side effects, and FAQ.",
});

const faqs = [
  {
    q: "What is GLOW?",
    a: (
      <>
        GLOW is a research-grade 3-component peptide blend:{" "}
        <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
        (copper tripeptide) +{" "}
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
        (gastric pentadecapeptide) +{" "}
        <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
        (Thymosin Beta-4 fragment) in a single injection. Common formulations use a 5:1:1 ratio (GHK-Cu:TB-500:BPC-157), typically supplied as a 70 mg blend: 50 mg GHK-Cu + 10 mg TB-500 + 10 mg BPC-157.
      </>
    ),
  },
  {
    q: "How does GLOW differ from individual peptides?",
    a: "GLOW combines three peptides with non-overlapping mechanisms in one injection. GHK-Cu drives gene expression and collagen synthesis; BPC-157 promotes angiogenesis via VEGF/eNOS; TB-500 enhances cellular migration via actin sequestration. Used individually, researchers would need three separate injections; the blend reduces injection burden and produces complementary pathway activation in a single dose.",
  },
  {
    q: "How does GLOW compare to KLOW?",
    a: (
      <>
        GLOW is the 3-component blend (BPC-157 + TB-500 + GHK-Cu).{" "}
        <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
        is the 4-component extension that adds KPV — an α-MSH-derived anti-inflammatory tripeptide. Researchers typically step up:{" "}
        <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
        (BPC-157 + TB-500, pure injury work) → GLOW (+ GHK-Cu, recovery + skin) → KLOW (+ KPV, recovery + skin + inflammation control). Use GLOW when skin quality plus repair is the goal and the tissue background is not chronically inflamed.
      </>
    ),
  },
  {
    q: "Is GLOW FDA-approved?",
    a: "No. None of the three component peptides are FDA-approved as injectables. GHK-Cu has been FDA-restricted for compounded injectable preparation since 2023; BPC-157 is on the FDA Category 2 bulk drug substance list; TB-500 has no FDA approval. GLOW blends are sold by specialty research peptide vendors and quality varies dramatically by source.",
  },
  {
    q: "What ratio do most vendors use?",
    a: "5:1:1 (GHK-Cu:TB-500:BPC-157) is the most common ratio. A typical 70 mg vial contains 50 mg GHK-Cu, 10 mg TB-500, and 10 mg BPC-157. The high GHK-Cu proportion reflects its primary role in skin/aesthetic applications and its broader gene expression effects across more than 4,000 human genes.",
  },
  {
    q: "How does GLOW compare to topical-only GHK-Cu?",
    a: "Topical GHK-Cu produces local effects on skin where the product is applied. Injectable GLOW produces systemic effects — gene expression modulation across tissues, faster wound healing at distant sites, and contributions from BPC-157 and TB-500. Topical is safer and FDA-permitted; injectable adds depth but carries regulatory and quality concerns.",
  },
  {
    q: "Skin versus recovery applications?",
    a: "GLOW addresses both. The stack's strongest application is skin/aesthetic — driven by GHK-Cu's collagen and gene expression effects, with BPC-157 and TB-500 supporting tissue remodeling. Recovery applications leverage BPC-157 and TB-500's tissue repair properties — though for pure recovery, Wolverine Stack (BPC-157 + TB-500 only, without GHK-Cu) is sometimes preferred to avoid the copper component.",
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

const studies = [
  {
    title: "Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data",
    authors: "Pickart L, Margolina A",
    journal: "International Journal of Molecular Sciences",
    year: "2018",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
    summary: "The foundational reference for GHK-Cu's role in GLOW. Synthesizes decades of work establishing GHK-Cu's gene-modulating action across more than 4,000 human genes — including reset of expression patterns associated with skin aging, wound healing, antioxidant defense, and stem-cell support. GHK-Cu is the 62.5% mass fraction in a standard 70 mg GLOW vial and supplies the bulk of the collagen, elastin, and gene-expression effects.",
  },
  {
    title: "GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration",
    authors: "Pickart L, Margolina A",
    journal: "BioMed Research International",
    year: "2015",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/",
    summary: "Skin-focused review of GHK and GHK-Cu mechanism. Establishes the copper tripeptide's primary role in dermal collagen and elastin synthesis, lysyl-oxidase cross-linking, extracellular matrix remodeling, and antioxidant defense. The key reference for GLOW's skin-quality and anti-aging use case.",
  },
  {
    title: "Stable Gastric Pentadecapeptide BPC 157: Robust Vascular Therapy in Ischemia/Reperfusion Injury",
    authors: "Sikiric P, Hahm KB, Blagaic AB, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2018",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/",
    summary: "Reviews BPC-157's mechanism centered on the nitric oxide / VEGFR2 / FAK-paxillin axis — driving angiogenesis, endothelial protection, and rapid vascular network reconstruction at injury sites. BPC-157's vascular action is the primary mechanism by which it complements TB-500's cellular-migration effect in GLOW.",
  },
  {
    title: "Thymosin β4: a Multi-Functional Regenerative Peptide",
    authors: "Goldstein AL, Hannappel E, Sosne G, Kleinman HK",
    journal: "Expert Opinion on Biological Therapy",
    year: "2012",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
    summary: "Reviews the parent peptide of TB-500. Mechanism centers on G-actin sequestration to enable cytoskeletal remodeling, cellular migration of fibroblasts and endothelial progenitor cells to injury sites, and the anti-fibrotic Ac-SDKP fragment that biases healing toward functional tissue rather than scar. In GLOW, TB-500 supplies the cellular-migration arm of the three-peptide repair triad.",
  },
  {
    title: "The Promoting Effect of Pentadecapeptide BPC 157 on Tendon Healing",
    authors: "Chang CH, Tsai WC, Lin MS, et al.",
    journal: "Journal of Applied Physiology",
    year: "2011",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/21030672/",
    summary: "Foundational animal study of BPC-157's tendon-healing effect — measurable improvements in tendon ultrastructure, collagen organization, and biomechanical strength following BPC-157 administration. Establishes the empirical basis for BPC-157's contribution to GLOW's tendon and connective-tissue repair applications.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does GLOW work?",
    intro:
      "GLOW combines three peptides that each act on a different stage of tissue repair and skin remodeling. BPC-157 rebuilds blood supply to healing tissue, similar to how angiogenic growth factors work. TB-500 moves repair cells (fibroblasts, endothelial progenitors) into position and steers healing toward functional tissue rather than scar. GHK-Cu — a copper-binding tripeptide naturally present in human plasma — lays down new collagen and modulates more than 4,000 genes involved in skin aging and regeneration.",
    body: [
      "GHK-Cu — Collagen and Gene Modulation [1][2]. The 62.5% mass fraction of GLOW (50 mg in a 70 mg vial). Shuttles copper into cells and modulates expression of more than 4,000 human genes associated with skin remodeling, antioxidant defense, and stem-cell support. Strongest signals are in dermal collagen synthesis, lysyl-oxidase cross-linking, and clearance of damaged extracellular matrix.",
      "BPC-157 — Vascular Repair [3][6]. Activates the nitric oxide / VEGFR2 / FAK-paxillin axis to drive angiogenesis and endothelial protection. Rebuilds the blood supply that healing tissue needs and stabilizes vascular networks at injury sites.",
      "TB-500 — Cellular Migration [4][5]. The active fragment of thymosin β4. Sequesters G-actin to enable cytoskeletal remodeling — functionally, rapid migration of fibroblasts and endothelial progenitor cells to injury sites. The Ac-SDKP fragment contributes anti-fibrotic activity, biasing healing toward functional tissue rather than scar.",
      "Three Complementary Pathways [1]. Non-overlapping mechanisms produce additive rather than redundant effects. GHK-Cu drives the gene-expression and collagen-architecture work; BPC-157 supplies the vascular foundation; TB-500 mobilizes the repair cells that act on that vascular network. Collagen produced (GHK-Cu) and organized correctly (TB-500's anti-fibrotic effect) on top of a restored vascular bed (BPC-157).",
      (
        <>
          Multi-System Anti-Inflammatory [3]. All three components modulate inflammation through different pathways — GHK-Cu (TNF-α reduction), BPC-157 (NF-κB modulation), TB-500 (cytokine balance). For chronically inflamed tissue, researchers may step up to the 4-component{" "}
          <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
          blend, which adds KPV — a dedicated NF-κB inhibitor — on top of GLOW&apos;s repair triad.
        </>
      ),
    ],
  },
  {
    id: "research",
    title: "What is GLOW used for?",
    intro:
      "GLOW is the go-to blend when both skin quality and tissue recovery are the goal. The 5:1:1 ratio is GHK-Cu-dominant, which is why the strongest applications are dermal — collagen synthesis, scar remodeling, hair follicle support — with BPC-157 and TB-500 adding the wound-healing and recovery layer. For pure injury work without the GHK-Cu skin emphasis, Wolverine Stack is the simpler 2-component alternative.",
    body: [
      "Skin Quality and Anti-Aging. The dominant GLOW use case. Combined collagen synthesis (GHK-Cu) + extracellular matrix remodeling (TB-500) + reduced inflammation (all three) produces measurable improvements in skin tone, texture, and structural firmness across the typical 8–12 week cycle.",
      "Wound Healing. All three peptides individually accelerate healing in animal models. Combined effects show additive improvement, particularly for surgical and post-procedure recovery.",
      "Hair Follicle Stimulation. GHK-Cu's primary contribution; supported by BPC-157's angiogenic effect on follicular blood supply. Effects typically emerge 60–90 days into protocol.",
      "Post-Procedure Recovery. Used adjunctively after microneedling, laser treatments, and minor surgery to accelerate tissue regeneration and reduce scarring.",
      "Tendon and Joint Support. Less common but documented use case leveraging BPC-157 and TB-500's tissue-repair properties. For tendon-dominant applications, Wolverine Stack (BPC + TB only) is often the more focused choice.",
    ],
  },
  {
    id: "timeline",
    title: "How long does GLOW take to work?",
    intro:
      "GLOW effects develop progressively over an 8–12 week cycle. Skin texture and glow improvements typically appear in 4–6 weeks. Wound healing acceleration is measurable in days. Hair changes typically take 8–12 weeks (second cycle) to become visible.",
    content:
      "Multi-cycle protocols are common (5 days on / 2 days off, 8–12 weeks total active duration with cycling). BPC-157 and TB-500's tissue-repair signals act fast, with angiogenesis markers shifting in days. GHK-Cu's gene-modulating effects accumulate more slowly because they require ongoing transcription cycles — which is why structural skin and hair effects typically lag the wound-healing acceleration by several weeks.",
  },
  {
    id: "dosing",
    title: "How is GLOW dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          GLOW is administered as a subcutaneous injection. Standard preparations supply roughly 40 doses per 70 mg vial at the typical research protocol.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard research protocol (70 mg vial):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> 70 mg vial + 2 mL bacteriostatic water = 35 mg/mL blend.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard dose.</span> 0.25–0.5 mL subcutaneously, 5 days/week (5 on, 2 off).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vial duration.</span> Each ~40-dose 70 mg vial typically lasts ~8 weeks at standard protocol.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 8–12 weeks active, 4-week break recommended before re-cycling.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> Bedtime injection, at least 2 hours post-meal.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Alternate abdomen, thigh, and upper arm.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Pre-blended formulations (research-grade vials)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Standard SKU.</span> The 70 mg GLOW vial is the dominant SKU. Some vendors also offer 30 mg or 60 mg total-mg labels at the same 5:1:1 ratio. The vial label always shows the combined milligrams of all three components.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Component breakdown (70 mg standard).</span> 50 mg GHK-Cu (~71%) + 10 mg TB-500 (~14%) + 10 mg BPC-157 (~14%). The ratio is locked at 5:1:1 in pre-blended product; researchers wanting a different ratio — for example, equal GHK-Cu and BPC-157 for an injury-dominant protocol — should buy the three components separately.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Reconstitution math.</span> Treat the combined 70 mg as the vial size in the dosing calculator. Because the ratio is fixed, every drawn unit contains the same 5:1:1 mix. A 2 mL reconstitution yields 35 mg/mL total — and any drawn volume delivers ~71% as GHK-Cu and ~14% each as BPC-157 and TB-500.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Stepping up to KLOW.</span> Researchers needing an inflammation-control layer step up to{" "}
            <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>, which adds 10 mg KPV to the GLOW backbone (80 mg total, 50/10/10/10 split). Stepping down to{" "}
            <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
            drops GHK-Cu for pure injury work.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Quality of compounded GLOW preparations varies dramatically. Verify the per-component breakdown on the vendor's Certificate of Analysis before use.
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
    title: "How is GLOW administered?",
    intro:
      "GLOW is administered by subcutaneous injection — under the skin, not into muscle — using a small insulin syringe. The blend is 5-on/2-off, typically at bedtime, with site rotation across abdomen, thigh, and upper arm to spread injection-site reactions.",
    body: [
      "Reconstitute with bacteriostatic water (typically 2 mL for a 70 mg vial).",
      "Subcutaneous injection at bedtime, at least 2 hours post-meal.",
      "Site rotation: different injection site each session (abdomen, thigh, upper arm).",
      "Storage: refrigerate reconstituted blend, use within 30 days.",
      "Don't shake — swirl gently to mix.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "stacks",
    title: "What does GLOW stack well with?",
    intro:
      "GLOW is designed as a standalone blend covering tissue repair plus skin remodeling. The most useful additions are non-peptide — resistance training, protein, topical actives — and stepping up to the 4-component KLOW blend when an inflammation-control layer is also needed. The thing to avoid is double-dosing any of the three components by stacking with standalone GHK-Cu, BPC-157, or TB-500 protocols.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">KLOW blend (+ KPV).</span> Adds KPV tripeptide for anti-inflammatory and immune coverage on top of GLOW's recovery + skin mechanism. Use when the target tissue is chronically inflamed, post-procedure reactive, or autoimmune-adjacent. See{" "}
          <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Wolverine Stack (BPC-157 + TB-500).</span> The 2-component alternative without GHK-Cu — for users prioritizing recovery and joint applications over skin. See{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical GHK-Cu serum.</span> Layered skin effect — injectable GLOW for systemic GHK-Cu gene expression plus topical for local skin concentration.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + adequate protein.</span> Natural pairing for tissue regeneration and recovery applications.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical retinoids.</span> Compatible with injectable GLOW; collagen-stimulating effects are additive.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: full-dose standalone components.</span> GLOW already contains{" "}
          <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>,{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>, and{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          at meaningful doses. Stacking with standalone protocols of any of these doubles the dose without independent benefit.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vitamin C topical (high concentration).</span> Apply at separate times from topical GHK-Cu products if combining with topical regimens.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of GLOW?",
    intro:
      "Most reported GLOW side effects are mild and local — injection-site reactions, transient fatigue, mild gastrointestinal changes — and consistent with what individual components produce. There is no controlled trial of the blend, so all estimates are extrapolated from each component's literature plus user reports. Copper-allergy risk from the GHK-Cu component and WADA prohibition of BPC-157 / TB-500 are the most material concerns to flag.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection site reactions.</span> Redness, irritation, or transient pinkness at the injection site. The most commonly reported GLOW side effect.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient fatigue.</span> Mild post-injection tiredness, typically resolving overnight.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild GI changes.</span> Mild loose stool or appetite changes — reflects BPC-157 activity on gut signaling.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Typically mild, more common during the first few doses of a new cycle.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lightheadedness.</span> Usually transient and dose-related; often resolved with smaller volumes or split dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Appetite changes.</span> Mild and inconsistent across users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Copper allergy reactions.</span> From the GHK-Cu component — hives, swelling, or systemic allergic response. Discontinue immediately.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping prohibitions.</span> BPC-157 and TB-500 are on the WADA prohibited list (Section S0). Tested athletes should not use any GLOW formulation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical component-level concerns apply.</span> Each component carries its own (mostly preclinical) safety considerations — see the individual component pages.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          GLOW combines three peptides not individually FDA-approved as injectables. Compounded preparations vary widely in quality. Third-party HPLC testing is essential. The combined safety profile of the blend has not been formally studied — most evidence comes from individual peptide research.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does GLOW interact with other drugs?",
    intro:
      "GLOW has no well-documented systemic drug interactions. Each component's individual interaction profile applies — BPC-157 and TB-500's angiogenic activity creates a theoretical concern for users on anticoagulants, and the GHK-Cu copper component creates theoretical concern for users on copper-modifying agents or vitamin C megadosing.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Component-level profiles.</span> Cross-reference{" "}
          <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>,{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>, and{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          pages for full per-component interaction profiles.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High-concentration topical vitamin C.</span> Apply at a separate time if combining with topical GHK-Cu products — vitamin C can reduce Cu²⁺ and disrupt the copper-binding configuration.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin, DOACs).</span> Theoretical concern from BPC-157 and TB-500 angiogenic activity. Limited clinical data and no documented events.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Copper-modifying agents.</span> Theoretical concern from the GHK-Cu component for users on high-dose zinc supplementation or copper-chelating therapy.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Systemic drug interactions.</span> None documented at standard doses across the three components.</li>
      </ol>
    ),
  },
  {
    id: "storage",
    title: "How should GLOW be stored?",
    body: [
      "Lyophilized blend: -20°C long-term, 2–8°C short-term.",
      "Reconstituted: 2–8°C, 30 days max.",
      "Bacteriostatic water for reconstitution.",
      "Protect from light. Do not freeze reconstituted solution.",
      "Discard if cloudy, discolored, or contains particles.",
      "Store in original container or amber vial.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of GLOW research?",
    intro:
      "GLOW is a community-derived blend — no controlled trial has tested the three-peptide combination as a single product. All efficacy claims rest on each component's independent literature plus mechanistic reasoning about complementarity. The regulatory status is the strictest concern: none of the three components are FDA-approved as injectables, and compounded quality varies dramatically.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          GLOW is NOT FDA-approved. Each individual peptide has its own regulatory status — GHK-Cu (FDA-restricted as injectable since 2023), BPC-157 (Category 2 bulk drug substance, research-only), TB-500 (research-only).
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded blends are sold as &ldquo;research peptides.&rdquo; Quality varies dramatically by source. Third-party HPLC testing is strongly recommended for any GLOW product — both for purity and to verify the labeled 50 / 10 / 10 mg breakdown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Combined safety and efficacy research on the blend is limited. Most evidence comes from individual peptide studies plus clinical observation in functional medicine settings rather than controlled trials of the combination product.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: BPC-157 and TB-500 are on the WADA prohibited list (Section S0); GHK-Cu is not currently listed. Tested athletes should not use any GLOW formulation that includes BPC-157 or TB-500 — which is all of them.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "GLOW FAQ",
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
          Pickart L, Margolina A. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. Int J Mol Sci. 2018;19(7):1987.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pickart L, Margolina A. GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. Biomed Res Int. 2015;2015:648108.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Hahm KB, Blagaic AB, et al. Stable Gastric Pentadecapeptide BPC 157, Robust Vascular Therapy in Ischemia/Reperfusion Injury. Front Pharmacol. 2018;9:1383.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Goldstein AL, Hannappel E, Sosne G, Kleinman HK. Thymosin β4: a multi-functional regenerative peptide. Expert Opin Biol Ther. 2012;12(1):37-51.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22074294/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22074294/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kleinman HK, Sosne G. Thymosin β4 Promotes Dermal Healing. Vitam Horm. 2016;102:53-70.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27450031/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27450031/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chang CH, Tsai WC, Lin MS, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing. J Appl Physiol. 2011;110(3):774-80.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21030672/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21030672/
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
          GLOW has no controlled trial as a combination. The studies below are the key peer-reviewed sources for each individual component's mechanism — the empirical basis for the three-peptide blend's mechanistic rationale.
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 15, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> GLOW Blend, GLOW Stack, BPC-157/TB-500/GHK-Cu Blend, Pure Glow Fusion
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Recovery &amp; Skin Repair Blend (3-component)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research-grade only
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is GLOW?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            GLOW is a research-grade 3-component peptide blend combining{" "}
            <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
            (copper tripeptide),{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
            (gastric pentadecapeptide), and{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
            (Thymosin Beta-4 fragment) in a single injection. The blend is designed to deliver complementary mechanisms — GHK-Cu drives collagen synthesis and gene expression modulation, BPC-157 promotes angiogenesis and tissue stabilization, and TB-500 enhances cellular migration and remodeling — through non-overlapping pathways. Common formulations use a 5:1:1 ratio (GHK-Cu:TB-500:BPC-157), often supplied as a 70 mg blend per vial: 50 mg GHK-Cu / 10 mg TB-500 / 10 mg BPC-157. For researchers needing an additional inflammation-control layer, the 4-component{" "}
            <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
            blend adds KPV on top of the GLOW backbone.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Comprehensive skin rejuvenation (collagen + elastin + tissue remodeling in one stack)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Faster wound healing and reduced scarring</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory and antioxidant effects from three complementary mechanisms</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Hair follicle support</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Convenient single-injection format vs three separate peptide injections</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergistic effects from non-overlapping mechanisms</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Standard protocol: 0.25–0.5 mL of reconstituted blend, 5 days/week (5-on, 2-off), at bedtime. Approximately 40 doses per 70 mg vial. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> GLOW is sold by specialty research peptide vendors as a compounded blend. None of the three component peptides are FDA-approved as injectables. See{" "}
            <Link href="/best-peptide-vendors" className="text-[#0891b2] hover:underline">
              Verified Peptide Vendors &rarr;
            </Link>{" "}
            for current options.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Related supplements:</span>{" "}
            <a href="https://www.amazon.com/s?k=skin+anti+aging+supplements&tag=profpeptide-20" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
              Find related supplements on Amazon.
            </a>
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

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        <Link href="/peptides/klow" className="text-sm font-medium text-[#0891b2] hover:underline">KLOW</Link>
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
    <ContactLink pageName="GLOW" pagePath="/peptides/glow" />
    </div>
    </>
  );
}
