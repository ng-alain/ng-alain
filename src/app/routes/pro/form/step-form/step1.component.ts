import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransferService } from './transfer.service';

@Component({
    selector: 'app-step1',
    template: `
    <form nz-form [formGroup]="form" (ngSubmit)="_submitForm()">
        <div nz-form-item nz-row>
            <div nz-form-label nz-col [nzSm]="4">
                <label for="pay_account" nz-form-item-required>付款账户</label>
            </div>
            <div nz-form-control nz-col [nzSm]="20">
                <nz-select formControlName="pay_account" nzSize="large" nzId="pay_account">
                    <nz-option [nzLabel]="item.pay_account" [nzValue]="item.pay_account"></nz-option>
                </nz-select>
            </div>
        </div>
        <div nz-form-item nz-row>
            <div nz-form-label nz-col [nzSm]="4">
                <label for="receiver_account" nz-form-item-required>收款账户</label>
            </div>
            <div nz-form-control nz-col [nzSm]="20" nzHasFeedback [nzValidateStatus]="receiver_account">
                <nz-input-group [nzCompact]="true">
                    <nz-select formControlName="receiver_type" nzSize="large" style="width: 25%;">
                        <nz-option [nzLabel]="'支付宝'" [nzValue]="'alipay'"></nz-option>
                        <nz-option [nzLabel]="'银行账号'" [nzValue]="'bank'"></nz-option>
                    </nz-select>
                    <input formControlName="receiver_account" nzSize="large" id="'receiver_account'" nz-input style="width: 75%;">
                </nz-input-group>
                <p nz-form-explain *ngIf="(receiver_account.dirty || receiver_account.touched) && receiver_account.errors?.required">
                    请输入收款账户
                </p>
            </div>
        </div>
        <div nz-form-item nz-row>
            <div nz-form-label nz-col [nzSm]="4">
                <label for="receiver_name" nz-form-item-required>收款姓名</label>
            </div>
            <div nz-form-control nz-col [nzSm]="20" nzHasFeedback [nzValidateStatus]="receiver_name">
                <nz-input formControlName="receiver_name" nzSize="large" [nzId]="'receiver_name'"></nz-input>
                <ng-container *ngIf="receiver_name.dirty || receiver_name.touched">
                    <p nz-form-explain *ngIf="receiver_name.errors?.required">请输入收款姓名</p>
                    <p nz-form-explain *ngIf="receiver_name.errors?.minlength">至少2个字符以上</p>
                </ng-container>
            </div>
        </div>
        <div nz-form-item nz-row>
            <div nz-form-label nz-col [nzSm]="4">
                <label for="amount" nz-form-item-required>转账金额</label>
            </div>
            <div nz-form-control nz-col [nzSm]="20" nzHasFeedback [nzValidateStatus]="amount">
                <nz-input formControlName="amount" nzSize="large" [nzId]="'amount'">
                    <ng-template #prefix>￥</ng-template>
                </nz-input>
                <ng-container *ngIf="amount.dirty || amount.touched">
                    <p nz-form-explain *ngIf="amount.errors?.required">请输入转账金额</p>
                    <p nz-form-explain *ngIf="amount.errors?.pattern">金额只能是正整数</p>
                    <p nz-form-explain *ngIf="amount.errors?.min">金额最少1元以上</p>
                    <p nz-form-explain *ngIf="amount.errors?.max">金额最多100万以内</p>
                </ng-container>
            </div>
        </div>
        <div nz-form-item nz-row>
            <div nz-form-control nz-col [nzSpan]="20" [nzOffset]="4">
                <button nz-button [nzType]="'primary'" nzSize="large" [disabled]="form.invalid">下一步</button>
            </div>
        </div>
    </form>
    <div class="border-top-1 mt-lg px-lg text-grey-dark">
        <h3 class="h3 my-md">说明</h3>
        <h4 class="h4 mb-sm">转账到支付宝账户</h4>
        <p class="mb-sm">如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
        <h4 class="h4 mb-sm">转账到银行卡</h4>
        <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
    </div>
    `
})
export class Step1Component implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, public item: TransferService) {}

    ngOnInit() {
        this.form = this.fb.group({
            pay_account: [null, Validators.compose([Validators.required, Validators.email])],
            receiver_type: [null, [Validators.required]],
            receiver_account: [null, [Validators.required]],
            receiver_name: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
            amount: [null, Validators.compose([Validators.required, Validators.pattern(`[0-9]+`), Validators.min(1), Validators.max(10000 * 100)])]
        });
        this.form.patchValue(this.item);
    }

    //#region get form fields
    get pay_account() { return this.form.controls['pay_account']; }
    get receiver_type() { return this.form.controls['receiver_type']; }
    get receiver_account() { return this.form.controls['receiver_account']; }
    get receiver_name() { return this.form.controls['receiver_name']; }
    get amount() { return this.form.controls['amount']; }
    //#endregion

    _submitForm() {
        this.item = Object.assign(this.item, this.form.value);
        ++this.item.step;
    }
}
