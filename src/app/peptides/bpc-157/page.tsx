import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/bpc-157",
  title: "BPC-157 — Body Protection Compound, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "BPC-157 research profile: tendon healing mechanism, dosing protocol, side effects, FDA Category 2 status, FAQ, and current regulatory status.",
});

const faqs = [
  {
    q: "Does BPC-157 actually heal injuries?",
    a: "In animal models, consistently yes — 30+ years of preclinical research show accelerated tendon, ligament, muscle, and gut tissue healing. In humans, evidence is anecdotal: user reports describe meaningful pain reduction and mobility improvements within 5–10 days, with structural healing over 2–8 weeks. No completed Phase 2 or 3 human trials have been published, so the magnitude of effect in humans is not formally established.",
  },
  {
    q: "How is BPC-157 different from TB-500?",
    a: (
      <>
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
        works through growth factor signaling, nitric oxide modulation, and angiogenesis.{" "}
        <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
        works through actin polymerization and cellular migration. The two are commonly stacked because their mechanisms are complementary rather than overlapping. See the{" "}
        <Link href="/compare/bpc-157-vs-tb-500" className="text-[#0891b2] hover:underline">BPC-157 vs TB-500 comparison</Link>{" "}
        for a side-by-side breakdown.
      </>
    ),
  },
  {
    q: "Should I inject near my injury or in my abdomen?",
    a: "For localized injuries (tendons, joints, muscle bellies), injecting near the injury site (within 0.5–1 inch) tends to produce stronger effects in animal models. For systemic effects (gut healing, general recovery), abdominal subcutaneous injection is standard. Both routes work; localized is preferred when the injury is at a specific site.",
  },
  {
    q: "Is BPC-157 safe long-term?",
    a: "Animal studies have not identified a toxic dose across 30+ years of research, which is unusual for any compound. However, no completed long-term human safety trials exist. Most user protocols use 4–8 week cycles followed by 4+ week off periods rather than continuous use, both for safety conservatism and to maintain effectiveness.",
  },
  {
    q: "Can I take BPC-157 orally?",
    a: "Yes, for gut-related applications. BPC-157 is unusually stable in gastric acid, which allows it to remain active when taken orally. For tendon, joint, or muscle injuries, injection is significantly more effective because oral bioavailability for systemic effects isn't well established.",
  },
  {
    q: "Why did the FDA restrict BPC-157?",
    a: "In 2023, the FDA classified BPC-157 as a Category 2 bulk drug substance, citing concerns about peptide impurities, lack of completed human safety trials, and safety risks. This restricts its availability through compounding pharmacies in the US. It can still be sold as a research-grade peptide for laboratory use.",
  },
  {
    q: "What's the typical cycle?",
    a: "Most users run 4–8 week cycles followed by 4+ week breaks. Chronic conditions or post-surgical recovery sometimes use 8–12 week cycles. Continuous long-term use isn't well studied. The Huberman protocol recommends 8 weeks on, 8–10 weeks off.",
  },
  {
    q: "Where can I buy BPC-157?",
    a: (
      <>
        BPC-157 is sold by specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing",
    authors: "Sikiric P, Seiwerth S, Rucman R, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2021",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full",
    summary: "One of the most comprehensive reviews of BPC-157’s wound healing properties, covering over 25 years of research. The review documents BPC-157’s ability to heal skin wounds, burns, diabetic ulcers, and complex fistulas in animal models through a combination of mechanisms — promoting angiogenesis (new blood vessel growth), stimulating collagen deposition, modulating the nitric oxide system, and accelerating re-epithelialization. A key finding is that BPC-157 appears to work regardless of administration route (oral, topical, or injected) and at the same effective dose range across different injury types — an unusual property that suggests it acts on fundamental repair pathways.",
  },
  {
    title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
    authors: "Vasireddi N, Hahamyan H, Salata MJ, et al.",
    journal: "HSS Journal / PMC",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
    summary: "The most current systematic review of BPC-157 specifically for musculoskeletal injuries — covering 36 studies from 1993 to 2024. The review found consistent evidence in animal models for BPC-157 promoting healing of muscle, tendon, ligament, and bone injuries by upregulating growth factors and reducing inflammation. Notably, one human study found 7 out of 12 patients with chronic knee pain reported relief lasting over 6 months after a single BPC-157 knee injection. The authors concluded that while results are promising, risks exist due to unregulated manufacturing and the absence of formal human clinical safety data.",
  },
  {
    title: "Multifunctionality and Possible Medical Application of the BPC 157 Peptide — Literature and Patent Review",
    authors: "Gwyer D, et al.",
    journal: "Pharmaceuticals (MDPI)",
    year: "2025",
    access: "Open Access",
    url: "https://www.mdpi.com/1424-8247/18/2/185",
    summary: "A comprehensive literature and patent review summarizing BPC-157’s broad biological activities across tissue types. The review covers its effects on the GI tract, liver, pancreas, heart, and nerves — along with musculoskeletal repair. It addresses the regulatory status directly: BPC-157 was temporarily banned by WADA in 2022 (no longer listed as banned), has not been FDA approved due to the absence of comprehensive human clinical trials, and had a Phase 1 human trial initiated in 2015 that was cancelled before results were submitted. The review calls for more extensive human-oriented studies to establish therapeutic and toxicity profiles.",
  },
  {
    title: "Brain-Gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications",
    authors: "Sikiric P, et al.",
    journal: "Current Neuropharmacology / PMC",
    year: "2016",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/",
    summary: "This review examines BPC-157’s effects on the gut-brain axis — the bidirectional communication network between the gastrointestinal tract and the central nervous system. The paper documents BPC-157’s success in treating GI conditions including ulcerative colitis, liver lesions, and gut fistulas, as well as its corresponding effects on the brain — including anxiolytic, antidepressant, and neuroprotective properties in animal models. This study is the basis for BPC-157’s reputation as both a gut-healing peptide and a potential CNS-protective compound — two seemingly unrelated applications that connect through the gut-brain axis.",
  },
  {
    title: "BPC-157 as an Emerging Adjunct to Gastrointestinal Therapies — A Systematic Review",
    authors: "American College of Gastroenterology Research Group",
    journal: "American Journal of Gastroenterology (ACG)",
    year: "2025",
    access: "Abstract available",
    url: "https://journals.lww.com/ajg/fulltext/2025/10002/s808_oral_peptide_bpc_157_an_emerging_adjunct_to.809.aspx",
    summary: "A 2025 systematic review from gastroenterology specialists examining BPC-157’s potential for GI conditions — including mucosal protection, wound healing, inflammatory bowel disease, and NSAID-induced GI injury. The reviewers concluded that BPC-157 shows promise from preclinical studies for a range of GI pathologies, but that its use remains investigational and should not yet be considered standard evidence-based therapy. The review represents mainstream gastroenterology’s first formal acknowledgment of BPC-157’s potential clinical relevance.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does BPC-157 work?",
    intro:
      "BPC-157 works through angiogenesis (new blood vessel formation), growth factor modulation, the FAK-paxillin pathway for tendon-to-bone healing, bidirectional nitric oxide modulation, and gut-brain axis effects on neurotransmitter systems. The angiogenesis and growth factor pathways are the most-established mechanisms across 30+ years of animal research. The fact that BPC-157 works regardless of administration route (injection, oral, topical) suggests it acts on fundamental repair pathways rather than route-specific signaling.",
    body: [
      "Angiogenesis Promotion [1]. BPC-157 upregulates vascular endothelial growth factor (VEGF) and endothelial nitric oxide synthase (eNOS), which stimulate new blood vessel formation. This improves oxygen and nutrient delivery to injured tissue and is a primary mechanism for accelerated wound healing.",
      "Growth Factor Modulation [2]. BPC-157 increases expression of EGR-1 and other growth factors that drive fibroblast proliferation and collagen synthesis. Fibroblasts are the cells responsible for rebuilding connective tissue after injury.",
      "FAK-Paxillin Pathway Activation [3]. In tendon and ligament tissue, BPC-157 activates the FAK-paxillin signaling pathway, which enhances tendon-to-bone insertion strength and improves collagen organization during repair.",
      "Nitric Oxide Modulation [4]. BPC-157 modulates nitric oxide synthesis bidirectionally — upregulating eNOS in vascular tissue while attenuating excessive iNOS activity in inflammatory states. This provides anti-inflammatory effects without compromising vascular function.",
      "Gut-Brain Axis Effects [5]. BPC-157 interacts with dopaminergic and serotonergic neurotransmitter systems, which is why animal studies show neuroprotective effects in models of Parkinson's disease, depression, and traumatic brain injury alongside its gut-healing effects.",
    ],
  },
  {
    id: "research",
    title: "What is BPC-157 used for?",
    intro:
      "BPC-157's research evidence base spans tendon and ligament repair, muscle injury recovery, gastrointestinal protection, bone healing, and CNS/peripheral nerve repair. The gastrointestinal evidence is the most established (BPC-157 was originally isolated from gastric juice protective protein). The musculoskeletal data is the most popular application, with a 2025 systematic review (Vasireddi et al.) analyzing 36 studies. No completed Phase 2 or 3 human trials exist for any application.",
    body: [
      "Tendon and Ligament Repair [3][6]. Multiple rat studies show 30–50% faster Achilles tendon and rotator cuff healing. A 2025 systematic review in Sports Health analyzed 36 studies and found consistent benefits across musculoskeletal models.",
      "Muscle Injury Recovery [7]. Crush-injury and blunt-force models show accelerated functional recovery. BPC-157 supports muscle fiber regeneration and reduces fibrotic scar formation.",
      "Gastrointestinal Protection [5][8]. The most established research area. BPC-157 protects against NSAID-induced gastric lesions, accelerates ulcer healing, supports inflammatory bowel disease (IBD) models, and promotes intestinal anastomosis healing after surgery.",
      "Bone Healing. Fracture models demonstrate improved mineralization rates and faster bone callus formation.",
      "CNS and Peripheral Nerve Repair [9]. Sciatic nerve transection, spinal cord crush, and traumatic brain injury models show accelerated recovery. BPC-157 also reverses dopamine depletion behaviors in Parkinson's models.",
      "Phase 1 Human Trial. NCT02637284 was a Phase 1 safety and pharmacokinetics trial of oral BPC-157 (PCO-02). The trial is registered but no peer-reviewed results have been published.",
    ],
  },
  {
    id: "timeline",
    title: "How long does BPC-157 take to work?",
    intro:
      "BPC-157 effects develop over time. Most users report no immediate sensation. Pain reduction and improved mobility commonly appear within 5–10 days when dosing is consistent. Tendon, ligament, and structural healing improvements typically emerge over 2–8 weeks. Gut protocols often produce noticeable digestive improvements within the first week. Effects are reported to be more pronounced when injected near the site of injury for localized soft-tissue applications.",
    content:
      "Most users report no immediate sensation in the first few days. Pain reduction and improved mobility commonly appear within 5–10 days when dosing is consistent. Tendon, ligament, and structural healing improvements typically emerge over 2–8 weeks. Gut protocols often produce noticeable digestive improvements within the first week — consistent with BPC-157's strongest evidence base being gastrointestinal. Effects are reported to be more pronounced when injected near the site of injury for localized soft-tissue applications.",
  },
  {
    id: "dosing",
    title: "How is BPC-157 dosed?",
    intro:
      "BPC-157 is administered by subcutaneous injection or oral dosing. Injection produces stronger systemic effects and is preferred for musculoskeletal injuries. Oral dosing is preferred for gastrointestinal applications because BPC-157's unusual gastric acid stability allows it to act locally on gut tissue. Standard injectable dosing is 250 mcg once or twice daily; higher protocols use 500 mcg once or twice daily for severe injuries or post-surgical recovery.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard injectable.</span> 250 mcg subcutaneously once daily, or 250 mcg twice daily for stronger effect.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Higher injectable.</span> 500 mcg once or twice daily for severe injuries or post-surgical recovery.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Localized injection.</span> Injecting subcutaneously near the injury site (tendon, joint capsule, muscle belly) is more effective for localized injuries than abdominal injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weight-based reference.</span> Research literature uses 2.5–3.75 mcg/kg twice daily &mdash; for most adults this is 300–400 mcg/day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 4–8 weeks for routine recovery; up to 12 weeks for chronic conditions or post-surgical protocols.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral dosing.</span> 250–500 mcg once or twice daily on an empty stomach for gut-related research.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Plasma half-life is under 30 minutes, but biological effects extend well beyond plasma clearance &mdash; likely due to local tissue depot activity and downstream gene expression changes. Dose titration is common, starting at 250 mcg daily and increasing as tolerated. The Huberman protocol recommends 300–500 mcg subcutaneously, two to three times per week for 8 weeks, followed by an 8–10 week off period.
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
    title: "How is BPC-157 administered?",
    intro: (
      <>
        BPC-157 is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; once or twice daily during the cycle, using a small insulin syringe. For localized injuries (tendons, joints, muscle bellies), injecting near the injury site (within 0.5–1 inch) tends to produce stronger effects than abdominal injection. Oral formulations are an alternative for gut-related applications. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection for systemic effects, or near the injury site for localized injuries (tendons, joints, muscle bellies). Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Morning or post-workout is most common in user protocols. Some users prefer pre-bed for overnight repair.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Subcutaneous BPC-157 is unaffected by food. Oral BPC-157 is best on an empty stomach.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each day to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Localized injection.</span> For tendon or joint injuries, inject 0.5–1 inch from the injured area. Avoid injecting directly into the tendon or joint space.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If less than 12 hours late, take as soon as remembered. Otherwise skip and resume on the next scheduled day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> Most users run 4–8 week cycles followed by 4+ week off periods. Continuous use is not well-studied.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> BPC-157 has a plasma half-life under 30 minutes, but biological effects extend well beyond plasma clearance &mdash; likely due to local tissue depot activity and downstream gene expression changes. The two timing variables that matter most are daily consistency (effects accumulate over the cycle, not via single injections) and proximity to injury (localized injection 0.5–1 inch from the injured area produces stronger localized effects than abdominal injection).
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once or twice daily during the cycle (4–8 weeks on, 4+ weeks off)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any consistent time &mdash; morning or post-workout is common; pre-bed for overnight repair</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">SubQ: no requirement. Oral: empty stomach.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Localized near injury (0.5–1 inch from site) for soft-tissue injuries; abdomen/thigh/upper arm for systemic effects</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">&lt;30 minutes (plasma) &mdash; biological effects persist via tissue depot and gene-expression changes</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Effects accumulate over the cycle rather than via plasma steady-state &mdash; 5–10 days for early effects, 2–8 weeks for structural healing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. BPC-157 research vials are typically 5 mg. Because BPC-157 doses are small (250–500 mcg per injection), 2 mL reconstitution is the common research convention &mdash; it gives clean whole-number units across the typical dose range. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">500 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">750 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">45 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of BPC-157 at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does BPC-157 stack well with?",
    intro:
      "BPC-157 pairs naturally with TB-500 (the canonical Wolverine Stack — mechanistically complementary recovery effects), GHK-Cu for combined skin/connective tissue repair, and KPV for inflammatory bowel research where BPC-157 provides healing and KPV provides anti-inflammatory effects. The most important non-peptide pairing is resistance training — mechanical loading is necessary for proper tendon and muscle remodeling during the healing window BPC-157 opens.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> The most common research protocol. BPC-157 produces meaningful healing effects on its own across multiple tissue types.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">TB-500 (Wolverine Stack).</span> The most popular pairing for musculoskeletal recovery.{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          +{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          work through complementary mechanisms (growth factor signaling vs cellular migration). See the{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
          page for the combined protocol.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GHK-Cu.</span>{" "}
          <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
          combined for skin and connective tissue repair. Different mechanisms with theoretical synergy. See the{" "}
          <Link href="/compare/bpc-157-vs-ghk-cu" className="text-[#0891b2] hover:underline">BPC-157 vs GHK-Cu comparison</Link>{" "}
          for protocol differences.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">KPV.</span>{" "}
          <Link href="/peptides/kpv" className="text-[#0891b2] hover:underline">KPV</Link>{" "}
          combined for inflammatory bowel research protocols where BPC-157 provides healing and KPV provides anti-inflammatory effects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GHRPs (CJC-1295, Ipamorelin).</span>{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          (CJC-1295 + Ipamorelin) combined for systemic recovery research where growth hormone signaling supplements BPC-157&apos;s local healing effects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Natural pairing for athletic recovery research; mechanical loading is necessary for proper tendon and muscle remodeling during the healing window.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of BPC-157?",
    intro:
      "BPC-157 has one of the cleanest safety profiles of any research peptide in animal studies — researchers have not identified a toxic dose (no LD1) in tested species across 30+ years of research. However, no completed human safety trials confirm long-term safety in humans. The most-reported user effects are mild injection-site reactions and occasional mild dizziness on initial doses. The FDA classified BPC-157 as a Category 2 bulk drug substance in 2023, restricting compounding-pharmacy availability.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation, typically resolves within hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No common systemic side effects.</span> Animal studies have not identified consistent systemic adverse effects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Most users report no acute side effects.</span> Subjective tolerance is generally excellent.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild dizziness on initial doses.</span> Uncommon, typically resolves with continued use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Slight heart rate changes.</span> Uncommon; consistent with BPC-157&apos;s vascular effects.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term human safety data absent.</span> No completed Phase 2 or 3 trials. Human safety beyond reported user protocols is not formally validated.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor stimulation risk.</span> Angiogenesis activity raises a theoretical concern for users with active malignancy, though no reports of this have appeared in animal or human studies.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare and not commonly reported.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 has one of the cleanest safety profiles of any research peptide in animal studies &mdash; researchers have not identified a toxic dose (no LD1) in tested species across 30+ years of research. However, no completed human safety trials confirm long-term safety in humans. The FDA classified BPC-157 as a Category 2 bulk drug substance in 2023, restricting its availability through compounding pharmacies.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does BPC-157 interact with other drugs?",
    intro:
      "BPC-157 has no major drug interactions reported in animal studies. The most notable interaction is with NSAIDs — BPC-157 protects against NSAID-induced gut damage in animal models, so the combination is actively studied as a therapeutic pairing rather than avoided. Theoretical anticoagulant interaction exists due to angiogenesis/vascular effects, but is not clinically validated.",
    body: [
      "NSAIDs. BPC-157 protects against NSAID-induced gut damage in animal models. The combination is studied directly rather than avoided.",
      "Anticoagulants. Theoretical concern due to BPC-157's effects on angiogenesis and vascular function. Not clinically validated.",
      "Insulin and diabetes medications. No documented interactions.",
      "No major drug interactions reported in animal studies.",
    ],
  },
  {
    id: "storage",
    title: "How should BPC-157 be stored?",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Inject solvent slowly against the glass wall of the vial. Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton.",
      "Solution should be clear and colorless. Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of BPC-157 research?",
    intro:
      "BPC-157 is not FDA-approved and is classified as a Category 2 bulk drug substance, meaning it cannot be compounded by commercial pharmacies in the US (2023 restriction). Almost all efficacy evidence is from rodent models — no completed Phase 2 or 3 human trials exist. Much of the published research originates from a single Croatian research group (Sikiric et al.), creating concentration-of-source bias. BPC-157 was temporarily WADA-prohibited in 2022 but is no longer on the WADA list.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 is not FDA-approved and is classified as a Category 2 bulk drug substance, meaning it cannot be compounded by commercial pharmacies in the US. This restriction was finalized in 2023.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Almost all evidence for BPC-157 is from rodent models. No completed Phase 2 or Phase 3 human clinical trials exist. A Phase 1 safety and pharmacokinetics trial (NCT02637284) was registered but published peer-reviewed results are not available.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Much of the published research originates from a single Croatian research group (Sikiric et al.), creating concentration-of-source bias. Independent replication is limited.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 was temporarily WADA-prohibited in 2022 but is no longer on the WADA list as of the most recent prohibited-list updates. Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source BPC-157",
    intro:
      "BPC-157 is not FDA-approved and cannot be compounded by commercial pharmacies in the US (Category 2 bulk drug substance, 2023). Research-grade material is sold by specialty peptide vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes — and span both injectable and oral format options for the GI research use case.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "integrative-peptides", note: "Oral capsules & spray — no injection needed" },
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
    title: "BPC-157 FAQ",
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
          Seiwerth S, Rucman R, Turkovic B, et al. BPC 157 and standard angiogenic growth factors. Curr Pharm Des. 2018;24(18):1972-1989.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29998800/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29998800/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tkalcevic VI, Cuzic S, Brajsa K, et al. Enhancement by PL 14736 of granulation and collagen organization in healing wounds and the potential role of egr-1 expression. Eur J Pharmacol. 2007;570(1-3):212-21.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17628536/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17628536/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chang CH, Tsai WC, Lin MS, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol. 2011;110(3):774-80.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21030672/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21030672/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hsieh MJ, Liu HT, Wang CN, et al. Therapeutic potential of pro-angiogenic BPC157 is associated with VEGFR2 activation and up-regulation. J Mol Med (Berl). 2017;95(3):323-333.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27847966/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27847966/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Seiwerth S, Rucman R, et al. Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications. Curr Neuropharmacol. 2016;14(8):857-865.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          McGuire FP, Martinez R, Lenz A, et al. Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Health. Curr Rev Musculoskelet Med. 2025.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Staresinic M, Petrovic I, Novinscak T, et al. Effective therapy of transected quadriceps muscle in rat: Gastric pentadecapeptide BPC 157. J Orthop Res. 2006;24(5):1109-17.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16609979/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16609979/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vukojevic J, Milavic M, Perovic D, et al. Pentadecapeptide BPC 157 and the central nervous system. Neural Regen Res. 2022;17(3):482-487.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/34380875/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/34380875/
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

export default function BPC157Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"BPC-157","description":"BPC-157 research profile: tendon healing mechanism, dosing protocol, side effects, FDA Category 2 status, FAQ, and current regulatory status.","url":"https://profpeptide.com/peptides/bpc-157","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"BPC-157"}]}} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2d3d] dark:text-slate-100 tracking-tight">BPC-157</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: May 23, 2026
      </p>

      {/* Quick Facts — key facts already present on this page, in a scannable grid */}
      <section aria-label="Quick Facts" className="panel-card mb-10 overflow-hidden">
        <div className="px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[#1e2d3d] dark:text-slate-100 mb-3">
            Quick Facts
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">What it is</dt>
              <dd className="text-sm text-[#1e2d3d] dark:text-slate-200">A lab-made 15-amino-acid peptide studied for wound healing, tendon and tissue repair, and gut protection.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#1e2d3d] dark:text-slate-200">Subcutaneous injection, or oral for gut-related use</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#1e2d3d] dark:text-slate-200">Under 30 minutes (plasma)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#1e2d3d] dark:text-slate-200">250&ndash;500 mcg, once or twice daily, in 4&ndash;8 week cycles</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#1e2d3d] dark:text-slate-200">Not FDA-approved &mdash; for research use only. Restricted from US compounding pharmacies (FDA Category 2, 2023). Not currently banned by WADA.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Also known as</dt>
              <dd className="text-sm text-[#1e2d3d] dark:text-slate-200">Body Protection Compound-157, BPC 15, Pentadecapeptide BPC 157, PL 14736</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">

      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is BPC-157?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            BPC-157 is a 15-amino-acid synthetic peptide derived from a protective protein found in human gastric juice. Researchers have studied it for over 30 years for its remarkable wound healing, tendon repair, and gut protection effects in animal models. Despite 544+ published research articles between 1993 and 2024, no Phase 2 or Phase 3 human clinical trials have been completed. It remains one of the most popular research peptides for soft tissue recovery, with a notable safety profile and unusual stability across a wide pH range. Often paired with{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
            as the{" "}
            <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
            for musculoskeletal recovery, or with{" "}
            <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
            for combined connective-tissue repair. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Accelerated tendon, ligament, and muscle healing in animal models (often 30–50% faster)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gastroprotection against NSAIDs, alcohol, and stress-induced ulcers</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced systemic inflammation markers</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stable across wide pH range (1–11), allowing oral and injectable delivery</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved peripheral nerve recovery in crush-injury models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reported reduction in pain and improved mobility within 5–10 days in user reports</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 250–500 mcg subcutaneously once or twice daily. Typical cycle length is 4–8 weeks, sometimes extended to 12 weeks for chronic conditions. Oral formulations exist for gut-related research, though injectable produces stronger systemic effects.
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

      {/* Accent-rule divider between each major (TOC-anchored) section.
          Overview above is section 0 (no rule). */}
      {sections.map((s) => (
        <div
          key={s.id}
          id={s.id}
          className="scroll-mt-24 mt-12 border-t-2 border-brand/30 pt-12"
        >
          <h2 className="section-heading mb-3">
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

      <div className="flex flex-wrap gap-2 mt-8">
        {["Tissue Repair", "Tendon Healing", "Gut Protection", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">TB-500</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#0891b2] hover:underline">KPV</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#0891b2] hover:underline">GH Stack</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/bpc-157-vs-tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157 vs TB-500 &rarr;</Link>
        <Link href="/compare/bpc-157-vs-ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157 vs GHK-Cu &rarr;</Link>
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
    <ContactLink pageName="BPC-157" pagePath="/peptides/bpc-157" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
      </div>
    </>
  );
}
