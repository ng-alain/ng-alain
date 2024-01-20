import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { Subscription, zip, filter } from 'rxjs';

@Component({
  selector: 'app-account-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProAccountCenterComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly http = inject(_HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);

  private router$!: Subscription;
  @ViewChild('tagInput', { static: false }) private tagInput!: ElementRef<HTMLInputElement>;
  user: any;
  notice: any;
  tabs = [
    {
      key: 'articles',
      tab: '文章 (8)'
    },
    {
      key: 'applications',
      tab: '应用 (8)'
    },
    {
      key: 'projects',
      tab: '项目 (8)'
    }
  ];
  pos = 0;
  taging = false;
  tagValue = '';

  private setActive(): void {
    const key = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) {
      this.pos = idx;
    }
  }

  ngOnInit(): void {
    zip(this.http.get('/user/current'), this.http.get('/api/notice')).subscribe(([user, notice]) => {
      this.user = user;
      this.notice = notice;
      this.cdr.detectChanges();
    });
    this.router$ = this.router.events.pipe(filter(e => e instanceof ActivationEnd)).subscribe(() => this.setActive());
    this.setActive();
  }

  to(item: { key: string }): void {
    this.router.navigateByUrl(`/pro/account/center/${item.key}`);
  }
  tagShowIpt(): void {
    this.taging = true;
    this.cdr.detectChanges();
    this.tagInput.nativeElement.focus();
  }

  tagBlur(): void {
    const { user, cdr, tagValue } = this;
    if (tagValue && user.tags.filter((tag: { label: string }) => tag.label === tagValue).length === 0) {
      user.tags.push({ label: tagValue });
    }
    this.tagValue = '';
    this.taging = false;
    cdr.detectChanges();
  }

  tagEnter(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.tagBlur();
    }
  }

  ngOnDestroy(): void {
    this.router$.unsubscribe();
  }
}
