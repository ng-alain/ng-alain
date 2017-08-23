import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";

import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationComponent } from "./notification/notification.component";
import { ModelCustomComponent } from "./notification/custom.component";
import { SpinComponent } from "./spin/spin.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { GridComponent } from "./grid/grid.component";
import { GridMasonryComponent } from "./gridmasonry/gridmasonry.component";
import { TypographyComponent } from "./typography/typography.component";
import { IconsFontComponent } from "./iconsfont/iconsfont.component";
import { ColorsComponent } from "./colors/colors.component";

const routes: Routes = [
    { path: 'buttons', component: ButtonsComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'spin', component: SpinComponent },
    { path: 'dropdown', component: DropdownComponent },
    { path: 'grid', component: GridComponent },
    { path: 'gridmasonry', component: GridMasonryComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'iconsfont', component: IconsFontComponent },
    { path: 'colors', component: ColorsComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ButtonsComponent,
        NotificationComponent,
        ModelCustomComponent,
        SpinComponent,
        DropdownComponent,
        GridComponent,
        GridMasonryComponent,
        TypographyComponent,
        IconsFontComponent,
        ColorsComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [
        ModelCustomComponent
    ]
})
export class ElementsModule { }
