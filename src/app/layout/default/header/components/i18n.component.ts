import { Component, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService, ALAIN_I18N_TOKEN } from '@delon/theme';

import { I18NService } from '@core/i18n/i18n.service';

@Component({
  selector: 'header-i18n',
  template: `
  <nz-dropdown nzPlacement="bottomRight">
    <div *ngIf="showLang" nz-dropdown>
      <i nz-icon type="global"></i>
      {{ 'menu.lang' | translate}}
      <i nz-icon type="down"></i>
    </div>
    <i *ngIf="!showLang" nz-dropdown nz-icon type="global"></i>
    <ul nz-menu>
      <li nz-menu-item *ngFor="let item of langs"
        [nzSelected]="item.code === settings.layout.lang"
        (click)="change(item.code)">{{item.text}}</li>
    </ul>
  </nz-dropdown>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderI18nComponent {
  langs: any[];

  @Input() showLang = true;

  constructor(
    public settings: SettingsService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    @Inject(DOCUMENT) private doc: any,
  ) {
    this.langs = this.i18n.getLangs();
  }

  change(lang: string) {
    const spinEl = this.doc.createElement('div');
    spinEl.setAttribute('class', `page-loading ant-spin ant-spin-lg ant-spin-spinning`);
    spinEl.innerHTML = `<span class="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>`;
    this.doc.body.appendChild(spinEl);

    this.i18n.use(lang);
    this.settings.setLayout('lang', lang);
    setTimeout(() => this.doc.location.reload());
  }
}
