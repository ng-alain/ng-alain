import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResultModule } from '@delon/abc/result';
import { I18nPipe } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'passport-register-result',
  templateUrl: './register-result.component.html',
  standalone: true,
  imports: [RouterLink, I18nPipe, NzButtonModule, ResultModule]
})
export class UserRegisterResultComponent {
  readonly msg = inject(NzMessageService);
  @Input() email = '';
}
