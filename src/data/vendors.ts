export interface Vendor {
  name: string;
  code: string;
  discount: string;
  region: "US" | "UK" | "EU" | "IS";
  url: string;
  detailPage: string;
  editorsPick?: boolean;
  bestDeal?: boolean;
  comingSoon?: boolean;
}

export const regionFlag: Record<Vendor["region"], string> = {
  US: "\uD83C\uDDFA\uD83C\uDDF8",
  UK: "\uD83C\uDDEC\uD83C\uDDE7",
  EU: "\uD83C\uDDEA\uD83C\uDDFA",
  IS: "\uD83C\uDDEE\uD83C\uDDF8",
};

export const vendors: Record<string, Vendor> = {
  "almighty-peptides": {
    name: "Almighty Peptides",
    code: "profpep",
    discount: "10% off",
    region: "US",
    url: "https://www.almightypeptides.com/?sld=profpeptide",
    detailPage: "/coupons/almighty-peptides",
  },
  "apollo-peptide-sciences": {
    name: "Apollo Peptide Sciences",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "US",
    url: "https://apollopeptidesciences.com/?rfsn=8846124.8bdc49",
    detailPage: "/coupons/apollo-peptide-sciences",
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
    code: "MARK15",
    discount: "15% off",
    region: "US",
    url: "https://fusionpeptide.com/?ref=PROFPEPTIDE",
    detailPage: "/coupons/fusion-peptide",
  },
  "ignite-peptides": {
    name: "Ignite Peptides",
    code: "welcome10",
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
  "nordic-peptides": {
    name: "Nordic Peptides",
    code: "",
    discount: "Code coming soon",
    region: "IS",
    url: "https://nordicpeptides.is?tracking=YPIYKOnVzjUxFUBzUjMguT01DrDOfTcsJhXEfi15i6MMovBJRFEwZguHeWt7mRkR",
    detailPage: "/coupons/nordic-peptides",
    comingSoon: true,
  },
  "oasis-labs": {
    name: "Oasis Labs",
    code: "PROFPEPTIDE",
    discount: "10% off",
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
  purerawz: {
    name: "PureRawz",
    code: "PROF10",
    discount: "10% off",
    region: "US",
    url: "https://purerawz.co/?ref=1901",
    detailPage: "/coupons/purerawz",
  },
  "royal-peptides": {
    name: "Royal Peptides",
    code: "PROFPEPTIDE",
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
  "vital-core-research": {
    name: "Vital Core Research",
    code: "PROFPEPTIDE",
    discount: "20% off",
    region: "US",
    url: "https://vitalcoreresearch.com/?ref=nbwnvhnu",
    detailPage: "/coupons/vital-core-research",
  },
};
