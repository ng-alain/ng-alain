import { Component, HostBinding } from '@angular/core';

import { SettingsService } from './core/services/settings.service';
import { ThemesService } from './core/services/themes.service';
import { TranslatorService } from './core/translator/translator.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

  @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.fixed; }
  @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.layout.boxed; }
  @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.collapsed; }

  constructor(private settings: SettingsService, theme: ThemesService, tsServ: TranslatorService) {
      setTimeout(() => {
        tsServ.use(settings.layout.lang);
      }, 500);
  }

}
