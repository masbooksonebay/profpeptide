import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Tongkat Ali — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Tongkat Ali supplement profile covering testosterone support, SHBG reduction, aromatase inhibition, cortisol modulation, and Physta dosage.",
};

export default function TongkatAliPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Tongkat Ali","description":"Tongkat Ali supplement profile covering testosterone support, SHBG reduction, aromatase inhibition, cortisol modulation, and Physta dosage.","url":"https://www.profpeptide.com/supplements/tongkat-ali","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Supplements","item":"https://www.profpeptide.com/supplements"},{"@type":"ListItem","position":3,"name":"Tongkat Ali"}]}} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tongkat Ali</h1>
        <span className="tag">Sexual Health</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Eurycoma longifolia, longjack, Malaysian ginseng, pasak bumi, TA</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The Southeast Asian root that raises testosterone and restores male vitality</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Tongkat Ali (Eurycoma longifolia) is a flowering plant native to the rainforests of Malaysia, Indonesia, Thailand, and Vietnam — where it has been used in traditional medicine for centuries as a male tonic for enhancing libido, treating erectile dysfunction, and improving male fertility. It is one of the most extensively researched natural testosterone-supporting supplements available, with a growing body of human clinical trials showing significant increases in free and total testosterone — particularly in men with below-normal or low-normal testosterone levels. Unlike many herbal testosterone boosters with weak evidence, Tongkat Ali has a plausible and studied mechanism: it reduces sex hormone-binding globulin (SHBG) which increases free testosterone availability, inhibits aromatase (reducing testosterone-to-estrogen conversion), and reduces cortisol — which suppresses testosterone production. A standardized water-soluble extract (Physta — standardized to eurycomanone content) has been used in most quality human trials, making standardization and extract quality critical when selecting products.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Increases free and total testosterone in men with low-normal levels","Reduces sex hormone-binding globulin (SHBG)","Improves sexual desire and erectile function","Reduces cortisol — supporting the testosterone-cortisol ratio","Improves sperm quality and male fertility","Enhances muscle strength and body composition","Adaptogenic stress-reduction properties"].map((b) => (<p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["SHBG Reduction — A significant proportion of testosterone in the blood is bound to sex hormone-binding globulin (SHBG) and is biologically inactive. Tongkat Ali reduces SHBG levels, increasing the proportion of free (bioavailable) testosterone — producing meaningful increases in active testosterone without necessarily increasing total testosterone production dramatically.","LH Stimulation — Eurycomanone and other quassinoids in Tongkat Ali appear to stimulate luteinizing hormone (LH) release from the pituitary, which signals the testes to increase testosterone production — working through the body's natural regulatory pathway.","Aromatase Inhibition — Tongkat Ali inhibits aromatase — the enzyme that converts testosterone to estrogen — reducing the conversion of testosterone to estradiol and thereby maintaining higher testosterone levels.","Cortisol Reduction — Tongkat Ali modulates the HPA axis and reduces cortisol — the primary stress hormone that directly suppresses testosterone production. Reducing the cortisol-to-testosterone ratio is a key mechanism behind its effects on male vitality and libido."].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">A 2012 pilot study by Tambi et al. found 200mg Tongkat Ali extract daily for one month significantly increased total testosterone from 5.66 &plusmn; 1.51 nmol/L to 8.40 &plusmn; 1.74 nmol/L in men with late-onset hypogonadism. A 2013 randomized crossover study found Tongkat Ali significantly improved stress hormone profiles including reduced cortisol and increased testosterone in moderately stressed adults. A 2021 RCT found Tongkat Ali supplementation significantly increased muscle strength and fat-free mass over 12 weeks in active older adults. Sperm quality research shows improvements in sperm motility and morphology. Sexual function research shows improvements in erectile function and libido scores in multiple trials.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 200–400mg of standardized extract daily (look for Physta or products standardized to eurycomanone content)","Timing: Morning is preferred — avoid evening due to potential energizing effects","Cycling: Some practitioners recommend 5 days on, 2 days off — though continuous use has been studied safely","Duration: Testosterone and libido benefits typically seen within 4–8 weeks","Quality critical: Standardized extracts dramatically outperform non-standardized root powder — verify eurycomanone content"].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Generally well tolerated in clinical trials. Most common side effects are mild — insomnia or restlessness if taken too late in the day, mild GI discomfort. May increase body temperature slightly in some users. Due to testosterone-raising effects — men with hormone-sensitive prostate conditions should consult a urologist before use. Not recommended for women of reproductive age or those with hormone-sensitive conditions. Mercury contamination has been found in some unregulated Tongkat Ali products from Southeast Asia — purchase only from reputable suppliers with third-party heavy metal testing.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/maca-root" className="text-[#0891b2] hover:underline">Maca Root</Link> | <Link href="/supplements/fenugreek" className="text-[#0891b2] hover:underline">Fenugreek</Link> | <Link href="/supplements/ashwagandha" className="text-[#0891b2] hover:underline">Ashwagandha</Link> | <Link href="/supplements/zinc" className="text-[#0891b2] hover:underline">Zinc</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Tambi MI, et al. Standardised water-soluble extract of Eurycoma longifolia, Tongkat Ali, as testosterone booster for managing men with late-onset hypogonadism. Andrologia. 2012.","Talbott SM, et al. Effect of Tongkat Ali on stress hormones and psychological mood state in moderately stressed subjects. J Int Soc Sports Nutr. 2013."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Testosterone", "SHBG", "Aromatase", "Physta"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=tongkat+ali&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
    </>
  );
}
