import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { vendors } from "@/data/vendors";

const IMAGE_SIZE = { width: 1200, height: 630 };

// Colors tuned for the dark-navy base card.
const ACCENT = "#22d3ee"; // bright cyan accent (code + pill + wordmark) — pops on navy
const WHITE = "#ffffff";
const LIGHT = "#cbd5e1"; // muted slate for sub-line / label

function parseDiscountPercent(raw: string): number | null {
  const match = raw.match(/(\d+)\s*%/);
  return match ? parseInt(match[1], 10) : null;
}

// Per-vendor social-card copy overrides. Used where a page's marketing meta
// intentionally differs from the shared vendors[].discount datum, WITHOUT mutating
// vendor.discount (which also feeds listings and the Offer schema). Currently empty:
// amino-club's old "UP TO 30%" override was removed so its OG card matches the page's
// definite 20% (the standing rate) — no page should contradict itself on the discount.
interface OgCopyOverride {
  percent: number;
  prefix?: string; // small eyebrow above the big "N% OFF" (e.g. "UP TO")
}
const OG_COPY_OVERRIDES: Record<string, OgCopyOverride> = {};

// Resolve the discount figure + optional prefix shown on the card and in alt text.
function resolveOgCopy(slug: string, discount: string): { percent: number | null; prefix?: string } {
  const override = OG_COPY_OVERRIDES[slug];
  if (override) return { percent: override.percent, prefix: override.prefix };
  return { percent: parseDiscountPercent(discount) };
}

export function altFor(slug: string): string {
  const vendor = vendors[slug];
  if (!vendor) return "Prof. Peptide — verified research peptide discount codes";
  const { percent, prefix } = resolveOgCopy(slug, vendor.discount);
  if (percent === null) return `${vendor.name} discount code ${vendor.code}`;
  const save = prefix ? `Save ${prefix.toLowerCase()} ${percent}%` : `Save ${percent}%`;
  return `${vendor.name} discount code ${vendor.code} — ${save} on research peptides`;
}

// Auto-fit the coupon code so a long code (e.g. PROFPEPTIDE, 11 chars) stays in
// the clean left column and never collides with the vial on the right.
function codeFontSize(code: string): number {
  const n = code.length;
  if (n <= 6) return 64; // PROF10, profpep…
  if (n <= 8) return 56;
  if (n <= 10) return 48; // WELCOME10
  if (n <= 12) return 42; // PROFPEPTIDE (11)
  return 34;
}

// ---- asset loading (memoized across renders) -------------------------------

interface Assets {
  bg: string;
  fonts: { name: string; data: Buffer; weight: 400 | 500 | 700 | 800; style: "normal" }[];
}

// Assets live in public/ and are read from disk at render time. The base image
// (~94KB JPEG) rules out the edge runtime, and fetch(new URL(...)) has no origin
// to resolve against during Node prerender — so we read from process.cwd() and
// force Vercel's file tracer to bundle these via `outputFileTracingIncludes`
// in next.config.js. That mapping is what keeps tracing from dropping them in
// production (the cause of the 500); keep the two in sync.
let assetsPromise: Promise<Assets> | null = null;

function loadAssets(): Promise<Assets> {
  if (!assetsPromise) {
    assetsPromise = (async () => {
      const root = process.cwd();
      const [bg, regular, medium, bold, extraBold] = await Promise.all([
        readFile(join(root, "public/og/coupon-card-base.jpg")),
        readFile(join(root, "public/fonts/Inter-Regular.ttf")),
        readFile(join(root, "public/fonts/Inter-Medium.ttf")),
        readFile(join(root, "public/fonts/Inter-Bold.ttf")),
        readFile(join(root, "public/fonts/Inter-ExtraBold.ttf")),
      ]);
      return {
        bg: `data:image/jpeg;base64,${bg.toString("base64")}`,
        fonts: [
          { name: "Inter", data: regular, weight: 400, style: "normal" },
          { name: "Inter", data: medium, weight: 500, style: "normal" },
          { name: "Inter", data: bold, weight: 700, style: "normal" },
          { name: "Inter", data: extraBold, weight: 800, style: "normal" },
        ],
      };
    })();
  }
  return assetsPromise;
}

// ---- shared building blocks ------------------------------------------------

function LogoLockup() {
  // Vector logo — drawn directly so it stays crisp at any resample (the raster
  // pp-icon.png aliased on Satori downscale). Rounded-rect outline + "Pp".
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 66,
          height: 66,
          borderRadius: 18,
          border: `3px solid ${ACCENT}`,
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: ACCENT, letterSpacing: -1.5 }}>Pp</div>
      </div>
      <div
        style={{
          marginLeft: 16,
          fontSize: 44,
          fontWeight: 700,
          color: ACCENT,
          letterSpacing: -1,
        }}
      >
        Prof.Peptide
      </div>
    </div>
  );
}

function PriceTagIcon() {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function ViewDealsPill() {
  return (
    <div
      style={{
        display: "flex",
        alignSelf: "flex-start",
        alignItems: "center",
        border: `2px solid ${ACCENT}`,
        borderRadius: 999,
        padding: "16px 40px",
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 600, color: WHITE }}>View Deals</div>
      {/* SVG arrow — a Unicode → renders thin regardless of font-size, so draw it
          with a stroke weight matched to the bold label and sized to its cap-height. */}
      <svg
        width={30}
        height={23}
        viewBox="0 0 30 23"
        fill="none"
        stroke={ACCENT}
        strokeWidth={3.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginLeft: 14 }}
      >
        <line x1="2" y1="11.5" x2="26" y2="11.5" />
        <polyline points="17,3 26,11.5 17,20" />
      </svg>
    </div>
  );
}

function Shell({
  bg,
  children,
  justify = "space-between",
}: {
  bg: string;
  children: React.ReactNode;
  justify?: "space-between" | "center";
}) {
  return (
    <div style={{ width: 1200, height: 630, display: "flex", position: "relative", fontFamily: "Inter" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bg}
        width={1200}
        height={630}
        style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }}
        alt=""
      />
      {/* Clean left column — vial glass starts ~780px, so 720px stays clear. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 720,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: justify,
          padding: "58px 64px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function VendorCard({
  bg,
  name,
  percent,
  code,
  prefix,
}: {
  bg: string;
  name: string;
  percent: number;
  code: string;
  prefix?: string;
}) {
  return (
    <Shell bg={bg} justify="center">
      <LogoLockup />

      <div style={{ display: "flex", flexDirection: "column", marginTop: 28 }}>
        {prefix && (
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 700,
              color: LIGHT,
              letterSpacing: 2,
              marginBottom: 4,
            }}
          >
            {prefix}
          </div>
        )}
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            fontSize: 140,
            fontWeight: 800,
            color: WHITE,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          {`${percent}% OFF`}
        </div>
        <div style={{ display: "flex", marginTop: 10, fontSize: 48, fontWeight: 500, color: LIGHT, letterSpacing: -0.5 }}>
          {name}
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 26 }}>
          <PriceTagIcon />
          <div style={{ display: "flex", alignItems: "center", marginLeft: 16 }}>
            <div style={{ fontSize: 36, fontWeight: 500, color: LIGHT, marginRight: 14 }}>Use code</div>
            <div style={{ fontSize: codeFontSize(code), fontWeight: 700, color: ACCENT, letterSpacing: 1 }}>{code}</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: 40 }}>
        <ViewDealsPill />
      </div>
    </Shell>
  );
}

function FallbackCard({ bg }: { bg: string }) {
  return (
    <Shell bg={bg}>
      <LogoLockup />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: WHITE, lineHeight: 1.05, letterSpacing: -2 }}>
          Verified Discount Codes
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 32, fontWeight: 500, color: LIGHT }}>
          For trusted research peptide vendors
        </div>
      </div>
      <ViewDealsPill />
    </Shell>
  );
}

// Evergreen alt for the /coupons hub card. Deliberately NO numbers (no vendor
// count, no percentage): X caches OG images aggressively and can't be forced to
// refresh, so any figure baked in here would become permanently stale.
export const COUPON_HUB_ALT = "Prof. Peptide — verified research peptide discount codes";

// Generic card for the /coupons hub — the vendorless FallbackCard the generator
// already falls back to, exported explicitly so the hub route uses it by intent
// (not by passing a fake slug). Same Shell / LogoLockup / palette / fonts as the
// per-vendor cards, so it reads as a sibling. Purpose + brand only, no figures —
// linkable from a post about any vendor or any (time-limited) rate without ever
// contradicting the post.
export async function generateCouponHubOg(): Promise<ImageResponse> {
  const { bg, fonts } = await loadAssets();
  return new ImageResponse(<FallbackCard bg={bg} />, { ...IMAGE_SIZE, fonts });
}

// Homepage / site-root brand card. Brand + purpose only — deliberately NO numbers
// (no peptide count, no vendor count): X caches OG images per URL and can't be forced to
// refresh, so any figure baked here would become permanently stale. Same Shell / LogoLockup
// (the CURRENT vector mark) / palette / fonts as the vendor cards, so social cards read as a
// consistent family and the homepage stops falling back to the outdated 1024² raster.
function HomeCard({ bg }: { bg: string }) {
  return (
    <Shell bg={bg} justify="center">
      <LogoLockup />
      <div style={{ display: "flex", flexDirection: "column", marginTop: 30 }}>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: WHITE, lineHeight: 1.06, letterSpacing: -2 }}>
          Independent Peptide Research
        </div>
        <div style={{ display: "flex", marginTop: 18, fontSize: 31, fontWeight: 500, color: LIGHT, lineHeight: 1.3 }}>
          Compound profiles, price comparison &amp; verified vendor codes
        </div>
      </div>
    </Shell>
  );
}

// Evergreen alt for the homepage card — NO numbers, for the same cache-staleness reason.
export const HOME_OG_ALT = "Prof. Peptide — independent peptide research library";

export async function generateHomeOg(): Promise<ImageResponse> {
  const { bg, fonts } = await loadAssets();
  return new ImageResponse(<HomeCard bg={bg} />, { ...IMAGE_SIZE, fonts });
}

export async function generateCouponOg(slug: string): Promise<ImageResponse> {
  const { bg, fonts } = await loadAssets();
  const vendor = vendors[slug];
  const { percent: pct, prefix } = vendor
    ? resolveOgCopy(slug, vendor.discount)
    : { percent: null, prefix: undefined };

  const element =
    !vendor || pct === null ? (
      <FallbackCard bg={bg} />
    ) : (
      <VendorCard bg={bg} name={vendor.name} percent={pct} code={vendor.code} prefix={prefix} />
    );

  return new ImageResponse(element, { ...IMAGE_SIZE, fonts });
}
