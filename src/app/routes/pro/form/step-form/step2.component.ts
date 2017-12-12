import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransferService } from './transfer.service';

@Component({
    selector: 'app-step2',
    template: `
    <form nz-form [formGroup]="form" (ngSubmit)="_submitForm()">
        <nz-alert class="pb-lg" [nzMessage]="'确认转账后，资金将直接打入对方账户，无法退回。'" [nzShowIcon]="true" [nzCloseable]="true"></nz-alert>
        <div nz-form-item nz-row class="mb-sm">
            <div nz-form-label nz-col [nzSm]="4"><label>付款账户</label></div>
            <div nz-form-control nz-col [nzSm]="20"><span nz-form-text>{{item.pay_account}}</span></div>
        </div>
        <div nz-form-item nz-row class="mb-sm">
            <div nz-form-label nz-col [nzSm]="4"><label>账户类型</label></div>
            <div nz-form-control nz-col [nzSm]="20"><span nz-form-text>{{item.receiver_type==='alipay' ? '支付宝' : '银行'}}</span></div>
        </div>
        <div nz-form-item nz-row class="mb-sm">
            <div nz-form-label nz-col [nzSm]="4"><label>收款账户</label></div>
            <div nz-form-control nz-col [nzSm]="20"><span nz-form-text>{{item.receiver_account}}</span></div>
        </div>
        <div nz-form-item nz-row class="mb-sm">
            <div nz-form-label nz-col [nzSm]="4"><label>收款人姓名</label></div>
            <div nz-form-control nz-col [nzSm]="20"><span nz-form-text>{{item.receiver_name}}</span></div>
        </div>
        <div nz-form-item nz-row class="mb-sm">
            <div nz-form-label nz-col [nzSm]="4"><label>转账金额</label></div>
            <div nz-form-control nz-col [nzSm]="20">
                <strong class="text-lg" nz-form-text>{{item.amount}}</strong>
            </div>
        </div>
        <div nz-form-item nz-row class="border-top-1 mt-lg pt-lg">
            <div nz-form-label nz-col [nzSm]="4">
                <label for="password" nz-form-item-required>支付密码</label>
            </div>
            <div nz-form-control nz-col [nzSm]="20" nzHasFeedback [nzValidateStatus]="password">
                <nz-input formControlName="password" nzSize="large" nzType="password" nzId="password"></nz-input>
                <ng-container *ngIf="password.dirty || password.touched">
                    <p nz-form-explain *ngIf="password.errors?.required">请输入密码</p>
                    <p nz-form-explain *ngIf="password.errors?.minlength">至少6位数以上</p>
                </ng-container>
            </div>
        </div>
        <div nz-form-item nz-row>
            <div nz-form-control nz-col [nzSpan]="20" [nzOffset]="4">
                <button nz-button [nzType]="'primary'" nzSize="large" [nzLoading]="loading" [disabled]="form.invalid">提交</button>
                <button nz-button (click)="prev()" nzSize="large">上一步</button>
            </div>
        </div>
    </form>
    `
})
export class Step2Component implements OnInit {
    form: FormGroup;
    loading = false;

    constructor(private fb: FormBuilder, public item: TransferService) {}

    ngOnInit() {
        this.form = this.fb.group({
            password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
        });
        this.form.patchValue(this.item);
    }

    //#region get form fields
    get password() { return this.form.controls.password; }
    //#endregion

    _submitForm() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            ++this.item.step;
        }, 1000 * 2);
    }

    prev() {
        --this.item.step;
    }
}
