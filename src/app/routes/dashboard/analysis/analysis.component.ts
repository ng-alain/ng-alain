import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { STColumn, STData } from '@delon/abc/st';
import { G2BarData, G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2PieData, G2PieModule } from '@delon/chart/pie';
import { G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { TrendModule } from '@delon/chart/trend';
import { ALAIN_I18N_TOKEN, _HttpClient } from '@delon/theme';
import { getTimeDistance } from '@delon/util/date-time';
import { deepCopy } from '@delon/util/other';
import { SHARED_IMPORTS, yuan } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dashboard-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...SHARED_IMPORTS,
    G2TimelineModule,
    G2PieModule,
    NumberInfoModule,
    TrendModule,
    G2MiniAreaModule,
    DecimalPipe,
    G2BarModule,
    G2MiniProgressModule,
    G2CardModule,
    G2MiniBarModule
  ]
})
export class DashboardAnalysisComponent implements OnInit {
  private readonly dateTypeOptions = ['today', 'week', 'month', 'year'] as const;

  private readonly http = inject(_HttpClient);
  readonly msg = inject(NzMessageService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly cdr = inject(ChangeDetectorRef);

  data: {
    salesTypeData?: G2MiniAreaData[];
    salesTypeDataOnline?: G2MiniAreaData[];
    salesTypeDataOffline?: G2MiniAreaData[];
    visitData?: G2MiniAreaData[];
    visitData2?: G2MiniAreaData[];
    searchData?: STData[];
    salesData?: G2BarData[];
    offlineData?: Array<{ name: string; cvr: number; chart: G2TimelineData[]; show?: boolean }>;
  } = {};
  loading = true;
  dateRange: Date[] = [];
  dateRangeTypes = [...this.dateTypeOptions];
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
  salesPieData?: G2PieData[];
  salesTotal = 0;

  saleTabs: string[] = ['sales', 'visits'];

  offlineIdx = 0;

  ngOnInit(): void {
    this.http.get('/chart').subscribe(res => {
      res.offlineData.forEach((item: { chart: unknown }) => {
        item.chart = deepCopy(res.offlineChartData);
      });
      this.data = res;
      this.loading = false;
      this.changeSaleType();
    });
  }

  setDate(type: (typeof this.dateTypeOptions)[number]): void {
    this.dateRange = getTimeDistance(type);
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
  offlineChange(idx: number): void {
    const item = this.data.offlineData?.[idx];
    if (item && item.show !== true) {
      item.show = true;
      this.cdr.detectChanges();
    }
  }
}
