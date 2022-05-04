import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';

@Component({
  selector: 'app-exposure',
  templateUrl: './exposure.component.html'
})
export class ExposureComponent {
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
  eColumns: STColumn[] = [
    { title: 'CP', index: 'CP' },
    { title: 'JPY', index: 'JPY', type: 'currency' },
    { title: 'BTC', index: 'BTC', type: 'currency' },
    { title: 'ETH', index: 'ETH', type: 'currency' },
    { title: 'XRP', index: 'XRP', type: 'currency' }
  ];
  constructor() {}
}
