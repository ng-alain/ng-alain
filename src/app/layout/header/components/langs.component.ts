import { Component } from '@angular/core';
import { TranslatorService } from '@core/translator/translator.service';
import { SettingsService } from '@core/services/settings.service';

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
            <li nz-menu-item *ngFor="let item of tsServ.langs"
            [nzSelected]="item.code === settings.layout.lang"
                (click)="change(item.code)">{{item.text}}</li>
        </ul>
    </nz-dropdown>
    `
})
export class HeaderLangsComponent {


    constructor(
        public settings: SettingsService,
        public tsServ: TranslatorService
    ) {
    }

    change(lang: string) {
        this.tsServ.use(lang, false);
        this.settings.setLayout('lang', lang);
    }

}
