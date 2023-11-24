import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoProjectsComponent } from './demo-projects.component';
import { GeodisComponent } from './geodis/geodis.component';

const routes: Routes = [
  { path: '', component: DemoProjectsComponent,
    /*children: [
      { path: 'geodis', component: GeodisComponent }
    ]*/
  },
  { path: 'geodis',
    loadChildren: () => import('./geodis/geodis.module')
        .then(m => m.GeodisModule),
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
];
