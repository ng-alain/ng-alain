import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'pro-user-register-result',
    templateUrl: './register-result.component.html',
    styleUrls: [ './register-result.component.less' ]
})
export class ProUserRegisterResultComponent {
    constructor(public msg: NzMessageService) {}
}
