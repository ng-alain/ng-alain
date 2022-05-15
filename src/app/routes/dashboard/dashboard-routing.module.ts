import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardV1Component } from './v1/v1.component';

const routes: Routes = [
  { path: '', redirectTo: 'v1', pathMatch: 'full' },
  { path: 'v1', component: DashboardV1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
