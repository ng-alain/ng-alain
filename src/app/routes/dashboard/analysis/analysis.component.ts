import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { getTimeDistance, yuan } from '@delon/abc';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-dashboard-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.less']
})
export class DashboardAnalysisComponent implements OnInit {
    data: any = {
        salesData: [],
        offlineData: []
    };
    loading = true;
    q: any = {
        start: null,
        end: null
    };
    rankingListData: any[] = Array(7).fill({}).map((item, i) => {
        return {
            title: `工专路 ${i} 号店`,
            total: 323234
        };
    });

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
        const rank = getTimeDistance(type);
        this.q.start = rank[0];
        this.q.end = rank[1];
    }

    sort(sortName, sortValue) {
        this.data.searchData = [
            ...(<any[]>this.data.searchData).sort((a, b) => {
                if (a[ sortName ] > b[ sortName ]) {
                    return (sortValue === 'ascend') ? 1 : -1;
                } else if (a[ sortName ] < b[ sortName ]) {
                    return (sortValue === 'ascend') ? -1 : 1;
                } else {
                    return 0;
                }
            })
        ];
    }

    salesType = 'all';
    salesPieData: any;
    salesTotal = 0;
    changeSaleType() {
        this.salesPieData = this.salesType === 'all' ? this.data.salesTypeData : (
            this.salesType === 'online' ? this.data.salesTypeDataOnline : this.data.salesTypeDataOffline
        );
        if (this.salesPieData) this.salesTotal = this.salesPieData.reduce((pre, now) => now.y + pre, 0);
    }

    handlePieValueFormat(value: any) {
        return yuan(value);
    }

    _activeTab = 0;
    _tabChange(value: any) {
        console.log('tab', this._activeTab, value);
    }
}
