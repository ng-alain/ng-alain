// 请参考：https://ng-alain.com/docs/i18n
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { registerLocaleData } from '@angular/common';
import ngZh from '@angular/common/locales/zh';
import ngEn from '@angular/common/locales/en';

import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
import * as df_en from 'date-fns/locale/en';
import * as df_zh_cn from 'date-fns/locale/zh_cn';
import { TranslateService } from '@ngx-translate/core';
import {
  SettingsService,
  AlainI18NService,
  DelonLocaleService,
  en_US as delonEnUS,
  zh_CN as delonZhCn,
} from '@delon/theme';

interface LangData {
  text: string;
  ng: any;
  zorro: any;
  dateFns: any;
  delon: any;
}

const DEFAULT = 'zh-CN';
const LANGS: { [key: string]: LangData } = {
  'zh-CN': {
    text: '中文',
    ng: ngZh,
    zorro: zh_CN,
    dateFns: df_zh_cn,
    delon: delonZhCn,
  },
  en: {
    text: 'English',
    ng: ngEn,
    zorro: en_US,
    dateFns: df_en,
    delon: delonEnUS,
  },
};

@Injectable()
export class I18NService implements AlainI18NService {
  private _default = DEFAULT;
  private change$ = new BehaviorSubject<string>(null);

  private _langs = Object.keys(LANGS).map(code => {
    return { code, text: LANGS[code].text };
  });

  constructor(
    settings: SettingsService,
    private nzI18nService: NzI18nService,
    private delonLocaleService: DelonLocaleService,
    private translate: TranslateService,
  ) {
    const defaultLan = settings.layout.lang || translate.getBrowserLang();
    // `@ngx-translate/core` 预先知道支持哪些语言
    const lans = this._langs.map(item => item.code);
    translate.addLangs(lans);

    this._default = lans.includes(defaultLan) ? defaultLan : lans[0];
    this.updateLangData(this._default);
  }

  private updateLangData(lang: string) {
    const item = LANGS[lang];
    registerLocaleData(item.ng);
    this.nzI18nService.setLocale(item.zorro);
    (window as any).__locale__ = item.dateFns;
    this.delonLocaleService.setLocale(item.delon);
  }

  get change(): Observable<string> {
    return this.change$.asObservable().pipe(filter(w => w != null));
  }

  use(lang: string): void {
    lang = lang || this.translate.getDefaultLang();
    if (this.currentLang === lang) return;
    this.updateLangData(lang);
    this.translate.use(lang).subscribe(() => this.change$.next(lang));
  }
  /** 获取语言列表 */
  getLangs() {
    return this._langs;
  }
  /** 翻译 */
  fanyi(key: string) {
    return this.translate.instant(key);
  }
  /** 默认语言 */
  get defaultLang() {
    return this._default;
  }
  /** 当前语言 */
  get currentLang() {
    return (
      this.translate.currentLang ||
      this.translate.getDefaultLang() ||
      this._default
    );
  }
}
