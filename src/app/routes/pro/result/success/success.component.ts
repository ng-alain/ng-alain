import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'app-result-success',
  templateUrl: './success.component.html',
  imports: [...SHARED_IMPORTS, NzResultModule, NzStepsModule]
})
export class ProResultSuccessComponent {
  readonly msg = inject(NzMessageService);
}
