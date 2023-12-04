import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryListComponent } from './country-list.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module')
        .then(m => m.WelcomeModule)
  },
  { path: 'europe',
    loadChildren: () => import('./europe/europe.module')
        .then(m => m.EuropeModule)
  },
  { path: 'asia',
    loadChildren: () => import('./asia/asia.module')
        .then(m => m.AsiaModule)
  },
  { path: 'africa',
    loadChildren: () => import('./africa/africa.module')
        .then(m => m.AfricaModule)
  },
  { path: 'oceania',
    loadChildren: () => import('./oceania/oceania.module')
        .then(m => m.OceaniaModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryListRoutingModule { }
