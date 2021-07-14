import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step3Component {
  get item(): TransferService {
    return this.srv;
  }

  constructor(private srv: TransferService) {}
}
