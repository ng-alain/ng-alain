import { Component, Input, ViewEncapsulation, ElementRef, Renderer2, OnChanges, SimpleChanges, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'desc-list',
    template: `
    <ng-template [ngTemplateOutlet]="title"></ng-template>
    <div nz-row [nzGutter]="gutter">
        <ng-content></ng-content>
    </div>
    `,
    styleUrls: [ './desc-list.less' ],
    encapsulation: ViewEncapsulation.None
})
export class DescListComponent implements OnChanges, OnInit {

    // region fields

    @ContentChild('title') title: TemplateRef<any>;

    @Input() size: 'small' | 'large';

    @Input() gutter = 32;

    @Input() layout: 'horizontal' | 'vertical' = 'horizontal';

    @Input() col = 3;

    setClass() {
        this.renderer.removeAttribute(this.el.nativeElement, 'class');

        const ls = [ 'desc-list', this.layout ];
        if (this.size) ls.push('desc-list-' + this.size);

        ls.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
    }

    // endregion

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.setClass();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('size' in changes && !changes.size.firstChange)
            this.setClass();
    }
}
