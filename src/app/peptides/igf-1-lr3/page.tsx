import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/igf-1-lr3",
  title: "IGF-1 LR3 — Long R3 IGF-1 Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "IGF-1 LR3 research profile: PI3K/Akt mechanism, dosing protocol, hypoglycemia risk, satellite cell activation, FAQ, and current regulatory status.",
});

const faqs = [
  {
    q: "How is IGF-1 LR3 different from native IGF-1?",
    a: "Native IGF-1 has a half-life of minutes because it's rapidly bound and deactivated by IGF binding proteins (IGFBPs). IGF-1 LR3 has two structural modifications — an arginine substitution at position 3 and a 13-amino-acid N-terminal extension — that drastically reduce IGFBP binding. The result: 20–30 hour half-life and ~3x greater potency than native IGF-1.",
  },
  {
    q: "Does IGF-1 LR3 cause hyperplasia (new muscle fibers)?",
    a: "Animal studies show IGF-1 LR3 stimulates satellite cell proliferation, which is the cellular basis for hyperplasia (new muscle fiber formation). Hyperplasia is rare among muscle-building compounds — most drive hypertrophy (existing fiber growth) only. Whether this translates to meaningful new fiber formation in adult humans is not formally established, but the satellite cell mechanism is consistent across species.",
  },
  {
    q: "Why do I need to eat with IGF-1 LR3?",
    a: "IGF-1 LR3 has insulin-like effects on glucose uptake, which can cause significant blood sugar drops if injected without food. Always inject within 30 minutes of a meal containing protein and carbohydrates. Hypoglycemia symptoms (shakiness, sweating, confusion) are the most common adverse effect when this guideline isn't followed.",
  },
  {
    q: "Should I inject post-workout or pre-workout?",
    a: "Post-workout is the standard approach. Resistance training creates a temporary spike in growth hormone and increases IGF-1 receptor sensitivity in worked muscles. Injecting within 30–60 minutes post-workout capitalizes on this window. Research suggests post-workout IGF-1 administration increases muscle protein synthesis rates by an additional ~35% vs rest-day administration.",
  },
  {
    q: "Do I need post-cycle therapy (PCT)?",
    a: "No. IGF-1 LR3 doesn't suppress natural testosterone or growth hormone production, so PCT is unnecessary. The only post-cycle consideration is the 4-week off period to allow IGF-1 receptor sensitivity to reset.",
  },
  {
    q: "Can IGF-1 LR3 be stacked with steroids?",
    a: "Theoretically yes — they work through different mechanisms (IGF-1 receptor vs androgen receptor). However, this combination significantly increases overall side effect risk and isn't supported by controlled human data. Mainstream peptide research focuses on IGF-1 LR3 as a standalone or paired with other peptides (GH secretagogues, Follistatin) rather than steroids.",
  },
  {
    q: "Can IGF-1 LR3 be stacked with Follistatin?",
    a: (
      <>
        Yes &mdash; this is one of the most mechanistically complementary stacks.{" "}
        <Link href="/peptides/follistatin" className="text-[#0891b2] hover:underline">Follistatin</Link>{" "}
        removes the myostatin growth ceiling; IGF-1 LR3 provides the growth signal that pushes against it. Often combined in advanced muscle-building protocols, sometimes alongside GH secretagogues. Side-effect risk compounds &mdash; careful cycling and dose titration are essential.
      </>
    ),
  },
  {
    q: "Is IGF-1 LR3 safe long-term?",
    a: "Limited human safety data exists. The most well-documented concerns are hypoglycemia risk during use and theoretical risk of accelerated tumor growth in users with cancer history. Most users follow 4–6 week cycles with 4+ week breaks rather than continuous use, both for safety conservatism and to maintain receptor sensitivity.",
  },
  {
    q: "Where can I buy IGF-1 LR3?",
    a: (
      <>
        IGF-1 LR3 is sold by specialty research peptide vendors. Counterfeit and underdosed product is common &mdash; verify Certificate of Analysis before purchase. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Optimizing IGF-I for Skeletal Muscle Therapeutics",
    authors: "Rodino-Klapac LR, Mendell JR, Sahenk Z",
    journal: "PMC / Molecular Therapy",
    year: "2015",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4665094/",
    summary: "A comprehensive review of IGF-1 and its analogs for muscle therapeutic applications, directly relevant to understanding IGF-1 LR3’s research context. The paper examines how structural modifications to native IGF-1 — including those that produced IGF-1 LR3 — affect its biological activity, binding protein interactions, and therapeutic potential. It covers the PI3K/Akt/mTOR signaling cascade that drives muscle protein synthesis and explains why reduced binding to IGF-binding proteins (IGFBPs) — IGF-1 LR3’s key modification — produces more sustained and potent anabolic signaling than native IGF-1.",
  },
  {
    title: "IGF-1 LR3 — Properties, Mechanisms, and Applications in Muscle Physiology",
    authors: "The Peptide University Research Team",
    journal: "The Peptide University",
    year: "2026",
    access: "Open Access",
    url: "https://thepeptideuniversity.com/blogs/articles/igf-1-lr3-properties-mechanisms-and-applications-in-muscle-physiology",
    summary: "A detailed mechanistic overview of IGF-1 LR3’s action in skeletal muscle. The paper explains how IGF-1 LR3 activates the IGF-1 receptor (IGF-1R), triggering two key downstream cascades — the PI3K/Akt/mTOR pathway (driving protein synthesis and hypertrophy) and the MAPK/ERK pathway (driving cell proliferation and differentiation). It also covers IGF-1 LR3’s nutrient partitioning effects — preferentially directing glucose and amino acids toward muscle tissue rather than fat — and its role in satellite cell activation critical for muscle repair.",
  },
  {
    title: "IGF-1 and Long Chain IGF (LR3IGF-1) — Doping Biology and Pharmacology",
    authors: "Seppälä T — Finnish Center for Integrity in Sports (FINCIS)",
    journal: "Dopinglinkki",
    year: "2019",
    access: "Open Access",
    url: "https://dopinglinkki.fi/en/info-bank/doping-substances/insulin-like-growth-factor-1-igf-1-and-long-chain-igf-ir3igf-1/",
    summary: "A clear-eyed analysis of IGF-1 LR3 from a sports medicine and anti-doping perspective. The paper explains how LR3IGF-1 is physiologically stronger and longer-lasting than native IGF-1, why it is banned in competitive sports, and what the known adverse effects include — particularly hypoglycemia (low blood sugar) from its insulin-like activity. It notes that the risk of adverse effects increases significantly with doses above 60–80 µg/kg/day, and that most adverse effects parallel those of native IGF-1. An important resource for understanding why WADA prohibits IGF-1 LR3.",
  },
  {
    title: "Emerging Anabolic and Regenerative Peptides in Athletic Body Recomposition — IGF-1 LR3 Section",
    authors: "Genesis Publications Research Group",
    journal: "Journal of Strength and Conditioning Research",
    year: "2025",
    access: "Open Access",
    url: "https://www.genesispub.org/jscr/emerging-anabolic-and-regenerative-peptides-in-athletic-body-re-composition-and-bodybuilding-mechanisms-of-action-dosing-strategies-and-evidence-review",
    summary: "A 2025 evidence review covering IGF-1 LR3 in the context of performance peptides. The paper confirms IGF-1 LR3’s well-defined molecular mechanism — acting as a powerful anabolic agent through IGF-1R/IRS1/PI3K/Akt cascade activation — while being direct about the evidence gap: no human clinical trials exist, all efficacy data comes from preclinical models, and the compound carries real metabolic and proliferative risks. The review also discusses typical research protocols (20–100 µg/day, 4–6 week cycles with rest periods to prevent receptor desensitization) and notes that IGF-1 LR3 is prohibited by WADA and not FDA approved for human use.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does IGF-1 LR3 work?",
    intro:
      "IGF-1 LR3 binds directly to IGF-1 receptors on muscle cells, triggering two parallel growth cascades (PI3K/Akt/mTOR for protein synthesis and MAPK/ERK for cellular proliferation) while also activating satellite cells that enable both hypertrophy and hyperplasia. Its key advantage over native IGF-1 is structural: the Arg3 substitution and N-terminal extension prevent rapid deactivation by IGF binding proteins, extending half-life from minutes to 20–30 hours.",
    body: [
      "IGF-1 Receptor Activation [1]. IGF-1 LR3 binds directly to IGF-1 receptors (IGF-1R) on muscle and other tissues with high affinity, initiating tyrosine kinase signaling. This is the same receptor activated by native IGF-1, but at sustained levels for 20–30 hours.",
      "PI3K/Akt/mTOR Pathway [2]. Receptor activation triggers the PI3K/Akt signaling cascade, which activates mTOR — the master regulator of protein synthesis. This increases translation of mRNA into muscle proteins, drives hypertrophy, and inhibits muscle protein breakdown.",
      "Reduced IGFBP Binding [3]. The Arg3 substitution and N-terminal extension drastically reduce IGF-1 LR3's affinity for IGF binding proteins (IGFBPs), particularly IGFBP-3. Native IGF-1 is rapidly bound by IGFBPs, which deactivate it within minutes. IGF-1 LR3 escapes this regulation, remaining bioactive in circulation up to 100 times longer.",
      "Satellite Cell Activation [4]. IGF-1 LR3 activates satellite cells (muscle stem cells responsible for repair and growth), enabling true hypertrophy through both increased fiber size and potentially new fiber formation (hyperplasia). Most muscle-building compounds drive hypertrophy only.",
      "MAPK/ERK Pathway [2]. Parallel to PI3K/Akt, IGF-1 LR3 activates the MAPK/ERK pathway, which drives cellular proliferation and differentiation. This is critical for the satellite cell activation and tissue regeneration effects.",
    ],
  },
  {
    id: "research",
    title: "What is IGF-1 LR3 used for?",
    intro:
      "IGF-1 LR3's research evidence base sits in skeletal muscle hypertrophy, post-injury muscle repair, bone density, and aging-related sarcopenia models. Most data is preclinical — no controlled human trials exist for IGF-1 LR3 specifically, though native IGF-1 has been extensively studied. The research areas below cover the published evidence base across muscle, bone, brain, and cardiac applications.",
    body: [
      "Skeletal Muscle Hypertrophy [4][5]. Animal studies and preclinical research consistently show IGF-1 LR3 increases muscle protein synthesis, satellite cell proliferation, and muscle fiber growth. Effects are most pronounced when combined with mechanical loading (resistance training).",
      "Muscle Regeneration After Injury [4]. Direct injection of recombinant IGF-1 enhanced muscle healing in lacerated, contused, and strain-injured mouse muscle models, with measurable improvements at 2, 5, and 7 days post-injury. Effects on tetanic and fast-twitch strength were observed in human muscle strain studies.",
      "Bone Mineral Density [6]. IGF-1 stimulates bone formation via direct effects on osteoblasts. Higher serum IGF-1 levels correlate with greater bone mineral density in older subjects. Treatment with GH and IGF-1 increases BMD in adults.",
      "Cognitive and Neuroprotective Effects [7]. IGF-1 supports neuronal survival, synaptic plasticity, and neurogenesis. Limited research has explored IGF-1 LR3 specifically for cognitive applications, though native IGF-1 has neuroprotective effects in animal models.",
      "Sarcopenia and Aging Models [4]. IGF-1 LR3 is studied in aging muscle wasting models for its ability to support satellite cell function and reverse age-related declines in muscle protein synthesis.",
      "Cardiac Tissue [3]. Preclinical studies show IGF-1 LR3 stimulates fetal cardiomyocyte proliferation through both ERK and PI3K signaling pathways, suggesting potential cardiac repair applications.",
    ],
  },
  {
    id: "timeline",
    title: "How long does IGF-1 LR3 take to work?",
    intro:
      "IGF-1 LR3 effects develop progressively. Most users notice improved workout recovery within 3–5 days as muscle repair accelerates, then visible muscle fullness by week 2 (glycogen and water retention), and measurable strength gains by week 3 as the anabolic effects compound. Full hypertrophy effects develop over the 4–6 week cycle when paired with consistent resistance training and adequate protein.",
    content:
      "Most users notice improved recovery from workouts within 3–5 days as muscle repair accelerates. Visible muscle fullness appears by week 2 due to increased glycogen and water retention. Measurable strength gains typically emerge by week 3 as the anabolic effects compound. Full hypertrophy effects develop over the 4–6 week cycle when paired with consistent resistance training and adequate protein intake. Without training stimulus, IGF-1 LR3's effects are minimal — the growth signal needs a mechanical-load context to drive meaningful adaptation.",
  },
  {
    id: "dosing",
    title: "How is IGF-1 LR3 dosed?",
    intro:
      "IGF-1 LR3 is administered as a once-daily subcutaneous (or intramuscular) injection. The 20–30 hour half-life makes once-daily dosing sufficient to maintain stable blood levels. Timing relative to training and food matters more than time of day. Cycles run 4–6 weeks on, followed by minimum 4 weeks off to allow IGF-1 receptor sensitivity to reset. Doses above 50 mcg/day significantly increase hypoglycemia risk without proportional muscle-building benefit.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Beginner range.</span> 20–30 mcg per day for the first cycle to assess tolerance and response.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard range.</span> 30–50 mcg per day for established users.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anabolic ceiling.</span> ~40–50 mcg/day appears to be the practical upper limit; doses above 50 mcg significantly increase hypoglycemia risk without proportional benefit.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 4–6 weeks on, followed by minimum 4 weeks off to allow IGF-1 receptor sensitivity to reset.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Within-cycle pulsing.</span> Some users follow 5 days on, 2 days off within the cycle to reduce receptor downregulation.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Training-day timing: inject within 30–60 minutes post-workout when muscles are primed for nutrient uptake and IGF-1 receptors are temporarily upregulated. Have a meal containing protein and carbohydrates ready within 30 minutes to prevent hypoglycemia and maximize anabolic effect. Rest-day timing: inject with morning meal. Do NOT inject fasted unless very experienced &mdash; IGF-1 LR3 can cause significant blood sugar drops.
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
    title: "How is IGF-1 LR3 administered?",
    intro: (
      <>
        IGF-1 LR3 is given as a subcutaneous injection &mdash; or intramuscular for site-specific effect &mdash; once daily during the cycle, using a small insulin syringe. The single most important rule: always inject with food. IGF-1 LR3&apos;s insulin-like glucose uptake effect can cause significant hypoglycemia if injected fasted. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once daily during the cycle. Intramuscular is sometimes used for site-specific effect. Common SubQ sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Immediately post-workout on training days. Morning with food on rest days. Never inject fasted.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Food required.</span> Always inject with a meal containing protein and carbohydrates within 30 minutes. Failure to eat reliably causes hypoglycemia.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each day to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypoglycemia prep.</span> Keep glucose tabs or simple sugar nearby for the first weeks of a cycle. If you feel shaky, sweaty, or confused, eat simple carbohydrates immediately.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume the next day. Do not double-dose &mdash; doubling significantly increases hypoglycemia risk.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 4–6 weeks on, 4+ weeks off. Continuous use risks receptor desensitization.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> IGF-1 LR3 is administered once daily via subcutaneous injection. The 20–30 hour half-life produces overlapping coverage at once-daily dosing &mdash; meal timing relative to injection matters far more than time of day. The two timing variables that matter most are food (always inject with protein + carbs within 30 minutes to prevent hypoglycemia) and training (post-workout administration on training days takes advantage of upregulated receptor sensitivity in worked muscles).
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily during the cycle (4–6 weeks on, 4+ weeks off)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Post-workout on training days; morning with food on rest days. Never inject fasted.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Required &mdash; inject with protein + carbs within 30 minutes to prevent hypoglycemia</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm &mdash; avoid same site on consecutive days</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~20–30 hours</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Reached within ~5–7 days at consistent once-daily dosing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. IGF-1 LR3 research vials are typically 1 mg. Because IGF-1 LR3 doses are small (20–50 mcg daily), 2 mL or 3 mL reconstitution is the common research convention &mdash; it gives larger, more precise unit draws at low dose. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 1 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">20 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">30 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">40 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">50 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">9 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 1 mg vial, each unit drawn delivers 10 mcg of IGF-1 LR3 at 1 mL reconstitution, 5 mcg at 2 mL, and 3.3 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For very small doses (20–30 mcg), 2 mL or 3 mL reconstitution gives more precise syringe draws. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does IGF-1 LR3 stack well with?",
    intro:
      "IGF-1 LR3 pairs naturally with compounds that drive complementary growth mechanisms (GH secretagogues for endogenous IGF-1 production, Follistatin for myostatin inhibition) and with recovery peptides during anabolic cycles. The most important pairing is non-peptide: resistance training and adequate protein. Without those, the growth signal has nothing to act on.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + 1.6–2.2 g/kg protein.</span> Essential. IGF-1 LR3 amplifies the response to mechanical loading; without training stimulus and adequate protein, results are minimal.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH secretagogues.</span>{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          (CJC-1295 + Ipamorelin) or{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          drive endogenous IGF-1 production while IGF-1 LR3 provides direct receptor activation. Inject IGF-1 LR3 at least 2–3 hours apart from GH peptides to avoid receptor competition.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Follistatin.</span> Direct synergy.{" "}
          <Link href="/peptides/follistatin" className="text-[#0891b2] hover:underline">Follistatin</Link>{" "}
          removes the myostatin growth ceiling; IGF-1 LR3 drives the growth signal that pushes against it. Often paired in advanced muscle-building protocols.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Recovery peptides during anabolic cycles.</span>{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
          (BPC-157 + TB-500) accelerates tissue repair while IGF-1 LR3 drives hypertrophy &mdash; useful when heavier training loads put more strain on tendons and joints.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">MGF (Mechano Growth Factor).</span> Sometimes combined for theoretical synergistic effects on muscle growth, though controlled research is limited.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: insulin or diabetes medications without supervision.</span> IGF-1 LR3 has insulin-like effects on glucose uptake. Combining with insulin or sulfonylureas significantly increases hypoglycemia risk.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of IGF-1 LR3?",
    intro:
      "IGF-1 LR3's side-effect profile is dominated by hypoglycemia risk — its insulin-like effect on glucose uptake is the single most common adverse event, and it's avoidable by injecting with food. Less common moderate effects include joint pain, fluid retention, and carpal-tunnel-like numbness during cycles. The serious concerns are theoretical: accelerated growth in pre-existing tumors and receptor desensitization with sustained high-dose use. Most users mitigate by keeping doses at or below 50 mcg/day and cycling on/off.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypoglycemia.</span> Most common side effect, especially if injected without food. Symptoms: shakiness, sweating, confusion, fatigue. Resolves with simple carbohydrates.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue or sleepiness.</span> Often appears in the 1–2 hours following injection.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation, especially with daily dosing.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Joint pain or stiffness.</span> Reported during cycles, often related to rapid strength gains outpacing connective tissue adaptation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Bloating or fluid retention.</span> Inconsistent across users; typically resolves after cycling off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Numbness or tingling.</span> Carpal-tunnel-like symptoms reported during higher-dose cycles, related to fluid retention.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe hypoglycemia.</span> Risk increases significantly above 50 mcg/day. Symptoms: shakiness, sweating, confusion, fainting. Always keep simple sugar available.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor growth acceleration.</span> IGF-1 stimulates cell proliferation including potentially cancerous cells. Contraindicated in users with cancer history.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Receptor desensitization.</span> Sustained high-dose use can reduce future effectiveness &mdash; the basis for 4+ week off periods between cycles.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Critical contraindications: active cancer or cancer history (IGF-1 stimulates cell growth including potentially cancerous cells), pregnancy or breastfeeding, diabetic retinopathy (IGF-1 may accelerate eye blood vessel growth), uncontrolled diabetes, and age under 21 (can affect growth plate closure). Always have food available when injecting. Most experienced users keep glucose tabs or simple sugar nearby during the first weeks of a cycle.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does IGF-1 LR3 interact with other drugs?",
    intro:
      "IGF-1 LR3's most important interaction is with blood-sugar-lowering medications — its insulin-like effect compounds hypoglycemia risk with insulin, sulfonylureas, and other diabetes drugs. Growth hormone competes for IGF-1 receptors when injected close together (space ≥2–3 hours apart). Combinations with anabolic-androgenic steroids are theoretically synergistic but unsupported by controlled data and increase overall side-effect risk.",
    body: [
      "Insulin and diabetes medications. High risk of hypoglycemia. IGF-1 LR3 has insulin-like effects on glucose uptake. Diabetics should not use without medical supervision.",
      "Growth hormone (HGH). Competes for IGF-1 receptors when injected close together. Space injections at least 2–3 hours apart.",
      "Anabolic-androgenic steroids. Combination is theoretical synergy but increases overall side-effect risk. No controlled human data.",
      "Thyroid hormones. IGF-1 affects thyroid hormone metabolism; theoretical interaction in users on thyroid medication.",
    ],
  },
  {
    id: "storage",
    title: "How should IGF-1 LR3 be stored?",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C (refrigerator) for up to 1 month; freeze at -20°C for long-term storage.",
      "Reconstituted solution: Refrigerate at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Inject solvent slowly against the glass wall. Swirl gently — do not shake.",
      "Never freeze reconstituted solution — ice crystals destroy peptide structure.",
      "Protect from light. Store in original carton.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of IGF-1 LR3 research?",
    intro:
      "IGF-1 LR3 is not FDA-approved for any human use. The recombinant native IGF-1 form (mecasermin/Increlex) is approved for severe primary IGF-1 deficiency in children, but IGF-1 LR3 specifically is not approved for any indication. Most evidence is preclinical; no controlled human trials exist. The World Anti-Doping Agency prohibits IGF-1 LR3 in sport.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          IGF-1 LR3 is not FDA-approved for any human use. The recombinant IGF-1 form (mecasermin/Increlex) is FDA-approved for severe primary IGF-1 deficiency in children, but IGF-1 LR3 specifically is not approved for any indication.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most research evidence comes from animal studies and preclinical research settings. Native IGF-1 has been studied extensively in humans for clinical applications; IGF-1 LR3 specifically has limited human controlled-trial data. Long-term safety data for sustained or high-dose use is absent.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits IGF-1 LR3 in sport under Section S2 (peptide hormones). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Counterfeit and underdosed IGF-1 LR3 is common in the gray market &mdash; purity verification via Certificate of Analysis is critical.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source IGF-1 LR3",
    intro:
      "IGF-1 LR3 is not FDA-approved for performance enhancement and is sold only as a research-grade peptide. Counterfeit and underdosed product is common in the gray market — verify Certificate of Analysis before purchase. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners" },
            { slug: "ascension-peptides" },
            { slug: "vital-core-research" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all 17 verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "IGF-1 LR3 FAQ",
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
          Wikipedia. Long arginine 3-IGF-1 (IGF-1 LR3).{" "}
          <a href="https://en.wikipedia.org/wiki/IGF-1_LR3" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/IGF-1_LR3
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Florini JR, Ewton DZ, Coolican SA. Growth hormone and the insulin-like growth factor system in myogenesis. Annu Rev Physiol. 1991;53:201-16.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2042959/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2042959/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yakar S, Pennisi P, Wu Y, et al. Circulating levels of IGF-1 directly regulate bone growth and density. J Clin Invest. 2002;110(6):771-81.{" "}
          <a href="https://www.jci.org/articles/view/15463" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.jci.org/articles/view/15463
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Adams GR, Haddad F. The relationships among IGF-1, DNA content, and protein accumulation during skeletal muscle hypertrophy. J Appl Physiol. 1996;81(6):2509-16.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9018499/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9018499/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Philippou A, Maridaki M, Halapas A, Koutsilieris M. The role of the insulin-like growth factor 1 (IGF-1) in skeletal muscle physiology. In Vivo. 2007;21(1):45-54.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17354613/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17354613/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bikle DD, Tahimic C, Chang W, et al. Role of IGF-I signaling in muscle bone interactions. Bone. 2015;80:79-88.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4665094/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4665094/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Fernandez AM, Torres-Aleman I. The many faces of insulin-like peptide signalling in the brain. Nat Rev Neurosci. 2012;13(4):225-39.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22430016/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22430016/
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

export default function IGF1LR3Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"IGF-1 LR3","description":"IGF-1 LR3 research profile: PI3K/Akt mechanism, dosing protocol, hypoglycemia risk, satellite cell activation, FAQ, and current regulatory status.","url":"https://profpeptide.com/peptides/igf-1-lr3","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"IGF-1 LR3"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">IGF-1 LR3</h1>
        <span className="tag">Performance &amp; Energy</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Long Arg3 IGF-1, LR3-IGF-1, Insulin-like Growth Factor 1 Long R3
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Modified IGF-1 Analog &mdash; IGF-1 Receptor Agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. WADA-prohibited (Section S2).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is IGF-1 LR3?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            IGF-1 LR3 is a synthetic 83-amino-acid analog of human insulin-like growth factor 1 (IGF-1). It contains two structural modifications: an arginine substitution at position 3 (&ldquo;Arg3&rdquo;) and a 13-amino-acid N-terminal extension (&ldquo;Long&rdquo;), producing a peptide with dramatically reduced binding to IGF binding proteins (IGFBPs) and a much longer half-life. Native IGF-1 has a half-life of minutes; IGF-1 LR3 has a half-life of 20–30 hours. The extended bioavailability and ~3x greater potency than native IGF-1 make it one of the most-studied research peptides for muscle hypertrophy, recovery, and metabolic research. Often stacked with{" "}
            <Link href="/peptides/follistatin" className="text-[#0891b2] hover:underline">Follistatin</Link>{" "}
            or the{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
            for compounded anabolic effect. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Activates IGF-1 receptors directly, bypassing the GH/IGF-1 axis</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates muscle protein synthesis via PI3K/Akt/mTOR pathway</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Promotes hyperplasia (new muscle fiber formation) &mdash; rare among research compounds</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Activates satellite cells for enhanced muscle repair and growth</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improves glucose and amino acid uptake into muscle tissue</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">20–30 hour half-life enables once-daily dosing</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 20–50 mcg per day administered subcutaneously, often immediately post-workout. Cycles typically run 4–6 weeks followed by a 4-week off period. Doses above 50 mcg/day significantly increase hypoglycemia risk without proportional muscle-building benefit. Always inject with food.
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
        {["Muscle Growth", "Anabolic", "IGF-1", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/follistatin" className="text-sm font-medium text-[#0891b2] hover:underline">Follistatin</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#0891b2] hover:underline">MK-677</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">TB-500</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#0891b2] hover:underline">GH Stack</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
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
    <ContactLink pageName="IGF-1 LR3" pagePath="/peptides/igf-1-lr3" />
    </div>
    </>
  );
}
