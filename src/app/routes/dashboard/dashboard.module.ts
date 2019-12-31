import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { G2BarModule } from '@delon/chart/bar';
import { G2PieModule } from '@delon/chart/pie';
import { G2TimelineModule } from '@delon/chart/timeline';
import { G2CardModule } from '@delon/chart/card';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { TrendModule } from '@delon/chart/trend';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { G2RadarModule } from '@delon/chart/radar';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardV1Component } from './v1/v1.component';
import { DashboardAnalysisComponent } from './analysis/analysis.component';
import { DashboardMonitorComponent } from './monitor/monitor.component';
import { DashboardWorkplaceComponent } from './workplace/workplace.component';
import { DashboardWidgetsComponent } from './widgets/widgets.component';

const COMPONENTS = [
  DashboardV1Component,
  DashboardAnalysisComponent,
  DashboardMonitorComponent,
  DashboardWorkplaceComponent,
  DashboardWidgetsComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    G2CardModule,
    G2MiniAreaModule,
    G2RadarModule,
    G2PieModule,
    G2MiniProgressModule,
    G2WaterWaveModule,
    G2TagCloudModule,
    G2GaugeModule,
    TrendModule,
    NumberInfoModule,
    G2BarModule,
    G2TimelineModule,
    NzCarouselModule,
    DashboardRoutingModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DashboardModule {}
