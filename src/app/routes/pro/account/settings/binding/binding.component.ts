import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-account-settings-binding',
  templateUrl: './binding.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProAccountSettingsBindingComponent {
  readonly msg = inject(NzMessageService);
}
