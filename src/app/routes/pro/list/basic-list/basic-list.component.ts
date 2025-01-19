import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { SHARED_IMPORTS } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPaginationComponent } from 'ng-zorro-antd/pagination';

import { ProBasicListEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS, NzPaginationComponent]
})
export class ProBasicListComponent implements OnInit {
  private readonly http = inject(_HttpClient);
  private readonly msg = inject(NzMessageService);
  private readonly modal = inject(ModalHelper);
  private readonly cdr = inject(ChangeDetectorRef);

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
