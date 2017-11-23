import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2ChartModule } from 'g2-angular';

import { SharedModule } from '@shared/shared.module';

import { G2Component } from './g2/g2.component';

const routes: Routes = [
    { path: 'g2', component: G2Component }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        G2ChartModule.forRoot()
    ],
    declarations: [
        G2Component
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class ChartsModule { }
