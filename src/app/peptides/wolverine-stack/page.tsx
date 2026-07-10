import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/wolverine-stack",
  title: "Wolverine Stack — BPC-157 + TB-500 Recovery Blend Research Profile | Prof. Peptide",
  description:
    "Wolverine Stack research profile: 2-component BPC-157 + TB-500 blend for tendon, ligament, and soft-tissue repair. Mechanism, dosing, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the Wolverine Stack?",
    a: (
      <>
        The Wolverine Stack is a research-grade 2-component peptide blend:{" "}
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
        (Body Protection Compound) +{" "}
        <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
        (Thymosin Beta-4 fragment). Named for its association with rapid healing, it&apos;s the most established and widely sold of the recovery-focused peptide blends. Common SKUs are 10 mg total (5 mg + 5 mg) or 20 mg total (10 mg + 10 mg) at a fixed 1:1 ratio.
      </>
    ),
  },
  {
    q: "How does the Wolverine Stack compare to GLOW and KLOW?",
    a: (
      <>
        Wolverine Stack is the 2-component baseline (BPC-157 + TB-500) for pure injury and recovery work — tendon, ligament, muscle, post-surgical tissue.{" "}
        <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">GLOW</Link>{" "}
        adds GHK-Cu for skin and collagen remodeling on top of the same backbone.{" "}
        <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
        further adds KPV for inflammation control. Researchers step up: Wolverine → GLOW → KLOW as breadth of coverage expands beyond pure tissue repair.
      </>
    ),
  },
  {
    q: "Is the Wolverine Stack better than either peptide alone?",
    a: "In animal models, the combination shows additive effects on tendon and muscle repair versus either peptide individually. No controlled human trials directly compare the stack against monotherapy. Most research-grade users choose the stack when dealing with significant injuries or post-surgical recovery; standalone use of one peptide is common for lighter applications or when budget is a constraint.",
  },
  {
    q: "How many injections per week?",
    a: "During TB-500's loading phase: 9 injections per week (BPC-157 daily = 7, plus TB-500 twice weekly = 2). During TB-500's maintenance phase: 8 injections per week (BPC-157 daily, TB-500 once weekly). For pre-blended Wolverine vials, both peptides are drawn in the same injection — but most published protocols still dose them on separate schedules because TB-500's longer half-life doesn't need daily administration.",
  },
  {
    q: "Is the Wolverine Stack FDA-approved?",
    a: "No. Neither BPC-157 nor TB-500 is FDA-approved as an injectable. BPC-157 sits on the FDA Category 2 bulk drug substance list; TB-500 has no FDA approval. Both are prohibited by the World Anti-Doping Agency (Section S0). The stack is sold as a research peptide for laboratory use only.",
  },
  {
    q: "Can I cycle BPC-157 and TB-500 separately?",
    a: "Yes — some users run BPC-157 continuously for chronic conditions and add TB-500 as a 4–6 week pulse for specific injuries. Others run a 6–8 week stack cycle and then take both off together. There is no clinically validated “best” approach. Cycling both off together is the most common protocol because it gives a clear washout period and matches typical TB-500 loading/maintenance schedules.",
  },
  {
    q: "Where can I buy the Wolverine Stack?",
    a: (
      <>
        Sold pre-blended by some research peptide vendors (typically 10 mg or 20 mg total) and as two separate vials by others. Pre-blended is more convenient; separate vials let researchers run non-1:1 ratios. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
    title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
    authors: "Vasireddi N, Hahamyan H, Salata MJ, et al.",
    journal: "HSS Journal",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
    summary: "The most current systematic review of BPC-157 for musculoskeletal injuries — directly relevant to the Wolverine Stack's primary use case. Across 36 studies, BPC-157 consistently promoted healing of muscle, tendon, ligament, and bone injuries by upregulating growth factors and reducing inflammation. The mechanism involves FAK-paxillin signaling, VEGFR2-Akt-eNOS activation, and nitric oxide modulation — pathways distinct from TB-500's actin-based mechanism, providing the rationale for combining the two.",
  },
  {
    title: "Thymosin β4: A Multi-Functional Regenerative Peptide",
    authors: "Goldstein AL, Hannappel E, Sosne G, Kleinman HK",
    journal: "Expert Opinion on Biological Therapy",
    year: "2012",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
    summary: "The foundational review for TB-500's contribution to the Wolverine Stack. The paper documents thymosin β4's role in actin-mediated cell migration, stem cell mobilization, and angiogenesis — mechanisms upstream and complementary to BPC-157's downstream signaling effects on tissue repair. Together the two peptides target both the cellular migration phase of healing (TB-500) and the tissue remodeling and vascularization phase (BPC-157) — the mechanistic argument for using them in combination.",
  },
  {
    title: "Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future Directions",
    authors: "Rahman OF, Lee SJ, Seeds WA, et al.",
    journal: "JAAOS Global Research & Reviews",
    year: "2026",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/",
    summary: "A 2025 orthopaedic review that specifically discusses BPC-157 and TB-500 together as wound-healing peptides acting on complementary molecular signaling networks. The paper notes BPC-157 acts on PI3K/Akt, MAPK, and VEGF pathways while TB-500 targets actin dynamics and integrin-mediated matrix remodeling — two parallel but distinct repair cascades. This is the closest published scientific justification for the Wolverine Stack as a combination, explicitly describing the two compounds' complementary mechanisms in the same research context.",
  },
  {
    title: "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing",
    authors: "Sikiric P, Hahm KB, Blagaic AB, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2021",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full",
    summary: "Comprehensive review of BPC-157's wound healing evidence that helps contextualize how it fits alongside TB-500 in a combination protocol. The paper covers BPC-157's role in accelerating wound closure, promoting collagen deposition, and maintaining vascular integrity — downstream tissue remodeling effects that complement TB-500's upstream role in recruiting progenitor cells and promoting cell migration. Cellular recruitment followed by structural repair is the biological rationale for the Wolverine Stack.",
  },
  {
    title: "Thymosin β4 Promotes Dermal Healing",
    authors: "Kleinman HK, Sosne G",
    journal: "Vitamins and Hormones",
    year: "2016",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/27450738/",
    summary: "Focused review of TB-500's dermal-healing data. Across multiple animal wound-healing models, TB-500 demonstrated 42–61% improvement in healing rate versus controls. The paper documents the actin-sequestration mechanism (releasing G-actin from intracellular pools to enable rapid cytoskeletal remodeling at the wound front) and the anti-fibrotic Ac-SDKP fragment effect. This dermal-healing data is the empirical foundation for TB-500's contribution to the Wolverine Stack's wound and post-surgical applications.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does the Wolverine Stack work?",
    intro:
      "The Wolverine Stack combines two peptides that hit different stages of tissue repair. BPC-157 — a pentadecapeptide originally identified in human gastric juice — rebuilds the blood supply to injured tissue, similar to how natural growth factors signal angiogenesis. TB-500, a synthetic fragment of thymosin β4 (a naturally occurring actin-binding protein), mobilizes repair cells like fibroblasts and endothelial progenitors to the injury site. Together they address the two halves of soft-tissue repair: vascular reconstruction (BPC-157) and cellular delivery (TB-500).",
    body: [
      "BPC-157 — Vascular Repair and Growth Factor Signaling [1][4]. Activates the nitric oxide / VEGFR2 / FAK-paxillin axis to drive angiogenesis and endothelial protection. Upregulates VEGF and EGR-1 to promote new blood vessel formation, and stimulates collagen synthesis through downstream gene expression effects. BPC-157's short plasma half-life (under 30 minutes) is offset by sustained downstream signaling and gene expression changes.",
      "TB-500 — Cellular Migration and Actin Dynamics [2][5]. The synthetic active fragment of thymosin β4. Binds and sequesters monomeric G-actin to maintain a ready pool for rapid cytoskeletal remodeling — the cellular requirement for fibroblast, endothelial, and progenitor cell migration to injury sites. Also upregulates matrix metalloproteinases for ECM remodeling, mobilizes bone-marrow-derived stem cells, and supplies the anti-fibrotic Ac-SDKP fragment that biases healing toward functional tissue rather than scar.",
      "Complementary Pathways [3]. BPC-157 acts on PI3K/Akt, MAPK, and VEGF pathways; TB-500 acts on actin dynamics and integrin-mediated matrix remodeling. The two cascades are parallel but distinct — one builds the vascular substrate, the other delivers the cellular cargo. The result is broader tissue coverage than either compound alone produces, particularly across tendon, ligament, and post-surgical wound applications.",
      "Anti-Inflammatory Coverage. BPC-157 modulates nitric-oxide-mediated inflammation; TB-500 reduces inflammatory cytokine cascades and decreases apoptosis. The two anti-inflammatory mechanisms attack inflammation from different angles — useful for injury contexts where chronic NF-κB activation would otherwise impair healing.",
      "Reduced Scarring. TB-500's anti-fibrotic Ac-SDKP fragment and its ability to decrease myofibroblast numbers, paired with BPC-157's collagen-organizing growth factor profile, may reduce fibrotic scar formation compared to unassisted healing. This effect is documented in animal models but has not been quantified in controlled human trials.",
    ],
  },
  {
    id: "research",
    title: "What is the Wolverine Stack used for?",
    intro:
      "The Wolverine Stack is the most-studied recovery blend in research-grade peptide use. Its strongest applications are soft-tissue injuries where vascular reconstruction and cell migration are both rate-limiting — tendons, ligaments, muscle tears, and post-surgical recovery. None of the applications below come from controlled trials of the blend itself; they're extrapolated from each component's independent musculoskeletal and wound-healing literature.",
    body: [
      "Tendon and Ligament Repair [1][3]. Both peptides independently accelerate healing in Achilles, rotator-cuff, and other tendon-injury models. The combination is the most commonly studied pairing in musculoskeletal recovery research and the dominant Wolverine use case.",
      "Muscle Injury Recovery. BPC-157 accelerates functional recovery in crush-injury models; TB-500 promotes the cellular migration necessary for muscle fiber regeneration. The combination targets both signaling and structural recovery in muscle tears and overuse injuries.",
      "Wound Healing [5]. TB-500 demonstrated 42–61% improvement in wound healing rates versus controls in preclinical dermal models. BPC-157 adds growth factor support and anti-inflammatory modulation. Combined application is the rationale for post-surgical and post-procedure use.",
      "Post-Surgical Recovery. Frequently referenced in research protocols examining recovery from soft-tissue surgical procedures in animal models. The combination is also referenced in research-community discussions of recovery from joint arthroscopy and ligament reconstruction.",
      "Joint and Cartilage Support. Both peptides have been studied in cartilage damage models. BPC-157 promotes collagen synthesis; TB-500 supports cellular remodeling. Less central than the tendon/ligament use case, but established in research literature.",
      "Gastrointestinal Healing. BPC-157 has independent and substantial preclinical evidence in GI tract repair, ulcer healing, and inflammatory bowel models. TB-500 contribution to GI healing is less established. Researchers focused purely on GI work often run BPC-157 monotherapy rather than the Wolverine Stack.",
    ],
  },
  {
    id: "timeline",
    title: "How long does the Wolverine Stack take to work?",
    intro:
      "Wolverine Stack effects develop over a 6–8 week cycle. BPC-157's growth factor signaling and angiogenesis acts fast — markers shift within days. TB-500's loading phase (twice weekly for 4 weeks) is designed to build tissue saturation before transitioning to once-weekly maintenance. Most research participants and users report subjective improvement in injury sites by weeks 2–3, with functional recovery accumulating through weeks 6–8.",
    content:
      "Pre-blended Wolverine vials reach effective tissue exposure within the first week. For tendon and ligament work specifically, biomechanical strength and ultrastructural improvements typically lag the subjective &ldquo;feels better&rdquo; signal by 2–4 weeks. Off-cycle washout is typically 4–6 weeks before a second cycle if needed. Animal-model healing acceleration is typically 30–50% faster than untreated controls in tendon and dermal wound models.",
  },
  {
    id: "dosing",
    title: "How is the Wolverine Stack dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The Wolverine Stack is administered as subcutaneous injection. Because there is no clinically validated combination protocol, research-community dosing simply layers each peptide's standard individual protocol. BPC-157 is daily; TB-500 follows a load-then-maintain schedule that takes advantage of its longer half-life.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard research protocol:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">BPC-157.</span> 250–500 mcg subcutaneously once daily, every day of the cycle. Some users split into 2× daily 8–12 hours apart.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">TB-500 loading phase (Weeks 1–4).</span> 2.0–2.5 mg subcutaneously twice weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">TB-500 maintenance phase (Weeks 5–8).</span> 2.0 mg subcutaneously once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Total cycle.</span> 6–8 weeks active.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Off period.</span> 4–6 weeks before another cycle, if needed.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Abdomen, thigh, upper arm. BPC-157 can be injected near the injury site (within 0.5–1 inch) for localized work. TB-500 is typically given systemically.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Pre-blended formulations (research-grade vials)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Common SKUs.</span> Pre-blended Wolverine vials are sold as 10 mg total (5 mg BPC-157 + 5 mg TB-500) or 20 mg total (10 mg + 10 mg) at a fixed 1:1 ratio. The vial label shows the combined milligrams.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Reconstitution math.</span> Treat the combined milligrams as the vial size in the dosing calculator. A 10 mg vial reconstituted with 2 mL bacteriostatic water yields 5 mg/mL total — and because the ratio is 1:1, every drawn unit delivers equal cargo of each peptide. Drawing 0.1 mL gives 250 mcg BPC-157 + 250 mcg TB-500 in the same shot.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Pre-blended versus separate vials.</span> Pre-blended is more convenient and uses one injection per dose. Separate vials let researchers run non-1:1 ratios — for example, daily BPC-157 monotherapy with periodic TB-500 loading on top, which the pre-blend cannot do because the 1:1 ratio is locked. For protocols that follow the standard load-then-maintain pattern, the pre-blend is simpler.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Stepping up to GLOW or KLOW.</span> Researchers adding skin or collagen work step up to{" "}
            <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">GLOW</Link>{" "}
            (adds GHK-Cu). Those adding an inflammation-control layer step up to{" "}
            <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
            (adds KPV on top of GLOW).
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Wolverine Stack is not FDA-approved. Dosing is community-derived from each component's individual research literature — there are no approved retail dosing standards for the blend.
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
    title: "How is the Wolverine Stack administered?",
    intro:
      "The Wolverine Stack is administered by subcutaneous injection — under the skin, not into muscle — using a small insulin syringe. BPC-157 is daily; TB-500 follows its load-then-maintain schedule. Pre-blended vials combine both in a single shot; separate-vial protocols use two injections on TB-500 days.",
    body: [
      "Route. Subcutaneous injection. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.",
      "Time of day. Either consistent morning or bedtime injection works. Bedtime is a common choice to coincide with the body's natural overnight repair window.",
      "With or without food. Either is fine. Wolverine Stack components do not interact with food absorption.",
      "Site rotation. Alternate sites each injection. Stay at least 1 inch from previous injection sites — mild injection-site reactions are the most commonly reported side effect.",
      "Local injection for soft-tissue work. For tendon, ligament, or post-procedure recovery, BPC-157 is often injected within 0.5–1 inch of the affected area rather than at a distant rotation site. TB-500 is given systemically regardless.",
      "Reconstitution. Use bacteriostatic water for injection (BAC water) at the volume specified by the dosing calculator. Swirl gently — do not shake — to avoid damaging the peptides.",
      "Missed dose. For BPC-157 (daily), resume on the next scheduled day. For TB-500 (load or maintenance), shift the next scheduled dose by 1–2 days if needed. Do not double-dose.",
    ],
  },
  {
    id: "stacks",
    title: "What does the Wolverine Stack stack well with?",
    intro:
      "The Wolverine Stack is the 2-component baseline of the recovery-blend family. The cleanest additions are non-peptide (resistance training, protein) and stepping up to the 3-component GLOW or 4-component KLOW blend for additional skin or inflammation coverage. The thing to avoid is double-dosing BPC-157 or TB-500 by stacking with standalone protocols of either component.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GLOW blend (+ GHK-Cu).</span> Adds copper tripeptide for collagen, skin, and gene-expression effects on top of the Wolverine repair backbone. Use when skin or dermal recovery is a goal alongside tissue repair. See{" "}
          <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">GLOW &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">KLOW blend (+ GHK-Cu + KPV).</span> The most comprehensive recovery blend — adds GHK-Cu and KPV for skin remodeling and NF-κB-mediated inflammation control. Use when target tissue is chronically inflamed or post-procedure reactive. See{" "}
          <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH-class peptides (CJC-1295 + Ipamorelin, MK-677).</span> Adds growth hormone signaling for systemic anabolic and tissue-repair support. Theoretical synergy via increased IGF-1 levels. See{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">IGF-1 LR3.</span> Direct IGF-1 receptor activation paired with the local healing peptides. More aggressive systemic anabolic effect; combined cycles tend to be shorter (4–6 weeks). See{" "}
          <Link href="/peptides/igf-1-lr3" className="text-[#0891b2] hover:underline">IGF-1 LR3 &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + 1.2–1.6 g/kg protein.</span> Recommended baseline for any musculoskeletal recovery protocol. Mechanical loading is required for proper tendon and muscle remodeling — peptides accelerate the substrate but do not replace the load signal.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: full-dose standalone BPC-157 or TB-500.</span> The Wolverine Stack already contains both at meaningful doses. Stacking with standalone{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          or{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          protocols doubles the dose without independent benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of the Wolverine Stack?",
    intro:
      "Most reported Wolverine Stack side effects are mild and local — injection-site reactions, transient fatigue, mild gastrointestinal changes — consistent with what BPC-157 and TB-500 produce individually. There is no controlled trial of the combination, so all estimates come from each component's literature plus user reports. The most material concerns are theoretical mitogenic risk from compounded angiogenesis activity and the WADA prohibition for tested athletes.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection site reactions.</span> Redness, irritation, or transient pinkness. The most commonly reported side effect.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient fatigue.</span> Mild post-injection tiredness, typically resolving overnight. More commonly reported on TB-500 loading-dose days.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild GI changes.</span> Mild loose stool or appetite changes — reflects BPC-157 activity on gut signaling.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Typically mild, more common in the first 1–2 weeks of a cycle.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lightheadedness.</span> Usually transient and dose-related; often resolved with smaller TB-500 doses on loading days.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Local soreness at injection site for soft-tissue work.</span> Reported when BPC-157 is injected very close to a recently injured tendon or muscle. Usually transient.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical mitogenic risk.</span> Compounded angiogenesis activity from BPC-157 + TB-500 has not been formally evaluated for tumor stimulation in humans. No signals have appeared in animal or research-community human use, but the theoretical concern is the most-discussed serious risk for the combination.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping prohibitions.</span> Both BPC-157 and TB-500 are on the WADA prohibited list (Section S0). Tested athletes should not use the Wolverine Stack in any form.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical component-level concerns apply.</span> Each component has its own individual safety considerations — see the BPC-157 and TB-500 pages.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The combined safety profile of the Wolverine Stack has not been formally studied. Most evidence comes from individual peptide research plus research-community use reports. Both peptides have clean preclinical safety profiles individually.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does the Wolverine Stack interact with other drugs?",
    intro:
      "The Wolverine Stack has no well-documented systemic drug interactions. The theoretical concern most discussed in the research community is anticoagulant interaction — both BPC-157 and TB-500 are angiogenic, which could theoretically interact with warfarin or DOAC therapy, though no clinical events have been documented.",
    body: [
      "Anticoagulants (warfarin, DOACs). Theoretical concern from BPC-157 and TB-500 angiogenic activity. No documented clinical events in the research literature.",
      "Other GH-class peptides. Wolverine can be stacked with CJC-1295/Ipamorelin or MK-677 — no known interaction concern beyond cumulative GI side-effect risk.",
      "Component-level interaction profiles. Cross-reference the BPC-157 and TB-500 individual peptide pages for full per-component interaction details.",
      "Alcohol. No specific interaction documented. General hydration considerations apply for any peptide injection protocol.",
      "NSAIDs. Theoretical concern that chronic NSAID use could attenuate the inflammatory signaling required for tissue repair. Often discussed in the research-community context — researchers tracking healing markers sometimes restrict NSAID use during a Wolverine cycle.",
    ],
  },
  {
    id: "storage",
    title: "How should the Wolverine Stack be stored?",
    body: [
      "Lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated).",
      "Reconstituted solution: 2–8°C, use within 30 days.",
      "Reconstitution: bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze the reconstituted solution. Freezing damages the peptides and renders them inactive.",
      "Protect from light — store in the original container or amber vial.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Wolverine Stack research?",
    intro:
      "The Wolverine Stack is community-derived — no controlled trial has tested the two-peptide combination as a single product. All efficacy claims rest on each component's independent literature plus mechanistic reasoning about complementarity. Neither component is FDA-approved as an injectable, and the combination is uniformly prohibited in tested sport.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The Wolverine Stack is NOT FDA-approved. BPC-157 sits on the FDA Category 2 bulk drug substance list (research-only); TB-500 has no FDA approval. The two-peptide combination has no clinical trial evidence as a single product — synergy claims are based on mechanistic complementarity, not on a head-to-head comparison of the stack versus either component alone in humans.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most evidence is from animal models. BPC-157 has the most extensive preclinical literature of any research peptide, particularly in tendon and GI healing. TB-500 has strong animal-model data in dermal and cardiac healing. Controlled human trials of either compound are limited; controlled trials of the combination do not exist.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded blends are sold as &ldquo;research peptides.&rdquo; Quality varies dramatically by source. Third-party HPLC testing is strongly recommended — both for purity and to verify the labeled 1:1 ratio.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Both BPC-157 and TB-500 are on the WADA prohibited list (Section S0, peptide hormones and growth factors). Tested athletes should not use the Wolverine Stack in any form.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Wolverine Stack FAQ",
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
          Vasireddi N, Hahamyan H, Salata MJ, et al. Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review. HSS J. 2025.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Goldstein AL, Hannappel E, Sosne G, Kleinman HK. Thymosin β4: a multi-functional regenerative peptide. Expert Opin Biol Ther. 2012;12(1):37-51.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22074294/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22074294/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chang CH, Tsai WC, Lin MS, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol. 2011;110(3):774-80.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21030672/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21030672/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Hahm KB, Blagaic AB, et al. Stable Gastric Pentadecapeptide BPC 157 and Wound Healing. Front Pharmacol. 2021.{" "}
          <a href="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kleinman HK, Sosne G. Thymosin β4 Promotes Dermal Healing. Vitam Horm. 2016;102:53-70.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27450738/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27450738/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Rahman OF, Lee SJ, Seeds WA, et al. Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future Directions. J Am Acad Orthop Surg Glob Res Rev. 2026.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/
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
          The Wolverine Stack has no controlled trial as a combination. The studies below are the key peer-reviewed sources for each component's mechanism in musculoskeletal and wound-healing contexts — the empirical basis for the blend's mechanistic rationale.
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

export default function WolverineStackPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Wolverine Stack","description":"Wolverine Stack research profile: 2-component BPC-157 + TB-500 blend for tendon, ligament, and soft-tissue repair. Mechanism, dosing, side effects, FAQ.","url":"https://profpeptide.com/peptides/wolverine-stack","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Wolverine Stack"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Wolverine Stack</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 15, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> BPC-157/TB-500 Blend, Wolverine Stack, BPC-TB Stack
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Recovery &amp; Tissue Repair Blend (2-component)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research-grade only
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is the Wolverine Stack?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The Wolverine Stack is a research-grade 2-component peptide blend combining{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
            (Body Protection Compound) and{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
            (Thymosin Beta-4 fragment) in a single subcutaneous injection. Named for its association with rapid healing, it&apos;s the most established and widely sold of the recovery-focused peptide blends — pre-blended Wolverine has been on the research-grade market longer than any other combination product. The blend pairs BPC-157&apos;s vascular and growth-factor signaling with TB-500&apos;s actin-mediated cellular migration, targeting both the signaling that initiates tissue repair and the cellular mechanics that carry it out. Researchers stepping up to skin and inflammation coverage move to{" "}
            <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">GLOW</Link>{" "}
            (+ GHK-Cu) and{" "}
            <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
            (+ GHK-Cu + KPV).
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Accelerated tendon, ligament, and soft-tissue healing in preclinical injury models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Dual-pathway angiogenesis (VEGF signaling via BPC-157 + endothelial migration via TB-500)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Broader anti-inflammatory coverage via complementary NO-modulating and cytokine-cascade mechanisms</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved cellular migration and fibroblast delivery to injury sites</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased collagen synthesis paired with structural remodeling capacity</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced scar formation and fibrosis vs unassisted healing in animal models</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> BPC-157 250–500 mcg subcutaneously daily + TB-500 2.0–2.5 mg subcutaneously twice weekly (load, weeks 1–4) → 2.0 mg once weekly (maintenance, weeks 5–8). Pre-blended vials at 10 mg total (5 mg + 5 mg) or 20 mg total (10 mg + 10 mg) at fixed 1:1 ratio.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Sold pre-blended by some research peptide vendors and as separate vials by others. Neither component is FDA-approved. See{" "}
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
        {["Recovery", "Tissue Repair", "Anti-Inflammatory", "Combination Blend", "Preclinical"].map((tag) => (
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
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#0891b2] hover:underline">KPV</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/glow" className="text-sm font-medium text-[#0891b2] hover:underline">GLOW</Link>
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
    <ContactLink pageName="Wolverine Stack" pagePath="/peptides/wolverine-stack" />
    </div>
    </>
  );
}
