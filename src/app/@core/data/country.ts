export interface Country {
	name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  currencies: {
  	code: string;
  	name: string;
  	symbol?: string;
  }[];
  flag: string;
  id: number;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  altSpellings: string[];
  latlng: number[];
  demonym: string;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
  translations: {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
  };
  regionalBlocs: Array<{
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }>;
  cioc: string;
}
