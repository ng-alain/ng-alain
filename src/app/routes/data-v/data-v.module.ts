import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { RelationComponent } from './relation/relation.component';

const routes: Routes = [
    { path: 'relation', component: RelationComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        RelationComponent
    ],
    exports: [
        RouterModule
    ]
})
export class DataVModule { }
