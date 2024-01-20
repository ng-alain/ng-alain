import { AfterViewInit, Component, inject } from '@angular/core';

import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.less'],
  providers: [TransferService]
})
export class StepFormComponent implements AfterViewInit {
  private readonly srv = inject(TransferService);
  get item(): TransferService {
    return this.srv;
  }

  ngAfterViewInit(): void {
    console.log('item', this.item);
  }
}
