import { Component } from '@angular/core';
import { SettingsService, MenuService } from '@delon/theme';
import { I18NService } from '@core/i18n/i18n.service';

@Component({
    selector: 'header-langs',
    template: `
    <nz-dropdown>
        <div nz-dropdown>
            <i class="anticon anticon-edit"></i>
            {{ 'language' | translate}}
            <i class="anticon anticon-down"></i>
        </div>
        <ul nz-menu>
            <li nz-menu-item *ngFor="let item of langs"
            [nzSelected]="item.code === settings.layout.lang"
                (click)="change(item.code)">{{item.text}}</li>
        </ul>
    </nz-dropdown>
    `
})
export class HeaderLangsComponent {

    langs: any[];

    constructor(
        private menuService: MenuService,
        public settings: SettingsService,
        public tsServ: I18NService
    ) {
        this.langs = this.tsServ.getLangs();
    }

    change(lang: string) {
        this.tsServ.use(lang, false).subscribe(() => {
            this.menuService.resume();
        });
        this.settings.setLayout('lang', lang);
    }
}
