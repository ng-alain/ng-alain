import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepFormComponent } from './form/step-form/step-form.component';
import { AdvancedFormComponent } from './form/advanced-form/advanced-form.component';
import { ProTableListComponent } from './list/table-list/table-list.component';
import { ProBasicListComponent } from './list/basic-list/basic-list.component';
import { ProCardListComponent } from './list/card-list/card-list.component';
import { ProCoverCardListComponent } from './list/cover-card-list/cover-card-list.component';
import { ProFilterCardListComponent } from './list/filter-card-list/filter-card-list.component';
import { ProSearchComponent } from './list/search/search.component';
import { ProProfileBaseComponent } from './profile/basic/basic.component';
import { ProProfileAdvancedComponent } from './profile/advanced/advanced.component';
import { ProResultSuccessComponent } from './result/success/success.component';
import { ProResultFailComponent } from './result/fail/fail.component';

const routes: Routes = [
    {
        path: 'form',
        children: [
            { path: 'step-form', component: StepFormComponent },
            { path: 'advanced-form', component: AdvancedFormComponent }
        ]
    },
    {
        path: 'list',
        children: [
            { path: 'table-list', component: ProTableListComponent },
            { path: 'basic-list', component: ProBasicListComponent },
            { path: 'card-list', component: ProCardListComponent },
            { path: 'cover-card-list', component: ProCoverCardListComponent },
            { path: 'filter-card-list', component: ProFilterCardListComponent },
            { path: 'search', component: ProSearchComponent }
        ]
    },
    {
        path: 'profile',
        children: [
            { path: 'basic', component: ProProfileBaseComponent },
            { path: 'advanced', component: ProProfileAdvancedComponent }
        ]
    },
    {
        path: 'result',
        children: [
            { path: 'success', component: ProResultSuccessComponent },
            { path: 'fail', component: ProResultFailComponent }
        ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProRoutingModule { }
