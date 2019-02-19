import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { FComponent } from './f/f.component';

@NgModule({
  declarations: [FComponent],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
