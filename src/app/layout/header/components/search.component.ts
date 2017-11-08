import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'header-search',
    template: `
    <nz-input #qIpt nzPlaceHolder='{{ "top-search-ph" | translate}}' [(ngModel)]="q"
        (nzFocus)="qFocus()" (nzBlur)="qBlur()">
        <ng-template #prefix>
            <i class="anticon anticon-search"></i>
        </ng-template>
    </nz-input>
    `
})
export class HeaderSearchComponent {

    q: string;

    @HostBinding('class.header-search__focus')
    focus = false;

    @HostBinding('class.header-search__toggled')
    searchToggled = false;

    qFocus() {
        this.focus = true;
    }

    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }

}
