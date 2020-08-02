import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-list-articles',
  templateUrl: './articles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProListArticlesComponent implements OnInit {
  // endregion

  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef) {}
  q = {
    ps: 5,
    categories: [],
    owners: ['zxx'],
    user: '',
    rate: '',
  };

  list: any[] = [];
  loading = false;

  // region: cateogry
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
    { id: 12, text: '类目十二', value: false },
  ];
  // endregion

  // region: owners
  owners = [
    {
      id: 'wzj',
      name: '我自己',
    },
    {
      id: 'wjh',
      name: '吴家豪',
    },
    {
      id: 'zxx',
      name: '周星星',
    },
    {
      id: 'zly',
      name: '赵丽颖',
    },
    {
      id: 'ym',
      name: '姚明',
    },
  ];

  changeCategory(status: boolean, idx: number): void {
    if (idx === 0) {
      this.categories.map((i) => (i.value = status));
    } else {
      this.categories[idx].value = status;
    }
  }

  setOwner(): void {
    this.q.owners = [`wzj`];
    // TODO: wait nz-dropdown OnPush mode
    setTimeout(() => this.cdr.detectChanges());
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(more: boolean = false): void {
    this.loading = true;
    this.http.get('/api/list', { count: this.q.ps }).subscribe((res) => {
      this.list = more ? this.list.concat(res) : res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
