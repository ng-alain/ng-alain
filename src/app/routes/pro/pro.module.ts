import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { ProRoutingModule } from './pro-routing.module';

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

const COMPONENTS_NOROUNT = [ Step1Component, Step2Component, Step3Component ];

@NgModule({
    imports: [
        SharedModule, ProRoutingModule
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
        ...COMPONENTS_NOROUNT
    ],
    entryComponents: COMPONENTS_NOROUNT
})
export class ProModule { }
