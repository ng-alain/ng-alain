import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-result-success',
  templateUrl: './success.component.html'
})
export class ProResultSuccessComponent {
  constructor(public msg: NzMessageService) {}
}
