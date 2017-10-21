import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './layout.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarNavComponent } from './sidebar/nav/nav.component';

const COMPONENTS = [
    LayoutComponent,
    LayoutFullScreenComponent,
    HeaderComponent,
    SidebarComponent
];

@NgModule({
    imports: [SharedModule],
    providers: [],
    declarations: [
        SidebarNavComponent,
        ...COMPONENTS
    ],
    exports: COMPONENTS
})
export class LayoutModule { }
