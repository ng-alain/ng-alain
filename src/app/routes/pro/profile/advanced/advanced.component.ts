import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ProfileService } from '_mock/profile.service';

@Component({
    selector: 'pro-profile-advanced',
    templateUrl: './advanced.component.html'
})
export class ProProfileAdvancedComponent implements OnInit {
    data = {};

    constructor(private apiSrv: ProfileService, public msg: NzMessageService) {}

    ngOnInit() {
        this.data = this.apiSrv.getProfileAdvancedData();
    }
}
