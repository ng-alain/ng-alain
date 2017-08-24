import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from "@angular/common/http";

import { CoreModule } from './core/core.module';
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from './app.component';
import { RoutesModule } from "./routes/routes.module";
import { LayoutModule } from "./layout/layout.module";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
        // code see: https://github.com/unicode-cldr/cldr-core/blob/master/availableLocales.json
        { provide: LOCALE_ID, useValue: 'zh-Hans' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
