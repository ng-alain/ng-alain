import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-extras-settings',
  templateUrl: './settings.component.html'
})
export class ExtrasSettingsComponent implements OnInit {
  active = 1;
  profileForm = this.fb.nonNullable.group({
    name: ['', Validators.compose([Validators.required, Validators.pattern(`^[-_a-zA-Z0-9]{4,20}$`)])],
    email: '',
    bio: ['', Validators.maxLength(160)],
    url: '',
    company: '',
    location: ''
  });
  pwd = {
    old_password: '',
    new_password: '',
    confirm_new_password: ''
  };
  // Email
  primary_email = 'cipchk@qq.com';

  constructor(
    private fb: FormBuilder,
    public msg: NzMessageService
  ) {}

  profileSave(value: any): void {
    console.log('profile value', value);
  }

  pwdSave(): void {
    if (!this.pwd.old_password) {
      this.msg.error('invalid old password');
      return;
    }
    if (!this.pwd.new_password) {
      this.msg.error('invalid new password');
      return;
    }
    if (!this.pwd.confirm_new_password) {
      this.msg.error('invalid confirm new password');
      return;
    }
    console.log('pwd value', this.pwd);
  }

  ngOnInit(): void {
    this.profileForm.patchValue({
      name: 'cipchk',
      email: 'cipchk@qq.com'
    });
  }
}
