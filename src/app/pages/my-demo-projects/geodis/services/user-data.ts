import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from '../models/user';

export class UserData implements InMemoryDbService {

	createDb() {
    const userData: User[] = [
		  {
		    'id': '101',
	      'username': 'specter01',
	      'password': '123456',
	      'firstName': 'James',
	      'lastName': 'Wang',
	      'token': 'CMYK002',
		  },
		];
    return { userData };
  }

}
