import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { I18NService } from '@core/i18n/i18n.service';

@Component({
  selector: 'passport-register-result',
  templateUrl: './register-result.component.html',
})
export class UserRegisterResultComponent {
  email = '';
  constructor(
    route: ActivatedRoute,
    i18n: I18NService,
    public msg: NzMessageService,
  ) {
    this.email = i18n.fanyi('app.register-result.msg', {
      email: route.snapshot.queryParams.email || 'ng-alain@example.com',
    });
  }
}
