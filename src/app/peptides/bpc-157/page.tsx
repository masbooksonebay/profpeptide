import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import KeyFactsCallout from "@/components/KeyFactsCallout";
import PeptideFAQ, { PeptideFAQItem } from "@/components/PeptideFAQ";

export const metadata = {
  alternates: { canonical: "/peptides/bpc-157" },
  title: "BPC-157 — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "BPC-157 research profile covering tissue repair mechanism, gut healing evidence, tendon recovery studies, dosage protocols, and safety considerations.",
};

const keyFacts = [
  {
    label: "Form",
    value: "Synthetic 15-amino-acid peptide (pentadecapeptide)",
  },
  {
    label: "Half-life",
    value: "Under ~30 minutes",
    flag: "Rodent pharmacokinetic data only — no published human PK",
  },
  {
    label: "Typical research dose",
    value: "No validated human dosing — see published rodent literature",
  },
  {
    label: "Evidence tier",
    value:
      "Preclinical (rodent) — one Phase I trial registered Dec 2015 (NCT02637284, status “Unknown”, no results posted); no completed human RCTs",
  },
  {
    label: "Regulatory status",
    value:
      "Not FDA approved; FDA Category 2 bulk drug substance; WADA Prohibited (S0); not a US controlled substance",
  },
];

const faqs: PeptideFAQItem[] = [
  {
    q: "Is BPC-157 FDA-approved?",
    a: "No. BPC-157 is not approved by the FDA for any medical use. In 2023 the FDA placed it on its Category 2 bulk drug substance list, meaning it cannot be compounded by 503A or 503B compounding pharmacies for patient use. There are no completed human Phase II or Phase III trials, and the only known Phase I trial — NCT02637284, registered in December 2015 by PharmaCotherapia d.o.o. — has status “Unknown” on ClinicalTrials.gov with no results posted.",
  },
  {
    q: "Is BPC-157 legal?",
    a: "BPC-157 is not a scheduled controlled substance in the United States, but it is also not approved for human use. It is sold in a regulatory gray area — typically labeled \"for research use only, not for human consumption.\" Its FDA Category 2 classification restricts compounding pharmacies from preparing it. The World Anti-Doping Agency (WADA) prohibits it under category S0 (\"unapproved substances\") in all sport, in and out of competition. Legal status varies by country — researchers should verify current local regulations before sourcing.",
  },
  {
    q: "How is BPC-157 different from TB-500?",
    a: "Both are studied for tissue repair but they act through different mechanisms. BPC-157 is a 15-amino-acid fragment derived from a protective protein in human gastric juice; rodent studies suggest it works partly through nitric oxide modulation, VEGF/EGR-1 upregulation, and the FAK-paxillin pathway. TB-500 is a synthetic fragment of Thymosin Beta-4 that primarily acts by sequestering G-actin to enable cytoskeletal remodeling and cell migration. In rodent literature the two are sometimes combined, but no controlled human trial of the combination exists.",
  },
  {
    q: "What does the research say about safety?",
    a: "Rodent studies have not reported significant toxicity at the doses tested, but the human safety profile is largely unknown. There are no completed long-term human clinical trials, and the unreported Phase I trial means even short-term human pharmacovigilance data is sparse. A theoretical concern raised in the literature is that BPC-157's angiogenic activity could in principle support tumor vascularization, though this has not been demonstrated clinically. Researchers should also be aware that product quality is a known issue in the unregulated peptide market — third-party Certificate of Analysis (COA) testing is the only way to verify identity and purity.",
  },
  {
    q: "Why didn't the Phase I human trial publish results?",
    a: "A Phase I safety and pharmacokinetics study of PCO-02 (BPC-157) — NCT02637284 — was registered with ClinicalTrials.gov by PharmaCotherapia d.o.o. in December 2015. Its status is listed as “Unknown,” meaning the sponsor stopped updating the record. No results have been posted and no peer-reviewed paper has appeared. The absence of follow-up reporting and the lack of any subsequent human trial in the decade since is itself part of the evidence picture — when reading rodent efficacy claims, the missing human safety data should be weighed alongside.",
  },
  {
    q: "Can BPC-157 be taken orally?",
    a: "In rodent models BPC-157 retains activity after oral administration, which is unusual for a peptide and is attributed to its stability across a wide pH range (pH 1–11). Whether this oral bioavailability translates to humans is unknown — there is no published human pharmacokinetic data for any administration route.",
  },
];

export default function BPC157Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "BPC-157",
          description:
            "BPC-157 research profile covering tissue repair mechanism, gut healing evidence, tendon recovery studies, dosage protocols, and safety considerations.",
          url: "https://profpeptide.com/peptides/bpc-157",
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
            { "@type": "ListItem", position: 1, name: "Home", item: "https://profpeptide.com" },
            { "@type": "ListItem", position: 2, name: "Peptides", item: "https://profpeptide.com/peptides" },
            { "@type": "ListItem", position: 3, name: "BPC-157" },
          ],
        }}
      />
      <div className="section max-w-3xl">
        <Link
          href="/peptides"
          className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
        >
          Back to Peptide Library
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">BPC-157</h1>
          <span className="tag">Tissue Repair Peptide</span>
          <span className="tag">Preclinical</span>
        </div>

        <QuickAnswerBox>
          <p>
            BPC-157 is a synthetic 15-amino-acid peptide derived from a protective protein in human
            gastric juice. Rodent studies suggest it accelerates healing in tendon, muscle, bone, and
            gastrointestinal tissue through angiogenic and cytoprotective effects. There are no
            completed human clinical trials — the only registered Phase I study (NCT02637284, 2015) has
            status &ldquo;Unknown&rdquo; on ClinicalTrials.gov with no results posted. BPC-157 is not
            FDA approved, is on the FDA&apos;s Category 2
            bulk drug substance list, and is prohibited in sport by WADA under category S0. Treat all
            efficacy claims as preclinical until human data exists.
          </p>
        </QuickAnswerBox>

        <KeyFactsCallout facts={keyFacts} />

        <div className="space-y-10">
          <section id="what-it-does">
            <h2 className="text-xl font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">
              What does BPC-157 do?
            </h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              <p>
                BPC-157 — Body Protection Compound-157 — is a 15-amino-acid fragment isolated from a
                larger protein found naturally in human gastric juice. The hypothesis behind its study
                is that the gut produces protective signaling peptides to defend itself against acid,
                NSAIDs, and mechanical injury, and that a synthetic version of one such fragment might
                deliver similar protective effects to other tissues.
              </p>
              <p>
                In rodent models, the most reproducible observation is faster healing of injured
                tissue. Researchers attribute this to several overlapping cellular effects rather than
                a single receptor mechanism. BPC-157 appears to <strong>promote angiogenesis</strong>
                {" "}— the formation of new blood vessels — by upregulating VEGF and modulating nitric
                oxide signaling, which delivers more oxygen and nutrients to a wound site. It appears
                to <strong>support fibroblast and tendon cell migration</strong> through the
                FAK-paxillin pathway, helping cells move into damaged areas and lay down new collagen.
                And it appears to <strong>dampen excessive inflammatory signaling</strong>, reducing
                tissue damage from the body's own response to injury.
              </p>
              <p>
                In plain terms, "tissue repair" in this context means the cellular process of
                rebuilding damaged tissue: clearing debris, growing new blood vessels, recruiting
                fibroblasts to the site, and synthesizing new collagen and extracellular matrix. The
                rodent data suggests BPC-157 accelerates that process. Whether the same effects occur
                in humans, at what dose, and for how long, is unknown.
              </p>
            </div>
          </section>

          <section id="research">
            <h2 className="text-xl font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">
              What the research shows
            </h2>
            <div className="space-y-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              <p>
                The published BPC-157 literature is large but heavily concentrated in animal models —
                primarily rats and mice — and a substantial share originates from a single Croatian
                research group (Sikiric et al.). As of 2026 there are no completed Phase II or Phase
                III human clinical trials and no peer-reviewed human RCT data. The findings below are
                preclinical unless explicitly noted.
              </p>

              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mt-5">
                Tendon and ligament healing (rodent)
              </h3>
              <p>
                Multiple studies report accelerated Achilles tendon and rotator-cuff repair in rats,
                with histological evidence of improved tendon outgrowth, cell survival, and fibroblast
                migration. A frequently cited 2003 study by Staresinic et al. (J Orthop Res) found
                BPC-157 accelerated transected Achilles tendon healing in rats; Chang et al. (2011, J
                Appl Physiol) reported it promotes tendon fibroblast outgrowth and migration via the
                FAK-paxillin pathway.
              </p>

              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mt-5">
                Gastrointestinal protection (rodent)
              </h3>
              <p>
                The strongest preclinical evidence base is in GI models. Rodent studies report
                protection against NSAID-induced gastric ulceration, alcohol-induced lesions, IBD-like
                colitis models, and improved closure in fistula models. Gwyer et al. (2019, Front
                Pharmacol) reviewed this body of work in the context of healing disorders.
              </p>

              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mt-5">
                Muscle, bone, and CNS injury models (rodent)
              </h3>
              <p>
                Crush-injury and blunt-force muscle models report faster functional recovery; fracture
                models show improved mineralization rates; and spinal cord crush, sciatic nerve
                transection, and traumatic brain injury models report improved outcomes. Vukojevic et
                al. (2018, Prog Neuropsychopharmacol Biol Psychiatry) covers the central nervous
                system literature.
              </p>

              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mt-5">
                Angiogenesis and granulation (rodent)
              </h3>
              <p>
                Tkalcevic et al. (2007, Eur J Pharmacol) and Seiwerth et al. (2014, Curr Pharm Des)
                document angiogenic and granulation-tissue effects, attributed to VEGF upregulation
                and nitric oxide pathway modulation.
              </p>

              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mt-5">
                Pharmacokinetics and stability (rodent)
              </h3>
              <p>
                Rodent PK estimates a systemic half-life under 30 minutes, but biological effects
                appear to outlast plasma clearance — suggesting local tissue depot activity or
                downstream gene-expression changes. The peptide is unusually stable across pH 1–11,
                which is consistent with reports of activity after oral administration in animals.
                Human PK data has not been published.
              </p>

              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mt-5">
                Human data
              </h3>
              <p>
                Direct human evidence is essentially absent. A Phase I trial (NCT02637284) of PCO-02
                — the development name for BPC-157 — was registered with ClinicalTrials.gov in
                December 2015 by PharmaCotherapia d.o.o. Its status is listed as &ldquo;Unknown,&rdquo;
                no results have been posted, and no peer-reviewed paper has been published. No
                subsequent human trial has been registered. All clinical claims in the marketing
                literature trace back to rodent data.
              </p>

              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mt-5">
                Research-stage stacking
              </h3>
              <p>
                In rodent literature BPC-157 is most commonly studied alongside TB-500 (a Thymosin
                Beta-4 fragment) for musculoskeletal repair, where the two peptides target different
                cellular mechanisms — actin sequestration vs. angiogenesis/migration — and rodent
                studies suggest additive effects on tendon and muscle repair. KPV and other
                anti-inflammatory peptides appear in GI co-administration studies. No human
                combination-therapy trial data exists for any of these stacks.
              </p>
            </div>
          </section>

          <section id="considerations">
            <h2 className="text-xl font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">
              Considerations and unknowns
            </h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>The unreported Phase I trial.</strong> The single registered human safety
                study (NCT02637284, PharmaCotherapia d.o.o., December 2015) has status
                &ldquo;Unknown&rdquo; on ClinicalTrials.gov with no published explanation and no
                posted results. This is arguably the most important fact in the BPC-157 evidence
                picture: a sponsor opened a human trial and stopped reporting on it. Whether this
                reflects a safety signal, a funding or sponsor issue, or something else is publicly
                unknown — but the absence of any follow-up human trial in the decade since is itself
                a signal.
              </p>
              <p>
                <strong>Source concentration.</strong> A substantial share of BPC-157 efficacy data
                comes from a single research group (Sikiric et al., Croatia). This is not by itself a
                problem — they are the originators of the molecule — but independent replication from
                other labs is comparatively thin.
              </p>
              <p>
                <strong>Theoretical angiogenic / cancer concern.</strong> Anything that promotes the
                growth of new blood vessels could in principle support the vascularization of tumors.
                This concern has been raised in the BPC-157 literature but has not been demonstrated
                clinically. Without human data it cannot be quantified.
              </p>
              <p>
                <strong>Dosing in humans is unknown.</strong> Rodent literature uses microgram-per-kilogram
                ranges that have not been validated in humans for any administration route. Human dose
                conversion, optimal route (subcutaneous vs. oral), and cycle length are unestablished.
              </p>
              <p>
                <strong>Regulatory status.</strong> BPC-157 is not approved by the FDA, EMA, or any
                major regulatory body. The FDA placed it on its Category 2 bulk drug substance list in
                2023, meaning compounding pharmacies cannot prepare it for patient use. WADA prohibits
                it under category S0 in all competitive sport, in and out of competition. It is not a
                scheduled controlled substance in the US, which is why it is sold for research use,
                but that gray-market status does not imply regulatory endorsement.
              </p>
              <p>
                <strong>Product-quality risk.</strong> Independent testing of peptide products sold
                online has repeatedly found incorrect dose, incorrect identity, or contaminating
                substances. This is not specific to BPC-157 but applies to any unregulated peptide.
                Third-party Certificate of Analysis (COA) testing is the only practical mitigation.
              </p>
            </div>
          </section>

          <section id="sources">
            <h2 className="text-xl font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">
              Finding trusted sources
            </h2>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Researchers looking to source BPC-157 should evaluate vendors based on third-party
              Certificate of Analysis (COA) testing, US-based shipping, and transparent purity
              verification. Our independent peptide vendor reviews live at{" "}
              <Link href="/best-peptide-vendors" className="text-[#0891b2] hover:underline">
                /best-peptide-vendors
              </Link>
              , and current verified discount codes are organized under the Codes tab in the navigation.
            </p>
          </section>

          <section id="faq">
            <h2 className="text-xl font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">
              Frequently asked questions
            </h2>
            <PeptideFAQ faqs={faqs} />
          </section>

          <section id="references">
            <h2 className="text-xl font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">
              References
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              <li>
                Sikiric P, et al. Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and
                Practical Implications. Curr Neuropharmacol. 2018;16(10):1401–1425. PMID: 29345579.
              </li>
              <li>
                Chang CH, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing
                involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol.
                2011;110(3):774–780. PMID: 21030672.
              </li>
              <li>
                Gwyer D, et al. Gastric pentadecapeptide body protection compound BPC 157 and its
                role in healing disorders. Front Pharmacol. 2019;10:1523. PMID: 31920683.
              </li>
              <li>
                Tkalcevic VI, et al. Enhancement by PL 14736 of granulation and angiogenesis in rats.
                Eur J Pharmacol. 2007;570(1–3):212–221. PMID: 17588561.
              </li>
              <li>
                Seiwerth S, et al. BPC 157 and Standard Angiogenesis. Curr Pharm Des.
                2014;20(7):1126–1135. PMID: 23782145.
              </li>
              <li>
                Staresinic M, et al. Gastric pentadecapeptide BPC 157 accelerates healing of
                transected rat Achilles tendon. J Orthop Res. 2003;21(6):976–983. PMID: 14554209.
              </li>
              <li>
                Vukojevic J, et al. Pentadecapeptide BPC 157 and the central nervous system. Prog
                Neuropsychopharmacol Biol Psychiatry. 2018;84(Pt B):363–372. PMID: 28830777.
              </li>
              <li>
                ClinicalTrials.gov.{" "}
                <a
                  href="https://classic.clinicaltrials.gov/ct2/show/study/NCT02637284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0891b2] hover:underline"
                >
                  NCT02637284
                </a>{" "}
                — Safety and Pharmacokinetics of PCO-02 (BPC-157) in Healthy Volunteers. Sponsor:
                PharmaCotherapia d.o.o. Registered December 2015, status &ldquo;Unknown&rdquo;, no
                results posted.
              </li>
            </ol>
          </section>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          {["Recovery", "Tissue Repair", "Preclinical"].map((tag) => (
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
            <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
            <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
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
          <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
            Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
          </p>
          <Link href="/calculator" className="btn-primary text-sm">
            Open Calculator
          </Link>
        </div>
      </div>
    </>
  );
}
