import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';
import { CountriesData } from './countries';

import { Country } from '../data/country';

export class MyProjectDataService implements InMemoryDbService {

	createDb() {
    const products = new ProductData().createDb();
    const countries = new CountriesData().createDb();

    return { ...products, ...countries };
  }

}
