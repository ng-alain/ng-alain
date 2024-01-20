import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list-layout',
  templateUrl: './list.component.html'
})
export class ProListLayoutComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly d$ = inject(DestroyRef);

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

  private setActive(): void {
    const key = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) {
      this.pos = idx;
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntilDestroyed(this.d$),
        filter(e => e instanceof ActivationEnd)
      )
      .subscribe(() => this.setActive());
    this.setActive();
  }

  to(item: { key: string }): void {
    this.router.navigateByUrl(`/pro/list/${item.key}`);
  }
}
