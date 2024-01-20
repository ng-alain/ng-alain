import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CountDownModule } from '@delon/abc/count-down';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2PieModule } from '@delon/chart/pie';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
import { _HttpClient } from '@delon/theme';
import { SHARED_IMPORTS } from '@shared';
import type { CountdownConfig } from 'ngx-countdown';
import { zip } from 'rxjs';

@Component({
  selector: 'app-dashboard-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ...SHARED_IMPORTS,
    G2WaterWaveModule,
    G2TagCloudModule,
    G2PieModule,
    G2GaugeModule,
    G2MiniAreaModule,
    NumberInfoModule,
    CountDownModule
  ]
})
export class DashboardMonitorComponent implements OnInit, OnDestroy {
  private readonly http = inject(_HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);

  data: any = {};
  tags = [];
  loading = true;
  q = {
    start: null,
    end: null
  };
  percent: number | null = null;
  cd: CountdownConfig = {
    format: `HH:mm:ss.S`,
    leftTime: 10000
  };

  // region: active chart

  activeTime$: any;

  activeData!: any[];

  activeStat = {
    max: 0,
    min: 0,
    t1: '',
    t2: ''
  };

  ngOnInit(): void {
    zip(this.http.get('/chart'), this.http.get('/chart/tags')).subscribe(([res, tags]: [any, any]) => {
      this.data = res;
      tags.list[Math.floor(Math.random() * tags.list.length) + 1].value = 1000;
      this.tags = tags.list;
      this.loading = false;
      this.cdr.detectChanges();
    });

    // active chart
    this.refData();
    this.activeTime$ = setInterval(() => this.refData(), 1000 * 2);
  }

  refData(): void {
    const activeData: any[] = [];
    for (let i = 0; i < 24; i += 1) {
      activeData.push({
        x: `${i.toString().padStart(2, '0')}:00`,
        y: i * 50 + Math.floor(Math.random() * 200)
      });
    }
    this.activeData = activeData;
    // stat
    this.activeStat.max = [...activeData].sort()[activeData.length - 1].y + 200;
    this.activeStat.min = [...activeData].sort()[Math.floor(activeData.length / 2)].y;
    this.activeStat.t1 = activeData[Math.floor(activeData.length / 2)].x;
    this.activeStat.t2 = activeData[activeData.length - 1].x;
    // percent
    this.percent = Math.floor(Math.random() * 100);
    this.cdr.detectChanges();
  }

  // endregion

  couponFormat(val: any): string {
    switch (parseInt(val, 10)) {
      case 20:
        return '差';
      case 40:
        return '中';
      case 60:
        return '良';
      case 80:
        return '优';
      default:
        return '';
    }
  }

  ngOnDestroy(): void {
    if (this.activeTime$) {
      clearInterval(this.activeTime$);
    }
  }
}
