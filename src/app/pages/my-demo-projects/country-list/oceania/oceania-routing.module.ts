import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OceaniaListComponent } from './oceania-list/oceania-list.component';
import { OceaniaDetailComponent } from './oceania-detail/oceania-detail.component';

const routes: Routes = [
  { path: '', component: OceaniaListComponent },
  { path: ':id', component: OceaniaDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OceaniaRoutingModule { }
