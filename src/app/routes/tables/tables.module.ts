import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '@shared/shared.module';

import { TableStandardComponent } from './standard/standard.component';
import { RandomUserService } from './randomUser.service';
import { TableFullComponent } from './full/full.component';

const routes: Routes = [
    { path: 'standard', component: TableStandardComponent },
    { path: 'full', component: TableFullComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxChartsModule
    ],
    providers: [ RandomUserService ],
    declarations: [
        TableStandardComponent,
        TableFullComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class TablesModule { }
