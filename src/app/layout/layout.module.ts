import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const COMPONENTS = [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
];

@NgModule({
    imports: [SharedModule],
    providers: [],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class LayoutModule { }
