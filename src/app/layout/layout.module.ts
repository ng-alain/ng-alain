import { NgModule } from '@angular/core';
import { SettingDrawerModule } from '@delon/theme/setting-drawer';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { SharedModule } from '@shared';

import { LayoutDefaultComponent } from './default/default.component';
import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component';
import { HeaderI18nComponent } from './default/header/components/i18n.component';
import { HeaderIconComponent } from './default/header/components/icon.component';
import { HeaderNotifyComponent } from './default/header/components/notify.component';
import { HeaderSearchComponent } from './default/header/components/search.component';
import { HeaderStorageComponent } from './default/header/components/storage.component';
import { HeaderTaskComponent } from './default/header/components/task.component';
import { HeaderUserComponent } from './default/header/components/user.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';

const COMPONENTS = [LayoutDefaultComponent, LayoutFullScreenComponent, HeaderComponent, SidebarComponent];

const HEADERCOMPONENTS = [
  HeaderSearchComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderIconComponent,
  HeaderFullScreenComponent,
  HeaderI18nComponent,
  HeaderStorageComponent,
  HeaderUserComponent,
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [SharedModule, ThemeBtnModule, SettingDrawerModule],
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
