import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { TablesRoutingModule } from './tables-routing.module';

import { RandomUserService } from './randomUser.service';
import { TableFullComponent } from './full/full.component';
import { DemoSimpleTableComponent } from './simple-table/simple-table.component';
import { FSTableComponent } from './fs-table/fs-table.component';

import { TableStandardComponent } from './standard/standard.component';

@NgModule({
    imports: [ SharedModule, TablesRoutingModule ],
    providers: [ RandomUserService ],
    declarations: [
        TableStandardComponent,
        TableFullComponent,
        DemoSimpleTableComponent,
        FSTableComponent
    ]
})
export class TablesModule { }
