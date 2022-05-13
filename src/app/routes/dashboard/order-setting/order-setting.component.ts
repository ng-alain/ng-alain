import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

interface UpdatedData {
  exchangeId: number;
  status: string;
  values: string;
}

interface UpdatedValues {
  symbol: string;
  bid: string;
  ask: string;
  amount: string;
  interval: string;
}

@Component({
  selector: 'app-order-setting',
  templateUrl: './order-setting.component.html'
})
export class OrderSettingComponent implements OnInit {
  list: any;
  valuelist: any;
  updatevalue: any;
  values: any[] = [];
  orders: STData[] = [];
  updatedData: UpdatedData = {
    exchangeId: 0,
    status: '',
    values: ''
  };
  updatedValues: UpdatedValues = {
    symbol: '',
    bid: '',
    ask: '',
    amount: '',
    interval: ''
  };

  @ViewChild('st') private st!: STComponent;
  constructor(private msg: NzMessageService, private http: HttpClient, public _router: Router, public _location: Location) {}
  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);

  ngOnInit(): void {
    this.getOrderSetting();
  }

  oColumns: STColumn[] = [
    { title: 'Exchange', type: 'date', index: 'exchange', render: 'exchangeTpl', sort: { compare: (a, b) => a.cp.localeCompare(b.cp) } },
    { title: 'Symbol', type: 'date', index: 'symbol', render: 'symbolTpl', sort: { compare: (a, b) => a.symbol.localeCompare(b.symbol) } },
    { title: 'Bid', type: 'date', index: 'bid', render: 'bidTpl', sort: true },
    { title: 'Ask', type: 'date', index: 'ask', render: 'askTpl', sort: true },
    { title: 'Amount', type: 'date', index: 'amount', render: 'amountTpl', sort: true },
    { title: 'Interval', type: 'date', index: 'interval', render: 'intervalTpl', sort: true },
    {
      title: 'Action',
      type: 'date',
      buttons: [
        {
          icon: 'edit',
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true)
        },
        {
          text: 'Save',
          iif: i => i.edit,
          pop: {
            title: 'Save changes?',
            okType: 'primary'
          },
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

  getOrderSetting() {
    console.log(localStorage.getItem('access_token'));
    this.http
      .get('http://localhost:3000/api/v1/setting/get-exchange-setting?_allow_anonymous=true', { headers: this.headers })
      .subscribe(res => {
        // console.log(res);
        this.list = res;

        this.list.data.map((item: any) => {
          // console.log('item', JSON.parse(item.value));
          this.valuelist = JSON.parse(item.value);
          let exchangeId = item.id;
          let exchange = item.exchange;
          let status = item.status;
          let i = 0;
          this.valuelist.map((item: any) => {
            this.valuelist[i].valueId = (i + 1).toString();
            this.valuelist[i].exchangeId = exchangeId;
            this.valuelist[i].exchange = exchange;
            this.valuelist[i].status = status;
            // console.log('valuelist item', item);
            i++;
          });
          item.value = this.valuelist;
          this.orders = item.value;
          // console.log('listOfData', this.orders);
        });
      });
  }

  refresh(): void {
    this._router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      // console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  private submit(i: STData): void {
    this.updatevalue = this.st.pureItem(i);
    // console.log('updatevalue', this.updatevalue.valueId);
    const updatedOrders = this.orders.map((item: any) => {
      if (item.valueId == this.updatevalue.valueId) {
        return {
          ...item,
          symbol: this.updatevalue.symbol,
          bid: this.updatevalue.bid,
          ask: this.updatevalue.ask,
          amount: this.updatevalue.amount,
          interval: this.updatevalue.interval,
          status: this.updatevalue.status
        };
      }
      return item;
    });
    this.updatedData.exchangeId = this.updatevalue.exchangeId;
    this.updatedData.status = this.updatevalue.status;
    // console.log('updatedOrders: ', updatedOrders, 'updatedData: ', this.updatedData);

    updatedOrders.map((item: any) => {
      this.updatedValues = { symbol: '', bid: '', ask: '', amount: '', interval: '' };
      this.updatedValues.symbol = item.symbol;
      this.updatedValues.bid = item.bid;
      this.updatedValues.ask = item.ask;
      this.updatedValues.amount = item.amount;
      this.updatedValues.interval = item.interval;
      // console.log(this.updatedValues);
      this.values.push(this.updatedValues);
    });
    // console.log('updatedData ', this.updatedData);
    this.updatedData.values = JSON.stringify(this.values);
    // console.log('final updatedData: ', this.updatedData);

    this.http
      .post('http://localhost:3000/api/v1/setting/update-exchange-setting?_allow_anonymous=true', this.updatedData, {
        headers: this.headers
      })
      .subscribe(res => {
        console.log(res);
      });
    this.msg.success('Changes saved!');
    this.updateEdit(i, false);
    this.getOrderSetting();
    this.refresh();
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }
}
