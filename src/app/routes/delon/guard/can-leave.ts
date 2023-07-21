import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';

import { GuardComponent } from './guard.component';

export const canLeave: CanDeactivateFn<GuardComponent> = (): Observable<boolean> => {
  const srv = inject(NzModalService);
  return new Observable(observer => {
    srv.confirm({
      nzTitle: '确认要离开吗？',
      nzContent: '你已经填写了部分表单离开会放弃已经填写的内容。',
      nzOkText: '离开',
      nzCancelText: '取消',
      nzOnOk: () => {
        observer.next(true);
        observer.complete();
      },
      nzOnCancel: () => {
        observer.next(false);
        observer.complete();
      }
    });
  });
};
