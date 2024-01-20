import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-account-settings-security',
  templateUrl: './security.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProAccountSettingsSecurityComponent {
  readonly msg = inject(NzMessageService);
}
