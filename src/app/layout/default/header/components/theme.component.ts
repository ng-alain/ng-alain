import { Component } from '@angular/core';
import { SettingsService, ThemesService, ThemeType } from '@delon/theme';

@Component({
    selector: 'header-theme',
    template: `
    <strong>{{ 'theme-switch' | translate}}</strong>
    <div class="theme-icons">
        <label *ngFor="let item of themes" (click)="changeTheme(item.l)" [style.background]="item.bg">
            <i class="anticon anticon-check" *ngIf="item.l == settings.layout.theme"></i>
            <div class="areas">
                <span class="nav" [style.background]="item.nav"></span>
                <span class="con" [style.background]="item.con"></span>
            </div>
        </label>
    </div>
    `
})
export class HeaderThemeComponent {

    themes: { l: ThemeType, bg: string, nav: string, con: string }[] = [
        { l: 'A', bg: '#108ee9', nav: '#fff', con: '#f5f7fa' },
        { l: 'B', bg: '#00a2ae', nav: '#fff', con: '#f5f7fa' },
        { l: 'C', bg: '#00a854', nav: '#fff', con: '#f5f7fa' },
        { l: 'D', bg: '#f04134', nav: '#fff', con: '#f5f7fa' },
        { l: 'E', bg: '#373d41', nav: '#fff', con: '#f5f7fa' },
        { l: 'F', bg: '#108ee9', nav: '#404040', con: '#f5f7fa' },
        { l: 'G', bg: '#00a2ae', nav: '#404040', con: '#f5f7fa' },
        { l: 'H', bg: '#00a854', nav: '#404040', con: '#f5f7fa' },
        { l: 'I', bg: '#f04134', nav: '#404040', con: '#f5f7fa' },
        { l: 'J', bg: '#373d41', nav: '#404040', con: '#f5f7fa' }
    ];

    constructor(
        public settings: SettingsService,
        private themeServ: ThemesService
    ) {
    }

    changeTheme(theme: ThemeType) {
        this.themeServ.setTheme(theme);
        this.settings.setLayout('theme', theme);
    }
}
