import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';
import { _HttpClient } from '@delon/theme';
import { SHARED_IMPORTS } from '@shared';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [...SHARED_IMPORTS, NzCarouselModule, G2MiniBarModule, G2MiniAreaModule]
})
export class WidgetsComponent implements OnInit {
  readonly msg = inject(NzMessageService);
  private readonly http = inject(_HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);

  data: G2MiniBarData[] = [];
  smallData: G2MiniBarData[] = [];
  todoData: Array<{ completed: boolean; avatar: string; name: string; content: string }> = [
    {
      completed: true,
      avatar: '1',
      name: '苏先生',
      content: `请告诉我，我应该说点什么好？`
    },
    {
      completed: false,
      avatar: '2',
      name: 'はなさき',
      content: `ハルカソラトキヘダツヒカリ`
    },
    {
      completed: false,
      avatar: '3',
      name: 'cipchk',
      content: `this world was never meant for one as beautiful as you.`
    },
    {
      completed: false,
      avatar: '4',
      name: 'Kent',
      content: `my heart is beating with hers`
    },
    {
      completed: false,
      avatar: '5',
      name: 'Are you',
      content: `They always said that I love beautiful girl than my friends`
    },
    {
      completed: false,
      avatar: '6',
      name: 'Forever',
      content: `Walking through green fields ，sunshine in my eyes.`
    }
  ];
  like = false;
  dislike = false;

  ngOnInit(): void {
    this.http.get('/chart/visit').subscribe((res: G2MiniBarData[]) => {
      this.data = res;
      this.smallData = res.slice(0, 6);
      this.cdr.detectChanges();
    });
  }
}
