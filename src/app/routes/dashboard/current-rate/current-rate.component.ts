import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { environment } from '@env/environment';
import { catchError } from 'rxjs';
import { SseService } from 'src/app/shared/services/sse.service';

@Component({
  selector: 'app-current-rate',
  templateUrl: './current-rate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentRateComponent {
  @Input() list = [];

  constructor(private sseService: SseService, private cdr: ChangeDetectorRef) {}
}
