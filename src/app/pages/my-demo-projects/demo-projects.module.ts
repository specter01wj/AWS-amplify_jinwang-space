import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorsRoutingModule } from './demo-projects-routing.module';

import { DemoProjectsComponent } from './demo-projects.component';

@NgModule({
  declarations: [
  	DemoProjectsComponent,
  ],
  imports: [
    CommonModule,
    EditorsRoutingModule,
  ],
})
export class DemoProjectsModule { }
