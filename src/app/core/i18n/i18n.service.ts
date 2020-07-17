// 请参考：https://ng-alain.com/docs/i18n
import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import ngEn from '@angular/common/locales/en';
import ngZh from '@angular/common/locales/zh';
import ngZhTw from '@angular/common/locales/zh-Hant';
import { Injectable } from '@angular/core';
import {
  AlainI18NService,
  DelonLocaleService,
  en_US as delonEnUS,
  SettingsService,
  zh_CN as delonZhCn,
  zh_TW as delonZhTw,
} from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { enUS as dfEn, zhCN as dfZhCn, zhTW as dfZhTw } from 'date-fns/locale';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { en_US as zorroEnUS, NzI18nService, zh_CN as zorroZhCN, zh_TW as zorroZhTW } from 'ng-zorro-antd/i18n';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

interface LangData {
  abbr: string;
  text: string;
  ng: NzSafeAny;
  zorro: NzSafeAny;
  date: NzSafeAny;
  delon: NzSafeAny;
}

const DEFAULT = 'zh-CN';
const LANGS: { [key: string]: LangData } = {
  'zh-CN': {
    text: '简体中文',
    ng: ngZh,
    zorro: zorroZhCN,
    date: dfZhCn,
    delon: delonZhCn,
    abbr: '🇨🇳',
  },
  'zh-TW': {
    text: '繁体中文',
    ng: ngZhTw,
    zorro: zorroZhTW,
    date: dfZhTw,
    delon: delonZhTw,
    abbr: '🇭🇰',
  },
  'en-US': {
    text: 'English',
    ng: ngEn,
    zorro: zorroEnUS,
    date: dfEn,
    delon: delonEnUS,
    abbr: '🇬🇧',
  },
};

@Injectable({ providedIn: 'root' })
export class I18NService implements AlainI18NService {
  private _default = DEFAULT;
  private change$ = new BehaviorSubject<string | null>(null);

  private _langs = Object.keys(LANGS).map((code) => {
    const item = LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });

  constructor(
    private settings: SettingsService,
    private nzI18nService: NzI18nService,
    private delonLocaleService: DelonLocaleService,
    private translate: TranslateService,
    private platform: Platform,
  ) {
    // `@ngx-translate/core` 预先知道支持哪些语言
    const lans = this._langs.map((item) => item.code);
    translate.addLangs(lans);

    const defaultLan = this.getDefaultLang();
    if (lans.includes(defaultLan)) {
      this._default = defaultLan;
    }

    this.updateLangData(this._default);
  }

  private getDefaultLang(): string | undefined {
    if (!this.platform.isBrowser) {
      return DEFAULT;
    }
    if (this.settings.layout.lang) {
      return this.settings.layout.lang;
    }
    return (navigator.languages ? navigator.languages[0] : null) || navigator.language;
  }

  private updateLangData(lang: string) {
    const item = LANGS[lang];
    registerLocaleData(item.ng);
    this.nzI18nService.setLocale(item.zorro);
    this.nzI18nService.setDateLocale(item.date);
    this.delonLocaleService.setLocale(item.delon);
  }

  get change(): Observable<string> {
    return this.change$.asObservable().pipe(filter((w) => w != null)) as Observable<string>;
  }

  use(lang: string): void {
    lang = lang || this.translate.getDefaultLang();
    if (this.currentLang === lang) {
      return;
    }
    this.updateLangData(lang);
    this.translate.use(lang).subscribe(() => this.change$.next(lang));
  }
  /** 获取语言列表 */
  getLangs() {
    return this._langs;
  }
  /** 翻译 */
  fanyi(key: string, interpolateParams?: {}) {
    return this.translate.instant(key, interpolateParams);
  }
  /** 默认语言 */
  get defaultLang() {
    return this._default;
  }
  /** 当前语言 */
  get currentLang() {
    return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
  }
}
