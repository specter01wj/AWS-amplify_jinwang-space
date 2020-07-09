import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './home/items/items.component';
import { ItemDetailComponent } from './home/item-detail/item-detail.component';
import { ItemCreateComponent } from './home/item-create/item-create.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
  { path: 'geodis-dashboard', component: HomeComponent },
  { path: 'geodis-items', component: ItemsComponent },
  { path: 'geodis-items/:id', component: ItemDetailComponent },
  { path: 'geodisCreate', component: ItemCreateComponent },
  { path: '', redirectTo: 'geodis-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeodisRoutingModule { }
