import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ProfileService } from '_mock/profile.service';

@Component({
    selector: 'pro-profile-basic',
    templateUrl: './basic.component.html'
})
export class ProProfileBaseComponent implements OnInit {

    basicLoading = true;
    basicNum = 0;
    amountNum = 0;
    data = {};

    constructor(private apiSrv: ProfileService, public msg: NzMessageService) {}

    ngOnInit() {
        this.data = this.apiSrv.getProfileBasicData();
        (<any>this.data).basicGoods.forEach(item => {
            this.basicNum += Number(item.num);
            this.amountNum += Number(item.amount);
        });
        setTimeout(() => this.basicLoading = false, 500);
    }
}
