import { Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styles: [],
})
export class CacheComponent implements OnInit {
  KEY = 'user';

  constructor(private cache: CacheService, private msg: NzMessageService) {}

  ngOnInit() {}

  set() {
    this.cache.set(this.KEY, +new Date());
  }

  get() {
    this.msg.success(this.cache.getNone(this.KEY));
  }
}
