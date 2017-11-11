import { Component, Input, ViewEncapsulation, ElementRef, TemplateRef, ContentChild, OnInit, Renderer2 } from '@angular/core';
import { DescListComponent } from './desc-list.component';

@Component({
    selector: 'desc-list-item',
    template: `
    <div class="term">{{term}}</div>
    <div class="detail"><ng-content></ng-content></div>
    `
})
export class DescListItemComponent implements OnInit {

    // region fields

    @Input() term: string;

    // endregion
    private col = 2;

    constructor(private parent: DescListComponent, private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.col = this.parent.col > 4 ? 4 : this.parent.col;
        this.setClass();
    }

    setClass() {
        this.renderer.removeAttribute(this.el.nativeElement, 'class');

        const ls = [];
        const responsive =  ({
            1: { xs: 24 },
            2: { xs: 24, sm: 12 },
            3: { xs: 24, sm: 12, md: 8 },
            4: { xs: 24, sm: 12, md: 6 },
        })[this.col];

        for (const key in responsive) {
            ls.push(`ant-col-${key}-${responsive[key]}`);
        }

        ls.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
    }
}
