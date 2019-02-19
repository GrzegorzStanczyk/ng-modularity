import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature3-routing.module';
import { FComponent } from './f/f.component';
import { F1vComponent } from './f1v/f1v.component';
import { F2vComponent } from './f2v/f2v.component';

@NgModule({
  declarations: [FComponent, F1vComponent, F2vComponent],
  imports: [
    CommonModule,
    Feature3RoutingModule
  ]
})
export class Feature3Module { }
