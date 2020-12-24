import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAnalysisComponent } from './analysis/analysis.component';
import { DashboardMonitorComponent } from './monitor/monitor.component';
import { DashboardV1Component } from './v1/v1.component';
import { DashboardWorkplaceComponent } from './workplace/workplace.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/v1', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
  { path: 'dashboard/v1', component: DashboardV1Component },
  { path: 'dashboard/analysis', component: DashboardAnalysisComponent },
  { path: 'dashboard/monitor', component: DashboardMonitorComponent },
  { path: 'dashboard/workplace', component: DashboardWorkplaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
