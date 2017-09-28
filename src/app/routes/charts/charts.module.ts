import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { G2ChartModule } from 'g2-angular';

import { SharedModule } from '@shared/shared.module';

import { NgxChartsComponent } from './ngxcharts/ngxcharts.component';
import { ChartJsComponent } from './chartjs/chartjs.component';
import { G2Component } from './g2/g2.component';

const routes: Routes = [
    { path: 'ngxcharts', component: NgxChartsComponent },
    { path: 'chartjs', component: ChartJsComponent },
    { path: 'g2', component: G2Component }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxChartsModule,
        G2ChartModule.forRoot({
            js: 'https://a.alipayobjects.com/g/datavis/g2/2.3.9/index.js'
        })
    ],
    declarations: [
        NgxChartsComponent,
        ChartJsComponent,
        G2Component
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class ChartsModule { }
