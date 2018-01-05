import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2Component } from './g2/g2.component';

const routes: Routes = [
    { path: 'g2', component: G2Component }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ChartsRoutingModule { }
