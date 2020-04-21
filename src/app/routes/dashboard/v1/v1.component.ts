import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import format from 'date-fns/format';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardV1Component implements OnInit {
  todoData: any[] = [
    {
      completed: true,
      avatar: '1',
      name: '苏先生',
      content: `请告诉我，我应该说点什么好？`,
    },
    {
      completed: false,
      avatar: '2',
      name: 'はなさき',
      content: `ハルカソラトキヘダツヒカリ`,
    },
    {
      completed: false,
      avatar: '3',
      name: 'cipchk',
      content: `this world was never meant for one as beautiful as you.`,
    },
    {
      completed: false,
      avatar: '4',
      name: 'Kent',
      content: `my heart is beating with hers`,
    },
    {
      completed: false,
      avatar: '5',
      name: 'Are you',
      content: `They always said that I love beautiful girl than my friends`,
    },
    {
      completed: false,
      avatar: '6',
      name: 'Forever',
      content: `Walking through green fields ，sunshine in my eyes.`,
    },
  ];

  webSite: any[];
  salesData: any[];
  offlineChartData: any[];

  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get('/chart').subscribe((res: any) => {
      this.webSite = res.visitData.slice(0, 10);
      this.salesData = res.salesData;
      this.offlineChartData = [];
      for (let i = 0; i < 100; i += 1) {
        this.offlineChartData.push({
          time: format(new Date().getTime() + 1000 * 60 * i, 'yyyy-MM-dd HH:mm'),
          y1: Math.floor(Math.random() * 100) + 1000,
          y2: Math.floor(Math.random() * 100) + 10,
        });
      }
      // this.offlineChartData = res.offlineChartData;
      console.log(this.offlineChartData);
      this.cdr.detectChanges();
    });
  }
}
