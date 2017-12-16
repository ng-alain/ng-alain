import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { TableStandardComponent } from './standard/standard.component';
import { RandomUserService } from './randomUser.service';
import { TableFullComponent } from './full/full.component';
import { DemoSimpleTableComponent } from './simple-table/simple-table.component';

const routes: Routes = [
    { path: 'standard', component: TableStandardComponent },
    { path: 'full', component: TableFullComponent },
    { path: 'simple-table', component: DemoSimpleTableComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: [ RandomUserService ],
    declarations: [
        TableStandardComponent,
        TableFullComponent,
        DemoSimpleTableComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class TablesModule { }
