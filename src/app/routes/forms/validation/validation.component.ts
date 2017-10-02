import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';

const USERDATA = {
    nickname: 'test',
    email: 'cipchk@qq.com',
    password: '123',
    checkPassword: '123',
    phoneNumberPrefix: '+86',
    phoneNumber: '123',
    website: 'http://asdfblog.com',
    captcha: '123',
    agree: true,
    start: new Date(),
    end: new Date()
};

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html'
})
export class ValidationComponent implements OnInit {
    form: FormGroup;
    loading = false;

    _submitForm() {
        // tslint:disable-next-line:forin
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        console.log('log', this.form.value);
        if (this.form.valid) {
            this.msg.success('Successed!');
        } else {
            this.msg.error('Fail!');
        }
    }

    nicknameValidator = (control: FormControl): Observable<any>  => {
        return control
                .valueChanges
                .debounceTime(500)
                .map((value) => {
                    if (value !== 'cipchk') {
                        control.setErrors({ checked: true, error: true });
                        return ;
                    }
                    control.setErrors(null);
                });
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.form.controls['password'].value) {
            return { confirm: true, error: true };
        }
    }

    getFormControl(name: string) {
        return this.form.controls[name];
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: [null, [Validators.email]],
            password: [null, [Validators.required]],
            checkPassword: [null, Validators.compose([Validators.required, this.confirmationValidator])],
            nickname: [null, Validators.compose([Validators.required, Validators.minLength(6)]), this.nicknameValidator.bind(this)],
            phoneNumberPrefix: ['+86', [Validators.required]],
            phoneNumber: [null, [Validators.required]],
            website: ['asdf', [Validators.required]],
            start: [null, [Validators.required]],
            end: [null, [Validators.required]],
            status: [null, [Validators.required]],
            captcha: [null, [Validators.required]],
            agree: [true, [Validators.requiredTrue]]
        }, );
    }

    loadData() {
        this.loading = true;
        Observable.of(USERDATA)
            .delay(1000)
            .subscribe(data => {
                this.loading = false;
                this.form.reset(data);
            });
    }

    getCaptcha(e: MouseEvent) {
        e.preventDefault();
    }

    constructor(private fb: FormBuilder, private msg: NzMessageService) { }
}
