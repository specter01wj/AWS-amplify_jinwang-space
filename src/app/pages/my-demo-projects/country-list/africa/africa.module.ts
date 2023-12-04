import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfricaRoutingModule } from './africa-routing.module';
import { PipesModuleModule } from '../common/pipes-module.module';
import { CustomDirectivesModuleModule } from '../directive/custom-directives-module.module';

import { AfricaListComponent } from './africa-list/africa-list.component';
import { AfricaDetailComponent } from './africa-detail/africa-detail.component';


@NgModule({
  declarations: [
    AfricaListComponent,
    AfricaDetailComponent
  ],
  imports: [
    CommonModule,
    AfricaRoutingModule,
    PipesModuleModule,
    CustomDirectivesModuleModule
  ]
})
export class AfricaModule { }
