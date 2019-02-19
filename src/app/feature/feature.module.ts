import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FComponent } from './f/f.component';
import { F1vComponent } from './f1v/f1v.component';
import { F2vComponent } from './f2v/f2v.component';
import { F3vComponent } from './f3v/f3v.component';

@NgModule({
  declarations: [FComponent, F1vComponent, F2vComponent, F3vComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
