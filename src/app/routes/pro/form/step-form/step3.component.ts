import { Component } from '@angular/core';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component {
  constructor(public item: TransferService) {}
}
