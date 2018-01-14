import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

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

    constructor(public msg: NzMessageService, private http: _HttpClient) {}

    ngOnInit() {
        this.http.get('/profile/advanced').subscribe((res: any) => this.data = res);
    }
}
