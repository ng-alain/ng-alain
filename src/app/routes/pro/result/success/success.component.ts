import { Component, inject } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-result-success',
  templateUrl: './success.component.html'
})
export class ProResultSuccessComponent {
  readonly msg = inject(NzMessageService);
}
