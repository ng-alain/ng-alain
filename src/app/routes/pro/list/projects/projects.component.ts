import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProListProjectsComponent implements OnInit {
  private readonly http = inject(_HttpClient);
  readonly msg = inject(NzMessageService);
  private readonly cdr = inject(ChangeDetectorRef);

  q = {
    ps: 8,
    categories: [],
    owners: ['zxx'],
    user: null,
    rate: null
  };
  list: any[] = [];
  loading = true;

  categories = [
    { id: 0, text: '全部', value: false },
    { id: 1, text: '类目一', value: false },
    { id: 2, text: '类目二', value: false },
    { id: 3, text: '类目三', value: false },
    { id: 4, text: '类目四', value: false },
    { id: 5, text: '类目五', value: false },
    { id: 6, text: '类目六', value: false },
    { id: 7, text: '类目七', value: false },
    { id: 8, text: '类目八', value: false },
    { id: 9, text: '类目九', value: false },
    { id: 10, text: '类目十', value: false },
    { id: 11, text: '类目十一', value: false },
    { id: 12, text: '类目十二', value: false }
  ];

  changeCategory(status: boolean, idx: number): void {
    if (idx === 0) {
      this.categories.map(i => (i.value = status));
    } else {
      this.categories[idx].value = status;
    }
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.http.get('/api/list', { count: this.q.ps }).subscribe(res => {
      this.list = this.list.concat(res);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
