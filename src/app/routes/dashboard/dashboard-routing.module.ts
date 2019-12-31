import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardV1Component } from './v1/v1.component';
import { DashboardAnalysisComponent } from './analysis/analysis.component';
import { DashboardMonitorComponent } from './monitor/monitor.component';
import { DashboardWorkplaceComponent } from './workplace/workplace.component';
import { DashboardWidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  { path: '', redirectTo: 'v1', pathMatch: 'full' },
  { path: 'v1', component: DashboardV1Component },
  { path: 'analysis', component: DashboardAnalysisComponent },
  { path: 'monitor', component: DashboardMonitorComponent },
  { path: 'workplace', component: DashboardWorkplaceComponent },
  { path: 'widgets', component: DashboardWidgetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
