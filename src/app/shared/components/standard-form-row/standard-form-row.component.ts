import { Component, Input, ElementRef, OnChanges, SimpleChanges, Renderer2, ViewEncapsulation } from '@angular/core';
import { isTruth } from 'app/utils/utils';

@Component({
    selector: 'standard-form-row',
    template: `
    <div *ngIf="title" class="label"><span>{{title}}</span></div>
    <div class="control"><ng-content></ng-content></div>
    `,
    styleUrls: [ './standard-form-row.less' ],
    encapsulation: ViewEncapsulation.None
})
export class StandardFormRowComponent implements OnChanges {

    @Input() title: string;

    @Input() block: boolean;

    @Input() last: boolean;

    @Input() grid: boolean;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    _classMap: string[] = [];
    setClass() {
        this._classMap.forEach(cls => this.renderer.removeClass(this.el.nativeElement, cls));

        this._classMap = [ `standard-form-row` ];
        if (isTruth(this.block)) this._classMap.push('block');
        if (isTruth(this.grid)) this._classMap.push('grid');
        if (isTruth(this.last)) this._classMap.push('last');

        this._classMap.forEach(v => this.renderer.addClass(this.el.nativeElement, v));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setClass();
    }
}
