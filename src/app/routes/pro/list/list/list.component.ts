import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list-layout',
  templateUrl: './list.component.html',
})
export class ProListLayoutComponent implements OnInit {
  tabs: any[] = [
    {
      key: 'articles',
      tab: '文章',
    },
    {
      key: 'applications',
      tab: '应用',
    },
    {
      key: 'projects',
      tab: '项目',
    },
  ];

  pos = 0;

  constructor(private router: Router) {}

  private setActive() {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) this.pos = idx;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof ActivationEnd))
      .subscribe(() => this.setActive());
    this.setActive();
  }

  to(item: any) {
    this.router.navigateByUrl(`/pro/list/${item.key}`);
  }
}
