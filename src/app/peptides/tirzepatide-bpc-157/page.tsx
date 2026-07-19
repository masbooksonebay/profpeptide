import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/tirzepatide-bpc-157",
  title: "Tirzepatide + BPC-157 Research Profile — Dual GIP/GLP-1 + GI Protection | Prof. Peptide",
  description:
    "Tirzepatide + BPC-157 research blend profile: dual GIP/GLP-1 agonist paired with BPC-157 for GI-side-effect mitigation and lean-mass protection. Mechanism, dosing, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the Tirzepatide + BPC-157 blend?",
    a: (
      <>
        A community-derived research-peptide combination pairing{" "}
        <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>{" "}
        &mdash; a dual GIP and GLP-1 receptor agonist &mdash; with{" "}
        <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
        (Body Protection Compound). BPC-157 is used to blunt the gastrointestinal side effects that commonly accompany GLP-1/GIP agonist therapy (nausea, vomiting, gastroparesis) and to mitigate lean-mass and connective-tissue loss that can occur with aggressive caloric restriction during a tirzepatide protocol. No controlled trial has evaluated this combination.
      </>
    ),
  },
  {
    q: "How is tirzepatide different from semaglutide?",
    a: (
      <>
        <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>{" "}
        is a dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist, whereas{" "}
        <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>{" "}
        targets GLP-1 only. The additional GIP receptor agonism enhances insulin secretion, improves insulin sensitivity, and may contribute to greater adipose tissue reduction. SURMOUNT-1 data showed tirzepatide producing up to 22.5% mean body weight loss at the 15 mg dose &mdash; greater than semaglutide&apos;s STEP trial figures at comparable doses. GI side effect profiles are broadly similar between the two. For the BPC-157 variant using semaglutide as the base compound, see the{" "}
        <Link href="/peptides/semaglutide-bpc-157" className="text-[#3A759F] hover:underline">Semaglutide + BPC-157</Link>{" "}
        page.
      </>
    ),
  },
  {
    q: "Does BPC-157 actually help with GLP-1/GIP agonist nausea?",
    a: "No controlled trial has tested this combination. The rationale is mechanistic: BPC-157 has extensive preclinical evidence demonstrating cytoprotective effects on gastric mucosa, upregulation of prostaglandins, and modulation of the enteric nervous system. These same pathways underlie its proposed ability to blunt the nausea, delayed gastric emptying, and mucosal irritation commonly reported on tirzepatide titration. The effect is community-derived and anecdotal; researchers should treat it as a hypothesis rather than an established benefit.",
  },
  {
    q: "Why run BPC-157 separately rather than a pre-blended vial?",
    a: "Tirzepatide is dosed once weekly, whereas BPC-157 is dosed daily (250–500 mcg). Their half-lives are incompatible with a single pre-blended vial — tirzepatide has a ~5-day half-life; BPC-157 is measured in minutes to hours. A pre-blended formulation would require daily injection of a product containing the full weekly tirzepatide dose, creating severe overdose risk. Always run tirzepatide and BPC-157 from separate vials on separate schedules.",
  },
  {
    q: "Is tirzepatide FDA-approved? What about BPC-157?",
    a: (
      <>
        <span className="font-semibold">Tirzepatide</span> is FDA-approved as Mounjaro (type 2 diabetes) and Zepbound (obesity). Research-grade tirzepatide sold for laboratory use is <span className="font-semibold">not</span> the approved pharmaceutical product and has not undergone the same manufacturing and purity standards.{" "}
        <span className="font-semibold">BPC-157</span> is an FDA Category 2 bulk drug substance &mdash; it is not approved as an injectable and is prohibited for use in compounded drug products. Both are on the WADA prohibited list (BPC-157 under Section S0). Research-grade material from both compounds is sold for laboratory use only.
      </>
    ),
  },
  {
    q: "Does this blend prevent lean-mass loss from tirzepatide?",
    a: "Tirzepatide trials have documented that a meaningful percentage of weight lost is lean mass rather than fat. BPC-157 is included in this stack partly to counter this: preclinical data shows BPC-157 supports muscle fiber survival, reduces apoptosis in skeletal muscle, and promotes connective-tissue integrity. Whether these effects translate to meaningful lean-mass preservation during aggressive caloric restriction from a GIP/GLP-1 agonist has not been studied. Resistance training and adequate protein remain the only evidence-supported tools for lean-mass preservation during weight loss.",
  },
  {
    q: "How does this compare to the Wolverine Stack?",
    a: (
      <>
        The{" "}
        <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>{" "}
        (BPC-157 + TB-500) is a recovery-focused blend for tendon, ligament, and soft-tissue repair. The Tirzepatide + BPC-157 combination is a metabolic/weight-management stack where BPC-157 serves a protective support role rather than a primary repair role. Both share BPC-157 as a component. Researchers using tirzepatide primarily for metabolic goals sometimes layer in Wolverine Stack components if they are also managing an active injury, though there is no published data on the three-way combination.
      </>
    ),
  },
];

const studies = [
  {
    title: "Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1)",
    authors: "Jastreboff AM, Aronne LJ, Ahmad NN, et al.",
    journal: "New England Journal of Medicine",
    year: "2022",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
    summary:
      "The pivotal phase 3 SURMOUNT-1 trial (PMID 35658024). Adults with obesity (no diabetes) randomized to tirzepatide 5, 10, or 15 mg once weekly vs placebo for 72 weeks. Mean weight loss was 15.0%, 19.5%, and 20.9% respectively — with the 15 mg group showing up to 22.5% weight loss. Body composition analyses confirmed that a portion of weight lost was lean mass, supporting the rationale for including lean-mass-protective co-peptides in research protocols. The GI adverse-event profile (nausea, diarrhea, vomiting) was the primary driver of discontinuation and provides the direct clinical basis for adding BPC-157&apos;s cytoprotective properties.",
  },
  {
    title: "Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes (SURPASS-2)",
    authors: "Frias JP, Davies MJ, Rosenstock J, et al.",
    journal: "New England Journal of Medicine",
    year: "2021",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/34170647/",
    summary:
      "The SURPASS-2 head-to-head trial comparing tirzepatide (5, 10, 15 mg) to semaglutide 1 mg once weekly in type 2 diabetes. Tirzepatide produced superior HbA1c reduction and weight loss at all doses vs semaglutide, confirming the incremental benefit of dual GIP+GLP-1 agonism over GLP-1-only therapy. This trial also documents the comparative GI side-effect burden between the two agents at clinically used doses &mdash; relevant for researchers choosing between the tirzepatide+BPC-157 and semaglutide+BPC-157 variant protocols.",
  },
  {
    title: "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing",
    authors: "Sikiric P, Hahm KB, Blagaic AB, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2021",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full",
    summary:
      "Comprehensive review of BPC-157 gastrointestinal cytoprotection and wound healing evidence. The paper documents BPC-157&apos;s role in protecting gastric and intestinal mucosa via prostaglandin upregulation, nitric oxide modulation, and suppression of inflammatory mediators &mdash; the mechanistic basis for its proposed use as a GI-protection adjunct during GLP-1/GIP agonist titration. The review also covers BPC-157&apos;s enteric nervous system effects, which are directly relevant to tirzepatide&apos;s gastroparesis-like side effects mediated via GLP-1 receptors in the gut.",
  },
  {
    title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
    authors: "Vasireddi N, Hahamyan H, Salata MJ, et al.",
    journal: "HSS Journal",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
    summary:
      "The most current systematic review of BPC-157 across musculoskeletal and connective-tissue injury models. Across 36 studies, BPC-157 consistently promoted muscle, tendon, and ligament healing through FAK-paxillin signaling, VEGFR2-Akt-eNOS activation, and collagen synthesis upregulation. For the tirzepatide+BPC-157 blend, this review provides the evidence base for BPC-157&apos;s proposed lean-mass and connective-tissue preservation role during weight-loss-driven muscle catabolism.",
  },
  {
    title: "Dual GIP and GLP-1 Receptor Agonism: Tirzepatide&apos;s Mechanism and Body Composition Effects",
    authors: "Nauck MA, D&apos;Alessio DA",
    journal: "Cardiovascular Diabetology",
    year: "2022",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/36050763/",
    summary:
      "Review of tirzepatide&apos;s dual receptor mechanism, body composition effects, and differentiation from GLP-1 monotherapy. The paper details how GIP receptor agonism contributes to adipose-tissue insulin sensitization and possibly to direct adipocyte effects beyond what GLP-1 agonism alone achieves, explaining the superior weight loss observed with tirzepatide vs semaglutide. The lean-mass loss data and the context for combining tirzepatide with anabolic or tissue-protective co-peptides are discussed in terms of total body composition remodeling goals.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does the Tirzepatide + BPC-157 blend work?",
    intro:
      "The Tirzepatide + BPC-157 blend targets two distinct biological problems created by aggressive GIP/GLP-1 agonist therapy: gastrointestinal distress during dose titration, and lean-mass catabolism from caloric restriction. Tirzepatide drives the primary metabolic effect; BPC-157 functions as a protective co-agent.",
    body: [
      "Tirzepatide &mdash; Dual GIP and GLP-1 Receptor Agonism [1][2][5]. A synthetic peptide designed as a &ldquo;twincretin&rdquo; &mdash; it co-agonizes both the GIP receptor and the GLP-1 receptor simultaneously. GLP-1 receptor activation suppresses appetite via hypothalamic satiety signaling, slows gastric emptying, enhances insulin secretion, and reduces glucagon. GIP receptor activation adds insulin secretion amplification, improves peripheral insulin sensitivity, and may exert direct adipocyte effects that accelerate fat mobilization. The combination drives greater weight loss than GLP-1-only agonism (semaglutide) at comparable doses in clinical trials. Tirzepatide has a plasma half-life of approximately 5 days, enabling once-weekly subcutaneous dosing.",
      "Tirzepatide Body Composition Effects [1][5]. SURMOUNT-1 data document weight loss of up to 22.5% of body weight at the 15 mg dose over 72 weeks. However, body composition analysis confirms that approximately 25–40% of weight lost is lean mass (muscle + bone mineral density + non-fat soft tissue) rather than fat &mdash; a consistent finding across GLP-1/GIP agonist trials. This lean-mass loss is the primary research-community rationale for adding BPC-157 to a tirzepatide protocol.",
      "Tirzepatide GI Side-Effect Profile [1][2]. Nausea (40–45%), diarrhea (25–30%), vomiting (15–20%), and constipation are the most common adverse events, predominantly during titration. Reduced gastric motility (gastroparesis effect) is a GLP-1 receptor-mediated consequence. These GI effects are the primary reason for the weekly titration schedule and the primary driver of discontinuation in clinical trials &mdash; and the most direct clinical rationale for co-administering BPC-157.",
      "BPC-157 &mdash; GI Cytoprotection and Mucosal Defense [3]. A synthetic pentadecapeptide (15 amino acids) originally isolated from human gastric juice. At GI mucosa, BPC-157 upregulates prostaglandins (especially PGE2), modulates nitric oxide production, suppresses NF-κB-mediated inflammatory cascades, and protects against mucosal erosion. These mechanisms directly oppose the GI motility disruption and mucosal irritation caused by GLP-1 receptor activation, providing the cytoprotective rationale for pairing BPC-157 with tirzepatide.",
      "BPC-157 &mdash; Lean Mass and Connective Tissue Protection [4]. BPC-157 activates the FAK-paxillin signaling axis and VEGFR2-Akt-eNOS pathway to promote angiogenesis, myocyte survival, and collagen synthesis. During tirzepatide-driven caloric restriction, catabolism degrades skeletal muscle and connective tissue; BPC-157&apos;s growth factor and angiogenic signaling may partially offset this. The effect on lean mass preservation during active weight loss has not been directly studied.",
      "Mechanistic Summary. Tirzepatide creates substantial metabolic benefit but also a predictable toxicity profile (GI distress) and a lean-tissue liability (catabolism). BPC-157 addresses both: GI cytoprotection for the titration window and growth-factor/anabolic signaling support for the lean-mass concern. The combination is not pharmacologically synergistic at a receptor level &mdash; the two peptides act on entirely separate systems &mdash; but the support role is mechanistically coherent.",
    ],
  },
  {
    id: "research",
    title: "What is the Tirzepatide + BPC-157 blend used for?",
    intro:
      "Community research use of this blend clusters around metabolic goals where tirzepatide is the primary agent and BPC-157 plays a support role. No controlled trial has tested the combination. All applications below are extrapolated from each component&apos;s independent clinical or preclinical literature.",
    body: [
      "Weight Loss and Metabolic Optimization [1][2]. Tirzepatide is the primary agent. SURMOUNT-1 demonstrated mean weight loss of 20.9% at 15 mg over 72 weeks. BPC-157 is included as a support peptide &mdash; not to augment weight loss, but to reduce GI side-effect-driven discontinuation and protect lean mass during the deficit period.",
      "Nausea and GI Side-Effect Mitigation [3]. BPC-157&apos;s most established preclinical application. Gastric mucosa protection, anti-inflammatory modulation of the enteric nervous system, and prostaglandin upregulation provide the mechanistic basis. Researchers report reduced nausea severity during tirzepatide titration when co-administering BPC-157, though this is observational and uncontrolled.",
      "Lean-Mass and Connective-Tissue Preservation [4]. During aggressive caloric restriction driven by GIP/GLP-1 agonism, skeletal muscle catabolism is documented. BPC-157&apos;s anabolic and cytoprotective signaling provides a rationale for protective co-administration. Resistance training and adequate protein (1.6&ndash;2.0 g/kg) remain the primary evidence-based tools; BPC-157 is used as a research adjunct.",
      "Post-Procedure or Injury Recovery Concurrent with Tirzepatide Use. Some researchers running tirzepatide for metabolic goals also have active musculoskeletal injuries. BPC-157&apos;s independent role in tendon, ligament, and soft-tissue repair means it serves a dual purpose in this context. The tirzepatide component does not contribute to musculoskeletal repair.",
      "Glycemic Control Support (Type 2 Diabetes Research Context) [2]. Tirzepatide produces superior HbA1c reduction and post-prandial glucose control vs GLP-1 monotherapy in type 2 diabetes models. BPC-157 has independent gastroprotective and mucosal effects relevant to the GI complications common in metabolic disease. Research applications in this context are early-stage and anecdotal.",
    ],
  },
  {
    id: "timeline",
    title: "How long does the Tirzepatide + BPC-157 blend take to work?",
    intro:
      "The two peptides have completely different onset kinetics. Tirzepatide reaches steady-state plasma levels after approximately 4 weeks of once-weekly dosing. BPC-157&apos;s GI cytoprotective effects are active within the first few days of use, making it valuable from the very first tirzepatide dose.",
    content:
      "Week 1&ndash;4: Tirzepatide titration phase (starting at 2.5 mg/week). Nausea and GI distress are most prominent during this window &mdash; BPC-157 is most critical here. Appetite suppression begins within the first week for most subjects. Week 4&ndash;12: Dose escalation continues (5 mg, 7.5 mg). Metabolic effects (weight loss, glucose improvement) accumulate. BPC-157 continues daily throughout. Week 12+: Maintenance dosing (10 mg or 15 mg target) once titrated. Lean-mass considerations become more prominent as cumulative caloric restriction mounts &mdash; BPC-157&apos;s anabolic signaling becomes the dominant rationale. Off-cycle or dose reduction is researcher-directed; BPC-157 can be continued after tirzepatide is reduced or discontinued to support tissue recovery during the refeeding period.",
  },
  {
    id: "dosing",
    title: "How is the Tirzepatide + BPC-157 blend dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Both peptides are administered by subcutaneous injection but on entirely separate schedules from separate vials. Combining them in one vial is not appropriate due to incompatible dosing frequencies and half-lives. Tirzepatide is once-weekly; BPC-157 is daily.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard research protocol:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Tirzepatide titration (separate vial, once weekly).</span> Week 1&ndash;4: 2.5 mg subcutaneously once weekly. Week 5&ndash;8: 5 mg once weekly. Week 9&ndash;12: 7.5 mg once weekly. Continue escalating to 10 mg and 15 mg as tolerated. Standard research titration mirrors the Mounjaro/Zepbound label: 2.5 mg &rarr; 5 mg &rarr; 7.5 mg &rarr; 10 mg &rarr; 12.5 mg &rarr; 15 mg in 4-week increments.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">BPC-157 (separate vial, once daily).</span> 250&ndash;500 mcg subcutaneously once daily. Some researchers split into 2&times; daily (morning and evening) at 125&ndash;250 mcg per injection during the highest-nausea titration windows. BPC-157 is begun at or before the first tirzepatide dose.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Cycle length.</span> BPC-157 is run continuously alongside tirzepatide. Tirzepatide cycles are typically 20&ndash;72 weeks in clinical research contexts; research-grade protocols vary widely.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Injection site.</span> Abdomen, thigh, or upper arm. Rotate sites. Tirzepatide and BPC-157 can be injected at different sites on the same day, or the same site at different times. Do not mix in the same syringe.
          </li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Reconstitution notes (lyophilized vials)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Tirzepatide research vials.</span> Research-grade tirzepatide is typically sold as lyophilized powder in 2 mg, 5 mg, or 10 mg vials. Reconstitute with bacteriostatic water for injection (BAC water). A 5 mg vial + 1 mL BAC water = 5 mg/mL solution; draw 0.5 mL for a 2.5 mg dose. Swirl gently &mdash; do not shake.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">BPC-157 vials.</span> Typically sold as lyophilized powder in 5 mg vials. A 5 mg vial + 2 mL BAC water = 2.5 mg/mL solution. Draw 0.1 mL for 250 mcg or 0.2 mL for 500 mcg. Keep reconstituted solution refrigerated and use within 30 days.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Critical: never pre-blend the two peptides.</span> Tirzepatide is once-weekly; BPC-157 is daily. A combined vial would require injecting the full weekly tirzepatide dose daily, resulting in dangerous overdose. Always use separate vials and separate schedules.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Neither peptide is FDA-approved for human injection in research-grade form. Dosing is community-derived from each component&apos;s research literature and clinical trial data; there are no approved retail dosing standards for the blend.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is the Tirzepatide + BPC-157 blend administered?",
    intro:
      "Both peptides are administered as subcutaneous injections using an insulin syringe. They are never mixed in the same vial or the same syringe. Tirzepatide is injected once weekly on a consistent day; BPC-157 is injected daily, ideally at the same time each day.",
    body: [
      "Route. Subcutaneous (under the skin, not into muscle). Use a 29&ndash;31 gauge, 4&ndash;6 mm insulin syringe for both compounds.",
      "Tirzepatide timing. Once weekly on a consistent day (e.g., every Monday). The same day each week helps maintain steady-state plasma levels and prevents the dose from drifting.",
      "BPC-157 timing. Once daily, ideally in the morning or evening at a consistent time. Some researchers front-load BPC-157 to twice daily (morning and evening) during the first 2&ndash;4 weeks of tirzepatide titration when GI side effects are highest.",
      "Site rotation. Abdomen (avoiding 2-inch radius around navel), upper outer thigh, back of upper arm. Rotate between sites each injection. Record sites to avoid re-injecting the same location within 1&ndash;2 weeks.",
      "Same-day injections. On the day tirzepatide is administered, BPC-157 can be injected at a different site or at a different time of day. Do not inject both compounds from the same syringe.",
      "Reconstitution. Use bacteriostatic water for injection (BAC water) for both compounds. Swirl gently &mdash; do not shake &mdash; to avoid peptide degradation.",
      "Missed dose. Tirzepatide: if less than 4 days have passed since the missed dose, inject as soon as possible and resume the weekly schedule. If more than 4 days, skip and wait for the next scheduled weekly dose. BPC-157: resume the next day; do not double-dose.",
    ],
  },
  {
    id: "stacks",
    title: "What does the Tirzepatide + BPC-157 blend stack well with?",
    intro:
      "The combination is already a 2-peptide stack. Further additions should be deliberate &mdash; stacking multiple peptides during aggressive caloric restriction from tirzepatide increases polypharmacy complexity without established safety data for multi-agent combinations.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Resistance training + 1.6&ndash;2.0 g/kg protein.</span> The highest-evidence intervention for lean-mass preservation during caloric restriction. Non-negotiable if lean-mass protection is a goal. Mechanical loading drives muscle protein synthesis independent of any peptide co-administration.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cagrilintide (+ tirzepatide = &ldquo;CagriSema&rdquo; analog / &ldquo;CagriZep&rdquo;).</span> Cagrilintide is a long-acting amylin analog that reduces appetite through a complementary satiety pathway (area postrema / nucleus tractus solitarius), independent of GLP-1/GIP. Early data suggest additive weight loss when combined with semaglutide; the tirzepatide + cagrilintide combination is an active research area. See{" "}
          <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">TB-500 (for concurrent musculoskeletal injury).</span> Researchers who are managing an active tendon, ligament, or soft-tissue injury alongside a tirzepatide protocol sometimes add TB-500 to BPC-157&apos;s daily dose to access the full{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>{" "}
          recovery protocol in parallel with the metabolic work.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: multiple GLP-1 or GIP agonists simultaneously.</span> Do not combine tirzepatide with semaglutide, liraglutide, or other GLP-1/GIP agonists. Additive receptor activation amplifies GI side effects and hypoglycemia risk without established incremental benefit.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: GH-class secretagogues during the titration window.</span> Adding GH secretagogues (CJC-1295, Ipamorelin) introduces insulin sensitivity disruption that opposes tirzepatide&apos;s glycemic benefits. If researchers wish to run a GH protocol, doing so in a separate cycle from tirzepatide titration is the more conservative approach.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of the Tirzepatide + BPC-157 blend?",
    intro:
      "The side-effect profile of this combination is dominated by tirzepatide&apos;s well-documented GI adverse events. BPC-157 is specifically used to mitigate these. BPC-157 itself contributes a mild and distinct side-effect profile. No controlled safety data exist for the combination.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users &mdash; primarily from tirzepatide)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Nausea.</span> The most common tirzepatide adverse event (40&ndash;45% incidence in SURMOUNT-1). Most prominent during titration. BPC-157 co-administration is intended to reduce severity, but this benefit is uncontrolled.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Diarrhea.</span> Second most common (25&ndash;30%). GLP-1-mediated intestinal motility changes. Typically transient during each dose escalation step.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Vomiting.</span> Reported in approximately 15&ndash;20% of subjects. More severe during rapid dose escalation; conservative titration schedules reduce incidence.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Reduced appetite and early satiety.</span> A desired effect of tirzepatide at target dose; can be uncomfortable during early weeks.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Mild injection-site reactions (BPC-157).</span> Redness, transient pinkness. The most commonly reported BPC-157 side effect.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Constipation.</span> Reported in approximately 10&ndash;15% of tirzepatide subjects, particularly at higher doses. More common at 10&ndash;15 mg maintenance.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Fatigue.</span> Reported during dose escalation periods; typically transient. Can reflect caloric deficit contribution in addition to any peptide-direct effect.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Headache.</span> Reported during the first weeks of tirzepatide use; mechanism unclear (possibly dehydration-related from reduced fluid intake or GLP-1 CNS effects).
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Transient mild fatigue (BPC-157).</span> Occasionally reported post-injection; resolves within hours.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Gastroparesis.</span> Severe gastric emptying delay has been reported with GLP-1/GIP agonist use, including cases requiring medical intervention. This risk persists regardless of BPC-157 co-administration.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Pancreatitis.</span> A labeled warning for GLP-1/GIP agonists including tirzepatide. Rare but serious; discontinue immediately if upper abdominal pain with nausea/vomiting develops.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Thyroid C-cell tumor risk (tirzepatide).</span> Observed in rodent studies at supra-clinical doses; human relevance unclear. A labeled warning nonetheless. Not applicable to BPC-157.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Lean-mass loss.</span> Not a traditional adverse event, but a documented consequence of tirzepatide-driven caloric restriction. Up to 25&ndash;40% of weight lost may be lean mass. BPC-157 co-administration is intended to mitigate this; the degree of protection is not established.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Anti-doping prohibitions.</span> BPC-157 is on the WADA prohibited list (Section S0). Tirzepatide is prohibited under the class of hormones and metabolic modulators where applicable. Tested athletes must not use either compound.
            </li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The combination safety profile has not been formally studied. Serious adverse events from this blend are most likely to originate from tirzepatide&apos;s established GI and endocrine risk profile. BPC-157 has a favorable preclinical safety record individually.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does the Tirzepatide + BPC-157 blend interact with other drugs?",
    intro:
      "Tirzepatide has clinically significant drug interactions due to its effect on gastric emptying and insulin secretion. BPC-157 has no well-documented systemic drug interactions. The primary concern is tirzepatide-driven interaction with oral medications whose absorption depends on gastric transit time.",
    body: [
      "Insulin and insulin secretagogues (sulfonylureas). Tirzepatide enhances insulin secretion; combining with exogenous insulin or sulfonylureas increases hypoglycemia risk. Dose reduction of the co-agent is typically required.",
      "Oral contraceptives and other time-sensitive oral medications. Tirzepatide-induced gastroparesis slows gastric emptying and may reduce peak plasma levels and Cmax of oral drugs. Researchers using oral hormonal contraceptives should consider non-oral alternatives or account for reduced absorption during titration.",
      "Anticoagulants (warfarin, DOACs). No direct tirzepatide interaction documented, but erratic food intake and nausea/vomiting during titration can affect INR stability in warfarin users. BPC-157&apos;s angiogenic signaling adds a theoretical &mdash; but undocumented &mdash; interaction concern.",
      "Alcohol. Tirzepatide-associated nausea is worsened by alcohol. No BPC-157-specific alcohol interaction documented.",
      "NSAIDs. Chronic NSAID use may blunt some of BPC-157&apos;s prostaglandin-mediated GI cytoprotective effects; the same NSAIDs increase GI irritation that both tirzepatide and BPC-157 are trying to minimize &mdash; avoiding chronic NSAID use during a tirzepatide protocol is generally advisable regardless of BPC-157 status.",
      "Other GLP-1/GIP agonists. Do not combine tirzepatide with semaglutide, liraglutide, or any other GLP-1 or GIP agonist. Additive receptor activation amplifies GI adverse events and hypoglycemia risk.",
    ],
  },
  {
    id: "storage",
    title: "How should the Tirzepatide + BPC-157 blend be stored?",
    body: [
      "Tirzepatide (lyophilized powder): -20°C long-term. Once reconstituted: 2–8°C (refrigerated), use within 28 days. Do not freeze reconstituted solution.",
      "BPC-157 (lyophilized powder): -20°C long-term, 2–8°C short-term. Once reconstituted: 2–8°C, use within 30 days. Do not freeze reconstituted solution.",
      "Reconstitution solvent: bacteriostatic water for injection (BAC water) for both vials. Swirl gently — do not shake — to avoid peptide denaturation.",
      "Store both vials separately, clearly labeled with reconstitution date and concentration.",
      "Protect both compounds from light — use amber vials or store in original packaging.",
      "Discard if any solution is cloudy, discolored, or contains visible particles.",
      "Do not store tirzepatide at room temperature for extended periods — even unconstituted powder degrades faster above 8°C.",
    ],
  },
  {
    id: "where-to-buy",
    title: "Where to source Tirzepatide + BPC-157",
    intro:
      "Neither compound is FDA-approved in research-grade form. Both are sold for laboratory use only by specialty peptide vendors. Because the two peptides must be run on different schedules, researchers source them as separate vials — no legitimate pre-blended Tirzepatide+BPC-157 formulation exists (incompatible dosing frequencies make a pre-blend dangerous). The vendors below carry both research-grade tirzepatide and BPC-157 separately.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "ez-peptides", note: "Stocks research-grade tirzepatide and BPC-157 separately" },
            { slug: "glacier-aminos" },
            { slug: "peptide-partners" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">
            See all verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What are the limitations of Tirzepatide + BPC-157 research?",
    intro:
      "This combination has no controlled trial evidence whatsoever as a blend. All mechanistic claims derive from each component&apos;s independent literature. Researchers should weigh the meaningful regulatory, safety, and evidence limitations before drawing conclusions.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">No combination trial exists.</span> The Tirzepatide + BPC-157 blend is entirely community-derived. No randomized controlled trial &mdash; or any prospective human study &mdash; has tested this combination. GI-protection and lean-mass-preservation claims for BPC-157 as a co-agent during tirzepatide therapy are mechanistic hypotheses, not established outcomes.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tirzepatide evidence is the clinical-trial record, not the research-grade product.</span> SURMOUNT and SURPASS trial data were generated with pharmaceutical-grade, FDA-regulated Mounjaro/Zepbound &mdash; not with research-grade lyophilized tirzepatide of variable purity. Research-grade tirzepatide&apos;s purity, impurity profile, and stability are not subject to the same regulatory oversight as the approved product.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157 evidence is almost entirely preclinical.</span> No controlled human trial of BPC-157 as a GI-protection or lean-mass-preservation agent exists. Animal-model data are extensive but do not confirm human translatability.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Regulatory status.</span> Tirzepatide in its research-grade form is NOT the FDA-approved product. BPC-157 is an FDA Category 2 bulk drug substance &mdash; not approved for injection. Both are prohibited by WADA. Tested athletes must not use either compound in any form.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Quality variability.</span> Research-grade peptide quality varies dramatically by vendor. HPLC testing for purity and correct identity of both compounds is strongly recommended before use in any research protocol.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Tirzepatide + BPC-157 FAQ",
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
          Jastreboff AM, Aronne LJ, Ahmad NN, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/35658024/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/35658024/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Frias JP, Davies MJ, Rosenstock J, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes. N Engl J Med. 2021;385(6):503-515.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/34170647/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/34170647/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Hahm KB, Blagaic AB, et al. Stable Gastric Pentadecapeptide BPC 157 and Wound Healing. Front Pharmacol. 2021.{" "}
          <a href="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vasireddi N, Hahamyan H, Salata MJ, et al. Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review. HSS J. 2025.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Nauck MA, D&apos;Alessio DA. Tirzepatide, a dual GIP/GLP-1 receptor co-agonist for the treatment of type 2 diabetes with unmatched effectiveness regrading glycaemic control and body weight reduction. Cardiovasc Diabetol. 2022;21(1):169.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/36050763/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/36050763/
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
          No controlled trial has tested the Tirzepatide + BPC-157 combination. The studies below are the key peer-reviewed sources for each component&apos;s mechanism &mdash; the evidence base for the blend&apos;s mechanistic rationale.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function TirzepatideBpc157Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Tirzepatide + BPC-157","description":"Tirzepatide + BPC-157 research blend profile: dual GIP/GLP-1 agonist paired with BPC-157 for GI-side-effect mitigation and lean-mass protection. Mechanism, dosing, side effects, FAQ.","url":"https://profpeptide.com/peptides/tirzepatide-bpc-157","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Tirzepatide + BPC-157"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
      <div className="section max-w-3xl">
        <Link
          href="/peptides"
          className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
        >
          Back to Peptide Library
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tirzepatide + BPC-157</h1>
          <span className="tag">Metabolic &amp; GI Protection</span>
          <span className="tag">Research-Grade</span>
          <span className="tag">Combination Blend</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
          Last reviewed: May 28, 2026
        </p>
        <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Tirzepatide/BPC-157 Blend, Twincretin + BPC Stack, GIP/GLP-1 + BPC Protocol
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Metabolic &amp; GI Protection Blend (2-component)
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research-grade only &mdash; Tirzepatide (research-grade, not FDA-approved product); BPC-157 (FDA Category 2 bulk drug substance, not approved injectable)
          </p>
        </div>

        <div id="overview" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is the Tirzepatide + BPC-157 blend?</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Tirzepatide + BPC-157 is a community-derived research-peptide blend pairing{" "}
              <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>{" "}
              &mdash; a dual GIP and GLP-1 receptor agonist (&ldquo;twincretin&rdquo;) with superior weight-loss efficacy vs GLP-1-only agents &mdash; with{" "}
              <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
              (Body Protection Compound) as a protective co-agent. BPC-157 addresses two primary liabilities of tirzepatide therapy: gastrointestinal side effects during dose titration, and lean-mass catabolism during aggressive caloric restriction. The two compounds run from separate vials on separate schedules (tirzepatide once weekly; BPC-157 daily) &mdash; no pre-blended formulation is appropriate given incompatible dosing frequencies. This is the tirzepatide-specific variant of the GLP-1+BPC-157 concept; for the GLP-1-only version, see{" "}
              <Link href="/peptides/semaglutide-bpc-157" className="text-[#3A759F] hover:underline">Semaglutide + BPC-157</Link>.
            </p>
            <div>
              <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
                Reported benefits:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Dual GIP + GLP-1 receptor agonism producing superior weight loss vs GLP-1 monotherapy (SURMOUNT-1: up to 22.5% mean body weight loss at 15 mg)</li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">GI mucosal cytoprotection via BPC-157 to blunt nausea, vomiting, and gastroparesis during tirzepatide titration</li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lean-mass and connective-tissue protection via BPC-157&apos;s anabolic and cytoprotective signaling during caloric restriction</li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved glycemic control and insulin sensitivity from tirzepatide&apos;s dual-receptor mechanism</li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory coverage from BPC-157 at the GI and systemic level</li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Potential reduction in titration-driven discontinuation by mitigating GI adverse events</li>
              </ul>
            </div>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Tirzepatide 2.5 mg subcutaneously once weekly (titrating every 4 weeks: 2.5 &rarr; 5 &rarr; 7.5 &rarr; 10 &rarr; 12.5 &rarr; 15 mg) from a separate vial + BPC-157 250&ndash;500 mcg subcutaneously once daily from a separate vial. Never pre-blended.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Sold as two separate vials by research peptide vendors. Neither component is FDA-approved in research-grade form. See{" "}
              <Link href="/coupons" className="text-[#3A759F] hover:underline">
                Verified Discount Codes &rarr;
              </Link>{" "}
              for current vetted vendor options.
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
          {["Metabolic", "Weight Loss", "GI Protection", "Lean Mass", "Anti-Inflammatory", "Combination Blend", "Preclinical"].map((tag) => (
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
            <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#3A759F] hover:underline">Tirzepatide</Link>
            <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">BPC-157</Link>
            <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#3A759F] hover:underline">Semaglutide</Link>
            <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#3A759F] hover:underline">Cagrilintide</Link>
          </div>
        </div>

        <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/peptides/semaglutide-bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">Semaglutide + BPC-157</Link>
            <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#3A759F] hover:underline">Wolverine Stack</Link>
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
        <ContactLink pageName="Tirzepatide + BPC-157" pagePath="/peptides/tirzepatide-bpc-157" />
      </div>
    </>
  );
}
