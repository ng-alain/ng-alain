import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { StepFormComponent } from './form/step-form/step-form.component';
import { Step1Component } from './form/step-form/step1.component';
import { Step2Component } from './form/step-form/step2.component';
import { Step3Component } from './form/step-form/step3.component';
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
import { ProException403Component } from './exception/403.component';
import { ProException404Component } from './exception/404.component';
import { ProException500Component } from './exception/500.component';

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
    },
    {
        path: 'exception',
        children: [
            { path: '403', component: ProException403Component },
            { path: '404', component: ProException404Component },
            { path: '500', component: ProException500Component }
        ]
    }
];

const COMPONENTS_NOROUNT = [ Step1Component, Step2Component, Step3Component ];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        StepFormComponent,
        AdvancedFormComponent,
        ProTableListComponent,
        ProBasicListComponent,
        ProCardListComponent,
        ProCoverCardListComponent,
        ProFilterCardListComponent,
        ProSearchComponent,
        ProProfileBaseComponent,
        ProProfileAdvancedComponent,
        ProResultSuccessComponent,
        ProResultFailComponent,
        ProException403Component,
        ProException404Component,
        ProException500Component,
        ...COMPONENTS_NOROUNT
    ],
    entryComponents: COMPONENTS_NOROUNT,
    exports: [
        RouterModule
    ]
})
export class ProModule { }
