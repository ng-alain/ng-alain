import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SettingsService, User, _HttpClient } from '@delon/theme';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html'
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardV1Component {
  get user(): User {
    return this.settings.user;
  }

  // user_email = localStorage.getItem('email');

  type: number | undefined;
  switch({ index }: NzTabChangeEvent): void {
    this.type = index!;
  }

  constructor(private settings: SettingsService) {}
}
