import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { SettingsService } from './services/settings.service';
import { MenuService } from './services/menu.service';
import { ThemesService } from './services/themes.service';
import { TranslatorService } from './translator/translator.service';
import { ScrollService } from './services/scroll.service';
import { ColorsService } from './services/colors.service';
import { ACLService } from './acl/acl.service';
import { TokenService } from './net/token/token.service';
import { _HttpClient } from './services/http.client';
import { TitleService } from '@core/services/title.service';

@NgModule({
    imports: [
    ],
    providers: [
        SettingsService,
        MenuService,
        ScrollService,
        ColorsService,
        TitleService,
        _HttpClient,
        ThemesService,
        // LEVEL: adjust
        TokenService,
        // LEVEL: optionals
        TranslatorService,
        ACLService
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
