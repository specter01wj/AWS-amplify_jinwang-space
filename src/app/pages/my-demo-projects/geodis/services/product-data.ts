import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from '../models/product';
import { User } from '../models/user';

export class ProductData implements InMemoryDbService {

	createDb() {
    const products: Product[] = [
		  {
		    "id": 1,
		    "itemName": "Leaf Rake1",
		    "itemType": "GDN-0011",
		    "provider": "HP",
		    "qty": 19,
		    "availDate": "March 19, 2018",
		    "vendor": "G1",
		    "location": "CA"
		  },
		  {
		    "id": 3,
		    "itemName": "Leaf Rake2",
		    "itemType": "GDN-0012",
		    "provider": "HP2",
		    "qty": 23,
		    "availDate": "March 19, 2019",
		    "vendor": "G2",
		    "location": "VA"
		  },
		  {
		    "id": 8,
		    "itemName": "Leaf Rake3",
		    "itemType": "GDN-0013",
		    "provider": "MK",
		    "qty": 11,
		    "availDate": "March 19, 2017",
		    "vendor": "G3",
		    "location": "GA"
		  },
		  {
		    "id": 11,
		    "itemName": "Leaf Rake4",
		    "itemType": "GDN-0014",
		    "provider": "LOL",
		    "qty": 44,
		    "availDate": "March 19, 2016",
		    "vendor": "G4",
		    "location": "MA"
		  },
		  {
		    "id": 14,
		    "itemName": "Leaf Rake5",
		    "itemType": "GDN-0015",
		    "provider": "WO",
		    "qty": 35,
		    "availDate": "March 19, 2015",
		    "vendor": "G5",
		    "location": "UT"
		  },
		  {
		    "id": 19,
		    "itemName": "Leaf Rake6",
		    "itemType": "GDN-0016",
		    "provider": "KO",
		    "qty": 43,
		    "availDate": "March 19, 2014",
		    "vendor": "G6",
		    "location": "MD"
		  }
		];
		const userData: User[] = [
		  {
		    "id":"101",
	      "username":"specter01",
	      "password":"123456",
	      "firstName":"James",
	      "lastName":"Wang",
	      "token":"CMYK002"
		  }
		];
    return { products, userData };
  }

}
