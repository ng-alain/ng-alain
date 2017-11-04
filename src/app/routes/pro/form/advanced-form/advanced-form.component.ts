import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-advanced-form',
    templateUrl: './advanced-form.component.html'
})
export class AdvancedFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.fb.group({
            name: [null, [Validators.required]],
            url: [null, [Validators.required]],
            owner: [null, [Validators.required]],
            approver : [null, [Validators.required]],
            time_start : [null, [Validators.required]],
            time_end : [null, [Validators.required]],
            type : [null, [Validators.required]]
        });
    }

    //#region get form fields
    get name() { return this.form.controls.name; }
    get url() { return this.form.controls.url; }
    get owner() { return this.form.controls.owner; }
    get approver() { return this.form.controls.approver; }
    get time_start() { return this.form.controls.time_start; }
    get time_end() { return this.form.controls.time_end; }
    get type() { return this.form.controls.type; }
    //#endregion

    _submitForm() {
        console.log(this.form.value);
    }

    [key: string]: any;
}
