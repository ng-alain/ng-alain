import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableStandardComponent } from './standard/standard.component';
import { TableFullComponent } from './full/full.component';
import { DemoSimpleTableComponent } from './simple-table/simple-table.component';
import { FSTableComponent } from './fs-table/fs-table.component';

const routes: Routes = [
    { path: 'standard', component: TableStandardComponent },
    { path: 'full', component: TableFullComponent },
    { path: 'simple-table', component: DemoSimpleTableComponent },
    { path: 'fs-table', component: FSTableComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TablesRoutingModule { }
