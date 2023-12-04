import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  title = 'CountryList';

  constructor() { }

  ngOnInit(): void {
  }

}
