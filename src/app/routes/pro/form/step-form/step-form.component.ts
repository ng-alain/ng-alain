import { AfterViewInit, Component } from '@angular/core';

import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.less'],
  providers: [TransferService]
})
export class StepFormComponent implements AfterViewInit {
  get item(): TransferService {
    return this.srv;
  }

  constructor(private srv: TransferService) {}

  ngAfterViewInit(): void {
    console.log('item', this.item);
  }
}
