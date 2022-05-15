import { NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

import { I18NService } from './i18n/i18n.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { GlobalState } from './store/global.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([GlobalState], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.LocalStorage
    })
  ],
  providers: [I18NService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
