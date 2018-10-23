import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  MenuService,
  SettingsService,
  TitleService,
  ALAIN_I18N_TOKEN,
} from '@delon/theme';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '../i18n/i18n.service';

// #region static loading icons
// @see http://ng.ant.design/components/icon/zh#%E9%9D%99%E6%80%81%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD

import { NzIconService } from 'ng-zorro-antd';
import {
  PayCircleOutline,
  PieChartOutline,
  CloudOutline,
  SoundOutline,
  ForkOutline,
  MessageOutline,
  ShareAltOutline,
  StarOutline,
  TrophyOutline,
  BookOutline,
  TeamOutline,
  ScanOutline,
  PrinterOutline,
  ToolOutline,
  DashboardOutline,
  RocketOutline,
  InfoOutline,
  BulbOutline,
  EditOutline,
  ProfileOutline,
  ExceptionOutline,
  LinkOutline,
  LikeOutline,
  DislikeOutline,
  ShoppingCartOutline,
  CustomerServiceOutline,
  LaptopOutline,
  UsbOutline,
  DatabaseOutline,
  FileOutline,
  DownloadOutline,
  DingdingOutline,
  FrownOutline,
  TaobaoOutline,
  AlipayCircleOutline,
  HddOutline,
  ApiOutline,
  CopyrightOutline,
  TaobaoCircleOutline,
  WeiboCircleOutline,
  MailOutline,
} from '@ant-design/icons-angular/icons';

const ICONS = [
  PayCircleOutline,
  PieChartOutline,
  CloudOutline,
  SoundOutline,
  ForkOutline,
  MessageOutline,
  ShareAltOutline,
  StarOutline,
  TrophyOutline,
  BookOutline,
  TeamOutline,
  ScanOutline,
  PrinterOutline,
  ToolOutline,
  DashboardOutline,
  RocketOutline,
  InfoOutline,
  BulbOutline,
  EditOutline,
  ProfileOutline,
  ExceptionOutline,
  LinkOutline,
  LikeOutline,
  DislikeOutline,
  ShoppingCartOutline,
  CustomerServiceOutline,
  LaptopOutline,
  UsbOutline,
  DatabaseOutline,
  FileOutline,
  DownloadOutline,
  DingdingOutline,
  FrownOutline,
  TaobaoOutline,
  AlipayCircleOutline,
  HddOutline,
  ApiOutline,
  CopyrightOutline,
  TaobaoCircleOutline,
  WeiboCircleOutline,
  MailOutline,
];

// #endregion

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private translate: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    private httpClient: HttpClient,
    private injector: Injector,
  ) {
    iconSrv.addIcon(...ICONS);
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      zip(
        this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`),
        this.httpClient.get('assets/tmp/app-data.json'),
      )
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError(([langData, appData]) => {
            resolve(null);
            return [langData, appData];
          }),
        )
        .subscribe(
          ([langData, appData]) => {
            // setting language data
            this.translate.setTranslation(this.i18n.defaultLang, langData);
            this.translate.setDefaultLang(this.i18n.defaultLang);

            // application data
            const res: any = appData;
            // 应用信息：包括站点名、描述、年份
            this.settingService.setApp(res.app);
            // 用户信息：包括姓名、头像、邮箱地址
            this.settingService.setUser(res.user);
            // ACL：设置权限为全量
            this.aclService.setFull(true);
            // 初始化菜单
            this.menuService.add(res.menu);
            // 设置页面标题的后缀
            this.titleService.suffix = res.app.name;
          },
          () => {},
          () => {
            resolve(null);
          },
        );
    });
  }
}
