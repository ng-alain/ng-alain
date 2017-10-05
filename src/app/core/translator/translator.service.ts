import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class TranslatorService {

    private _default = 'en';

    private _langs = [
        { code: 'en', text: 'English' },
        { code: 'zh-CN', text: '中文' }
    ];

    constructor(settings: SettingsService, private translate: TranslateService) {
        this._default = settings.layout.lang || translate.getBrowserLang();
        const lans = this._langs.map(item => item.code);
        if (!lans.includes(this._default)) {
            this._default = lans[0];
        }
        translate.addLangs(lans);
        translate.setDefaultLang(this._default);
    }

    use(lang: string = null) {
        this.translate.use(lang || this.translate.getDefaultLang());
    }

    get langs() {
        return this._langs;
    }

    fanyi(key: string) {
        return this.translate.instant(key);
    }

}
