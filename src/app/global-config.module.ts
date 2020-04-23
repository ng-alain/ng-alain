import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '@core';

// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

import { DelonACLModule } from '@delon/acl';
import { AlainConfig, AlainThemeModule, ALAIN_CONFIG } from '@delon/theme';

// #region mock
import { DelonMockModule } from '@delon/mock';
import { environment } from '@env/environment';
import * as MOCKDATA from '../../_mock';
const alainMockModues = !environment.production ? [DelonMockModule.forRoot({ data: MOCKDATA })] : [];
// #endregion

// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、增加 `REUSETAB_PROVIDES`
 * 2、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab></reuse-tab>
 *    <router-outlet></router-outlet>
 *  </section>
 *  ```
 */
// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
const alainReusetabProvides = [
  // {
  //   provide: RouteReuseStrategy,
  //   useClass: ReuseTabStrategy,
  //   deps: [ReuseTabService],
  // },
];
// #endregion

import { DelonAuthConfig } from '@delon/auth';
export function fnDelonAuthConfig(): DelonAuthConfig {
  return {
    ...new DelonAuthConfig(),
    login_url: '/passport/login',
  };
}

const alainConfig: AlainConfig = {
  st: { modal: { size: 'lg' } },
  pageHeader: { homeI18n: 'home' },
  lodop: {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`,
  },
  chart: { theme: 'dark' },
};

const alainModules = [AlainThemeModule.forRoot(), DelonACLModule.forRoot(), ...alainMockModues];

const alainProvides = [
  ...alainReusetabProvides,
  { provide: ALAIN_CONFIG, useValue: alainConfig },
  { provide: DelonAuthConfig, useFactory: fnDelonAuthConfig },
];

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

@NgModule({
  imports: [...alainModules],
})
export class GlobalConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: GlobalConfigModule) {
    throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides, ...zorroProvides],
    };
  }
}
