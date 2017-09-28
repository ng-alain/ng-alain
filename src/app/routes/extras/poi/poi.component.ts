import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ModalHelper } from '@shared/helper/modal.helper';
import { _HttpClient } from '@core/services/http.client';
import { ExtrasPoiEditComponent } from './edit/edit.component';

@Component({
    selector: 'app-extras-poi',
    templateUrl: './poi.component.html'
})
export class ExtrasPoiComponent implements OnInit {

    list: any[] = [];
    s: any = {
        pi: 1,
        ps: 10,
        s: ''
    };
    total = 0;

    constructor(
        public http: _HttpClient,
        public msgSrv: NzMessageService,
        private modalHelper: ModalHelper) { }

    ngOnInit() {
        this.load();
    }

    load(reload: boolean = false) {
        if (reload) {
            this.s.pi = 1;
        }
        this.http.get('./assets/pois.json', this.s).subscribe((res: any) => {
            this.list = res.data;
            this.total = res.total;
        });
    }

    edit(i) {
        this.modalHelper.static(ExtrasPoiEditComponent, { i }).subscribe(() => {
            this.load();
            this.msgSrv.info('回调，重新发起列表刷新');
        });
    }

    photo(i) {
        this.msgSrv.success('click photo');
    }

    sku(i) {
        this.msgSrv.success('click sku');
    }
}
