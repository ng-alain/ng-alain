import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'desc-list-item',
    template: `
    <ng-template #tpl>
        <div class="term" *ngIf="_term || _termTpl">
            <ng-template #defaultTermContent>{{_term}}</ng-template>
            <ng-template [ngTemplateOutlet]="_termTpl || defaultTermContent"></ng-template>
        </div>
        <div class="detail"><ng-content></ng-content></div>
    </ng-template>
    `
})
export class DescListItemComponent {

    // region fields

    _term = '';
    _termTpl: TemplateRef<any>;
    @Input()
    set term(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._termTpl = value;
        else
            this._term = value;
    }

    // endregion

    @ViewChild('tpl') tpl: TemplateRef<any>;
}
