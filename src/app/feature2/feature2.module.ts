import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { FComponent } from './f/f.component';

@NgModule({
  declarations: [FComponent],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
