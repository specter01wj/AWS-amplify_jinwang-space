import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Country } from '../interface/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
	private asiaRegionUrl = 'api/asia';
	private europeRegionUrl = 'api/europe';
	private africaRegionUrl = 'api/africa';
	private oceaniaRegionUrl = 'api/oceania';
	private countryUrl = '';

  constructor(private http: HttpClient) { }

  getCountries(type: string): Observable<Country[]> {
    if (type === 'Asia') {
      this.countryUrl = this.asiaRegionUrl;
    } else if (type === 'Europe') {
      this.countryUrl = this.europeRegionUrl;
    } else if (type === 'Africa') {
      this.countryUrl = this.africaRegionUrl;
    } else if (type === 'Oceania') {
      this.countryUrl = this.oceaniaRegionUrl;
    }
    return this.http.get<Country[]>(this.countryUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCountry(id: number): Observable<Country> {
  	const url = `${this.countryUrl}/${id}`;
  	return this.http.get<Country>(url)
			.pipe(
				catchError(this.handleError)
			);
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
