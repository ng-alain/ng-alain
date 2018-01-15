import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommonResult } from 'app/model/common/common-result';

@Component({
    selector: 'app-dashboard-v1',
    templateUrl: './v1.component.html'
})
export class DashboardV1Component implements OnInit {

    constructor(
        private http: _HttpClient,
        public msg: NzMessageService,
        private _http: HttpClient
    ) { }

    todoData: any[] = [
        { completed: true, avatar: '1', name: '苏先生', content: `请告诉我，我应该说点什么好？` },
        { completed: false, avatar: '2', name: 'はなさき', content: `ハルカソラトキヘダツヒカリ` },
        { completed: false, avatar: '3', name: 'cipchk', content: `this world was never meant for one as beautiful as you.` },
        { completed: false, avatar: '4', name: 'Kent', content: `my heart is beating with hers` },
        { completed: false, avatar: '5', name: 'Are you', content: `They always said that I love beautiful girl than my friends` },
        { completed: false, avatar: '6', name: 'Forever', content: `Walking through green fields ，sunshine in my eyes.` }
    ];

    quickMenu = false;

    webSite: any[] = [];
    salesData: any[] = [];
    offlineChartData: any[] = [];

    ngOnInit() {
        this.http.get('/chart').subscribe((res: any) => {
            this.webSite = res.visitData.slice(0, 10);
            this.salesData = res.salesData;
            this.offlineChartData = res.offlineChartData;
        });
    }
}
