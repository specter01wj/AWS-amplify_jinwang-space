import { Component, OnInit } from '@angular/core';

import { User } from './models/user';

@Component({
  selector: 'ngx-geodis',
  templateUrl: './geodis.component.html',
  styleUrls: ['./geodis.component.scss'],
})
export class GeodisComponent implements OnInit {
	title = 'geodis-dashboard';
  user: User;

  constructor() {
  	this.user = {
      	id: '',
      	username: 'specter01',
      	password: '123456',
      	firstName: '',
    		lastName: '',
    		token: ''};
  }

  ngOnInit(): void {
  }

}
