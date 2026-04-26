import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/wolverine-stack" },
  title: "Wolverine Stack — BPC-157 + TB-500 Combination Protocol | Prof. Peptide",
  description:
    "Wolverine Stack research profile: BPC-157 + TB-500 combination for tissue repair, mechanism synergy, dosing protocol, and research evidence.",
};

const faqs = [
  {
    q: "Why is it called the Wolverine Stack?",
    a: "Named after the Marvel character Wolverine, whose defining trait is rapid healing. The combination of BPC-157 and TB-500 — two of the most studied tissue-repair peptides — earned the nickname in fitness and recovery communities for its perceived ability to accelerate healing of injuries, surgical wounds, and soft-tissue damage.",
  },
  {
    q: "Is the stack better than either peptide alone?",
    a: "In animal models, the combination shows additive effects on tendon and muscle repair vs either peptide individually. No controlled human trials directly compare the stack against monotherapy. Most research-grade users choose the stack when dealing with significant injuries or post-surgical recovery; standalone use of one peptide is common for lighter applications.",
  },
  {
    q: "Can I just take one of the two peptides?",
    a: "Yes. BPC-157 standalone is a popular choice for tendon, ligament, and gut applications — it has more preclinical evidence than TB-500 in those areas. TB-500 standalone is sometimes used for dermal wound healing or cardiac research. The stack adds the cost and injection burden of both peptides; it's worth running each on its own first to assess your response before stacking.",
  },
  {
    q: "How many injections per week?",
    a: "During TB-500's loading phase: 9 injections per week (BPC-157 daily = 7, plus TB-500 twice weekly = 2). During TB-500's maintenance phase: 8 injections per week (BPC-157 daily = 7, plus TB-500 once weekly = 1).",
  },
  {
    q: "Can I cycle BPC-157 and TB-500 separately?",
    a: "Yes — some users run BPC-157 continuously for chronic conditions and add TB-500 as a 4–6 week pulse for specific injuries. Others run a 6–8 week stack cycle and then take both off together. There's no clinically validated 'best' approach. Cycling both off together is the most common protocol because it gives a clear washout period.",
  },
  {
    q: "Where can I buy the Wolverine Stack?",
    a: (
      <>
        There&apos;s no single &ldquo;Wolverine Stack&rdquo; product. Buy BPC-157 and TB-500 separately from research-grade peptide vendors. Some vendors offer bundled discount codes when purchasing both. See{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        {" "}for current options.
      </>
    ),
  },
];

const sections = [
  {
    id: "how-they-work-together",
    title: "How They Work Together",
    content:
      "BPC-157 and TB-500 target tissue repair from different angles. BPC-157 focuses on the biochemical signaling environment — upregulating growth factors (VEGF, EGR-1), modulating nitric oxide pathways, and stimulating collagen synthesis. TB-500 focuses on the structural and cellular level — regulating actin polymerization to enable cytoskeletal remodeling, accelerating cell migration into damaged areas, and mobilizing stem cells through bone marrow signaling. Together, they address both the signaling that initiates repair and the cellular mechanics that carry it out. This dual-pathway approach is the theoretical basis for the stack's popularity in recovery-focused research protocols.",
  },
  {
    id: "bpc-157-role",
    title: "BPC-157's Role",
    node: (
      <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
        In the Wolverine Stack, BPC-157 serves as the primary signaling peptide. It modulates nitric oxide (NO) synthesis — upregulating eNOS in vascular tissue while attenuating excessive iNOS in inflammatory states. It upregulates growth factor expression including VEGF and EGR-1, promoting angiogenesis and fibroblast proliferation. BPC-157 also enhances collagen synthesis and tendon-to-bone insertion remodeling through FAK-paxillin pathway activation. Its short half-life (under 30 minutes) is offset by sustained downstream gene expression effects. See the{" "}
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">
          BPC-157 full profile
        </Link>
        {" "}for complete mechanism details.
      </p>
    ),
  },
  {
    id: "tb-500-role",
    title: "TB-500's Role",
    node: (
      <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
        In the Wolverine Stack, TB-500 serves as the primary structural repair peptide. Its core mechanism involves high-affinity binding to monomeric G-actin, sequestering actin monomers to maintain a ready pool for rapid cytoskeletal remodeling. This is critical for directed cellular migration — moving progenitor cells, endothelial cells, keratinocytes, and fibroblasts toward injury sites. TB-500 also upregulates matrix metalloproteinase (MMP) production, promotes angiogenesis through endothelial tube formation, reduces apoptosis, modulates inflammatory cascades, decreases myofibroblast activity (reducing scarring), and mobilizes stem and progenitor cells. Half-life is multiple days, allowing twice-weekly dosing. See the{" "}
        <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">
          TB-500 full profile
        </Link>
        {" "}for complete mechanism details.
      </p>
    ),
  },
  {
    id: "synergy",
    title: "The Synergy",
    body: [
      "Complementary angiogenesis — BPC-157 drives new blood vessel formation via VEGF upregulation while TB-500 promotes it through endothelial cell migration and tube formation, attacking vascularization from both the signaling and structural sides.",
      "Parallel anti-inflammatory pathways — BPC-157 modulates NO-mediated inflammation while TB-500 reduces inflammatory cascades and apoptosis through separate mechanisms, providing broader anti-inflammatory coverage.",
      "Collagen + migration — BPC-157 stimulates collagen synthesis and fibroblast proliferation while TB-500 accelerates the migration of those fibroblasts into the wound site, pairing production with delivery.",
      "Broader tissue coverage — BPC-157 has strongest preclinical evidence in gastrointestinal and tendon models while TB-500 shows particular strength in dermal wound healing, cardiac tissue, and corneal repair, giving the combination wider tissue reach.",
      "Reduced scarring potential — TB-500's ability to decrease myofibroblast numbers combined with BPC-157's growth factor modulation may reduce fibrotic scar formation compared to unassisted healing.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Tendon and Ligament Repair [1][2] — Both peptides independently show accelerated healing in Achilles and rotator-cuff injury models. The combination is the most commonly studied pairing in musculoskeletal recovery research.",
      "Muscle Injury Recovery [3] — BPC-157 accelerates functional recovery in crush-injury models while TB-500 promotes the cellular migration necessary for muscle fiber regeneration.",
      "Wound Healing [4] — TB-500 demonstrated 42–61% improvement in wound healing rates vs controls in preclinical models. BPC-157 adds growth factor support and anti-inflammatory modulation.",
      "Post-Surgical Recovery — The stack is frequently referenced in research protocols examining recovery from soft-tissue surgical procedures in animal models.",
      "Joint and Connective Tissue — Both peptides have been studied in models of cartilage damage, with BPC-157 promoting collagen synthesis and TB-500 supporting cellular remodeling.",
    ],
  },
  {
    id: "how-to-stack",
    title: "How to Stack",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          There is no clinically validated combined dosing schedule. The most common research protocols simply layer standard individual dosing for each peptide on top of one another. Both peptides use bacteriostatic water for reconstitution and subcutaneous injection.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">BPC-157: 250–500 mcg subcutaneously once daily, every day of the cycle</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">TB-500 loading phase (Weeks 1–4): 2.0–2.5 mg subcutaneously twice weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">TB-500 maintenance phase (Weeks 5–8): 2.0 mg subcutaneously once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Total stack cycle: 6–8 weeks</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Off period: 4–6 weeks before another cycle</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injection sites: rotate between abdomen, thigh, upper arm. BPC-157 can be injected near the injury site (within 0.5–1 inch) for localized benefit. TB-500 is typically given systemically.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stack-specific timing: no controlled data favors injecting at separate times vs together. Most users inject BPC-157 daily on its own schedule and TB-500 on its loading days regardless.</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          For complete reconstitution and storage details, see the individual{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">
            BPC-157 profile
          </Link>
          {" "}and{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">
            TB-500 profile
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Considerations",
    content:
      "Both peptides have clean preclinical safety profiles. The combination has not been studied as a unit in human safety trials. Possible side effects from each peptide can occur — see the individual profiles for details. Theoretical concerns specific to the stack include: (1) compounded angiogenesis activity that has not been formally evaluated for tumor stimulation risk in humans, though no signals have appeared in animal or human use; (2) injection burden — daily BPC-157 plus 2x weekly TB-500 means 9+ injections per week during the loading phase; (3) cost — TB-500 is significantly more expensive per milligram than BPC-157, and stack cycles use full doses of both. There is no validated reason to combine these peptides at lower individual doses.",
  },
  {
    id: "variations",
    title: "Common Variations",
    body: [
      "Wolverine + GHK-Cu — adds copper peptide for skin and connective tissue applications. Often used in protocols focused on dermal recovery, post-surgical scar minimization, or topical applications alongside the injection stack.",
      "Wolverine + GHRPs (CJC-1295, Ipamorelin) — adds growth hormone signaling for systemic recovery. Theoretical synergy via increased IGF-1 levels supporting tissue repair downstream.",
      "Wolverine + IGF-1 LR3 — direct IGF-1 receptor activation paired with the local healing peptides. More aggressive systemic anabolic effect; combined cycles tend to be shorter (4–6 weeks).",
      "Wolverine + KPV — adds anti-inflammatory peptide for inflammatory bowel research protocols where BPC-157 provides healing and KPV provides additional anti-inflammatory support.",
      "Resistance training + adequate protein — recommended baseline for any musculoskeletal recovery protocol. Mechanical loading is necessary for proper tendon and muscle remodeling regardless of peptides used.",
    ],
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
          Chang CH, Tsai WC, Lin MS, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol. 2011;110(3):774-80.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21030672/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21030672/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Vasireddi S, Vasireddi A, Sikiric P, et al. Pentadecapeptide BPC 157 in tendon and ligament injuries — systematic review of preclinical evidence. Orthopaedic Journal of Sports Medicine. 2025.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Hsieh MJ, Liu HT, Wang CN, et al. Therapeutic potential of BPC-157 on muscle injury healing. Sci Rep. 2020;10(1):17502.{" "}
          <a href="https://www.nature.com/articles/s41598-020-74552-5" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nature.com/articles/s41598-020-74552-5
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kleinman HK, Sosne G. Thymosin β4 Promotes Dermal Healing. Vitam Horm. 2016;102:53-70.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27450031/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27450031/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Goldstein AL, Hannappel E, Sosne G, Kleinman HK. Thymosin β4: a multi-functional regenerative peptide. Expert Opin Biol Ther. 2012;12(1):37-51.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22074294/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22074294/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function WolverineStackPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Wolverine Stack","description":"Wolverine Stack research profile: BPC-157 + TB-500 combination for tissue repair, mechanism synergy, dosing protocol, and research evidence.","url":"https://profpeptide.com/peptides/wolverine-stack","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Wolverine Stack"}]}} />
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
        <span className="tag">Combination Protocol</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: BPC-157 + TB-500 Stack, Healing Stack, BPC/TB Combo
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            The Wolverine Stack is the popular name for the combination of BPC-157 and TB-500 (Thymosin Beta-4 fragment) — two of the most widely studied tissue-repair peptides in preclinical research. Named for its association with rapid healing, the stack pairs two peptides that operate through distinct but complementary biological mechanisms. BPC-157 works primarily through growth factor modulation, nitric oxide signaling, and angiogenesis. TB-500 works through actin regulation, cellular migration, and stem cell mobilization. Together they address both the signaling that initiates repair and the cellular mechanics that carry it out.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Accelerated soft-tissue and tendon healing in preclinical injury models</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced angiogenesis through dual-pathway activation (VEGF + endothelial migration)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Broader anti-inflammatory coverage via complementary NO and cytokine modulation</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improved cellular migration and fibroblast delivery to injury sites</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increased collagen synthesis paired with structural remodeling capacity</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced scar formation and fibrosis compared to unassisted healing in animal models</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols pair standard BPC-157 dosing (250–500 mcg subcutaneously daily) with TB-500 loading-then-maintenance dosing (2.0–2.5 mg twice weekly for 4 weeks, then 2.0 mg weekly). Total stack cycle is typically 6–8 weeks. See{" "}
            <a href="#how-to-stack" className="text-[#0891b2] hover:underline">
              How to Stack
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> BPC-157 and TB-500 are sold separately as research-grade peptides. Neither is FDA-approved. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current research-grade options for both peptides.
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
        {["Tissue Repair", "Combination Protocol", "Recovery", "Research-Grade"].map((tag) => (
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
