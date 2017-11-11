import { Component, Input, ElementRef, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';

@Component({
    selector: 'standard-form-row',
    template: `
    <div *ngIf="title" class="label"><span>{{title}}</span></div>
    <div class="control"><ng-content></ng-content></div>
    `,
    styleUrls: [ './standard-form-row.less' ]
})
export class StandardFormRowComponent implements OnChanges {

    @Input() title: string;

    @Input() block: boolean;

    @Input() last: boolean;

    @Input() grid: boolean;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    private isValid(value: any): boolean {
        return typeof value !== 'undefined' && value !== false;
    }

    setClass() {
        this.renderer.removeClass(this.el.nativeElement, 'class');

        const list = [ `standard-form-row` ];
        if (this.isValid(this.block)) list.push('block');
        if (this.isValid(this.grid)) list.push('grid');
        if (this.isValid(this.last)) list.push('last');

        list.forEach(v => this.renderer.addClass(this.el.nativeElement, v));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setClass();
    }
}
