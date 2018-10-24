import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { ProBasicListEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.less'],
})
export class ProBasicListComponent implements OnInit {
  q: any = {
    status: 'all',
  };
  loading = false;
  data: any[] = [];

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modal: ModalHelper,
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get('/api/list', { count: 5 }).subscribe((res: any) => {
      this.data = res;
      this.loading = false;
    });
  }

  openEdit(i: any = {}) {
    this.modal
      .create(ProBasicListEditComponent, { i }, { size: 'md' })
      .subscribe(res => {
        if (i.id) {
          i = Object.assign(i, { id: 'mock_id', percent: 0 }, res);
        } else {
          this.data.splice(0, 0, res);
          this.data = [...this.data];
        }
      });
  }
}
