import { Injectable, Inject } from '@angular/core';
import { SettingsService } from './settings.service';
import { DOCUMENT } from '@angular/platform-browser';

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
