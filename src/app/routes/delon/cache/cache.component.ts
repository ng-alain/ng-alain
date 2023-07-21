import { Component } from '@angular/core';
import { CacheService } from '@delon/cache';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html'
})
export class CacheComponent {
  KEY = 'user';

  constructor(
    private cache: CacheService,
    private msg: NzMessageService
  ) {}

  set(): void {
    this.cache.set(this.KEY, +new Date());
  }

  get(): void {
    this.msg.success(this.cache.getNone(this.KEY));
  }
}
