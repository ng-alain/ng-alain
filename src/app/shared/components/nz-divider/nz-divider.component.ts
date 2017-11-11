import { Component, ViewEncapsulation, TemplateRef, Input, ElementRef, Renderer2, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
    selector: 'nz-divider',
    template: `
    <span *ngIf="title" class="ant-divider-inner-text">
        <ng-template #defaultTitleContent>{{_title}}</ng-template>
        <ng-template [ngTemplateOutlet]="_titleTpl || defaultTitleContent"></ng-template>
    </span>
    `,
    styleUrls: [ './nz-divider.less', './patch.less' ],
    encapsulation: ViewEncapsulation.None
})
export class NzDividerComponent implements OnChanges, OnInit {

    // region fields

    title = false;
    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set nzTitle(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
        this.title = !!value;
    }

    @Input() nzType: 'horizontal' | 'vertical' = 'horizontal';

    @Input() nzDashed = false;

    // endregion

    setClass() {
        this.renderer.removeAttribute(this.el.nativeElement, 'class');

        const ls = [ 'ant-divider', `ant-divider-${this.nzType}` ];

        if (this.title)
            ls.push(`ant-divider-with-text`);

        if (typeof this.nzDashed !== 'undefined' && this.nzDashed !== false)
            ls.push(`ant-divider-dashed`);

        ls.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges): void {
        this.setClass();
    }

    ngOnInit() {
        this.setClass();
    }

}
