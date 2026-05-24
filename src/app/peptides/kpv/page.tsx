import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/kpv",
  title: "KPV — Anti-Inflammatory Tripeptide, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "KPV research profile: anti-inflammatory tripeptide derived from α-MSH. NF-κB inhibition, IBD applications, dosing protocols, side effects, FAQ, and regulatory status.",
});

const faqs = [
  {
    q: "Is KPV FDA-approved?",
    a: "No. KPV is not FDA-approved for any indication. Despite its small molecular size, clean side-effect profile, and decades of research interest, it has not progressed through formal Phase 2 or 3 clinical trials. Most evidence is from animal models (colitis, dermatitis) and cell-based research.",
  },
  {
    q: "How is KPV different from BPC-157?",
    a: (
      <>
        Different mechanisms and primary applications. KPV is a 3-amino-acid tripeptide derived from α-MSH that acts intracellularly to inhibit NF-κB and reduce inflammatory cytokines.{" "}
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
        is a 15-amino-acid peptide that drives angiogenesis and tissue repair through nitric oxide and growth factor pathways. KPV is primarily anti-inflammatory; BPC-157 is primarily regenerative. They&apos;re commonly stacked together for gut applications because their mechanisms are complementary, not redundant.
      </>
    ),
  },
  {
    q: "Oral vs injectable vs topical — which is best?",
    a: "Depends on application. Oral (enteric-coated capsules) is preferred for IBD/colitis because the peptide acts locally on intestinal mucosa. Subcutaneous injection produces systemic effects; useful for general anti-inflammatory protocols. Topical formulations target skin inflammation (atopic dermatitis, psoriasis research). Most users start oral for gut applications.",
  },
  {
    q: "Does KPV cause tanning or sexual effects like Melanotan II / PT-141?",
    a: (
      <>
        No. Despite being derived from α-MSH (the same parent hormone as{" "}
        <Link href="/peptides/melanotan-ii" className="text-[#0891b2] hover:underline">Melanotan II</Link>{" "}
        and bremelanotide /{" "}
        <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141</Link>
        ), KPV does NOT activate melanocortin receptors. The 3-amino-acid fragment lacks the receptor-binding domain. KPV&apos;s anti-inflammatory effect is mediated intracellularly through NF-κB inhibition, completely separate from melanocortin signaling.
      </>
    ),
  },
  {
    q: "Can I take KPV during a steroid taper?",
    a: "KPV's anti-inflammatory effects are theoretically additive with corticosteroids. Some users use KPV adjunctively during steroid tapers to maintain inflammation control as steroid doses decrease. However, no controlled clinical data supports this protocol — discuss with the prescribing physician before adjusting steroid timing.",
  },
  {
    q: "How does KLOW differ from KPV alone?",
    a: (
      <>
        <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
        is a compounded blend combining KPV with{" "}
        <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>,{" "}
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>, and{" "}
        <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
        (typical 50/10/10/10 mg ratio). It pairs KPV&apos;s anti-inflammatory effect with GHK-Cu&apos;s gene expression / collagen modulation and BPC-157 + TB-500&apos;s tissue repair. KPV alone is a more targeted anti-inflammatory; KLOW is a broader regenerative protocol.
      </>
    ),
  },
  {
    q: "Does KPV work for IBD/colitis?",
    a: "Animal model evidence is strong. Multiple studies show KPV reduces colitis severity in DSS and TNBS-induced models — reduced histological damage, improved mucosal healing, decreased inflammatory infiltration. Particle-based delivery systems have been explored to target inflamed intestinal tissue. Human clinical trials in IBD have not been completed; community use suggests benefit but is observational.",
  },
  {
    q: "Where can I buy KPV?",
    a: (
      <>
        KPV is sold by specialty research peptide vendors as oral capsules, injectable lyophilized powder, or topical formulations. Compounded preparations vary in quality &mdash; third-party HPLC testing recommended. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Alpha-MSH and related tripeptides: biochemistry, anti-inflammatory effects, and future perspectives",
    authors: "Brzoska T, Luger TA, Maaser C, Schiller M, Böhm M.",
    journal: "Endocrine Reviews",
    year: "2008",
    access: "Open Access",
    url: "https://academic.oup.com/edrv/article/29/5/581/2355153",
    summary: "The foundational comprehensive review of alpha-MSH-derived peptides including KPV. The paper establishes the anti-inflammatory pharmacology of the C-terminal tripeptide and explains why KPV retains the anti-inflammatory activity of the parent hormone without the pigmentation effects.",
  },
  {
    title: "Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of IBD",
    authors: "Kannengiesser K, Maaser C, Heidemann J, et al.",
    journal: "Inflammatory Bowel Diseases",
    year: "2008",
    access: "Abstract available",
    url: "https://academic.oup.com/ibdjournal/article/14/3/324/4652783",
    summary: "This study established KPV's therapeutic potential in inflammatory bowel disease. Using DSS-induced colitis in mice, researchers showed that KPV significantly reduced colonic inflammation, improved histological healing scores, and decreased pro-inflammatory cytokine production.",
  },
  {
    title: "PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation",
    authors: "Dalmasso G, Charrier-Hisamuddin L, Nguyen HT, et al.",
    journal: "Gastroenterology",
    year: "2008",
    access: "Open Access",
    url: "https://www.gastrojournal.org/article/S0016-5085(07)01807-1/fulltext",
    summary: "A mechanistic study examining how KPV enters intestinal epithelial cells. The researchers identified PepT1 as the primary uptake mechanism and demonstrated that this transport is upregulated during inflammation — effectively concentrating KPV at sites where it's needed.",
  },
  {
    title: "Antimicrobial effects of alpha-MSH peptides",
    authors: "Cutuli M, Cristiani S, Lipton JM, Catania A.",
    journal: "Journal of Leukocyte Biology",
    year: "2000",
    access: "Abstract available",
    url: "https://academic.oup.com/jleukbio/article/67/2/233/4606432",
    summary: "The first characterization of direct antimicrobial activity in KPV and related alpha-MSH fragments. Researchers found activity against both gram-positive and gram-negative bacteria as well as Candida albicans.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does KPV work?",
    intro:
      "KPV penetrates cells and inhibits NF-κB nuclear translocation — the master regulator of inflammatory gene expression. This reduces pro-inflammatory cytokines (TNF-alpha, IL-6, IL-1beta) and provides direct antimicrobial activity. Despite being derived from α-MSH (parent of Melanotan II and PT-141), KPV's anti-inflammatory effects do NOT involve melanocortin receptor activation — the 3-amino-acid fragment lacks the receptor-binding domain.",
    body: [
      "NF-κB Pathway Inhibition [1]. KPV penetrates cells and directly inhibits NF-κB nuclear translocation, the master regulator of inflammatory gene expression. This is the primary mechanism behind its anti-inflammatory effects.",
      "Cytokine Reduction [2]. Reduces pro-inflammatory cytokines TNF-alpha, IL-6, IL-1beta, and IL-8 in research models. Effects observed in colonic tissue, dermal fibroblasts, and immune cells.",
      "Antimicrobial Activity [3]. Direct antimicrobial effect against S. aureus, E. coli, and Candida albicans. Mechanism distinct from antibiotic pathways — does not promote resistance development.",
      "Melanocortin-Independent. Despite being derived from α-MSH, KPV's anti-inflammatory effects do NOT require melanocortin receptor activation. The tripeptide acts intracellularly through a separate mechanism.",
      "Mucosal Tissue Localization [4]. Particular activity in colonic epithelium and intestinal mucosa, supporting research interest in IBD applications. PepT1-mediated uptake concentrates KPV in inflamed gut tissue.",
    ],
  },
  {
    id: "research",
    title: "What is KPV used for?",
    intro:
      "KPV's research evidence base centers on inflammatory bowel disease (IBD), atopic dermatitis and skin inflammation, wound healing, and antimicrobial research. The IBD evidence in animal models is the strongest area, with PepT1-mediated uptake concentrating KPV at inflamed gut tissue. The KLOW blend (KPV + GHK-Cu + BPC-157 + TB-500) is the most popular commercial form for combined regenerative + anti-inflammatory protocols.",
    body: [
      "Inflammatory Bowel Disease [5]. Multiple animal studies show KPV reduces colitis severity in DSS and TNBS-induced colitis models. Reduced histological damage, improved mucosal healing, decreased inflammatory infiltration. Particle-based delivery systems explored to target inflamed intestinal tissue.",
      "Atopic Dermatitis & Skin Inflammation. Topical KPV formulations studied for inflammatory skin conditions. Reduced inflammatory markers and improved barrier function in research models.",
      "Wound Healing. Anti-inflammatory contribution to wound healing in research models. Often combined with BPC-157, TB-500, or GHK-Cu in compounded formulations.",
      "Antimicrobial Research [3]. Activity against drug-resistant bacterial strains. Studied as adjunct to traditional antibiotics in research contexts.",
      "KLOW Blend. Compounded blend combining KPV with GHK-Cu, BPC-157, and TB-500 (typical 50/10/10/10 mg ratio). Most popular commercial form for combined regenerative + anti-inflammatory protocol.",
    ],
  },
  {
    id: "timeline",
    title: "How long does KPV take to work?",
    intro:
      "KPV effects develop on multiple timescales. Acute anti-inflammatory effects are measurable within hours of dosing. Mucosal healing in IBD models takes 1–2 weeks. Skin inflammation improvements with topical use appear in 2–4 weeks. Most users assess KPV after 4–8 week protocols. Effects appear to be dose-dependent within the typical research range.",
    content:
      "Acute anti-inflammatory effects are measurable within hours of dosing — KPV's intracellular NF-κB inhibition is fast-acting at the molecular level. Mucosal healing in IBD models takes 1–2 weeks of consistent dosing. Skin inflammation improvements with topical use typically appear in 2–4 weeks. Most users assess KPV after 4–8 week protocols. Effects appear to be dose-dependent within the typical research range (250 mcg to 1 mg daily).",
  },
  {
    id: "dosing",
    title: "How is KPV dosed?",
    intro:
      "KPV is administered orally (enteric-coated capsules), subcutaneously, or topically depending on the application. Oral is preferred for gut applications because PepT1-mediated uptake concentrates KPV at inflamed intestinal mucosa. Injection produces systemic effects for general anti-inflammatory use. Topical formulations target skin inflammation. Cycle length is 4–8 weeks active with a 2-week break recommended.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral capsules (compounded, enteric-coated).</span> 250–500 mcg once daily for general anti-inflammatory use.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral for IBD applications.</span> Up to 500 mcg twice daily (1 mg total/day).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Subcutaneous injection.</span> 200–500 mcg once daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical (skin).</span> 0.05–0.1% concentration in creams, 1–2× daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 4–8 weeks active, 2-week break recommended.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution (injectable).</span> 5 mg vial + 2 mL bacteriostatic water = 2.5 mg/mL.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          The{" "}
          <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
          blend (GHK-Cu + BPC-157 + TB-500 + KPV) is dosed at 0.25–0.5 mL of reconstituted blend, 5 days/week &mdash; see the KLOW page for blend protocol details.
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
    title: "How is KPV administered?",
    intro: (
      <>
        KPV is given as an oral enteric-coated capsule (preferred for gut applications), a subcutaneous injection (for systemic effects), or a topical cream (for skin applications). The oral route is unique among research peptides because KPV&apos;s small tripeptide size and PepT1-mediated uptake make oral bioavailability practical for targeted intestinal action. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral capsules.</span> Take with or without food. Enteric coating typical for gut-targeted use &mdash; preserves the peptide through gastric acid for release in the intestine.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Subcutaneous route.</span> Rotate between abdomen, thigh, upper arm. Common for systemic anti-inflammatory effects rather than gut applications.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical route.</span> Apply to clean, dry skin 1–2× daily for skin inflammation research.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any &mdash; no circadian timing requirement.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> For subcutaneous, use a different site each day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume the next day. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 4–8 weeks active, 2-week break recommended.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> KPV is administered daily during the cycle by oral, subcutaneous, or topical route. The choice of route matters more than the time of day &mdash; oral with enteric coating is unmatched for gut applications because PepT1-mediated uptake concentrates KPV at inflamed intestinal tissue. Systemic blood levels matter less than local mucosal exposure for the IBD use case.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once or twice daily during the cycle (4–8 weeks on, 2-week break)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any consistent time &mdash; no circadian timing requirement</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Oral: no restriction. Injectable: no restriction. Topical: clean, dry skin.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route choice</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Oral for gut; subQ for systemic; topical for skin</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Short plasma half-life (under 1 hour); biological effects persist via gene-expression changes</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Functional effects accumulate over the cycle; acute NF-κB inhibition is fast-acting at cellular level</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. KPV research vials are typically 5 mg. Because KPV doses are small (250–500 mcg per injection), 2 mL reconstitution is the common research convention &mdash; it gives clean whole-number units across the typical dose range. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
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
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of KPV at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does KPV stack well with?",
    intro:
      "KPV pairs most naturally with BPC-157 for gut applications — its anti-inflammatory complements BPC-157's regenerative effect without mechanism overlap. The KLOW blend extends this pairing with GHK-Cu and TB-500 for a broader regenerative + anti-inflammatory protocol. KPV is also compatible with standard IBD-supportive protocols (probiotics, glutamine, omega-3). The main thing to clarify is what KPV is NOT — it doesn't activate melanocortin receptors despite the α-MSH origin, so it doesn't interact with PT-141 or Melanotan II.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157.</span>{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          is the most common pairing for gut applications. KPV&apos;s anti-inflammatory + BPC-157&apos;s regenerative effects work through complementary mechanisms.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">KLOW Blend.</span> The compounded all-in-one regenerative blend &mdash;{" "}
          <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
          (GHK-Cu + BPC-157 + TB-500 + KPV, typical 50/10/10/10 mg ratio) is the most popular commercial form.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">TB-500.</span>{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          combined with KPV for inflammation + tissue repair research.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard IBD-supportive protocols.</span> Probiotics, glutamine, omega-3 &mdash; compatible. Mechanisms are non-overlapping.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: high-dose oral copper supplements during topical KPV use.</span> Theoretical interaction with copper-binding proteins.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of KPV?",
    intro:
      "KPV has one of the cleanest side-effect profiles of any peptide on Prof. Peptide. The α-MSH-derived structure suggests low toxicity. The most-reported user effects are mild injection-site reactions (subcutaneous) or occasional GI changes (oral). No documented serious adverse events at standard doses, though long-term safety beyond 6 months is not formally characterized.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection site reactions.</span> Subcutaneous route only.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Occasional GI changes.</span> Oral route &mdash; usually mild, often resolves as the gut adjusts.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue.</span> Inconsistent across users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No documented serious adverse events at standard doses.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term safety beyond 6 months not formally characterized.</span></li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          KPV has one of the cleanest side-effect profiles of any peptide on Prof. Peptide. The α-MSH-derived structure suggests low toxicity. NOT FDA-approved for any indication.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does KPV interact with other drugs?",
    intro:
      "KPV has no documented major drug-drug interactions. NSAIDs and corticosteroids have additive anti-inflammatory effects and are generally compatible. Important clarification: KPV does NOT interact with PT-141 or Melanotan II despite the shared α-MSH origin — KPV lacks the melanocortin receptor-binding domain.",
    body: [
      "NSAIDs and corticosteroids. Additive anti-inflammatory effects, generally compatible. Monitor for combined effect when adjusting either dose.",
      "Immunosuppressants. Limited data on combination; theoretical additive immunomodulation.",
      "PT-141 / Melanotan II. DO NOT confuse KPV with these melanocortin-receptor agonists. KPV does NOT activate MCR receptors and the mechanisms are unrelated.",
      "No documented major drug interactions.",
    ],
  },
  {
    id: "storage",
    title: "How should KPV be stored?",
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
    title: "What are the limitations of KPV research?",
    intro:
      "KPV is NOT FDA-approved for any indication. Despite its small molecular size and clean side-effect profile, it has not progressed through formal clinical trials. Most evidence is from animal models (colitis, dermatitis) and cell-based research. KPV is NOT currently on the WADA prohibited list. Compounded preparations vary in quality — third-party HPLC testing recommended.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          KPV is NOT FDA-approved for any indication. Despite its small molecular size and clean side-effect profile, it has not progressed through formal clinical trials. Most evidence is from animal models (colitis, dermatitis) and cell-based research.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: KPV is NOT currently on the WADA prohibited list.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded preparations vary in quality. Third-party HPLC testing recommended for any KPV product. Combined evidence base for KLOW blend is observational only.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source KPV",
    intro:
      "KPV is not FDA-approved and is sold by specialty research peptide vendors as oral capsules, injectable lyophilized powder, or topical formulations. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes — including an oral-capsule option that's unusually well-suited to KPV's gut applications.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "integrative-peptides", note: "Oral capsules & spray — no injection needed" },
            { slug: "ascension-peptides" },
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
    title: "KPV FAQ",
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
          Brzoska T, Luger TA, Maaser C, et al. α-Melanocyte-Stimulating Hormone and Related Tripeptides: Biochemistry, Antiinflammatory and Protective Effects in Vitro and in Vivo. Endocr Rev. 2008;29(5):581-602.{" "}
          <a href="https://academic.oup.com/edrv/article/29/5/581/2355153" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://academic.oup.com/edrv/article/29/5/581/2355153
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kannengiesser K, Maaser C, Heidemann J, et al. Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of inflammatory bowel disease. Inflamm Bowel Dis. 2008;14(3):324-31.{" "}
          <a href="https://academic.oup.com/ibdjournal/article/14/3/324/4652783" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://academic.oup.com/ibdjournal/article/14/3/324/4652783
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cutuli M, Cristiani S, Lipton JM, Catania A. Antimicrobial effects of alpha-MSH peptides. J Leukoc Biol. 2000;67(2):233-9.{" "}
          <a href="https://academic.oup.com/jleukbio/article/67/2/233/4606432" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://academic.oup.com/jleukbio/article/67/2/233/4606432
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dalmasso G, Charrier-Hisamuddin L, Nguyen HT, et al. PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation. Gastroenterology. 2008;134(1):166-78.{" "}
          <a href="https://www.gastrojournal.org/article/S0016-5085(07)01807-1/fulltext" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.gastrojournal.org/article/S0016-5085(07)01807-1/fulltext
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Xiao B, Xu Z, Viennois E, et al. Orally Targeted Delivery of Tripeptide KPV via Hyaluronic Acid-Functionalized Nanoparticles Efficiently Alleviates Ulcerative Colitis. Mol Ther. 2017;25(7):1628-1640.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Alpha-melanocyte-stimulating hormone.{" "}
          <a href="https://en.wikipedia.org/wiki/Alpha-melanocyte-stimulating_hormone" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Alpha-melanocyte-stimulating_hormone
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

export default function KPVPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"KPV","description":"KPV research profile: anti-inflammatory tripeptide derived from α-MSH. NF-κB inhibition, IBD applications, dosing protocols, side effects, FAQ, and regulatory status.","url":"https://profpeptide.com/peptides/kpv","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Lysine-Proline-Valine, α-MSH (11–13), KPV Tripeptide
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Synthetic Tripeptide &mdash; α-MSH C-terminal Fragment / Anti-Inflammatory
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. Not on WADA prohibited list.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is KPV?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            KPV is a small tripeptide (lysine-proline-valine) derived from the C-terminal sequence of α-melanocyte-stimulating hormone (α-MSH). Despite its size, KPV exhibits potent anti-inflammatory and antimicrobial activity through pathways distinct from larger immune peptides. It has emerged as a research compound of interest for inflammatory bowel disease (IBD), ulcerative colitis, atopic dermatitis, and other inflammation-driven conditions. KPV&apos;s small size allows it to penetrate cells and act intracellularly, where it inhibits NF-κB signaling and reduces pro-inflammatory cytokine production. Often paired with{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
            for gut applications, or used as part of the{" "}
            <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
            blend (KPV + GHK-Cu + BPC-157 + TB-500) for broader regenerative protocols. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory effects through NF-κB pathway inhibition</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced inflammatory cytokine production (TNF-alpha, IL-6, IL-1beta)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antimicrobial activity against bacterial, fungal, and yeast infections</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mucosal healing in inflammatory bowel models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Skin inflammation reduction (atopic dermatitis, psoriasis research)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Often combined with BPC-157 in compounded blends for gut applications</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Oral capsules (compounded): 250–500 mcg daily. Subcutaneous injection: 200–500 mcg once daily. Some protocols use up to 1 mg daily for active inflammatory conditions. Topical formulations (creams) used for skin applications.
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
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">TB-500</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/klow" className="text-sm font-medium text-[#0891b2] hover:underline">KLOW</Link>
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
    <ContactLink pageName="KPV" pagePath="/peptides/kpv" />
    </div>
    </>
  );
}
