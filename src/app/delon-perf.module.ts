/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/ng-alain/ng-alain/issues/180
 */
import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
import { throwIfAlreadyLoaded } from '@core/module-import-guard';

import { AlainThemeModule } from '@delon/theme';
import { DelonAuthModule } from '@delon/auth';
import { DelonACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';
import { DelonUtilModule } from '@delon/util';

// #region @delon/abc modules

import { STModule } from '@delon/abc/table';
import { SVModule } from '@delon/abc/view';
import { SEModule } from '@delon/abc/edit';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
import { DownFileModule } from '@delon/abc/down-file';
import { ImageModule } from '@delon/abc/image';
import { AvatarListModule } from '@delon/abc/avatar-list';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { ExceptionModule } from '@delon/abc/exception';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
import { TagSelectModule } from '@delon/abc/tag-select';
import { CountDownModule } from '@delon/abc/count-down';
// import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { FullContentModule } from '@delon/abc/full-content';
import { XlsxModule } from '@delon/abc/xlsx';
import { ZipModule } from '@delon/abc/zip';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
import { LodopModule } from '@delon/abc/lodop';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { QRModule } from '@delon/abc/qr';
import { DatePickerModule } from '@delon/abc/date-picker';
import { SGModule } from '@delon/abc/grid';

export const ABC_MODULES = [
  ErrorCollectModule,
  FooterToolbarModule,
  SidebarNavModule,
  DownFileModule,
  ImageModule,
  AvatarListModule,
  EllipsisModule,
  GlobalFooterModule,
  ExceptionModule,
  NoticeIconModule,
  PageHeaderModule,
  ResultModule,
  TagSelectModule,
  CountDownModule,
  STModule,
  // ReuseTabModule,
  FullContentModule,
  XlsxModule,
  ZipModule,
  NumberToChineseModule,
  LodopModule,
  QuickMenuModule,
  QRModule,
  SVModule,
  SEModule,
  SGModule,
  DatePickerModule,
];

const ABC_ROOT_MODULES = [
  ErrorCollectModule.forRoot(),
  FooterToolbarModule.forRoot(),
  SidebarNavModule.forRoot(),
  DownFileModule.forRoot(),
  ImageModule.forRoot(),
  AvatarListModule.forRoot(),
  EllipsisModule.forRoot(),
  GlobalFooterModule.forRoot(),
  ExceptionModule.forRoot(),
  NoticeIconModule.forRoot(),
  PageHeaderModule.forRoot(),
  ResultModule.forRoot(),
  TagSelectModule.forRoot(),
  CountDownModule.forRoot(),
  STModule.forRoot(),
  // ReuseTabModule.forRoot(),
  FullContentModule.forRoot(),
  XlsxModule.forRoot(),
  ZipModule.forRoot(),
  NumberToChineseModule.forRoot(),
  LodopModule.forRoot(),
  QuickMenuModule.forRoot(),
  QRModule.forRoot(),
  SVModule.forRoot(),
  SEModule.forRoot(),
  SGModule.forRoot(),
  DatePickerModule.forRoot(),
];

// #endregion

// #region @delon/chart modules

import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2CustomModule } from '@delon/chart/g2-custom';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
import { NumberInfoModule } from '@delon/chart/number-info';
import { TrendModule } from '@delon/chart/trend';

export const CHART_MODULES = [
  G2BarModule,
  G2CardModule,
  G2CustomModule,
  G2GaugeModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  G2PieModule,
  G2RadarModule,
  G2TagCloudModule,
  G2TimelineModule,
  G2WaterWaveModule,
  NumberInfoModule,
  TrendModule,
];

const CHART_ROOT_MODULES = [
  G2BarModule.forRoot(),
  G2CardModule.forRoot(),
  G2CustomModule.forRoot(),
  G2GaugeModule.forRoot(),
  G2MiniAreaModule.forRoot(),
  G2MiniBarModule.forRoot(),
  G2MiniProgressModule.forRoot(),
  G2PieModule.forRoot(),
  G2RadarModule.forRoot(),
  G2TagCloudModule.forRoot(),
  G2TimelineModule.forRoot(),
  G2WaterWaveModule.forRoot(),
  NumberInfoModule.forRoot(),
  TrendModule.forRoot(),
];

// #endregion

// #region ng-zorro-antd modules

// https://github.com/NG-ZORRO/ng-zorro-antd/pull/2145
import {
  //   NzButtonModule,
  //   NzCalendarModule,
  //   NzGridModule,
  //   NzSwitchModule,
  //   NzSelectModule,
  //   NzMenuModule,
  //   NzMentionModule,
  //   NzAnchorModule,
  //   NzAffixModule,
  //   NzDropDownModule,
  //   NzLayoutModule,
  //   NzBreadCrumbModule,
  //   NzPaginationModule,
  //   NzStepsModule,
  //   NzInputModule,
  //   NzCheckboxModule,
  //   NzInputNumberModule,
  //   NzSliderModule,
  //   NzRateModule,
  //   NzBadgeModule,
  //   NzRadioModule,
  //   NzAlertModule,
  //   NzSpinModule,
  //   NzProgressModule,
  //   NzTabsModule,
  //   NzCardModule,
  //   NzAvatarModule,
  //   NzTimelineModule,
  //   NzTimePickerModule,
  //   NzTransferModule,
  //   NzCarouselModule,
  //   NzCollapseModule,
  //   NzTableModule,
  //   NzDatePickerModule,
  //   NzDividerModule,
  //   NzFormModule,
  //   NzListModule,
  //   NzI18nModule,
  //   NzUploadModule,
  //   NzAutocompleteModule,
  //   NzTagModule,
  //   NzMessageModule,
  //   NzNotificationModule,
  //   NzPopoverModule,
  //   NzToolTipModule,
  //   NzPopconfirmModule,
  //   NzModalModule,
  //   NzBackTopModule,
  //   NzCascaderModule,
  //   NzTreeModule,
  //   NzTreeSelectModule,
  //   NzWaveModule,
  //   NzDrawerModule,
  NgZorroAntdModule,
} from 'ng-zorro-antd';

export const ZORRO_MODULES = [
  // NzButtonModule,
  // NzCalendarModule,
  // NzGridModule,
  // NzSwitchModule,
  // NzSelectModule,
  // NzMenuModule,
  // NzMentionModule,
  // NzAnchorModule,
  // NzAffixModule,
  // NzDropDownModule,
  // NzLayoutModule,
  // NzBreadCrumbModule,
  // NzPaginationModule,
  // NzStepsModule,
  // NzInputModule,
  // NzCheckboxModule,
  // NzInputNumberModule,
  // NzSliderModule,
  // NzRateModule,
  // NzBadgeModule,
  // NzRadioModule,
  // NzAlertModule,
  // NzSpinModule,
  // NzProgressModule,
  // NzTabsModule,
  // NzCardModule,
  // NzAvatarModule,
  // NzTimelineModule,
  // NzTimePickerModule,
  // NzTransferModule,
  // NzCarouselModule,
  // NzCollapseModule,
  // NzTableModule,
  // NzDatePickerModule,
  // NzDividerModule,
  // NzDrawerModule,
  // NzFormModule,
  // NzListModule,
  // NzI18nModule,
  // NzUploadModule,
  // NzAutocompleteModule,
  // NzTagModule,
  // NzMessageModule,
  // NzNotificationModule,
  // NzPopoverModule,
  // NzToolTipModule,
  // NzPopconfirmModule,
  // NzModalModule,
  // NzBackTopModule,
  // NzCascaderModule,
  // NzTreeModule,
  // NzTreeSelectModule,
  // NzTimePickerModule,
  // NzWaveModule,
  NgZorroAntdModule,
];

// #endregion

// #region mock

import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
import { environment } from '../environments/environment';
const MOCK_MODULES = !environment.production
  ? [DelonMockModule.forRoot({ data: MOCKDATA })]
  : [];

// #endregion

// #region reuse-tab

/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、导入 `ReuseTabModule`
 * 2、增加 `REUSETAB_PROVIDES`
 * 3、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab></reuse-tab>
 *    <router-outlet></router-outlet>
 *  </section>
 *  ```
 */
import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
const REUSETAB_PROVIDES = [
  // {
  //   provide: RouteReuseStrategy,
  //   useClass: ReuseTabStrategy,
  //   deps: [ReuseTabService],
  // },
];
// #endregion

// #region global config functions

import { PageHeaderConfig } from '@delon/abc';
export function fnPageHeaderConfig(): PageHeaderConfig {
  return Object.assign(new PageHeaderConfig(), { homeI18n: 'home' });
}

import { DelonAuthConfig } from '@delon/auth';
export function fnDelonAuthConfig(): DelonAuthConfig {
  return Object.assign(new DelonAuthConfig(), <DelonAuthConfig>{
    login_url: '/passport/login',
  });
}

const GLOBAL_CONFIG_PROVIDES = [
  { provide: PageHeaderConfig, useFactory: fnPageHeaderConfig },
  { provide: DelonAuthConfig, useFactory: fnDelonAuthConfig },
];

// #endregion

@NgModule({
  imports: [
    AlainThemeModule.forRoot(),
    ...ABC_ROOT_MODULES,
    ...CHART_ROOT_MODULES,
    DelonAuthModule.forRoot(),
    DelonACLModule.forRoot(),
    DelonCacheModule.forRoot(),
    DelonUtilModule.forRoot(),
    // mock
    ...MOCK_MODULES,
  ],
})
export class DelonModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: DelonModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'DelonModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [...REUSETAB_PROVIDES, ...GLOBAL_CONFIG_PROVIDES],
    };
  }
}
