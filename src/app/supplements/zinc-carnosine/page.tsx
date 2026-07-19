import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/zinc-carnosine",
  title: "Zinc-Carnosine: Japan's 30-Year Rx for Gut Lining Repair",
  description:
    "Zinc-carnosine (polaprezinc) dosing, mechanism, and Japan's Rx evidence base for gastric ulcer healing, leaky gut repair, and athlete gut protection.",
});

const faqs = [
  {
    q: "What's the difference between zinc-carnosine and just zinc + carnosine taken separately?",
    a: (
      <>
        The chelated 1:1 molar complex behaves very differently from the two compounds taken separately. Zinc-carnosine physically adheres to damaged gastrointestinal mucosa — sticking to ulcer sites and inflamed tissue — and slowly releases zinc and carnosine locally rather than being rapidly absorbed into systemic circulation. The result is concentrated, targeted action at sites of mucosal injury, which is why the chelated form outperforms the separates for gut-healing endpoints. For systemic zinc supplementation (immune function, taste, hair/skin), regular{" "}
        <Link href="/supplements/zinc" className="text-[#3A759F] hover:underline">zinc</Link>{" "}
        forms are equivalent and cheaper.
      </>
    ),
  },
  {
    q: "Is this the same as polaprezinc?",
    a: "Yes — exactly the same compound. Polaprezinc is the chemical name used in the Japanese pharmaceutical literature; zinc-carnosine is the supplement-market name in the US and UK. Polaprezinc was approved as a prescription gastric ulcer drug in Japan in 1994 (sold under the brand name Promac) and has accumulated 30+ years of clinical use data there. The US supplement market sells the identical compound, often under brand names like PepZin GI (Lonza-licensed).",
  },
  {
    q: "How long until I notice gut healing?",
    a: "Subjective gut comfort improvements typically appear in 2–4 weeks. Measurable healing of gastric ulcers in clinical trials runs over 6–8 weeks. Reduction in intestinal permeability markers (zonulin, lactulose-mannitol ratio) in research has been documented at 14 days. For NSAID-induced damage protection, the effect is more immediate — taken before NSAIDs, zinc-carnosine reduces gastric mucosal damage from the first dose.",
  },
  {
    q: "Can I take it with NSAIDs like ibuprofen or aspirin?",
    a: "Yes, and this is one of the most evidence-backed uses. NSAID-induced gastric and small-intestinal damage is a well-documented problem; zinc-carnosine protects mucosal tissue against the prostaglandin-suppression damage NSAIDs cause. Standard protocol: 75 mg zinc-carnosine taken with food alongside the NSAID dose. Doesn't replace acid-suppression therapy (proton pump inhibitors) for high-risk users, but adds protection that those drugs don't provide.",
  },
  {
    q: "Should I take it on an empty stomach or with food?",
    a: "With food is the protocol most clinical trials use, and it's the better choice for most people. Food slows transit, giving the chelated compound more contact time with mucosal tissue along the GI tract. Empty-stomach dosing produces faster absorption but less mucosal contact — less useful for gut-healing endpoints. Exception: some practitioners use a bedtime dose on empty stomach to maximize overnight mucosal repair, but the with-food protocol is the better-evidenced default.",
  },
  {
    q: "Will the zinc in zinc-carnosine count toward my daily zinc intake?",
    a: (
      <>
        Yes, and this matters. A standard 75 mg zinc-carnosine capsule contains ~17 mg elemental zinc. Two doses daily (150 mg total) = ~34 mg elemental zinc/day — close to the 40 mg/day tolerable upper limit (UL) for adults. Add any other zinc sources (multivitamin, separate{" "}
        <Link href="/supplements/zinc" className="text-[#3A759F] hover:underline">zinc</Link>,{" "}
        <Link href="/supplements/zma" className="text-[#3A759F] hover:underline">ZMA</Link>, dietary intake from oysters/red meat) and you can easily exceed the UL. Long-term zinc above UL impairs copper absorption and can cause copper deficiency. If you&apos;re using zinc-carnosine for &gt;3 months, audit total zinc intake and consider adding 1–2 mg copper to balance.
      </>
    ),
  },
  {
    q: "Can I stack zinc-carnosine with BPC-157?",
    a: (
      <>
        Yes — and the stack is mechanistically natural for gut-healing protocols.{" "}
        <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
        is a synthetic pentadecapeptide derived from human gastric juice; it&apos;s extensively studied for tissue repair, vascular regrowth, and gut barrier protection (oral or subcutaneous routes). Zinc-carnosine works at the mucosal surface via direct adhesion and prostaglandin stimulation; BPC-157 works systemically via angiogenesis and tissue-repair signaling. Different mechanisms, both targeting the same endpoint. Common gut-healing protocol: zinc-carnosine 75 mg BID with meals + oral BPC-157 (250–500 mcg BID, with or before meals). Often paired with{" "}
        <Link href="/supplements/glutamine" className="text-[#3A759F] hover:underline">glutamine</Link>{" "}
        and{" "}
        <Link href="/supplements/probiotics" className="text-[#3A759F] hover:underline">probiotics</Link>{" "}
        for full-spectrum gut work.
      </>
    ),
  },
  {
    q: "Is the 1:1 chelated form really better than separate zinc + carnosine?",
    a: "For gut-specific endpoints — ulcer healing, mucosal repair, leaky gut, NSAID protection — yes, clearly. The chelated form's mucosal adhesion property is what drives the gut-specific benefits, and that property only exists in the 1:1 polaprezinc complex. For non-gut endpoints (systemic zinc support, general antioxidant activity), separate zinc and carnosine work fine and cost less. The decision rule is straightforward: gut goal = chelated zinc-carnosine; general supplementation goal = separates.",
  },
];

const studies = [
  {
    title: "Zinc Carnosine, a Health Food Supplement That Stabilises Small Bowel Integrity and Stimulates Gut Repair Processes",
    authors: "Mahmood A, FitzGerald AJ, Marchbank T, Ntatsaki E, Murray D, Ghosh S, Playford RJ",
    journal: "Gut",
    year: "2007",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/16777920/",
    summary: "The landmark mechanism study that established zinc-carnosine's gut-specific actions beyond the Japanese clinical literature. Combined in vitro (cell culture) and in vivo (rodent + human) work demonstrated that zinc-carnosine stabilizes small bowel integrity, stimulates migration and proliferation of intestinal cells, and accelerates restitution after damage. In healthy human volunteers taking indomethacin (an NSAID), zinc-carnosine significantly reduced the small intestinal permeability increase that NSAIDs typically cause. The paper is the most-cited primary source for the mechanism case behind functional-medicine use of zinc-carnosine for gut healing and leaky-gut protocols.",
  },
  {
    title: "Zinc Carnosine Works with Bovine Colostrum in Truncating Heavy Exercise-Induced Increase in Gut Permeability in Healthy Volunteers",
    authors: "Davison G, Marchbank T, March DS, Thatcher R, Playford RJ",
    journal: "American Journal of Clinical Nutrition",
    year: "2016",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/27357098/",
    summary: "A randomized controlled trial in 8 endurance athletes examining heat-stressed treadmill protocol-induced gut permeability (measured via lactulose-rhamnose dual sugar test). Zinc-carnosine alone (37.5 mg BID for 14 days) significantly reduced the exercise-induced permeability spike compared to placebo; the combination with bovine colostrum produced an even larger effect. The trial established zinc-carnosine as an evidence-backed intervention for athletes who experience GI symptoms during long endurance work — runners, cyclists, triathletes — and for whom exercise-induced gut permeability is a real performance limiter.",
  },
  {
    title: "A Review of Zinc-L-Carnosine and Its Positive Effects on Oral Mucositis, Taste Disorders, and Gastrointestinal Disorders",
    authors: "Hewlings S, Kalman D",
    journal: "Nutrients",
    year: "2020",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/32121367/",
    summary: "A comprehensive review covering 30+ years of zinc-carnosine (polaprezinc) clinical and mechanism literature. Major topics: gastric ulcer healing (Japanese RCT base), H. pylori eradication adjunct therapy, NSAID-induced gastric damage prevention, oral mucositis from chemotherapy and radiation, taste disorders, and gastrointestinal mucosal repair. Useful as a single-source overview for clinicians and researchers approaching the compound. Notes that the chelated 1:1 form is non-equivalent to zinc + carnosine taken separately — the polaprezinc complex has unique mucosal adhesion properties that drive the gut-specific effects.",
  },
  {
    title: "Polaprezinc Excels Other Anti-Ulcer Drugs in Promoting Gastric Ulcer Healing",
    authors: "Matsukura T, Tanaka H",
    journal: "Biochemistry (Moscow)",
    year: "2000",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/10951094/",
    summary: "A review of zinc-carnosine (polaprezinc) clinical performance in gastric ulcer treatment from the Japanese pharmaceutical literature. Discusses the comparative efficacy of polaprezinc against other anti-ulcer drugs (H2 receptor antagonists, proton pump inhibitors, sucralfate), the unique mucosal adhesion mechanism, and antioxidant activity at sites of mucosal injury. Provides the historical context for why polaprezinc became a first-line prescription gastric ulcer treatment in Japan following its 1994 approval, and how its mechanism differs from acid-suppression therapy.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Zinc-Carnosine work?",
    intro:
      "Zinc-carnosine works through one structural property and several biochemical mechanisms. The structural property — mucosal adhesion — is what makes the chelated 1:1 complex non-equivalent to zinc + carnosine taken separately. The chelated form physically sticks to damaged GI mucosa rather than being rapidly absorbed, concentrating its protective and healing actions at sites of injury. The biochemistry on top includes prostaglandin stimulation, antioxidant action, tight-junction support, and heat-shock-protein induction.",
    body: [
      "Mucosal adhesion (the defining property). The chelated zinc-carnosine compound has a unique physicochemical property: it adheres directly to damaged mucosal tissue in the stomach and intestines, concentrating its protective and healing effects at sites of injury rather than rapidly entering systemic circulation. This targeted delivery is the structural reason the chelated 1:1 complex outperforms zinc and carnosine taken separately for gut-specific endpoints.",
      "Mucosal prostaglandin stimulation. Zinc-carnosine stimulates prostaglandin E2 production in gastric mucosa, increasing protective mucus secretion and mucosal blood flow. This is the same gastroprotective pathway NSAIDs disrupt — which is why zinc-carnosine is particularly useful as NSAID-induced damage protection.",
      "Antioxidant protection at the mucosal surface. Both zinc and carnosine are independently potent antioxidants. In the chelated complex, they deliver sustained antioxidant protection at mucosal surfaces, reducing oxidative damage from acid, digestive enzymes, and free radicals released during inflammation.",
      "Tight junction support. Zinc-carnosine supports the integrity of tight junctions — the molecular protein complexes between intestinal epithelial cells that control gut barrier permeability. Mahmood 2007 documented zinc-carnosine reducing indomethacin-induced small intestinal permeability spikes in healthy human volunteers, consistent with tight-junction stabilization.",
      "Heat shock protein induction. Zinc-carnosine induces heat shock proteins (Hsp70, Hsp72) in gut mucosal cells. Heat shock proteins protect cells from stress and accelerate repair after damage, contributing to the compound&apos;s gut-repair effect on a longer timescale than the immediate mucosal adhesion mechanism.",
      "Why the chelated form matters. Free zinc is absorbed quickly in the upper GI tract; free carnosine is rapidly hydrolyzed by serum carnosinase. The 1:1 chelated complex resists both, surviving long enough to exert its mucosal-adhesion-mediated local effects along the full GI tract. This is the structural argument for the chelated form vs the separates — same atoms, very different pharmacokinetics.",
    ],
  },
  {
    id: "research",
    title: "What does Zinc-Carnosine actually do?",
    intro:
      "Zinc-carnosine has 30+ years of Japanese prescription clinical use as a gastric ulcer treatment (polaprezinc, brand name Promac, approved 1994). On top of the regulatory-grade gastric ulcer evidence base, multiple human RCTs from Western research groups have extended the picture to leaky gut, NSAID-induced damage, athlete gut permeability, and oral mucositis. The strongest evidence is concentrated in gut-specific endpoints — that's the lane.",
    body: [
      "Gastric ulcer healing (Strong, regulatory-grade). 30+ years of Japanese clinical use as polaprezinc (Promac) for prescription gastric ulcer treatment. Multiple RCTs in the Japanese pharmaceutical literature documented superior healing rates vs placebo and competitive performance against H2 receptor antagonists and proton pump inhibitors over 6–8 week treatment courses.",
      "Leaky gut / intestinal permeability (Strong). Mahmood 2007 (Gut journal) — the landmark mechanism study — demonstrated zinc-carnosine reduces indomethacin-induced small intestinal permeability in healthy human volunteers, and accelerates intestinal cell migration and repair in vitro. This is the evidence base behind functional-medicine use of zinc-carnosine for leaky gut protocols.",
      "H. pylori eradication adjunct (Moderate-Strong). Multiple Japanese RCTs document improved H. pylori eradication rates when zinc-carnosine is added to standard antibiotic triple therapy. The mechanism is multi-factorial: direct mucosal protection, possible mild antibacterial activity, and acceleration of post-eradication mucosal repair.",
      "NSAID-induced gastric and small-intestinal damage (Strong). Zinc-carnosine protects against indomethacin, aspirin, and other NSAID-induced mucosal damage in both human volunteer trials and clinical studies. Mechanism: prostaglandin-pathway support that NSAIDs suppress, plus direct mucosal adhesion at damage sites. Standard protocol: take zinc-carnosine alongside scheduled NSAID doses.",
      "Exercise-induced gut permeability in athletes (Moderate). Davison 2016 (Am J Clin Nutr) — RCT in endurance athletes — found zinc-carnosine alone (37.5 mg BID for 14 days) significantly reduced the gut permeability spike from a heat-stressed treadmill protocol. Particularly relevant for runners, cyclists, triathletes, and any endurance athlete who experiences GI symptoms during long sessions.",
      "Oral mucositis from chemotherapy/radiation (Moderate). Zinc-carnosine reduces severity and duration of chemo/radiation-induced oral mucositis in multiple trials. Taken as a sugar-free troche or rinse, the mucosal adhesion property concentrates the compound on damaged oral epithelium.",
      "Taste disorders (Moderate, niche use). Zinc-carnosine improves zinc-deficiency-related and chemotherapy-induced taste disorders (dysgeusia) in published Japanese clinical work. Less relevant for general gut-healing protocols but worth knowing.",
    ],
  },
  {
    id: "dosing",
    title: "How is Zinc-Carnosine dosed?",
    intro:
      "The standard adult dose is 75 mg twice daily with meals, which mirrors the Japanese prescription protocol for polaprezinc. The Davison 2016 athlete trial used 37.5 mg BID, demonstrating efficacy at the lower dose. The dosing decision turns on the goal (gut healing vs. athletic protection vs. NSAID adjunct) and total daily zinc intake from all sources.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard / Japanese Rx protocol.</span> 75 mg twice daily with meals (150 mg/day total). The dose used in most clinical trials and the Japanese prescription protocol for polaprezinc.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Athlete gut permeability protocol.</span> 37.5 mg twice daily for 14 days pre-event (Davison 2016 protocol). Half the standard dose, sufficient for the gut permeability endpoint.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">NSAID adjunct.</span> 75 mg taken with each NSAID dose, for the duration of NSAID use. Protocol used in clinical NSAID-protection studies.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Maintenance / general gut support.</span> 37.5–75 mg once daily with the largest meal. Lower dose, longer-term use for users who&apos;ve completed an active healing protocol.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Onset for subjective gut-comfort effects is 2–4 weeks. Ulcer healing in clinical trials measured at 6–8 weeks. Reduction in intestinal permeability markers documented at 14 days.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Elemental zinc math (read this).</span> Each 75 mg zinc-carnosine capsule contains ~17 mg elemental zinc + ~58 mg L-carnosine. Two daily doses = ~34 mg elemental zinc — close to the 40 mg/day tolerable upper limit (UL) for adults. If you&apos;re also taking a multivitamin (typically 15 mg zinc), ZMA, or standalone zinc, you can easily exceed the UL. Long-term zinc above UL impairs copper absorption and can cause copper deficiency. For multi-month use, audit total zinc intake and consider adding 1–2 mg copper to balance.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> Some products label as &ldquo;PepZin GI&rdquo; (Lonza branded zinc-carnosine, US market). Others label as &ldquo;zinc L-carnosine&rdquo; or &ldquo;polaprezinc.&rdquo; All three are the same chelated 1:1 complex. Confirm the actual zinc-carnosine mg, not just a proprietary blend total.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take Zinc-Carnosine",
    intro:
      "Zinc-carnosine is taken orally as a capsule (most common) or chewable troche (for oral mucositis protocols). The mucosal-adhesion mechanism means food timing and ingestion form matter more than for most oral supplements. The points below cover the practical details.",
    node: (
      <div className="space-y-4">
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Twice daily (standard Japanese Rx protocol); once daily for maintenance; per-NSAID-dose for adjunct use</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With largest meal (lunch + dinner is the standard BID rhythm); evening dose maximizes overnight mucosal contact time</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With food (slows transit, increases mucosal contact time) — better for gut-healing endpoints than empty-stomach dosing</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Capsule for general gut protocols; chewable troche or rinse for oral mucositis. Look for actual zinc-carnosine mg on the label, not just &ldquo;proprietary blend&rdquo; total.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">PepZin GI&reg; (Lonza-licensed branded form) is the lab-grade US reference; polaprezinc (Japanese pharmaceutical grade) is the prescription-grade equivalent. Generic &ldquo;zinc L-carnosine&rdquo; products should disclose elemental zinc mg per dose.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No formal cycling required for the compound itself. However, multi-month use at 150 mg/day total dose pushes elemental zinc near the 40 mg/day UL — audit total zinc intake from all sources at the 8–12 week mark; consider stepping down to 75 mg once daily for maintenance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Zinc-Carnosine stack with?",
    intro: (
      <>
        Zinc-carnosine is the foundational mucosal-protection layer of most gut-healing protocols. It stacks naturally with gut-healing peptides ({" "}
        <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
        and{" "}
        <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>), with other gut-repair supplements ({" "}
        <Link href="/supplements/glutamine" className="text-[#3A759F] hover:underline">glutamine</Link>,{" "}
        <Link href="/supplements/collagen-peptides" className="text-[#3A759F] hover:underline">collagen</Link>,{" "}
        <Link href="/supplements/probiotics" className="text-[#3A759F] hover:underline">probiotics</Link>), and with lifestyle interventions that reduce gut stress (NSAID minimization, alcohol moderation, anti-inflammatory diet).
      </>
    ),
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The natural peptide bridges for zinc-carnosine are{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
            and{" "}
            <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>{" "}
            — both gut-healing peptides with mechanisms that complement zinc-carnosine&apos;s mucosal adhesion + prostaglandin support. BPC-157 is a synthetic pentadecapeptide derived from human gastric juice, extensively studied for tissue repair, vascular regrowth, and gut barrier integrity (oral or subcutaneous routes). KPV is a small anti-inflammatory tripeptide derived from alpha-MSH, used for inflammatory bowel conditions and gut mucosal inflammation. Common gut-healing stack: zinc-carnosine 75 mg BID with meals + oral BPC-157 (250–500 mcg BID) + KPV (oral or rectal route depending on inflammation location). The three operate on different layers — mucosal surface, systemic tissue repair, and inflammation modulation respectively. Introduce one variable at a time so you can tell what&apos;s actually doing what.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/glutamine" className="text-[#3A759F] hover:underline">L-Glutamine</Link>{" "}
              — primary fuel for enterocytes (intestinal cells). Supports tight-junction integrity from the inside while zinc-carnosine supports the mucosal layer from the surface. Classic gut-healing pairing — 5–10 g/day glutamine alongside the standard zinc-carnosine protocol.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/probiotics" className="text-[#3A759F] hover:underline">Probiotics</Link>{" "}
              — microbiome restoration. Particularly relevant post-antibiotic, post-H. pylori eradication, or after long NSAID courses where the bacterial ecology takes hits alongside the mucosal damage.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/collagen-peptides" className="text-[#3A759F] hover:underline">Collagen Peptides</Link>{" "}
              — provides glycine, proline, hydroxyproline — amino acids used in mucosal tissue rebuilding. Pairs naturally with zinc-carnosine for full-stack gut wall support.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/zinc" className="text-[#3A759F] hover:underline">Zinc (solo)</Link>{" "}
              — usually NOT a stacking partner. The zinc in zinc-carnosine already provides ~17 mg elemental zinc per 75 mg dose. Adding more zinc risks exceeding the 40 mg/day UL.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Bovine colostrum — synergistic in the Davison 2016 athlete trial. Particularly relevant for athletes doing long-duration heat-stressed work. Not on PP but commonly stacked.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Copper (1–2 mg/day) — counter-balance for long-term zinc use. The elemental zinc in zinc-carnosine at 150 mg/day total dose can drive copper down over multi-month use; small copper supplementation prevents this.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">NSAID minimization.</span> Zinc-carnosine protects against NSAID damage but doesn&apos;t eliminate it. Reduce NSAID use where possible; use the lowest effective dose for the shortest needed duration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Alcohol moderation.</span> Alcohol is one of the most gut-stressful inputs. Heavy or chronic use disrupts the mucosal barrier directly; zinc-carnosine can&apos;t fully offset this. Reduce or eliminate during active gut-healing protocols.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-endurance event timing.</span> 14-day loading protocol pre-event (Davison 2016) — useful for athletes targeting key race or training blocks where GI symptoms have been an issue.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-inflammatory diet patterns.</span> Mediterranean / whole-food approaches reduce mucosal inflammatory load. The supplement protocol does more work in a low-inflammation dietary context than when fighting daily inflammatory inputs.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stress management.</span> Cortisol elevations directly affect gut permeability. Sleep, exercise rhythm, and stress reduction are non-negotiable adjacents to any gut-healing protocol.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Zinc-carnosine has an excellent safety profile — 30+ years of Japanese prescription clinical use without major safety signals. Side effect frequency is low and severity is mild. The main considerations are the elemental zinc content (cumulative zinc intake from all sources) and a small number of drug-interaction notes.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mild, infrequent)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI symptoms — nausea, soft stools, or stomach upset, typically transient and resolved by taking with more food</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Constipation in a minority of users (less common than the loose-stool pattern)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Metallic taste in some users, particularly with chewable troche formulations</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Watch-list (cumulative zinc-related)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Total elemental zinc above 40 mg/day UL on multi-month use — audit all zinc sources (multivitamin, <Link href="/supplements/zma" className="text-[#3A759F] hover:underline">ZMA</Link>, standalone <Link href="/supplements/zinc" className="text-[#3A759F] hover:underline">zinc</Link>, dietary).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Copper deficiency from prolonged high-zinc intake — impaired copper absorption is the mechanism; mild copper supplementation (1–2 mg/day) offsets it.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Suppressed iron absorption with very high zinc intake — relevant for users with low ferritin or iron deficiency.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Tetracycline and quinolone antibiotics — zinc binds these drugs, reducing their absorption. Separate dosing by at least 2 hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Penicillamine (used in Wilson&apos;s disease and rheumatoid arthritis) — zinc reduces its absorption. Separate dosing by at least 2 hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bisphosphonates — zinc may reduce absorption. Separate dosing by at least 2 hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Iron supplements — competitive absorption with zinc. Separate dosing by 2+ hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Proton pump inhibitors (omeprazole, pantoprazole, etc.) — no negative interaction; PPIs and zinc-carnosine are often used together in clinical Japanese protocols for ulcer disease.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Standalone <Link href="/supplements/zinc" className="text-[#3A759F] hover:underline">zinc</Link>, <Link href="/supplements/zma" className="text-[#3A759F] hover:underline">ZMA</Link>, multivitamins with zinc — additive total zinc intake. Audit total daily zinc; reduce other sources if zinc-carnosine pushes you near or above the 40 mg/day UL.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about Zinc-Carnosine",
    intro:
      "The Japanese prescription evidence base is mature for gastric ulcer and H. pylori adjunct use. Western functional-medicine adoption has extended the use cases (leaky gut, athlete protocols, NSAID protection) on a moderate evidence base. Several open questions remain — chronic safety on multi-year horizons, dose-response in non-ulcer populations, and the gap between Japanese clinical-grade polaprezinc and US supplement-grade zinc-carnosine.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Multi-year safety in healthy users.</span> Most safety data covers 6–24 month treatment courses in clinical populations (gastric ulcer patients). Continuous multi-year use in healthy users for general gut-health maintenance is not well characterized — the cumulative zinc burden is the main open concern, manageable via dose stepping and copper balancing but not formally studied at that horizon.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Dose-response in non-ulcer populations.</span> The standard 75 mg BID dose comes from Japanese ulcer-treatment trials. Whether that&apos;s the optimal dose for leaky gut, athlete protocols, or general gut-health maintenance is plausible but not formally tested. Davison 2016 used half the standard dose (37.5 mg BID) and got significant effects — suggesting the dose-response curve may be flatter than the standard protocol implies.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Polaprezinc vs supplement-grade equivalence.</span> Japanese clinical polaprezinc is pharmaceutical-grade with tight QC. US supplement-grade zinc-carnosine quality varies — branded forms (PepZin GI/Lonza) are validated; generic forms vary in actual zinc-carnosine content and chelation purity. Direct head-to-head comparisons of supplement-grade vs pharmaceutical-grade polaprezinc are limited.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Beyond-gut applications.</span> Some research explores zinc-carnosine for diabetic ulcers, oral lichen planus, oral mucositis, and skin wound healing. The evidence is preliminary; the gut-specific case is dramatically stronger.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Microbiome interaction.</span> Zinc-carnosine doesn&apos;t obviously target the microbiome, but zinc availability affects bacterial growth and composition. Whether long-term zinc-carnosine use shifts microbiome composition in ways that matter for the gut barrier endpoint — net positive, net negative, or neutral — is not characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Where studies disagree.</span> Effect sizes in the gut-permeability literature vary across trials, particularly for athletic populations and different exercise protocols. The directional signal is consistent (gut permeability reduction); the magnitude varies. Healthy-user mucosal-protection trials show smaller effect sizes than ulcer-population treatment trials — predictable, but worth noting for expectation-setting.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy Zinc-Carnosine",
    intro:
      "Zinc-carnosine is available over-the-counter in the US, UK, and EU (prescription-only in Japan as polaprezinc / Promac). The decision points are branded vs generic, actual mg per capsule labeling, and whether the form matches your protocol (capsule for gut-healing, troche for oral mucositis). The quality markers below are the screen we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">75 mg actual zinc-carnosine per capsule</span> — not buried in a proprietary blend; check the elemental zinc disclosure (~17 mg per 75 mg dose)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">PepZin GI&reg; branded zinc-carnosine</span> (Lonza-licensed) — the US lab-grade reference form used in most clinical literature outside Japan</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification of the chelated form integrity</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Capsule format</span> for general gut-healing; chewable troche for oral mucositis protocols</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vegetarian capsule</span> preferred (most are HPMC; some still use gelatin)</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary &ldquo;gut blend&rdquo;</span> that obscures the zinc-carnosine dose alongside glutamine, slippery elm, etc. — separates let you control each component&apos;s dose</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — avoid jars sitting on warehouse shelves &gt;18 months pre-purchase</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=zinc+carnosine&tag=profpeptide-20" label="Zinc-Carnosine" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Zinc-Carnosine FAQ",
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
          Mahmood A, FitzGerald AJ, Marchbank T, Ntatsaki E, Murray D, Ghosh S, Playford RJ. Zinc carnosine, a health food supplement that stabilises small bowel integrity and stimulates gut repair processes. Gut. 2007;56(2):168-175.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16777920/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16777920/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Davison G, Marchbank T, March DS, Thatcher R, Playford RJ. Zinc carnosine works with bovine colostrum in truncating heavy exercise-induced increase in gut permeability in healthy volunteers. Am J Clin Nutr. 2016;104(2):526-536.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27357098/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27357098/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hewlings S, Kalman D. A review of zinc-L-carnosine and its positive effects on oral mucositis, taste disorders, and gastrointestinal disorders. Nutrients. 2020;12(3):665.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/32121367/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/32121367/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Matsukura T, Tanaka H. Applicability of zinc complex of L-carnosine for medical use. Biochemistry (Moscow). 2000;65(7):817-823.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10951094/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10951094/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Watanabe T, Higuchi K, Tanigawa T, Tominaga K, Fujiwara Y, Arakawa T. Mechanisms of peptic ulcer recurrence: role of inflammation and rebamipide/polaprezinc. Inflammopharmacology. 2007;15(5):214-219.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17943249/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17943249/
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

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between zinc-carnosine and just zinc + carnosine taken separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The chelated 1:1 molar complex behaves very differently from the two compounds taken separately. Zinc-carnosine physically adheres to damaged gastrointestinal mucosa — sticking to ulcer sites and inflamed tissue — and slowly releases zinc and carnosine locally rather than being rapidly absorbed into systemic circulation. The result is concentrated, targeted action at sites of mucosal injury, which is why the chelated form outperforms the separates for gut-healing endpoints. For systemic zinc supplementation (immune function, taste, hair/skin), regular zinc forms are equivalent and cheaper."
      }
    },
    {
      "@type": "Question",
      "name": "Is this the same as polaprezinc?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — exactly the same compound. Polaprezinc is the chemical name used in the Japanese pharmaceutical literature; zinc-carnosine is the supplement-market name in the US and UK. Polaprezinc was approved as a prescription gastric ulcer drug in Japan in 1994 (sold under the brand name Promac) and has accumulated 30+ years of clinical use data there. The US supplement market sells the identical compound, often under brand names like PepZin GI (Lonza-licensed)."
      }
    },
    {
      "@type": "Question",
      "name": "How long until I notice gut healing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subjective gut comfort improvements typically appear in 2–4 weeks. Measurable healing of gastric ulcers in clinical trials runs over 6–8 weeks. Reduction in intestinal permeability markers (zonulin, lactulose-mannitol ratio) in research has been documented at 14 days. For NSAID-induced damage protection, the effect is more immediate — taken before NSAIDs, zinc-carnosine reduces gastric mucosal damage from the first dose."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take it with NSAIDs like ibuprofen or aspirin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and this is one of the most evidence-backed uses. NSAID-induced gastric and small-intestinal damage is a well-documented problem; zinc-carnosine protects mucosal tissue against the prostaglandin-suppression damage NSAIDs cause. Standard protocol: 75 mg zinc-carnosine taken with food alongside the NSAID dose. Doesn't replace acid-suppression therapy (proton pump inhibitors) for high-risk users, but adds protection that those drugs don't provide."
      }
    },
    {
      "@type": "Question",
      "name": "Should I take it on an empty stomach or with food?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With food is the protocol most clinical trials use, and it's the better choice for most people. Food slows transit, giving the chelated compound more contact time with mucosal tissue along the GI tract. Empty-stomach dosing produces faster absorption but less mucosal contact — less useful for gut-healing endpoints. Exception: some practitioners use a bedtime dose on empty stomach to maximize overnight mucosal repair, but the with-food protocol is the better-evidenced default."
      }
    },
    {
      "@type": "Question",
      "name": "Will the zinc in zinc-carnosine count toward my daily zinc intake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and this matters. A standard 75 mg zinc-carnosine capsule contains ~17 mg elemental zinc. Two doses daily (150 mg total) = ~34 mg elemental zinc/day — close to the 40 mg/day tolerable upper limit (UL) for adults. Add any other zinc sources (multivitamin, separate zinc, ZMA, dietary intake from oysters/red meat) and you can easily exceed the UL. Long-term zinc above UL impairs copper absorption and can cause copper deficiency. If you're using zinc-carnosine for >3 months, audit total zinc intake and consider adding 1–2 mg copper to balance."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack zinc-carnosine with BPC-157?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the stack is mechanistically natural for gut-healing protocols. BPC-157 is a synthetic pentadecapeptide derived from human gastric juice; it's extensively studied for tissue repair, vascular regrowth, and gut barrier protection (oral or subcutaneous routes). Zinc-carnosine works at the mucosal surface via direct adhesion and prostaglandin stimulation; BPC-157 works systemically via angiogenesis and tissue-repair signaling. Different mechanisms, both targeting the same endpoint. Common gut-healing protocol: zinc-carnosine 75 mg BID with meals + oral BPC-157 (250–500 mcg BID, with or before meals). Often paired with glutamine and probiotics for full-spectrum gut work."
      }
    },
    {
      "@type": "Question",
      "name": "Is the 1:1 chelated form really better than separate zinc + carnosine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For gut-specific endpoints — ulcer healing, mucosal repair, leaky gut, NSAID protection — yes, clearly. The chelated form's mucosal adhesion property is what drives the gut-specific benefits, and that property only exists in the 1:1 polaprezinc complex. For non-gut endpoints (systemic zinc support, general antioxidant activity), separate zinc and carnosine work fine and cost less. The decision rule is straightforward: gut goal = chelated zinc-carnosine; general supplementation goal = separates."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Zinc-Carnosine: Japan's 30-Year Rx for Gut Lining Repair",
  "description": "Zinc-carnosine (polaprezinc) dosing, mechanism, and Japan's Rx evidence base for gastric ulcer healing, leaky gut repair, and athlete gut protection.",
  "url": "https://profpeptide.com/supplements/zinc-carnosine",
  "datePublished": "2026-04-07T00:00:00Z",
  "dateModified": "2026-05-24T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "reviewedBy": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prof. Peptide",
    "url": "https://profpeptide.com"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
    { "@type": "ListItem", "position": 2, "name": "Supplements", "item": "https://profpeptide.com/supplements" },
    { "@type": "ListItem", "position": 3, "name": "Zinc-Carnosine" }
  ]
};

export default function ZincCarnosinePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Zinc-Carnosine</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 24, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Polaprezinc, zinc L-carnosine, ZnC, PepZin GI (US branded), Promac (Japan Rx brand)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Chelated mineral-dipeptide complex (zinc + L-carnosine, 1:1 molar ratio)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Strong — 30+ years of Japanese prescription use (polaprezinc/Promac, approved 1994) for gastric ulcer + H. pylori adjunct therapy; Mahmood 2007 (Gut) mechanism RCT in human volunteers; Davison 2016 (Am J Clin Nutr) athlete gut-permeability RCT; Hewlings & Kalman 2020 comprehensive review
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Zinc-Carnosine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Zinc-carnosine (polaprezinc) is a chelated 1:1 molar complex of zinc and the dipeptide L-carnosine. The chelation is what matters: the complex physically adheres to damaged gastrointestinal mucosa rather than being rapidly absorbed, concentrating its protective and healing actions at sites of injury along the GI tract. The compound has been used as a prescription gastric ulcer drug in Japan since 1994 (brand name Promac) and has 30+ years of clinical use data behind it. Western functional medicine adopted it for leaky-gut and NSAID-protection protocols starting in the 2000s, with mechanism-grade RCT support from Mahmood 2007 (Gut journal) and athlete-application evidence from Davison 2016 (Am J Clin Nutr). It is one of the few gut-healing supplements with prescription-grade evidence behind it — and one of the most natural complementary pairings for the gut-healing peptide cluster (
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>).
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gastric ulcer prevention and healing (Japanese Rx evidence base, 30+ years)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">H. pylori eradication adjunct (improved rates when added to antibiotic triple therapy)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Leaky gut / intestinal permeability reduction (Mahmood 2007, Gut journal)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">NSAID-induced gastric and small-intestinal damage protection</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Exercise-induced gut permeability reduction in endurance athletes (Davison 2016)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Oral mucositis severity reduction (chemotherapy and radiation populations)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antioxidant protection at mucosal surfaces along the full GI tract</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 75 mg twice daily with meals (the Japanese Rx polaprezinc protocol) for general gut-healing and ulcer applications. The Davison 2016 athlete trial used 37.5 mg BID for 14 days pre-event and demonstrated efficacy at the lower dose. For NSAID adjunct use: 75 mg with each NSAID dose. Each 75 mg capsule contains ~17 mg elemental zinc — audit total zinc intake from all sources to stay below the 40 mg/day UL.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Available over-the-counter from most supplement retailers. Quality varies — review the quality-markers checklist in the Where to Buy section below before purchasing.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=zinc+carnosine&tag=profpeptide-20" label="Zinc-Carnosine" />
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
        {["Polaprezinc", "Gut Lining Repair", "Leaky Gut", "NSAID Protection", "Athlete Gut", "Rx in Japan"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/glutamine" className="text-sm font-medium text-[#3A759F] hover:underline">L-Glutamine</Link>
          <Link href="/supplements/probiotics" className="text-sm font-medium text-[#3A759F] hover:underline">Probiotics</Link>
          <Link href="/supplements/collagen-peptides" className="text-sm font-medium text-[#3A759F] hover:underline">Collagen Peptides</Link>
          <Link href="/supplements/zinc" className="text-sm font-medium text-[#3A759F] hover:underline">Zinc</Link>
          <Link href="/supplements/curcumin" className="text-sm font-medium text-[#3A759F] hover:underline">Curcumin</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Zinc-Carnosine" pagePath="/supplements/zinc-carnosine" />
    </div>
    </>
  );
}
