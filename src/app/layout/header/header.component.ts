import { Component, ViewChild } from '@angular/core';
import * as screenfull from 'screenfull';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { LocalStorageService } from 'angular-web-storage';

import { SettingsService, SidebarThemeType } from '@core/services/settings.service';
import { ThemesService } from '@core/services/themes.service';
import { MenuService } from '@core/services/menu.service';
import { ThemeType } from '@core/services/themes.service';
import { TranslatorService } from '@core/translator/translator.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    q: string;
    focus = false;
    isFullscreen = false;
    searchToggled = false;
    appLoading = true;
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

    @ViewChild('qIpt')
    private qIpt: any;

    constructor(
        public menu: MenuService,
        public settings: SettingsService,
        public tsServ: TranslatorService,
        private themeServ: ThemesService,
        private confirmServ: NzModalService,
        private storageServ: LocalStorageService,
        private messageServ: NzMessageService
    ) {
    }

    toggleCollapsedSideabar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }

    toggleFullScreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
        this.isFullscreen = !screenfull.isFullscreen;
    }

    qFocus() {
        this.focus = true;
    }

    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }

    searchToggleChange() {
        this.searchToggled = true;
        this.focus = true;
        this.qIpt._el.focus();
    }

    appChange() {
        // bug: https://github.com/NG-ZORRO/ng-zorro-antd/issues/390
        setTimeout(() => this.appLoading = false, 500);
    }

    changeTheme(theme: ThemeType) {
        this.themeServ.setTheme(theme);
        this.settings.setLayout('theme', theme);
    }

    changeLang(lang: string) {
        this.tsServ.use(lang);
        this.settings.setLayout('lang', lang);
    }

    clearStorage() {
        this.confirmServ.confirm({
            title: 'Make sure clear all local storage?',
            onOk: () => {
                this.storageServ.clear();
                this.messageServ.success('Clear Finished!');
            }
        });
    }
}
