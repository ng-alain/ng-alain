import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-list-layout',
  templateUrl: './list.component.html'
})
export class ProListLayoutComponent implements OnInit, OnDestroy {
  private router$!: Subscription;
  tabs = [
    {
      key: 'articles',
      tab: '文章'
    },
    {
      key: 'applications',
      tab: '应用'
    },
    {
      key: 'projects',
      tab: '项目'
    }
  ];

  pos = 0;

  constructor(private router: Router) {}

  private setActive(): void {
    const key = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) {
      this.pos = idx;
    }
  }

  ngOnInit(): void {
    this.router$ = this.router.events.pipe(filter(e => e instanceof ActivationEnd)).subscribe(() => this.setActive());
    this.setActive();
  }

  to(item: { key: string }): void {
    this.router.navigateByUrl(`/pro/list/${item.key}`);
  }

  ngOnDestroy(): void {
    this.router$.unsubscribe();
  }
}
