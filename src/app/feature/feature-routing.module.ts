import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FComponent } from './f/f.component';
import { F1vComponent } from './f1v/f1v.component';
import { F2vComponent } from './f2v/f2v.component';
import { F3vComponent } from './f3v/f3v.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'v3',
  },
  {
    path: 'v0',
    component: FComponent,
  },
  {
    path: 'v1',
    component: F1vComponent,
  },
  {
    path: 'v2',
    component: F2vComponent,
  },
  {
    path: 'v3',
    component: F3vComponent,
  },
  {
    path: '**',
    redirectTo: 'v3',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
