import { Routes } from '@angular/router';

import { DashboardAnalysisComponent } from './analysis/analysis.component';
import { DashboardMonitorComponent } from './monitor/monitor.component';
import { DashboardV1Component } from './v1/v1.component';
import { DashboardWorkplaceComponent } from './workplace/workplace.component';

export const routes: Routes = [
  { path: '', redirectTo: 'v1', pathMatch: 'full' },
  { path: 'v1', component: DashboardV1Component },
  { path: 'analysis', component: DashboardAnalysisComponent },
  { path: 'monitor', component: DashboardMonitorComponent },
  { path: 'workplace', component: DashboardWorkplaceComponent }
];
