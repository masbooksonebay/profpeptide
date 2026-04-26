import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/tb-500" },
  title: "TB-500 — Thymosin Beta-4, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "TB-500 (Thymosin Beta-4 fragment) research profile: actin/cellular migration mechanism, dosing protocol, wound healing research, side effects, and FDA status.",
};

const faqs = [
  {
    q: "Is TB-500 the same as Thymosin Beta-4?",
    a: "Not exactly — TB-500 is a synthetic fragment of the full Thymosin Beta-4 protein. The fragment retains the active region responsible for cell migration and wound healing but is shorter (and easier to synthesize) than the 43-amino-acid full protein. Most research literature uses the terms interchangeably, though strict pharmacology references distinguish them.",
  },
  {
    q: "How is TB-500 different from BPC-157?",
    a: (
      <>
        BPC-157 works through growth factor signaling, nitric oxide modulation, and angiogenesis. TB-500 works through actin polymerization, cellular migration, and stem cell mobilization. The two are commonly stacked because their mechanisms are complementary rather than overlapping. See the{" "}
        <Link href="/compare/bpc-157-vs-tb-500" className="text-[#0891b2] hover:underline">
          BPC-157 vs TB-500 comparison
        </Link>
        {" "}for a side-by-side breakdown.
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
        Yes — this combination is called the Wolverine Stack and is the most-studied peptide pairing in tissue-repair research. The two work through complementary mechanisms: BPC-157 drives growth factor signaling and angiogenesis; TB-500 drives cellular migration and stem cell mobilization. See{" "}
        <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">
          Wolverine Stack
        </Link>
        {" "}for details.
      </>
    ),
  },
  {
    q: "Where can I buy TB-500?",
    a: (
      <>
        TB-500 is sold by specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Actin Sequestration [1] — TB-500's primary mechanism is binding monomeric G-actin and maintaining a ready pool for cytoskeletal remodeling. This is critical for cellular migration — moving repair cells (fibroblasts, endothelial cells, keratinocytes, and stem cells) toward injury sites.",
      "Angiogenesis Promotion [2] — TB-500 stimulates endothelial cell proliferation and tube formation, which builds new capillaries to supply oxygen and nutrients to healing tissue. This is the structural complement to BPC-157's growth factor-driven angiogenesis.",
      "Stem Cell Mobilization [3] — TB-500 mobilizes bone marrow stem and progenitor cells, increasing their migration to damaged areas. This is one of the mechanisms behind TB-500's effects in cardiac repair.",
      "Anti-inflammatory Effects [4] — TB-500 reduces inflammatory cytokine production by inhibiting NF-κB signaling. It also reduces apoptosis (cell death) in tissue under stress.",
      "Wnt/β-catenin Pathway Activation [5] — A 2024 study in cutaneous flap models showed TB-500 activates the Wnt/β-catenin pathway, which is one of the body's primary pathways for cell proliferation and tissue homeostasis. This explains how the peptide coordinates multiple repair processes simultaneously.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Dermal Wound Healing [4][5] — Multiple animal studies show 42–61% improvement in wound healing rates vs controls. Effects include faster re-epithelialization, increased collagen deposition, and reduced scarring. Effects observed at very low concentrations (as little as 10 pg in laboratory models).",
      "Cardiac Repair [3] — A landmark 2007 Nature study (Bock-Marquette et al.) showed Thymosin Beta-4 was cardioprotective after myocardial infarction in animals. Subsequent research has explored TB-500 for heart attack recovery, with a small 2016 pilot study in humans showing safety of autologous Tβ4-pretreated stem cell therapy after STEMI.",
      "Corneal Wound Healing [6] — Strong preclinical evidence for corneal repair. RegeneRx Biopharmaceuticals took Thymosin Beta-4 through Phase 2 trials for dry eye and corneal wound healing in epidermolysis bullosa (NCT00311766, terminated for non-efficacy reasons).",
      "Musculoskeletal Repair — Animal studies show accelerated tendon, ligament, and muscle healing. The combination with BPC-157 (Wolverine Stack) is the most-studied pairing for musculoskeletal applications.",
      "Hair Growth [7] — A 2015 PLOS ONE study showed Thymosin Beta-4 induces hair growth in mice through stem cell mobilization. Limited human evidence.",
      "Inflammatory and Autoimmune Conditions — Animal studies in pressure ulcers (Phase 2 trial NCT00382161 by RegeneRx), epidermolysis bullosa, and various inflammatory conditions show wound healing benefits.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "TB-500 effects develop gradually over the first 2–4 weeks of consistent dosing. Initial doses produce minimal acute sensation. Wound healing acceleration is observed in animal studies starting from the first week of treatment. Most user protocols target a 6–8 week total cycle, with loading-phase improvements becoming noticeable around weeks 2–3.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          TB-500 is administered as a subcutaneous injection. Dosing follows a loading-then-maintenance pattern that mimics the original RegeneRx clinical trial protocols.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Loading phase (Weeks 1–4): 2.0–2.5 mg subcutaneously twice weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Maintenance phase (Weeks 5–8): 2.0 mg subcutaneously once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe injury / post-surgical: Continue loading phase up to 6 weeks before transitioning to maintenance</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Total typical cycle length: 6–8 weeks</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Off period: 4–6 weeks before another cycle</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Half-life is longer than BPC-157 — estimated at multiple days in animal pharmacokinetic studies, which is why twice-weekly dosing is sufficient. TB-500 is more expensive per dose than BPC-157 because the per-dose amount is much larger (2 mg vs 250 mcg), but cycle frequency is lower.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Most users report no acute systemic effects</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue during loading phase</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Slight nausea (uncommon)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term human safety data is limited</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of unexplained tumor stimulation due to angiogenesis activity, though no reports of this in animal or human studies</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — rare and not commonly reported</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          TB-500 has a clean safety profile in animal studies. RegeneRx&apos;s Phase 2 trials in pressure ulcers and epidermolysis bullosa (NCT00382161, NCT00311766) reported it was well-tolerated, though both trials were terminated for non-efficacy reasons (lack of patient availability, drug expiration). No completed Phase 3 human safety trials exist.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin). Common injection sites: abdomen, thigh, upper arm.",
      "Time of day: Any time, but consistent. Many users inject the same days each week.",
      "With or without food: Either is fine.",
      "Site rotation: Use a different site each injection to reduce irritation.",
      "Reconstitution: Use bacteriostatic water for injection. A typical reconstitution is 5 mg vial + 2 mL BAC water = 2.5 mg/mL (so 0.8 mL = 2 mg).",
      "Missed dose: If a loading-phase dose is missed by less than 24 hours, take as soon as remembered. Otherwise skip and resume on the next scheduled day.",
      "Cycle: 6–8 weeks on, 4–6 weeks off is the most common protocol.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 (Wolverine Stack) — the most popular pairing. BPC-157 + TB-500 work through complementary mechanisms (growth factor signaling vs cellular migration). See{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">
            Wolverine Stack
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">GHK-Cu — combined for dermal applications and skin repair research.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Resistance training — natural pairing for musculoskeletal recovery research; mechanical loading is necessary for proper tissue remodeling.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">MK-677 / GHRPs — combined for systemic recovery research where growth hormone signaling supplements TB-500&apos;s cellular repair effects.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standalone use is also common, particularly for cardiac or corneal-specific research.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Anticoagulants — theoretical concern due to TB-500's effects on angiogenesis and vascular function. Not clinically validated.",
      "No major drug interactions reported in animal studies",
      "Insulin and diabetes medications — no documented interactions",
      "Other peptides — generally considered safe to combine; no contraindications established",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
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
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          TB-500 is not FDA-approved by any major regulatory body. Two RegeneRx Phase 2 trials (NCT00382161 for pressure ulcers, NCT00311766 for epidermolysis bullosa) were terminated for non-efficacy reasons (patient availability and drug expiration), not for safety concerns.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most evidence for TB-500 comes from animal models. Human evidence is limited to small pilot studies and the Phase 2 trials above. Long-term safety data is absent.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits TB-500 in sport under Section S2 (peptide hormones). Research-grade material is sold for laboratory use only and is not approved for human consumption.
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
          Goldstein AL, Hannappel E, Sosne G, Kleinman HK. Thymosin β4: a multi-functional regenerative peptide. Expert Opin Biol Ther. 2012;12(1):37-51.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22074294/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22074294/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Bock-Marquette I, Saxena A, White MD, et al. Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival, and cardiac repair. Nature. 2004;432(7016):466-72.{" "}
          <a href="https://www.nature.com/articles/nature03000" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nature.com/articles/nature03000
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Smart N, Risebro CA, Melville AA, et al. Thymosin beta4 induces adult epicardial progenitor mobilization and neovascularization. Nature. 2007;445(7124):177-82.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17108969/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17108969/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kleinman HK, Sosne G. Thymosin β4 Promotes Dermal Healing. Vitam Horm. 2016;102:53-70.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27450031/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27450031/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tao Y, et al. Thymosin β4 improves the survival of cutaneous flaps of rat and activates Wnt/β-catenin pathway. Arch Med Sci. 2024.{" "}
          <a href="https://www.archivesofmedicalscience.com/Thymosin-4-improves-the-survival-of-cutaneous-flaps-of-rat-and-activates-Wnt-catenin-pathway/183145/0/article.html" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.archivesofmedicalscience.com/Thymosin-4-improves-the-survival-of-cutaneous-flaps-of-rat-and-activates-Wnt-catenin-pathway/183145/0/article.html
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Sosne G, Qiu P, Kurpakus-Wheater M, Wheater M. Thymosin beta-4 and corneal wound healing: visions of the future. Ann N Y Acad Sci. 2010;1194:190-8.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20536470/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20536470/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Gao X, Liang H, Hou F, et al. Thymosin Beta-4 Induces Mouse Hair Growth. PLoS One. 2015;10(6):e0130040.{" "}
          <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0130040" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0130040
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function TB500Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"TB-500","description":"TB-500 (Thymosin Beta-4 fragment) research profile: actin/cellular migration mechanism, dosing protocol, wound healing research, side effects, and FDA status.","url":"https://profpeptide.com/peptides/tb-500","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Thymosin Beta-4 Fragment (Tβ4 17-23), TMSB4X
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            TB-500 is a synthetic fragment of Thymosin Beta-4 (Tβ4), a naturally occurring 43-amino-acid peptide found in virtually all mammalian cells. Unlike the full Thymosin Beta-4 protein, TB-500 is a shorter active fragment that&apos;s easier to synthesize and study. Researchers have studied it for over two decades, primarily for wound healing, cardiac repair, and corneal regeneration. It&apos;s commonly paired with BPC-157 in tissue-repair research protocols (the Wolverine Stack).
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Accelerated wound healing in dermal, corneal, and cardiac tissue (animal models)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Promotes new blood vessel formation (angiogenesis)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduces fibrosis and scarring during repair</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory effects through NF-κB pathway modulation</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mobilizes stem and progenitor cells to injury sites</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Pairs synergistically with BPC-157 in musculoskeletal repair research</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 2.0–2.5 mg subcutaneously twice weekly for the first 4 weeks (loading phase), then 2.0 mg once weekly for maintenance. Total cycle length is typically 6–8 weeks. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> TB-500 is not FDA-approved and is sold only as a research-grade peptide. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current research-grade options.
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
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
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
