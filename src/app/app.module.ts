import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/(feature:feature/v3//feature1:feature1//feature2:feature2//feature3:feature3/v2//feature4:feature4)',
        pathMatch: 'full'
      },
      {
        path: 'feature',
        loadChildren: './feature/feature.module#FeatureModule',
        outlet: 'feature'
      },
      {
        path: ':feature1',
        loadChildren: './feature1/feature1.module#Feature1Module',
        outlet: 'feature1'
      },
      {
        path: ':feature2',
        loadChildren: './feature2/feature2.module#Feature2Module',
        outlet: 'feature2'
      },
      {
        path: ':feature3',
        loadChildren: './feature3/feature3.module#Feature3Module',
        outlet: 'feature3'
      },
      {
        path: ':feature4',
        loadChildren: './feature4/feature4.module#Feature4Module',
        outlet: 'feature4'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
