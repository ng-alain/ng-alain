import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageHeaderComponent } from '@delon/abc';

@Component({
    selector: 'pro-list-layout',
    templateUrl: './list.component.html'
})
export class ProListLayoutComponent implements OnInit {
    tabs: any[] = [
        {
            key: 'articles',
            tab: '文章',
        },
        {
            key: 'applications',
            tab: '应用',
        },
        {
            key: 'projects',
            tab: '项目',
        }
    ];

    @ViewChild('ph') ph: PageHeaderComponent;

    pos = 0;

    constructor(private router: Router) {}

    ngOnInit(): void {
        const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
        const idx = this.tabs.findIndex(w => w.key === key);
        if (idx !== -1) this.pos = idx;
    }

    to(item: any) {
        this.router.navigateByUrl(`/pro/list/${item.key}`).then(() =>  this.ph.genBreadcrumb());
    }
}
