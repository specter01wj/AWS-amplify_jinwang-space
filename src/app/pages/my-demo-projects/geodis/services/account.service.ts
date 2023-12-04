import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { User } from '../models/user';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
	public user: Observable<User>;
	// private userUrl = 'assets/json/userData.json';
  private userUrl = 'api/userData';
  // private itemsUrl = 'assets/json/itemsData.json';
  private itemsUrl = 'api/products';
	private userSubject: User;

  constructor(
  	private router: Router,
    private http: HttpClient,
 	) { }

  login(username, password) {
    // return this.http.put<User>(this.userUrl, { username, password })
    return this.http.get<User>(this.userUrl)
        .pipe(
        	map(user => {
            this.userSubject = user[0];
            return user;
        	}),
        );
  }

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.itemsUrl)
      .pipe(
        // tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError),
      );
  }

  getItem(id: number): Observable<Product> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        // tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError),
      );
  }

  public get userValue(): User {
      return this.userSubject;
  }

  private initializeProduct(): Product {
    // Return an initialized object
    return {
      id: 0,
      itemName: null,
      itemType: null,
      provider: null,
      qty: 0,
      availDate: null,
      vendor: null,
      location: null,
    };
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
