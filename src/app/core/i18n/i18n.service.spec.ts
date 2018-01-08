import { TestBed, async, inject } from '@angular/core/testing';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { I18NService } from './i18n.service';
import { HttpLoaderFactory } from '../../app.module';
import { SettingsService } from '@delon/theme';
import { DelonModule } from '../../delon.module';
import { SharedModule } from '@shared/shared.module';

describe('Service: I18n', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                DelonModule,
                SharedModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                })
            ],
            providers: [I18NService, SettingsService]
        });
    });

    it('should create an instance', inject([I18NService], (service: I18NService) => {
        expect(service).toBeTruthy();
    }));
});
