import { Injectable, Inject } from '@angular/core';
import { SettingsService } from './settings.service';
import { DOCUMENT } from '@angular/platform-browser';

export type ThemeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';

@Injectable()
export class ThemesService {

    styleTag: any;
    defaultTheme: ThemeType = 'A';

    constructor(settings: SettingsService, @Inject(DOCUMENT) private doc: Document) {
        this.setTheme(settings.layout.theme);
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
        this.defaultTheme = name;
    }

    getDefaultTheme() {
        return this.defaultTheme;
    }

}
