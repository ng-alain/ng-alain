import { Component, ViewChild } from '@angular/core';
import * as screenfull from 'screenfull';
import { NzModalService, NzMessageService } from "ng-zorro-antd";
import { LocalStorageService } from 'angular-web-storage';

import { SettingsService } from '@core/services/settings.service';
import { ThemesService } from '@core/services/themes.service';
import { MenuService } from "@core/services/menu.service";
import { ThemeType } from "@core/services/themes.service";
import { TranslatorService } from "@core/translator/translator.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    q: string;
    focus: boolean = false;
    isFullscreen: boolean = false;
    searchToggled: boolean = false;
    appLoading: boolean = true;
    themes: { l: ThemeType, bg: string }[] = [
        { l: 'A', bg: 'blue' },
        { l: 'B', bg: 'purple' },
        { l: 'C', bg: 'green' },
        { l: 'D', bg: 'red' },
        { l: 'E', bg: 'yellow' },
        { l: 'F', bg: 'grey' },
        { l: 'G', bg: 'pink' },
        { l: 'H', bg: 'orange' },
        { l: 'I', bg: 'teal' },
        { l: 'J', bg: 'cyan' }
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
        })
    }
}
