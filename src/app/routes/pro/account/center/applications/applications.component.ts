import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-account-center-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProAccountCenterApplicationsComponent {
  private readonly http = inject(_HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);

  listLoading = true;
  list: any[] = [];
  constructor() {
    this.http.get('/api/list', { count: 8 }).subscribe((res: NzSafeAny[]) => {
      this.list = res.map(item => {
        item.activeUser = this.formatWan(item.activeUser);
        return item;
      });
      this.listLoading = false;
      this.cdr.detectChanges();
    });
  }

  private formatWan(val: number): string {
    const v = val * 1;
    if (!v || isNaN(v)) {
      return '';
    }

    let result: string | number = val;
    if (val > 10000) {
      result = Math.floor(val / 10000);
      result = `${result}`;
    }
    return result.toString();
  }
}
