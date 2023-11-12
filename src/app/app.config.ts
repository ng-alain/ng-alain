import { provideHttpClient } from '@angular/common/http';
import { default as ngLang } from '@angular/common/locales/zh';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withHashLocation, RouterFeatures } from '@angular/router';
import { I18NService, provideDefaultInterceptor, provideStartup } from '@core';
import { provideCellWidgets } from '@delon/abc/cell';
import { provideSTWidgets } from '@delon/abc/st';
import { provideAuth, withSimple } from '@delon/auth';
import { provideSFConfig } from '@delon/form';
import { AlainProvideLang, provideAlain, zh_CN as delonLang } from '@delon/theme';
import { AlainConfig } from '@delon/util/config';
import { environment } from '@env/environment';
import { CELL_WIDGETS, ST_WIDGETS } from '@shared';
import { zhCN as dateLang } from 'date-fns/locale';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { ICONS } from 'src/style-icons';
import { ICONS_AUTO } from 'src/style-icons-auto';

import { routes } from './routes/routes';

const defaultLang: AlainProvideLang = {
  abbr: 'zh-CN',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang
};

const alainConfig: AlainConfig = {
  st: { modal: { size: 'lg' } },
  pageHeader: { homeI18n: 'home' },
  lodop: {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`
  },
  auth: { login_url: '/passport/login' }
};

const ngZorroConfig: NzConfig = {};

const routerFeatures: RouterFeatures[] = [withComponentInputBinding(), withInMemoryScrolling({ scrollPositionRestoration: 'top' })];
if (environment.useHash) routerFeatures.push(withHashLocation());

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes, ...routerFeatures),
    provideAlain({ config: alainConfig, defaultLang, i18nClass: I18NService, icons: [...ICONS_AUTO, ...ICONS] }),
    provideNzConfig(ngZorroConfig),
    provideAuth(withSimple()),
    provideCellWidgets(...CELL_WIDGETS),
    provideSTWidgets(...ST_WIDGETS),
    provideSFConfig({
      widgets: [
        // withUploadWidget()
      ]
    }),
    provideStartup(),
    provideDefaultInterceptor(),
    ...(environment.providers || [])
  ]
};
