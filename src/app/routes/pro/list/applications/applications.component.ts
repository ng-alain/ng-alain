import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { TagSelectComponent } from '@delon/abc/tag-select';
import { _HttpClient } from '@delon/theme';
import { SHARED_IMPORTS } from '@shared';

interface ProListApplicationListItem {
  title: string;
  avatar: string;
  activeUser: string | number;
  newUser: number;
}

@Component({
  selector: 'app-list-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS, TagSelectComponent, DecimalPipe]
})
export class ProListApplicationsComponent implements OnInit {
  private readonly http = inject(_HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);

  q = {
    ps: 8,
    user: null,
    rate: null,
    categories: [],
    owners: ['zxx']
  };

  list: ProListApplicationListItem[] = [];

  loading = true;

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
  // endregion

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.http.get('/api/list', { count: this.q.ps }).subscribe(res => {
      this.list = res.map((item: ProListApplicationListItem) => {
        item.activeUser = this.formatWan(item.activeUser as number);
        return item;
      });
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  private formatWan(val: number): string | number {
    const v = val * 1;
    if (!v || isNaN(v)) {
      return '';
    }

    let result: number | string = val;
    if (val > 10000) {
      result = Math.floor(val / 10000);
      result = `${result}`;
    }
    return result;
  }
}
