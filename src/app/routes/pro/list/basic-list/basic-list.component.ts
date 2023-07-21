import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

import { ProBasicListEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProBasicListComponent implements OnInit {
  q = {
    q: '',
    status: 'all'
  };
  loading = false;
  data: Array<{
    id: number;
    title: string;
    subDescription: string;
    href: string;
    logo: string;
    owner: string;
    createdAt: Date;
    percent: number;
    status: string;
  }> = [];

  constructor(
    private http: _HttpClient,
    private msg: NzMessageService,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.http.get('/api/list', { count: 5 }).subscribe(res => {
      this.data = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  openEdit(record: { id?: number } = {}): void {
    this.modal.create(ProBasicListEditComponent, { record }, { size: 'md' }).subscribe(res => {
      if (record.id) {
        record = { ...record, id: 'mock_id', percent: 0, ...res };
      } else {
        this.data.splice(0, 0, res);
        this.data = [...this.data];
      }
      this.cdr.detectChanges();
    });
  }

  remove(title: string): void {
    this.msg.success(`删除：${title}`);
  }
}
