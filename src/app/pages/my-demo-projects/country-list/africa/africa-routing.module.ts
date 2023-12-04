import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AfricaListComponent } from './africa-list/africa-list.component';
import { AfricaDetailComponent } from './africa-detail/africa-detail.component';

const routes: Routes = [
  { path: '', component: AfricaListComponent },
  { path: ':id', component: AfricaDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AfricaRoutingModule { }
