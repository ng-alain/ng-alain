import { SharedModule } from '@shared/shared.module';
import { TestBed, async, inject } from '@angular/core/testing';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslatorService } from './translator.service';
import { HttpLoaderFactory } from '../../app.module';
import { SettingsService } from '../services/settings.service';

describe('Service: Translator', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                SharedModule.forRoot(),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (HttpLoaderFactory),
                        deps: [HttpClient]
                    }
                })
            ],
            providers: [TranslatorService, SettingsService]
        });
    });

    it('should create an instance', inject([TranslatorService], (service: TranslatorService) => {
        expect(service).toBeTruthy();
    }));
});
