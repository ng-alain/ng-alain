import { Injectable, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { zhCN, enUS, NzLocaleService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService, AlainI18NService } from '@delon/theme';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class I18NService implements AlainI18NService {

    private _default = 'en';

    private _langs = [
        { code: 'en', text: 'English' },
        { code: 'zh-CN', text: '中文' }
    ];

    constructor(settings: SettingsService,
        private nzLocalService: NzLocaleService,
        private translate: TranslateService,
        private injector: Injector) {
        this._default = settings.layout.lang || translate.getBrowserLang();
        const lans = this._langs.map(item => item.code);
        if (!lans.includes(this._default)) {
            this._default = lans[0];
        }
        translate.addLangs(lans);
        translate.setDefaultLang(this._default);
    }

    use(lang: string = null, firstLoad = true): Observable<any> {
        lang = lang || this.translate.getDefaultLang();
        this.nzLocalService.setLocale(lang === 'en' ? enUS : zhCN);
        // need reload router because of ng-zorro-antd local system
        if (!firstLoad) this.injector.get(Router).navigate([ '/' ]);
        return this.translate.use(lang);
    }

    getLangs() {
        return this._langs;
    }

    fanyi(key: string) {
        return this.translate.instant(key);
    }

}
