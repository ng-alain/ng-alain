import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { SettingsService, User } from '@delon/theme';

@Component({
  selector: 'passport-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.less']
})
export class UserLockComponent {
  f = this.fb.group({
    password: [null, Validators.required]
  });

  get user(): User {
    return this.settings.user;
  }

  constructor(
    private fb: FormBuilder,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private settings: SettingsService,
    private router: Router
  ) {}

  submit(): void {
    this.f.controls.password.markAsDirty();
    this.f.controls.password.updateValueAndValidity();
    if (this.f.valid) {
      console.log('Valid!');
      console.log(this.f.value);
      this.tokenService.set({
        token: '123'
      });
      this.router.navigate(['dashboard']);
    }
  }
}
