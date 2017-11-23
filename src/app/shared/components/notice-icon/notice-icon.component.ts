import { Component, Input, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation } from '@angular/core';
import { NoticeItem } from './notice-item';

@Component({
    selector: 'notice-icon',
    template: `
    <nz-popover [nzVisible]="popoverVisible" (nzVisibleChange)="onVisibleChange($event)" nzTrigger="click" nzPlacement="bottomRight" nzOverlayClassName="notice-icon-popover">
        <div nz-popover class="item">
            <nz-badge [nzCount]="count">
                <ng-template #content>
                    <i class="anticon anticon-bell"></i>
                </ng-template>
            </nz-badge>
        </div>
        <ng-template #nzTemplate>
            <nz-spin [nzSpinning]="loading">
                <nz-tabset>
                    <nz-tab *ngFor="let i of data">
                        <ng-template #nzTabHeading>{{i.title}}</ng-template>
                        <notice-list [data]="i"
                                     (select)="onSelect($event)"
                                     (clear)="onClear($event)"></notice-list>
                    </nz-tab>
                </nz-tabset>
            </nz-spin>
        </ng-template>
    </nz-popover>
    `,
    styleUrls: [ './notice-icon.less' ],
    encapsulation: ViewEncapsulation.None
})
export class NoticeIconComponent {
    @Input() data: NoticeItem[] = [];
    @Input() count = 0;
    @Input() loading = false;
    @Output() select = new EventEmitter<any>();
    @Output() clear = new EventEmitter<string>();
    @Input() popoverVisible = false;
    @Output() popupVisibleChange = new EventEmitter<boolean>();

    @HostListener('click')
    _click() {

    }

    onVisibleChange(result: boolean) {
        this.popupVisibleChange.emit(result);
    }

    onSelect(i: any) {
        this.select.emit(i);
    }

    onClear(title: string) {
        this.clear.emit(title);
    }
}
