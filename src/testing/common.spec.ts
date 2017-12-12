// from: https://github.com/angular/angular/issues/12409

import { TestBed, async, TestModuleMetadata } from '@angular/core/testing';
import { Type, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app/app.module';
import { HttpClient } from '@angular/common/http';
import { ALAIN_I18N_TOKEN, ColorsService, SettingsService, MenuService, ScrollService, _HttpClient, ALAIN_THEME_OPTIONS } from '@delon/theme';
import { I18NService } from '@core/i18n/i18n.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';

const resetTestingModule = TestBed.resetTestingModule,
      preventAngularFromResetting = () => TestBed.resetTestingModule = () => TestBed;
const allowAngularToReset = () => TestBed.resetTestingModule = resetTestingModule;

export const setUpTestBed = (moduleDef: TestModuleMetadata) => {
    beforeAll(done => (async () => {
        resetTestingModule();
        preventAngularFromResetting();

        // region: schemas
        if (!moduleDef.schemas) moduleDef.schemas = [];
        moduleDef.schemas.push(CUSTOM_ELEMENTS_SCHEMA);
        // endregion

        // region: imports
        if (!moduleDef.imports) moduleDef.imports = [];
        moduleDef.imports.push(RouterTestingModule);
        moduleDef.imports.push(SharedModule.forRoot());
        moduleDef.imports.push(TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        }));
        // endregion

        // region: providers
        if (!moduleDef.providers) moduleDef.providers = [];
        moduleDef.providers.push({ provide: ALAIN_THEME_OPTIONS, useValue: {} });
        moduleDef.providers.push({ provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false });
        // load full services
        [ SettingsService, MenuService, ScrollService, ColorsService, _HttpClient ].forEach((item: any) => {
            if (moduleDef.providers.includes(item)) return;
            moduleDef.providers.push(item);
        });
        // endregion

        TestBed.configureTestingModule(moduleDef);
        await TestBed.compileComponents();

        // prevent Angular from resetting testing module
        TestBed.resetTestingModule = () => TestBed;
    })().then(done).catch(done.fail));

    afterAll(() => allowAngularToReset());
};

/**
 * get service instance
 */
export const getService = <T>(type: Type<T>): T => <T>TestBed.get(type);
