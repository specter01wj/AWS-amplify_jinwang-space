import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CountryListRoutingModule } from './country-list-routing.module';

import { CountryListComponent } from './country-list.component';

@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountryListRoutingModule,
  ]
})
export class CountryListModule { }
