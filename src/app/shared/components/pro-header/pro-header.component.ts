import { Component, Input, ViewEncapsulation, ElementRef, TemplateRef, ContentChild, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '@core/services/menu.service';
import { TranslatorService } from '@core/translator/translator.service';

@Component({
    selector: 'pro-header',
    template: `
    <ng-container *ngIf="!breadcrumb; else breadcrumb">
        <nz-breadcrumb>
            <nz-breadcrumb-item *ngFor="let i of paths">
                <ng-container *ngIf="i.link"><a [routerLink]="i.link">{{i.title}}</a></ng-container>
                <ng-container *ngIf="!i.link">{{i.title}}</ng-container>
            </nz-breadcrumb-item>
        </nz-breadcrumb>
    </ng-container>
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
export class ProHeaderComponent implements OnInit {

    // region fields

    @Input() title: string;

    /**
     * 自动生成导航，以当前路由从主菜单中定位
     */
    @Input() autoBreadcrumb = true;

    paths: any[] = [];

    @ContentChild('breadcrumb') breadcrumb: TemplateRef<any>;

    @ContentChild('logo') logo: TemplateRef<any>;

    @ContentChild('action') action: TemplateRef<any>;

    @ContentChild('content') content: TemplateRef<any>;

    @ContentChild('extra') extra: TemplateRef<any>;

    @ContentChild('tab') tab: TemplateRef<any>;

    // endregion

    constructor(
        private route: Router,
        private menuSrv: MenuService,
        private translatorSrv: TranslatorService) {}

    private genBreadcrumb() {
        if (this.breadcrumb || !this.autoBreadcrumb) return;
        const menus = this.menuSrv.getPathByUrl(this.route.url);
        if (menus.length <= 0) return ;
        const paths: any[] = [];
        menus.forEach(item => {
            let title;
            if (item.translate) title = this.translatorSrv.fanyi(item.translate);
            paths.push({ title: title || item.text, link: item.link && [ item.link ] });
        });
        // add home
        paths.splice(0, 0, {
            title: this.translatorSrv.fanyi('home') || 'Home',
            link: [ '/' ]
        });
        this.paths = paths;
    }

    ngOnInit() {
        this.genBreadcrumb();
    }
}
