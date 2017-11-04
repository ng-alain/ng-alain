import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { StepFormComponent } from './form/step-form/step-form.component';
import { Step1Component } from './form/step-form/step1.component';
import { Step2Component } from './form/step-form/step2.component';
import { Step3Component } from './form/step-form/step3.component';
import { AdvancedFormComponent } from './form/advanced-form/advanced-form.component';

const routes: Routes = [
    {
        path: 'form',
        children: [
            { path: 'step-form', component: StepFormComponent },
            { path: 'advanced-form', component: AdvancedFormComponent }
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
        ...COMPONENTS_NOROUNT
    ],
    entryComponents: COMPONENTS_NOROUNT,
    exports: [
        RouterModule
    ]
})
export class ProModule { }
