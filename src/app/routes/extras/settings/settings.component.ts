import { NzMessageService } from 'ng-zorro-antd';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-extras-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class ExtrasSettingsComponent {
    active: number = 1;
    profileForm: FormGroup;

    constructor(fb: FormBuilder, public msg: NzMessageService) {
        this.profileForm = fb.group({
            name: [null, Validators.compose([Validators.required, Validators.pattern(`^[-_a-zA-Z0-9]{4,20}$`)])],
            email: '',
            bio: [null, Validators.maxLength(160)],
            url: '',
            company: '',
            location: ''
        });
    }

    get name() { return this.profileForm.get('name'); }

    profileSave(event, value) {
        console.log('profile value', value);
    }

    pwd = {
        old_password: '',
        new_password: '',
        confirm_new_password: ''
    };
    pwdSave() {
        if (!this.pwd.old_password) return this.msg.error('invalid old password');
        if (!this.pwd.new_password) return this.msg.error('invalid new password');
        if (!this.pwd.confirm_new_password) return this.msg.error('invalid confirm new password');
        console.log('pwd value', this.pwd);
    }

    // Email
    primary_email = 'cipchk@qq.com';

    ngOnInit() {
        this.profileForm.patchValue({
            name: 'cipchk',
            email: 'cipchk@qq.com'
        });
    }
}
