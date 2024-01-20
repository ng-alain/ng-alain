import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { I18nPipe, SettingsService, User } from '@delon/theme';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'passport-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.less'],
  standalone: true,
  imports: [ReactiveFormsModule, I18nPipe, NzAvatarModule, NzFormModule, NzGridModule, NzButtonModule, NzInputModule]
})
export class UserLockComponent {
  private readonly tokenService = inject(DA_SERVICE_TOKEN);
  private readonly settings = inject(SettingsService);
  private readonly router = inject(Router);

  f = new FormGroup({
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  get user(): User {
    return this.settings.user;
  }

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
