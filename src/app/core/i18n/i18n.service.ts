// 请参考：https://ng-alain.com/docs/i18n
import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import ngEn from '@angular/common/locales/en';
import ngZh from '@angular/common/locales/zh';
import ngZhTw from '@angular/common/locales/zh-Hant';
import { Inject, Injector, Injectable } from '@angular/core';
import {
  AlainI18NService,
  DelonLocaleService,
  en_US as delonEnUS,
  SettingsService,
  zh_CN as delonZhCn,
  zh_TW as delonZhTw,
  _HttpClient
} from '@delon/theme';
import { enUS as dfEn, zhCN as dfZhCn, zhTW as dfZhTw } from 'date-fns/locale';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { en_US as zorroEnUS, NzI18nService, zh_CN as zorroZhCN, zh_TW as zorroZhTW } from 'ng-zorro-antd/i18n';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

interface LangConfigData {
  abbr: string;
  text: string;
  ng: NzSafeAny;
  zorro: NzSafeAny;
  date: NzSafeAny;
  delon: NzSafeAny;
}

const DEFAULT = 'zh-CN';
const LANGS: { [key: string]: LangConfigData } = {
  'zh-CN': {
    text: '简体中文',
    ng: ngZh,
    zorro: zorroZhCN,
    date: dfZhCn,
    delon: delonZhCn,
    abbr: '🇨🇳'
  },
  'zh-TW': {
    text: '繁体中文',
    ng: ngZhTw,
    zorro: zorroZhTW,
    date: dfZhTw,
    delon: delonZhTw,
    abbr: '🇭🇰'
  },
  'en-US': {
    text: 'English',
    ng: ngEn,
    zorro: zorroEnUS,
    date: dfEn,
    delon: delonEnUS,
    abbr: '🇬🇧'
  }
};

@Injectable()
export abstract class AlainI18nBaseService implements AlainI18NService {
  protected _change$ = new BehaviorSubject<string | null>(null);
  protected _currentLang: string = '';
  protected _defaultLang: string = '';
  protected _data: Record<string, string> = {};
  get change(): Observable<string> {
    return this._change$.asObservable().pipe(filter(w => w != null)) as Observable<string>;
  }
  get defaultLang(): string {
    return this._defaultLang;
  }
  get currentLang(): string {
    return this._currentLang;
  }
  get data(): Record<string, string> {
    return this._data;
  }

  constructor(
    protected readonly http: _HttpClient,
    protected readonly settings: SettingsService,
    protected readonly platform: Platform,
    @Inject(Injector) protected readonly injector: Injector
  ) {
    this._defaultLang = this.getDefaultLang();
  }

  abstract use(lang: string, data: any): void;

  abstract getLangs(): any[];

  fanyi(path: string, params?: Record<string, unknown>): any {
    let content = this._data[path] || '';
    if (!content) return path;

    if (params) {
      Object.keys(params).forEach(key => (content = content.replace(new RegExp(`%${key}%`, 'g'), `${params[key]}`)));
    }
    return content;
  }

  protected getDefaultLang(): string {
    if (!this.platform.isBrowser) {
      return DEFAULT;
    }
    if (this.settings.layout.lang) {
      return this.settings.layout.lang;
    }
    return (navigator.languages ? navigator.languages[0] : null) || navigator.language;
  }
}

@Injectable({ providedIn: 'root' })
export class I18NService extends AlainI18nBaseService {
  private _langs = Object.keys(LANGS).map(code => {
    const item = LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });

  loadLangData(lang: string): Observable<NzSafeAny> {
    return this.http.get(`assets/tmp/i18n/${lang}.json`);
  }

  use(lang: string, data: Record<string, string>): void {
    if (this._currentLang === lang) return;

    this._data = data;

    const item = LANGS[lang];
    registerLocaleData(item.ng);
    const nzI18nSrv = this.injector.get(NzI18nService);
    nzI18nSrv.setLocale(item.zorro);
    nzI18nSrv.setDateLocale(item.date);
    this.injector.get(DelonLocaleService).setLocale(item.delon);
    this._currentLang = lang;

    this._change$.next(lang);
  }

  getLangs(): Array<{ code: string; text: string; abbr: string }> {
    return this._langs;
  }
  // private _default = DEFAULT;
  // private _change$ = new BehaviorSubject<string | null>(null);
  // private _langs = Object.keys(LANGS).map(code => {
  //   const item = LANGS[code];
  //   return { code, text: item.text, abbr: item.abbr };
  // });
  // private _data: AlainI18nLangData = {};
  // private _currentLang: string = '';
  // constructor(
  //   private http: _HttpClient,
  //   private settings: SettingsService,
  //   private nzI18nService: NzI18nService,
  //   private delonLocaleService: DelonLocaleService,
  //   private platform: Platform
  // ) {
  //   const defaultLan = this.getDefaultLang();
  //   if (this._langs.findIndex(w => w.code === defaultLan) !== -1) {
  //     this._default = defaultLan;
  //   }
  //   this.updateLibLangData(this._default);
  // }
  // private getDefaultLang(): string {
  //   if (!this.platform.isBrowser) {
  //     return DEFAULT;
  //   }
  //   if (this.settings.layout.lang) {
  //     return this.settings.layout.lang;
  //   }
  //   return (navigator.languages ? navigator.languages[0] : null) || navigator.language;
  // }
  // private updateLibLangData(lang: string): void {
  //   const item = LANGS[lang];
  //   registerLocaleData(item.ng);
  //   this.nzI18nService.setLocale(item.zorro);
  //   this.nzI18nService.setDateLocale(item.date);
  //   this.delonLocaleService.setLocale(item.delon);
  //   this._currentLang = lang;
  // }
  // loadLangData(lang: string): Observable<AlainI18nLangData> {
  //   return this.http.get(`assets/tmp/i18n/${lang}.json`).pipe(tap(res => (this._data = res)));
  // }
  // get change(): Observable<string> {
  //   return this._change$.asObservable().pipe(filter(w => w != null)) as Observable<string>;
  // }
  // use(lang: string, emit?: boolean): void {
  //   if (this._currentLang === lang) {
  //     return;
  //   }
  //   this.updateLibLangData(lang);
  //   this.loadLangData(lang).subscribe(() => {
  //     if (emit !== false) this._change$.next(lang);
  //   });
  // }
  // /** 获取语言列表 */
  // getLangs(): Array<{ code: string; text: string; abbr: string }> {
  //   return this._langs;
  // }
  // /** 翻译 */
  // fanyi(key: string | string[], params?: unknown, isSafe?: boolean): string | SafeHtml {
  //   // _data
  //   return this.translate.instant(key, interpolateParams);
  // }
  // /** 默认语言 */
  // get defaultLang(): string {
  //   return this._default;
  // }
  // /** 当前语言 */
  // get currentLang(): string {
  //   return this._currentLang;
  // }
}
