import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { environment } from '@env/environment';
import { catchError } from 'rxjs';
import { SseService } from 'src/app/shared/services/sse.service';

@Component({
  selector: 'app-exposure',
  templateUrl: './exposure.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExposureComponent {
  @Input() list = [];

  constructor() {}

  findBalance(data: any[], symbol: string) {
    const found = data.find(x => x.symbol === symbol);
    if (found) {
      return found.balance;
    } else {
      return 0;
    }
  }
}
