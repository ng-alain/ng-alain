import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { getProfileAdvancedData } from '../../../../../../_mock/profile.service';

@Component({
    selector: 'pro-profile-advanced',
    templateUrl: './advanced.component.html'
})
export class ProProfileAdvancedComponent implements OnInit {
    data = {
        advancedOperation1: [],
        advancedOperation2: [],
        advancedOperation3: []
    };

    constructor(public msg: NzMessageService) {}

    ngOnInit() {
        this.data = getProfileAdvancedData();
    }
}
