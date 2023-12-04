import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OceaniaRoutingModule } from './oceania-routing.module';
import { PipesModuleModule } from '../common/pipes-module.module';
import { CustomDirectivesModuleModule } from '../directive/custom-directives-module.module';

import { OceaniaListComponent } from './oceania-list/oceania-list.component';
import { OceaniaDetailComponent } from './oceania-detail/oceania-detail.component';


@NgModule({
  declarations: [
    OceaniaListComponent,
    OceaniaDetailComponent
  ],
  imports: [
    CommonModule,
    OceaniaRoutingModule,
    PipesModuleModule,
    CustomDirectivesModuleModule
  ]
})
export class OceaniaModule { }
