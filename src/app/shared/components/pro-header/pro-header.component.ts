import { Component, Input, ViewEncapsulation, ElementRef, TemplateRef, ContentChild, OnInit, AfterViewInit } from '@angular/core';
import { TitleService } from '@core/services/title.service';

@Component({
    selector: 'pro-header',
    template: `
    <ng-template [ngTemplateOutlet]="breadcrumb"></ng-template>
    <div class="detail">
        <div *ngIf="logo" class="logo"><ng-template [ngTemplateOutlet]="logo"></ng-template></div>
        <div class="main">
            <div class="row">
                <h1 *ngIf="title" class="title">{{title}}</h1>
                <div *ngIf="action" class="action"><ng-template [ngTemplateOutlet]="action"></ng-template></div>
            </div>
            <div class="row">
                <div *ngIf="content" class="desc"><ng-template [ngTemplateOutlet]="content"></ng-template></div>
                <div *ngIf="extra" class="extra"><ng-template [ngTemplateOutlet]="extra"></ng-template></div>
            </div>
        </div>
    </div>
    <ng-content></ng-content>
    <ng-template [ngTemplateOutlet]="tab"></ng-template>
    `,
    styleUrls: [ './pro-header.less' ],
    encapsulation: ViewEncapsulation.None,
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '[class.content__title]': 'true',
        '[class.pro-header]': 'true'
    }
})
export class ProHeaderComponent implements AfterViewInit {

    // region fields

    @Input() title: string;

    @ContentChild('breadcrumb') breadcrumb: TemplateRef<any>;

    @ContentChild('logo') logo: TemplateRef<any>;

    @ContentChild('action') action: TemplateRef<any>;

    @ContentChild('content') content: TemplateRef<any>;

    @ContentChild('extra') extra: TemplateRef<any>;

    @ContentChild('tab') tab: TemplateRef<any>;

    // endregion

    constructor(private titleSrv: TitleService) {}

    ngAfterViewInit() {
        let t = this.title;
        // from breadcrumb
        const el = document.querySelector('pro-header nz-breadcrumb-item:last-child .ant-breadcrumb-link');
        if (el) t = el.textContent.trim() || this.title;
        this.titleSrv.setTitle(t);
    }
}
