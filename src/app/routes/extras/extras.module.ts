import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";

import { HelpCenterComponent } from './helpcenter/helpcenter.component';
import { ExtrasSettingsComponent } from "./settings/settings.component";

const routes: Routes = [
    { path: 'helpcenter', component: HelpCenterComponent },
    { path: 'settings', component: ExtrasSettingsComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        HelpCenterComponent,
        ExtrasSettingsComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ExtrasModule { }
