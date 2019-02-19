import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FComponent } from './f/f.component';

const routes: Routes = [
  {
    path: '',
    component: FComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
