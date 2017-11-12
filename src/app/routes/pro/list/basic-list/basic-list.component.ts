import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { APIService } from '_mock/api.service';

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

    constructor(private apiSrv: APIService, public msg: NzMessageService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loading = true;
        setTimeout(() => {
            this.data = this.apiSrv.getFakeList(5);
            this.loading = false;
        }, 1000);
    }
}
