import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list-card-list',
  templateUrl: './card-list.component.html',
  styles: [
    `
      :host ::ng-deep .ant-card-meta-title {
        margin-bottom: 12px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProCardListComponent implements OnInit {
  list: any[] = [null];

  loading = true;

  constructor(private http: _HttpClient, public msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loading = true;
    this.http.get('/api/list', { count: 8 }).subscribe((res: any) => {
      this.list = this.list.concat(res);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
