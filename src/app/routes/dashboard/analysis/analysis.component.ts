import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { I18NService } from '@core';
import { STColumn } from '@delon/abc/st';
import { ALAIN_I18N_TOKEN, _HttpClient } from '@delon/theme';
import { getTimeDistance } from '@delon/util/date-time';
import { deepCopy } from '@delon/util/other';
import { yuan } from '@shared';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dashboard-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardAnalysisComponent implements OnInit {
  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private cdr: ChangeDetectorRef
  ) {}
  data: any = {};
  loading = true;
  dateRange: Date[] = [];
  dateRangeTypes = ['today', 'week', 'month', 'year'];
  dateRangeType = this.dateRangeTypes[0];
  rankingListData: Array<{ title: string; total: number }> = Array(7)
    .fill({})
    .map((_, i) => {
      return {
        title: this.i18n.fanyi('app.analysis.test', { no: i }),
        total: 323234
      };
    });
  titleMap = {
    y1: this.i18n.fanyi('app.analysis.traffic'),
    y2: this.i18n.fanyi('app.analysis.payments')
  };
  searchColumn: STColumn[] = [
    { title: { text: '排名', i18n: 'app.analysis.table.rank' }, index: 'index' },
    {
      title: { text: '搜索关键词', i18n: 'app.analysis.table.search-keyword' },
      index: 'keyword',
      click: item => this.msg.success(item.keyword)
    },
    {
      type: 'number',
      title: { text: '用户数', i18n: 'app.analysis.table.users' },
      index: 'count',
      sort: {
        compare: (a, b) => a.count - b.count
      }
    },
    {
      type: 'number',
      title: { text: '周涨幅', i18n: 'app.analysis.table.weekly-range' },
      index: 'range',
      render: 'range',
      sort: {
        compare: (a, b) => a.range - b.range
      }
    }
  ];

  salesType = 'all';
  salesPieData: any;
  salesTotal = 0;

  saleTabs: Array<{ key: string; show?: boolean }> = [{ key: 'sales', show: true }, { key: 'visits' }];

  offlineIdx = 0;

  ngOnInit(): void {
    this.http.get('/chart').subscribe(res => {
      res.offlineData.forEach((item: any, idx: number) => {
        item.show = idx === 0;
        item.chart = deepCopy(res.offlineChartData);
      });
      this.data = res;
      this.loading = false;
      this.changeSaleType();
    });
  }

  setDate(type: string): void {
    this.dateRange = getTimeDistance(type as NzSafeAny);
    this.dateRangeType = type;
    setTimeout(() => this.cdr.detectChanges());
  }
  changeSaleType(): void {
    this.salesPieData =
      this.salesType === 'all'
        ? this.data.salesTypeData
        : this.salesType === 'online'
        ? this.data.salesTypeDataOnline
        : this.data.salesTypeDataOffline;
    if (this.salesPieData) {
      this.salesTotal = this.salesPieData.reduce((pre: number, now: { y: number }) => now.y + pre, 0);
    }
    this.cdr.detectChanges();
  }

  handlePieValueFormat(value: string | number): string {
    return yuan(value);
  }
  salesChange(idx: number): void {
    if (this.saleTabs[idx].show !== true) {
      this.saleTabs[idx].show = true;
      this.cdr.detectChanges();
    }
  }
  offlineChange(idx: number): void {
    if (this.data.offlineData[idx].show !== true) {
      this.data.offlineData[idx].show = true;
      this.cdr.detectChanges();
    }
  }
}
