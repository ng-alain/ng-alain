import { Component } from '@angular/core';
import { TransferService } from './transfer.service';

@Component({
    selector: 'app-step3',
    template: `
    <div class="icon pt-md"><i class="anticon anticon-check-circle text-success icon-lg"></i></div>
    <h1 class="h2 pt-md">操作成功</h1>
    <p class="pt-md text-grey">预计两小时内到账</p>
    <div class="extra mt-md">
        <div nz-row class="mb-md">
            <div nz-col [nzSm]="8" class="text-right">付款账户：</div>
            <div nz-col [nzSm]="16">{{item.pay_account}}</div>
        </div>
        <div nz-row class="mb-md">
            <div nz-col [nzSm]="8" class="text-right">账户类型：</div>
            <div nz-col [nzSm]="16">{{item.receiver_type_str}}</div>
        </div>
        <div nz-row class="mb-md">
            <div nz-col [nzSm]="8" class="text-right">收款账户：</div>
            <div nz-col [nzSm]="16">{{item.receiver_account}}</div>
        </div>
        <div nz-row class="mb-md">
            <div nz-col [nzSm]="8" class="text-right">收款人姓名：</div>
            <div nz-col [nzSm]="16">{{item.receiver_name}}</div>
        </div>
        <div nz-row>
            <div nz-col [nzSm]="8" class="text-right">转账金额：</div>
            <div nz-col [nzSm]="16"><strong class="text-lg pr-sm">{{item.amount}}</strong>元</div>
        </div>
    </div>
    <div nz-row class="my-md py-md">
        <div nz-col>
            <button nz-button (click)="item.again()" nzSize="large" [nzType]="'primary'">再转一笔</button>
            <button nz-button nzSize="large" class="ml-sm">查看账单</button>
        </div>
    </div>
    `
})
export class Step3Component {
    constructor(public item: TransferService) {}
}
