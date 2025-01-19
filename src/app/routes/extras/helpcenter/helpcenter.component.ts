import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.component.html',
  imports: SHARED_IMPORTS
})
export class HelpCenterComponent {
  readonly msg = inject(NzMessageService);
  type = '';
  q = '';

  quick(key: string): void {
    this.q = key;
    this.search();
  }

  search(): void {
    this.msg.success(`搜索：${this.q}`);
  }
}
