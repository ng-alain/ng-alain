import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";

import { DashboardV1Component } from './v1/v1.component';

const routes: Routes = [
  { path: '', redirectTo: 'v1' },
  { path: 'v1', component: DashboardV1Component }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardV1Component
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
