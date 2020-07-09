import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GeodisRoutingModule } from './geodis-routing.module';

import { GeodisComponent } from './geodis.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './home/items/items.component';
import { ItemDetailComponent } from './home/item-detail/item-detail.component';
import { ItemCreateComponent } from './home/item-create/item-create.component';


@NgModule({
  declarations: [
  	GeodisComponent,
    HomeComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    GeodisRoutingModule
  ]
})
export class GeodisModule { }
