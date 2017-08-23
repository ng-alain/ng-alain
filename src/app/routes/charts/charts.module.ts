import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from "../../shared/shared.module";

import { NgxChartsComponent } from "./ngxcharts/ngxcharts.component";
import { ChartJsComponent } from "./chartjs/chartjs.component";

const routes: Routes = [
    { path: 'ngxcharts', component: NgxChartsComponent },
    { path: 'chartjs', component: ChartJsComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxChartsModule
    ],
    declarations: [
        NgxChartsComponent,
        ChartJsComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class ChartsModule { }
