import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableStandardComponent } from './standard/standard.component';
import { TableFullComponent } from './full/full.component';
import { DemoSimpleTableComponent } from './simple-table/simple-table.component';

const routes: Routes = [
    { path: 'standard', component: TableStandardComponent },
    { path: 'full', component: TableFullComponent },
    { path: 'simple-table', component: DemoSimpleTableComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TablesRoutingModule { }
