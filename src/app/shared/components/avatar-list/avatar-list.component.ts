import { Component, ViewEncapsulation, Input, QueryList, ContentChildren } from '@angular/core';
import { AvatarListItemComponent } from './avatar-list-item.component';

@Component({
    selector: 'avatar-list',
    template: `
    <ul>
        <li *ngFor="let i of _items" class="item" [ngClass]="_size">
            <nz-tooltip *ngIf="i.tips" [nzTitle]="i.tips">
                <nz-avatar nz-tooltip [nzSrc]="i.src" [nzSize]="_avatarSize"></nz-avatar>
            </nz-tooltip>
            <nz-avatar *ngIf="!i.tips" [nzSrc]="i.src" [nzSize]="_avatarSize"></nz-avatar>
        </li>
    </ul>
    `,
    styleUrls: [ './avatar-list.less' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class AvatarListComponent {

    _size = '';

    _avatarSize = '';

    @Input()
    set size(value: 'large' | 'small' | 'mini' | 'default') {
        this._size = value === 'default' ? '' : value;
        switch (value) {
            case 'large':
            case 'small':
            case 'default':
                this._avatarSize = value;
                break;
            default:
            this._avatarSize = 'small';
                break;
        }
    }

    @ContentChildren(AvatarListItemComponent) _items: QueryList<AvatarListItemComponent>;
}
