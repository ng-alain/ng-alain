import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoticeItem } from './notice-item';

@Component({
    selector: 'notice-list',
    template: `
    <div *ngIf="data.list?.length === 0; else listTpl" class="not-found">
        <img *ngIf="data.emptyImage" src="{{data.emptyImage}}" alt="not found" />
        <p>{{data.emptyText}}</p>
    </div>
    <ng-template #listTpl>
        <nz-list [nzDataSource]="data.list">
            <ng-template #item let-item>
                <nz-list-item (click)="onSelect(item)">
                    <nz-list-item-meta [nzTitle]="nzTitle" [nzDescription]="nzDescription" [nzAvatar]="item.avatar">
                        <ng-template #nzTitle>
                            {{item.title}}
                            <div class="extra" *ngIf="item.extra"><nz-tag [nzColor]="item.color">{{item.extra}}</nz-tag></div>
                        </ng-template>
                        <ng-template #nzDescription>
                            <div *ngIf="item.description" class="description">{{item.description}}</div>
                            <div *ngIf="item.datetime" class="datetime">{{item.datetime}}</div>
                        </ng-template>
                    </nz-list-item-meta>
                </nz-list-item>
            </ng-template>
        </nz-list>
        <div class="clear" (click)="onClear()">清空{{data.title}}</div>
    </ng-template>
    `
})
export class NoticeListComponent {
    @Input() data: NoticeItem;
    @Output() select = new EventEmitter<any>();
    @Output() clear = new EventEmitter<string>();

    onSelect(item: any) {
        this.select.emit({
            title: this.data.title,
            item: item
        });
    }

    onClear() {
        this.clear.emit(this.data.title);
    }
}
