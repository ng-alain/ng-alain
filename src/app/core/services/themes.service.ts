import { Injectable } from '@angular/core';
import { SettingsService } from "./settings.service";

const themeA = require('../../shared/styles/themes/theme-a.scss');
const themeB = require('../../shared/styles/themes/theme-b.scss');
const themeC = require('../../shared/styles/themes/theme-c.scss');
const themeD = require('../../shared/styles/themes/theme-d.scss');
const themeE = require('../../shared/styles/themes/theme-e.scss');
const themeF = require('../../shared/styles/themes/theme-f.scss');
const themeG = require('../../shared/styles/themes/theme-g.scss');
const themeH = require('../../shared/styles/themes/theme-h.scss');
const themeI = require('../../shared/styles/themes/theme-i.scss');
const themeJ = require('../../shared/styles/themes/theme-j.scss');

export type ThemeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';

@Injectable()
export class ThemesService {

    styleTag: any;
    defaultTheme: ThemeType = 'A';

    constructor(settings: SettingsService) {
        setTimeout(() => {
            this.createStyle();
            this.defaultTheme = settings.layout.theme;
            this.setTheme(this.defaultTheme);
        }, 500);
    }

    private createStyle() {
        const head = document.head || document.getElementsByTagName('head')[0];
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.styleTag.id = 'appthemes';
        head.appendChild(this.styleTag);
    }

    setTheme(name: ThemeType) {
        let idx = name.charCodeAt(0) - 65;
        this.injectStylesheet([themeA, themeB, themeC, themeD, themeE, themeF, themeG, themeH, themeI, themeJ][idx]);
    }

    injectStylesheet(css) {
        this.styleTag.innerHTML = css;
    }

    getDefaultTheme() {
        return this.defaultTheme;
    }

}
