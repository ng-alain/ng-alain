import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SettingsService, User, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardV1Component {
  @ViewChild('st') private st!: STComponent;
  currentRate = [
    {
      Currency: 'BTCJPY',
      RateLow: 4500000,
      RateHigh: 4550000
    },
    {
      Currency: 'ETHJPY',
      RateLow: 4500000,
      RateHigh: 4550000
    },
    {
      Currency: 'ETHJPY',
      RateLow: 4500000,
      RateHigh: 4550000
    }
  ];
  exposure = [
    {
      CP: 'Bitflyer',
      JPY: 50000000,
      BTC: 0,
      ETH: 0,
      XRP: 0
    },
    {
      CP: 'Okex',
      JPY: 45450000,
      BTC: 1,
      ETH: 0,
      XRP: 0
    },
    {
      CP: 'Huobi',
      JPY: 45000000,
      BTC: 1,
      ETH: 0,
      XRP: 0
    },
    {
      CP: 'Liquid',
      JPY: 49700000,
      BTC: 0,
      ETH: 1,
      XRP: 0
    },
    {
      CP: 'CoinCheck',
      JPY: 50000000,
      BTC: 0,
      ETH: 0,
      XRP: 0
    },
    {
      CP: 'CG',
      JPY: 49300000,
      BTC: 0,
      ETH: 0,
      XRP: 10000
    }
  ];
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
  orderHistory = [
    {
      counterParty: '',
      orderID: '',
      orderTime: '',
      symbol: '',
      side: '',
      orderAmount: '',
      orderPrice: '',
      orderType: '',
      orderResult: ''
    }
  ];
  crColumns: STColumn[] = [
    { title: 'Currency', index: 'Currency' },
    { title: 'Low', index: 'RateLow', type: 'currency' },
    { title: 'High', index: 'RateHigh', type: 'currency' }
  ];
  eColumns: STColumn[] = [
    { title: 'CP', index: 'CP' },
    { title: 'JPY', index: 'JPY', type: 'currency' },
    { title: 'BTC', index: 'BTC', type: 'currency' },
    { title: 'ETH', index: 'ETH', type: 'currency' },
    { title: 'XRP', index: 'XRP', type: 'currency' }
  ];
  oColumns: STColumn[] = [
    { title: 'CP', index: 'cp', render: 'cpTpl' },
    { title: 'Symbol', index: 'symbol', render: 'symbolTpl' },
    { title: 'Bid', index: 'bid', render: 'bidTpl' },
    { title: 'Ask', index: 'ask', render: 'askTpl' },
    { title: 'Amount', index: 'amount', render: 'amountTpl' },
    { title: 'Interval', index: 'interval', render: 'intervalTpl' },
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
  bColumns: STColumn[] = [
    { title: 'CP', index: 'cp', render: 'cpTpl' },
    { title: 'Symbol', index: 'symbol', render: 'symbolTpl' },
    { title: 'Amount', index: 'amount', render: 'amountTpl' },
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
  ohColumns: STColumn[] = [
    { title: 'Counter Party', index: 'counterParty' },
    { title: 'Order ID', index: 'orderID' },
    { title: 'Order Time', index: 'orderTime' },
    { title: 'Symbol', index: 'symbol' },
    { title: 'Side', index: 'side' },
    { title: 'Order Time', index: 'orderTime' },
    { title: 'Order Price', index: 'orderPrice' },
    { title: 'Order Type', index: 'orderType' },
    { title: 'Order Result', index: 'orderResult' }
  ];

  get user(): User {
    return this.settings.user;
  }

  type: number | undefined;
  switch({ index }: NzTabChangeEvent): void {
    this.type = index!;
  }

  constructor(private settings: SettingsService, private msg: NzMessageService) {}

  private submit(i: STData): void {
    this.msg.success(JSON.stringify(this.st.pureItem(i)));
    this.updateEdit(i, false);
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }
}
