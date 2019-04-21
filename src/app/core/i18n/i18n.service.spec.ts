import { TestBed, TestBedStatic } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService, DelonLocaleService } from '@delon/theme';
import { NzI18nService } from 'ng-zorro-antd';
import { of } from 'rxjs';

import { I18NService } from './i18n.service';

describe('Service: I18n', () => {
  let injector: TestBedStatic;
  let srv: I18NService;
  const MockSettingsService = {
    layout: {
      lang: null,
    },
  };
  const MockNzI18nService = {
    setLocale: () => {},
  };
  const MockDelonLocaleService = {
    setLocale: () => {},
  };
  const MockTranslateService = {
    getBrowserLang: jasmine.createSpy('getBrowserLang'),
    addLangs: () => {},
    setLocale: () => {},
    getDefaultLang: () => '',
    use: () => of(),
    instant: jasmine.createSpy('instant'),
  };

  function genModule() {
    injector = TestBed.configureTestingModule({
      providers: [
        I18NService,
        { provide: SettingsService, useValue: MockSettingsService },
        { provide: NzI18nService, useValue: MockNzI18nService },
        { provide: DelonLocaleService, useValue: MockDelonLocaleService },
        { provide: TranslateService, useValue: MockTranslateService },
      ],
    });
    srv = injector.get(I18NService);
  }

  it('should working', () => {
    genModule();
    expect(srv).toBeTruthy();
    expect(srv.defaultLang).toBe('zh-CN');
    srv.fanyi('a');
    srv.fanyi('a', {});
    const t = injector.get(TranslateService) as TranslateService;
    expect(t.instant).toHaveBeenCalled();
  });

  it('should be used layout as default language', () => {
    MockSettingsService.layout.lang = 'en-US';
    genModule();
    expect(srv.defaultLang).toBe('en-US');
    MockSettingsService.layout.lang = null;
  });

  it('should be used browser as default language', () => {
    MockTranslateService.getBrowserLang.and.returnValue('zh-TW');
    genModule();
    expect(srv.defaultLang).toBe('zh-TW');
  });

  it('should be trigger notify when changed language', () => {
    genModule();
    srv.use('en-US');
    srv.change.subscribe(lang => {
      expect(lang).toBe('en-US');
    });
  });
});
