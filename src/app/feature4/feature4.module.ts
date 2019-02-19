import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature4RoutingModule } from './feature4-routing.module';
import { FComponent } from './f/f.component';

@NgModule({
  declarations: [FComponent],
  imports: [
    CommonModule,
    Feature4RoutingModule
  ]
})
export class Feature4Module { }
