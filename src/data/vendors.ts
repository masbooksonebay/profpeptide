export interface Vendor {
  name: string;
  code: string;
  discount: string;
  region: "US" | "CA" | "UK" | "EU" | "IS";
  url: string;
  detailPage: string;
  editorsPick?: boolean;
  bestDeal?: boolean;
  comingSoon?: boolean;
  /** Retired vendor: page redirects to /coupons, not shown on the hub or counted. */
  retired?: boolean;
}

export const regionFlag: Record<Vendor["region"], string> = {
  US: "\uD83C\uDDFA\uD83C\uDDF8",
  CA: "\uD83C\uDDE8\uD83C\uDDE6",
  UK: "\uD83C\uDDEC\uD83C\uDDE7",
  EU: "\uD83C\uDDEA\uD83C\uDDFA",
  IS: "\uD83C\uDDEE\uD83C\uDDF8",
};

export const vendors: Record<string, Vendor> = {
  "almighty-peptides": {
    name: "Almighty Peptides",
    code: "PROFPEPTIDE",
    discount: "20% off",
    region: "US",
    url: "https://www.almightypeptides.com/?sld=profpeptide",
    detailPage: "/coupons/almighty-peptides",
  },
  "amino-club": {
    name: "Amino Club",
    code: "PROFPEPTIDE",
    discount: "20% off",
    region: "US",
    url: "https://aminoclub.com?utm_source=affiliate_marketing&code=PROFPEPTIDE",
    detailPage: "/coupons/amino-club",
    editorsPick: true,
  },
  "amino-x": {
    name: "Amino X",
    code: "PROF15",
    discount: "15% off",
    region: "US",
    url: "https://aminox.net/?coupon=PROF15",
    detailPage: "/coupons/amino-x",
  },
  "ascension-peptides": {
    name: "Ascension Peptides",
    code: "PROFPEPTIDE",
    discount: "50% off",
    region: "US",
    url: "https://ascensionpeptides.com/ref/profpeptide/",
    detailPage: "/coupons/ascension-peptides",
    bestDeal: true,
  },
  "behemoth-labz": {
    name: "Behemoth Labz",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://behemothlabz.com/aff/208/",
    detailPage: "/coupons/behemoth-labz",
  },
  biocollex: {
    name: "BioCollex",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://biocollexresearch.com/?ref=profpeptidehq",
    detailPage: "/coupons/biocollex",
  },
  "ez-peptides": {
    name: "EZ Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://ezpeptides.com/?ref=nldbbgvs",
    detailPage: "/coupons/ez-peptides",
  },
  "fusion-peptide": {
    name: "Fusion Peptide",
    code: "PROFPEPTIDE",
    discount: "15% off",
    region: "US",
    url: "https://fusionpeptide.com/?ref=pacjbqyu",
    detailPage: "/coupons/fusion-peptide",
    retired: true,
  },
  "glacier-aminos": {
    name: "Glacier Aminos",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://glacieraminos.shop/?ref=cknlhxrm",
    detailPage: "/coupons/glacier-aminos",
    editorsPick: true,
  },
  "ignite-peptides": {
    name: "Ignite Peptides",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://ignitepeptides.com/ref/profpeptide/",
    detailPage: "/coupons/ignite-peptides",
  },
  "integrative-peptides": {
    name: "Integrative Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://integrativepeptides.com/affiliate/profpeptide/",
    detailPage: "/coupons/integrative-peptides",
  },
  "limitless-biotech": {
    name: "Limitless Biotech",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://www.limitlesslifenootropics.com/?_ef_transaction_id=&oid=1&affid=10477",
    detailPage: "/coupons/limitless-biotech",
  },
  "midwest-peptide": {
    name: "Midwest Peptide",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://midwestpeptide.com?ref=PROF10",
    detailPage: "/coupons/midwest-peptide",
  },
  "oasis-labs": {
    name: "Oasis Labs",
    code: "PROF15",
    discount: "15% off",
    region: "US",
    url: "https://myoasislabs.com/?sld=profpeptide",
    detailPage: "/coupons/oasis-labs",
  },
  "particle-peptides": {
    name: "Particle Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "UK",
    url: "https://particlepeptides.com/en/?refs=18075",
    detailPage: "/coupons/particle-peptides",
    retired: true,
  },
  "peptide-partners": {
    name: "Peptide Partners",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://peptide.partners/ref/48/",
    detailPage: "/coupons/peptide-partners",
    editorsPick: true,
  },
  "peptides-gg": {
    name: "Peptides.gg",
    code: "PROF15",
    discount: "15% off",
    region: "US",
    url: "https://peptides.gg/?coupon=prof15",
    detailPage: "/coupons/peptides-gg",
    editorsPick: true,
  },
  purerawz: {
    name: "PureRawz",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://purerawz.co/?ref=1901",
    detailPage: "/coupons/purerawz",
  },
  "purity-peptides": {
    name: "Purity Peptides",
    code: "PROF15",
    discount: "15% off",
    region: "CA",
    url: "https://puritypeptides.is/?sld=PROF15",
    detailPage: "/coupons/purity-peptides",
  },
  "royal-peptides": {
    name: "Royal Peptides",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://royal-peptides.com/?ref=urunwnog",
    detailPage: "/coupons/royal-peptides",
  },
  "spartan-peptides": {
    name: "Spartan Peptides",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://spartanpeptides.com/?a_aid=profpeptide&a_bid=ce6347d0",
    detailPage: "/coupons/spartan-peptides",
  },
  "synthesis-peptides": {
    name: "Synthesis Peptides",
    code: "PROFPEPTIDE10",
    discount: "10% off",
    region: "US",
    url: "https://synthesispeptides.io/?synthaff=105",
    detailPage: "/coupons/synthesis-peptides",
  },
  "vital-core-research": {
    name: "Vital Core Research",
    code: "PROF20",
    discount: "20% off",
    region: "US",
    url: "https://vitalcoreresearch.com/?ref=nbwnvhnu",
    detailPage: "/coupons/vital-core-research",
  },
};

/**
 * Number of active (non-retired) vendors in the registry — the single source of
 * truth for "N trusted/verified vendors" copy across the site (coupons hub meta,
 * per-peptide "See all N verified vendors" links). Derive from this; never hardcode.
 */
export const activeVendorCount = Object.values(vendors).filter((v) => !v.retired).length;
