import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-order-setting',
  templateUrl: './order-setting.component.html'
})
export class OrderSettingComponent {
  @ViewChild('st') private st!: STComponent;
  orders: STData[] = [
    {
      cp: 'Bitflyer',
      symbol: 'BTC',
      bid: 0,
      ask: 0,
      amount: 1,
      interval: 0.5
    },
    {
      cp: 'Okex',
      symbol: 'BTC',
      bid: 100,
      ask: 100,
      amount: 0.2,
      interval: 1
    },
    {
      cp: 'Huobi',
      symbol: 'BTC',
      bid: 100,
      ask: 100,
      amount: 0.2,
      interval: 1
    },
    {
      cp: 'Liquid',
      symbol: 'BTC',
      bid: 100,
      ask: 100,
      amount: 0.2,
      interval: 1
    },
    {
      cp: 'CoinCheck',
      symbol: 'BTC',
      bid: 100,
      ask: 100,
      amount: 1,
      interval: 1
    },
    {
      cp: 'CG',
      symbol: 'BTC',
      bid: 100,
      ask: 100,
      amount: 1,
      interval: 1
    }
  ];
  oColumns: STColumn[] = [
    { title: 'CP', index: 'cp', render: 'cpTpl', sort: { compare: (a, b) => a.cp.localeCompare(b.cp) } },
    { title: 'Symbol', index: 'symbol', render: 'symbolTpl', sort: { compare: (a, b) => a.symbol.localeCompare(b.symbol) } },
    { title: 'Bid', index: 'bid', render: 'bidTpl', sort: true },
    { title: 'Ask', index: 'ask', render: 'askTpl', sort: true },
    { title: 'Amount', index: 'amount', render: 'amountTpl', sort: true },
    { title: 'Interval', index: 'interval', render: 'intervalTpl', sort: true },
    {
      title: 'Action',
      buttons: [
        {
          // text: 'Update',
          icon: 'edit',
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true)
        },
        {
          // text: 'Delete',
          icon: 'delete',
          iif: i => !i.edit,
          pop: {
            title: 'Are you sure?',
            okType: 'danger'
          },
          click: i => this.deleteRow(i)
        },
        {
          text: 'Save',
          iif: i => i.edit,
          click: i => {
            this.submit(i);
          }
        },
        {
          text: 'Cancel',
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

  private deleteRow(i: STData): void {
    this.st.removeRow(i);
  }
}
