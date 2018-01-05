import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AlainThemeModule } from '@delon/theme';

import { I18NService } from './i18n/i18n.service';

@NgModule({
    imports: [
       AlainThemeModule.forRoot()
    ],
    providers: [
        I18NService
    ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
