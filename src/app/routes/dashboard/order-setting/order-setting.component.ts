import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

interface ItemData {
  id: number;
  exchange: string;
  status: number;
  value: [
    {
      symbol: string;
      bid: string;
      ask: string;
      amount: string;
      interval: string;
    }
  ];
}

@Component({
  selector: 'app-order-setting',
  templateUrl: './order-setting.component.html'
})
export class OrderSettingComponent implements OnInit {
  editCache: { [key: number]: { edit: boolean; data: ItemData } } = {};
  list: any;
  valuelist: any;
  listOfData: ItemData[] = [];

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  // export class OrderSettingComponent {
  // @ViewChild('st') private st!: STComponent;
  constructor(private msg: NzMessageService, private http: HttpClient) {}
  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
  ngOnInit(): void {
    console.log(localStorage.getItem('access_token'));
    this.http
      .get('http://localhost:3000/api/v1/setting/get-exchange-setting?_allow_anonymous=true', { headers: this.headers })
      .subscribe(res => {
        console.log(res);
        this.list = res;

        this.list.data.map((item: { value: any }) => {
          console.log('item', JSON.parse(item.value));
          this.valuelist = JSON.parse(item.value);
          item.value = this.valuelist;
        });
        this.listOfData = this.list.data;
        console.log('valuelist', this.listOfData);
      });
    this.updateEditCache();
  }

  // orders: STData[] = [
  //   {
  //     id: 1,
  //     exchange: 'Bitflyer',
  //     status: 'A',
  //     value: [
  //       {
  //         symbol: 'BTC',
  //         bid: 1000000,
  //         ask: 1000000,
  //         amount: 0.001,
  //         interval: 1
  //       },
  //       {
  //         symbol: 'ETH',
  //         bid: 1000000,
  //         ask: 1000000,
  //         amount: 0.001,
  //         interval: 1
  //       },
  //       {
  //         symbol: 'XRP',
  //         bid: 1000000,
  //         ask: 1000000,
  //         amount: 0.001,
  //         interval: 1
  //       }
  //     ]
  // }
  //   cp: 'Bitflyer',
  //   symbol: 'BTC',
  //   bid: 0,
  //   ask: 0,
  //   amount: 1,
  //   interval: 0.5
  // },
  // {
  //   cp: 'Okex',
  //   symbol: 'BTC',
  //   bid: 100,
  //   ask: 100,
  //   amount: 0.2,
  //   interval: 1
  // },
  // {
  //   cp: 'Huobi',
  //   symbol: 'BTC',
  //   bid: 100,
  //   ask: 100,
  //   amount: 0.2,
  //   interval: 1
  // },
  // {
  //   cp: 'Liquid',
  //   symbol: 'BTC',
  //   bid: 100,
  //   ask: 100,
  //   amount: 0.2,
  //   interval: 1
  // },
  // {
  //   cp: 'CoinCheck',
  //   symbol: 'BTC',
  //   bid: 100,
  //   ask: 100,
  //   amount: 1,
  //   interval: 1
  // },
  // {
  //   cp: 'CG',
  //   symbol: 'BTC',
  //   bid: 100,
  //   ask: 100,
  //   amount: 1,
  //   interval: 1
  // }
  // ];
  //   oColumns: STColumn[] = [
  //     { title: 'Exchange', index: 'exchange', sort: { compare: (a, b) => a.cp.localeCompare(b.cp) } },
  //     {
  //       title: 'Symbol',
  //       index: 'value',
  //       sort: { compare: (a, b) => a.symbol.localeCompare(b.symbol) }
  //     },
  //     { title: 'Bid', index: 'value.bid', sort: true },
  //     { title: 'Ask', index: 'value.ask', sort: true },
  //     { title: 'Amount', index: 'value.amount', sort: true },
  //     { title: 'Interval', index: 'value.interval', sort: true },
  //     {
  //       title: 'Action',
  //       buttons: [
  //         {
  //           // text: 'Update',
  //           icon: 'edit',
  //           iif: i => !i.edit,
  //           click: i => this.updateEdit(i, true)
  //         },
  //         {
  //           // text: 'Delete',
  //           icon: 'delete',
  //           iif: i => !i.edit,
  //           pop: {
  //             title: 'Are you sure?',
  //             okType: 'danger'
  //           },
  //           click: i => this.deleteRow(i)
  //         },
  //         {
  //           text: 'Save',
  //           iif: i => i.edit,
  //           click: i => {
  //             this.submit(i);
  //           }
  //         },
  //         {
  //           text: 'Cancel',
  //           iif: i => i.edit,
  //           click: i => this.updateEdit(i, false)
  //         }
  //       ]
  //     }
  //   ];

  //   private submit(i: STData): void {
  //     this.msg.success(JSON.stringify(this.st.pureItem(i)));
  //     this.updateEdit(i, false);
  //   }

  //   private updateEdit(i: STData, edit: boolean): void {
  //     this.st.setRow(i, { edit }, { refreshSchema: true });
  //   }

  //   private deleteRow(i: STData): void {
  //     this.st.removeRow(i);
  //   }
  // }
  // function subscribe(arg0: (res: any) => void) {
  //   throw new Error('Function not implemented.');
  // }
  // function item(item: any) {
  //   throw new Error('Function not implemented.');
  // }
}
