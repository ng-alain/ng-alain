import { Injectable, Inject } from '@angular/core';
import { SettingsService } from './settings.service';
import { DOCUMENT } from '@angular/platform-browser';

const themeA = require('../../../styles/alain/themes/theme-a.less');
const themeB = require('../../../styles/alain/themes/theme-b.less');
const themeC = require('../../../styles/alain/themes/theme-c.less');
const themeD = require('../../../styles/alain/themes/theme-d.less');
const themeE = require('../../../styles/alain/themes/theme-e.less');
const themeF = require('../../../styles/alain/themes/theme-f.less');
const themeG = require('../../../styles/alain/themes/theme-g.less');
const themeH = require('../../../styles/alain/themes/theme-h.less');
const themeI = require('../../../styles/alain/themes/theme-i.less');
const themeJ = require('../../../styles/alain/themes/theme-j.less');

export type ThemeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';

@Injectable()
export class ThemesService {

    styleTag: any;
    defaultTheme: ThemeType = 'A';

    constructor(settings: SettingsService, @Inject(DOCUMENT) private doc: Document) {
        setTimeout(() => {
            this.createStyle();
            this.setTheme(settings.layout.theme);
        }, 500);
    }

    private createStyle() {
        const head = this.doc.head || this.doc.getElementsByTagName('head')[0];
        this.styleTag = this.doc.createElement('style');
        this.styleTag.type = 'text/css';
        this.styleTag.id = 'appthemes';
        head.appendChild(this.styleTag);
    }

    setTheme(name: ThemeType) {
        if (name === this.defaultTheme) {
            return;
        }
        const bodyEl = this.doc.querySelector('body');
        const removeArr = [];
        for (let i = 0; i < bodyEl.classList.length; i++) {
            if (bodyEl.classList[i].startsWith('theme-')) {
                removeArr.push(bodyEl.classList[i]);
            }
        }
        bodyEl.classList.remove(...removeArr);
        bodyEl.classList.add(`theme-${name.toLowerCase()}`);
        const idx = name.charCodeAt(0) - 65;
        this.injectStylesheet([themeA, themeB, themeC, themeD, themeE, themeF, themeG, themeH, themeI, themeJ][idx]);
        this.defaultTheme = name;
    }

    injectStylesheet(css) {
        this.styleTag.innerHTML = css;
    }

    getDefaultTheme() {
        return this.defaultTheme;
    }

}
