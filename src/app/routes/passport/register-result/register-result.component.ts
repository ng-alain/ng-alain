import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nPipe } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'passport-register-result',
  templateUrl: './register-result.component.html',
  imports: [RouterLink, I18nPipe, NzButtonModule, NzResultModule]
})
export class UserRegisterResultComponent {
  readonly msg = inject(NzMessageService);
  @Input() email = '';
}
