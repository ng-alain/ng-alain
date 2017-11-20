import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './layout.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarNavComponent } from './sidebar/nav/nav.component';
import { HeaderSearchComponent } from './header/components/search.component';
import { HeaderThemeComponent } from './header/components/theme.component';
import { HeaderNotifyComponent } from './header/components/notify.component';
import { HeaderTaskComponent } from './header/components/task.component';
import { HeaderIconComponent } from './header/components/icon.component';
import { HeaderFullScreenComponent } from './header/components/fullscreen.component';
import { HeaderLangsComponent } from './header/components/langs.component';
import { HeaderStorageComponent } from './header/components/storage.component';
import { HeaderUserComponent } from './header/components/user.component';

const COMPONENTS = [
    LayoutComponent,
    LayoutFullScreenComponent,
    HeaderComponent,
    SidebarComponent
];

const HEADERCOMPONENTS = [
    HeaderSearchComponent,
    HeaderNotifyComponent,
    HeaderTaskComponent,
    HeaderIconComponent,
    HeaderFullScreenComponent,
    HeaderThemeComponent,
    HeaderLangsComponent,
    HeaderStorageComponent,
    HeaderUserComponent
];

// pro
import { ProUserLayoutComponent } from './pro/user/user.component';
const PRO = [
    ProUserLayoutComponent
];

@NgModule({
    imports: [SharedModule],
    providers: [],
    declarations: [
        SidebarNavComponent,
        ...COMPONENTS,
        ...HEADERCOMPONENTS,
        ...PRO
    ],
    exports: [
        ...COMPONENTS,
        ...PRO
    ]
})
export class LayoutModule { }
