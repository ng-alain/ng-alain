import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'tag-select',
    template: `
    <ng-content></ng-content>
    <a *ngIf="expandable" class="trigger" (click)="trigger()">{{expand ? '收起' : '展开'}}<i class="anticon anticon-{{expand ? 'up' : 'down'}} ml-sm"></i></a>
    `,
    styleUrls: [ './tag-select.less' ],
    encapsulation: ViewEncapsulation.None
})
export class TagSelectComponent {

    @HostBinding('class.tag-select')
    _cls = true;

    @Input()
    @HostBinding('class.has-expand')
    expandable = true;

    @HostBinding('class.expanded')
    expand = false;

    trigger() {
        this.expand = !this.expand;
    }
}
