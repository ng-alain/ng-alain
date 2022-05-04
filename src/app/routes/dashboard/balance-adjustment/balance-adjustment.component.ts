import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-balance-adjustment',
  templateUrl: './balance-adjustment.component.html'
})
export class BalanceAdjustmentComponent {
  @ViewChild('st') private st!: STComponent;
  balance: STData[] = [
    {
      cp: 'Bitflyer',
      symbol: 'XRP',
      amount: 50000000
    },
    {
      cp: 'Okex',
      symbol: 'XRP',
      amount: 0
    },
    {
      cp: 'Huobi',
      symbol: 'XRP',
      amount: 0
    },
    {
      cp: 'Liquid',
      symbol: 'XRP',
      amount: 0
    },
    {
      cp: 'CoinCheck',
      symbol: 'XRP',
      amount: 0
    },
    {
      cp: 'CG',
      symbol: 'XRP',
      amount: 0
    }
  ];
  bColumns: STColumn[] = [
    { title: 'CP', index: 'cp' },
    { title: 'Symbol', index: 'symbol', render: 'symbolTpl' },
    { title: 'Amount', index: 'amount', render: 'amountTpl'.toLocaleString() },
    {
      title: 'Action',
      buttons: [
        {
          text: `Update`,
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true)
        },
        {
          text: `Save`,
          iif: i => i.edit,
          click: i => {
            this.submit(i);
          }
        },
        {
          text: `Cancel`,
          iif: i => i.edit,
          click: i => this.updateEdit(i, false)
        }
      ]
    }
  ];
  constructor(private msg: NzMessageService) {}

  private submit(i: STData): void {
    this.msg.success(JSON.stringify(this.st.pureItem(i)));
    this.updateEdit(i, false);
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }
}
