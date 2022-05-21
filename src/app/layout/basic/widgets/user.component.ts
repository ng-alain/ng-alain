import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { SettingsService, User } from '@delon/theme';
import { Store } from '@ngxs/store';
import { SocialAuthService } from 'angularx-social-login';
import { Logout } from 'src/app/core/store/global.action';

@Component({
  selector: 'header-user',
  template: `
    <div class="alain-default__nav-item d-flex align-items-center px-sm" nz-dropdown nzPlacement="bottomRight" [nzDropdownMenu]="userMenu">
      <nz-avatar nzIcon="user" nzSize="small" class="mr-sm"></nz-avatar>
      {{ user['emailAddress'] }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'menu.account.logout' | i18n }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderUserComponent {
  get user(): User {
    return this.settings.user;
  }

  constructor(
    private socialAuthService: SocialAuthService,
    private settings: SettingsService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private store: Store
  ) {}

  logout(): void {
    this.socialAuthService.signOut().then(() => {
      this.tokenService.clear();
      this.store.dispatch(new Logout()).subscribe(() => {
        this.router.navigateByUrl(this.tokenService.login_url!);
      });
    });
  }
}
