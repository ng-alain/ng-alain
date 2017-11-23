import { Component, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
    selector: 'global-footer',
    template: `
    <div *ngIf="links && links.length > 0" class="links">
        <a *ngFor="let i of links" routerLink="{{i.href}}" [attr.target]="i.blankTarget">{{i.title}}</a>
    </div>
    <div *ngIf="copyright" class="copyright"><ng-template [ngTemplateOutlet]="copyright"></ng-template></div>
    `,
    styleUrls: [ './global-footer.less' ]
})
export class GlobalFooterComponent {

    @Input() links: { title: string, href: string, blankTarget?: boolean }[];

    @ContentChild('copyright') copyright: TemplateRef<any>;

}
