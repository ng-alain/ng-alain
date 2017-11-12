import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { APIService } from '_mock/api.service';

@Component({
    selector: 'pro-list-filter-card-list',
    templateUrl: './filter-card-list.component.html',
    styles: [`
    :host ::ng-deep .ant-card-meta-title {
        margin-bottom: 4px;
    }
    :host ::ng-deep nz-list nz-card {
        margin-bottom: 0 !important;
    }
    :host ::ng-deep .card-item-content {
        display: flex;
        margin-top: 16px;
        margin-bottom: -4px;
        line-height: 20px;
        height: 20px;
        justify-content: space-between;
    }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class ProFilterCardListComponent implements OnInit {
    q: any = {
        ps: 8,
        categories: [],
        owners: [ 'zxx' ]
    };

    list: any[] = [ ];

    loading = true;

    // region: cateogry
    categories = [
        { id: 0, text: '全部', value: false },
        { id: 1, text: '类目一', value: false },
        { id: 2, text: '类目二', value: false },
        { id: 3, text: '类目三', value: false },
        { id: 4, text: '类目四', value: false },
        { id: 5, text: '类目五', value: false },
        { id: 6, text: '类目六', value: false },
        { id: 7, text: '类目七', value: false },
        { id: 8, text: '类目八', value: false },
        { id: 9, text: '类目九', value: false },
        { id: 10, text: '类目十', value: false },
        { id: 11, text: '类目十一', value: false },
        { id: 12, text: '类目十二', value: false }
    ];

    changeCategory(status: boolean, idx: number) {
        if (idx === 0) {
            this.categories.map(i => i.value = status);
        } else {
            this.categories[idx].value = status;
        }
        this.getData();
    }
    // endregion

    constructor(private apiSrv: APIService, public msg: NzMessageService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loading = true;
        setTimeout(() => {
            this.list = this.list.concat(this.apiSrv.getFakeList(this.q.ps)).map(item => {
                return item;
            });
            this.loading = false;
        }, 1000);
    }
}
