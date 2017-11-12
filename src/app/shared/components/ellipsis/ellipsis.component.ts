import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'ellipsis',
    template: `<ng-content></ng-content>`,
    styles: [ `
    ellipsis {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    `]
})
export class EllipsisComponent {
    @HostBinding('style.-webkit-line-clamp')
    @Input() lines = 3;
}
