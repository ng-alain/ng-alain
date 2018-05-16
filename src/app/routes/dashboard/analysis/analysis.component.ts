import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SimpleTableColumn } from '@delon/abc';
import { getTimeDistance, yuan } from '@delon/util';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less'],
})
export class DashboardAnalysisComponent implements OnInit {
  data: any = {
    salesData: [],
    offlineData: [],
  };
  loading = true;
  date_range: Date[] = [];
  rankingListData: any[] = Array(7)
    .fill({})
    .map((item, i) => {
      return {
        title: `工专路 ${i} 号店`,
        total: 323234,
      };
    });
  searchColumn: SimpleTableColumn[] = [
    { title: '排名', index: 'index' },
    {
      title: '搜索关键词',
      index: 'keyword',
      click: (item: any) => this.msg.success(item.keyword),
    },
    {
      type: 'number',
      title: '用户数',
      index: 'count',
      sorter: (a, b) => a.count - b.count,
    },
    {
      type: 'number',
      title: '周涨幅',
      index: 'range',
      render: 'range',
      sorter: (a, b) => a.range - b.range,
    },
  ];

  constructor(private http: _HttpClient, public msg: NzMessageService) {}

  ngOnInit() {
    this.http.get('/chart').subscribe((res: any) => {
      res.offlineData.forEach((item: any) => {
        item.chart = Object.assign([], res.offlineChartData);
      });
      this.data = res;
      this.loading = false;
      this.changeSaleType();
    });
  }

  setDate(type: any) {
    this.date_range = getTimeDistance(type);
  }

  salesType = 'all';
  salesPieData: any;
  salesTotal = 0;
  changeSaleType() {
    this.salesPieData =
      this.salesType === 'all'
        ? this.data.salesTypeData
        : this.salesType === 'online'
          ? this.data.salesTypeDataOnline
          : this.data.salesTypeDataOffline;
    if (this.salesPieData)
      this.salesTotal = this.salesPieData.reduce((pre, now) => now.y + pre, 0);
  }

  handlePieValueFormat(value: any) {
    return yuan(value);
  }

  _activeTab = 0;
  _tabChange(value: any) {
    console.log('tab', this._activeTab, value);
  }
}
