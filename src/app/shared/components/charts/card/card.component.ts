import { Component, ViewEncapsulation, TemplateRef, Input, ContentChild } from '@angular/core';

@Component({
    selector: 'chart-card',
    template: `
    <nz-card [nzLoading]="loading" [nzBodyStyle]="{padding: '20px 24px 8px 24px'}" [nzBordered]="false">
        <div class="meta">
            <span class="title" *ngIf="_title; else _titleTpl">{{ _title }}</span>
            <span class="action" *ngIf="_action || _actionTpl">
                <ng-container *ngIf="_action; else _actionTpl">{{ _action }}</ng-container>
            </span>
        </div>
        <p *ngIf="total" class="total" [innerHTML]="total"></p>
        <div class="desc" [ngStyle]="{'height':contentHeight || 'auto'}">
            <div [ngClass]="{'fixed': !!contentHeight }">
                <ng-content></ng-content>
            </div>
        </div>
        <div class="footer" *ngIf="_footer || _footerTpl">
            <ng-container *ngIf="_footer; else _footerTpl">{{ _footer }}</ng-container>
        </div>
    </nz-card>
    `,
    styleUrls: [ './card.less' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class ChartCardComponent {

    // region fields

    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
    }

    _action = '';
    _actionTpl: TemplateRef<any>;
    @Input()
    set action(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._actionTpl = value;
        else
            this._action = value;
    }

    @Input() total = '';

    @Input() contentHeight = '';

    _footer = '';
    _footerTpl: TemplateRef<any>;
    @Input()
    set footer(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._footerTpl = value;
        else
            this._footer = value;
    }

    @Input() loading = false;

    // endregion

}
