import { Component, ViewEncapsulation, TemplateRef, Input, ContentChild, ElementRef, Renderer2, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'number-info',
    template: `
    <div *ngIf="_title || _titleTpl" class="title"><ng-container *ngIf="_title; else _titleTpl">{{_title}}</ng-container></div>
    <div *ngIf="_subTitle || _subTitleTpl" class="sub-title"><ng-container *ngIf="_subTitle; else _subTitleTpl">{{_subTitle}}</ng-container></div>
    <div class="value" [ngStyle]="{'margin-top.px': gap}">
        <span><ng-container *ngIf="_total; else _totalTpl">{{_total}}</ng-container><em class="suffix" *ngIf="suffix">{{suffix}}</em></span>
        <span *ngIf="status || subTotal" class="sub-total">
            <ng-container *ngIf="_subTotal; else _subTotalTpl">{{_subTotal}}</ng-container>
            <nz-icon *ngIf="status" nzType="caret-{{status}}"></nz-icon>
        </span>
    </div>
    `,
    styleUrls: [ './number-info.less' ],
    encapsulation: ViewEncapsulation.None
})
export class NumberInfoComponent implements OnChanges {
    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
    }

    _subTitle = '';
    _subTitleTpl: TemplateRef<any>;
    @Input()
    set subTitle(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._subTitleTpl = value;
        else
            this._subTitle = value;
    }

    _total = '';
    _totalTpl: TemplateRef<any>;
    @Input()
    set total(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._totalTpl = value;
        else
            this._total = value;
    }

    _subTotal = '';
    _subTotalTpl: TemplateRef<any>;
    @Input()
    set subTotal(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._subTotalTpl = value;
        else
            this._subTotal = value;
    }

    @Input() suffix: string;
    @Input() status: 'up' | 'down';
    @Input() theme: 'light' = 'light';
    @Input() gap = 8;


    constructor(private el: ElementRef, private renderer: Renderer2) {}

    _classMap: string[] = [];
    setClass() {
        this._classMap.forEach(cls => this.renderer.removeClass(this.el.nativeElement, cls));

        this._classMap = [ `number-info` ];
        if (this.theme) this._classMap.push(this.theme);

        this._classMap.forEach(v => this.renderer.addClass(this.el.nativeElement, v));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setClass();
    }
}
