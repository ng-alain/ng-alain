import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingsService, User } from '@delon/theme';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { environment } from '@env/environment';

@Component({
  selector: 'layout-basic',
  template: `
    <layout-default [options]="options" [content]="contentTpl" [customError]="null">
      <layout-default-header-item direction="left">
        <div layout-default-header-item-trigger (click)="searchToggleStatus = !searchToggleStatus">
          <div class="app-header">Order Bot</div>
        </div>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <header-user></header-user>
      </layout-default-header-item>

      <ng-template #contentTpl>
        <router-outlet></router-outlet>
      </ng-template>
    </layout-default>

    <!-- <setting-drawer *ngIf="showSettingDrawer"></setting-drawer> -->
    <!-- <theme-btn></theme-btn> -->
  `
})
export class LayoutBasicComponent {
  options: LayoutDefaultOptions = {
    // logoExpanded: `./assets/logo-full.svg`,
    // logoCollapsed: `./assets/logo.svg`
    logoFixWidth: 0
  };
  searchToggleStatus = false;
  // showSettingDrawer = !environment.production;
  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService, private route: ActivatedRoute) {
    // this.route.data.subscribe(params => console.log(params));
  }
}
