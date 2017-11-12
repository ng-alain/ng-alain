import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { APIService } from '_mock/api.service';

@Component({
    selector: 'pro-list-card-list',
    templateUrl: './card-list.component.html',
    styles: [`
    :host ::ng-deep .ant-card-meta-title {
        margin-bottom: 12px;
    }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class ProCardListComponent implements OnInit {

    list: any[] = [ null ];

    loading = true;

    constructor(private apiSrv: APIService, public msg: NzMessageService) {}

    ngOnInit() {
        setTimeout(() => {
            this.list = this.list.concat(this.apiSrv.getFakeList(8));
            this.loading = false;
        }, 1000);
    }
}
