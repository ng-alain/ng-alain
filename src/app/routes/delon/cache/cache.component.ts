import { Component, inject } from '@angular/core';
import { CacheService } from '@delon/cache';
import { SHARED_IMPORTS } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  imports: SHARED_IMPORTS
})
export class CacheComponent {
  private readonly cache = inject(CacheService);
  private readonly msg = inject(NzMessageService);

  KEY = 'user';

  set(): void {
    this.cache.set(this.KEY, +new Date());
  }

  get(): void {
    this.msg.success(this.cache.getNone(this.KEY));
  }
}
