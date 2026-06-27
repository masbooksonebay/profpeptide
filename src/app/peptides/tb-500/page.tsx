import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/tb-500",
  title: "TB-500 — Thymosin Beta-4, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "TB-500 (Thymosin Beta-4 fragment) research profile: actin/cellular migration mechanism, dosing protocol, wound healing research, side effects, FAQ, and regulatory status.",
});

const faqs = [
  {
    q: "Is TB-500 the same as Thymosin Beta-4?",
    a: "Not exactly — TB-500 is a synthetic fragment of the full Thymosin Beta-4 protein. The fragment retains the active region responsible for cell migration and wound healing but is shorter (and easier to synthesize) than the 43-amino-acid full protein. Most research literature uses the terms interchangeably, though strict pharmacology references distinguish them.",
  },
  {
    q: "How is TB-500 different from BPC-157?",
    a: (
      <>
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
        works through growth factor signaling, nitric oxide modulation, and angiogenesis. TB-500 works through actin polymerization, cellular migration, and stem cell mobilization. The two are commonly stacked because their mechanisms are complementary rather than overlapping. See the{" "}
        <Link href="/compare/bpc-157-vs-tb-500" className="text-[#0891b2] hover:underline">BPC-157 vs TB-500 comparison</Link>{" "}
        for a side-by-side breakdown.
      </>
    ),
  },
  {
    q: "How long does TB-500 take to work?",
    a: "Initial effects are subtle and develop gradually. Wound healing acceleration is observed from the first week in animal studies. Most user protocols target a 6–8 week total cycle, with healing improvements becoming noticeable around weeks 2–4.",
  },
  {
    q: "Why is TB-500 dosed less frequently than BPC-157?",
    a: "TB-500 has a much longer half-life — estimated at multiple days in animal studies, vs under 30 minutes for BPC-157. This allows twice-weekly dosing to maintain therapeutic levels. The trade-off is that the per-dose amount is larger (2 mg vs 250 mcg).",
  },
  {
    q: "Is TB-500 safe?",
    a: "Animal safety data is clean. Two human Phase 2 trials reported good tolerability, though both were terminated for non-efficacy reasons. Long-term human safety data is absent. Theoretical concerns about angiogenesis and tumor stimulation have not been observed in animal or human studies.",
  },
  {
    q: "Can I stack TB-500 with BPC-157?",
    a: (
      <>
        Yes &mdash; this combination is called the{" "}
        <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
        and is the most-studied peptide pairing in tissue-repair research. The two work through complementary mechanisms:{" "}
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
        drives growth factor signaling and angiogenesis; TB-500 drives cellular migration and stem cell mobilization.
      </>
    ),
  },
  {
    q: "Where can I buy TB-500?",
    a: (
      <>
        TB-500 is sold by specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Thymosin Beta4 Accelerates Wound Healing",
    authors: "Malinda KM, Goldstein AL, Kleinman HK",
    journal: "Journal of Investigative Dermatology / PubMed",
    year: "1999",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/10469335/",
    summary: "The foundational study establishing Thymosin Beta-4 (the parent molecule of TB-500) as a potent wound healing factor. In a rat full-thickness wound model, Thymosin Beta-4 administered topically or systemically increased wound re-epithelialization by 42% at day 4 and 61% at day 7 compared to saline controls. Treated wounds also contracted at least 11% more than controls. The researchers found that even tiny concentrations (as little as 10 picograms) stimulated keratinocyte migration up to 300% above baseline in the Boyden chamber assay. This was the paper that first characterized Thymosin Beta-4 as a multi-activity wound healing compound with clinical potential.",
  },
  {
    title: "Thymosin Beta-4: A Multi-Functional Regenerative Peptide — Basic Properties and Clinical Applications",
    authors: "Goldstein AL, Hannappel E, Kleinman HK",
    journal: "Expert Opinion on Biological Therapy",
    year: "2012",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
    summary: "A landmark review establishing the scientific foundation for Thymosin Beta-4 clinical development. The paper documents the peptide’s multiple mechanisms — actin sequestration promoting cell migration, stem/progenitor cell mobilization to injury sites, angiogenesis stimulation, anti-inflammatory modulation, and reduction of myofibroblast activity (which reduces scarring). The review notes that these properties provide the scientific rationale for clinical trials in dermal wounds, corneal injuries, cardiac tissue regeneration after ischemic insult, and CNS trauma recovery. This review remains one of the most cited foundational papers for TB-500 research.",
  },
  {
    title: "Muscle Injury-Induced Thymosin Beta-4 Acts as a Chemoattractant for Myoblasts",
    authors: "Hara T, et al.",
    journal: "Journal of Biochemistry / PubMed",
    year: "2011",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/20880960/",
    summary: "This study specifically examined Thymosin Beta-4’s role in skeletal muscle regeneration — directly relevant to TB-500’s applications in sports recovery research. The researchers found that Tβ4 mRNA was upregulated in regenerating muscle fibers following injury, and that both Tβ4 and its sulphoxidized form significantly accelerated wound closure and increased chemotaxis (directed migration) of muscle progenitor cells (myoblasts) toward the injury site. The study established that Thymosin Beta-4 is not just a passive wound healing molecule but an active recruiter of the cells needed to rebuild damaged muscle tissue.",
  },
  {
    title: "Utilizing Developmentally Essential Secreted Peptides Such as Thymosin Beta-4 to Remind Adult Organs of Their Embryonic State — New Directions in Anti-Aging Regenerative Therapies",
    authors: "Maar K, et al.",
    journal: "PMC / Cells",
    year: "2021",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8228050/",
    summary: "A compelling 2021 review examining Thymosin Beta-4’s regenerative potential from a developmental biology perspective. The paper documents how Tβ4 is expressed at high levels during embryonic development across the heart, brain, limb buds, and muscles — and how supplementing adult tissue with Tβ4 may reactivate these developmental repair programs. It covers TB-500’s anti-inflammatory mechanism (blocking neutrophil chemotaxis, reducing cytochrome c release, decreasing caspase activation), its role in cardiac regeneration after ischemia, corneal wound healing, and its potential as an anti-aging therapeutic.",
  },
  {
    title: "Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future Directions",
    authors: "PMC Research Group",
    journal: "PMC / Journal of the American Academy of Orthopaedic Surgeons",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/",
    summary: "A 2025 review placing TB-500 in the broader context of therapeutic peptides for orthopaedic injuries. The paper summarizes TB-500’s mechanisms — actin polymerization promotion, progenitor cell recruitment, enhanced cellular migration, anti-inflammatory effects, and proangiogenic activity — and notes its parallels with BPC-157 in terms of tissue repair mechanisms. The review identifies TB-500 as one of several emerging peptides with potential for tendon and muscle repair applications, while acknowledging that formal clinical evidence in humans remains limited and that these compounds are being used ahead of regulatory approval.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does TB-500 work?",
    intro:
      "TB-500's primary mechanism is binding monomeric G-actin to maintain a ready pool for cytoskeletal remodeling — which is critical for cellular migration. Repair cells (fibroblasts, endothelial cells, keratinocytes, and bone marrow progenitor cells) migrate toward injury sites and rebuild tissue. TB-500 also stimulates angiogenesis, mobilizes stem cells, reduces inflammation through NF-κB modulation, and activates the Wnt/β-catenin pathway. These mechanisms are complementary to BPC-157's growth-factor-driven repair, which is why the two are commonly stacked.",
    body: [
      "Actin Sequestration [1]. TB-500's primary mechanism is binding monomeric G-actin and maintaining a ready pool for cytoskeletal remodeling. This is critical for cellular migration — moving repair cells (fibroblasts, endothelial cells, keratinocytes, and stem cells) toward injury sites.",
      "Angiogenesis Promotion [2]. TB-500 stimulates endothelial cell proliferation and tube formation, which builds new capillaries to supply oxygen and nutrients to healing tissue. This is the structural complement to BPC-157's growth factor-driven angiogenesis.",
      "Stem Cell Mobilization [3]. TB-500 mobilizes bone marrow stem and progenitor cells, increasing their migration to damaged areas. This is one of the mechanisms behind TB-500's effects in cardiac repair.",
      "Anti-inflammatory Effects [4]. TB-500 reduces inflammatory cytokine production by inhibiting NF-κB signaling. It also reduces apoptosis (cell death) in tissue under stress.",
      "Wnt/β-catenin Pathway Activation [5]. A 2024 study in cutaneous flap models showed TB-500 activates the Wnt/β-catenin pathway, which is one of the body's primary pathways for cell proliferation and tissue homeostasis. This explains how the peptide coordinates multiple repair processes simultaneously.",
    ],
  },
  {
    id: "research",
    title: "What is TB-500 used for?",
    intro:
      "TB-500's research evidence base spans dermal wound healing, cardiac repair after ischemia, corneal regeneration, musculoskeletal repair, hair growth, and inflammatory conditions. The dermal wound and cardiac evidence are the most established. Two RegeneRx-sponsored Phase 2 human trials (pressure ulcers, epidermolysis bullosa) were terminated for non-efficacy reasons, not safety. Most evidence remains preclinical.",
    body: [
      "Dermal Wound Healing [4][5]. Multiple animal studies show 42–61% improvement in wound healing rates vs controls. Effects include faster re-epithelialization, increased collagen deposition, and reduced scarring. Effects observed at very low concentrations (as little as 10 pg in laboratory models).",
      "Cardiac Repair [3]. A landmark 2007 Nature study (Bock-Marquette et al.) showed Thymosin Beta-4 was cardioprotective after myocardial infarction in animals. Subsequent research has explored TB-500 for heart attack recovery, with a small 2016 pilot study in humans showing safety of autologous Tβ4-pretreated stem cell therapy after STEMI.",
      "Corneal Wound Healing [6]. Strong preclinical evidence for corneal repair. RegeneRx Biopharmaceuticals took Thymosin Beta-4 through Phase 2 trials for dry eye and corneal wound healing in epidermolysis bullosa (NCT00311766, terminated for non-efficacy reasons).",
      "Musculoskeletal Repair. Animal studies show accelerated tendon, ligament, and muscle healing. The combination with BPC-157 (Wolverine Stack) is the most-studied pairing for musculoskeletal applications.",
      "Hair Growth [7]. A 2015 PLOS ONE study showed Thymosin Beta-4 induces hair growth in mice through stem cell mobilization. Limited human evidence.",
      "Inflammatory and Autoimmune Conditions. Animal studies in pressure ulcers (Phase 2 trial NCT00382161 by RegeneRx), epidermolysis bullosa, and various inflammatory conditions show wound healing benefits.",
    ],
  },
  {
    id: "timeline",
    title: "How long does TB-500 take to work?",
    intro:
      "TB-500 effects develop gradually over the first 2–4 weeks of consistent dosing. Initial doses produce minimal acute sensation. Wound healing acceleration is observed in animal studies starting from the first week of treatment. Most user protocols target a 6–8 week total cycle, with loading-phase improvements becoming noticeable around weeks 2–3.",
    content:
      "Initial doses produce minimal acute sensation. Wound healing acceleration is observed in animal studies starting from the first week of treatment. Most user protocols target a 6–8 week total cycle, with loading-phase improvements becoming noticeable around weeks 2–3. Cardiac and corneal applications follow similar timelines in animal models. As with BPC-157, mechanical context (loading on tendons, normal use of healing tissue) is necessary for proper remodeling — TB-500 mobilizes the repair cells but the tissue still has to be challenged to remodel correctly.",
  },
  {
    id: "dosing",
    title: "How is TB-500 dosed?",
    intro:
      "TB-500 is administered as a subcutaneous injection in a loading-then-maintenance pattern that mimics the original RegeneRx clinical trial protocols. Loading phase (weeks 1–4): 2.0–2.5 mg twice weekly. Maintenance phase (weeks 5–8): 2.0 mg once weekly. The longer half-life (multiple days in animal studies) is why twice-weekly dosing is sufficient — TB-500 is more expensive per dose than BPC-157 but cycle frequency is lower.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Loading phase (Weeks 1–4).</span> 2.0–2.5 mg subcutaneously twice weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Maintenance phase (Weeks 5–8).</span> 2.0 mg subcutaneously once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe injury / post-surgical.</span> Continue loading phase up to 6 weeks before transitioning to maintenance.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Total cycle length.</span> 6–8 weeks typical.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Off period.</span> 4–6 weeks before another cycle.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Half-life is longer than BPC-157 &mdash; estimated at multiple days in animal pharmacokinetic studies, which is why twice-weekly dosing is sufficient. TB-500 is more expensive per dose than BPC-157 because the per-dose amount is much larger (2 mg vs 250 mcg), but cycle frequency is lower.
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
    title: "How is TB-500 administered?",
    intro: (
      <>
        TB-500 is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; twice weekly during the loading phase and once weekly during maintenance, using a small insulin syringe. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Frequency.</span> Twice weekly during loading phase (weeks 1–4), then once weekly during maintenance (weeks 5–8). Many users inject the same days each week.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any consistent time. The multi-day half-life means time of day matters less than weekly consistency.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine; no fasting requirement.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each injection to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If a loading-phase dose is missed by less than 24 hours, take as soon as remembered. Otherwise skip and resume on the next scheduled day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 6–8 weeks on, 4–6 weeks off is the most common protocol.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> TB-500 is administered subcutaneously with a multi-day plasma half-life, so once- or twice-weekly dosing maintains stable therapeutic levels &mdash; very different from BPC-157&apos;s daily protocol. The two timing variables that matter most are weekly consistency (same days each week supports stable plasma levels) and cycle phase (loading frequency vs maintenance frequency are not interchangeable in the trial-derived protocol).
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Twice weekly (loading, weeks 1–4) → once weekly (maintenance, weeks 5–8)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any consistent time &mdash; multi-day half-life makes day-of-week consistency more important than time of day</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm &mdash; avoid same site twice within 2 weeks</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Multiple days (estimated from animal pharmacokinetic studies)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Reached within 2–3 weeks of loading-phase dosing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. TB-500 research vials are typically 5 mg. Because the per-dose amount is large (2 mg), 1–2 mL reconstitution is the common research convention &mdash; it keeps the syringe draw within insulin syringe capacity. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial &mdash; for a 10 mg vial, halve the unit values.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">0.5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2.5 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">80 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume &mdash; would require split injections or a lower reconstitution volume.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of TB-500 at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a 10 mg vial, double the mcg-per-unit values. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does TB-500 stack well with?",
    intro:
      "TB-500's most-studied pairing is with BPC-157 — the canonical Wolverine Stack for tissue repair. The two work through complementary mechanisms (growth factor signaling vs cellular migration) without overlapping side-effect profiles. Other natural pairings are GHK-Cu for dermal applications and GH secretagogues for systemic recovery research. Standalone use is also common, particularly for cardiac or corneal-specific applications where the trial-derived protocols are well-defined.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157 (Wolverine Stack).</span> The most popular pairing.{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          + TB-500 work through complementary mechanisms (growth factor signaling vs cellular migration). See the{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
          page for the combined protocol.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GHK-Cu.</span>{" "}
          <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
          combined for dermal applications and skin repair research. Different mechanisms with overlapping cell-migration effects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Natural pairing for musculoskeletal recovery research; mechanical loading is necessary for proper tissue remodeling.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH secretagogues.</span>{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          or the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          combined for systemic recovery research where growth hormone signaling supplements TB-500&apos;s cellular repair effects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> Also common, particularly for cardiac or corneal-specific research applications where the original Phase 2 protocols are well-defined.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of TB-500?",
    intro:
      "TB-500 has a clean safety profile in animal studies. RegeneRx's Phase 2 trials in pressure ulcers and epidermolysis bullosa (NCT00382161, NCT00311766) reported it was well-tolerated, though both trials were terminated for non-efficacy reasons (lack of patient availability, drug expiration). The most-reported user effects are mild injection-site reactions. Theoretical concerns about tumor stimulation from angiogenesis have not been observed in animal or human studies.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation, typically resolves within hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No common systemic effects.</span> Most users report no acute systemic side effects.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue during loading phase.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Slight nausea.</span> Uncommon.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Inconsistent across users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term human safety data limited.</span> No completed Phase 3 trials.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor stimulation risk.</span> Angiogenesis activity raises a theoretical concern for users with active malignancy, though no reports of this have appeared in animal or human studies.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare and not commonly reported.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          TB-500 has a clean safety profile in animal studies. RegeneRx&apos;s Phase 2 trials in pressure ulcers and epidermolysis bullosa (NCT00382161, NCT00311766) reported it was well-tolerated, though both trials were terminated for non-efficacy reasons (lack of patient availability, drug expiration). No completed Phase 3 human safety trials exist.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does TB-500 interact with other drugs?",
    intro:
      "TB-500 has no major drug interactions reported in animal studies. Theoretical anticoagulant interaction exists due to angiogenesis/vascular effects, but is not clinically validated. Generally considered safe to combine with other peptides — no contraindications established.",
    body: [
      "Anticoagulants. Theoretical concern due to TB-500's effects on angiogenesis and vascular function. Not clinically validated.",
      "Insulin and diabetes medications. No documented interactions.",
      "Other peptides. Generally considered safe to combine; no contraindications established.",
      "No major drug interactions reported in animal studies.",
    ],
  },
  {
    id: "storage",
    title: "How should TB-500 be stored?",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of TB-500 research?",
    intro:
      "TB-500 is not FDA-approved by any major regulatory body. Two RegeneRx Phase 2 trials (NCT00382161 for pressure ulcers, NCT00311766 for epidermolysis bullosa) were terminated for non-efficacy reasons, not safety concerns. Most evidence comes from animal models; human evidence is limited to small pilot studies and the terminated Phase 2 trials. The World Anti-Doping Agency prohibits TB-500 in sport under Section S2.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          TB-500 is not FDA-approved by any major regulatory body. Two RegeneRx Phase 2 trials (NCT00382161 for pressure ulcers, NCT00311766 for epidermolysis bullosa) were terminated for non-efficacy reasons (patient availability and drug expiration), not for safety concerns.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most evidence for TB-500 comes from animal models. Human evidence is limited to small pilot studies and the Phase 2 trials above. Long-term safety data is absent.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits TB-500 in sport under Section S2 (peptide hormones). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source TB-500",
    intro:
      "TB-500 is not FDA-approved and is sold by specialty research peptide vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "ascension-peptides" },
            { slug: "vital-core-research" },
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
    title: "TB-500 FAQ",
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
          Goldstein AL, Hannappel E, Sosne G, Kleinman HK. Thymosin β4: a multi-functional regenerative peptide. Expert Opin Biol Ther. 2012;12(1):37-51.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22074294/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22074294/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bock-Marquette I, Saxena A, White MD, et al. Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival, and cardiac repair. Nature. 2004;432(7016):466-72.{" "}
          <a href="https://www.nature.com/articles/nature03000" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nature.com/articles/nature03000
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Smart N, Risebro CA, Melville AA, et al. Thymosin beta4 induces adult epicardial progenitor mobilization and neovascularization. Nature. 2007;445(7124):177-82.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17108969/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17108969/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kleinman HK, Sosne G. Thymosin β4 Promotes Dermal Healing. Vitam Horm. 2016;102:53-70.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27450738/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27450738/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tao Y, et al. Thymosin β4 improves the survival of cutaneous flaps of rat and activates Wnt/β-catenin pathway. Arch Med Sci. 2024.{" "}
          <a href="https://www.archivesofmedicalscience.com/Thymosin-4-improves-the-survival-of-cutaneous-flaps-of-rat-and-activates-Wnt-catenin-pathway/183145/0/article.html" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.archivesofmedicalscience.com/Thymosin-4-improves-the-survival-of-cutaneous-flaps-of-rat-and-activates-Wnt-catenin-pathway/183145/0/article.html
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sosne G, Qiu P, Kurpakus-Wheater M, Wheater M. Thymosin beta-4 and corneal wound healing: visions of the future. Ann N Y Acad Sci. 2010;1194:190-8.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20536468/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20536468/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Gao X, Liang H, Hou F, et al. Thymosin Beta-4 Induces Mouse Hair Growth. PLoS One. 2015;10(6):e0130040.{" "}
          <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0130040" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0130040
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

export default function TB500Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"TB-500","description":"TB-500 (Thymosin Beta-4 fragment) research profile: actin/cellular migration mechanism, dosing protocol, wound healing research, side effects, FAQ, and regulatory status.","url":"https://profpeptide.com/peptides/tb-500","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Thymosin Beta-4 Fragment (Tβ4 17-23), TMSB4X
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Synthetic Tβ4 Fragment &mdash; Actin-Binding / Cellular Migration Peptide
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. WADA-prohibited (Section S2).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is TB-500?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            TB-500 is a synthetic fragment of Thymosin Beta-4 (Tβ4), a naturally occurring 43-amino-acid peptide found in virtually all mammalian cells. Unlike the full Thymosin Beta-4 protein, TB-500 is a shorter active fragment that&apos;s easier to synthesize and study. Researchers have studied it for over two decades, primarily for wound healing, cardiac repair, and corneal regeneration. It&apos;s commonly paired with{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
            in tissue-repair research protocols (the{" "}
            <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>
            ). New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Accelerated wound healing in dermal, corneal, and cardiac tissue (animal models)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Promotes new blood vessel formation (angiogenesis)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduces fibrosis and scarring during repair</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory effects through NF-κB pathway modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mobilizes stem and progenitor cells to injury sites</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pairs synergistically with BPC-157 in musculoskeletal repair research</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 2.0–2.5 mg subcutaneously twice weekly for the first 4 weeks (loading phase), then 2.0 mg once weekly for maintenance. Total cycle length is typically 6–8 weeks, followed by 4–6 weeks off.
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
        {["Tissue Repair", "Wound Healing", "Cardiac Research", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#0891b2] hover:underline">KPV</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#0891b2] hover:underline">MK-677</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
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

      <PageDisclaimer />
    <ContactLink pageName="TB-500" pagePath="/peptides/tb-500" />
    </div>
    </>
  );
}
