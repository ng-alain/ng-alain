import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-basic-form',
    templateUrl: './basic-form.component.html'
})
export class BasicFormComponent implements OnInit {

    form: FormGroup;
    submitting = false;

    constructor(private fb: FormBuilder, private msg: NzMessageService) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            title: [ null, [ Validators.required ] ],
            goal: [ null, [ Validators.required ] ],
            standard: [ null, [ Validators.required ] ],
            client: [ null, [  ] ],
            invites: [ null, [  ] ],
            weight: [ null, [  ] ],
            public: [ 1, [ Validators.min(1), Validators.max(3) ] ],
            publicUsers: [ null, [ ] ]
        });
    }

    submit() {
        for (const i in this.form.controls) {
            this.form.controls[ i ].markAsDirty();
            this.form.controls[ i ].updateValueAndValidity();
        }
        if (this.form.invalid) return;
        this.submitting = true;
        setTimeout(() => {
            this.submitting = false;
            this.msg.success(`提交成功`);
        }, 1000);
    }
}
