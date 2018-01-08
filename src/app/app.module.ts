import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { StartupService } from './core/services/startup.service';
import { DefaultInterceptor } from '@core/net/default.interceptor';
import { AlainAuthModule, SimpleInterceptor } from '@delon/auth';
<<<<<<< HEAD
=======
// acl
import { AlainACLModule } from '@delon/acl';
// cache
import { DelonCacheModule } from '@delon/cache';
>>>>>>> f4278f4... feat: add cache demo page

// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
import { environment } from '../environments/environment';
const MOCKMODULE = !environment.production || environment.chore === true ?
                    [ DelonMockModule.forRoot({ data: MOCKDATA }) ] : [];

// i18n
import { I18NService } from './core/i18n/i18n.service';
import { ALAIN_I18N_TOKEN } from '@delon/theme';

import { registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
registerLocaleData(localeZhHans);

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

export function StartupServiceFactory(startupService: StartupService): Function {
    return () => startupService.load();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        CoreModule,
        LayoutModule,
        RoutesModule,
        // mock
        ...MOCKMODULE,
        // auth
        AlainAuthModule.forRoot({
            // ignores: [ `\\/login`, `assets\\/` ],
            login_url: `/passport/login`
        }),
<<<<<<< HEAD
=======
        // acl
        AlainACLModule.forRoot(),
        // cache
        DelonCacheModule.forRoot(),
>>>>>>> f4278f4... feat: add cache demo page
        // i18n
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'zh-Hans' },
        { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true},
        { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
        { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false },
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [StartupService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
