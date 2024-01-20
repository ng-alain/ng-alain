import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step3Component {
  private readonly srv = inject(TransferService);

  get item(): TransferService {
    return this.srv;
  }
}
