import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'pro-list-card-list',
  templateUrl: './card-list.component.html',
  styles: [
    `
    :host ::ng-deep .ant-card-meta-title {
      margin-bottom: 12px;
    }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProCardListComponent implements OnInit {
  list: any[] = [null];

  loading = true;

  constructor(private http: _HttpClient, public msg: NzMessageService) {}

  ngOnInit() {
    this.loading = true;
    this.http.get('/api/list', { count: 8 }).subscribe((res: any) => {
      this.list = this.list.concat(res);
      this.loading = false;
    });
  }
}
