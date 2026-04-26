import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/kpv" },
  title: "KPV — Anti-Inflammatory Tripeptide for Gut & Skin | Prof. Peptide",
  description:
    "KPV research profile: anti-inflammatory tripeptide derived from α-MSH. NF-κB inhibition, IBD applications, dosing protocols, and side effects.",
};

const faqs = [
  {
    q: "Is KPV FDA-approved?",
    a: "No. KPV is not FDA-approved for any indication. Despite its small molecular size, clean side-effect profile, and decades of research interest, it has not progressed through formal Phase 2 or 3 clinical trials. Most evidence is from animal models (colitis, dermatitis) and cell-based research.",
  },
  {
    q: "How is KPV different from BPC-157?",
    a: "Different mechanisms and primary applications. KPV is a 3-amino-acid tripeptide derived from α-MSH that acts intracellularly to inhibit NF-κB and reduce inflammatory cytokines. BPC-157 is a 15-amino-acid peptide that drives angiogenesis and tissue repair through nitric oxide and growth factor pathways. KPV is primarily anti-inflammatory; BPC-157 is primarily regenerative. They're commonly stacked together for gut applications because their mechanisms are complementary, not redundant.",
  },
  {
    q: "Oral vs injectable vs topical — which is best?",
    a: "Depends on application. Oral (enteric-coated capsules) is preferred for IBD/colitis because the peptide acts locally on intestinal mucosa. Subcutaneous injection produces systemic effects; useful for general anti-inflammatory protocols. Topical formulations target skin inflammation (atopic dermatitis, psoriasis research). Most users start oral for gut applications.",
  },
  {
    q: "Does KPV cause tanning or sexual effects like Melanotan II / PT-141?",
    a: "No. Despite being derived from α-MSH (the same parent hormone as melanotan II and bremelanotide / PT-141), KPV does NOT activate melanocortin receptors. The 3-amino-acid fragment lacks the receptor-binding domain. KPV's anti-inflammatory effect is mediated intracellularly through NF-κB inhibition, completely separate from melanocortin signaling.",
  },
  {
    q: "Can I take KPV during a steroid taper?",
    a: "KPV's anti-inflammatory effects are theoretically additive with corticosteroids. Some users use KPV adjunctively during steroid tapers to maintain inflammation control as steroid doses decrease. However, no controlled clinical data supports this protocol — discuss with the prescribing physician before adjusting steroid timing.",
  },
  {
    q: "How does KLOW differ from KPV alone?",
    a: "KLOW is a compounded blend combining KPV with GHK-Cu, BPC-157, and TB-500 (typical 50/10/10/10 mg ratio). It pairs KPV's anti-inflammatory effect with GHK-Cu's gene expression / collagen modulation and BPC-157 + TB-500's tissue repair. KPV alone is a more targeted anti-inflammatory; KLOW is a broader regenerative protocol.",
  },
  {
    q: "Does KPV work for IBD/colitis?",
    a: "Animal model evidence is strong. Multiple studies show KPV reduces colitis severity in DSS and TNBS-induced models — reduced histological damage, improved mucosal healing, decreased inflammatory infiltration. Particle-based delivery systems have been explored to target inflamed intestinal tissue. Human clinical trials in IBD have not been completed; community use suggests benefit but is observational.",
  },
  {
    q: "Where can I buy KPV?",
    a: (
      <>
        KPV is sold by specialty research peptide vendors as oral capsules, injectable lyophilized powder, or topical formulations. Compounded preparations vary in quality — third-party HPLC testing recommended. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "NF-κB Pathway Inhibition [1] — KPV penetrates cells and directly inhibits NF-κB nuclear translocation, the master regulator of inflammatory gene expression. This is the primary mechanism behind its anti-inflammatory effects.",
      "Cytokine Reduction [2] — Reduces pro-inflammatory cytokines TNF-alpha, IL-6, IL-1beta, and IL-8 in research models. Effects observed in colonic tissue, dermal fibroblasts, and immune cells.",
      "Antimicrobial Activity [3] — Direct antimicrobial effect against S. aureus, E. coli, and Candida albicans. Mechanism distinct from antibiotic pathways — does not promote resistance development.",
      "Melanocortin-Independent — Despite being derived from α-MSH, KPV's anti-inflammatory effects do NOT require melanocortin receptor activation. The tripeptide acts intracellularly through a separate mechanism.",
      "Mucosal Tissue Localization [4] — Particular activity in colonic epithelium and intestinal mucosa, supporting research interest in IBD applications. PepT1-mediated uptake concentrates KPV in inflamed gut tissue.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Inflammatory Bowel Disease [5] — Multiple animal studies show KPV reduces colitis severity in DSS and TNBS-induced colitis models. Reduced histological damage, improved mucosal healing, decreased inflammatory infiltration. Particle-based delivery systems explored to target inflamed intestinal tissue.",
      "Atopic Dermatitis & Skin Inflammation — Topical KPV formulations studied for inflammatory skin conditions. Reduced inflammatory markers and improved barrier function in research models.",
      "Wound Healing — Anti-inflammatory contribution to wound healing in research models. Often combined with BPC-157, TB-500, or GHK-Cu in compounded formulations.",
      "Antimicrobial Research [3] — Activity against drug-resistant bacterial strains. Studied as adjunct to traditional antibiotics in research contexts.",
      "KLOW Blend — Compounded blend combining KPV with GHK-Cu, BPC-157, and TB-500 (typical 50/10/10/10 mg ratio). Most popular commercial form for combined regenerative + anti-inflammatory protocol.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "KPV effects develop on multiple timescales. Acute anti-inflammatory effects are measurable within hours of dosing. Mucosal healing in IBD models: 1–2 weeks. Skin inflammation improvements with topical use: 2–4 weeks. Most users assess KPV after 4–8 week protocols. Effects appear to be dose-dependent within the typical research range.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          KPV is administered orally (enteric-coated capsules), subcutaneously, or topically depending on the application. Oral is preferred for gut applications; injection for systemic effects; topical for skin.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Oral capsules (compounded, enteric-coated): 250–500 mcg once daily for general anti-inflammatory use.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Oral for IBD applications: up to 500 mcg twice daily (1 mg total/day).</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Subcutaneous injection: 200–500 mcg once daily.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Topical (skin): 0.05–0.1% concentration in creams, 1–2× daily.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 4–8 weeks active, 2-week break recommended.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reconstitution (injectable): 5 mg vial + 2 mL bacteriostatic water = 2.5 mg/mL.</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          The KLOW blend (GHK-Cu + BPC-157 + TB-500 + KPV) is dosed at 0.25–0.5 mL of reconstituted blend, 5 days/week — see the GLOW page for blend protocol details.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild injection site reactions (subcutaneous)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Occasional GI changes (oral)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard doses</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term safety beyond 6 months not formally characterized</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          KPV has one of the cleanest side-effect profiles of any peptide on Prof. Peptide. The α-MSH-derived structure suggests low toxicity. NOT FDA-approved for any indication.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Oral capsules: take with or without food. Enteric coating typical for gut-targeted use.",
      "Subcutaneous injection: rotate between abdomen, thigh, upper arm.",
      "Topical: apply to clean, dry skin 1–2× daily.",
      "Time of day: any. No circadian timing requirement.",
      "Reconstitution (injectable): bacteriostatic water, swirl gently.",
      "Storage of reconstituted: 2–8°C, use within 30 days.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">BPC-157 — most common pairing for gut applications. KPV&apos;s anti-inflammatory + BPC-157&apos;s regenerative effects.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          KLOW Blend (GHK-Cu + BPC-157 + TB-500 + KPV at 50/10/10/10 mg) — compounded all-in-one regenerative blend. See{" "}
          <Link href="/research/kpv" className="text-[#0891b2] hover:underline">
            KLOW research
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">TB-500 — for combined inflammation + tissue repair.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard IBD-supportive protocols (probiotics, glutamine, omega-3) — compatible.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Avoid: high-dose oral copper supplements during topical KPV use (theoretical interaction with copper-binding proteins).</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "NSAIDs and corticosteroids — additive anti-inflammatory effects, generally compatible. Monitor.",
      "Immunosuppressants — limited data on combination.",
      "PT-141 / Melanotan II — DO NOT confuse KPV with these melanocortin-receptor agonists. KPV does NOT activate MCR receptors and the mechanisms are unrelated.",
      "No documented major drug interactions.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized: -20°C long-term, 2–8°C short-term.",
      "Reconstituted: 2–8°C, 30 days max.",
      "Oral capsules: room temperature, dry, dark.",
      "Topical formulations: refrigerate after opening.",
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
          KPV is NOT FDA-approved for any indication. Despite its small molecular size and clean side-effect profile, it has not progressed through formal clinical trials. Most evidence is from animal models (colitis, dermatitis) and cell-based research.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: KPV is NOT currently on the WADA prohibited list.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded preparations vary in quality. Third-party HPLC testing recommended for any KPV product. Combined evidence base for KLOW blend is observational only.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold for laboratory use only and is not approved for human consumption.
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
          Brzoska T, Luger TA, Maaser C, et al. α-Melanocyte-Stimulating Hormone and Related Tripeptides: Biochemistry, Antiinflammatory and Protective Effects in Vitro and in Vivo. Endocr Rev. 2008;29(5):581-602.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kannengiesser K, Maaser C, Heidemann J, et al. Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of inflammatory bowel disease. Inflamm Bowel Dis. 2008;14(3):324-31.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Cutuli M, Cristiani S, Lipton JM, Catania A. Antimicrobial effects of alpha-MSH peptides. J Leukoc Biol. 2000;67(2):233-9.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Dalmasso G, Charrier-Hisamuddin L, Nguyen HT, et al. PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation. Gastroenterology. 2008;134(1):166-78.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Xiao B, Xu Z, Viennois E, et al. Orally Targeted Delivery of Tripeptide KPV via Hyaluronic Acid-Functionalized Nanoparticles Efficiently Alleviates Ulcerative Colitis. Mol Ther. 2017;25(7):1628-1640.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Alpha-melanocyte-stimulating hormone.{" "}
          <a href="https://en.wikipedia.org/wiki/Alpha-melanocyte-stimulating_hormone" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Alpha-melanocyte-stimulating_hormone
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function KPVPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"KPV","description":"KPV research profile: anti-inflammatory tripeptide derived from α-MSH. NF-κB inhibition, IBD applications, dosing protocols, and side effects.","url":"https://profpeptide.com/peptides/kpv","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"KPV"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">KPV</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Lysine-Proline-Valine, α-MSH (11–13), KPV Tripeptide
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            KPV is a small tripeptide (lysine-proline-valine) derived from the C-terminal sequence of α-melanocyte-stimulating hormone (α-MSH). Despite its size, KPV exhibits potent anti-inflammatory and antimicrobial activity through pathways distinct from larger immune peptides. It has emerged as a research compound of interest for inflammatory bowel disease (IBD), ulcerative colitis, atopic dermatitis, and other inflammation-driven conditions. KPV&apos;s small size allows it to penetrate cells and act intracellularly, where it inhibits NF-κB signaling and reduces pro-inflammatory cytokine production. KPV is the #10 most-searched peptide on Google Trends (Feb 2026), reflecting growing interest in gut-targeted research peptides.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory effects through NF-κB pathway inhibition</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced inflammatory cytokine production (TNF-alpha, IL-6, IL-1beta)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Antimicrobial activity against bacterial, fungal, and yeast infections</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mucosal healing in inflammatory bowel models</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Skin inflammation reduction (atopic dermatitis, psoriasis research)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Often combined with BPC-157 in compounded blends for gut applications</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Oral capsules (compounded): 250–500 mcg daily. Subcutaneous injection: 200–500 mcg once daily. Some protocols use up to 1 mg daily for active inflammatory conditions. Topical formulations (creams) used for skin applications. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> KPV is not FDA-approved and is sold by specialty research peptide vendors as oral, injectable, or topical formulations. See{" "}
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
        {["Gut Health & Immunity", "Anti-Inflammatory", "Tripeptide", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
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
            href="https://www.amazon.com/s?k=gut+health+immunity+supplements&tag=profpeptide-20"
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
