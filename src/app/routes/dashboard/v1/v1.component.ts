import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SettingsService, User, _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';
import { catchError } from 'rxjs';
import { SseService } from 'src/app/shared/services/sse.service';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardV1Component implements OnInit {
  get user(): User {
    return this.settings.user;
  }

  // user_email = localStorage.getItem('email');

  type: number | undefined;
  switch({ index }: NzTabChangeEvent): void {
    this.type = index!;
  }

  exposureList = [];
  rateList = [];

  constructor(private settings: SettingsService, private sseService: SseService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.sseService
      .getServerSentEvent(`${environment.api['serverUrl']}sse`)
      .pipe(catchError(async err => console.log('err', err)))
      .subscribe(res => {
        try {
          const data = JSON.parse(JSON.parse(res.data).msg);
          if (data.event === 'exposure') {
            this.exposureList = JSON.parse(data.data);
          } else if (data.event === 'current_rate') {
            this.rateList = JSON.parse(data.data);
          }
          this.cdr.detectChanges();
        } catch (err) {
          console.log(err);
        }
      });
  }
}
