import { Component, ElementRef, Inject, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { environment } from '@env/environment';
import { Store } from '@ngxs/store';
import { UserIdleService } from 'angular-user-idle';
import { SocialAuthService } from 'angularx-social-login';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { finalize, Subscription, tap } from 'rxjs';

import { AppConstant } from './app.constant';
import { I18NService } from './core/i18n/i18n.service';
import { Logout } from './core/store/global.action';
import { GlobalState } from './core/store/global.state';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>
    <ng-template #modalTpl>
      <div class="ant-notification-notice-description">{{ 'logout.alert.body' | i18n }}</div>
      <div class="ant-notification-notice-description">
        {{ 'logout.alert.countdown' | i18n }}&nbsp;
        <strong>{{ timeoutCountdown | minute }}</strong>
      </div>
    </ng-template>`
})
export class AppComponent implements OnInit {
  @ViewChild('modalTpl', { static: false }) modalTpl!: TemplateRef<any>;

  isModalOpened = false;
  timeoutCountdown = 0;
  $timer!: Subscription;

  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
    private userIdle: UserIdleService,
    private i18nService: I18NService,
    private store: Store,
    private socialAuthService: SocialAuthService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
  }

  ngOnInit(): void {
    let configLoad = false;
    this.router.events.subscribe(ev => {
      if (ev instanceof RouteConfigLoadStart) {
        configLoad = true;
      }
      if (configLoad && ev instanceof NavigationError) {
        this.modalSrv.confirm({
          nzTitle: `Reminder`,
          nzContent: environment.production
            ? `A new version of the application may have been released, please click refresh to take effect.`
            : `Could not load route: ${ev.url}`,
          nzCancelDisabled: false,
          nzOkText: 'Refresh',
          nzCancelText: 'Ignore',
          nzOnOk: () => location.reload()
        });
      }
      if (ev instanceof NavigationEnd) {
        this.titleSrv.setTitle();
        this.modalSrv.closeAll();
      }
    });
  }

  initWatcher() {
    this.store.select(GlobalState.getUser).subscribe(value => {
      if (!!value) {
        this.userIdle.resetTimer();
        // Start watching for user inactivity.
        this.userIdle.startWatching();

        this.$timer = this.userIdle.onTimerStart().subscribe(count => {
          if (!!count) {
            this.timeoutCountdown = AppConstant.TIMEOUT_SECONDS - count;
            this.toggleTimerCountDownModal();
          }
        });

        // Trigger timeout when time is up.
        this.userIdle.onTimeout().subscribe(() => this.logout());
      } else {
        this.userIdle.stopWatching();
      }
    });
  }

  toggleTimerCountDownModal() {
    if (this.isModalOpened) {
      return;
    }
    this.isModalOpened = true;

    this.modalSrv.create({
      nzTitle: this.i18nService.fanyi('logout.alert.header'),
      nzContent: this.modalTpl,
      nzMaskClosable: false,
      nzClosable: false,
      nzOkText: this.i18nService.fanyi('continue'),
      nzCancelText: this.i18nService.fanyi('menu.account.logout'),
      nzOnOk: () => {
        this.userIdle.resetTimer();
        this.isModalOpened = false;
      },
      nzOnCancel: () => this.logout()
    });
  }

  logout() {
    new Promise(() => {
      this.socialAuthService
        .signOut()
        .then(() => {
          this.store
            .dispatch(new Logout())
            .pipe(
              finalize(() => {
                // Stop watching
                this.userIdle.stopTimer();
                this.userIdle.stopWatching();
                this.$timer.unsubscribe();
                this.isModalOpened = false;
              })
            )
            .subscribe(() => {
              this.tokenService.clear();
              this.router.navigateByUrl(this.tokenService.login_url!).then();
            });
        })
        .then();
    });
  }
}
