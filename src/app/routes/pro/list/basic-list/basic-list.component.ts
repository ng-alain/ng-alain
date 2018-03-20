import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'pro-basic-list',
    templateUrl: './basic-list.component.html',
    styleUrls: [ './basic-list.component.less' ]
})
export class ProBasicListComponent implements OnInit {
    q: any = {
        status: 'all'
    };
    loading = false;
    data: any[] = [];

    constructor(private http: _HttpClient, public msg: NzMessageService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loading = true;
        this.http.get('/api/list', { count: 5 }).subscribe((res: any) => {
            this.data = res;
            this.loading = false;
        });
    }
}
