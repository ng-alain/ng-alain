import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'passport-register-result',
  templateUrl: './register-result.component.html'
})
export class UserRegisterResultComponent {
  constructor(public msg: NzMessageService) {}
}
