import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { ProRoutingModule } from './pro-routing.module';

import { BasicFormComponent } from './form/basic-form/basic-form.component';
import { StepFormComponent } from './form/step-form/step-form.component';
import { Step1Component } from './form/step-form/step1.component';
import { Step2Component } from './form/step-form/step2.component';
import { Step3Component } from './form/step-form/step3.component';
import { AdvancedFormComponent } from './form/advanced-form/advanced-form.component';
import { ProTableListComponent } from './list/table-list/table-list.component';
import { ProBasicListComponent } from './list/basic-list/basic-list.component';
import { ProCardListComponent } from './list/card-list/card-list.component';
import { ProListLayoutComponent } from './list/list/list.component';
import { ProListArticlesComponent } from './list/articles/articles.component';
import { ProListProjectsComponent } from './list/projects/projects.component';
import { ProListApplicationsComponent } from './list/applications/applications.component';
import { ProProfileBaseComponent } from './profile/basic/basic.component';
import { ProProfileAdvancedComponent } from './profile/advanced/advanced.component';
import { ProResultSuccessComponent } from './result/success/success.component';
import { ProResultFailComponent } from './result/fail/fail.component';

const COMPONENTS_NOROUNT = [
    Step1Component, Step2Component, Step3Component
];

@NgModule({
    imports: [
        SharedModule, ProRoutingModule
    ],
    declarations: [
        BasicFormComponent,
        StepFormComponent,
        AdvancedFormComponent,
        ProTableListComponent,
        ProBasicListComponent,
        ProCardListComponent,
        ProListLayoutComponent,
        ProListArticlesComponent,
        ProListProjectsComponent,
        ProListApplicationsComponent,
        ProProfileBaseComponent,
        ProProfileAdvancedComponent,
        ProResultSuccessComponent,
        ProResultFailComponent,
        ...COMPONENTS_NOROUNT
    ],
    entryComponents: COMPONENTS_NOROUNT
})
export class ProModule { }
