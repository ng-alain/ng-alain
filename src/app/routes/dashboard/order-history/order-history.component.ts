import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html'
})
export class OrderHistoryComponent {
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
  constructor() {}
}
