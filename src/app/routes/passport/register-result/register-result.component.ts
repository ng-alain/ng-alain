import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'passport-register-result',
  templateUrl: './register-result.component.html',
  styleUrls: ['./register-result.component.less'],
})
export class UserRegisterResultComponent {
  constructor(public msg: NzMessageService) {}
}
