import { Component, OnInit, inject } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { G2MiniBarData } from '@delon/chart/mini-bar';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-st',
  templateUrl: './st.component.html'
})
export class STDemoComponent implements OnInit {
  readonly http = inject(_HttpClient);
  private readonly message = inject(NzMessageService);

  ps = 20;
  total = 200; // mock total
  args = { _allow_anonymous: true, userid: null };
  url = `https://api.randomuser.me/?results=20`;
  events: G2MiniBarData[] = [];
  scroll = { y: '230px' };
  columns: STColumn[] = [
    { title: 'id', index: 'id.value', type: 'checkbox' },
    { title: 'Avatar', index: 'picture.thumbnail', type: 'img', width: 80 },
    {
      title: 'Name',
      index: 'name.first',
      width: 150,
      format: item => `${item.name.first} ${item.name.last}`,
      type: 'link',
      click: item => this.message.info(`${item.name.first}`)
    },
    { title: 'Email', index: 'email' },
    {
      title: 'Gender',
      index: 'gender',
      type: 'yn',
      yn: {
        truth: 'female',
        yes: '男',
        no: '女',
        mode: 'text'
      },
      width: 120
    },
    { title: 'Events', render: 'events', width: 90 },
    { title: 'Registered', index: 'registered.date', type: 'date', width: 170 },
    {
      title: 'Actions',
      width: 120,
      buttons: [
        {
          text: 'Edit',
          click: item => this.message.info(`edit [${item.id.value}]`),
          iif: item => item.gender === 'female'
        },
        {
          text: 'Delete',
          type: 'del',
          click: item => this.message.info(`deleted [${item.id.value}]`)
        }
      ]
    }
  ];

  ngOnInit(): void {
    this.http.get('/chart/visit').subscribe((res: G2MiniBarData[]) => (this.events = res.slice(0, 8)));
  }

  fullChange(val: boolean): void {
    this.scroll = val ? { y: '350px' } : { y: '230px' };
  }
}
