import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';

@Component({
  selector: 'app-current-rate',
  templateUrl: './current-rate.component.html'
})
export class CurrentRateComponent {
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
  crColumns: STColumn[] = [
    { title: 'Currency', index: 'Currency' },
    { title: 'Low', index: 'RateLow', type: 'currency' },
    { title: 'High', index: 'RateHigh', type: 'currency' }
  ];
  constructor() {}
}
