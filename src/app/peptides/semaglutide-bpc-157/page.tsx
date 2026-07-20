import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/semaglutide-bpc-157",
  title: "Semaglutide + BPC-157 Blend Research Profile — GLP-1 Weight Loss with GI Protection | Prof. Peptide",
  description:
    "Semaglutide + BPC-157 research profile: GLP-1 receptor agonist paired with BPC-157 for GI side-effect mitigation and lean-mass protection during weight loss. Mechanism, dosing, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the Semaglutide + BPC-157 blend?",
    a: (
      <>
        The Semaglutide + BPC-157 blend is a community-derived research protocol pairing{" "}
        <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">
          Semaglutide
        </Link>{" "}
        (a GLP-1 receptor agonist) with{" "}
        <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">
          BPC-157
        </Link>{" "}
        (Body Protection Compound). The rationale is mechanistic: Semaglutide drives meaningful weight
        loss but frequently causes nausea, vomiting, and GI distress, and accelerated weight loss is
        associated with lean-mass loss. BPC-157&apos;s established GI cytoprotective activity and
        tissue-repair signaling are used by researchers to blunt the GI side-effect burden and counter
        the muscle and connective-tissue loss that accompanies rapid caloric deficit.
      </>
    ),
  },
  {
    q: "Is this blend available as a single pre-mixed vial?",
    a: "No. Semaglutide and BPC-157 have incompatible dosing schedules and very different half-lives — Semaglutide is dosed weekly (7-day half-life); BPC-157 is dosed daily (short plasma half-life under 30 minutes). They are not formulated together in a single vial by any major vendor. Researchers run them as two separate vials, reconstituted and injected independently according to each compound's schedule.",
  },
  {
    q: "Does BPC-157 actually reduce GLP-1 nausea?",
    a: "There is no controlled trial of BPC-157 as an adjunct to semaglutide or any GLP-1 agonist. The rationale is mechanistic: BPC-157 has extensive preclinical evidence of cytoprotective activity in gastric and intestinal epithelium — it reduces inflammation, stabilizes mucosal integrity, and modulates enteric nervous system signaling, which is the same tissue network involved in GLP-1-induced nausea. Researchers use it for this purpose, but controlled evidence for the specific combination does not exist.",
  },
  {
    q: "How does research-grade semaglutide differ from Wegovy and Ozempic?",
    a: "Wegovy and Ozempic are FDA-approved pharmaceutical products (sema­glutide) manufactured to GMP standards with documented purity, potency, and sterility. Research-grade semaglutide sold by peptide vendors is not the FDA-approved product — it is not manufactured under GMP, is not sterile by pharmaceutical standards, and is sold for laboratory use only. The molecular structure is the same, but the regulatory status, manufacturing controls, and clinical oversight are entirely different.",
  },
  {
    q: "Is BPC-157 FDA-approved?",
    a: "No. BPC-157 sits on the FDA Category 2 bulk drug substance list — it is designated as a substance that lacks adequate evidence of clinical use and cannot be compounded for human use under Section 503A or 503B pharmacies. It is sold as a research chemical for laboratory use only. BPC-157 is also on the WADA prohibited list under Section S0 (non-approved substances). Tested athletes should not use BPC-157 in any form.",
  },
  {
    q: "Will I lose muscle on semaglutide?",
    a: "Studies of semaglutide and tirzepatide in clinical trials have documented that approximately 25–40% of weight lost is lean mass, depending on baseline body composition, protein intake, and training status. Resistance training and adequate protein intake (1.2–1.6 g/kg) are the primary evidence-based tools for attenuating lean-mass loss. BPC-157 is used by researchers for its tissue-repair and anabolic signaling, but there is no controlled trial demonstrating that BPC-157 specifically preserves lean mass during GLP-1-driven weight loss.",
  },
  {
    q: "Where can I source research-grade semaglutide and BPC-157?",
    a: (
      <>
        Both compounds are available separately from research peptide vendors. Because they are not
        pre-blended, researchers source two vials independently. PP maintains a list of vetted vendors
        with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title:
      "Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)",
    authors: "Wilding JPH, Batterham RL, Calanna S, et al.",
    journal: "New England Journal of Medicine",
    year: "2021",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
    summary:
      "The landmark STEP 1 trial (n=1,961) established once-weekly subcutaneous semaglutide 2.4 mg as producing ~15% mean body weight reduction over 68 weeks versus ~2.4% with placebo. Nausea was reported in 44.2% of participants and vomiting in 24.8%, predominantly in the titration phase — the GI side-effect profile that drives co-administration of BPC-157 in research settings. The trial enrolled adults without type 2 diabetes, making it the foundational weight-management efficacy data for research-grade semaglutide protocols.",
  },
  {
    title:
      "Effects of Antidiabetic Drugs on Muscle Mass in Type 2 Diabetes Mellitus",
    authors: "Ida S, Kaneko R, Imataka K, et al.",
    journal: "Current Diabetes Reviews",
    year: "2021",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/32628589/",
    summary:
      "Analysis of lean-mass composition changes during GLP-1 agonist therapy. GLP-1 receptor agonist-driven weight loss consistently involves meaningful lean-mass reduction, estimated at 25–40% of total weight lost across trials. This lean-mass loss — encompassing skeletal muscle and connective tissue — is the mechanistic rationale for pairing a tissue-repair peptide like BPC-157 with semaglutide protocols. The paper underscores the importance of resistance training and protein intake as primary countermeasures.",
  },
  {
    title:
      "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing",
    authors: "Sikiric P, Hahm KB, Blagaic AB, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2021",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full",
    summary:
      "Comprehensive review of BPC-157&apos;s wound-healing evidence spanning GI mucosal repair, vascular protection, and soft-tissue regeneration. BPC-157 demonstrates consistent cytoprotective activity in gastric and intestinal models — stabilizing mucosal barrier function, reducing inflammatory cytokine cascades, and promoting angiogenesis. These GI-protective effects are the direct mechanistic basis for using BPC-157 as a co-agent during semaglutide administration to mitigate nausea and mucosal irritation.",
  },
  {
    title:
      "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
    authors: "Vasireddi N, Hahamyan H, Salata MJ, et al.",
    journal: "HSS Journal",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
    summary:
      "The most current systematic review of BPC-157 across 36 studies in musculoskeletal and sports medicine contexts. BPC-157 consistently promoted healing of muscle, tendon, and connective tissue by upregulating growth factors and modulating FAK-paxillin, VEGFR2-Akt-eNOS, and nitric oxide signaling. These same tissue-repair pathways provide the rationale for using BPC-157 to counter lean-mass and connective-tissue degradation that accompanies rapid GLP-1-driven weight loss.",
  },
  {
    title:
      "Semaglutide 2.4 mg Once a Week in Adults with Overweight or Obesity, and Type 2 Diabetes (STEP 2)",
    authors: "Davies M, Faerch L, Jeppesen OK, et al.",
    journal: "The Lancet",
    year: "2021",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/33667417/",
    summary:
      "STEP 2 evaluated once-weekly semaglutide 2.4 mg in adults with overweight/obesity and type 2 diabetes (n=1,210). Mean weight loss was 9.6% over 68 weeks. GI adverse events were again the primary tolerability concern, with nausea and diarrhea the most frequent reasons for dose reduction or study discontinuation. The consistent GI tolerability pattern across STEP 1 and STEP 2 reinforces the relevance of GI-protective adjuncts in research protocols.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does the Semaglutide + BPC-157 blend work?",
    intro:
      "The blend pairs two mechanistically unrelated peptides that address different phases of GLP-1-driven weight loss. Semaglutide acts centrally and peripherally via GLP-1 receptor agonism to reduce appetite, slow gastric emptying, and drive caloric deficit. BPC-157 acts locally on gastrointestinal epithelium and connective tissue via growth factor and nitric-oxide signaling to cytoprotect the gut lining and promote tissue repair. Neither compound directly interacts with the other&apos;s pathway — the rationale is additive coverage, not pharmacodynamic synergy.",
    body: [
      "Semaglutide — GLP-1 Receptor Agonism [1][5]. Semaglutide is a GLP-1 receptor agonist with ~94% homology to native human GLP-1 and a 7-day plasma half-life enabled by a C-18 fatty-acid chain that promotes albumin binding. It activates GLP-1 receptors in the hypothalamic arcuate nucleus to reduce appetite and food reward signaling; in the gastrointestinal tract it slows gastric emptying and reduces gut motility; and in the pancreas it stimulates glucose-dependent insulin secretion. The net effect is sustained caloric deficit and weight loss of 10–15% over 68 weeks in clinical trials. The same GI motility reduction that aids weight loss also drives nausea, vomiting, and constipation.",
      "BPC-157 — GI Cytoprotection and Tissue Repair [3][4]. BPC-157 (pentadecapeptide Body Protection Compound) is originally identified in human gastric juice. It activates the FAK-paxillin signaling axis, VEGFR2-Akt-eNOS pathway, and nitric oxide modulation to promote mucosal healing, angiogenesis, and cellular migration. In the GI tract specifically, BPC-157 stabilizes tight-junction proteins, reduces inflammatory cytokine cascades (including NF-κB-mediated inflammation), and promotes epithelial cell survival under stress conditions — the cellular environment created by GLP-1-mediated motility changes and elevated gastric acid exposure.",
      "Lean-Mass Protection Rationale [2][4]. Accelerated weight loss with GLP-1 agonists involves ~25–40% of total weight lost as lean mass. BPC-157 upregulates VEGF and growth factor signaling in skeletal muscle and connective tissue, promoting satellite cell activation and angiogenesis — pathways relevant to preserving or rebuilding lean tissue during caloric deficit. This is a mechanistic extrapolation; no controlled trial has tested BPC-157 as a lean-mass preservative specifically during GLP-1 therapy.",
      "Titration Rationale. Semaglutide is titrated weekly over 16–20 weeks from 0.25 mg to the 2.4 mg maintenance dose to reduce GI side-effect severity. The GI side-effect burden is highest during and immediately after each dose escalation. Researchers typically run BPC-157 continuously throughout the semaglutide titration and maintenance phases, with the GI cytoprotective activity most relevant during the early titration period when nausea and vomiting incidence peaks.",
      "No Pharmacodynamic Interaction. Semaglutide and BPC-157 do not share receptor targets or downstream pathways. The combination does not amplify the metabolic effects of semaglutide and does not interfere with GLP-1 receptor agonism. The mechanisms are parallel and non-competing.",
    ],
  },
  {
    id: "research",
    title: "What is the Semaglutide + BPC-157 blend used for?",
    intro:
      "Researchers use this combination for two primary purposes: GI-side-effect mitigation during semaglutide titration and lean-mass or connective-tissue protection during rapid weight loss. Both purposes are mechanistically grounded but lack controlled trial evidence for the specific combination. All applications below are extrapolated from each component&apos;s independent literature.",
    body: [
      "GI Side-Effect Mitigation [1][3]. Semaglutide nausea affects ~44% of participants at the 2.4 mg dose. BPC-157&apos;s GI cytoprotective activity targets the same mucosal and enteric nervous system tissue. Researchers use BPC-157 daily throughout the semaglutide titration schedule to reduce the severity and duration of nausea, vomiting, and GI discomfort. This is the primary community-reported rationale for the combination.",
      "Lean-Mass and Connective-Tissue Protection [2][4]. GLP-1 agonists drive weight loss that is approximately 25–40% lean mass. BPC-157’s tissue-repair growth factor signaling, particularly in skeletal muscle and tendon/ligament, is used by researchers to counter the connective-tissue degradation that can accompany rapid caloric deficit. Resistance training and adequate protein are primary tools; BPC-157 is used as an adjunct.",
      "Gut-Wall Integrity During Caloric Restriction. Severe caloric restriction can reduce gut-wall integrity. BPC-157 stabilizes tight-junction proteins and promotes mucosal angiogenesis, potentially maintaining gut barrier function during the GI stress of aggressive weight-loss protocols.",
      "Post-Rapid-Weight-Loss Tendon and Joint Support. Rapid weight loss can reduce joint loading positively but may also reduce the anabolic signaling available to connective tissue. BPC-157’s tendon and ligament repair activity is used by some researchers as a connective-tissue support layer during aggressive semaglutide protocols.",
      "Appetite-Induced Protein Deficiency Cover. Semaglutide’s appetite suppression sometimes reduces protein intake below the threshold needed for lean-mass maintenance. BPC-157’s growth factor signaling is seen as a partial mechanistic compensator, though it does not substitute for adequate dietary protein.",
    ],
  },
  {
    id: "timeline",
    title: "How long does the combination take to show effects?",
    intro:
      "Semaglutide weight-loss effects accumulate over 68+ weeks in clinical trials, with meaningful weight reduction apparent by weeks 8–12 after reaching therapeutic doses. BPC-157 GI effects are reported more acutely — research-community users often report GI comfort improvement within the first 1–2 weeks of BPC-157 co-administration.",
    content:
      "The standard semaglutide titration schedule takes 16–20 weeks to reach the 2.4 mg maintenance dose. GI side effects are most severe during and just after each dose escalation step. BPC-157 is run continuously during this period. Weight loss plateaus are commonly seen at weeks 36–52 as the body adapts. Researchers tracking lean-mass preservation typically assess body composition at 12-week intervals. BPC-157 cycles are typically 6–8 weeks with optional off periods, though some researchers run it continuously throughout the semaglutide course. The blend has no validated off-cycle schedule for the combination specifically.",
  },
  {
    id: "dosing",
    title: "How is the blend dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Semaglutide and BPC-157 are dosed on separate schedules and from separate vials. Semaglutide
          follows a weekly titration ramp; BPC-157 is dosed daily. They are both administered
          subcutaneously but are not combined in the same injection or vial.
        </p>
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          Semaglutide titration schedule (standard research protocol):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Weeks 1–4.</span> 0.25 mg subcutaneously once weekly.
            Initiation dose &mdash; not a therapeutic dose, purely to establish GI tolerance.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Weeks 5–8.</span> 0.5 mg subcutaneously once weekly.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Weeks 9–12.</span> 1.0 mg subcutaneously once weekly.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Weeks 13–16.</span> 1.7 mg subcutaneously once weekly.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Week 17+.</span> 2.4 mg subcutaneously once weekly
            (maintenance). Some researchers hold at lower doses if GI tolerance is limiting.
          </li>
        </ol>
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          BPC-157 dosing (concurrent):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Daily dose.</span> 250–500 mcg subcutaneously once
            daily. Some researchers split into 2&times; daily (125–250 mcg per injection) to
            maintain more consistent tissue levels given BPC-157&apos;s short plasma half-life.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Site.</span> Abdomen or periumbilical region. For GI
            cytoprotection, abdominal injection is preferred to maximize proximity to the
            gastrointestinal vasculature.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Cycle length.</span> Many researchers run BPC-157
            continuously alongside semaglutide, particularly during the titration phase. Others run
            6–8 week BPC-157 cycles with 4–6 week off periods while continuing semaglutide.
          </li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Reconstitution notes
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Semaglutide.</span> Research-grade semaglutide is supplied
            as lyophilized powder. Reconstitute with bacteriostatic water for injection (BAC water).
            A common approach is 2 mg per vial reconstituted with 1–2 mL BAC water, yielding a
            concentration that allows accurate weekly dose drawing with an insulin syringe.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">BPC-157.</span> Supplied as lyophilized powder, typically
            5 mg per vial. Reconstitute with bacteriostatic water. A 5 mg vial with 2 mL BAC water
            yields 2.5 mg/mL (2,500 mcg/mL). A 250 mcg dose requires drawing 0.1 mL (10 units on an
            insulin syringe); 500 mcg requires 0.2 mL (20 units).
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Separate vials are required.</span> Do not mix semaglutide
            and BPC-157 in the same vial. Different reconstitution volumes, concentrations, and
            injection schedules make separate vials the only practical approach.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Neither compound is FDA-approved in this form. Dosing is community-derived from each
          compound&apos;s individual research literature and the Wegovy prescribing information titration
          schedule (adapted for research use). There are no approved retail dosing standards for either
          compound as a research peptide.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate reconstitution and draw volumes? Use the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">
            dosage calculator &rarr;
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is the blend administered?",
    intro:
      "Both compounds are administered by subcutaneous injection using an insulin syringe. Semaglutide is injected once weekly on a consistent day; BPC-157 is injected once (or twice) daily. The injections are given separately — different syringes, different vials, potentially different times of day.",
    body: [
      "Route. Subcutaneous injection for both compounds. Do not administer intravenously or intramuscularly.",
      "Semaglutide injection. Once weekly, on the same day each week. Common sites: abdomen (at least 2 inches from navel), front of thigh, or upper arm. Rotate sites weekly.",
      "BPC-157 injection. Once daily (or split twice daily). Abdomen preferred for GI cytoprotection purposes. Rotate sites daily.",
      "Time of day. Semaglutide: any consistent time works. BPC-157: morning or consistent daily timing. Semaglutide’s weekly injection day should not be changed without re-establishing a new consistent day.",
      "With or without food. Semaglutide: independent of meals (injected, not oral). BPC-157: independent of meals.",
      "Site rotation. Alternate abdomen, thigh, and upper arm for semaglutide. Alternate left and right abdominal quadrants for daily BPC-157. Maintain at least 1 inch from previous injection sites.",
      "Reconstitution. Use bacteriostatic water for injection. Swirl gently — do not shake either compound. Semaglutide is particularly sensitive to agitation.",
      "Missed semaglutide dose. If missed by ≤5 days, administer as soon as possible. If more than 5 days have elapsed, skip and administer on the next scheduled day. Do not double-dose.",
      "Missed BPC-157 dose. Resume on the next scheduled day. Do not double-dose.",
    ],
  },
  {
    id: "stacks",
    title: "What does this blend stack well with?",
    intro:
      "The Semaglutide + BPC-157 combination is already a 2-compound protocol with meaningful side-effect burden from semaglutide. Additional peptide stacking should be conservative. The most evidence-based additions are non-pharmacological (resistance training, protein intake) and targeted peptide additions with clear mechanistic justification.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Resistance training + 1.2–1.6 g/kg protein.</span>{" "}
          The primary evidence-based strategy for lean-mass preservation during GLP-1 weight loss.
          Mechanical loading is required for proper muscle remodeling &mdash; peptides are adjuncts,
          not substitutes.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">
            <Link href="/peptides/tirzepatide-bpc-157" className="text-[#3A759F] hover:underline">
              Tirzepatide + BPC-157
            </Link>{" "}
            (alternative GLP-1 backbone).
          </span>{" "}
          Tirzepatide is a dual GIP/GLP-1 receptor agonist with superior weight-loss efficacy in
          trials (~20–22% vs ~15%). Researchers choosing tirzepatide over semaglutide for the GLP-1
          component apply the same BPC-157 rationale. See{" "}
          <Link href="/peptides/tirzepatide-bpc-157" className="text-[#3A759F] hover:underline">
            Tirzepatide + BPC-157 &rarr;
          </Link>
          .
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cagrilintide (amylin analog for GLP-1 amplification).</span>{" "}
          Cagrilintide combined with semaglutide (CagriSema) has shown &gt;20% weight loss in phase 3
          trials. BPC-157 co-administration rationale would apply equally, with compounded GI burden
          from dual agonism. Research-community use is early-stage.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">
            <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">
              Wolverine Stack (BPC-157 + TB-500)
            </Link>{" "}
            for connective-tissue support.
          </span>{" "}
          Adding TB-500 to the BPC-157 component broadens connective-tissue coverage via actin-mediated
          cellular migration. Relevant for researchers experiencing tendon or joint stress during rapid
          weight loss or who are adding progressive resistance training. See{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">
            Wolverine Stack &rarr;
          </Link>
          .
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: compounding GI-burden compounds.</span> Do not stack
          additional GI-active peptides (e.g., high-dose GHRPs like GHRP-6) with semaglutide.
          Cumulative nausea and GI distress risk compounds significantly.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: full-dose BPC-157 duplication.</span> If running the
          Wolverine Stack (which contains BPC-157), do not additionally dose standalone BPC-157 vials
          on top &mdash; the Wolverine BPC-157 component is sufficient coverage.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of the Semaglutide + BPC-157 blend?",
    intro:
      "The side-effect profile of the combination is dominated by semaglutide&apos;s well-documented GI effects, which are among the most significant of any research peptide. BPC-157’s individual side-effect profile is mild. There is no controlled trial of the combination, so interaction-level side-effect data does not exist. The list below draws from each component’s independent literature plus research-community reports.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users on semaglutide)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Nausea.</span> The most common semaglutide side effect
              (≄44% in STEP 1). Most severe during titration dose escalations. BPC-157 co-administration
              is the primary community strategy for mitigation.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Vomiting.</span> Reported in ≄25% of participants in
              STEP 1. Typically peaks 1–3 days after each dose escalation.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Diarrhea or constipation.</span> GLP-1-mediated gut
              motility changes produce both. Constipation is more common at higher doses; diarrhea
              more common during titration.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Injection-site reactions (BPC-157).</span> Mild redness
              or irritation at BPC-157 injection sites. The most commonly reported BPC-157 side effect.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Reduced appetite and fatigue.</span> Expected
              pharmacological effects of semaglutide. Relevant for training protocols alongside the
              research cycle.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Lean-mass loss.</span> 25–40% of weight lost is lean
              mass without resistance training and adequate protein. Not a side effect in the classic
              sense but a significant compositional concern during aggressive weight loss.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Heartburn and GERD-like symptoms.</span> Slowed gastric
              emptying increases gastric acid contact time with the esophagus.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Headache (BPC-157).</span> Typically mild, transient,
              and more common in the first 1–2 weeks of BPC-157 initiation.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Hair thinning (telogen effluvium).</span> Reported in
              some individuals undergoing rapid weight loss. Related to caloric restriction and
              nutritional stress, not directly to semaglutide pharmacology.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Semaglutide: pancreatitis risk.</span> Acute pancreatitis
              is a labeled warning for GLP-1 receptor agonists. Risk is low but documented. Researchers
              with personal or family history of pancreatitis should not use semaglutide.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Semaglutide: thyroid C-cell tumors (rodent signal).</span>{" "}
              Semaglutide carries an FDA boxed warning based on rodent carcinogenicity data. Not
              confirmed in humans, but the warning applies to all GLP-1 receptor agonists. Individuals
              with personal or family history of MEN2 or medullary thyroid carcinoma should not use
              semaglutide.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">BPC-157: theoretical mitogenic risk.</span> BPC-157
              promotes angiogenesis and growth factor signaling. The theoretical concern about tumor
              promotion has not produced signals in preclinical studies, but controlled human safety
              data are limited.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Anti-doping: WADA S0 (BPC-157).</span> BPC-157 is on
              the WADA prohibited list under Section S0. Research-grade semaglutide is not a tested-for
              substance in most sport anti-doping programs, but its use in competitive contexts raises
              ethical questions under spirit-of-sport provisions. Tested athletes should not use either
              compound without consulting their sport&apos;s anti-doping authority.
            </li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The combined safety profile of research-grade semaglutide + BPC-157 has not been formally
          studied. Most evidence comes from FDA-approved semaglutide clinical trial data (Wegovy/Ozempic)
          for semaglutide, and preclinical animal models plus research-community reports for BPC-157.
          Research-grade semaglutide is not manufactured under GMP; purity and potency are unverified
          relative to the pharmaceutical product.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does the blend interact with other drugs?",
    intro:
      "Semaglutide has several documented drug interactions, primarily related to its effect on gastric emptying and oral drug absorption. BPC-157 has no well-documented systemic drug interactions. The most clinically relevant concerns are listed below.",
    body: [
      "Oral medications with narrow therapeutic windows. Semaglutide delays gastric emptying, which can alter the absorption rate and peak concentration of oral drugs. Of particular concern: oral anticoagulants (warfarin), oral hypoglycemic agents, oral contraceptives, and cyclosporine. Timing of oral medications relative to semaglutide injection may need adjustment.",
      "Insulin and other antidiabetic agents. Semaglutide lowers blood glucose. Co-administration with insulin or sulfonylureas increases hypoglycemia risk. Dose adjustment is often required.",
      "Anticoagulants (warfarin, DOACs). Both the gastric-emptying effect of semaglutide (altering oral warfarin absorption) and the theoretical angiogenic activity of BPC-157 raise interaction concerns. No documented clinical events with BPC-157 specifically.",
      "NSAIDs. BPC-157 is used in some protocols specifically to protect GI mucosa in NSAID users. However, chronic NSAID use during a semaglutide cycle compounds GI mucosal irritation risk from two directions. NSAIDs should be minimized during semaglutide use.",
      "Alcohol. Alcohol increases acute pancreatitis risk, which overlaps with semaglutide’s labeled pancreatitis warning. Alcohol should be minimized during semaglutide use.",
      "GLP-1 agonist combinations. Do not use semaglutide concurrently with other GLP-1 receptor agonists (liraglutide, dulaglutide, tirzepatide’s GLP-1 component). Compounded GI burden and receptor over-activation are the concerns.",
    ],
  },
  {
    id: "storage",
    title: "How should the blend be stored?",
    body: [
      "Semaglutide (lyophilized powder): -20°C long-term. Refrigerate at 2–8°C once reconstituted. Use reconstituted semaglutide within 28 days.",
      "BPC-157 (lyophilized powder): -20°C long-term, 2–8°C for short-term (refrigerated). Use within 30 days of reconstitution.",
      "Reconstitution for both: bacteriostatic water for injection (BAC water). Swirl gently — do not shake. Semaglutide is particularly sensitive to agitation and should never be shaken.",
      "Do not freeze reconstituted solutions. Freezing causes peptide aggregation and loss of activity.",
      "Protect both compounds from light. Store in original containers or amber vials away from direct sunlight.",
      "Store semaglutide and BPC-157 in separate labeled vials. Do not pool reconstituted solutions.",
      "Discard any solution that is cloudy, discolored, or contains particulate matter.",
    ],
  },
  {
    id: "where-to-buy",
    title: "Where to source Semaglutide + BPC-157",
    intro:
      "Neither compound is FDA-approved in research-grade form, and they are not available as a pre-blended vial. Researchers source two separate vials from specialty peptide vendors. The vendors highlighted below carry research-grade semaglutide and BPC-157 and have been vetted for transparent third-party testing and traceable documentation.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            {
              slug: "ez-peptides",
              note: "Stocks research-grade semaglutide and BPC-157 separately",
            },
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
    title: "What are the limitations of this research area?",
    intro:
      "The Semaglutide + BPC-157 combination is entirely community-derived. No controlled trial has tested this pairing. Semaglutide has an extensive clinical evidence base as an FDA-approved pharmaceutical, but research-grade semaglutide is not the same product. BPC-157 has no human clinical trial data for any indication.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">No controlled trial of the combination exists.</span> All
          efficacy and safety claims for the pairing are mechanistic extrapolations from semaglutide&apos;s
          clinical trial data (Wegovy/Ozempic) and BPC-157&apos;s preclinical literature. The two compounds
          have never been co-administered in a randomized controlled trial.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Research-grade semaglutide is not the approved pharmaceutical.</span>{" "}
          Wegovy and Ozempic are manufactured under pharmaceutical GMP with documented sterility, purity,
          and potency. Research-grade semaglutide from peptide vendors carries none of those assurances.
          Third-party HPLC and endotoxin testing from the vendor is the minimum quality bar.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157 has no approved human clinical trial data.</span> All
          BPC-157 evidence is preclinical (animal models). No phase 1, 2, or 3 human trial has been
          completed for BPC-157 in any indication. Extrapolating from rodent GI cytoprotection to human
          GLP-1 side-effect mitigation involves multiple unvalidated assumptions.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Lean-mass claims are mechanistically plausible, not evidenced.</span>{" "}
          BPC-157&apos;s growth factor and anabolic signaling is documented in animal models. There is no
          human trial &mdash; and certainly no trial specific to GLP-1 co-administration &mdash; demonstrating
          that BPC-157 reduces lean-mass loss during semaglutide-driven weight loss.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Anti-doping status.</span> BPC-157 is on the WADA prohibited
          list (Section S0). Research-grade semaglutide is not manufactured for pharmaceutical use.
          Tested athletes should not use either compound.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">FDA regulatory status.</span> Research-grade semaglutide is
          not the FDA-approved product. BPC-157 sits on the FDA Category 2 bulk drug substance list
          and cannot be compounded for human use under 503A or 503B pharmacies. Both compounds are
          sold for laboratory research use only.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Semaglutide + BPC-157 FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
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
          Wilding JPH, Batterham RL, Calanna S, et al. Once-Weekly Semaglutide in Adults with
          Overweight or Obesity. N Engl J Med. 2021;384(11):989-1002.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/33567185/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/33567185/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ida S, Kaneko R, Imataka K, et al. Effects of antidiabetic drugs on muscle mass in type 2 diabetes mellitus.
          Curr Diabetes Rev. 2021;17(3):293-303.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/32628589/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/32628589/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Hahm KB, Blagaic AB, et al. Stable Gastric Pentadecapeptide BPC 157 and Wound
          Healing. Front Pharmacol. 2021.{" "}
          <a
            href="https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vasireddi N, Hahamyan H, Salata MJ, et al. Emerging Use of BPC-157 in Orthopaedic Sports
          Medicine: A Systematic Review. HSS J. 2025.{" "}
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Davies M, Faerch L, Jeppesen OK, et al. Semaglutide 2.4 mg once a week in adults with
          overweight or obesity, and type 2 diabetes (STEP 2). Lancet. 2021;397(10278):971-984.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/33667417/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/33667417/
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
          No controlled trial exists for the Semaglutide + BPC-157 combination. The studies below
          are the key peer-reviewed sources for each component&apos;s mechanism and efficacy, and the
          empirical basis for the blend&apos;s mechanistic rationale.
        </p>
        {studies.map((s, i) => (
          <div
            key={i}
            className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors"
          >
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">
                {s.journal} &middot; {s.year}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  s.access === "Open Access"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"
                }`}
              >
                {s.access}
              </span>
            </div>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1"
            >
              {s.title} &rarr;
            </a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              {s.summary}
            </p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function SemaglutideBpc157Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Semaglutide + BPC-157",
          description:
            "Semaglutide + BPC-157 research profile: GLP-1 receptor agonist paired with BPC-157 for GI side-effect mitigation and lean-mass protection during weight loss. Mechanism, dosing, side effects, FAQ.",
          url: "https://profpeptide.com/peptides/semaglutide-bpc-157",
          publisher: {
            "@type": "Organization",
            name: "Prof. Peptide",
            url: "https://profpeptide.com",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://profpeptide.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Peptides",
              item: "https://profpeptide.com/peptides",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Semaglutide + BPC-157",
            },
          ],
        }}
      />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
      <div className="section max-w-3xl">
        <Link
          href="/peptides"
          className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
        >
          Back to Peptide Library
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">
            Semaglutide + BPC-157
          </h1>
          <span className="tag">Weight Loss &amp; GI Protection</span>
          <span className="tag">Research-Grade</span>
          <span className="tag">Combination Blend</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
          Last reviewed: May 28, 2026
        </p>
        <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span>{" "}
            Sema + BPC, GLP-1/BPC Stack, Ozempic Research Blend
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span>{" "}
            GLP-1 Receptor Agonist + GI Cytoprotective Blend (2-component)
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">
              Regulatory Status:
            </span>{" "}
            Research-grade only. Semaglutide is FDA-approved as Wegovy/Ozempic but research-grade
            semaglutide is not the approved product. BPC-157 is FDA Category 2; WADA S0 prohibited.
          </p>
        </div>

        <div id="overview" className="scroll-mt-20">
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            What is the Semaglutide + BPC-157 blend?
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              The Semaglutide + BPC-157 blend is a community-derived research protocol pairing{" "}
              <Link
                href="/peptides/semaglutide"
                className="text-[#3A759F] hover:underline"
              >
                Semaglutide
              </Link>{" "}
              &mdash; a GLP-1 receptor agonist that drives 10–15% mean body weight loss in clinical
              trials &mdash; with{" "}
              <Link
                href="/peptides/bpc-157"
                className="text-[#3A759F] hover:underline"
              >
                BPC-157
              </Link>{" "}
              (Body Protection Compound), a pentadecapeptide with established GI cytoprotective and
              tissue-repair activity in preclinical models. The mechanistic thesis: GLP-1 agonists
              cause nausea and GI distress in ≄44% of users and drive meaningful lean-mass loss
              alongside fat loss; BPC-157&apos;s gastroprotective and anabolic growth factor signaling
              is used to blunt the GI side-effect burden and counter muscle and connective-tissue
              degradation during rapid weight loss. The two compounds are run as separate vials on
              separate schedules &mdash; semaglutide weekly, BPC-157 daily &mdash; and are not
              available pre-blended due to incompatible dosing frequencies and half-lives.
            </p>
            <div>
              <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
                Reported benefits:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  Semaglutide-driven weight loss (~10–15% body weight over 68 weeks in STEP trials)
                </li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  GI side-effect mitigation during semaglutide titration via BPC-157 GI cytoprotection
                </li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  Lean-mass and connective-tissue support during caloric deficit via BPC-157 growth
                  factor and anabolic signaling
                </li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  Gut-wall barrier stabilization during GLP-1-mediated motility changes
                </li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  Anti-inflammatory GI mucosal coverage via BPC-157 NF-κB modulation
                </li>
                <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  Improved tolerability for the semaglutide titration ramp in community research reports
                </li>
              </ul>
            </div>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-[#16181B] dark:text-slate-100">
                Common research dose:
              </span>{" "}
              Semaglutide 0.25 mg subcutaneously once weekly (weeks 1–4) titrating to 2.4 mg once
              weekly by week 17+ (standard Wegovy-parallel ramp). BPC-157 250–500 mcg
              subcutaneously once daily (concurrent, throughout the semaglutide course).
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span>{" "}
              Both compounds are sold separately by research peptide vendors. Neither is available
              as a pre-blended vial. See{" "}
              <Link href="/coupons" className="text-[#3A759F] hover:underline">
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
              <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
                {s.title}
              </h2>
              {s.intro && (
                <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                  {s.intro}
                </p>
              )}
              {s.node && s.node}
              {s.content && (
                <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  {s.content}
                </p>
              )}
              {s.body && (
                <ol className="list-decimal list-inside space-y-1">
                  {s.body.map((item, i) => (
                    <li
                      key={i}
                      className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {[
            "Weight Loss",
            "GLP-1 Agonist",
            "GI Protection",
            "Lean Mass",
            "Combination Blend",
            "Preclinical",
            "WADA S0",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Related Peptides
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/peptides/semaglutide"
              className="text-sm font-medium text-[#3A759F] hover:underline"
            >
              Semaglutide
            </Link>
            <Link
              href="/peptides/bpc-157"
              className="text-sm font-medium text-[#3A759F] hover:underline"
            >
              BPC-157
            </Link>
            <Link
              href="/peptides/tirzepatide"
              className="text-sm font-medium text-[#3A759F] hover:underline"
            >
              Tirzepatide
            </Link>
            <Link
              href="/peptides/cagrilintide"
              className="text-sm font-medium text-[#3A759F] hover:underline"
            >
              Cagrilintide
            </Link>
          </div>
        </div>

        <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Related Blends
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/peptides/tirzepatide-bpc-157"
              className="text-sm font-medium text-[#3A759F] hover:underline"
            >
              Tirzepatide + BPC-157
            </Link>
            <Link
              href="/peptides/wolverine-stack"
              className="text-sm font-medium text-[#3A759F] hover:underline"
            >
              Wolverine Stack
            </Link>
          </div>
        </div>

        <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
            Need to calculate a dose?
          </p>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
            Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
          </p>
          <Link href="/calculator" className="btn-primary text-sm">
            Open Calculator
          </Link>
        </div>

        <PageDisclaimer />
        <ContactLink
          pageName="Semaglutide + BPC-157"
          pagePath="/peptides/semaglutide-bpc-157"
        />
      </div>
    </>
  );
}
