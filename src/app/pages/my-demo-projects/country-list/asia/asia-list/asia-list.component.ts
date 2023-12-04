import { Component, OnInit } from '@angular/core';

import { Country } from '../../interface/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-asia-list',
  templateUrl: './asia-list.component.html',
  styleUrls: ['./asia-list.component.less']
})
export class AsiaListComponent implements OnInit {
	pageTitle = 'Asia Country List';
	region: string = 'Asia';
	errorMessage = '';
	filteredCountry: Country[] = [];
	imageWidth = 50;
  imageMargin = 2;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
  	this.getCountryList(this.region);
  }

  getCountryList(type: string) {
  	this.filteredCountry = [];
  	this.countriesService.getCountries(type).subscribe({
  		next: countries => {
  			countries.map((country: Country) => {
  				this.filteredCountry.push(
        		{
              name: country.name || 'Unknown Name',
              capital: country.capital || 'Unknown Capital',
              region: country.region || 'Unknown Region',
              subregion: country.subregion || 'Unknown Subregion',
              population: country.population || 0,
              currencies: country.currencies || [{ code: '', name: '', symbol: '' }],
              flag: country.flag || 'default-flag-url',
              id: country.id || 0,
              topLevelDomain: country.topLevelDomain || [''],
              alpha2Code: country.alpha2Code || '',
              alpha3Code: country.alpha3Code || '',
              callingCodes: country.callingCodes || [''],
              altSpellings: country.altSpellings || [''],
              latlng: country.latlng || [0, 0],
              demonym: country.demonym || 'Unknown',
              gini: country.gini || 0,
              timezones: country.timezones || ['UTC'],
              borders: country.borders || [''],
              nativeName: country.nativeName || 'Unknown Native Name',
              numericCode: country.numericCode || '',
              languages: country.languages || [{ iso639_1: '', iso639_2: '', name: '', nativeName: '' }],
              translations: country.translations || {
                de: '', es: '', fr: '', ja: '', it: '', br: '', pt: '', nl: '', hr: '', fa: ''
              },
              regionalBlocs: country.regionalBlocs || [{ acronym: '', name: '', otherAcronyms: [''], otherNames: [''] }],
              cioc: country.cioc || ''
        		});
  			});
  		},
  		error: err => this.errorMessage = err
  	});
  }

}
