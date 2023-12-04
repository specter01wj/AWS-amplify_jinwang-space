import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoProjectsComponent } from './demo-projects.component';
import { GeodisComponent } from './geodis/geodis.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: '', component: DemoProjectsComponent },
  { path: 'geodis',
    loadChildren: () => import('./geodis/geodis.module')
        .then(m => m.GeodisModule),
  },
  { path: 'countryList',
    loadChildren: () => import('./country-list/country-list.module')
        .then(m => m.CountryListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule { }

export const routedComponents = [
  DemoProjectsComponent,
  GeodisComponent,
  CountryListComponent,
];
