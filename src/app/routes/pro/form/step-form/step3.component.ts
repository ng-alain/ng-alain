import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '@shared';
import { NzResultModule } from 'ng-zorro-antd/result';

import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS, NzResultModule]
})
export class Step3Component {
  private readonly srv = inject(TransferService);

  get item(): TransferService {
    return this.srv;
  }
}
