import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/guides/syringes-and-injection",
  title: "Insulin Syringe Units to mcg + How to Inject Peptides",
  description:
    "How to read insulin syringe units, convert units to mcg for any reconstitution, pick the right barrel size, and inject peptides subcutaneously step by step.",
  ogTitle: "Insulin Syringes & Injection",
  ogDescription:
    "A practical guide to reading insulin syringes, units vs mcg, and subcutaneous injection technique for peptide research.",
  useDefaultOgImage: false,
});

const sections = [
  {
    id: "what-is-it",
    title: "What is an insulin syringe?",
    intro:
      "Insulin syringes are small-volume syringes calibrated in &ldquo;units&rdquo; rather than millilitres, originally designed for diabetic insulin self-injection. They became the default for peptide research because their fine-gauge needles, short length, and tightly-spaced unit markings are ideal for the small, precise subcutaneous doses peptides require.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          A &ldquo;U-100&rdquo; insulin syringe means the syringe is calibrated so that 100 units of fluid equals 1 mL. The barrel is graduated in unit ticks (not in mL), the needle is permanently attached, and the dead-space at the tip is minimized so the drawn volume matches the dose closely.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Calibration.</span> U-100 (100 units = 1 mL). This is the only calibration relevant to peptide research; U-40 and U-500 exist but are insulin-specific.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Needle gauge.</span> Typically 29–31 gauge. Higher number = thinner needle. Standard peptide-research gauge is 30 or 31.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Needle length.</span> 5/16&Prime; (8 mm) is the standard for subcutaneous injection. Longer lengths (1/2&Prime;, 12.7 mm) are reserved for intramuscular use, which is rarely the right route for peptides.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Why insulin syringes won.</span> Most research peptides are dosed in microgram or low-milligram quantities, dissolved in a few mL of bacteriostatic water. The resulting injection volume is almost always under 50 units &mdash; well within insulin-syringe range &mdash; and the unit ticks give finer resolution than a standard 1 mL tuberculin syringe.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "units",
    title: "What does &lsquo;units&rsquo; mean on an insulin syringe?",
    intro:
      "&ldquo;Units&rdquo; on an insulin syringe are a volume measurement, not a dose measurement. On a U-100 syringe, 100 units equals exactly 1 mL, so 1 unit equals 0.01 mL. This is the single most important fact to internalize before working with peptides &mdash; mistaking units for milligrams (mg) or micrograms (mcg) is the most common newcomer error.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The confusion comes from how insulin is dosed. Insulin is sold at a fixed concentration (U-100 = 100 units of insulin activity per mL), so for an insulin user, &ldquo;units&rdquo; on the syringe equals &ldquo;units&rdquo; of insulin. The two are the same number on purpose. Peptides don&rsquo;t work that way: the concentration depends entirely on how much bacteriostatic water you used to reconstitute the vial, so the number of units you draw bears no fixed relationship to the milligrams or micrograms delivered until you specify the reconstitution.
        </p>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Units drawn</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Volume (mL)</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Roughly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.02 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">A barely-visible drop at the needle tip</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.10 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1/10 of a 1 mL barrel</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">50 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.50 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Half of a 1 mL barrel; full barrel of a 0.5 mL syringe</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">100 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.00 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Full barrel of a 1 mL syringe (rare for peptide doses)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Practical takeaway.</span> Units describe how much liquid is in the syringe, not how much active peptide. To convert units to a peptide dose you need to know the vial&rsquo;s mg content and the reconstitution water volume &mdash; covered in the next section.
        </p>
      </div>
    ),
  },
  {
    id: "units-vs-mcg",
    title: "What&rsquo;s the difference between units and mcg?",
    intro:
      "Units measure volume of liquid drawn into the syringe. Micrograms (mcg) and milligrams (mg) measure the mass of peptide dissolved in that liquid. The conversion between them depends entirely on the reconstitution &mdash; specifically, how many mg of peptide you dissolved in how many mL of bacteriostatic water.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The relationship is simple once you internalize it: more water in the vial means lower concentration, which means more units (volume) needed to deliver the same mass dose. The formula:
        </p>
        <div className="bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-lg p-4 font-mono text-sm text-[#16181B] dark:text-slate-200">
          mcg per unit = (mg in vial &divide; mL of BAC water) &times; 10
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Worked example.</span> A 10 mg vial reconstituted three different ways, all targeting a 100 mcg dose:
        </p>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">mcg per unit</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Units for 100 mcg</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Units for 500 mcg</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Units for 1 mg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 mcg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 unit</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 mcg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">33.3 mcg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">5 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 mcg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">25 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Always know your reconstitution before calculating a dose.</span> The same number of units delivers a different dose depending on how much water is in the vial. Write the reconstitution volume on the vial label as soon as you mix it, and double-check before every draw. The Prof. Peptide{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator</Link>{" "}
          handles this conversion automatically.
        </p>
      </div>
    ),
  },
  {
    id: "syringe-size",
    title: "Which syringe size should I use?",
    intro:
      "Insulin syringes come in three common barrel sizes: 1 mL (100 units), 0.5 mL (50 units), and 0.3 mL (30 units). The needle is the same across all three &mdash; what changes is barrel capacity and tick precision. Smaller barrels have finer tick marks, which makes them more accurate for the small volumes typical in peptide research.",
    node: (
      <div className="space-y-4">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Barrel</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Capacity</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Tick spacing</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">0.3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1-unit ticks</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Microdoses; most precise for sub-10-unit draws</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">0.5 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1-unit ticks</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Standard peptide work; 10–50 unit draws</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2-unit ticks</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Larger volumes &mdash; GLP-1 high-dose tiers, blends, &gt;50-unit draws</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ol className="list-decimal list-inside space-y-1 pt-2">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose volume drives barrel choice.</span> Pick the smallest barrel that can hold your draw. A 5-unit dose on a 1 mL barrel sits between two tick marks; on a 0.3 mL barrel it lands cleanly on a labelled tick.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Why smaller is better for microdoses.</span> Tick spacing scales with barrel length, not capacity, so a 0.3 mL barrel spreads 30 ticks across the same physical length as a 0.5 mL barrel spreads 50 ticks &mdash; the smaller barrel literally gives you more space between each unit mark to read accurately.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Common recommendation.</span> 0.3 mL or 0.5 mL for typical 2–10 unit peptide doses. Step up to 1 mL only when the draw exceeds the smaller barrel&rsquo;s capacity.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Needle is the same.</span> Across these three sizes the needle itself (gauge and length) is typically identical &mdash; barrel capacity is the only meaningful variable.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "needle-gauge",
    title: "What gauge and length needle should I use?",
    intro:
      "For subcutaneous peptide injection the standard is a 29–31 gauge needle, 5/16 inch (8 mm) long. Higher gauge numbers mean thinner needles (counterintuitive but consistent), and the short length keeps the injection in the subcutaneous fat layer rather than going into muscle. Most pre-packaged insulin syringes from major brands ship with exactly this needle.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gauge primer.</span> Needle gauge is inverse: 29 gauge is thicker than 31 gauge. 29–31 g is standard for subQ peptide work; 30 g is the most common factory default.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Length primer.</span> 5/16&Prime; (8 mm) is the standard subcutaneous length &mdash; long enough to clear the dermis and reach subcutaneous fat, short enough not to enter muscle on a pinched fold.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Why thinner is better.</span> Lower-viscosity peptide solutions flow easily through fine needles, and thinner needles cause less pain, bruising, and tissue trauma than thicker ones.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">When to use 1/2&Prime; (12.7 mm).</span> Intramuscular injection &mdash; rarely the right route for peptides. A handful of peptide protocols specify IM dosing; check the specific peptide&rsquo;s profile before assuming subQ.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Drawing from the vial.</span> The same syringe used for injection draws from the vial. Some users keep a separate larger-gauge needle for drawing thick reconstituted solutions then swap to the insulin syringe for injection &mdash; for typical peptide viscosity this is unnecessary.</li>
      </ol>
    ),
  },
  {
    id: "injection-technique",
    title: "How do I inject peptides subcutaneously?",
    intro:
      "Subcutaneous (subQ) injection delivers the peptide into the fat layer just below the skin, where it absorbs slowly into the bloodstream. The technique is straightforward and well-tolerated when done consistently. The steps below cover the practical sequence followed by experienced peptide researchers.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Wash hands.</span> Soap and water, 20 seconds. Skip the hand sanitizer &mdash; alcohol residue on fingertips contaminates the vial septum on the next draw.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Clean the vial septum.</span> Wipe the rubber stopper with a fresh alcohol swab. Let it air-dry &mdash; wet alcohol pushed into the vial degrades some peptides.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Draw the dose.</span> Pull air into the syringe equal to your dose volume, inject it into the vial (this equalizes pressure), invert the vial, and draw the dose. Tap out bubbles, push them back, redraw to your exact unit mark.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Choose and clean the injection site.</span> Wipe with a fresh alcohol swab in a single direction. Let it dry fully &mdash; injecting through wet alcohol stings significantly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pinch the skin fold.</span> Gather a 1–2 inch fold of skin and subcutaneous fat between thumb and index finger. The pinch lifts subQ fat away from muscle and makes the depth target easier.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insert the needle.</span> 90&deg; angle for most sites on most body types. Use 45&deg; on lean areas (back of arm, lean thigh) where the pinched fold is thin &mdash; this keeps the tip in subQ fat instead of crossing into muscle. The motion is quick and direct, not a slow push.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Depress the plunger.</span> Slow, steady pressure over 2–3 seconds. Don&rsquo;t race the plunger; faster injection causes more localized stinging.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Withdraw and apply pressure.</span> Pull straight out at the same angle. Apply gentle pressure with a clean cotton pad or gauze for 10–20 seconds. Skip massaging the site &mdash; it disturbs the depot.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dispose safely.</span> Place the used syringe directly into a sharps container. Don&rsquo;t recap; recapping is the most common cause of needlestick injuries.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Aspiration.</span> Pulling back on the plunger after insertion to check for blood (&ldquo;aspirating&rdquo;) is not necessary for subcutaneous injection. The subQ fat layer has very few large blood vessels, and the small-bore insulin needle is unlikely to enter one. Aspiration is a vestige of older IM-injection technique and is no longer recommended even for IM in most clinical contexts.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Pain mitigation.</span> Inject at room temperature (cold solution stings more &mdash; let it warm in your hand for a minute first), let alcohol fully evaporate, use a fresh needle every time, and rotate sites. The single biggest factor in pain is needle dullness &mdash; reused needles are noticeably more painful than fresh ones.
        </p>
      </div>
    ),
  },
  {
    id: "injection-sites",
    title: "What injection sites should I use?",
    intro:
      "The standard subcutaneous injection sites are the abdomen, upper outer thighs, back of the upper arms, and the love-handle/lower-flank area. Each site has slightly different absorption characteristics, but for most peptides the difference is small enough that site choice is driven more by convenience and rotation than by pharmacokinetics.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Abdomen.</span> The default site for most peptide researchers. Plenty of subQ fat, easy to pinch, easy to see, and the fastest absorption of the common sites. Avoid a 2-inch radius around the navel.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Upper outer thigh.</span> Convenient and easy to self-inject. Slower absorption than abdomen. Stay in the outer/lateral portion to avoid the inner thigh&rsquo;s denser nerve and vessel network.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Back of upper arm.</span> The triceps fold. Lean researchers may struggle to pinch enough fat here; if so, default to abdomen or thigh.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Love handles / lower flank.</span> The fatty area just above the iliac crest. Easy to pinch, well-tolerated, slowest absorption.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Site rotation.</span> Alternate sides daily (left abdomen one day, right the next). Avoid injecting within 1–2 inches of a previous site for at least 2 weeks &mdash; repeated injection at the same exact spot causes lipodystrophy (localized fat thickening or thinning) and slows absorption from that site over time.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Areas to avoid.</span> Scars, moles, tattoos, recently sunburned skin, areas with active rash, irritation or infection, and the 2-inch zone around the navel. Skip any site that looks bruised, raised, or unusually red.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Absorption rate.</span> Roughly abdomen &gt; back of arm &gt; thigh &gt; flank. The difference matters most for fast-acting compounds (insulin, short-acting GH peptides); long-half-life peptides like the GLP-1 class are largely insensitive to site choice because steady-state plasma levels even out across the week.
        </p>
      </div>
    ),
  },
  {
    id: "needle-reuse",
    title: "Should I reuse needles?",
    intro:
      "No. The industry consensus across diabetes care, peptide research communities, and medical guidance is single-use only. The cost savings from reuse are negligible, and the downsides &mdash; pain, tissue trauma, sterility risk, vial contamination &mdash; are real and cumulative.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Needles dull immediately.</span> A single insertion bends and dulls the bevel. The second injection with the same needle is noticeably more painful and causes more tissue trauma; by the third or fourth use the needle is visibly hooked under magnification.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sterility.</span> Insulin syringes are not designed to be re-sterilized. Wiping the needle with alcohol doesn&rsquo;t clean the inner lumen or the dead-space at the hub. Bacterial contamination accumulates with each use.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vial contamination.</span> Drawing from the same vial with a previously-used needle introduces skin flora and trace blood into the vial. Bacteriostatic water suppresses growth but doesn&rsquo;t sterilize, and contamination can spoil an expensive vial in days.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cost.</span> Insulin syringes are sold in boxes of 100 at $10–30 from medical suppliers &mdash; roughly $0.10–0.30 each. Reusing one to save 25 cents per dose is not worth the additional pain and risk.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Safe disposal.</span> Use an FDA-cleared sharps container (rigid, puncture-resistant, labelled). When full, dispose through a household sharps disposal service, a pharmacy take-back program, or your local hazardous-waste collection. Don&rsquo;t put loose needles in household trash &mdash; in most states it&rsquo;s illegal as well as unsafe.</li>
      </ol>
    ),
  },
  {
    id: "bleeding",
    title: "What if I miss a vein or hit a small blood vessel?",
    intro:
      "Hitting a small subcutaneous blood vessel happens occasionally and is essentially never dangerous. The subQ fat layer is laced with small capillaries; an insulin needle will nick one from time to time, producing a small bleed at the injection site or a minor bruise the next day. It&rsquo;s annoying, not serious.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Apply gentle pressure.</span> Press a clean cotton pad or gauze on the site for 30–60 seconds. The bleeding will stop. Optional: a few minutes of ice afterward reduces bruising.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Expect a small bruise.</span> A pea-sized bruise or yellow-purple mark appearing 1–2 days later is normal and resolves in a week or so.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Skip the site temporarily.</span> If you get a significant bleed or visible hematoma, mark that area as off-limits for 2 weeks to let the tissue heal before injecting near it again.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">The dose still works.</span> A nicked capillary doesn&rsquo;t meaningfully affect peptide absorption. Don&rsquo;t re-dose to compensate.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">When to be concerned (rare).</span> Bleeding that doesn&rsquo;t stop after 5 minutes of firm pressure, a rapidly-expanding hematoma, severe pain that doesn&rsquo;t resolve, signs of infection (spreading redness, warmth, pus, fever) 24–48 hours later, or numbness/tingling extending away from the site. These warrant medical evaluation. Routine bruising and minor bleeding do not.
        </p>
      </div>
    ),
  },
  {
    id: "resources",
    title: "Where can I learn more?",
    intro:
      "This guide covers injection technique &mdash; the mechanics of getting the peptide into the right tissue layer at the right dose. Protocol questions (which peptide, what dose, how long a cycle) are peptide-specific and belong on the individual peptide profile pages.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Reconstitution & dose math.</span>{" "}
            <Link href="/calculator" className="text-[#3A759F] hover:underline">Prof. Peptide dosage calculator</Link>{" "}
            &mdash; enter vial mg, BAC water volume, and target dose; get units to draw on a U-100 syringe.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Peptide research fundamentals.</span>{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Peptide research basics</Link>{" "}
            &mdash; vial handling, bacteriostatic water, storage, vendor selection, and quality verification.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Common peptide profiles.</span> Most-referenced profiles for protocol context:{" "}
            <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>,{" "}
            <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>,{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>,{" "}
            <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>.
          </li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Vendor and pricing references.</span>{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">Verified discount codes</Link>{" "}
            from vetted research peptide vendors.
          </li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Scope reminder.</span> Protocols, doses, and cycle lengths are peptide-specific. This guide covers technique &mdash; not what to take or how much. Consult the relevant peptide profile for protocol guidance.
        </p>
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: stripEntities(s.title) }));

function stripEntities(s: string): string {
  return s
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—")
    .replace(/&apos;/g, "'");
}

export default function SyringesAndInjectionPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Insulin Syringes and Injection Technique",
          description:
            "A practical guide to reading insulin syringes, choosing the right size, and injecting research peptides correctly.",
          url: "https://profpeptide.com/guides/syringes-and-injection",
          datePublished: "2026-05-18",
          dateModified: "2026-05-18",
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
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://profpeptide.com/guides" },
            { "@type": "ListItem", position: 3, name: "Insulin Syringes and Injection Technique" },
          ],
        }}
      />
      <div className="section max-w-3xl">
        <Link href="/guides" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
          Back to Guides
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">
            Insulin Syringes and Injection Technique
          </h1>
          <span className="tag">Guide</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Last reviewed: May 18, 2026</p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
          A practical guide to reading insulin syringes, choosing the right size, and injecting research peptides correctly.
        </p>

        <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Topic:</span> Practical injection technique
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Audience:</span> Researchers new to peptide injection
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Reading time:</span> 8–10 minutes
          </p>
        </div>

        <PageTOC sections={tocSections} />

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-20">
              <h2
                className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              {s.intro && (
                <p
                  className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: s.intro }}
                />
              )}
              {s.node && s.node}
            </div>
          ))}
        </div>

        <div className="mt-10 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          For educational and research purposes only. Not medical advice. Not for human use.
        </div>

        <PageDisclaimer />
      </div>
    </>
  );
}
